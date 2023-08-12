from django.shortcuts import render
import random
import string


# Create your views here.
def generator(request):
    length = 12
    characters = list(string.ascii_letters) + list(string.digits)
    password = "".join(random.choice(characters) for _ in range(length))
    context = {"password": password}
    return render(request, "generator.html", context)


# #- Online Python - IDE, Editor, Compiler, Interpreter
# import random
# import string
# def pwdgen(length):
#    return length
# characters = list(string.ascii_letters)
# print(characters)
# numbers = list(string.digits)
# print(numbers)
