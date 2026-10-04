"""IAM policy statement generator with a fluent interface."""

from . import statement as Statement  # noqa: N812
from ._collection import Collection
from ._shared import Operator, PolicyStatement

__all__ = ['Collection', 'Operator', 'PolicyStatement', 'Statement']
