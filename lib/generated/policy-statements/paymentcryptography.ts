import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [payment-cryptography](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspaymentcryptography.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class PaymentCryptography extends PolicyStatement {
  public servicePrefix = 'payment-cryptography';

  /**
   * Statement provider for service [payment-cryptography](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awspaymentcryptography.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add replication regions to an existing AWS Payment Cryptography key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_AddKeyReplicationRegions.html
   */
  public toAddKeyReplicationRegions() {
    return this.to('AddKeyReplicationRegions');
  }

  /**
   * Grants permission to create a user-friendly name for a Key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateAlias.html
   */
  public toCreateAlias() {
    return this.to('CreateAlias');
  }

  /**
   * Grants permission to create a unique customer managed key in the caller's AWS account and region
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifKeyClass()
   * - .ifKeyUsage()
   * - .ifKeyAlgorithm()
   *
   * Dependent actions:
   * - payment-cryptography:TagResource
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html
   */
  public toCreateKey() {
    return this.to('CreateKey');
  }

  /**
   * Grants permission to decrypt ciphertext data to plaintext using symmetric, asymmetric or DUKPT data encryption key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_DecryptData.html
   */
  public toDecryptData() {
    return this.to('DecryptData');
  }

  /**
   * Grants permission to delete the specified alias
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DeleteAlias.html
   */
  public toDeleteAlias() {
    return this.to('DeleteAlias');
  }

  /**
   * Grants permission to schedule the deletion of a Key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DeleteKey.html
   */
  public toDeleteKey() {
    return this.to('DeleteKey');
  }

  /**
   * Grants permission to disable default key replication regions for account-level replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DisableDefaultKeyReplicationRegions.html
   */
  public toDisableDefaultKeyReplicationRegions() {
    return this.to('DisableDefaultKeyReplicationRegions');
  }

  /**
   * Grants permission to enable default key replication regions for account-level replication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_EnableDefaultKeyReplicationRegions.html
   */
  public toEnableDefaultKeyReplicationRegions() {
    return this.to('EnableDefaultKeyReplicationRegions');
  }

  /**
   * Grants permission to encrypt plaintext data to ciphertext using symmetric, asymmetric or DUKPT data encryption key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_EncryptData.html
   */
  public toEncryptData() {
    return this.to('EncryptData');
  }

  /**
   * Grants permission to export a key from the service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   * - .ifCertificateAuthorityPublicKeyIdentifier()
   * - .ifWrappingKeyIdentifier()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ExportKey.html
   */
  public toExportKey() {
    return this.to('ExportKey');
  }

  /**
   * Grants permission to generate card-related data using algorithms such as Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2) or Card Security Codes (CSC) that check the validity of a magnetic stripe card
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_GenerateCardValidationData.html
   */
  public toGenerateCardValidationData() {
    return this.to('GenerateCardValidationData');
  }

  /**
   * Grants permission to generate a MAC (Message Authentication Code) cryptogram
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_GenerateMac.html
   */
  public toGenerateMac() {
    return this.to('GenerateMac');
  }

  /**
   * Grants permission to generate a MAC (Message Authentication Code) cryptogram
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_GenerateMacEmvPinChange.html
   */
  public toGenerateMacEmvPinChange() {
    return this.to('GenerateMacEmvPinChange');
  }

  /**
   * Grants permission to generate pin-related data such as PIN, PIN Verification Value (PVV), PIN Block and PIN Offset during new card issuance or card re-issuance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_GeneratePinData.html
   */
  public toGeneratePinData() {
    return this.to('GeneratePinData');
  }

  /**
   * Grants permission to return the keyArn associated with an aliasName
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetAlias.html
   */
  public toGetAlias() {
    return this.to('GetAlias');
  }

  /**
   * Grants permission to return the Certificate Signing Request for a public key from a key of class PUBLIC_KEY
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetCertificateSigningRequest.html
   */
  public toGetCertificateSigningRequest() {
    return this.to('GetCertificateSigningRequest');
  }

  /**
   * Grants permission to retrieve the default key replication regions configured at the account level
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetDefaultKeyReplicationRegions.html
   */
  public toGetDefaultKeyReplicationRegions() {
    return this.to('GetDefaultKeyReplicationRegions');
  }

  /**
   * Grants permission to return the detailed information about the specified key
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetKey.html
   */
  public toGetKey() {
    return this.to('GetKey');
  }

  /**
   * Grants permission to get the export token and the signing key certificate to initiate a TR-34 key export
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForExport.html
   */
  public toGetParametersForExport() {
    return this.to('GetParametersForExport');
  }

  /**
   * Grants permission to get the import token and the wrapping key certificate to initiate a TR-34 key import
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetParametersForImport.html
   */
  public toGetParametersForImport() {
    return this.to('GetParametersForImport');
  }

  /**
   * Grants permission to return the public key from a key of class PUBLIC_KEY
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetPublicKeyCertificate.html
   */
  public toGetPublicKeyCertificate() {
    return this.to('GetPublicKeyCertificate');
  }

  /**
   * Grants permission to imports keys and public key certificates
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifImportKeyMaterial()
   * - .ifCertificateAuthorityPublicKeyIdentifier()
   * - .ifWrappingKeyIdentifier()
   *
   * Dependent actions:
   * - payment-cryptography:TagResource
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html
   */
  public toImportKey() {
    return this.to('ImportKey');
  }

  /**
   * Grants permission to return a list of aliases created for all keys in the caller's AWS account and Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListAliases.html
   */
  public toListAliases() {
    return this.to('ListAliases');
  }

  /**
   * Grants permission to return a list of keys created in the caller's AWS account and Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListKeys.html
   */
  public toListKeys() {
    return this.to('ListKeys');
  }

  /**
   * Grants permission to return a list of tags created in the caller's AWS account and Region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to re-encrypt ciphertext using DUKPT, Symmetric and Asymmetric Data Encryption Keys
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_ReEncryptData.html
   */
  public toReEncryptData() {
    return this.to('ReEncryptData');
  }

  /**
   * Grants permission to remove replication regions from an existing AWS Payment Cryptography key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_RemoveKeyReplicationRegions.html
   */
  public toRemoveKeyReplicationRegions() {
    return this.to('RemoveKeyReplicationRegions');
  }

  /**
   * Grants permission to cancel a scheduled key deletion if at any point during the waiting period a Key needs to be revived
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_RestoreKey.html
   */
  public toRestoreKey() {
    return this.to('RestoreKey');
  }

  /**
   * Grants permission to enable a disabled Key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_StartKeyUsage.html
   */
  public toStartKeyUsage() {
    return this.to('StartKeyUsage');
  }

  /**
   * Grants permission to disable an enabled Key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_StopKeyUsage.html
   */
  public toStopKeyUsage() {
    return this.to('StopKeyUsage');
  }

  /**
   * Grants permission to add or overwrites one or more tags for the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to translate wrapping key type for a wrapped key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_TranslateKeyMaterial.html
   */
  public toTranslateKeyMaterial() {
    return this.to('TranslateKeyMaterial');
  }

  /**
   * Grants permission to translate encrypted PIN block from and to ISO 9564 formats 0,1,3,4
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_TranslatePinData.html
   */
  public toTranslatePinData() {
    return this.to('TranslatePinData');
  }

  /**
   * Grants permission to remove the specified tag or tags from the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to change the key to which an alias is assigned, or unassign it from its current key
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_UpdateAlias.html
   */
  public toUpdateAlias() {
    return this.to('UpdateAlias');
  }

  /**
   * Grants permission to verify Authorization Request Cryptogram (ARQC) for a EMV chip payment card authorization
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_VerifyAuthRequestCryptogram.html
   */
  public toVerifyAuthRequestCryptogram() {
    return this.to('VerifyAuthRequestCryptogram');
  }

  /**
   * Grants permission to verify card-related validation data using algorithms such as Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2) and Card Security Codes (CSC)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_VerifyCardValidationData.html
   */
  public toVerifyCardValidationData() {
    return this.to('VerifyCardValidationData');
  }

  /**
   * Grants permission to verify MAC (Message Authentication Code) of input data against a provided MAC
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_VerifyMac.html
   */
  public toVerifyMac() {
    return this.to('VerifyMac');
  }

  /**
   * Grants permission to verify pin-related data such as PIN and PIN Offset using algorithms including VISA PVV and IBM3624
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequestAlias()
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_VerifyPinData.html
   */
  public toVerifyPinData() {
    return this.to('VerifyPinData');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddKeyReplicationRegions',
      'CreateAlias',
      'CreateKey',
      'DecryptData',
      'DeleteAlias',
      'DeleteKey',
      'DisableDefaultKeyReplicationRegions',
      'EnableDefaultKeyReplicationRegions',
      'EncryptData',
      'ExportKey',
      'GenerateCardValidationData',
      'GenerateMac',
      'GenerateMacEmvPinChange',
      'GeneratePinData',
      'ImportKey',
      'ReEncryptData',
      'RemoveKeyReplicationRegions',
      'RestoreKey',
      'StartKeyUsage',
      'StopKeyUsage',
      'TranslateKeyMaterial',
      'TranslatePinData',
      'UpdateAlias',
      'VerifyAuthRequestCryptogram',
      'VerifyCardValidationData',
      'VerifyMac',
      'VerifyPinData'
    ],
    Read: [
      'GetAlias',
      'GetCertificateSigningRequest',
      'GetDefaultKeyReplicationRegions',
      'GetKey',
      'GetParametersForExport',
      'GetParametersForImport',
      'GetPublicKeyCertificate',
      'ListTagsForResource'
    ],
    List: [
      'ListAliases',
      'ListKeys'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type key to the statement
   *
   * @param keyId - Identifier for the keyId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceAliases()
   */
  public onKey(keyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:payment-cryptography:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:key/${ keyId }`);
  }

  /**
   * Adds a resource of type alias to the statement
   *
   * @param alias - Identifier for the alias.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifResourceAliases()
   */
  public onAlias(alias: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:payment-cryptography:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:alias/${ alias }`);
  }

  /**
   * Filters access by both the key and value of the tag in the request for the specified operation
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateKey()
   * - .toDeleteAlias()
   * - .toGetAlias()
   * - .toImportKey()
   * - .toTagResource()
   * - .toUpdateAlias()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tags assigned to a key for the specified operation
   *
   * https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/security_iam_service-with-iam.html#security_iam_service-with-iam-tags
   *
   * Applies to resource types:
   * - key
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys in the request for the specified operation
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateKey()
   * - .toDeleteAlias()
   * - .toGetAlias()
   * - .toImportKey()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateAlias()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the CertificateAuthorityPublicKeyIdentifier specified in the request or the ImportKey, and ExportKey operations
   *
   * Applies to actions:
   * - .toExportKey()
   * - .toImportKey()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCertificateAuthorityPublicKeyIdentifier(value: string | string[], operator?: Operator | string) {
    return this.if(`CertificateAuthorityPublicKeyIdentifier`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the type of key material being imported [RootCertificatePublicKey, TrustedCertificatePublicKey, Tr34KeyBlock, Tr31KeyBlock] for the ImportKey operation
   *
   * Applies to actions:
   * - .toImportKey()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifImportKeyMaterial(value: string | string[], operator?: Operator | string) {
    return this.if(`ImportKeyMaterial`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by KeyAlgorithm specified in the request for the CreateKey operation
   *
   * Applies to actions:
   * - .toCreateKey()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifKeyAlgorithm(value: string | string[], operator?: Operator | string) {
    return this.if(`KeyAlgorithm`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by KeyClass specified in the request for the CreateKey operation
   *
   * Applies to actions:
   * - .toCreateKey()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifKeyClass(value: string | string[], operator?: Operator | string) {
    return this.if(`KeyClass`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by KeyClass specified in the request or associated with a key for the CreateKey operation
   *
   * Applies to actions:
   * - .toCreateKey()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifKeyUsage(value: string | string[], operator?: Operator | string) {
    return this.if(`KeyUsage`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by aliases in the request for the specified operation
   *
   * Applies to actions:
   * - .toAddKeyReplicationRegions()
   * - .toDecryptData()
   * - .toDeleteKey()
   * - .toEncryptData()
   * - .toExportKey()
   * - .toGenerateCardValidationData()
   * - .toGenerateMac()
   * - .toGenerateMacEmvPinChange()
   * - .toGeneratePinData()
   * - .toGetCertificateSigningRequest()
   * - .toGetKey()
   * - .toGetPublicKeyCertificate()
   * - .toReEncryptData()
   * - .toRemoveKeyReplicationRegions()
   * - .toRestoreKey()
   * - .toStartKeyUsage()
   * - .toStopKeyUsage()
   * - .toTranslateKeyMaterial()
   * - .toTranslatePinData()
   * - .toVerifyAuthRequestCryptogram()
   * - .toVerifyCardValidationData()
   * - .toVerifyMac()
   * - .toVerifyPinData()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestAlias(value: string | string[], operator?: Operator | string) {
    return this.if(`RequestAlias`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by aliases associated with a key for the specified operation
   *
   * Applies to resource types:
   * - key
   * - alias
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceAliases(value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceAliases`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the WrappingKeyIdentifier specified in the request for the ImportKey, and ExportKey operations
   *
   * Applies to actions:
   * - .toExportKey()
   * - .toImportKey()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWrappingKeyIdentifier(value: string | string[], operator?: Operator | string) {
    return this.if(`WrappingKeyIdentifier`, value, operator ?? 'StringLike');
  }
}
