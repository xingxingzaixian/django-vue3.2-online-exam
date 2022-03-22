from django.db import models


class TblExamCategory(models.Model):
    name = models.CharField(max_length=128, help_text='考试分类名称')
    tag = models.CharField(max_length=32, unique=True, help_text='标签')
    description = models.CharField(max_length=512, blank=True, null=True, help_text='详细阐述')

    class Meta:
        db_table = 'tbl_exam_category'