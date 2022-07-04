from django.urls import path
from .views import *

app_name = 'django'

urlpatterns = [
    path('', home, name='home'),
    path('game/', game, name='game'),
]