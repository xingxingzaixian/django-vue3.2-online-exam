from django.db import models
from django.contrib.auth.backends import UserModel


class TblClass(models.Model):
    name = models.CharField(max_length=100, help_text="班级名称")
    tag = models.CharField(max_length=100, unique=True, help_text="标签")
    
    # null=True 数据库中可以为空  blank=True 在表单中可以为空
    description = models.CharField(max_length=512, null=True, blank=True, help_text="班级描述")
    
    # db_constraint=False 关闭数据库约束，保留关联查询
    users = models.ManyToManyField(UserModel, related_name='classes', help_text="班级成员")
    
    class Meta:
        db_table = 'tbl_class'