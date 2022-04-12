from django.contrib import admin

from backend.models import User, Movie, Comment, Favorites
# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass

@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    pass

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    pass

@admin.register(Favorites)
class FavoritesAdmin(admin.ModelAdmin):
    pass