from django.db import models
from naga.models import Shop

class Smoke(models.Model):
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    smoke_time = models.DateTimeField('연기 발생 시간', auto_now_add=True)

    class Meta:
        ordering = ('-smoke_time', )

    def __str__(self):
        return self.smoke_time
