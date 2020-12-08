from django.urls import path,include

from rest_framework.routers import DefaultRouter
from .views import *

from rest_framework import routers
router = DefaultRouter()

router.register('blogs', BlogView)


urlpatterns = [

    path('', include(router.urls)),
]
