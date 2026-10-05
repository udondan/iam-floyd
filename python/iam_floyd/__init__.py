"""IAM policy statement generator with a fluent interface."""

from __future__ import annotations

import importlib
from typing import TYPE_CHECKING, Any

from . import statement as Statement  # noqa: N812
from ._shared import (
    InlineGroupPolicyDocument,
    InlineRolePolicyDocument,
    InlineUserPolicyDocument,
    KmsKeyPolicyDocument,
    LambdaFunctionPolicyDocument,
    ManagedPolicyDocument,
    Operator,
    PolicyDocument,
    PolicyStatement,
    ResourceControlPolicyDocument,
    S3BucketPolicyDocument,
    SecretsManagerSecretPolicyDocument,
    ServiceControlPolicyDocument,
    SessionPolicyDocument,
    SnsTopicPolicyDocument,
    SqsQueuePolicyDocument,
    TrustPolicyDocument,
)
from ._version import __version__

if TYPE_CHECKING:
    from ._aws_managed_policies import AwsManagedPolicy
    from ._collection import Collection

# The modules are imported on first access, the collection imports the large EC2 module
_MODULES = {
    'AwsManagedPolicy': '._aws_managed_policies',
    'Collection': '._collection',
}

__all__ = [
    'AwsManagedPolicy',
    'Collection',
    'InlineGroupPolicyDocument',
    'InlineRolePolicyDocument',
    'InlineUserPolicyDocument',
    'KmsKeyPolicyDocument',
    'LambdaFunctionPolicyDocument',
    'ManagedPolicyDocument',
    'Operator',
    'PolicyDocument',
    'PolicyStatement',
    'ResourceControlPolicyDocument',
    'S3BucketPolicyDocument',
    'SecretsManagerSecretPolicyDocument',
    'ServiceControlPolicyDocument',
    'SessionPolicyDocument',
    'SnsTopicPolicyDocument',
    'SqsQueuePolicyDocument',
    'Statement',
    'TrustPolicyDocument',
    '__version__',
]


def __getattr__(name: str) -> Any:
    module = _MODULES.get(name)
    if module is None:
        raise AttributeError(f'module {__name__!r} has no attribute {name!r}')
    value = getattr(importlib.import_module(module, __name__), name)
    globals()[name] = value
    return value


def __dir__() -> list[str]:
    return sorted(set(globals()) | set(__all__))
