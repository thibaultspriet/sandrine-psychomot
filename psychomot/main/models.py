from django.db import models

class Service(models.Model):
    nom = models.CharField(max_length=200,null=True)
    prix = models.FloatField()
    duree = models.CharField(max_length=50,null=True,blank=True)
    description = models.TextField()

    def __str__(self):
        return self.nom

