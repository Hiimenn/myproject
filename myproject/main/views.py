from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
# Create your views here.
def index(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render({}, request))

def about(request):
    template = loader.get_template('about.html')
    return HttpResponse(template.render({}, request))

def contacts(request):
    template = loader.get_template('contacts.html')
    return HttpResponse(template.render({}, request))