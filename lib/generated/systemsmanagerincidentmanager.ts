import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
   * Grants permission to create a replication set
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
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
   * Dependent actions:
   * - iam:PassRole
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
   * Grants permission to list related items of an incident records
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
   * Dependent actions:
   * - iam:PassRole
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
    Read: [
      'GetIncidentRecord',
      'GetReplicationSet',
      'GetResourcePolicies',
      'GetResponsePlan',
      'GetTimelineEvent',
      'ListTagsForResource'
    ],
    List: [
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
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onResponsePlan(responsePlan: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || SsmIncidents.defaultPartition }:ssm-incidents::${ account || '*' }:response-plan/${ responsePlan }`);
  }

  /**
   * Adds a resource of type incident-record to the statement
   *
   * https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-record.html
   *
   * @param responsePlan - Identifier for the responsePlan.
   * @param incidentRecord - Identifier for the incidentRecord.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onIncidentRecord(responsePlan: string, incidentRecord: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || SsmIncidents.defaultPartition }:ssm-incidents::${ account || '*' }:incident-record/${ responsePlan }/${ incidentRecord }`);
  }

  /**
   * Adds a resource of type replication-set to the statement
   *
   * https://docs.aws.amazon.com/incident-manager/latest/userguide/replication-set.html
   *
   * @param replicationSet - Identifier for the replicationSet.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onReplicationSet(replicationSet: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || SsmIncidents.defaultPartition }:ssm-incidents::${ account || '*' }:replication-set/${ replicationSet }`);
  }
}
