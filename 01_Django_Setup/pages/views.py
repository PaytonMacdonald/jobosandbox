from django.shortcuts import render

def home_view(request):
    return render(request, 'home.html')

def jo_view(request):
    return render(request, 'jo-main.html')

def bo_view(request):
    return render(request, 'bo-main.html')

def clicker_sandbox_view(request):
    return render(request, 'jo-clicker-sandbox.html')
