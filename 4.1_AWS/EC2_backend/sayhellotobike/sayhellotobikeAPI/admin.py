from django.contrib import admin
from .models import UserInfo
# 以下追記
admin.site.register(UserInfo)