from django.shortcuts import render
from .models import *


def home(request):
    values = MenuMoneys.objects.all()
    context = {
        "value": values,
    }
    return render(request, 'home.html', context,)

def game(request):
    return render(request, 'game.html')