from django.urls import path

from . import views


"url http://127.0.0.1:8000/polls/get/startdate=2017-08-01%2012:00:00/finishdate=2017-08-04%2001:00:00"
urlpatterns = [
    path('', views.index, name='index'),
    path('get/<str:start>/<str:finish>', views.get_data, name='data'), #axiostan gönderilen urli get_data fonksiyonumuza yönlendiriyoruz....
]
