from rest_framework import generics
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from backend.api.serializers import *
from backend.api.views import *


class MethodBaseViewSet:
    elemento = None

    def destroy(self, request, pk=None):
        element = self.get_queryset().filter(id=pk).first()
        if element:
            element.is_active = False
            element.save()
            return Response(
                {"message": f"{self.elemento} eliminado correctamente!"},
                status=status.HTTP_200_OK,
            )
        Response({"error": "No existe el elemento"}, status=status.HTTP_400_BAD_REQUEST)


class UserViewSet(MethodBaseViewSet, viewsets.ModelViewSet):
    elemento = "Usuario"
    serializer_class = UserSerializer
    queryset = UserSerializer.Meta.model.objects.filter(is_active=True)


class MovieViewSet(MethodBaseViewSet, viewsets.ModelViewSet):
    elemento = "Pelicula"
    serializer_class = MovieSerializer
    queryset = MovieSerializer.Meta.model.objects.filter(is_active=True)


class CommentViewSet(MethodBaseViewSet, viewsets.ModelViewSet):
    elemento = "Comentario"
    serializer_class = CommentSerializer
    queryset = CommentSerializer.Meta.model.objects.filter(is_active=True)


class FavoritesViewSet(MethodBaseViewSet, viewsets.ModelViewSet):
    elemento = "Favorita"
    serializer_class = FavoritesSerializer
    queryset = FavoritesSerializer.Meta.model.objects.filter(is_active=True)
