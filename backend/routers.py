from rest_framework.routers import DefaultRouter
from backend.api.views import *

router = DefaultRouter()

router.register('users', UserViewSet)
router.register('movies', MovieViewSet)
router.register('comments', CommentViewSet)
router.register('favorites', FavoritesViewSet)

urlpatterns = router.urls