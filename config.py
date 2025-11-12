import os
from dotenv import load_dotenv
load_dotenv()

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'mysql+pymysql://root:password@localhost/xeime_edu')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv('SECRET_KEY', 'xeime_secret_key')
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'xeime_jwt_secret')
