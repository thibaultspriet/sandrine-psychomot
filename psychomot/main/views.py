from django.shortcuts import render
from django.core.mail import send_mail

from django.http import JsonResponse

from .models import Service
from .forms import ContactForm, AskForRDV

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

def presentation(request):
    return render(request,'main/presentation.html')

def psychomotricite(request):
    return render(request,'main/psychomotricite.html')

def bilan(request):
    return render(request,'main/bilan.html')

def rendez_vous(request):
    context={}
    # Si le formulaire a été soumis
    if request.method == 'POST':
        form = AskForRDV(request.POST)
        if form.is_valid():
            # Envoyer le mail
            message = form.cleaned_data['message']
            email_sender = form.cleaned_data['email']
            service = form.cleaned_data['service']

            recipients = ["thibaultspriet@hotmail.fr"]
            send_mail(service,message,email_sender,recipients)
    
    # Afficher la page
    else:
        form = AskForRDV()
        service_name = request.GET.get('service_name')
        if service_name == None:
            service_name = form.service_name.first()
        else:
            service = Service.objects.get(nom=service_name)
            service={
            "name":service.nom,
            "price":service.prix,
            "duration":service.duree,
            "description":service.description
            }
            return JsonResponse(service)
        service = Service.objects.get(nom=service_name)
        context["service"]={
            "name":service.nom,
            "price":service.prix,
            "duration":service.duree,
            "description":service.description
        }
    context["form"]=form
    return render(request,'main/rendez_vous.html',context=context)
