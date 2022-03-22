from django.db import models


class TblRole(models.Model):
    name = models.CharField(max_length=64, help_text='昵称')
    tag = models.CharField(max_length=64, unique=True, help_text='标签')
    description = models.CharField(max_length=256, null=True, blank=True, help_text='描述')
  
    class Meta:
        db_table = 'tbl_role'