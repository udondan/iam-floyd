import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
   * Grants permission to enable any source type in any region for accounts that are either part of a trusted organization or standalone accounts
   *
   * Access Level: Write
   *
   * Dependent actions:
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
   * Grants permission to add a custom source name
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
   * Grants permission to create a new Security Data Lake
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
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateDatalake.html
   */
  public toCreateDatalake() {
    return this.to('CreateDatalake');
  }

  /**
   * Grants permission to add to the configuration for automatically enabling Amazon Security Lake access for new organization accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateDatalakeAutoEnable.html
   */
  public toCreateDatalakeAutoEnable() {
    return this.to('CreateDatalakeAutoEnable');
  }

  /**
   * Grants permission to designate the Amazon Security Lake administrator account for the organization
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
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateDatalakeDelegatedAdmin.html
   */
  public toCreateDatalakeDelegatedAdmin() {
    return this.to('CreateDatalakeDelegatedAdmin');
  }

  /**
   * Grants permission to get instant notifications about exceptions by subscribing to the SNS topics for exception notifications
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateDatalakeExceptionsSubscription.html
   */
  public toCreateDatalakeExceptionsSubscription() {
    return this.to('CreateDatalakeExceptionsSubscription');
  }

  /**
   * Grants permission to create a subscription permission for accounts that are already enabled
   *
   * Access Level: Write
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
   * Grants permission to create a webhook invocation to notify a client when there is new data in the Data Lake
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
   * - s3:GetBucketNotification
   * - s3:PutBucketNotification
   * - sqs:CreateQueue
   * - sqs:DeleteQueue
   * - sqs:GetQueueAttributes
   * - sqs:GetQueueUrl
   * - sqs:SetQueueAttributes
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_CreateSubscriptionNotificationConfiguration.html
   */
  public toCreateSubscriptionNotificationConfiguration() {
    return this.to('CreateSubscriptionNotificationConfiguration');
  }

  /**
   * Grants permission to disable any source type in any region for accounts that are either part of a trusted organization or standalone accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteAwsLogSource.html
   */
  public toDeleteAwsLogSource() {
    return this.to('DeleteAwsLogSource');
  }

  /**
   * Grants permission to remove a custom source name
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
   * Grants permission to delete all Security Data Lakes
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - organizations:DescribeOrganization
   * - organizations:ListDelegatedAdministrators
   * - organizations:ListDelegatedServicesForAccount
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteDatalake.html
   */
  public toDeleteDatalake() {
    return this.to('DeleteDatalake');
  }

  /**
   * Grants permission to remove from the existing configuration the automatic enabling of Amazon Security Lake access for new organization accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteDatalakeAutoEnable.html
   */
  public toDeleteDatalakeAutoEnable() {
    return this.to('DeleteDatalakeAutoEnable');
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
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteDatalakeDelegatedAdmin.html
   */
  public toDeleteDatalakeDelegatedAdmin() {
    return this.to('DeleteDatalakeDelegatedAdmin');
  }

  /**
   * Grants permission to unsubscribe from SNS topics for exception notifications. Also, removes the SNS exception notifications topic
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteDatalakeExceptionsSubscription.html
   */
  public toDeleteDatalakeExceptionsSubscription() {
    return this.to('DeleteDatalakeExceptionsSubscription');
  }

  /**
   * Grants permission to delete the specified subscription permissions for accounts that are already enabled
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
   * Grants permission to remove a webhook invocation to notify a client when there is new data in the Data Lake
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
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_DeleteSubscriptionNotificationConfiguration.html
   */
  public toDeleteSubscriptionNotificationConfiguration() {
    return this.to('DeleteSubscriptionNotificationConfiguration');
  }

  /**
   * Grants permission to get information on the Security Data Lake
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_GetDatalake.html
   */
  public toGetDatalake() {
    return this.to('GetDatalake');
  }

  /**
   * Grants permission to get an organization’s configuration setting for the automatic enabling of Amazon Security Lake access for new organization accounts
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - organizations:DescribeOrganization
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_GetDatalakeAutoEnable.html
   */
  public toGetDatalakeAutoEnable() {
    return this.to('GetDatalakeAutoEnable');
  }

  /**
   * Grants permission to allow user to query what was set as the expiration period for the exception message
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_GetDatalakeExceptionsExpiry.html
   */
  public toGetDatalakeExceptionsExpiry() {
    return this.to('GetDatalakeExceptionsExpiry');
  }

  /**
   * Grants permission to query the protocol and endpoint that were supplied when subscribing to the SNS topics for exception notifications
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_GetDatalakeExceptionsSubscription.html
   */
  public toGetDatalakeExceptionsSubscription() {
    return this.to('GetDatalakeExceptionsSubscription');
  }

  /**
   * Grants permission to get a static snapshot of the Security Data Lake in the current region, including enabled accounts and log sources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_GetDatalakeStatus.html
   */
  public toGetDatalakeStatus() {
    return this.to('GetDatalakeStatus');
  }

  /**
   * Grants permission to get subscription information for a subscription permission for accounts that are already enabled
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_GetSubscriber.html
   */
  public toGetSubscriber() {
    return this.to('GetSubscriber');
  }

  /**
   * Grants permission to get information for a webhook invocation to notify a client when there is new data in the Data Lake
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_GetSubscriptionNotificationConfiguration.html
   */
  public toGetSubscriptionNotificationConfiguration() {
    return this.to('GetSubscriptionNotificationConfiguration');
  }

  /**
   * Grants permission to get the list of all non-retry-able failures
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_ListDatalakeExceptions.html
   */
  public toListDatalakeExceptions() {
    return this.to('ListDatalakeExceptions');
  }

  /**
   * Grants permission to show the estate view of enabled accounts with the enabled sources in the enabled regions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_ListLogSources.html
   */
  public toListLogSources() {
    return this.to('ListLogSources');
  }

  /**
   * Grants permission to list all subscription permissions for accounts that are already enabled
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_ListSubscribers.html
   */
  public toListSubscribers() {
    return this.to('ListSubscribers');
  }

  /**
   * Grants permission to update a Security Data Lake
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
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_UpdateDatalake.html
   */
  public toUpdateDatalake() {
    return this.to('UpdateDatalake');
  }

  /**
   * Grants permission to control the time-to-live (TTL) for the exception message to remain in service cache
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_UpdateDatalakeExceptionsExpiry.html
   */
  public toUpdateDatalakeExceptionsExpiry() {
    return this.to('UpdateDatalakeExceptionsExpiry');
  }

  /**
   * Grants permission to update subscriptions to the SNS topics for exception notifications
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_UpdateDatalakeExceptionsSubscription.html
   */
  public toUpdateDatalakeExceptionsSubscription() {
    return this.to('UpdateDatalakeExceptionsSubscription');
  }

  /**
   * Grants permission to update subscription information for a subscription permission for accounts that are already enabled
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
   * Grants permission to update a webhook invocation to notify a client when there is new data in the Data Lake
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
   * - iam:PutRolePolicy
   * - s3:CreateBucket
   * - s3:GetBucketNotification
   * - s3:ListBucket
   * - s3:PutBucketNotification
   * - s3:PutBucketPolicy
   * - s3:PutBucketPublicAccessBlock
   * - s3:PutBucketVersioning
   * - sqs:CreateQueue
   * - sqs:DeleteQueue
   * - sqs:GetQueueAttributes
   * - sqs:GetQueueUrl
   * - sqs:SetQueueAttributes
   *
   * https://docs.aws.amazon.com/security-lake/latest/APIReference/API_UpdateSubscriptionNotificationConfiguration.html
   */
  public toUpdateSubscriptionNotificationConfiguration() {
    return this.to('UpdateSubscriptionNotificationConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateAwsLogSource',
      'CreateCustomLogSource',
      'CreateDatalake',
      'CreateDatalakeAutoEnable',
      'CreateDatalakeDelegatedAdmin',
      'CreateDatalakeExceptionsSubscription',
      'CreateSubscriber',
      'CreateSubscriptionNotificationConfiguration',
      'DeleteAwsLogSource',
      'DeleteCustomLogSource',
      'DeleteDatalake',
      'DeleteDatalakeAutoEnable',
      'DeleteDatalakeDelegatedAdmin',
      'DeleteDatalakeExceptionsSubscription',
      'DeleteSubscriber',
      'DeleteSubscriptionNotificationConfiguration',
      'UpdateDatalake',
      'UpdateDatalakeExceptionsExpiry',
      'UpdateDatalakeExceptionsSubscription',
      'UpdateSubscriber',
      'UpdateSubscriptionNotificationConfiguration'
    ],
    Read: [
      'GetDatalake',
      'GetDatalakeAutoEnable',
      'GetDatalakeExceptionsExpiry',
      'GetDatalakeExceptionsSubscription',
      'GetDatalakeStatus',
      'GetSubscriber',
      'GetSubscriptionNotificationConfiguration'
    ],
    List: [
      'ListDatalakeExceptions',
      'ListLogSources',
      'ListSubscribers'
    ]
  };
}
