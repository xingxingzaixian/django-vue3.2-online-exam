from django.contrib.auth.backends import UserModel
from django.db import models

from question.models import TblQuestion


class TblExam(models.Model):
    name = models.CharField(max_length=128, help_text='考试名称')
    avatar = models.CharField(max_length=256, help_text='考试的预览图')
    description = models.CharField(max_length=256, blank=True, null=True, help_text='考试描述')
    score = models.IntegerField(default=0, verbose_name='当前考试的总分数', help_text='当前考试的总分数')
    creator = models.ForeignKey(UserModel, on_delete=models.DO_NOTHING, db_constraint=False, help_text='创建考试的用户')
    limit_time = models.IntegerField(default=60, help_text='考试时长')
    start_date = models.DateTimeField(help_text='考试有效期开始时间')
    end_date = models.DateTimeField(help_text='考试有效期结束时间')
    create_time = models.DateTimeField(auto_now_add=True, help_text='创建时间')
    update_time = models.DateTimeField(auto_now=True, help_text='更新时间')

    class Meta:
        db_table = 'tbl_exam'
        
        
class TblExamSubject(models.Model):
    exam = models.ForeignKey(TblExam, on_delete=models.CASCADE, help_text='考试')
    question = models.ForeignKey(TblQuestion, on_delete=models.CASCADE, help_text='题目')
    score = models.IntegerField(default=0, help_text='题目分数')
    
