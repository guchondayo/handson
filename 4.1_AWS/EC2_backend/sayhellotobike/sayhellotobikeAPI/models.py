from django.db import models
from django.contrib.auth.models import User

class UserInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    birth_day = models.DateField(verbose_name='生年月日')  
    favorite = models.CharField(verbose_name='お気に入りの', max_length=100, default='特になし')  # favorite フィールドを追加
    created_at = models.DateTimeField(verbose_name='作成日時', auto_now_add=True)

    def __str__(self):
        return self.user.username
