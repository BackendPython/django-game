# Generated by Django 4.0.5 on 2022-07-01 13:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0003_menumoneys_coin_menumoneys_diamond_menumoneys_level'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menumoneys',
            name='coin',
            field=models.IntegerField(default=100),
        ),
    ]
