import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [aiops](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonaioperations.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Aiops extends PolicyStatement {
  public servicePrefix = 'aiops';

  /**
   * Statement provider for service [aiops](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonaioperations.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new investigation in the specified investigation group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   * - kms:GenerateDataKey
   * - sts:SetContext
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_CreateInvestigation.html
   */
  public toCreateInvestigation() {
    return this.to('CreateInvestigation');
  }

  /**
   * Grants permission to create a new investigation event in the specified investigation group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   * - kms:GenerateDataKey
   * - sts:SetContext
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_CreateInvestigationEvent.html
   */
  public toCreateInvestigationEvent() {
    return this.to('CreateInvestigationEvent');
  }

  /**
   * Grants permission to create a new investigation group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - aiops:TagResource
   * - cloudtrail:DescribeTrails
   * - iam:PassRole
   * - kms:Decrypt
   * - kms:DescribeKey
   * - kms:GenerateDataKey
   * - sso:CreateApplication
   * - sso:DeleteApplication
   * - sso:PutApplicationAccessScope
   * - sso:PutApplicationAssignmentConfiguration
   * - sso:PutApplicationAuthenticationMethod
   * - sso:PutApplicationGrant
   * - sso:TagResource
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_CreateInvestigationGroup.html
   */
  public toCreateInvestigationGroup() {
    return this.to('CreateInvestigationGroup');
  }

  /**
   * Grants permission to create an investigation resource in the specified investigation group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - cloudwatch:DescribeAlarmHistory
   * - cloudwatch:DescribeAlarms
   * - cloudwatch:GetInsightRuleReport
   * - cloudwatch:GetMetricData
   * - kms:GenerateDataKey
   * - logs:GetQueryResults
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_CreateInvestigationResource.html
   */
  public toCreateInvestigationResource() {
    return this.to('CreateInvestigationResource');
  }

  /**
   * Grants permission to delete an investigation in the specified investigation group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sts:SetContext
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_DeleteInvestigation.html
   */
  public toDeleteInvestigation() {
    return this.to('DeleteInvestigation');
  }

  /**
   * Grants permission to delete the specified investigation group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sso:DeleteApplication
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_DeleteInvestigationGroup.html
   */
  public toDeleteInvestigationGroup() {
    return this.to('DeleteInvestigationGroup');
  }

  /**
   * Grants permission to delete the investigation group policy attached to an investigation group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_DeleteInvestigationGroupPolicy.html
   */
  public toDeleteInvestigationGroupPolicy() {
    return this.to('DeleteInvestigationGroupPolicy');
  }

  /**
   * Grants permission to retrieve an investigation in the specified investigation group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_GetInvestigation.html
   */
  public toGetInvestigation() {
    return this.to('GetInvestigation');
  }

  /**
   * Grants permission to retrieve an investigation event in the specified investigation group
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_GetInvestigationEvent.html
   */
  public toGetInvestigationEvent() {
    return this.to('GetInvestigationEvent');
  }

  /**
   * Grants permission to retrieve the specified investigation group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_GetInvestigationGroup.html
   */
  public toGetInvestigationGroup() {
    return this.to('GetInvestigationGroup');
  }

  /**
   * Grants permission to retrieve the investigation group policy attached to an investigation group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_GetInvestigationGroupPolicy.html
   */
  public toGetInvestigationGroupPolicy() {
    return this.to('GetInvestigationGroupPolicy');
  }

  /**
   * Grants permission to retrieve an investigation resource in the specified investigation group
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_GetInvestigationResource.html
   */
  public toGetInvestigationResource() {
    return this.to('GetInvestigationResource');
  }

  /**
   * Grants permission to list all investigation events in the specified investigation group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_ListInvestigationEvents.html
   */
  public toListInvestigationEvents() {
    return this.to('ListInvestigationEvents');
  }

  /**
   * Grants permission to list all investigation groups in the AWS account making the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_ListInvestigationGroups.html
   */
  public toListInvestigationGroups() {
    return this.to('ListInvestigationGroups');
  }

  /**
   * Grants permission to list all investigations that are in the specified investigation group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_ListInvestigations.html
   */
  public toListInvestigations() {
    return this.to('ListInvestigations');
  }

  /**
   * Grants permission to list the tags for the specified resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create/update the investigation group policy attached to an investigation group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_PutInvestigationGroupPolicy.html
   */
  public toPutInvestigationGroupPolicy() {
    return this.to('PutInvestigationGroupPolicy');
  }

  /**
   * Grants permission to add or update the specified tags for the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove the specified tags from the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an investigation in the specified investigation group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   * - kms:GenerateDataKey
   * - sts:SetContext
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_UpdateInvestigation.html
   */
  public toUpdateInvestigation() {
    return this.to('UpdateInvestigation');
  }

  /**
   * Grants permission to update an investigation event in the specified investigation group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   * - kms:GenerateDataKey
   * - sts:SetContext
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_UpdateInvestigationEvent.html
   */
  public toUpdateInvestigationEvent() {
    return this.to('UpdateInvestigationEvent');
  }

  /**
   * Grants permission to update the specified investigation group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - cloudtrail:DescribeTrails
   * - iam:PassRole
   * - kms:Decrypt
   * - kms:DescribeKey
   * - kms:GenerateDataKey
   * - sso:CreateApplication
   * - sso:DeleteApplication
   * - sso:PutApplicationAccessScope
   * - sso:PutApplicationAssignmentConfiguration
   * - sso:PutApplicationAuthenticationMethod
   * - sso:PutApplicationGrant
   * - sso:TagResource
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_UpdateInvestigationGroup.html
   */
  public toUpdateInvestigationGroup() {
    return this.to('UpdateInvestigationGroup');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateInvestigation',
      'CreateInvestigationEvent',
      'CreateInvestigationGroup',
      'CreateInvestigationResource',
      'DeleteInvestigation',
      'DeleteInvestigationGroup',
      'DeleteInvestigationGroupPolicy',
      'PutInvestigationGroupPolicy',
      'UpdateInvestigation',
      'UpdateInvestigationEvent',
      'UpdateInvestigationGroup'
    ],
    Read: [
      'GetInvestigation',
      'GetInvestigationEvent',
      'GetInvestigationGroup',
      'GetInvestigationGroupPolicy',
      'GetInvestigationResource'
    ],
    List: [
      'ListInvestigationEvents',
      'ListInvestigationGroups',
      'ListInvestigations',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type investigation-group to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/API_InvestigationGroup.html
   *
   * @param investigationGroupId - Identifier for the investigationGroupId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInvestigationGroup(investigationGroupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aiops:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:investigation-group/${ investigationGroupId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateInvestigationGroup()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - investigation-group
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateInvestigationGroup()
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
