from rest_framework import serializers
from .models import *

class ShopSerializer(serializers.ModelSerializer):

    class Meta:
        model = Shop
        fields = ['id','user_id','name']


class CameraSerializer(serializers.ModelSerializer):

    class Meta:
        model = Camera
        fields = ['id','user_id','name']