from django.shortcuts import render
from config import BUCKET_NAME, s3_connection
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def video_list(request, id):
    prefix = str(id)+'/camera1'
    s3 = s3_connection()

    list = s3.list_objects(Bucket=BUCKET_NAME, Prefix=prefix)
    constents_list = list['Contents']
    file_list = []

    for c in constents_list:
        key = c['Key']
        idx = key.rindex('/')
        if key!= prefix+'/':
            file_list.append(key)
    print(file_list)
    # print(constents_list)
    return Response(file_list)
