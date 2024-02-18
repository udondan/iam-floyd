import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [securitylake](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsecuritylake.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Securitylake extends PolicyStatement {
  public servicePrefix = 'securitylake';

  /**
   * Statement provider for service [securitylake](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsecuritylake.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to enable any source type in any region for accounts that are either part of a trusted organization or standalone account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - glue:CreateDatabase
   * - glue:CreateTable
   * - glue:GetDatabase
   * - glue:GetTable
   * - iam:CreateServiceLinkedRole
   * - kms:CreateGrant
   * - kms:DescribeKey
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateAwsLogSource.html
   */
  public toCreateAwsLogSource() {
    return this.to('CreateAwsLogSource');
  }

  /**
   * Grants permission to add a custom source
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - glue:CreateCrawler
   * - glue:CreateDatabase
   * - glue:CreateTable
   * - glue:StartCrawlerSchedule
   * - iam:DeleteRolePolicy
   * - iam:GetRole
   * - iam:PassRole
   * - iam:PutRolePolicy
   * - kms:CreateGrant
   * - kms:DescribeKey
   * - kms:GenerateDataKey
   * - lakeformation:GrantPermissions
   * - lakeformation:RegisterResource
   * - s3:ListBucket
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateCustomLogSource.html
   */
  public toCreateCustomLogSource() {
    return this.to('CreateCustomLogSource');
  }

  /**
   * Grants permission to create a new security data lake
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - events:PutRule
   * - events:PutTargets
   * - iam:CreateServiceLinkedRole
   * - iam:DeleteRolePolicy
   * - iam:GetRole
   * - iam:PassRole
   * - iam:PutRolePolicy
   * - kms:CreateGrant
   * - kms:DescribeKey
   * - lakeformation:GetDataLakeSettings
   * - lakeformation:PutDataLakeSettings
   * - lambda:CreateEventSourceMapping
   * - lambda:CreateFunction
   * - organizations:DescribeOrganization
   * - organizations:ListAccounts
   * - organizations:ListDelegatedServicesForAccount
   * - s3:CreateBucket
   * - s3:ListBucket
   * - s3:PutBucketPolicy
   * - s3:PutBucketPublicAccessBlock
   * - s3:PutBucketVersioning
   * - sqs:CreateQueue
   * - sqs:GetQueueAttributes
   * - sqs:SetQueueAttributes
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateDataLake.html
   */
  public toCreateDataLake() {
    return this.to('CreateDataLake');
  }

  /**
   * Grants permission to get instant notifications about exceptions. Subscribes to the SNS topics for exception notifications
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateDataLakeExceptionSubscription.html
   */
  public toCreateDataLakeExceptionSubscription() {
    return this.to('CreateDataLakeExceptionSubscription');
  }

  /**
   * Grants permission to automatically enable Amazon Security Lake for new member accounts in your organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateDataLakeOrganizationConfiguration.html
   */
  public toCreateDataLakeOrganizationConfiguration() {
    return this.to('CreateDataLakeOrganizationConfiguration');
  }

  /**
   * Grants permission to create a subscriber
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:CreateRole
   * - iam:DeleteRolePolicy
   * - iam:GetRole
   * - iam:PutRolePolicy
   * - lakeformation:GrantPermissions
   * - lakeformation:ListPermissions
   * - lakeformation:RegisterResource
   * - lakeformation:RevokePermissions
   * - ram:GetResourceShareAssociations
   * - ram:GetResourceShares
   * - ram:UpdateResourceShare
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateSubscriber.html
   */
  public toCreateSubscriber() {
    return this.to('CreateSubscriber');
  }

  /**
   * Grants permission to create a webhook invocation to notify a client when there is new data in the data lake
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - events:CreateApiDestination
   * - events:CreateConnection
   * - events:DescribeRule
   * - events:ListApiDestinations
   * - events:ListConnections
   * - events:PutRule
   * - events:PutTargets
   * - iam:DeleteRolePolicy
   * - iam:GetRole
   * - iam:PassRole
   * - s3:GetBucketNotification
   * - s3:PutBucketNotification
   * - sqs:CreateQueue
   * - sqs:DeleteQueue
   * - sqs:GetQueueAttributes
   * - sqs:GetQueueUrl
   * - sqs:SetQueueAttributes
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateSubscriberNotification.html
   */
  public toCreateSubscriberNotification() {
    return this.to('CreateSubscriberNotification');
  }

  /**
   * Grants permission to disable any source type in any region for accounts that are part of a trusted organization or standalone accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteAwsLogSource.html
   */
  public toDeleteAwsLogSource() {
    return this.to('DeleteAwsLogSource');
  }

  /**
   * Grants permission to remove a custom source
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - glue:StopCrawlerSchedule
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteCustomLogSource.html
   */
  public toDeleteCustomLogSource() {
    return this.to('DeleteCustomLogSource');
  }

  /**
   * Grants permission to delete security data lake
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - organizations:DescribeOrganization
   * - organizations:ListDelegatedAdministrators
   * - organizations:ListDelegatedServicesForAccount
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteDataLake.html
   */
  public toDeleteDataLake() {
    return this.to('DeleteDataLake');
  }

  /**
   * Grants permission to unsubscribe from SNS topics for exception notifications. Removes exception notifications for the SNS topic
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteDataLakeExceptionSubscription.html
   */
  public toDeleteDataLakeExceptionSubscription() {
    return this.to('DeleteDataLakeExceptionSubscription');
  }

  /**
   * Grants permission to remove the automatic enablement of Amazon Security Lake access for new organization accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteDataLakeOrganizationConfiguration.html
   */
  public toDeleteDataLakeOrganizationConfiguration() {
    return this.to('DeleteDataLakeOrganizationConfiguration');
  }

  /**
   * Grants permission to delete the specified subscriber
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - events:DeleteApiDestination
   * - events:DeleteConnection
   * - events:DeleteRule
   * - events:DescribeRule
   * - events:ListApiDestinations
   * - events:ListTargetsByRule
   * - events:RemoveTargets
   * - iam:DeleteRole
   * - iam:DeleteRolePolicy
   * - iam:GetRole
   * - iam:ListRolePolicies
   * - lakeformation:ListPermissions
   * - lakeformation:RevokePermissions
   * - sqs:DeleteQueue
   * - sqs:GetQueueUrl
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteSubscriber.html
   */
  public toDeleteSubscriber() {
    return this.to('DeleteSubscriber');
  }

  /**
   * Grants permission to remove a webhook invocation to notify a client when there is new data in the data lake
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - events:DeleteApiDestination
   * - events:DeleteConnection
   * - events:DeleteRule
   * - events:DescribeRule
   * - events:ListApiDestinations
   * - events:ListTargetsByRule
   * - events:RemoveTargets
   * - iam:DeleteRole
   * - iam:DeleteRolePolicy
   * - iam:GetRole
   * - iam:ListRolePolicies
   * - lakeformation:RevokePermissions
   * - sqs:DeleteQueue
   * - sqs:GetQueueUrl
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteSubscriberNotification.html
   */
  public toDeleteSubscriberNotification() {
    return this.to('DeleteSubscriberNotification');
  }

  /**
   * Grants permission to remove the Delegated Administrator account and disable Amazon Security Lake as a service for this organization
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - organizations:DeregisterDelegatedAdministrator
   * - organizations:DescribeOrganization
   * - organizations:ListDelegatedServicesForAccount
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeregisterDataLakeDelegatedAdministrator.html
   */
  public toDeregisterDataLakeDelegatedAdministrator() {
    return this.to('DeregisterDataLakeDelegatedAdministrator');
  }

  /**
   * Grants permission to query the protocol and endpoint that were provided when subscribing to SNS topics for exception notifications
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_GetDataLakeExceptionSubscription.html
   */
  public toGetDataLakeExceptionSubscription() {
    return this.to('GetDataLakeExceptionSubscription');
  }

  /**
   * Grants permission to get an organization’s configuration setting for automatically enabling Amazon Security Lake access for new organization accounts
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - organizations:DescribeOrganization
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_GetDataLakeOrganizationConfiguration.html
   */
  public toGetDataLakeOrganizationConfiguration() {
    return this.to('GetDataLakeOrganizationConfiguration');
  }

  /**
   * Grants permission to get a static snapshot of the security data lake in the current region. The snapshot includes enabled accounts and log sources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_GetDataLakeSources.html
   */
  public toGetDataLakeSources() {
    return this.to('GetDataLakeSources');
  }

  /**
   * Grants permission to get information about subscriber that is already created
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_GetSubscriber.html
   */
  public toGetSubscriber() {
    return this.to('GetSubscriber');
  }

  /**
   * Grants permission to get the list of all non-retryable failures
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_ListDataLakeExceptions.html
   */
  public toListDataLakeExceptions() {
    return this.to('ListDataLakeExceptions');
  }

  /**
   * Grants permission to list information about the security data lakes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_ListDataLakes.html
   */
  public toListDataLakes() {
    return this.to('ListDataLakes');
  }

  /**
   * Grants permission to view the enabled accounts. You can view the enabled sources in the enabled regions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_ListLogSources.html
   */
  public toListLogSources() {
    return this.to('ListLogSources');
  }

  /**
   * Grants permission to list all subscribers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_ListSubscribers.html
   */
  public toListSubscribers() {
    return this.to('ListSubscribers');
  }

  /**
   * Grants permission to list all tags for the resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to designate an account as the Amazon Security Lake administrator account for the organization
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - organizations:DescribeOrganization
   * - organizations:EnableAWSServiceAccess
   * - organizations:ListDelegatedAdministrators
   * - organizations:ListDelegatedServicesForAccount
   * - organizations:RegisterDelegatedAdministrator
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_RegisterDataLakeDelegatedAdministrator.html
   */
  public toRegisterDataLakeDelegatedAdministrator() {
    return this.to('RegisterDataLakeDelegatedAdministrator');
  }

  /**
   * Grants permission to add tags to the resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from the resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a security data lake
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - events:PutRule
   * - events:PutTargets
   * - iam:CreateServiceLinkedRole
   * - iam:DeleteRolePolicy
   * - iam:GetRole
   * - iam:PutRolePolicy
   * - kms:CreateGrant
   * - kms:DescribeKey
   * - lakeformation:GetDataLakeSettings
   * - lakeformation:PutDataLakeSettings
   * - lambda:CreateEventSourceMapping
   * - lambda:CreateFunction
   * - organizations:DescribeOrganization
   * - organizations:ListDelegatedServicesForAccount
   * - s3:CreateBucket
   * - s3:ListBucket
   * - s3:PutBucketPolicy
   * - s3:PutBucketPublicAccessBlock
   * - s3:PutBucketVersioning
   * - sqs:CreateQueue
   * - sqs:GetQueueAttributes
   * - sqs:SetQueueAttributes
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_UpdateDataLake.html
   */
  public toUpdateDataLake() {
    return this.to('UpdateDataLake');
  }

  /**
   * Grants permission to update subscriptions to the SNS topics for exception notifications
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_UpdateDataLakeExceptionSubscription.html
   */
  public toUpdateDataLakeExceptionSubscription() {
    return this.to('UpdateDataLakeExceptionSubscription');
  }

  /**
   * Grants permission to update subscriber
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - events:CreateApiDestination
   * - events:CreateConnection
   * - events:DescribeRule
   * - events:ListApiDestinations
   * - events:ListConnections
   * - events:PutRule
   * - events:PutTargets
   * - iam:DeleteRolePolicy
   * - iam:GetRole
   * - iam:PutRolePolicy
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_UpdateSubscriber.html
   */
  public toUpdateSubscriber() {
    return this.to('UpdateSubscriber');
  }

  /**
   * Grants permission to update a webhook invocation to notify a client when there is new data in the data lake
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - events:CreateApiDestination
   * - events:CreateConnection
   * - events:DescribeRule
   * - events:ListApiDestinations
   * - events:ListConnections
   * - events:PutRule
   * - events:PutTargets
   * - iam:CreateServiceLinkedRole
   * - iam:DeleteRolePolicy
   * - iam:GetRole
   * - iam:PassRole
   * - iam:PutRolePolicy
   * - s3:CreateBucket
   * - s3:GetBucketNotification
   * - s3:ListBucket
   * - s3:PutBucketNotification
   * - s3:PutBucketPolicy
   * - s3:PutBucketPublicAccessBlock
   * - s3:PutBucketVersioning
   * - s3:PutLifecycleConfiguration
   * - sqs:CreateQueue
   * - sqs:DeleteQueue
   * - sqs:GetQueueAttributes
   * - sqs:GetQueueUrl
   * - sqs:SetQueueAttributes
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_UpdateSubscriberNotification.html
   */
  public toUpdateSubscriberNotification() {
    return this.to('UpdateSubscriberNotification');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateAwsLogSource',
      'CreateCustomLogSource',
      'CreateDataLake',
      'CreateDataLakeExceptionSubscription',
      'CreateDataLakeOrganizationConfiguration',
      'CreateSubscriber',
      'CreateSubscriberNotification',
      'DeleteAwsLogSource',
      'DeleteCustomLogSource',
      'DeleteDataLake',
      'DeleteDataLakeExceptionSubscription',
      'DeleteDataLakeOrganizationConfiguration',
      'DeleteSubscriber',
      'DeleteSubscriberNotification',
      'DeregisterDataLakeDelegatedAdministrator',
      'RegisterDataLakeDelegatedAdministrator',
      'UpdateDataLake',
      'UpdateDataLakeExceptionSubscription',
      'UpdateSubscriber',
      'UpdateSubscriberNotification'
    ],
    Read: [
      'GetDataLakeExceptionSubscription',
      'GetDataLakeOrganizationConfiguration',
      'GetDataLakeSources',
      'GetSubscriber'
    ],
    List: [
      'ListDataLakeExceptions',
      'ListDataLakes',
      'ListLogSources',
      'ListSubscribers',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type data-lake to the statement
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DataLakeResource.html
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   */
  public onDataLake(account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securitylake:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:data-lake/default`);
  }

  /**
   * Adds a resource of type subscriber to the statement
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_SubscriberResource.html
   *
   * @param subscriberId - Identifier for the subscriberId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   */
  public onSubscriber(subscriberId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securitylake:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:subscriber/${ subscriberId }`);
  }

  /**
   * Filters access by tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateDataLake()
   * - .toCreateSubscriber()
   * - .toTagResource()
   *
   * Applies to resource types:
   * - data-lake
   * - subscriber
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a tag key and value pair of a resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - data-lake
   * - subscriber
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateDataLake()
   * - .toCreateSubscriber()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
