from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('contact/',views.contact,name="contact"),
    path('presentation/',views.presentation,name="presentation"),
    path('rendez_vous/',views.rendez_vous,name="rendez_vous"),
    path('psychomotricite/',views.psychomotricite,name="psychomotricite"),
    path('pourqui/',views.pourqui,name="pourqui"),
    path('bilan/',views.bilan,name="bilan"),
    path('boite_outils/',views.boite_outils,name="boite_outils"),
    path('yoga/',views.yoga,name="yoga"),
    path('yoga-detail/',views.yogaDetail,name="yoga-detail"),
    path('sophro-detail/',views.sophroDetail,name="sophro-detail"),
]