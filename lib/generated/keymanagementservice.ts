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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Controls permission to cancel the scheduled deletion of a customer master key
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
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ConnectCustomKeyStore.html
   */
  public toConnectCustomKeyStore() {
    return this.to('ConnectCustomKeyStore');
  }

  /**
   * Controls permission to create an alias for a customer master key (CMK). Aliases are optional friendly names that you can associate with customer master keys
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
   * Dependent actions:
   * - cloudhsm:DescribeClusters
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateCustomKeyStore.html
   */
  public toCreateCustomKeyStore() {
    return this.to('CreateCustomKeyStore');
  }

  /**
   * Controls permission to add a grant to a customer master key. You can use grants to add permissions without changing the key policy or IAM policy
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
   * Controls permission to create a customer master key that can be used to protect data keys and other sensitive information
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifBypassPolicyLockoutSafetyCheck()
   * - .ifCustomerMasterKeySpec()
   * - .ifCustomerMasterKeyUsage()
   * - .ifKeyOrigin()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html
   */
  public toCreateKey() {
    return this.to('CreateKey');
  }

  /**
   * Controls permission to decrypt ciphertext that was encrypted under a customer master key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifEncryptionAlgorithm()
   * - .ifEncryptionContextKeys()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_Decrypt.html
   */
  public toDecrypt() {
    return this.to('Decrypt');
  }

  /**
   * Controls permission to delete an alias. Aliases are optional friendly names that you can associate with customer master keys
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
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DeleteCustomKeyStore.html
   */
  public toDeleteCustomKeyStore() {
    return this.to('DeleteCustomKeyStore');
  }

  /**
   * Controls permission to delete cryptographic material that you imported into a customer master key. This action makes the key unusable
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
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeCustomKeyStores.html
   */
  public toDescribeCustomKeyStores() {
    return this.to('DescribeCustomKeyStores');
  }

  /**
   * Controls permission to view detailed information about a customer master key
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html
   */
  public toDescribeKey() {
    return this.to('DescribeKey');
  }

  /**
   * Controls permission to disable a customer master key, which prevents it from being used in cryptographic operations
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
   * Controls permission to disable automatic rotation of a customer managed customer master key
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
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_DisconnectCustomKeyStore.html
   */
  public toDisconnectCustomKeyStore() {
    return this.to('DisconnectCustomKeyStore');
  }

  /**
   * Controls permission to change the state of a customer master key (CMK) to enabled. This allows the CMK to be used in cryptographic operations
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
   * Controls permission to enable automatic rotation of the cryptographic material in a customer master key
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
   * Controls permission to use the specified customer master key to encrypt data and data keys
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifEncryptionAlgorithm()
   * - .ifEncryptionContextKeys()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html
   */
  public toEncrypt() {
    return this.to('Encrypt');
  }

  /**
   * Controls permission to use the customer master key to generate data keys. You can use the data keys to encrypt data outside of AWS KMS
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifEncryptionAlgorithm()
   * - .ifEncryptionContextKeys()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKey.html
   */
  public toGenerateDataKey() {
    return this.to('GenerateDataKey');
  }

  /**
   * Controls permission to use the customer master key to generate data key pairs
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifDataKeyPairSpec()
   * - .ifEncryptionAlgorithm()
   * - .ifEncryptionContextKeys()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyPair.html
   */
  public toGenerateDataKeyPair() {
    return this.to('GenerateDataKeyPair');
  }

  /**
   * Controls permission to use the customer master key to generate data key pairs. Unlike the GenerateDataKeyPair operation, this operation returns an encrypted private key without a plaintext copy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifDataKeyPairSpec()
   * - .ifEncryptionAlgorithm()
   * - .ifEncryptionContextKeys()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyPairWithoutPlaintext.html
   */
  public toGenerateDataKeyPairWithoutPlaintext() {
    return this.to('GenerateDataKeyPairWithoutPlaintext');
  }

  /**
   * Controls permission to use the customer master key to generate a data key. Unlike the GenerateDataKey operation, this operation returns an encrypted data key without a plaintext version of the data key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifEncryptionAlgorithm()
   * - .ifEncryptionContextKeys()
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
   * Controls permission to view the key policy for the specified customer master key
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
   * Controls permission to determine whether automatic key rotation is enabled on the customer master key
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
   * Controls permission to download the public key of an asymmetric customer master key
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html
   */
  public toGetPublicKey() {
    return this.to('GetPublicKey');
  }

  /**
   * Controls permission to import cryptographic material into a customer master key
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
   * Controls permission to view the aliases that are defined in the account. Aliases are optional friendly names that you can associate with customer master keys
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ListAliases.html
   */
  public toListAliases() {
    return this.to('ListAliases');
  }

  /**
   * Controls permission to view all grants for a customer master key
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
   * Controls permission to view the names of key policies for a customer master key
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
   * Controls permission to view the key ID and Amazon Resource Name (ARN) of all customer master keys in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ListKeys.html
   */
  public toListKeys() {
    return this.to('ListKeys');
  }

  /**
   * Controls permission to view all tags that are attached to a customer master key
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
   * Controls permission to replace the key policy for the specified customer master key
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
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_ReEncrypt.html
   */
  public toReEncryptTo() {
    return this.to('ReEncryptTo');
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
   * Controls permission to schedule deletion of a customer master key
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
   * - .ifSigningAlgorithm()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_Sign.html
   */
  public toSign() {
    return this.to('Sign');
  }

  /**
   * Controls permission to create or update tags that are attached to a customer master key
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
   * Controls permission to delete tags that are attached to a customer master key
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
   * Controls permission to associate an alias with a different customer master key. An alias is an optional friendly name that you can associate with a customer master key
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
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_UpdateCustomKeyStore.html
   */
  public toUpdateCustomKeyStore() {
    return this.to('UpdateCustomKeyStore');
  }

  /**
   * Controls permission to delete or change the description of a customer master key
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
   * Controls permission to use the specified customer master key to verify digital signatures
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCallerAccount()
   * - .ifMessageType()
   * - .ifSigningAlgorithm()
   * - .ifViaService()
   *
   * https://docs.aws.amazon.com/kms/latest/APIReference/API_Verify.html
   */
  public toVerify() {
    return this.to('Verify');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelKeyDeletion",
      "ConnectCustomKeyStore",
      "CreateAlias",
      "CreateCustomKeyStore",
      "CreateKey",
      "Decrypt",
      "DeleteAlias",
      "DeleteCustomKeyStore",
      "DeleteImportedKeyMaterial",
      "DisableKey",
      "DisableKeyRotation",
      "DisconnectCustomKeyStore",
      "EnableKey",
      "EnableKeyRotation",
      "Encrypt",
      "GenerateDataKey",
      "GenerateDataKeyPair",
      "GenerateDataKeyPairWithoutPlaintext",
      "GenerateDataKeyWithoutPlaintext",
      "GenerateRandom",
      "ImportKeyMaterial",
      "ReEncryptFrom",
      "ReEncryptTo",
      "ScheduleKeyDeletion",
      "Sign",
      "UpdateAlias",
      "UpdateCustomKeyStore",
      "UpdateKeyDescription",
      "Verify"
    ],
    "Permissions management": [
      "CreateGrant",
      "PutKeyPolicy",
      "RetireGrant",
      "RevokeGrant"
    ],
    "Read": [
      "DescribeCustomKeyStores",
      "DescribeKey",
      "GetKeyPolicy",
      "GetKeyRotationStatus",
      "GetParametersForImport",
      "GetPublicKey"
    ],
    "List": [
      "ListAliases",
      "ListGrants",
      "ListKeyPolicies",
      "ListKeys",
      "ListResourceTags",
      "ListRetirableGrants"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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
    var arn = 'arn:${Partition}:kms:${Region}:${Account}:alias/${Alias}';
    arn = arn.replace('${Alias}', alias);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
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
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    return this.if(`kms:BypassPolicyLockoutSafetyCheck`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access to specified AWS KMS operations based on the AWS account ID of the caller. You can use this condition key to allow or deny access to all IAM users and roles in an AWS account in a single policy statement
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-caller-account
   *
   * Applies to actions:
   * - .toCancelKeyDeletion()
   * - .toCreateAlias()
   * - .toCreateGrant()
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
   * - .toRevokeGrant()
   * - .toScheduleKeyDeletion()
   * - .toSign()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateAlias()
   * - .toUpdateKeyDescription()
   * - .toVerify()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCallerAccount(value: string | string[], operator?: Operator | string) {
    return this.if(`CallerAccount`, value, operator || 'StringLike');
  }

  /**
   * Filters access to an API operation based on the CustomerMasterKeySpec property of the CMK that is created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a CMK resource
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-customer-master-key-spec
   *
   * Applies to actions:
   * - .toCreateKey()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCustomerMasterKeySpec(value: string | string[], operator?: Operator | string) {
    return this.if(`CustomerMasterKeySpec`, value, operator || 'StringLike');
  }

  /**
   * Filters access to an API operation based on the KeyUsage property of the CMK created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a CMK resource
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-customer-master-key-usage
   *
   * Applies to actions:
   * - .toCreateKey()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCustomerMasterKeyUsage(value: string | string[], operator?: Operator | string) {
    return this.if(`CustomerMasterKeyUsage`, value, operator || 'StringLike');
  }

  /**
   * Filters access to GenerateDataKeyPair and GenerateDataKeyPairWithoutPlaintext operations based on the value of the DataKeyPairSpec parameter in the request
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
    return this.if(`kms:GrantIsForAWSResource`, (typeof value !== 'undefined' ? value : true), 'Bool');
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
   * Filters access to an API operation based on the Origin property of the CMK created by or used in the operation. Use it to qualify authorization of the CreateKey operation or any operation that is authorized for a CMK resource
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-key-origin
   *
   * Applies to actions:
   * - .toCreateKey()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifKeyOrigin(value: string | string[], operator?: Operator | string) {
    return this.if(`KeyOrigin`, value, operator || 'StringLike');
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
   * Filters access to the ReEncrypt operation when it uses the same customer master key that was used for the Encrypt operation
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
    return this.if(`kms:ReEncryptOnSameKey`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access to cryptographic operations, DescribeKey, and GetPublicKey based on the alias in the request
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms-request-alias
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestAlias(value: string | string[], operator?: Operator | string) {
    return this.if(`RequestAlias`, value, operator || 'StringLike');
  }

  /**
   * Filters access to specified AWS KMS operations based on aliases associated with the customer master key
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
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifValidTo(value: number | number[], operator?: Operator | string) {
    return this.if(`ValidTo`, value, operator || 'NumericEquals');
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
   * - .toRevokeGrant()
   * - .toScheduleKeyDeletion()
   * - .toSign()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateAlias()
   * - .toUpdateKeyDescription()
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
