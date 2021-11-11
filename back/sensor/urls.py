from django.urls import path
from .views import *

urlpatterns = [
    path('smoke', detect_smoke, name='smoke'),
]
