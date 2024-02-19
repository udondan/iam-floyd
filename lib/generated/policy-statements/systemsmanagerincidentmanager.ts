import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [ssm-incidents](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerincidentmanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SsmIncidents extends PolicyStatement {
  public servicePrefix = 'ssm-incidents';

  /**
   * Statement provider for service [ssm-incidents](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerincidentmanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to retrieve details about specified findings for an incident record
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_BatchGetIncidentFindings.html
   */
  public toBatchGetIncidentFindings() {
    return this.to('BatchGetIncidentFindings');
  }

  /**
   * Grants permission to create a replication set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - ssm-incidents:TagResource
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_CreateReplicationSet.html
   */
  public toCreateReplicationSet() {
    return this.to('CreateReplicationSet');
  }

  /**
   * Grants permission to create a response plan
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:PassRole
   * - ssm-incidents:TagResource
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_CreateResponsePlan.html
   */
  public toCreateResponsePlan() {
    return this.to('CreateResponsePlan');
  }

  /**
   * Grants permission to create a timeline event for an incident record
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_CreateTimelineEvent.html
   */
  public toCreateTimelineEvent() {
    return this.to('CreateTimelineEvent');
  }

  /**
   * Grants permission to delete an incident record
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DeleteIncidentRecord.html
   */
  public toDeleteIncidentRecord() {
    return this.to('DeleteIncidentRecord');
  }

  /**
   * Grants permission to delete a replication set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DeleteReplicationSet.html
   */
  public toDeleteReplicationSet() {
    return this.to('DeleteReplicationSet');
  }

  /**
   * Grants permission to delete resource policy from a response plan
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to delete a response plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DeleteResponsePlan.html
   */
  public toDeleteResponsePlan() {
    return this.to('DeleteResponsePlan');
  }

  /**
   * Grants permission to delete a timeline event
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DeleteTimelineEvent.html
   */
  public toDeleteTimelineEvent() {
    return this.to('DeleteTimelineEvent');
  }

  /**
   * Grants permission to view the contents of an incident record
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_GetIncidentRecord.html
   */
  public toGetIncidentRecord() {
    return this.to('GetIncidentRecord');
  }

  /**
   * Grants permission to view the replication set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_GetReplicationSet.html
   */
  public toGetReplicationSet() {
    return this.to('GetReplicationSet');
  }

  /**
   * Grants permission to view resource policies of a response plan
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_GetResourcePolicies.html
   */
  public toGetResourcePolicies() {
    return this.to('GetResourcePolicies');
  }

  /**
   * Grants permission to view the contents of a specified response plan
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_GetResponsePlan.html
   */
  public toGetResponsePlan() {
    return this.to('GetResponsePlan');
  }

  /**
   * Grants permission to view a timeline event
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_GetTimelineEvent.html
   */
  public toGetTimelineEvent() {
    return this.to('GetTimelineEvent');
  }

  /**
   * Grants permission to list findings for an incident record
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListIncidentFindings.html
   */
  public toListIncidentFindings() {
    return this.to('ListIncidentFindings');
  }

  /**
   * Grants permission to list the contents of all incident records
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListIncidentRecords.html
   */
  public toListIncidentRecords() {
    return this.to('ListIncidentRecords');
  }

  /**
   * Grants permission to list related items of an incident record
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListRelatedItems.html
   */
  public toListRelatedItems() {
    return this.to('ListRelatedItems');
  }

  /**
   * Grants permission to list all replication sets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListReplicationSets.html
   */
  public toListReplicationSets() {
    return this.to('ListReplicationSets');
  }

  /**
   * Grants permission to list all response plans
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListResponsePlans.html
   */
  public toListResponsePlans() {
    return this.to('ListResponsePlans');
  }

  /**
   * Grants permission to view a list of resource tags for a specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all timeline events for an incident record
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListTimelineEvents.html
   */
  public toListTimelineEvents() {
    return this.to('ListTimelineEvents');
  }

  /**
   * Grants permission to put resource policy on a response plan
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to start a new incident using a response plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_StartIncident.html
   */
  public toStartIncident() {
    return this.to('StartIncident');
  }

  /**
   * Grants permission to add tags to a response plan
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a response plan
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update replication set deletion protection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateDeletionProtection.html
   */
  public toUpdateDeletionProtection() {
    return this.to('UpdateDeletionProtection');
  }

  /**
   * Grants permission to update the contents of an incident record
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateIncidentRecord.html
   */
  public toUpdateIncidentRecord() {
    return this.to('UpdateIncidentRecord');
  }

  /**
   * Grants permission to update related items of an incident record
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateRelatedItems.html
   */
  public toUpdateRelatedItems() {
    return this.to('UpdateRelatedItems');
  }

  /**
   * Grants permission to update a replication set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateReplicationSet.html
   */
  public toUpdateReplicationSet() {
    return this.to('UpdateReplicationSet');
  }

  /**
   * Grants permission to update the contents of a response plan
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:PassRole
   * - ssm-incidents:TagResource
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateResponsePlan.html
   */
  public toUpdateResponsePlan() {
    return this.to('UpdateResponsePlan');
  }

  /**
   * Grants permission to update a timeline event
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateTimelineEvent.html
   */
  public toUpdateTimelineEvent() {
    return this.to('UpdateTimelineEvent');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'BatchGetIncidentFindings',
      'GetIncidentRecord',
      'GetReplicationSet',
      'GetResourcePolicies',
      'GetResponsePlan',
      'GetTimelineEvent',
      'ListTagsForResource'
    ],
    Write: [
      'CreateReplicationSet',
      'CreateResponsePlan',
      'CreateTimelineEvent',
      'DeleteIncidentRecord',
      'DeleteReplicationSet',
      'DeleteResponsePlan',
      'DeleteTimelineEvent',
      'StartIncident',
      'UpdateDeletionProtection',
      'UpdateIncidentRecord',
      'UpdateRelatedItems',
      'UpdateReplicationSet',
      'UpdateResponsePlan',
      'UpdateTimelineEvent'
    ],
    'Permissions management': [
      'DeleteResourcePolicy',
      'PutResourcePolicy'
    ],
    List: [
      'ListIncidentFindings',
      'ListIncidentRecords',
      'ListRelatedItems',
      'ListReplicationSets',
      'ListResponsePlans',
      'ListTimelineEvents'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type response-plan to the statement
   *
   * https://docs.aws.amazon.com/incident-manager/latest/userguide/response-plans.html
   *
   * @param responsePlan - Identifier for the responsePlan.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResponsePlan(responsePlan: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm-incidents::${ account ?? this.defaultAccount }:response-plan/${ responsePlan }`);
  }

  /**
   * Adds a resource of type incident-record to the statement
   *
   * https://docs.aws.amazon.com/incident-manager/latest/userguide/tracking-details.html
   *
   * @param responsePlan - Identifier for the responsePlan.
   * @param incidentRecord - Identifier for the incidentRecord.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIncidentRecord(responsePlan: string, incidentRecord: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm-incidents::${ account ?? this.defaultAccount }:incident-record/${ responsePlan }/${ incidentRecord }`);
  }

  /**
   * Adds a resource of type replication-set to the statement
   *
   * https://docs.aws.amazon.com/incident-manager/latest/userguide/disaster-recovery-resiliency.html#replication
   *
   * @param replicationSet - Identifier for the replicationSet.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onReplicationSet(replicationSet: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm-incidents::${ account ?? this.defaultAccount }:replication-set/${ replicationSet }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateReplicationSet()
   * - .toCreateResponsePlan()
   * - .toTagResource()
   * - .toUpdateResponsePlan()
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
   * - response-plan
   * - incident-record
   * - replication-set
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
   * - .toCreateReplicationSet()
   * - .toCreateResponsePlan()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateResponsePlan()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
