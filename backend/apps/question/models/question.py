from django.contrib.auth.backends import UserModel
from django.db import models

from .level import Level
from .type_ import Type


class TblQuestion(models.Model):
    content = models.TextField(help_text='题目内容')
    description = models.TextField(help_text='题目额外的描述')
    option_ids = models.JSONField(null=True, blank=True, default=None, help_text='题目的选项，用选项的id用-连在一起表示答案')
    anser_ids = models.JSONField(null=True, blank=True, default=None, help_text='题目的选项，用选项的id用-连在一起表示答案')
    create_time = models.DateTimeField(auto_now_add=True, help_text='创建时间')
    update_time = models.DateTimeField(auto_now=True, help_text='更新时间')
    
    creator = models.ForeignKey(UserModel, on_delete=models.DO_NOTHING, db_constraint=False, help_text='题目创建者')
    level_tag = models.ForeignKey('TblQuestionLevel', to_field='tag', on_delete=models.DO_NOTHING, default=Level.EASY, help_text='题目难易度级别')
    type_tag = models.ForeignKey('TblQuestionType', to_field='tag', on_delete=models.DO_NOTHING, default=Type.SINGLE, help_text='题目类型')
    category_tag = models.ForeignKey('TblQuestionCategory', to_field='tag', on_delete=models.DO_NOTHING, default='other', help_text='题目类型')

    class Meta:
        db_table = 'tbl_question'




