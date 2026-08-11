import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [cloud9](https://docs.aws.amazon.com/service-authorization/latest/reference/list_cloud9.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cloud9 extends PolicyStatement {
  public servicePrefix = 'cloud9';

  /**
   * Statement provider for service [cloud9](https://docs.aws.amazon.com/service-authorization/latest/reference/list_cloud9.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an AWS Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then hosts the environment on the instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifEnvironmentName()
   * - .ifInstanceType()
   * - .ifOwnerArn()
   * - .ifSubnetId()
   * - .ifUserArn()
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_CreateEnvironmentEC2.html
   */
  public toCreateEnvironmentEC2() {
    return this.to('CreateEnvironmentEC2');
  }

  /**
   * Grants permission to add an environment member to an AWS Cloud9 development environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_CreateEnvironmentMembership.html
   */
  public toCreateEnvironmentMembership() {
    return this.to('CreateEnvironmentMembership');
  }

  /**
   * Grants permission to delete an AWS Cloud9 development environment. If the environment is hosted on an Amazon Elastic Compute Cloud (Amazon EC2) instance, also terminates the instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DeleteEnvironment.html
   */
  public toDeleteEnvironment() {
    return this.to('DeleteEnvironment');
  }

  /**
   * Grants permission to delete an environment member from an AWS Cloud9 development environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DeleteEnvironmentMembership.html
   */
  public toDeleteEnvironmentMembership() {
    return this.to('DeleteEnvironmentMembership');
  }

  /**
   * Grants permission to get information about environment members for an AWS Cloud9 development environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DescribeEnvironmentMemberships.html
   */
  public toDescribeEnvironmentMemberships() {
    return this.to('DescribeEnvironmentMemberships');
  }

  /**
   * Grants permission to get status information for an AWS Cloud9 development environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DescribeEnvironmentStatus.html
   */
  public toDescribeEnvironmentStatus() {
    return this.to('DescribeEnvironmentStatus');
  }

  /**
   * Grants permission to get information about AWS Cloud9 development environments
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DescribeEnvironments.html
   */
  public toDescribeEnvironments() {
    return this.to('DescribeEnvironments');
  }

  /**
   * Grants permission to get a list of AWS Cloud9 development environment identifiers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_ListEnvironments.html
   */
  public toListEnvironments() {
    return this.to('ListEnvironments');
  }

  /**
   * Grants permission to list tags for a cloud9 environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to add tags to a cloud9 environment
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a cloud9 environment
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to change the settings of an existing AWS Cloud9 development environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_UpdateEnvironment.html
   */
  public toUpdateEnvironment() {
    return this.to('UpdateEnvironment');
  }

  /**
   * Grants permission to change the settings of an existing environment member for an AWS Cloud9 development environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_UpdateEnvironmentMembership.html
   */
  public toUpdateEnvironmentMembership() {
    return this.to('UpdateEnvironmentMembership');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateEnvironmentEC2',
      'CreateEnvironmentMembership',
      'DeleteEnvironment',
      'DeleteEnvironmentMembership',
      'TagResource',
      'UntagResource',
      'UpdateEnvironment',
      'UpdateEnvironmentMembership'
    ],
    Read: [
      'DescribeEnvironmentMemberships',
      'DescribeEnvironmentStatus',
      'DescribeEnvironments',
      'ListEnvironments',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-environment
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironment(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloud9:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:environment:${ resourceId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateEnvironmentEC2()
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
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreateEnvironmentMembership()
   * - .toDeleteEnvironment()
   * - .toDeleteEnvironmentMembership()
   * - .toDescribeEnvironmentMemberships()
   * - .toDescribeEnvironmentStatus()
   * - .toDescribeEnvironments()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateEnvironment()
   * - .toUpdateEnvironmentMembership()
   *
   * Applies to resource types:
   * - environment
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateEnvironmentEC2()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the AWS Cloud9 environment ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_EnvironmentId
   *
   * Applies to actions:
   * - .toCreateEnvironmentMembership()
   * - .toDeleteEnvironmentMembership()
   * - .toDescribeEnvironmentMemberships()
   * - .toUpdateEnvironmentMembership()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnvironmentId(value: string | string[], operator?: Operator | string) {
    return this.if(`EnvironmentId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the AWS Cloud9 environment name
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_EnvironmentName
   *
   * Applies to actions:
   * - .toCreateEnvironmentEC2()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnvironmentName(value: string | string[], operator?: Operator | string) {
    return this.if(`EnvironmentName`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the instance type of the AWS Cloud9 environment's Amazon EC2 instance
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_InstanceType
   *
   * Applies to actions:
   * - .toCreateEnvironmentEC2()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInstanceType(value: string | string[], operator?: Operator | string) {
    return this.if(`InstanceType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the owner ARN specified
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_OwnerArn
   *
   * Applies to actions:
   * - .toCreateEnvironmentEC2()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifOwnerArn(value: string | string[], operator?: Operator | string) {
    return this.if(`OwnerArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the type of AWS Cloud9 permissions
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_Permissions
   *
   * Applies to actions:
   * - .toCreateEnvironmentMembership()
   * - .toUpdateEnvironmentMembership()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPermissions(value: string | string[], operator?: Operator | string) {
    return this.if(`Permissions`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the subnet ID that the AWS Cloud9 environment will be created in
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_SubnetId
   *
   * Applies to actions:
   * - .toCreateEnvironmentEC2()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSubnetId(value: string | string[], operator?: Operator | string) {
    return this.if(`SubnetId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the user ARN specified
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html##awscloud9-cloud9_UserArn
   *
   * Applies to actions:
   * - .toCreateEnvironmentEC2()
   * - .toCreateEnvironmentMembership()
   * - .toDeleteEnvironmentMembership()
   * - .toDescribeEnvironmentMemberships()
   * - .toUpdateEnvironmentMembership()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifUserArn(value: string | string[], operator?: Operator | string) {
    return this.if(`UserArn`, value, operator ?? 'ArnLike');
  }
}
