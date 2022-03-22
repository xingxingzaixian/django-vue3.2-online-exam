from django.db import models


class TblQuestionCategory(models.Model):
    name = models.CharField(max_length=64, help_text='问题类别名称')
    tag = models.CharField(max_length=32, unique=True, help_text='问题类别标签')
    description = models.CharField(max_length=512, blank=True, null=True, help_text='问题类别的描述')

    class Meta:
        db_table = 'tbl_question_category'