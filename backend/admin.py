from django.contrib import admin

from backend.models import User, Movie, Comment, Favorites

# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "username",
    )


@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "movie",
    )


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "movie",
        "comment",
        "user",
    )


@admin.register(Favorites)
class FavoritesAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "movie",
    )
