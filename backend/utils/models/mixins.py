from typing import Optional, Iterable


class LowerFieldMixin:
    def save(self, force_insert: bool = ..., force_update: bool = ..., using: Optional[str] = ..., update_fields: Optional[Iterable[str]] = ...) -> None:
        self.tag = self.tag.lower()
        return super().save(force_insert=force_insert, force_update=force_update, using=using, update_fields=update_fields)