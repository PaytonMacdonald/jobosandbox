from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('', include('core.urls')),  # <- this connects your app
]
