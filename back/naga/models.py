from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Shop(models.Model):
    user_id = models.ForeignKey(User, related_name="shop", on_delete=models.CASCADE, db_column="user_id")
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name


class Camera(models.Model):
    user_id = models.ForeignKey(User, related_name="camera", on_delete=models.CASCADE, db_column="user_id")
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name