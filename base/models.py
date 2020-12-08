from django.db import models

# Create your models here.
class Blog(models.Model):
    name = models.CharField(max_length=200)
    username = models.CharField(max_length=200,null=True,blank=True)
    email = models.EmailField(max_length=200,null=True,blank=True)
    phone = models.CharField(max_length=200,null=True,blank=True)
    address = models.CharField(max_length=200,null=True,blank=True)



    def __str__(self):
        return self.name
