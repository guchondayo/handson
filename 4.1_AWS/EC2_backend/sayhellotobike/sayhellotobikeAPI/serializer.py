import logging
# ロガーの設定(loggerはソースコードにおいておけばいいとのこと)
logger = logging.getLogger(__name__)

from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserInfo
from django.contrib.auth import authenticate
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}
class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfo
        fields = ('user','birth_day','favorite','created_at')
class LoginSerializer(serializers.Serializer):
    # 1.受け入れるシリアライザデータを作成する(fields)＊ここの理屈って何だろう？？
    # 質問したいこと：#(fields)＊ここの理屈って何だろう？？
    username = serializers.CharField(max_length=255, write_only=True)
    password = serializers.CharField(write_only=True, style={'input_type': 'password'})
    def validate(self, data):
        username = data.get('username')
        password = data.get('password')
        user = authenticate(username=username, password=password)
        print("userの結果",user)
        if user is not None:
            # 認証成功
            print("認証成功:", user)
            return data
        else:
            # 認証失敗
            print("認証失敗")
            raise serializers.ValidationError('some_field は無効な値です。')