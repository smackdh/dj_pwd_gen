from django.shortcuts import render
import random
import string


# Create your views here.
def generator(request):
    return render(request, "generator.html")


def button_click(request):
    length = 12
    characters = list(string.ascii_letters) + list(string.digits)
    password = "".join(random.choice(characters) for _ in range(length))
    return password
