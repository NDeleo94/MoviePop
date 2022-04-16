from rest_framework import serializers
from backend.models import *


class UserSerializer(serializers.ModelSerializer):
    """Serializador de Usuario"""

    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "name",
            "last_name",
        )


class UserTokenSerializer(serializers.ModelSerializer):
    """Serializador de Usuario para Login y Logout"""

    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "email",
            "name",
            "last_name",
        )


class MovieSerializer(serializers.ModelSerializer):
    """Serializador de Pelicula"""

    class Meta:
        model = Movie
        fields = (
            "id",
            "movie",
        )


class CommentSerializer(serializers.ModelSerializer):
    """Serializador de Comentarios"""

    class Meta:
        model = Comment
        fields = (
            "id",
            "user",
            "movie",
            "comment",
        )


class FavoritesSerializer(serializers.ModelSerializer):
    """Serializador de Favoritas"""

    class Meta:
        model = Favorites
        fields = "__all__"

    def to_representation(self, instance):
        """Metodo para mostrar el formato de favoritas"""
        return {
            "id": instance.id,
            "user": instance.user.username,
            "movie": instance.movie.movie,
        }


class MovieWithCommentsSerializer(serializers.ModelSerializer):
    """Serializador de Peliculas con contenido de comentarios"""

    comments = serializers.StringRelatedField(many=True)

    class Meta:
        model = Movie
        fields = (
            "id",
            "movie",
            "comments",
        )
