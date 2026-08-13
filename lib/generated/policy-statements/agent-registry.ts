import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [agent-registry](https://docs.aws.amazon.com/service-authorization/latest/reference/list_agent-registry.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AgentRegistry extends PolicyStatement {
  public servicePrefix = 'agent-registry';

  /**
   * Statement provider for service [agent-registry](https://docs.aws.amazon.com/service-authorization/latest/reference/list_agent-registry.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new registry
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/agent-registry-control/latest/APIReference/API_CreateRegistry.html
   */
  public toCreateRegistry() {
    return this.to('CreateRegistry');
  }

  /**
   * Grants permission to create a new registry record
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/agent-registry-control/latest/APIReference/API_CreateRegistryRecord.html
   */
  public toCreateRegistryRecord() {
    return this.to('CreateRegistryRecord');
  }

  /**
   * Grants permission to delete an existing registry
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/agent-registry-control/latest/APIReference/API_DeleteRegistry.html
   */
  public toDeleteRegistry() {
    return this.to('DeleteRegistry');
  }

  /**
   * Grants permission to delete an existing registry record
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/agent-registry-control/latest/APIReference/API_DeleteRegistryRecord.html
   */
  public toDeleteRegistryRecord() {
    return this.to('DeleteRegistryRecord');
  }

  /**
   * Grants permission to retrieve an individual approved registry record. This is a permission-only action used for fine-grained access control with BatchGetApprovedRegistryRecord
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/agent-registry/latest/APIReference/API_BatchGetDiscoverableRegistryRecord.html
   */
  public toGetDiscoverableRegistryRecord() {
    return this.to('GetDiscoverableRegistryRecord');
  }

  /**
   * Grants permission to retrieve an existing registry
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/agent-registry-control/latest/APIReference/API_GetRegistry.html
   */
  public toGetRegistry() {
    return this.to('GetRegistry');
  }

  /**
   * Grants permission to retrieve an existing registry record
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/agent-registry-control/latest/APIReference/API_GetRegistryRecord.html
   */
  public toGetRegistryRecord() {
    return this.to('GetRegistryRecord');
  }

  /**
   * Grants permission to invoke an MCP operation against an existing registry
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/registry-mcp-endpoint.html
   */
  public toInvokeRegistryMcp() {
    return this.to('InvokeRegistryMcp');
  }

  /**
   * Grants permission to list approved registry records in a registry
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/agent-registry/latest/APIReference/API_ListDiscoverableRegistryRecords.html
   */
  public toListDiscoverableRegistryRecords() {
    return this.to('ListDiscoverableRegistryRecords');
  }

  /**
   * Grants permission to list existing registries
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/agent-registry-control/latest/APIReference/API_ListRegistries.html
   */
  public toListRegistries() {
    return this.to('ListRegistries');
  }

  /**
   * Grants permission to list existing registry records in a registry
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/agent-registry-control/latest/APIReference/API_ListRegistryRecords.html
   */
  public toListRegistryRecords() {
    return this.to('ListRegistryRecords');
  }

  /**
   * Grants permission to list tags for an Agent Registry resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/agent-registry-control/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to search for registry records
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/agent-registry/latest/APIReference/API_SearchDiscoverableRegistryRecords.html
   */
  public toSearchDiscoverableRegistryRecords() {
    return this.to('SearchDiscoverableRegistryRecords');
  }

  /**
   * Grants permission to submit a registry record for approval
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/agent-registry-control/latest/APIReference/API_SubmitRegistryRecordForApproval.html
   */
  public toSubmitRegistryRecordForApproval() {
    return this.to('SubmitRegistryRecordForApproval');
  }

  /**
   * Grants permission to tag an Agent Registry resource
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/agent-registry-control/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag an Agent Registry resource
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/agent-registry-control/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an existing registry
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/agent-registry-control/latest/APIReference/API_UpdateRegistry.html
   */
  public toUpdateRegistry() {
    return this.to('UpdateRegistry');
  }

  /**
   * Grants permission to update an existing registry record
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/agent-registry-control/latest/APIReference/API_UpdateRegistryRecord.html
   */
  public toUpdateRegistryRecord() {
    return this.to('UpdateRegistryRecord');
  }

  /**
   * Grants permission to update the status of a registry record
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/agent-registry-control/latest/APIReference/API_UpdateRegistryRecordStatus.html
   */
  public toUpdateRegistryRecordStatus() {
    return this.to('UpdateRegistryRecordStatus');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateRegistry',
      'CreateRegistryRecord',
      'DeleteRegistry',
      'DeleteRegistryRecord',
      'SubmitRegistryRecordForApproval',
      'TagResource',
      'UntagResource',
      'UpdateRegistry',
      'UpdateRegistryRecord',
      'UpdateRegistryRecordStatus'
    ],
    Read: [
      'GetDiscoverableRegistryRecord',
      'GetRegistry',
      'GetRegistryRecord',
      'InvokeRegistryMcp',
      'SearchDiscoverableRegistryRecords'
    ],
    List: [
      'ListDiscoverableRegistryRecords',
      'ListRegistries',
      'ListRegistryRecords',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type registry to the statement
   *
   * https://docs.aws.amazon.com/agent-registry/latest/APIReference/registry.html
   *
   * @param registryId - Identifier for the registryId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRegistry(registryId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:agent-registry:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:registry/${ registryId }`);
  }

  /**
   * Adds a resource of type registry-record to the statement
   *
   * https://docs.aws.amazon.com/agent-registry/latest/APIReference/registryRecord.html
   *
   * @param registryId - Identifier for the registryId.
   * @param recordId - Identifier for the recordId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRegistryRecord(registryId: string, recordId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:agent-registry:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:registry/${ registryId }/record/${ recordId }`);
  }

  /**
   * Filters access by creating requests based on the allowed set of values for each of the mandatory tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * Applies to actions:
   * - .toCreateRegistry()
   * - .toCreateRegistryRecord()
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
   * Filters access by having actions based on the tag value associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * Applies to actions:
   * - .toCreateRegistryRecord()
   * - .toDeleteRegistry()
   * - .toDeleteRegistryRecord()
   * - .toGetDiscoverableRegistryRecord()
   * - .toGetRegistry()
   * - .toGetRegistryRecord()
   * - .toInvokeRegistryMcp()
   * - .toListDiscoverableRegistryRecords()
   * - .toListRegistryRecords()
   * - .toListTagsForResource()
   * - .toSearchDiscoverableRegistryRecords()
   * - .toSubmitRegistryRecordForApproval()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateRegistry()
   * - .toUpdateRegistryRecord()
   * - .toUpdateRegistryRecordStatus()
   *
   * Applies to resource types:
   * - registry
   * - registry-record
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by creating requests based on the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * Applies to actions:
   * - .toCreateRegistry()
   * - .toCreateRegistryRecord()
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
