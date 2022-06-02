from django.db import models


class TblQuestionOption(models.Model):
    text = models.CharField(max_length=512, help_text='选项的纯文本内容')
    content = models.CharField(max_length=512, help_text='选项的html格式内容')
    description = models.CharField(max_length=512, blank=True, null=True, help_text='选项的额外描述，可以用于题目答案解析')

    class Meta:
        db_table = 'tbl_question_option'