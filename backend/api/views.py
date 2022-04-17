from rest_framework import generics
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from backend.api.serializers import *
from backend.api.views import *


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = UserSerializer.Meta.model.objects.all()

class MovieViewSet(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = MovieSerializer.Meta.model.objects.all()

class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = CommentSerializer.Meta.model.objects.all()

class FavoritesViewSet(viewsets.ModelViewSet):
    serializer_class = FavoritesSerializer
    queryset = FavoritesSerializer.Meta.model.objects.all()