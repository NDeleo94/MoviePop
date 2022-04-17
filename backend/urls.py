from django.urls import path
from backend.api.views import *
from backend.views import Login, Logout, UserToken

urlpatterns = [
    path(
        "api/favorites/user/<int:pk>/", UserFavorites.as_view(), name="user_favorites"
    ),
    path("api/favorites/movie/<int:pk>/", movie_popularity, name="popularity_name"),
    path("api/comments/movie/<int:pk>/", comments_movies, name="comment_movies"),
    path("api/comments/user/<int:pk>/", comments_user, name="comment_user"),
    path("login/", Login.as_view(), name="login"),
    path("logout/", Logout.as_view(), name="logout"),
    path("refreshtoken/", UserToken.as_view(), name="refresh_token"),
]
