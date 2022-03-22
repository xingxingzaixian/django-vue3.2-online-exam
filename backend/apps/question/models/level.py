from django.db import models


class Level(models.TextChoices):
    EASY = 'E', 'Easy'
    MEDIUM = 'M', 'Medium'
    HARD = 'H', 'Hard'


class TblQuestionLevel(models.Model):
    name = models.CharField(max_length=64, help_text='题目难易度名称')
    tag = models.CharField(choices=Level.choices, max_length=1, unique=True, help_text='问题类别标签')
    description = models.CharField(max_length=128, help_text='题目难易度的描述')

    class Meta:
        db_table = 'tbl_question_level'