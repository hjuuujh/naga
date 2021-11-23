from django.contrib.auth.models import User
from django.db import models


class Shop(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=10)
    user = models.ForeignKey(User, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'naga_shop'
