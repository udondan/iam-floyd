import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [app-integrations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappintegrations.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AppIntegrations extends PolicyStatement {
  public servicePrefix = 'app-integrations';

  /**
   * Statement provider for service [app-integrations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappintegrations.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new Application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to create an ApplicationAssociation
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/onboard-3p-apps.html
   */
  public toCreateApplicationAssociation() {
    return this.to('CreateApplicationAssociation');
  }

  /**
   * Grants permission to create a new DataIntegration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - appflow:DeleteFlow
   * - appflow:DescribeConnectorProfiles
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   * - kms:CreateGrant
   * - s3:GetBucketNotification
   * - s3:GetEncryptionConfiguration
   * - s3:PutBucketNotification
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html
   */
  public toCreateDataIntegration() {
    return this.to('CreateDataIntegration');
  }

  /**
   * Grants permission to create a DataIntegrationAssociation
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - appflow:CreateFlow
   * - appflow:DeleteFlow
   * - appflow:DescribeConnectorEntity
   * - appflow:DescribeConnectorProfiles
   * - appflow:TagResource
   * - appflow:UseConnectorProfile
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html
   */
  public toCreateDataIntegrationAssociation() {
    return this.to('CreateDataIntegrationAssociation');
  }

  /**
   * Grants permission to create a new EventIntegration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateEventIntegration.html
   */
  public toCreateEventIntegration() {
    return this.to('CreateEventIntegration');
  }

  /**
   * Grants permission to create an EventIntegrationAssociation
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
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateEventIntegration.html
   */
  public toCreateEventIntegrationAssociation() {
    return this.to('CreateEventIntegrationAssociation');
  }

  /**
   * Grants permission to delete an Application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to delete an ApplicationAssociation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/onboard-3p-apps.html
   */
  public toDeleteApplicationAssociation() {
    return this.to('DeleteApplicationAssociation');
  }

  /**
   * Grants permission to delete a DataIntegration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html
   */
  public toDeleteDataIntegration() {
    return this.to('DeleteDataIntegration');
  }

  /**
   * Grants permission to delete a DataIntegrationAssociation
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - appflow:CreateFlow
   * - appflow:DeleteFlow
   * - appflow:DescribeConnectorEntity
   * - appflow:DescribeConnectorProfiles
   * - appflow:StopFlow
   * - appflow:TagResource
   * - appflow:UseConnectorProfile
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html
   */
  public toDeleteDataIntegrationAssociation() {
    return this.to('DeleteDataIntegrationAssociation');
  }

  /**
   * Grants permission to delete an EventIntegration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteEventIntegration.html
   */
  public toDeleteEventIntegration() {
    return this.to('DeleteEventIntegration');
  }

  /**
   * Grants permission to delete an EventIntegrationAssociation
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - events:DeleteRule
   * - events:ListTargetsByRule
   * - events:RemoveTargets
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteEventIntegration.html
   */
  public toDeleteEventIntegrationAssociation() {
    return this.to('DeleteEventIntegrationAssociation');
  }

  /**
   * Grants permission to view details about Application
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_GetApplication.html
   */
  public toGetApplication() {
    return this.to('GetApplication');
  }

  /**
   * Grants permission to view details about DataIntegrations
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_GetDataIntegration.html
   */
  public toGetDataIntegration() {
    return this.to('GetDataIntegration');
  }

  /**
   * Grants permission to view details about EventIntegrations
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_GetEventIntegration.html
   */
  public toGetEventIntegration() {
    return this.to('GetEventIntegration');
  }

  /**
   * Grants permission to list ApplicationAssociations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ListApplicationAssociations.html
   */
  public toListApplicationAssociations() {
    return this.to('ListApplicationAssociations');
  }

  /**
   * Grants permission to list Applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ListApplications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to list DataIntegrationAssociations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ListDataIntegrationAssociations.html
   */
  public toListDataIntegrationAssociations() {
    return this.to('ListDataIntegrationAssociations');
  }

  /**
   * Grants permission to list DataIntegrations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ListDataIntegrations.html
   */
  public toListDataIntegrations() {
    return this.to('ListDataIntegrations');
  }

  /**
   * Grants permission to list EventIntegrationAssociations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ListEventIntegrationAssociations.html
   */
  public toListEventIntegrationAssociations() {
    return this.to('ListEventIntegrationAssociations');
  }

  /**
   * Grants permission to list EventIntegrations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ListEventIntegrations.html
   */
  public toListEventIntegrations() {
    return this.to('ListEventIntegrations');
  }

  /**
   * Grants permission to lists tag for an Amazon AppIntegration resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to tag an Amazon AppIntegration resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag an Amazon AppIntegration resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to modify an Application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  /**
   * Grants permission to modify a DataIntegration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_UpdateDataIntegration.html
   */
  public toUpdateDataIntegration() {
    return this.to('UpdateDataIntegration');
  }

  /**
   * Grants permission to modify an EventIntegration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_UpdateEventIntegration.html
   */
  public toUpdateEventIntegration() {
    return this.to('UpdateEventIntegration');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateApplication',
      'CreateApplicationAssociation',
      'CreateDataIntegration',
      'CreateDataIntegrationAssociation',
      'CreateEventIntegration',
      'CreateEventIntegrationAssociation',
      'DeleteApplication',
      'DeleteApplicationAssociation',
      'DeleteDataIntegration',
      'DeleteDataIntegrationAssociation',
      'DeleteEventIntegration',
      'DeleteEventIntegrationAssociation',
      'UpdateApplication',
      'UpdateDataIntegration',
      'UpdateEventIntegration'
    ],
    Read: [
      'GetApplication',
      'GetDataIntegration',
      'GetEventIntegration',
      'ListEventIntegrationAssociations',
      'ListTagsForResource'
    ],
    List: [
      'ListApplicationAssociations',
      'ListApplications',
      'ListDataIntegrationAssociations',
      'ListDataIntegrations',
      'ListEventIntegrations'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type event-integration to the statement
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_EventIntegration.html
   *
   * @param eventIntegrationName - Identifier for the eventIntegrationName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventIntegration(eventIntegrationName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:app-integrations:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:event-integration/${ eventIntegrationName }`);
  }

  /**
   * Adds a resource of type event-integration-association to the statement
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_EventIntegrationAssociation.html
   *
   * @param eventIntegrationName - Identifier for the eventIntegrationName.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventIntegrationAssociation(eventIntegrationName: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:app-integrations:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:event-integration-association/${ eventIntegrationName }/${ resourceId }`);
  }

  /**
   * Adds a resource of type data-integration to the statement
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DataIntegrationSummary.html
   *
   * @param dataIntegrationId - Identifier for the dataIntegrationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataIntegration(dataIntegrationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:app-integrations:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:data-integration/${ dataIntegrationId }`);
  }

  /**
   * Adds a resource of type data-integration-association to the statement
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DataIntegrationAssociationSummary.html
   *
   * @param dataIntegrationId - Identifier for the dataIntegrationId.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataIntegrationAssociation(dataIntegrationId: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:app-integrations:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:data-integration-association/${ dataIntegrationId }/${ resourceId }`);
  }

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ApplicationSummary.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:app-integrations:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationId }`);
  }

  /**
   * Adds a resource of type application-association to the statement
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ApplicationAssociationSummary.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param applicationAssociationId - Identifier for the applicationAssociationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplicationAssociation(applicationId: string, applicationAssociationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:app-integrations:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application-association/${ applicationId }/${ applicationAssociationId }`);
  }

  /**
   * Filters access by tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateApplication()
   * - .toCreateApplicationAssociation()
   * - .toCreateDataIntegration()
   * - .toCreateDataIntegrationAssociation()
   * - .toCreateEventIntegration()
   * - .toCreateEventIntegrationAssociation()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toDeleteApplication()
   * - .toDeleteDataIntegration()
   * - .toDeleteEventIntegration()
   * - .toGetApplication()
   * - .toGetDataIntegration()
   * - .toGetEventIntegration()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateApplication()
   * - .toUpdateDataIntegration()
   * - .toUpdateEventIntegration()
   *
   * Applies to resource types:
   * - event-integration
   * - event-integration-association
   * - data-integration
   * - data-integration-association
   * - application
   * - application-association
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
   * - .toCreateApplication()
   * - .toCreateApplicationAssociation()
   * - .toCreateDataIntegration()
   * - .toCreateDataIntegrationAssociation()
   * - .toCreateEventIntegration()
   * - .toCreateEventIntegrationAssociation()
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
