import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [kms](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awskeymanagementservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Kms extends PolicyStatement {
  public servicePrefix = 'kms';

  /**
   * Statement provider for service [kms](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awskeymanagementservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Controls permission to cancel the scheduled deletion of an AWS KMS key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_CancelKeyDeletion.html
   */
  public toCancelKeyDeletion() {
    return this.to('CancelKeyDeletion');
  }

  /**
   * Controls permission to connect or reconnect a custom key store to its associated AWS CloudHSM cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ConnectCustomKeyStore.html
   */
  public toConnectCustomKeyStore() {
    return this.to('ConnectCustomKeyStore');
  }

  /**
   * Controls permission to create an alias for an AWS KMS key. Aliases are optional friendly names that you can associate with KMS keys
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateAlias.html
   */
  public toCreateAlias() {
    return this.to('CreateAlias');
  }

  /**
   * Controls permission to create a custom key store that is associated with an AWS CloudHSM cluster that you own and manage
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   *
   * Dependent actions:
   * - cloudhsm:DescribeClusters
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateCustomKeyStore.html
   */
  public toCreateCustomKeyStore() {
    return this.to('CreateCustomKeyStore');
  }

  /**
   * Controls permission to add a grant to an AWS KMS key. You can use grants to add permissions without changing the key policy or IAM policy
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifGrantConstraintType()
   * - .ifGrantIsForAWSResource()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html
   */
  public toCreateGrant() {
    return this.to('CreateGrant');
  }

  /**
   * Controls permission to create an AWS KMS key that can be used to protect data keys and other sensitive information
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifBypassPolicyLockoutSafetyCheck()
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - kms:PutKeyPolicy
   * - kms:TagResource
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html
   */
  public toCreateKey() {
    return this.to('CreateKey');
  }

  /**
   * Controls permission to decrypt ciphertext that was encrypted under an AWS KMS key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifEncryptionAlgorithm()
   * - .ifEncryptionContextKeys()
   * - .ifRequestAlias()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_Decrypt.html
   */
  public toDecrypt() {
    return this.to('Decrypt');
  }

  /**
   * Controls permission to delete an alias. Aliases are optional friendly names that you can associate with AWS KMS keys
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DeleteAlias.html
   */
  public toDeleteAlias() {
    return this.to('DeleteAlias');
  }

  /**
   * Controls permission to delete a custom key store
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DeleteCustomKeyStore.html
   */
  public toDeleteCustomKeyStore() {
    return this.to('DeleteCustomKeyStore');
  }

  /**
   * Controls permission to delete cryptographic material that you imported into an AWS KMS key. This action makes the key unusable
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DeleteImportedKeyMaterial.html
   */
  public toDeleteImportedKeyMaterial() {
    return this.to('DeleteImportedKeyMaterial');
  }

  /**
   * Controls permission to view detailed information about custom key stores in the account and region
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCallerAccount()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeCustomKeyStores.html
   */
  public toDescribeCustomKeyStores() {
    return this.to('DescribeCustomKeyStores');
  }

  /**
   * Controls permission to view detailed information about an AWS KMS key
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifRequestAlias()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html
   */
  public toDescribeKey() {
    return this.to('DescribeKey');
  }

  /**
   * Controls permission to disable an AWS KMS key, which prevents it from being used in cryptographic operations
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DisableKey.html
   */
  public toDisableKey() {
    return this.to('DisableKey');
  }

  /**
   * Controls permission to disable automatic rotation of a customer managed AWS KMS key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DisableKeyRotation.html
   */
  public toDisableKeyRotation() {
    return this.to('DisableKeyRotation');
  }

  /**
   * Controls permission to disconnect the custom key store from its associated AWS CloudHSM cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DisconnectCustomKeyStore.html
   */
  public toDisconnectCustomKeyStore() {
    return this.to('DisconnectCustomKeyStore');
  }

  /**
   * Controls permission to change the state of an AWS KMS key to enabled. This allows the KMS key to be used in cryptographic operations
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKey.html
   */
  public toEnableKey() {
    return this.to('EnableKey');
  }

  /**
   * Controls permission to enable automatic rotation of the cryptographic material in an AWS KMS key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKeyRotation.html
   */
  public toEnableKeyRotation() {
    return this.to('EnableKeyRotation');
  }

  /**
   * Controls permission to use the specified AWS KMS key to encrypt data and data keys
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifEncryptionAlgorithm()
   * - .ifEncryptionContextKeys()
   * - .ifRequestAlias()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html
   */
  public toEncrypt() {
    return this.to('Encrypt');
  }

  /**
   * Controls permission to use the AWS KMS key to generate data keys. You can use the data keys to encrypt data outside of AWS KMS
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifEncryptionAlgorithm()
   * - .ifEncryptionContextKeys()
   * - .ifRequestAlias()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKey.html
   */
  public toGenerateDataKey() {
    return this.to('GenerateDataKey');
  }

  /**
   * Controls permission to use the AWS KMS key to generate data key pairs
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifDataKeyPairSpec()
   * - .ifEncryptionAlgorithm()
   * - .ifEncryptionContextKeys()
   * - .ifRequestAlias()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyPair.html
   */
  public toGenerateDataKeyPair() {
    return this.to('GenerateDataKeyPair');
  }

  /**
   * Controls permission to use the AWS KMS key to generate data key pairs. Unlike the GenerateDataKeyPair operation, this operation returns an encrypted private key without a plaintext copy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifDataKeyPairSpec()
   * - .ifEncryptionAlgorithm()
   * - .ifEncryptionContextKeys()
   * - .ifRequestAlias()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyPairWithoutPlaintext.html
   */
  public toGenerateDataKeyPairWithoutPlaintext() {
    return this.to('GenerateDataKeyPairWithoutPlaintext');
  }

  /**
   * Controls permission to use the AWS KMS key to generate a data key. Unlike the GenerateDataKey operation, this operation returns an encrypted data key without a plaintext version of the data key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifEncryptionAlgorithm()
   * - .ifEncryptionContextKeys()
   * - .ifRequestAlias()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyWithoutPlaintext.html
   */
  public toGenerateDataKeyWithoutPlaintext() {
    return this.to('GenerateDataKeyWithoutPlaintext');
  }

  /**
   * Controls permission to get a cryptographically secure random byte string from AWS KMS
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateRandom.html
   */
  public toGenerateRandom() {
    return this.to('GenerateRandom');
  }

  /**
   * Controls permission to view the key policy for the specified AWS KMS key
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GetKeyPolicy.html
   */
  public toGetKeyPolicy() {
    return this.to('GetKeyPolicy');
  }

  /**
   * Controls permission to determine whether automatic key rotation is enabled on the AWS KMS key
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GetKeyRotationStatus.html
   */
  public toGetKeyRotationStatus() {
    return this.to('GetKeyRotationStatus');
  }

  /**
   * Controls permission to get data that is required to import cryptographic material into a customer managed key, including a public key and import token
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   * - .ifWrappingAlgorithm()
   * - .ifWrappingKeySpec()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GetParametersForImport.html
   */
  public toGetParametersForImport() {
    return this.to('GetParametersForImport');
  }

  /**
   * Controls permission to download the public key of an asymmetric AWS KMS key
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifRequestAlias()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html
   */
  public toGetPublicKey() {
    return this.to('GetPublicKey');
  }

  /**
   * Controls permission to import cryptographic material into an AWS KMS key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifExpirationModel()
   * - .ifValidTo()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ImportKeyMaterial.html
   */
  public toImportKeyMaterial() {
    return this.to('ImportKeyMaterial');
  }

  /**
   * Controls permission to view the aliases that are defined in the account. Aliases are optional friendly names that you can associate with AWS KMS keys
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ListAliases.html
   */
  public toListAliases() {
    return this.to('ListAliases');
  }

  /**
   * Controls permission to view all grants for an AWS KMS key
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifGrantIsForAWSResource()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ListGrants.html
   */
  public toListGrants() {
    return this.to('ListGrants');
  }

  /**
   * Controls permission to view the names of key policies for an AWS KMS key
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ListKeyPolicies.html
   */
  public toListKeyPolicies() {
    return this.to('ListKeyPolicies');
  }

  /**
   * Controls permission to view the key ID and Amazon Resource Name (ARN) of all AWS KMS keys in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ListKeys.html
   */
  public toListKeys() {
    return this.to('ListKeys');
  }

  /**
   * Controls permission to view all tags that are attached to an AWS KMS key
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ListResourceTags.html
   */
  public toListResourceTags() {
    return this.to('ListResourceTags');
  }

  /**
   * Controls permission to view grants in which the specified principal is the retiring principal. Other principals might be able to retire the grant and this principal might be able to retire other grants
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ListRetirableGrants.html
   */
  public toListRetirableGrants() {
    return this.to('ListRetirableGrants');
  }

  /**
   * Controls permission to replace the key policy for the specified AWS KMS key
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifBypassPolicyLockoutSafetyCheck()
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html
   */
  public toPutKeyPolicy() {
    return this.to('PutKeyPolicy');
  }

  /**
   * Controls permission to decrypt data as part of the process that decrypts and reencrypts the data within AWS KMS
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifEncryptionAlgorithm()
   * - .ifEncryptionContextKeys()
   * - .ifReEncryptOnSameKey()
   * - .ifRequestAlias()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ReEncrypt.html
   */
  public toReEncryptFrom() {
    return this.to('ReEncryptFrom');
  }

  /**
   * Controls permission to encrypt data as part of the process that decrypts and reencrypts the data within AWS KMS
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifEncryptionAlgorithm()
   * - .ifEncryptionContextKeys()
   * - .ifReEncryptOnSameKey()
   * - .ifRequestAlias()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ReEncrypt.html
   */
  public toReEncryptTo() {
    return this.to('ReEncryptTo');
  }

  /**
   * Controls permission to replicate a multi-Region primary key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifReplicaRegion()
   * - .ifViaService()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - kms:CreateKey
   * - kms:PutKeyPolicy
   * - kms:TagResource
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ReplicateKey.html
   */
  public toReplicateKey() {
    return this.to('ReplicateKey');
  }

  /**
   * Controls permission to retire a grant. The RetireGrant operation is typically called by the grant user after they complete the tasks that the grant allowed them to perform
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_RetireGrant.html
   */
  public toRetireGrant() {
    return this.to('RetireGrant');
  }

  /**
   * Controls permission to revoke a grant, which denies permission for all operations that depend on the grant
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifGrantIsForAWSResource()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html
   */
  public toRevokeGrant() {
    return this.to('RevokeGrant');
  }

  /**
   * Controls permission to schedule deletion of an AWS KMS key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html
   */
  public toScheduleKeyDeletion() {
    return this.to('ScheduleKeyDeletion');
  }

  /**
   * Controls permission to produce a digital signature for a message
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifMessageType()
   * - .ifRequestAlias()
   * - .ifSigningAlgorithm()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_Sign.html
   */
  public toSign() {
    return this.to('Sign');
  }

  /**
   * Controls access to internal APIs that synchronize multi-Region keys
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-auth.html#multi-region-auth-slr
   */
  public toSynchronizeMultiRegionKey() {
    return this.to('SynchronizeMultiRegionKey');
  }

  /**
   * Controls permission to create or update tags that are attached to an AWS KMS key
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Controls permission to delete tags that are attached to an AWS KMS key
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Controls permission to associate an alias with a different AWS KMS key. An alias is an optional friendly name that you can associate with a KMS key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_UpdateAlias.html
   */
  public toUpdateAlias() {
    return this.to('UpdateAlias');
  }

  /**
   * Controls permission to change the properties of a custom key store
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_UpdateCustomKeyStore.html
   */
  public toUpdateCustomKeyStore() {
    return this.to('UpdateCustomKeyStore');
  }

  /**
   * Controls permission to delete or change the description of an AWS KMS key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_UpdateKeyDescription.html
   */
  public toUpdateKeyDescription() {
    return this.to('UpdateKeyDescription');
  }

  /**
   * Controls permission to update the primary Region of a multi-Region primary key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifPrimaryRegion()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_UpdatePrimaryRegion.html
   */
  public toUpdatePrimaryRegion() {
    return this.to('UpdatePrimaryRegion');
  }

  /**
   * Controls permission to use the specified AWS KMS key to verify digital signatures
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifMessageType()
   * - .ifRequestAlias()
   * - .ifSigningAlgorithm()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_Verify.html
   */
  public toVerify() {
    return this.to('Verify');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelKeyDeletion',
      'ConnectCustomKeyStore',
      'CreateAlias',
      'CreateCustomKeyStore',
      'CreateKey',
      'Decrypt',
      'DeleteAlias',
      'DeleteCustomKeyStore',
      'DeleteImportedKeyMaterial',
      'DisableKey',
      'DisableKeyRotation',
      'DisconnectCustomKeyStore',
      'EnableKey',
      'EnableKeyRotation',
      'Encrypt',
      'GenerateDataKey',
      'GenerateDataKeyPair',
      'GenerateDataKeyPairWithoutPlaintext',
      'GenerateDataKeyWithoutPlaintext',
      'GenerateRandom',
      'ImportKeyMaterial',
      'ReEncryptFrom',
      'ReEncryptTo',
      'ReplicateKey',
      'ScheduleKeyDeletion',
      'Sign',
      'SynchronizeMultiRegionKey',
      'UpdateAlias',
      'UpdateCustomKeyStore',
      'UpdateKeyDescription',
      'UpdatePrimaryRegion',
      'Verify'
    ],
    'Permissions management': [
      'CreateGrant',
      'PutKeyPolicy',
      'RetireGrant',
      'RevokeGrant'
    ],
    Read: [
      'DescribeCustomKeyStores',
      'DescribeKey',
      'GetKeyPolicy',
      'GetKeyRotationStatus',
      'GetParametersForImport',
      'GetPublicKey'
    ],
    List: [
      'ListAliases',
      'ListGrants',
      'ListKeyPolicies',
      'ListKeys',
      'ListResourceTags',
      'ListRetirableGrants'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

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
    return this.on(`arn:${ partition || 'aws' }:kms:${ region || '*' }:${ account || '*' }:alias/${ alias }`);
  }

  /**
   * Adds a resource of type key to the statement
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys
   *
   * @param keyId - Identifier for the keyId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onKey(keyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:kms:${ region || '*' }:${ account || '*' }:key/${ keyId }`);
  }

  /**
   * Filters access to the CreateKey and PutKeyPolicy operations based on the value of the BypassPolicyLockoutSafetyCheck parameter in the request
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-bypass-policy-lockout-safety-check
   *
   * Applies to actions:
   * - .toCreateKey()
   * - .toPutKeyPolicy()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifBypassPolicyLockoutSafetyCheck(value?: boolean) {
    return this.if(`BypassPolicyLockoutSafetyCheck`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account
   *
   * Applies to actions:
   * - .toCancelKeyDeletion()
   * - .toConnectCustomKeyStore()
   * - .toCreateAlias()
   * - .toCreateCustomKeyStore()
   * - .toCreateGrant()
   * - .toCreateKey()
   * - .toDecrypt()
   * - .toDeleteAlias()
   * - .toDeleteCustomKeyStore()
   * - .toDeleteImportedKeyMaterial()
   * - .toDescribeCustomKeyStores()
   * - .toDescribeKey()
   * - .toDisableKey()
   * - .toDisableKeyRotation()
   * - .toDisconnectCustomKeyStore()
   * - .toEnableKey()
   * - .toEnableKeyRotation()
   * - .toEncrypt()
   * - .toGenerateDataKey()
   * - .toGenerateDataKeyPair()
   * - .toGenerateDataKeyPairWithoutPlaintext()
   * - .toGenerateDataKeyWithoutPlaintext()
   * - .toGetKeyPolicy()
   * - .toGetKeyRotationStatus()
   * - .toGetParametersForImport()
   * - .toGetPublicKey()
   * - .toImportKeyMaterial()
   * - .toListGrants()
   * - .toListKeyPolicies()
   * - .toListResourceTags()
   * - .toPutKeyPolicy()
   * - .toReEncryptFrom()
   * - .toReEncryptTo()
   * - .toReplicateKey()
   * - .toRevokeGrant()
   * - .toScheduleKeyDeletion()
   * - .toSign()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateAlias()
   * - .toUpdateCustomKeyStore()
   * - .toUpdateKeyDescription()
   * - .toUpdatePrimaryRegion()
   * - .toVerify()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCallerAccount(value: string | string[], operator?: Operator | string) {
    return this.if(`CallerAccount`, value, operator || 'StringLike');
  }

  /**
   * The kms:CustomerMasterKeySpec condition key is deprecated. Instead, use the kms:KeySpec condition key.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-key-spec-replaced
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCustomerMasterKeySpec(value: string | string[], operator?: Operator | string) {
    return this.if(`CustomerMasterKeySpec`, value, operator || 'StringLike');
  }

  /**
   * The kms:CustomerMasterKeyUsage condition key is deprecated. Instead, use the kms:KeyUsage condition key.
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-key-usage-replaced
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCustomerMasterKeyUsage(value: string | string[], operator?: Operator | string) {
    return this.if(`CustomerMasterKeyUsage`, value, operator || 'StringLike');
  }

  /**
   * Filters access to GenerateDataKeyPair and GenerateDataKeyPairWithoutPlaintext operations based on the value of the KeyPairSpec parameter in the request
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-data-key-pair-spec
   *
   * Applies to actions:
   * - .toGenerateDataKeyPair()
   * - .toGenerateDataKeyPairWithoutPlaintext()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDataKeyPairSpec(value: string | string[], operator?: Operator | string) {
    return this.if(`DataKeyPairSpec`, value, operator || 'StringLike');
  }

  /**
   * Filters access to encryption operations based on the value of the encryption algorithm in the request
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-algorithm
   *
   * Applies to actions:
   * - .toDecrypt()
   * - .toEncrypt()
   * - .toGenerateDataKey()
   * - .toGenerateDataKeyPair()
   * - .toGenerateDataKeyPairWithoutPlaintext()
   * - .toGenerateDataKeyWithoutPlaintext()
   * - .toReEncryptFrom()
   * - .toReEncryptTo()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEncryptionAlgorithm(value: string | string[], operator?: Operator | string) {
    return this.if(`EncryptionAlgorithm`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the presence of specified keys in the encryption context. The encryption context is an optional element in a cryptographic operation
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-encryption-context-keys
   *
   * Applies to actions:
   * - .toDecrypt()
   * - .toEncrypt()
   * - .toGenerateDataKey()
   * - .toGenerateDataKeyPair()
   * - .toGenerateDataKeyPairWithoutPlaintext()
   * - .toGenerateDataKeyWithoutPlaintext()
   * - .toReEncryptFrom()
   * - .toReEncryptTo()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEncryptionContextKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`EncryptionContextKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access to the ImportKeyMaterial operation based on the value of the ExpirationModel parameter in the request
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-expiration-model
   *
   * Applies to actions:
   * - .toImportKeyMaterial()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifExpirationModel(value: string | string[], operator?: Operator | string) {
    return this.if(`ExpirationModel`, value, operator || 'StringLike');
  }

  /**
   * Filters access to the CreateGrant operation based on the grant constraint in the request
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-grant-constraint-type
   *
   * Applies to actions:
   * - .toCreateGrant()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGrantConstraintType(value: string | string[], operator?: Operator | string) {
    return this.if(`GrantConstraintType`, value, operator || 'StringLike');
  }

  /**
   * Filters access to the CreateGrant operation when the request comes from a specified AWS service
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-grant-is-for-aws-resource
   *
   * Applies to actions:
   * - .toCreateGrant()
   * - .toListGrants()
   * - .toRevokeGrant()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifGrantIsForAWSResource(value?: boolean) {
    return this.if(`GrantIsForAWSResource`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access to the CreateGrant operation based on the operations in the grant
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-grant-operations
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGrantOperations(value: string | string[], operator?: Operator | string) {
    return this.if(`GrantOperations`, value, operator || 'StringLike');
  }

  /**
   * Filters access to the CreateGrant operation based on the grantee principal in the grant
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-grantee-principal
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGranteePrincipal(value: string | string[], operator?: Operator | string) {
    return this.if(`GranteePrincipal`, value, operator || 'StringLike');
  }

  /**
   * Filters access to an API operation based on the Origin property of the AWS KMS key created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-key-origin
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifKeyOrigin(value: string | string[], operator?: Operator | string) {
    return this.if(`KeyOrigin`, value, operator || 'StringLike');
  }

  /**
   * Filters access to an API operation based on the KeySpec property of the AWS KMS key that is created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key resource
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-key-spec
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifKeySpec(value: string | string[], operator?: Operator | string) {
    return this.if(`KeySpec`, value, operator || 'StringLike');
  }

  /**
   * Filters access to an API operation based on the KeyUsage property of the AWS KMS key created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key resource
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-key-usage
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifKeyUsage(value: string | string[], operator?: Operator | string) {
    return this.if(`KeyUsage`, value, operator || 'StringLike');
  }

  /**
   * Filters access to the Sign and Verify operations based on the value of the MessageType parameter in the request
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-message-type
   *
   * Applies to actions:
   * - .toSign()
   * - .toVerify()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMessageType(value: string | string[], operator?: Operator | string) {
    return this.if(`MessageType`, value, operator || 'StringLike');
  }

  /**
   * Filters access to an API operation based on the MultiRegion property of the AWS KMS key created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key resource
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-multi-region
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifMultiRegion(value?: boolean) {
    return this.if(`MultiRegion`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access to an API operation based on the MultiRegionKeyType property of the AWS KMS key created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a KMS key resource
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-multi-region-key-type
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMultiRegionKeyType(value: string | string[], operator?: Operator | string) {
    return this.if(`MultiRegionKeyType`, value, operator || 'StringLike');
  }

  /**
   * Filters access to the UpdatePrimaryRegion operation based on the value of the PrimaryRegion parameter in the request
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-primary-region
   *
   * Applies to actions:
   * - .toUpdatePrimaryRegion()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPrimaryRegion(value: string | string[], operator?: Operator | string) {
    return this.if(`PrimaryRegion`, value, operator || 'StringLike');
  }

  /**
   * Filters access to the ReEncrypt operation when it uses the same AWS KMS key that was used for the Encrypt operation
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-reencrypt-on-same-key
   *
   * Applies to actions:
   * - .toReEncryptFrom()
   * - .toReEncryptTo()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifReEncryptOnSameKey(value?: boolean) {
    return this.if(`ReEncryptOnSameKey`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access to the ReplicateKey operation based on the value of the ReplicaRegion parameter in the request
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-replica-region
   *
   * Applies to actions:
   * - .toReplicateKey()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReplicaRegion(value: string | string[], operator?: Operator | string) {
    return this.if(`ReplicaRegion`, value, operator || 'StringLike');
  }

  /**
   * Filters access to cryptographic operations, DescribeKey, and GetPublicKey based on the alias in the request
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-request-alias
   *
   * Applies to actions:
   * - .toDecrypt()
   * - .toDescribeKey()
   * - .toEncrypt()
   * - .toGenerateDataKey()
   * - .toGenerateDataKeyPair()
   * - .toGenerateDataKeyPairWithoutPlaintext()
   * - .toGenerateDataKeyWithoutPlaintext()
   * - .toGetPublicKey()
   * - .toReEncryptFrom()
   * - .toReEncryptTo()
   * - .toSign()
   * - .toVerify()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestAlias(value: string | string[], operator?: Operator | string) {
    return this.if(`RequestAlias`, value, operator || 'StringLike');
  }

  /**
   * Filters access to specified AWS KMS operations based on aliases associated with the AWS KMS key
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-resource-aliases
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceAliases(value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceAliases`, value, operator || 'StringLike');
  }

  /**
   * Filters access to the CreateGrant operation based on the retiring principal in the grant
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-retiring-principal
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRetiringPrincipal(value: string | string[], operator?: Operator | string) {
    return this.if(`RetiringPrincipal`, value, operator || 'StringLike');
  }

  /**
   * Filters access to the Sign and Verify operations based on the signing algorithm in the request
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-signing-algorithm
   *
   * Applies to actions:
   * - .toSign()
   * - .toVerify()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSigningAlgorithm(value: string | string[], operator?: Operator | string) {
    return this.if(`SigningAlgorithm`, value, operator || 'StringLike');
  }

  /**
   * Filters access to the ImportKeyMaterial operation based on the value of the ValidTo parameter in the request. You can use this condition key to allow users to import key material only when it expires by the specified date
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-valid-to
   *
   * Applies to actions:
   * - .toImportKeyMaterial()
   *
   * @param value The value(s) to check
   * @param operator Works with [date operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Date). **Default:** `DateEquals`
   */
  public ifValidTo(value: Date | string | (Date | string)[], operator?: Operator | string) {
    if (typeof (value as Date).getMonth === "function") {
      value = (value as Date).toISOString();
    } else if (Array.isArray(value)) {
      value = value.map((item) => {
        if (typeof (item as Date).getMonth === "function") {
          item = (item as Date).toISOString();
        }
        return item;
      });
    }
    return this.if(`ValidTo`, value, operator || 'DateEquals');
  }

  /**
   * Filters access when a request made on the principal's behalf comes from a specified AWS service
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-via-service
   *
   * Applies to actions:
   * - .toCancelKeyDeletion()
   * - .toCreateAlias()
   * - .toCreateGrant()
   * - .toCreateKey()
   * - .toDecrypt()
   * - .toDeleteAlias()
   * - .toDeleteImportedKeyMaterial()
   * - .toDescribeKey()
   * - .toDisableKey()
   * - .toDisableKeyRotation()
   * - .toEnableKey()
   * - .toEnableKeyRotation()
   * - .toEncrypt()
   * - .toGenerateDataKey()
   * - .toGenerateDataKeyPair()
   * - .toGenerateDataKeyPairWithoutPlaintext()
   * - .toGenerateDataKeyWithoutPlaintext()
   * - .toGetKeyPolicy()
   * - .toGetKeyRotationStatus()
   * - .toGetParametersForImport()
   * - .toGetPublicKey()
   * - .toImportKeyMaterial()
   * - .toListGrants()
   * - .toListKeyPolicies()
   * - .toListResourceTags()
   * - .toPutKeyPolicy()
   * - .toReEncryptFrom()
   * - .toReEncryptTo()
   * - .toReplicateKey()
   * - .toRevokeGrant()
   * - .toScheduleKeyDeletion()
   * - .toSign()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateAlias()
   * - .toUpdateKeyDescription()
   * - .toUpdatePrimaryRegion()
   * - .toVerify()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifViaService(value: string | string[], operator?: Operator | string) {
    return this.if(`ViaService`, value, operator || 'StringLike');
  }

  /**
   * Filters access to the GetParametersForImport operation based on the value of the WrappingAlgorithm parameter in the request
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-wrapping-algorithm
   *
   * Applies to actions:
   * - .toGetParametersForImport()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWrappingAlgorithm(value: string | string[], operator?: Operator | string) {
    return this.if(`WrappingAlgorithm`, value, operator || 'StringLike');
  }

  /**
   * Filters access to the GetParametersForImport operation based on the value of the WrappingKeySpec parameter in the request
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-wrapping-key-spec
   *
   * Applies to actions:
   * - .toGetParametersForImport()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWrappingKeySpec(value: string | string[], operator?: Operator | string) {
    return this.if(`WrappingKeySpec`, value, operator || 'StringLike');
  }
}
