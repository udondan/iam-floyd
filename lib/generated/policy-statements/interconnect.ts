import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [interconnect](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsinterconnect.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Interconnect extends PolicyStatement {
  public servicePrefix = 'interconnect';

  /**
   * Statement provider for service [interconnect](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsinterconnect.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept a connection proposal generated elsewhere
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/interconnect/latest/api/API_AcceptConnectionProposal.html
   */
  public toAcceptConnectionProposal() {
    return this.to('AcceptConnectionProposal');
  }

  /**
   * Grants permission to create a connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/interconnect/latest/api/API_CreateConnection.html
   */
  public toCreateConnection() {
    return this.to('CreateConnection');
  }

  /**
   * Grants permission to delete an existing connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/interconnect/latest/api/API_DeleteConnection.html
   */
  public toDeleteConnection() {
    return this.to('DeleteConnection');
  }

  /**
   * Grants permission to describe a connection proposal
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/interconnect/latest/api/API_DescribeConnectionProposal.html
   */
  public toDescribeConnectionProposal() {
    return this.to('DescribeConnectionProposal');
  }

  /**
   * Grants permission to describe a connection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/interconnect/latest/api/API_GetConnection.html
   */
  public toGetConnection() {
    return this.to('GetConnection');
  }

  /**
   * Grants permission to describe an environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/interconnect/latest/api/API_GetEnvironment.html
   */
  public toGetEnvironment() {
    return this.to('GetEnvironment');
  }

  /**
   * Grants permission to list available attach points
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/interconnect/latest/api/API_ListAttachPoints.html
   */
  public toListAttachPoints() {
    return this.to('ListAttachPoints');
  }

  /**
   * Grants permission to list connections
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/interconnect/latest/api/API_ListConnections.html
   */
  public toListConnections() {
    return this.to('ListConnections');
  }

  /**
   * Grants permission to list available environments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/interconnect/latest/api/API_ListEnvironments.html
   */
  public toListEnvironments() {
    return this.to('ListEnvironments');
  }

  /**
   * Grants permission to list tags on a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/interconnect/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to apply tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/interconnect/latest/api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/interconnect/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an existing connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/interconnect/latest/api/API_UpdateConnection.html
   */
  public toUpdateConnection() {
    return this.to('UpdateConnection');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptConnectionProposal',
      'CreateConnection',
      'DeleteConnection',
      'UpdateConnection'
    ],
    Read: [
      'DescribeConnectionProposal',
      'GetConnection',
      'GetEnvironment',
      'ListAttachPoints',
      'ListTagsForResource'
    ],
    List: [
      'ListConnections',
      'ListEnvironments'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type connection to the statement
   *
   * https://docs.aws.amazon.com/interconnect/latest/api/Connection.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConnection(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:interconnect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:connection/${ id }`);
  }

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/interconnect/latest/api/Environment.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEnvironment(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:interconnect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:environment/${ id }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAcceptConnectionProposal()
   * - .toCreateConnection()
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
   * Filters access by a tag key and value pair of a resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - connection
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a list of tag keys that are allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toAcceptConnectionProposal()
   * - .toCreateConnection()
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
