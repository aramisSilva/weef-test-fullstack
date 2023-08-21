from django.db import models
from choices import STATUS_CHOICES

class Task(models.Model):
    title = models.CharField(max_length=200, verbose_name='Título')
    limit_date = models.DateField(null=True, blank=True, verbose_name='Data limite')
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='nao_feito', verbose_name='Status', null=True, blank=True)

    def __str__(self):
        return self.title