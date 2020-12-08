
from django.shortcuts import render
from .serializer import *
from rest_framework.viewsets import ModelViewSet

# Create your views here.

class BlogView(ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class=BlogSerializer
