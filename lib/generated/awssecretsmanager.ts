import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service secretsmanager
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssecretsmanager.html
 */
export class Secretsmanager extends PolicyStatement {
  public servicePrefix = 'secretsmanager';
  public actions: Actions = {
    "CancelRotateSecret": {
      "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions",
      "description": "Enables the user to cancel an in-progress secret rotation.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Secret": {
          "required": true
        }
      },
      "conditions": [
        "secretsmanager:SecretId",
        "secretsmanager:resource/AllowRotationLambdaArn",
        "secretsmanager:ResourceTag/tag-key"
      ]
    },
    "CreateSecret": {
      "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions",
      "description": "Enables the user to create a secret that stores encrypted data that can be queried and rotated.",
      "accessLevel": "Write",
      "conditions": [
        "secretsmanager:Name",
        "secretsmanager:Description",
        "secretsmanager:KmsKeyId",
        "aws:RequestTag/tag-key",
        "aws:TagKeys",
        "secretsmanager:ResourceTag/tag-key"
      ]
    },
    "DeleteResourcePolicy": {
      "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions",
      "description": "Enables the user to delete the resource policy attached to a secret.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "Secret": {
          "required": true
        }
      },
      "conditions": [
        "secretsmanager:SecretId",
        "secretsmanager:resource/AllowRotationLambdaArn",
        "secretsmanager:ResourceTag/tag-key"
      ]
    },
    "DeleteSecret": {
      "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions",
      "description": "Enables the user to delete a secret.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Secret": {
          "required": true
        }
      },
      "conditions": [
        "secretsmanager:SecretId",
        "secretsmanager:resource/AllowRotationLambdaArn",
        "secretsmanager:RecoveryWindowInDays",
        "secretsmanager:ForceDeleteWithoutRecovery",
        "secretsmanager:ResourceTag/tag-key"
      ]
    },
    "DescribeSecret": {
      "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions",
      "description": "Enables the user to retrieve the metadata about a secret, but not the encrypted data.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Secret": {
          "required": true
        }
      },
      "conditions": [
        "secretsmanager:SecretId",
        "secretsmanager:resource/AllowRotationLambdaArn",
        "secretsmanager:ResourceTag/tag-key"
      ]
    },
    "GetRandomPassword": {
      "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions",
      "description": "Enables the user to generate a random string for use in password creation.",
      "accessLevel": "Read"
    },
    "GetResourcePolicy": {
      "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions",
      "description": "Enables the user to get the resource policy attached to a secret.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Secret": {
          "required": true
        }
      },
      "conditions": [
        "secretsmanager:SecretId",
        "secretsmanager:resource/AllowRotationLambdaArn",
        "secretsmanager:ResourceTag/tag-key"
      ]
    },
    "GetSecretValue": {
      "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions",
      "description": "Enables the user to retrieve and decrypt the encrypted data.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Secret": {
          "required": true
        }
      },
      "conditions": [
        "secretsmanager:SecretId",
        "secretsmanager:VersionId",
        "secretsmanager:VersionStage",
        "secretsmanager:resource/AllowRotationLambdaArn",
        "secretsmanager:ResourceTag/tag-key"
      ]
    },
    "ListSecretVersionIds": {
      "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions",
      "description": "Enables the user to list the available versions of a secret.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Secret": {
          "required": true
        }
      },
      "conditions": [
        "secretsmanager:SecretId",
        "secretsmanager:resource/AllowRotationLambdaArn",
        "secretsmanager:ResourceTag/tag-key"
      ]
    },
    "ListSecrets": {
      "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions",
      "description": "Enables the user to list the available secrets.",
      "accessLevel": "List"
    },
    "PutResourcePolicy": {
      "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions",
      "description": "Enables the user to attach a resource policy to a secret.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "Secret": {
          "required": true
        }
      },
      "conditions": [
        "secretsmanager:SecretId",
        "secretsmanager:resource/AllowRotationLambdaArn",
        "secretsmanager:ResourceTag/tag-key"
      ]
    },
    "PutSecretValue": {
      "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions",
      "description": "Enables the user to create a new version of the secret with new encrypted data.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Secret": {
          "required": true
        }
      },
      "conditions": [
        "secretsmanager:SecretId",
        "secretsmanager:resource/AllowRotationLambdaArn",
        "secretsmanager:ResourceTag/tag-key"
      ]
    },
    "RestoreSecret": {
      "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions",
      "description": "Enables the user to cancel deletion of a secret.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Secret": {
          "required": true
        }
      },
      "conditions": [
        "secretsmanager:SecretId",
        "secretsmanager:resource/AllowRotationLambdaArn",
        "secretsmanager:ResourceTag/tag-key"
      ]
    },
    "RotateSecret": {
      "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions",
      "description": "Enables the user to start rotation of a secret.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Secret": {
          "required": true
        }
      },
      "conditions": [
        "secretsmanager:SecretId",
        "secretsmanager:RotationLambdaARN",
        "secretsmanager:resource/AllowRotationLambdaArn",
        "secretsmanager:ResourceTag/tag-key"
      ]
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions",
      "description": "Enables the user to add tags to a secret.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "Secret": {
          "required": true
        }
      },
      "conditions": [
        "secretsmanager:SecretId",
        "aws:RequestTag/tag-key",
        "aws:TagKeys",
        "secretsmanager:resource/AllowRotationLambdaArn",
        "secretsmanager:ResourceTag/tag-key"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions",
      "description": "Enables the user to remove tags from a secret.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "Secret": {
          "required": true
        }
      },
      "conditions": [
        "secretsmanager:SecretId",
        "aws:TagKeys",
        "secretsmanager:resource/AllowRotationLambdaArn",
        "secretsmanager:ResourceTag/tag-key"
      ]
    },
    "UpdateSecret": {
      "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions",
      "description": "Enables the user to update a secret with new metadata or with a new version of the encrypted data.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Secret": {
          "required": true
        }
      },
      "conditions": [
        "secretsmanager:SecretId",
        "secretsmanager:Description",
        "secretsmanager:KmsKeyId",
        "secretsmanager:resource/AllowRotationLambdaArn",
        "secretsmanager:ResourceTag/tag-key"
      ]
    },
    "UpdateSecretVersionStage": {
      "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions",
      "description": "Enables the user to move a stage from one secret to another.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Secret": {
          "required": true
        }
      },
      "conditions": [
        "secretsmanager:SecretId",
        "secretsmanager:VersionStage",
        "secretsmanager:resource/AllowRotationLambdaArn",
        "secretsmanager:ResourceTag/tag-key"
      ]
    }
  };
  public resourceTypes: ResourceTypes = {
    "Secret": {
      "name": "Secret",
      "url": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-resources",
      "arn": "arn:${Partition}:secretsmanager:${Region}:${Account}:secret:${SecretId}",
      "conditionKeys": [
        "aws:RequestTag/tag-key",
        "aws:TagKeys",
        "secretsmanager:ResourceTag/tag-key",
        "secretsmanager:resource/AllowRotationLambdaArn"
      ]
    }
  };

  /**
   * Action provider for service secretsmanager
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssecretsmanager.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Enables the user to cancel an in-progress secret rotation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public cancelRotateSecret() {
    this.add('secretsmanager:CancelRotateSecret');
    return this;
  }

  /**
   * Enables the user to create a secret that stores encrypted data that can be queried and rotated.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public createSecret() {
    this.add('secretsmanager:CreateSecret');
    return this;
  }

  /**
   * Enables the user to delete the resource policy attached to a secret.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public deleteResourcePolicy() {
    this.add('secretsmanager:DeleteResourcePolicy');
    return this;
  }

  /**
   * Enables the user to delete a secret.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public deleteSecret() {
    this.add('secretsmanager:DeleteSecret');
    return this;
  }

  /**
   * Enables the user to retrieve the metadata about a secret, but not the encrypted data.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public describeSecret() {
    this.add('secretsmanager:DescribeSecret');
    return this;
  }

  /**
   * Enables the user to generate a random string for use in password creation.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public getRandomPassword() {
    this.add('secretsmanager:GetRandomPassword');
    return this;
  }

  /**
   * Enables the user to get the resource policy attached to a secret.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public getResourcePolicy() {
    this.add('secretsmanager:GetResourcePolicy');
    return this;
  }

  /**
   * Enables the user to retrieve and decrypt the encrypted data.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public getSecretValue() {
    this.add('secretsmanager:GetSecretValue');
    return this;
  }

  /**
   * Enables the user to list the available versions of a secret.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public listSecretVersionIds() {
    this.add('secretsmanager:ListSecretVersionIds');
    return this;
  }

  /**
   * Enables the user to list the available secrets.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public listSecrets() {
    this.add('secretsmanager:ListSecrets');
    return this;
  }

  /**
   * Enables the user to attach a resource policy to a secret.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public putResourcePolicy() {
    this.add('secretsmanager:PutResourcePolicy');
    return this;
  }

  /**
   * Enables the user to create a new version of the secret with new encrypted data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public putSecretValue() {
    this.add('secretsmanager:PutSecretValue');
    return this;
  }

  /**
   * Enables the user to cancel deletion of a secret.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public restoreSecret() {
    this.add('secretsmanager:RestoreSecret');
    return this;
  }

  /**
   * Enables the user to start rotation of a secret.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public rotateSecret() {
    this.add('secretsmanager:RotateSecret');
    return this;
  }

  /**
   * Enables the user to add tags to a secret.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public tagResource() {
    this.add('secretsmanager:TagResource');
    return this;
  }

  /**
   * Enables the user to remove tags from a secret.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public untagResource() {
    this.add('secretsmanager:UntagResource');
    return this;
  }

  /**
   * Enables the user to update a secret with new metadata or with a new version of the encrypted data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public updateSecret() {
    this.add('secretsmanager:UpdateSecret');
    return this;
  }

  /**
   * Enables the user to move a stage from one secret to another.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-actions
   */
  public updateSecretVersionStage() {
    this.add('secretsmanager:UpdateSecretVersionStage');
    return this;
  }

  /**
   * Adds a resource of type Secret to the statement
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-resources
   *
   * @param secretId - Identifier for the secretId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:RequestTag/tag-key
   *  - aws:TagKeys
   *  - secretsmanager:ResourceTag/tag-key
   *  - secretsmanager:resource/AllowRotationLambdaArn
   */
  public onSecret(secretId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:secretsmanager:${Region}:${Account}:secret:${SecretId}';
    arn = arn.replace('${SecretId}', secretId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the description text in the request.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDescription(value: string | string[], operator?: string) {
    return this.if(`secretsmanager:Description`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether the secret is to be deleted immediately without any recovery window.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifForceDeleteWithoutRecovery(value?: boolean) {
    return this.if(`secretsmanager:ForceDeleteWithoutRecovery`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the ARN of the KMS key in the request.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifKmsKeyId(value: string | string[], operator?: string) {
    return this.if(`secretsmanager:KmsKeyId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the friendly name of the secret in the request.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifName(value: string | string[], operator?: string) {
    return this.if(`secretsmanager:Name`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the number of days that Secrets Manager waits before it can delete the secret.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifRecoveryWindowInDays(value: number | number[], operator?: string) {
    return this.if(`secretsmanager:RecoveryWindowInDays`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by a tag key and value pair.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * @param tagkey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagkey: string, value: string | string[], operator?: string) {
    return this.if(`secretsmanager:ResourceTag/${ tagkey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of the rotation Lambda function in the request.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifRotationLambdaARN(value: string | string[], operator?: string) {
    return this.if(`secretsmanager:RotationLambdaARN`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by the SecretID value in the request.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifSecretId(value: string | string[], operator?: string) {
    return this.if(`secretsmanager:SecretId`, value, operator || 'ArnEquals');
  }

  /**
   * Filters access by the unique identifier of the version of the secret in the request.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVersionId(value: string | string[], operator?: string) {
    return this.if(`secretsmanager:VersionId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the list of version stages in the request.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVersionStage(value: string | string[], operator?: string) {
    return this.if(`secretsmanager:VersionStage`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of the rotation Lambda function associated with the secret.
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * @param allowRotationLambdaArn The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifResource(allowRotationLambdaArn: string, value: string | string[], operator?: string) {
    return this.if(`secretsmanager:resource/${ allowRotationLambdaArn }`, value, operator || 'ArnEquals');
  }
}
