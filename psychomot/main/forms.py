from django import forms

class ContactForm(forms.Form):
    nom_prenom = forms.CharField(label='Nom Prénom',max_length=100)
    email = forms.EmailField()
    sujet = forms.CharField(max_length=100)
    message = forms.CharField(widget=forms.Textarea)