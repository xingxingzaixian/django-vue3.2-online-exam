from django.db import models
from django.contrib.auth.backends import UserModel

from question.models import TblQuestion


class TblExamRecord(models.Model):
    exam = models.ForeignKey('TblExam', on_delete=models.DO_NOTHING, db_constraint=False, help_text='考试ID')
    joiner = models.ForeignKey(UserModel, on_delete=models.DO_NOTHING, db_constraint=False, help_text='参与者ID')
    score = models.SmallIntegerField(default=0, help_text='得分')
    time_cost = models.SmallIntegerField(default=0, help_text='耗时')
    category_score = models.JSONField(default=dict, help_text='分类得分')
    start_time = models.DateTimeField(auto_now_add=True, help_text='开始时间')
    
    questions = models.ManyToManyField(TblQuestion, through='TblExamAnswer', help_text='题目')
    
    
    class Meta:
        db_table = 'tbl_exam_record'
        
        
class TblExamAnswer(models.Model):
    exam_record = models.ForeignKey(TblExamRecord, on_delete=models.CASCADE, help_text='考试ID')
    question = models.ForeignKey(TblQuestion, on_delete=models.DO_NOTHING, db_constraint=False, help_text='题目ID')
    answer_options = models.JSONField(help_text='答案选项')
    
    class Meta:
        db_table = 'tbl_exam_answer'