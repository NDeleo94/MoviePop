from rest_framework import serializers
from backend.models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "name", "last_name", )


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ("id", "movie", )


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ("id", "comment", )


class FavoritesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorites
        fields = "__all__"
    
    def to_representation(self, instance):
        return {
            "id": instance.id,
            "user": instance.user.username,
            "movie": instance.movie.movie,
        }
