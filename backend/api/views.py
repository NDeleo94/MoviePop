from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework import status
from rest_framework import viewsets

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from backend.api.serializers import *
from backend.api.views import *
from backend.authentication_mixin import Authentication


class MethodBaseViewSet:
    """Clase Base con el metodo de eliminacion logica"""

    elemento = None

    def destroy(self, request, pk=None):
        """Metodo de eliminacion logica"""
        element = self.get_queryset().filter(id=pk).first()
        if element:
            element.is_active = False
            element.save()
            return Response(
                {"message": f"{self.elemento} eliminado correctamente!"},
                status=status.HTTP_200_OK,
            )
        Response({"error": "No existe el elemento"}, status=status.HTTP_400_BAD_REQUEST)


class UserViewSet(Authentication, MethodBaseViewSet, viewsets.ModelViewSet):
    """ModelViewSet de Usuario"""

    elemento = "Usuario"
    serializer_class = UserSerializer
    queryset = UserSerializer.Meta.model.objects.filter(is_active=True)


class MovieViewSet(MethodBaseViewSet, viewsets.ModelViewSet):
    """ModelViewSet de Pelicula"""

    elemento = "Pelicula"
    serializer_class = MovieSerializer
    queryset = MovieSerializer.Meta.model.objects.filter(is_active=True)

    def retrieve(self, request, pk=None):
        """Detalle de pelicula con contenido de comentarios"""
        queryset = Movie.objects.filter(is_active=True)
        movie = get_object_or_404(queryset, pk=pk)
        movie_serializer = MovieWithCommentsSerializer(movie)
        return Response(movie_serializer.data, status=status.HTTP_200_OK)


class CommentViewSet(MethodBaseViewSet, viewsets.ModelViewSet):
    """ModelViewSet de Comentario"""

    elemento = "Comentario"
    serializer_class = CommentSerializer
    queryset = CommentSerializer.Meta.model.objects.filter(is_active=True)


class FavoritesViewSet(MethodBaseViewSet, viewsets.ModelViewSet):
    """ModelViewSet de Favoritas"""

    elemento = "Favorita"
    serializer_class = FavoritesSerializer
    queryset = FavoritesSerializer.Meta.model.objects.filter(is_active=True)


class UserFavorites(APIView):
    """API de Favoritas por usuario"""

    def get(self, request, pk=None):
        favorites = Favorites.objects.filter(user=pk)
        fav_serializer = FavoritesSerializer(favorites, many=True)
        return Response(fav_serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def movie_popularity(request, pk=None):
    """API de popularidad por pelicula"""
    if request.method == "GET":
        popularity = Favorites.objects.filter(movie=pk, is_active=True).count()
        return Response(popularity, status=status.HTTP_200_OK)


@api_view(["GET"])
def comments_movies(request, pk=None):
    """API de comentarios por pelicula"""
    if request.method == "GET":
        comments = Comment.objects.filter(movie=pk)
        comments_serializer = CommentSerializer(comments, many=True)
        return Response(comments_serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def comments_user(request, pk=None):
    """API de comentarios por usuario"""
    if request.method == "GET":
        comments = Comment.objects.filter(user=pk)
        comments_serializer = CommentSerializer(comments, many=True)
        return Response(comments_serializer.data, status=status.HTTP_200_OK)
