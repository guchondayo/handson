# Generated by Django 3.2.8 on 2023-08-20 15:32

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sayhellotobikeAPI', '0003_auto_20230820_1244'),
    ]

    operations = [
        migrations.AddField(
            model_name='userinfo',
            name='birth_day',
            field=models.DateField(default=datetime.date(2000, 1, 1), verbose_name='生年月日'),
        ),
        migrations.AddField(
            model_name='userinfo',
            name='favorite',
            field=models.CharField(default='特になし', max_length=100, verbose_name='お気に入りの'),
        ),
    ]