from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('contact/',views.contact,name="contact"),
    path('presentation/',views.presentation,name="presentation"),
    path('rendez_vous/',views.rendez_vous,name="rendez_vous"),
    path('psychomotricite/',views.psychomotricite,name="psychomotricite"),
    path('bilan/',views.bilan,name="bilan"),
    path('yoga/',views.yoga,name="yoga"),
]