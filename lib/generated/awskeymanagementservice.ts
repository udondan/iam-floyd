import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service kms
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awskeymanagementservice.html
 */
export class Kms extends PolicyStatement {
  public servicePrefix = 'kms';
  public actions: Actions = {
    "CancelKeyDeletion": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_CancelKeyDeletion.html",
      "description": "Controls permission to cancel the scheduled deletion of a customer master key.",
      "accessLevel": "Write",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "ConnectCustomKeyStore": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_ConnectCustomKeyStore.html",
      "description": "Controls permission to connect or reconnect a custom key store to its associated AWS CloudHSM cluster.",
      "accessLevel": "Write"
    },
    "CreateAlias": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateAlias.html",
      "description": "Controls permission to create an alias for a customer master key (CMK). Aliases are optional friendly names that you can associate with customer master keys.",
      "accessLevel": "Write",
      "resourceTypes": {
        "alias": {
          "required": true
        },
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "CreateCustomKeyStore": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateCustomKeyStore.html",
      "description": "Controls permission to create a custom key store that is associated with an AWS CloudHSM cluster that you own and manage.",
      "accessLevel": "Write"
    },
    "CreateGrant": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html",
      "description": "Controls permission to add a grant to a customer master key. You can use grants to add permissions without changing the key policy or IAM policy.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:GrantConstraintType",
        "kms:GrantIsForAWSResource",
        "kms:ViaService"
      ]
    },
    "CreateKey": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html",
      "description": "Controls permission to create a customer master key that can be used to protect data keys and other sensitive information.",
      "accessLevel": "Write",
      "conditions": [
        "kms:BypassPolicyLockoutSafetyCheck",
        "kms:CustomerMasterKeySpec",
        "kms:CustomerMasterKeyUsage",
        "kms:KeyOrigin"
      ]
    },
    "Decrypt": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_Decrypt.html",
      "description": "Controls permission to decrypt ciphertext that was encrypted under a customer master key.",
      "accessLevel": "Write",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:EncryptionAlgorithm",
        "kms:EncryptionContextKeys",
        "kms:ViaService"
      ]
    },
    "DeleteAlias": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_DeleteAlias.html",
      "description": "Controls permission to delete an alias. Aliases are optional friendly names that you can associate with customer master keys.",
      "accessLevel": "Write",
      "resourceTypes": {
        "alias": {
          "required": true
        },
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "DeleteCustomKeyStore": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_DeleteCustomKeyStore.html",
      "description": "Controls permission to delete a custom key store.",
      "accessLevel": "Write"
    },
    "DeleteImportedKeyMaterial": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_DeleteImportedKeyMaterial.html",
      "description": "Controls permission to delete cryptographic material that you imported into a customer master key. This action makes the key unusable.",
      "accessLevel": "Write",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "DescribeCustomKeyStores": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeCustomKeyStores.html",
      "description": "Controls permission to view detailed information about custom key stores in the account and region.",
      "accessLevel": "Read"
    },
    "DescribeKey": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html",
      "description": "Controls permission to view detailed information about a customer master key.",
      "accessLevel": "Read",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "DisableKey": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_DisableKey.html",
      "description": "Controls permission to disable a customer master key, which prevents it from being used in cryptographic operations.",
      "accessLevel": "Write",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "DisableKeyRotation": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_DisableKeyRotation.html",
      "description": "Controls permission to disable automatic rotation of a customer managed customer master key.",
      "accessLevel": "Write",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "DisconnectCustomKeyStore": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_DisconnectCustomKeyStore.html",
      "description": "Controls permission to disconnect the custom key store from its associated AWS CloudHSM cluster.",
      "accessLevel": "Write"
    },
    "EnableKey": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKey.html",
      "description": "Controls permission to change the state of a customer master key (CMK) to enabled. This allows the CMK to be used in cryptographic operations.",
      "accessLevel": "Write",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "EnableKeyRotation": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKeyRotation.html",
      "description": "Controls permission to enable automatic rotation of the cryptographic material in a customer master key.",
      "accessLevel": "Write",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "Encrypt": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html",
      "description": "Controls permission to use the specified customer master key to encrypt data and data keys.",
      "accessLevel": "Write",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:EncryptionAlgorithm",
        "kms:EncryptionContextKeys",
        "kms:ViaService"
      ]
    },
    "GenerateDataKey": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKey.html",
      "description": "Controls permission to use the customer master key to generate data keys. You can use the data keys to encrypt data outside of AWS KMS.",
      "accessLevel": "Write",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:EncryptionAlgorithm",
        "kms:EncryptionContextKeys",
        "kms:ViaService"
      ]
    },
    "GenerateDataKeyPair": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyPair.html",
      "description": "Controls permission to use the customer master key to generate data key pairs.",
      "accessLevel": "Write",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:DataKeyPairSpec",
        "kms:EncryptionAlgorithm",
        "kms:EncryptionContextKeys",
        "kms:ViaService"
      ]
    },
    "GenerateDataKeyPairWithoutPlaintext": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyPairWithoutPlaintext.html",
      "description": "Controls permission to use the customer master key to generate data key pairs. Unlike the GenerateDataKeyPair operation, this operation returns an encrypted private key without a plaintext copy.",
      "accessLevel": "Write",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:DataKeyPairSpec",
        "kms:EncryptionAlgorithm",
        "kms:EncryptionContextKeys",
        "kms:ViaService"
      ]
    },
    "GenerateDataKeyWithoutPlaintext": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyWithoutPlaintext.html",
      "description": "Controls permission to use the customer master key to generate a data key. Unlike the GenerateDataKey operation, this operation returns an encrypted data key without a plaintext version of the data key.",
      "accessLevel": "Write",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:EncryptionAlgorithm",
        "kms:EncryptionContextKeys",
        "kms:ViaService"
      ]
    },
    "GenerateRandom": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateRandom.html",
      "description": "Controls permission to get a cryptographically secure random byte string from AWS KMS.",
      "accessLevel": "Write"
    },
    "GetKeyPolicy": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_GetKeyPolicy.html",
      "description": "Controls permission to view the key policy for the specified customer master key.",
      "accessLevel": "Read",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "GetKeyRotationStatus": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_GetKeyRotationStatus.html",
      "description": "Controls permission to determine whether automatic key rotation is enabled on the customer master key.",
      "accessLevel": "Read",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "GetParametersForImport": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_GetParametersForImport.html",
      "description": "Controls permission to get data that is required to import cryptographic material into a customer managed key, including a public key and import token.",
      "accessLevel": "Read",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService",
        "kms:WrappingAlgorithm",
        "kms:WrappingKeySpec"
      ]
    },
    "GetPublicKey": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html",
      "description": "Controls permission to download the public key of an asymmetric customer master key.",
      "accessLevel": "Read",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "ImportKeyMaterial": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_ImportKeyMaterial.html",
      "description": "Controls permission to import cryptographic material into a customer master key.",
      "accessLevel": "Write",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ExpirationModel",
        "kms:ValidTo",
        "kms:ViaService"
      ]
    },
    "ListAliases": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_ListAliases.html",
      "description": "Controls permission to view the aliases that are defined in the account. Aliases are optional friendly names that you can associate with customer master keys.",
      "accessLevel": "List"
    },
    "ListGrants": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_ListGrants.html",
      "description": "Controls permission to view all grants for a customer master key.",
      "accessLevel": "List",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:GrantIsForAWSResource",
        "kms:ViaService"
      ]
    },
    "ListKeyPolicies": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_ListKeyPolicies.html",
      "description": "Controls permission to view the names of key policies for a customer master key.",
      "accessLevel": "List",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "ListKeys": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_ListKeys.html",
      "description": "Controls permission to view the key ID and Amazon Resource Name (ARN) of all customer master keys in the account.",
      "accessLevel": "List"
    },
    "ListResourceTags": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_ListResourceTags.html",
      "description": "Controls permission to view all tags that are attached to a customer master key.",
      "accessLevel": "Read",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "ListRetirableGrants": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_ListRetirableGrants.html",
      "description": "Controls permission to view grants in which the specified principal is the retiring principal. Other principals might be able to retire the grant and this principal might be able to retire other grants.",
      "accessLevel": "List",
      "resourceTypes": {
        "key": {
          "required": true
        }
      }
    },
    "PutKeyPolicy": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html",
      "description": "Controls permission to replace the key policy for the specified customer master key.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:BypassPolicyLockoutSafetyCheck",
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "ReEncryptFrom": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_ReEncrypt.html",
      "description": "Controls permission to decrypt data as part of the process that decrypts and reencrypts the data within AWS KMS.",
      "accessLevel": "Write",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:EncryptionAlgorithm",
        "kms:EncryptionContextKeys",
        "kms:ReEncryptOnSameKey",
        "kms:ViaService"
      ]
    },
    "ReEncryptTo": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_ReEncrypt.html",
      "description": "Controls permission to encrypt data as part of the process that decrypts and reencrypts the data within AWS KMS.",
      "accessLevel": "Write",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:EncryptionAlgorithm",
        "kms:EncryptionContextKeys",
        "kms:ReEncryptOnSameKey",
        "kms:ViaService"
      ]
    },
    "RetireGrant": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_RetireGrant.html",
      "description": "Controls permission to retire a grant. The RetireGrant operation is typically called by the grant user after they complete the tasks that the grant allowed them to perform.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "key": {
          "required": true
        }
      }
    },
    "RevokeGrant": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html",
      "description": "Controls permission to revoke a grant, which denies permission for all operations that depend on the grant.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:GrantIsForAWSResource",
        "kms:ViaService"
      ]
    },
    "ScheduleKeyDeletion": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html",
      "description": "Controls permission to schedule deletion of a customer master key.",
      "accessLevel": "Write",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "Sign": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_Sign.html",
      "description": "Controls permission to produce a digital signature for a message.",
      "accessLevel": "Write",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:MessageType",
        "kms:SigningAlgorithm",
        "kms:ViaService"
      ]
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_TagResource.html",
      "description": "Controls permission to create or update tags that are attached to a customer master key.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_UntagResource.html",
      "description": "Controls permission to delete tags that are attached to a customer master key.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "UpdateAlias": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_UpdateAlias.html",
      "description": "Controls permission to associate an alias with a different customer master key. An alias is an optional friendly name that you can associate with a customer master key.",
      "accessLevel": "Write",
      "resourceTypes": {
        "alias": {
          "required": true
        },
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "UpdateCustomKeyStore": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_UpdateCustomKeyStore.html",
      "description": "Controls permission to change the properties of a custom key store.",
      "accessLevel": "Write"
    },
    "UpdateKeyDescription": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_UpdateKeyDescription.html",
      "description": "Controls permission to delete or change the description of a customer master key.",
      "accessLevel": "Write",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:ViaService"
      ]
    },
    "Verify": {
      "url": "https://docs.aws.amazon.com/kms/latest/APIReference/API_Verify.html",
      "description": "Controls permission to use the specified customer master key to verify digital signatures.",
      "accessLevel": "Write",
      "resourceTypes": {
        "key": {
          "required": true
        }
      },
      "conditions": [
        "kms:CallerAccount",
        "kms:MessageType",
        "kms:SigningAlgorithm",
        "kms:ViaService"
      ]
    }
  };
  public resourceTypes: ResourceTypes = {
    "alias": {
      "name": "alias",
      "url": "https://docs.aws.amazon.com/kms/latest/developerguide/programming-aliases.html",
      "arn": "arn:${Partition}:kms:${Region}:${Account}:alias/${Alias}",
      "conditionKeys": []
    },
    "key": {
      "name": "key",
      "url": "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys",
      "arn": "arn:${Partition}:kms:${Region}:${Account}:key/${KeyId}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service kms
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awskeymanagementservice.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Controls permission to cancel the scheduled deletion of a customer master key.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_CancelKeyDeletion.html
   */
  public cancelKeyDeletion() {
    this.add('kms:CancelKeyDeletion');
    return this;
  }

  /**
   * Controls permission to connect or reconnect a custom key store to its associated AWS CloudHSM cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ConnectCustomKeyStore.html
   */
  public connectCustomKeyStore() {
    this.add('kms:ConnectCustomKeyStore');
    return this;
  }

  /**
   * Controls permission to create an alias for a customer master key (CMK). Aliases are optional friendly names that you can associate with customer master keys.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateAlias.html
   */
  public createAlias() {
    this.add('kms:CreateAlias');
    return this;
  }

  /**
   * Controls permission to create a custom key store that is associated with an AWS CloudHSM cluster that you own and manage.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateCustomKeyStore.html
   */
  public createCustomKeyStore() {
    this.add('kms:CreateCustomKeyStore');
    return this;
  }

  /**
   * Controls permission to add a grant to a customer master key. You can use grants to add permissions without changing the key policy or IAM policy.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html
   */
  public createGrant() {
    this.add('kms:CreateGrant');
    return this;
  }

  /**
   * Controls permission to create a customer master key that can be used to protect data keys and other sensitive information.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html
   */
  public createKey() {
    this.add('kms:CreateKey');
    return this;
  }

  /**
   * Controls permission to decrypt ciphertext that was encrypted under a customer master key.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_Decrypt.html
   */
  public decrypt() {
    this.add('kms:Decrypt');
    return this;
  }

  /**
   * Controls permission to delete an alias. Aliases are optional friendly names that you can associate with customer master keys.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DeleteAlias.html
   */
  public deleteAlias() {
    this.add('kms:DeleteAlias');
    return this;
  }

  /**
   * Controls permission to delete a custom key store.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DeleteCustomKeyStore.html
   */
  public deleteCustomKeyStore() {
    this.add('kms:DeleteCustomKeyStore');
    return this;
  }

  /**
   * Controls permission to delete cryptographic material that you imported into a customer master key. This action makes the key unusable.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DeleteImportedKeyMaterial.html
   */
  public deleteImportedKeyMaterial() {
    this.add('kms:DeleteImportedKeyMaterial');
    return this;
  }

  /**
   * Controls permission to view detailed information about custom key stores in the account and region.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeCustomKeyStores.html
   */
  public describeCustomKeyStores() {
    this.add('kms:DescribeCustomKeyStores');
    return this;
  }

  /**
   * Controls permission to view detailed information about a customer master key.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html
   */
  public describeKey() {
    this.add('kms:DescribeKey');
    return this;
  }

  /**
   * Controls permission to disable a customer master key, which prevents it from being used in cryptographic operations.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DisableKey.html
   */
  public disableKey() {
    this.add('kms:DisableKey');
    return this;
  }

  /**
   * Controls permission to disable automatic rotation of a customer managed customer master key.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DisableKeyRotation.html
   */
  public disableKeyRotation() {
    this.add('kms:DisableKeyRotation');
    return this;
  }

  /**
   * Controls permission to disconnect the custom key store from its associated AWS CloudHSM cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DisconnectCustomKeyStore.html
   */
  public disconnectCustomKeyStore() {
    this.add('kms:DisconnectCustomKeyStore');
    return this;
  }

  /**
   * Controls permission to change the state of a customer master key (CMK) to enabled. This allows the CMK to be used in cryptographic operations.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKey.html
   */
  public enableKey() {
    this.add('kms:EnableKey');
    return this;
  }

  /**
   * Controls permission to enable automatic rotation of the cryptographic material in a customer master key.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKeyRotation.html
   */
  public enableKeyRotation() {
    this.add('kms:EnableKeyRotation');
    return this;
  }

  /**
   * Controls permission to use the specified customer master key to encrypt data and data keys.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html
   */
  public encrypt() {
    this.add('kms:Encrypt');
    return this;
  }

  /**
   * Controls permission to use the customer master key to generate data keys. You can use the data keys to encrypt data outside of AWS KMS.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKey.html
   */
  public generateDataKey() {
    this.add('kms:GenerateDataKey');
    return this;
  }

  /**
   * Controls permission to use the customer master key to generate data key pairs.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyPair.html
   */
  public generateDataKeyPair() {
    this.add('kms:GenerateDataKeyPair');
    return this;
  }

  /**
   * Controls permission to use the customer master key to generate data key pairs. Unlike the GenerateDataKeyPair operation, this operation returns an encrypted private key without a plaintext copy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyPairWithoutPlaintext.html
   */
  public generateDataKeyPairWithoutPlaintext() {
    this.add('kms:GenerateDataKeyPairWithoutPlaintext');
    return this;
  }

  /**
   * Controls permission to use the customer master key to generate a data key. Unlike the GenerateDataKey operation, this operation returns an encrypted data key without a plaintext version of the data key.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyWithoutPlaintext.html
   */
  public generateDataKeyWithoutPlaintext() {
    this.add('kms:GenerateDataKeyWithoutPlaintext');
    return this;
  }

  /**
   * Controls permission to get a cryptographically secure random byte string from AWS KMS.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateRandom.html
   */
  public generateRandom() {
    this.add('kms:GenerateRandom');
    return this;
  }

  /**
   * Controls permission to view the key policy for the specified customer master key.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GetKeyPolicy.html
   */
  public getKeyPolicy() {
    this.add('kms:GetKeyPolicy');
    return this;
  }

  /**
   * Controls permission to determine whether automatic key rotation is enabled on the customer master key.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GetKeyRotationStatus.html
   */
  public getKeyRotationStatus() {
    this.add('kms:GetKeyRotationStatus');
    return this;
  }

  /**
   * Controls permission to get data that is required to import cryptographic material into a customer managed key, including a public key and import token.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GetParametersForImport.html
   */
  public getParametersForImport() {
    this.add('kms:GetParametersForImport');
    return this;
  }

  /**
   * Controls permission to download the public key of an asymmetric customer master key.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html
   */
  public getPublicKey() {
    this.add('kms:GetPublicKey');
    return this;
  }

  /**
   * Controls permission to import cryptographic material into a customer master key.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ImportKeyMaterial.html
   */
  public importKeyMaterial() {
    this.add('kms:ImportKeyMaterial');
    return this;
  }

  /**
   * Controls permission to view the aliases that are defined in the account. Aliases are optional friendly names that you can associate with customer master keys.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ListAliases.html
   */
  public listAliases() {
    this.add('kms:ListAliases');
    return this;
  }

  /**
   * Controls permission to view all grants for a customer master key.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ListGrants.html
   */
  public listGrants() {
    this.add('kms:ListGrants');
    return this;
  }

  /**
   * Controls permission to view the names of key policies for a customer master key.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ListKeyPolicies.html
   */
  public listKeyPolicies() {
    this.add('kms:ListKeyPolicies');
    return this;
  }

  /**
   * Controls permission to view the key ID and Amazon Resource Name (ARN) of all customer master keys in the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ListKeys.html
   */
  public listKeys() {
    this.add('kms:ListKeys');
    return this;
  }

  /**
   * Controls permission to view all tags that are attached to a customer master key.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ListResourceTags.html
   */
  public listResourceTags() {
    this.add('kms:ListResourceTags');
    return this;
  }

  /**
   * Controls permission to view grants in which the specified principal is the retiring principal. Other principals might be able to retire the grant and this principal might be able to retire other grants.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ListRetirableGrants.html
   */
  public listRetirableGrants() {
    this.add('kms:ListRetirableGrants');
    return this;
  }

  /**
   * Controls permission to replace the key policy for the specified customer master key.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html
   */
  public putKeyPolicy() {
    this.add('kms:PutKeyPolicy');
    return this;
  }

  /**
   * Controls permission to decrypt data as part of the process that decrypts and reencrypts the data within AWS KMS.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ReEncrypt.html
   */
  public reEncryptFrom() {
    this.add('kms:ReEncryptFrom');
    return this;
  }

  /**
   * Controls permission to encrypt data as part of the process that decrypts and reencrypts the data within AWS KMS.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ReEncrypt.html
   */
  public reEncryptTo() {
    this.add('kms:ReEncryptTo');
    return this;
  }

  /**
   * Controls permission to retire a grant. The RetireGrant operation is typically called by the grant user after they complete the tasks that the grant allowed them to perform.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_RetireGrant.html
   */
  public retireGrant() {
    this.add('kms:RetireGrant');
    return this;
  }

  /**
   * Controls permission to revoke a grant, which denies permission for all operations that depend on the grant.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html
   */
  public revokeGrant() {
    this.add('kms:RevokeGrant');
    return this;
  }

  /**
   * Controls permission to schedule deletion of a customer master key.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html
   */
  public scheduleKeyDeletion() {
    this.add('kms:ScheduleKeyDeletion');
    return this;
  }

  /**
   * Controls permission to produce a digital signature for a message.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_Sign.html
   */
  public sign() {
    this.add('kms:Sign');
    return this;
  }

  /**
   * Controls permission to create or update tags that are attached to a customer master key.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('kms:TagResource');
    return this;
  }

  /**
   * Controls permission to delete tags that are attached to a customer master key.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('kms:UntagResource');
    return this;
  }

  /**
   * Controls permission to associate an alias with a different customer master key. An alias is an optional friendly name that you can associate with a customer master key.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_UpdateAlias.html
   */
  public updateAlias() {
    this.add('kms:UpdateAlias');
    return this;
  }

  /**
   * Controls permission to change the properties of a custom key store.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_UpdateCustomKeyStore.html
   */
  public updateCustomKeyStore() {
    this.add('kms:UpdateCustomKeyStore');
    return this;
  }

  /**
   * Controls permission to delete or change the description of a customer master key.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_UpdateKeyDescription.html
   */
  public updateKeyDescription() {
    this.add('kms:UpdateKeyDescription');
    return this;
  }

  /**
   * Controls permission to use the specified customer master key to verify digital signatures.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_Verify.html
   */
  public verify() {
    this.add('kms:Verify');
    return this;
  }

  /**
   * Adds a resource of type alias to the statement
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/programming-aliases.html
   *
   * @param alias - Identifier for the alias.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAlias(alias: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kms:${Region}:${Account}:alias/${Alias}';
    arn = arn.replace('${Alias}', alias);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type key to the statement
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys
   *
   * @param keyId - Identifier for the keyId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onKey(keyId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kms:${Region}:${Account}:key/${KeyId}';
    arn = arn.replace('${KeyId}', keyId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Controls access to the CreateKey and PutKeyPolicy operations based on the value of the BypassPolicyLockoutSafetyCheck parameter in the request.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-bypass-policy-lockout-safety-check
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifBypassPolicyLockoutSafetyCheck(value?: boolean) {
    return this.if(`kms:BypassPolicyLockoutSafetyCheck`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Controls access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCallerAccount(value: string | string[], operator?: string) {
    return this.if(`kms:CallerAccount`, value, operator || 'StringLike');
  }

  /**
   * Controls access to an API operation based on the CustomerMasterKeySpec property of the CMK that is created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a CMK resource.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-customer-master-key-spec
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCustomerMasterKeySpec(value: string | string[], operator?: string) {
    return this.if(`kms:CustomerMasterKeySpec`, value, operator || 'StringLike');
  }

  /**
   * Controls access to an API operation based on the KeyUsage property of the CMK created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a CMK resource.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-customer-master-key-usage
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCustomerMasterKeyUsage(value: string | string[], operator?: string) {
    return this.if(`kms:CustomerMasterKeyUsage`, value, operator || 'StringLike');
  }

  /**
   * Controls access to GenerateDataKeyPair and GenerateDataKeyPairWithoutPlaintext operations based on the value of the DataKeyPairSpec parameter in the request.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-data-key-pair-spec
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDataKeyPairSpec(value: string | string[], operator?: string) {
    return this.if(`kms:DataKeyPairSpec`, value, operator || 'StringLike');
  }

  /**
   * Controls access to encryption operations based on the value of the encryption algorithm in the request.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-algorithm
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEncryptionAlgorithm(value: string | string[], operator?: string) {
    return this.if(`kms:EncryptionAlgorithm`, value, operator || 'StringLike');
  }

  /**
   * Controls access based on the presence of specified keys in the encryption context. The encryption context is an optional element in a cryptographic operation.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context-keys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEncryptionContextKeys(value: string | string[], operator?: string) {
    return this.if(`kms:EncryptionContextKeys`, value, operator || 'StringLike');
  }

  /**
   * Controls access to the ImportKeyMaterial operation based on the value of the ExpirationModel parameter in the request.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-expiration-model
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifExpirationModel(value: string | string[], operator?: string) {
    return this.if(`kms:ExpirationModel`, value, operator || 'StringLike');
  }

  /**
   * Controls access to the CreateGrant operation based on the grant constraint in the request.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-grant-constraint-type
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGrantConstraintType(value: string | string[], operator?: string) {
    return this.if(`kms:GrantConstraintType`, value, operator || 'StringLike');
  }

  /**
   * Controls access to the CreateGrant operation when the request comes from a specified AWS service.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-grant-is-for-aws-resource
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifGrantIsForAWSResource(value?: boolean) {
    return this.if(`kms:GrantIsForAWSResource`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Controls access to the CreateGrant operation based on the operations in the grant.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-grant-operations
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGrantOperations(value: string | string[], operator?: string) {
    return this.if(`kms:GrantOperations`, value, operator || 'StringLike');
  }

  /**
   * Controls access to the CreateGrant operation based on the grantee principal in the grant.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-grantee-principal
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGranteePrincipal(value: string | string[], operator?: string) {
    return this.if(`kms:GranteePrincipal`, value, operator || 'StringLike');
  }

  /**
   * Controls access to an API operation based on the Origin property of the CMK created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a CMK resource.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-key-origin
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifKeyOrigin(value: string | string[], operator?: string) {
    return this.if(`kms:KeyOrigin`, value, operator || 'StringLike');
  }

  /**
   * Controls access to the Sign and Verify operations based on the value of the MessageType parameter in the request.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-message-type
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMessageType(value: string | string[], operator?: string) {
    return this.if(`kms:MessageType`, value, operator || 'StringLike');
  }

  /**
   * Controls access to the ReEncrypt operation when it uses the same customer master key that was used for the Encrypt operation.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-reencrypt-on-same-key
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifReEncryptOnSameKey(value?: boolean) {
    return this.if(`kms:ReEncryptOnSameKey`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Controls access to the CreateGrant operation based on the retiring principal in the grant.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-retiring-principal
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRetiringPrincipal(value: string | string[], operator?: string) {
    return this.if(`kms:RetiringPrincipal`, value, operator || 'StringLike');
  }

  /**
   * Controls access to the Sign and Verify operations based on the signing algorithm in the request.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-signing-algorithm
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSigningAlgorithm(value: string | string[], operator?: string) {
    return this.if(`kms:SigningAlgorithm`, value, operator || 'StringLike');
  }

  /**
   * Controls access to the ImportKeyMaterial operation based on the value of the ValidTo parameter in the request. You can use this condition key to allow users to import key material only when it expires by the specified date.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-valid-to
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifValidTo(value: number | number[], operator?: string) {
    return this.if(`kms:ValidTo`, value, operator || 'NumericEquals');
  }

  /**
   * Controls access when a request made on the principal's behalf comes from a specified AWS service.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifViaService(value: string | string[], operator?: string) {
    return this.if(`kms:ViaService`, value, operator || 'StringLike');
  }

  /**
   * Controls access to the GetParametersForImport operation based on the value of the WrappingAlgorithm parameter in the request.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-wrapping-algorithm
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWrappingAlgorithm(value: string | string[], operator?: string) {
    return this.if(`kms:WrappingAlgorithm`, value, operator || 'StringLike');
  }

  /**
   * Controls access to the GetParametersForImport operation based on the value of the WrappingKeySpec parameter in the request.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-wrapping-key-spec
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWrappingKeySpec(value: string | string[], operator?: string) {
    return this.if(`kms:WrappingKeySpec`, value, operator || 'StringLike');
  }
}
