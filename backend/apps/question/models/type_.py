from django.db import models


class Type(models.TextChoices):
    SINGLE = 'S', 'Single'
    MULTIPLE = 'M', 'Multiple'
    JUDGE = 'J', 'Judge'
    
    
class TblQuestionType(models.Model):
    name = models.CharField(max_length=64, help_text='问题类别名称')
    tag = models.CharField(choices=Type.choices, max_length=1, unique=True, help_text='问题类别标签')
    description = models.CharField(max_length=512, blank=True, null=True, help_text='问题类别的描述')

    class Meta:
        db_table = 'tbl_question_type'