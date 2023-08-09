from django.shortcuts import render


# Create your views here.
def generator(request):
    return render(request, "generator.html", {})
