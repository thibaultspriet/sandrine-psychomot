from django import forms

class ContactForm(forms.Form):
    nom_prenom = forms.CharField(label='Nom Prénom',max_length=100)
    email = forms.EmailField()
    sujet = forms.CharField(max_length=100)
    message = forms.CharField(widget=forms.Textarea)

class AskForRDV(forms.Form):
    choices = (
        ('bilanpsy','Bilan Psychomoteur'),
    )
    service = forms.CharField(widget=forms.Select(choices=choices),label="Sélectionner un service : ")
    email = forms.EmailField(label = "Votre adresse mail : ")
    message = forms.CharField(widget=forms.Textarea,label = "Votre message : ")
