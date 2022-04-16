from django.db import models
from django.contrib.auth.models import (
    BaseUserManager,
    AbstractBaseUser,
    PermissionsMixin,
)

# Create your models here.
class UserManager(BaseUserManager):
    def _create_user(
        self,
        username,
        email,
        name,
        last_name,
        password,
        is_staff,
        is_superuser,
        **extra_fields,
    ):
        user = self.model(
            username=username,
            email=email,
            name=name,
            last_name=last_name,
            is_staff=is_staff,
            is_superuser=is_superuser,
            **extra_fields,
        )
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_user(
        self, username, email, name, last_name, password=None, **extra_fields
    ):
        return self._create_user(
            username, email, name, last_name, password, False, False, **extra_fields
        )

    def create_superuser(
        self, username, email, name, last_name, password=None, **extra_fields
    ):
        return self._create_user(
            username, email, name, last_name, password, True, True, **extra_fields
        )


class User(AbstractBaseUser, PermissionsMixin):
    """Modelo Usuario"""

    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField("Email", max_length=255, unique=True)
    name = models.CharField("Nombres", max_length=255, blank=True, null=True)
    last_name = models.CharField("Apellidos", max_length=255, blank=True, null=True)
    image = models.ImageField(
        "Foto de perfil", upload_to="perfil/", max_length=255, null=True, blank=True
    )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)
    objects = UserManager()

    class Meta:
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email", "name", "last_name"]

    def natural_key(self):
        return self.username

    def __str__(self) -> str:
        return f"{self.name} {self.last_name}"


class Movie(models.Model):
    """Modelo Pelicula"""

    id = models.IntegerField(primary_key=True)
    movie = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Pelicula"
        verbose_name_plural = "Peliculas"
        ordering = ("movie",)

    def __str__(self):
        """Return movie."""
        return self.movie


class Comment(models.Model):
    """Modelo Comentario"""

    user = models.ForeignKey(User, related_name="users", on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, related_name="comments", on_delete=models.CASCADE)
    comment = models.CharField(max_length=5000)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Comentario"
        verbose_name_plural = "Comentarios"
        ordering = (
            "movie",
            "user",
        )

    def __str__(self):
        return self.comment


class Favorites(models.Model):
    """Modelo Favoritas"""

    user = models.ForeignKey(
        User, related_name="user", on_delete=models.CASCADE, blank=True, null=True
    )
    movie = models.ForeignKey(
        Movie, related_name="movies", on_delete=models.CASCADE, blank=True, null=True
    )
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = "backend_favorites"
        verbose_name = "Favorita"
        verbose_name_plural = "Favoritas"

        ordering = ("user",)

    def __str__(self) -> str:
        return f"{self.user.__str__()} le gusta, {self.movie.__str__()}"
