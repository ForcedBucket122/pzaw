from django.urls import path

from . import views

urlpatterns = [
    path('helloworld/', views.helloWorld),
    path('home/', views.home),
    path('<int:id>/', views.post),
    
]