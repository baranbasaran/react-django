from django.http import HttpResponse
import urllib


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")



#veriyi urlden çekip fronta gönderiyoruz..
def get_data(request, start, finish):
   
    url = "https://staging1.alo-tech.com/api/?function=reportsCDRLogs&startdate="+start+"&finishdate="+finish + \
        "&app_token=ag9zfnRlbGVmb25pLXRlc3RyHwsSElRlbmFudEFwcGxpY2F0aW9ucxiAgICw46OcCQyiARVzdGFnaW5nMS5hbG8tdGVjaC5jb20"
    url = url.replace(" ", "%20")
    with urllib.request.urlopen(url) as response:
        data = response.read()
        return HttpResponse(data)






