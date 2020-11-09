from django import forms
from .models import Service

class ContactForm(forms.Form):
    nom_prenom = forms.CharField(label='Nom Prénom',max_length=100)
    email = forms.EmailField()
    sujet = forms.CharField(max_length=100)
    message = forms.CharField(widget=forms.Textarea)

class AskForRDV(forms.Form):
    service_name = Service.objects.values_list('nom',flat=True)
    choices = [(nom,nom) for nom in service_name]
    service = forms.CharField(widget=forms.Select(choices=choices),label="Sélectionner un service : ")
    email = forms.EmailField(label = "Email : ")
    message = forms.CharField(widget=forms.Textarea,label = "Message : ")
