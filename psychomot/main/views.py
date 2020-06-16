from django.shortcuts import render
from django.core.mail import send_mail

from .forms import ContactForm

def index(request):
    return render(request,'main/index.html')

def contact(request):
    # Si le formulaire a été soumis
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Envoyer le mail
            sujet = form.cleaned_data['sujet']
            message = form.cleaned_data['message']
            email_sender = form.cleaned_data['email']
            nom_prenom = form.cleaned_data["nom_prenom"]

            recipients = ["thibaultspriet@hotmail.fr"]
            send_mail(sujet,message,email_sender,recipients)
    
    # Afficher la page
    else:
        form = ContactForm()
    
    return render(request,'main/contact.html',{'form':form})
