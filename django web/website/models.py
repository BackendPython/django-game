from django.db import models
from django.contrib.auth.models import AbstractUser

class Admin(AbstractUser):
    pass


class MenuMoneys(models.Model):
    level = models.IntegerField(default=5)
    coin = models.IntegerField(default=100)
    diamond = models.IntegerField(default=300)
    
    def __number__(self):
        return self.coin
    