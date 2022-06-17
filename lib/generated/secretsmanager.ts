import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [secretsmanager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecretsmanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Secretsmanager extends PolicyStatement {
  public servicePrefix = 'secretsmanager';

  /**
   * Statement provider for service [secretsmanager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecretsmanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel an in-progress secret rotation
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   * - .ifSecretPrimaryRegion()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CancelRotateSecret.html
   */
  public toCancelRotateSecret() {
    return this.to('CancelRotateSecret');
  }

  /**
   * Grants permission to create a secret that stores encrypted data that can be queried and rotated
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifName()
   * - .ifDescription()
   * - .ifKmsKeyId()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifResourceTag()
   * - .ifAddReplicaRegions()
   * - .ifForceOverwriteReplicaSecret()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html
   */
  public toCreateSecret() {
    return this.to('CreateSecret');
  }

  /**
   * Grants permission to delete the resource policy attached to a secret
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   * - .ifSecretPrimaryRegion()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to delete a secret
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifRecoveryWindowInDays()
   * - .ifForceDeleteWithoutRecovery()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   * - .ifSecretPrimaryRegion()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DeleteSecret.html
   */
  public toDeleteSecret() {
    return this.to('DeleteSecret');
  }

  /**
   * Grants permission to retrieve the metadata about a secret, but not the encrypted data
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   * - .ifSecretPrimaryRegion()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DescribeSecret.html
   */
  public toDescribeSecret() {
    return this.to('DescribeSecret');
  }

  /**
   * Grants permission to generate a random string for use in password creation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetRandomPassword.html
   */
  public toGetRandomPassword() {
    return this.to('GetRandomPassword');
  }

  /**
   * Grants permission to get the resource policy attached to a secret
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   * - .ifSecretPrimaryRegion()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to retrieve and decrypt the encrypted data
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifVersionId()
   * - .ifVersionStage()
   * - .ifResource()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   * - .ifSecretPrimaryRegion()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
   */
  public toGetSecretValue() {
    return this.to('GetSecretValue');
  }

  /**
   * Grants permission to list the available versions of a secret
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   * - .ifSecretPrimaryRegion()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_ListSecretVersionIds.html
   */
  public toListSecretVersionIds() {
    return this.to('ListSecretVersionIds');
  }

  /**
   * Grants permission to list the available secrets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_ListSecrets.html
   */
  public toListSecrets() {
    return this.to('ListSecrets');
  }

  /**
   * Grants permission to attach a resource policy to a secret
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   * - .ifBlockPublicPolicy()
   * - .ifSecretPrimaryRegion()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to create a new version of the secret with new encrypted data
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   * - .ifSecretPrimaryRegion()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_PutSecretValue.html
   */
  public toPutSecretValue() {
    return this.to('PutSecretValue');
  }

  /**
   * Grants permission to remove regions from replication
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   * - .ifSecretPrimaryRegion()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_RemoveRegionsFromReplication.html
   */
  public toRemoveRegionsFromReplication() {
    return this.to('RemoveRegionsFromReplication');
  }

  /**
   * Grants permission to convert an existing secret to a multi-Region secret and begin replicating the secret to a list of new regions
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   * - .ifSecretPrimaryRegion()
   * - .ifAddReplicaRegions()
   * - .ifForceOverwriteReplicaSecret()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_ReplicateSecretToRegions.html
   */
  public toReplicateSecretToRegions() {
    return this.to('ReplicateSecretToRegions');
  }

  /**
   * Grants permission to cancel deletion of a secret
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   * - .ifSecretPrimaryRegion()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_RestoreSecret.html
   */
  public toRestoreSecret() {
    return this.to('RestoreSecret');
  }

  /**
   * Grants permission to start rotation of a secret
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifRotationLambdaARN()
   * - .ifResource()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   * - .ifSecretPrimaryRegion()
   * - .ifModifyRotationRules()
   * - .ifRotateImmediately()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_RotateSecret.html
   */
  public toRotateSecret() {
    return this.to('RotateSecret');
  }

  /**
   * Grants permission to remove the secret from replication and promote the secret to a regional secret in the replica Region
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   * - .ifSecretPrimaryRegion()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_StopReplicationToReplica.html
   */
  public toStopReplicationToReplica() {
    return this.to('StopReplicationToReplica');
  }

  /**
   * Grants permission to add tags to a secret
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifResource()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   * - .ifSecretPrimaryRegion()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a secret
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifAwsTagKeys()
   * - .ifResource()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   * - .ifSecretPrimaryRegion()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a secret with new metadata or with a new version of the encrypted data
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifDescription()
   * - .ifKmsKeyId()
   * - .ifResource()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   * - .ifSecretPrimaryRegion()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_UpdateSecret.html
   */
  public toUpdateSecret() {
    return this.to('UpdateSecret');
  }

  /**
   * Grants permission to move a stage from one secret to another
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifVersionStage()
   * - .ifResource()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   * - .ifSecretPrimaryRegion()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_UpdateSecretVersionStage.html
   */
  public toUpdateSecretVersionStage() {
    return this.to('UpdateSecretVersionStage');
  }

  /**
   * Grants permission to validate a resource policy before attaching policy
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifSecretId()
   * - .ifResource()
   * - .ifResourceTag()
   * - .ifAwsResourceTag()
   * - .ifSecretPrimaryRegion()
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_ValidateResourcePolicy.html
   */
  public toValidateResourcePolicy() {
    return this.to('ValidateResourcePolicy');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelRotateSecret',
      'CreateSecret',
      'DeleteSecret',
      'PutSecretValue',
      'RemoveRegionsFromReplication',
      'ReplicateSecretToRegions',
      'RestoreSecret',
      'RotateSecret',
      'StopReplicationToReplica',
      'UpdateSecret',
      'UpdateSecretVersionStage'
    ],
    'Permissions management': [
      'DeleteResourcePolicy',
      'PutResourcePolicy',
      'ValidateResourcePolicy'
    ],
    Read: [
      'DescribeSecret',
      'GetRandomPassword',
      'GetResourcePolicy',
      'GetSecretValue',
      'ListSecretVersionIds'
    ],
    List: [
      'ListSecrets'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Secret to the statement
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-resources
   *
   * @param secretId - Identifier for the secretId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifResourceTag()
   * - .ifResource()
   */
  public onSecret(secretId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Secretsmanager.defaultPartition }:secretsmanager:${ region || '*' }:${ account || '*' }:secret:${ secretId }`);
  }

  /**
   * Filters access by the list of Regions in which to replicate the secret
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCreateSecret()
   * - .toReplicateSecretToRegions()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAddReplicaRegions(value: string | string[], operator?: Operator | string) {
    return this.if(`AddReplicaRegions`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether the resource policy blocks broad AWS account access
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toPutResourcePolicy()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifBlockPublicPolicy(value?: boolean) {
    return this.if(`BlockPublicPolicy`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the description text in the request
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCreateSecret()
   * - .toUpdateSecret()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDescription(value: string | string[], operator?: Operator | string) {
    return this.if(`Description`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether the secret is to be deleted immediately without any recovery window
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toDeleteSecret()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifForceDeleteWithoutRecovery(value?: boolean) {
    return this.if(`ForceDeleteWithoutRecovery`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by whether to overwrite a secret with the same name in the destination Region
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCreateSecret()
   * - .toReplicateSecretToRegions()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifForceOverwriteReplicaSecret(value?: boolean) {
    return this.if(`ForceOverwriteReplicaSecret`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the ARN of the KMS key in the request
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCreateSecret()
   * - .toUpdateSecret()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifKmsKeyId(value: string | string[], operator?: Operator | string) {
    return this.if(`KmsKeyId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether the rotation rules of the secret are to be modified
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toRotateSecret()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifModifyRotationRules(value?: boolean) {
    return this.if(`ModifyRotationRules`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the friendly name of the secret in the request
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCreateSecret()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifName(value: string | string[], operator?: Operator | string) {
    return this.if(`Name`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the number of days that Secrets Manager waits before it can delete the secret
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toDeleteSecret()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifRecoveryWindowInDays(value: number | number[], operator?: Operator | string) {
    return this.if(`RecoveryWindowInDays`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by a tag key and value pair
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCancelRotateSecret()
   * - .toCreateSecret()
   * - .toDeleteResourcePolicy()
   * - .toDeleteSecret()
   * - .toDescribeSecret()
   * - .toGetResourcePolicy()
   * - .toGetSecretValue()
   * - .toListSecretVersionIds()
   * - .toPutResourcePolicy()
   * - .toPutSecretValue()
   * - .toRemoveRegionsFromReplication()
   * - .toReplicateSecretToRegions()
   * - .toRestoreSecret()
   * - .toRotateSecret()
   * - .toStopReplicationToReplica()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateSecret()
   * - .toUpdateSecretVersionStage()
   * - .toValidateResourcePolicy()
   *
   * Applies to resource types:
   * - Secret
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by whether the secret is to be rotated immediately
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toRotateSecret()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifRotateImmediately(value?: boolean) {
    return this.if(`RotateImmediately`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the ARN of the rotation Lambda function in the request
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toRotateSecret()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifRotationLambdaARN(value: string | string[], operator?: Operator | string) {
    return this.if(`RotationLambdaARN`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the SecretID value in the request
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCancelRotateSecret()
   * - .toDeleteResourcePolicy()
   * - .toDeleteSecret()
   * - .toDescribeSecret()
   * - .toGetResourcePolicy()
   * - .toGetSecretValue()
   * - .toListSecretVersionIds()
   * - .toPutResourcePolicy()
   * - .toPutSecretValue()
   * - .toRemoveRegionsFromReplication()
   * - .toReplicateSecretToRegions()
   * - .toRestoreSecret()
   * - .toRotateSecret()
   * - .toStopReplicationToReplica()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateSecret()
   * - .toUpdateSecretVersionStage()
   * - .toValidateResourcePolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifSecretId(value: string | string[], operator?: Operator | string) {
    return this.if(`SecretId`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by primary region in which the secret is created
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCancelRotateSecret()
   * - .toDeleteResourcePolicy()
   * - .toDeleteSecret()
   * - .toDescribeSecret()
   * - .toGetResourcePolicy()
   * - .toGetSecretValue()
   * - .toListSecretVersionIds()
   * - .toPutResourcePolicy()
   * - .toPutSecretValue()
   * - .toRemoveRegionsFromReplication()
   * - .toReplicateSecretToRegions()
   * - .toRestoreSecret()
   * - .toRotateSecret()
   * - .toStopReplicationToReplica()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateSecret()
   * - .toUpdateSecretVersionStage()
   * - .toValidateResourcePolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecretPrimaryRegion(value: string | string[], operator?: Operator | string) {
    return this.if(`SecretPrimaryRegion`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the unique identifier of the version of the secret in the request
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toGetSecretValue()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVersionId(value: string | string[], operator?: Operator | string) {
    return this.if(`VersionId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the list of version stages in the request
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toGetSecretValue()
   * - .toUpdateSecretVersionStage()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVersionStage(value: string | string[], operator?: Operator | string) {
    return this.if(`VersionStage`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of the rotation Lambda function associated with the secret
   *
   * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCancelRotateSecret()
   * - .toDeleteResourcePolicy()
   * - .toDeleteSecret()
   * - .toDescribeSecret()
   * - .toGetResourcePolicy()
   * - .toGetSecretValue()
   * - .toListSecretVersionIds()
   * - .toPutResourcePolicy()
   * - .toPutSecretValue()
   * - .toRemoveRegionsFromReplication()
   * - .toReplicateSecretToRegions()
   * - .toRestoreSecret()
   * - .toRotateSecret()
   * - .toStopReplicationToReplica()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateSecret()
   * - .toUpdateSecretVersionStage()
   * - .toValidateResourcePolicy()
   *
   * Applies to resource types:
   * - Secret
   *
   * @param allowRotationLambdaArn The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifResource(allowRotationLambdaArn: string, value: string | string[], operator?: Operator | string) {
    return this.if(`resource/${ allowRotationLambdaArn }`, value, operator || 'ArnLike');
  }
}
