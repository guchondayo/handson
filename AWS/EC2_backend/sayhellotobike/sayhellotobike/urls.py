import logging
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from sayhellotobikeAPI.views import UserInfoViewSet, LoginAPIView

# DefaultRouter クラスのインスタンスを代入
defaultRouter = routers.DefaultRouter()
# userInfo/ にUserInfoViewSetをルーティングする
defaultRouter.register('register', UserInfoViewSet, basename='register')

# UserLoginView
urlpatterns = [
    path('admin/', admin.site.urls),
    # ログイン用のエンドポイントを追加
    path('users/login/', LoginAPIView.as_view(), name='login'),
    # defaultRouter をinclude する
    path('users/', include(defaultRouter.urls)),
]