from rest_framework import viewsets
from rest_framework.views import APIView
from .models import UserInfo,User
from .serializer import UserInfoSerializer, UserSerializer,LoginSerializer
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import generics
from django.db import transaction

# from django.contrib.auth.hashers import make_password
# make_password⇒saveを使ってもうまく行かなかった
# 質問したいこと：
# APIViewとViewsetの違い
# user = User.objects.create_user(**user_serializer.validated_data)
import logging
logger = logging.getLogger(__name__)
logging.debug("debug")
class UserInfoViewSet(viewsets.ModelViewSet):
    queryset = UserInfo.objects.all()
    serializer_class = UserInfoSerializer
    @transaction.atomic
    def create(self, request, *args, **kwargs):
        user_data = request.data.get('register')
        userinfo_data = request.data.get('other_data')
        user_serializer = UserSerializer(data=user_data)

        if user_serializer.is_valid():
            # # パスワードを変換
            # user_serializer.validated_data['password'] = make_password(user_serializer.validated_data['password'])
            user = User.objects.create_user(**user_serializer.validated_data)
            # user = user_serializer.save()
            print("パスワード",user.password)
            userinfo_data['user'] = user.id
            userinfo_serializer = UserInfoSerializer(data=userinfo_data)
            if userinfo_serializer.is_valid():
                # ここでデータを保存する
                userinfo_serializer.save()
                return Response(data=user_serializer.data, status=201)
            else:
                return Response(userinfo_serializer.data, userinfo_serializer.errors)
        else:
            return Response(user_serializer.data, user_serializer.errors)

class LoginAPIView(generics.GenericAPIView):
    logging.debug("debug")
    permission_classes = [AllowAny]
    # ここにシリアライザを定義しておくと、以下のように、シリアライザを簡単に呼び出す
    serializer_class = LoginSerializer
    @transaction.atomic
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        print("ログイン:serializer")
        if serializer.is_valid(raise_exception=True):
            user = User.objects.get(username=serializer.validated_data["username"])
            return Response({'detail': "ログインが成功しました。", 'error': 0,'userInfo':user})
            # return Response({'detail': "ログインが成功しました。", 'error': 0, 'token': token.token, 'user_id': user_id})
        return Response({'error': 1}, status=HTTP_400_BAD_REQUEST)

# class MyTokenObtainPairView(TokenObtainPairView):
#     serializer_class = LoginSerializer  # あなたのカスタムシリアライザを使用する場合

# class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
#     def validate(self, attrs):
#         data = super().validate(attrs)
#         refresh = self.get_token(self.user)
#         data['refresh'] = str(refresh)
#         data['access'] = str(refresh.access_token)
#         return data