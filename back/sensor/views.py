from django.shortcuts import render
from .models import Smoke
from django.http import HttpResponse
from requests import post
from json import dumps

def send_talk(message):
    talk_url = "https://kapi.kakao.com/v2/api/talk/memo/default/send"
    with open("kakao_access_token.txt", "r") as f:
        token = f.read()
    headers = {
        "Authorization": f"Bearer {token}",
    }
    template_object = {
        "object_type": "feed",
        "content": {
            "title": message,
            "description": "침입 발생, 카메라 확인 요망",
            # Todo : 실시간 이미지 전송
            "image_url": "https://cbmpress.sfo2.digitaloceanspaces.com/vnews/1179593086_5i2DFxUN_215a5cebf9fde72bde8bb572d97205280f650050.png",
            "image_width": 640,
            "image_height": 480,
            "link": {
                'web_url': "http://localhost:8000/admin",
                'mobile_web_url': "http://localhost:8000/admin",
                "android_execution_params": "contentId=100",
                "ios_execution_params": "contentId=100"
            }
        }
    }
    payload = {'template_object': dumps(template_object)}

    res = post(talk_url, data=payload, headers=headers)

def detect_smoke(request):
    send_talk("연기 감지")
    return HttpResponse('<h1>연기 감지</h1>')
