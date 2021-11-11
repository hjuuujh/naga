import boto3

AWS_ACCESS_KEY = "AKIA5VZTIAOJ3ULBCHLC"
AWS_SECRET_KEY = "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"
BUCKET_NAME = "team4-ng"


def s3_connection():
    s3 = boto3.client('s3', aws_access_key_id = AWS_ACCESS_KEY,aws_secret_access_key = AWS_SECRET_KEY)
    return s3