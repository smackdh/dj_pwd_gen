from django.shortcuts import render


# Create your views here.
def generator(request):
    text = "HI THERE"
    context = {"text": text}
    return render(request, "generator.html", context)
