from datetime import datetime, timedelta
from django.shortcuts import render
from .models import Smoke
from django.http import HttpResponse
from requests import post
from json import dumps
from naga.models import Shop
from .aws_sns import send_msg_to_phone
from config import phone_number

def save_to_db():
    shop = Shop.objects.get(id=9)
    smoke = Smoke(shop=shop)
    smoke.save()

def send_talk(message):
    pass
    # talk_url = "https://kapi.kakao.com/v2/api/talk/memo/default/send"
    # with open("kakao_access_token.txt", "r") as f:
    #     token = f.read()
    # headers = {
    #     "Authorization": f"Bearer {token}",
    # }
    # template_object = {
    #     "object_type": "feed",
    #     "content": {
    #         "title": message,
    #         "description": "침입 발생, 카메라 확인 요망",
    #         # Todo : 실시간 이미지 전송
    #         "image_url": "https://cbmpress.sfo2.digitaloceanspaces.com/vnews/1179593086_5i2DFxUN_215a5cebf9fde72bde8bb572d97205280f650050.png",
    #         "image_width": 640,
    #         "image_height": 480,
    #         "link": {
    #             'web_url': "http://localhost:8000/admin",
    #             'mobile_web_url': "http://localhost:8000/admin",
    #             "android_execution_params": "contentId=100",
    #             "ios_execution_params": "contentId=100"
    #         }
    #     }
    # }
    # payload = {'template_object': dumps(template_object)}

    # res = post(talk_url, data=payload, headers=headers)

last_time_sns_pub = datetime(1970, 1, 1, 0, 0, 0, 0)

def detect_smoke(request):
    global last_time_sns_pub
    save_to_db()
    # send_talk('화재 의심! 확인 요망\nLink : ') # 카톡 알림

    # Todo : 어떤 상황에서 보낼지 고려 (연기 센서가 1분 간 감지하면 보낸다든지 등)
    now = datetime.now()
    if now - last_time_sns_pub < timedelta(minutes=1): # 1분 내에 보냈으면 안보냄
        return HttpResponse('<h1>연기 감지</h1>')
    last_time_sns_pub = now

    msg = '화재 의심! 확인 요망\nLink : '
    send_msg_to_phone(msg, phone_number)
    return HttpResponse('<h1>연기 감지, 메시지 전송 완료</h1>')
