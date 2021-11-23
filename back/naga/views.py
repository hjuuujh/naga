from django.shortcuts import render
from config import BUCKET_NAME, s3_connection
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *

# Create your views here.
# @api_view(['GET'])
# def video_list(request, id):
#     prefix = str(id)+'/camera1'
#     s3 = s3_connection()
#
#     list = s3.list_objects(Bucket=BUCKET_NAME, Prefix=prefix)
#     constents_list = list['Contents']
#     file_list = []
#
#     for c in constents_list:
#         key = c['Key']
#         idx = key.rindex('/')
#         if key!= prefix+'/':
#             file_list.append(key)
#     print(file_list)
#     # print(constents_list)
#     return Response(file_list)

@api_view(['POST'])
def shop_create(request, uid):
    print(uid)
    print(request.data)
    serializer = ShopSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response({"message": "Success!"})


@api_view(['POST'])
def camera_create(request, uid):
    print(uid)
    print(request.data)
    serializer = CameraSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response({"message": "Success!"})