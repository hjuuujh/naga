from django.urls import path
from . import views
import django.urls

urlpatterns = [
    django.urls.path('videos/<int:id>/', views.video_list),
]
