from django.shortcuts import render


# Create your views here.
def generator(request):
    text = "HI THERE"
    context = {"text": text}
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
