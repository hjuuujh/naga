import boto3

AWS_ACCESS_KEY = "AKIA5VZTIAOJ3ULBCHLC"
AWS_SECRET_KEY = "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"
BUCKET_NAME = "team4-ng"
SECRET_KEY = 'django-insecure-6an5_hgw-uxavih58z61i*+!vrvdms6fu5tr9=ovh!9zr=joub'
USER =  "root"
PASSWORD = "1234"
HOST = "13.208.69.254"

def s3_connection():
    s3 = boto3.client('s3', aws_access_key_id = AWS_ACCESS_KEY,aws_secret_access_key = AWS_SECRET_KEY)
    return s3