from django.urls import path
from . import views
import django.urls

urlpatterns = [
    # django.urls.path('videos/<int:id>/', views.video_list),
    django.urls.path('shop/<int:uid>/', views.shop_create),
    django.urls.path('camera/<int:uid>/', views.camera_create),

]
