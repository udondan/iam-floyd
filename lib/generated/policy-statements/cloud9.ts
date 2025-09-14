import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [cloud9](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloud9.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cloud9 extends PolicyStatement {
  public servicePrefix = 'cloud9';

  /**
   * Statement provider for service [cloud9](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloud9.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to start the Amazon EC2 instance that your AWS Cloud9 IDE connects to
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  public toActivateEC2Remote() {
    return this.to('ActivateEC2Remote');
  }

  /**
   * Grants permission to create an AWS Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then hosts the environment on the instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifEnvironmentName()
   * - .ifInstanceType()
   * - .ifSubnetId()
   * - .ifUserArn()
   * - .ifOwnerArn()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   * - iam:CreateServiceLinkedRole
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
   * Possible conditions:
   * - .ifUserArn()
   * - .ifEnvironmentId()
   * - .ifPermissions()
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_CreateEnvironmentMembership.html
   */
  public toCreateEnvironmentMembership() {
    return this.to('CreateEnvironmentMembership');
  }

  /**
   * Grants permission to create an AWS Cloud9 SSH development environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifEnvironmentName()
   * - .ifOwnerArn()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  public toCreateEnvironmentSSH() {
    return this.to('CreateEnvironmentSSH');
  }

  /**
   * Grants permission to create an authentication token that allows a connection between the AWS Cloud9 IDE and the user's environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  public toCreateEnvironmentToken() {
    return this.to('CreateEnvironmentToken');
  }

  /**
   * Grants permission to delete an AWS Cloud9 development environment. If the environment is hosted on an Amazon Elastic Compute Cloud (Amazon EC2) instance, also terminates the instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
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
   * Possible conditions:
   * - .ifUserArn()
   * - .ifEnvironmentId()
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DeleteEnvironmentMembership.html
   */
  public toDeleteEnvironmentMembership() {
    return this.to('DeleteEnvironmentMembership');
  }

  /**
   * Grants permission to get details about the connection to the EC2 development environment, including host, user, and port
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  public toDescribeEC2Remote() {
    return this.to('DescribeEC2Remote');
  }

  /**
   * Grants permission to get information about environment members for an AWS Cloud9 development environment
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserArn()
   * - .ifEnvironmentId()
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
   * Grants permission to get details about the connection to the SSH development environment, including host, user, and port
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  public toDescribeSSHRemote() {
    return this.to('DescribeSSHRemote');
  }

  /**
   * Grants permission to get configuration information that's used to initialize the AWS Cloud9 IDE
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  public toGetEnvironmentConfig() {
    return this.to('GetEnvironmentConfig');
  }

  /**
   * Grants permission to get the AWS Cloud9 IDE settings for a specified development environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  public toGetEnvironmentSettings() {
    return this.to('GetEnvironmentSettings');
  }

  /**
   * Grants permission to get the AWS Cloud9 IDE settings for a specified environment member
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  public toGetMembershipSettings() {
    return this.to('GetMembershipSettings');
  }

  /**
   * Grants permission to get the migration experience for a cloud9 user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  public toGetMigrationExperiences() {
    return this.to('GetMigrationExperiences');
  }

  /**
   * Grants permission to get the user's public SSH key, which is used by AWS Cloud9 to connect to SSH development environments
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserArn()
   *
   * https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  public toGetUserPublicKey() {
    return this.to('GetUserPublicKey');
  }

  /**
   * Grants permission to get the AWS Cloud9 IDE settings for a specified user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  public toGetUserSettings() {
    return this.to('GetUserSettings');
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
   * Grants permission to set AWS managed temporary credentials on the Amazon EC2 instance that's used by the AWS Cloud9 integrated development environment (IDE)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  public toModifyTemporaryCredentialsOnEnvironmentEC2() {
    return this.to('ModifyTemporaryCredentialsOnEnvironmentEC2');
  }

  /**
   * Grants permission to add tags to a cloud9 environment
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a cloud9 environment
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
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
   * Possible conditions:
   * - .ifUserArn()
   * - .ifEnvironmentId()
   * - .ifPermissions()
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_UpdateEnvironmentMembership.html
   */
  public toUpdateEnvironmentMembership() {
    return this.to('UpdateEnvironmentMembership');
  }

  /**
   * Grants permission to update the AWS Cloud9 IDE settings for a specified development environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  public toUpdateEnvironmentSettings() {
    return this.to('UpdateEnvironmentSettings');
  }

  /**
   * Grants permission to update the AWS Cloud9 IDE settings for a specified environment member
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  public toUpdateMembershipSettings() {
    return this.to('UpdateMembershipSettings');
  }

  /**
   * Grants permission to update details about the connection to the SSH development environment, including host, user, and port
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  public toUpdateSSHRemote() {
    return this.to('UpdateSSHRemote');
  }

  /**
   * Grants permission to update IDE-specific settings of an AWS Cloud9 user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/user-guide/security-iam.html#auth-and-access-control-ref-matrix
   */
  public toUpdateUserSettings() {
    return this.to('UpdateUserSettings');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ActivateEC2Remote',
      'CreateEnvironmentEC2',
      'CreateEnvironmentMembership',
      'CreateEnvironmentSSH',
      'DeleteEnvironment',
      'DeleteEnvironmentMembership',
      'ModifyTemporaryCredentialsOnEnvironmentEC2',
      'UpdateEnvironment',
      'UpdateEnvironmentMembership',
      'UpdateEnvironmentSettings',
      'UpdateMembershipSettings',
      'UpdateSSHRemote',
      'UpdateUserSettings'
    ],
    Read: [
      'CreateEnvironmentToken',
      'DescribeEC2Remote',
      'DescribeEnvironmentMemberships',
      'DescribeEnvironmentStatus',
      'DescribeEnvironments',
      'DescribeSSHRemote',
      'GetEnvironmentConfig',
      'GetEnvironmentSettings',
      'GetMembershipSettings',
      'GetMigrationExperiences',
      'GetUserPublicKey',
      'GetUserSettings',
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
   * - .toCreateEnvironmentSSH()
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
   * - .toCreateEnvironmentSSH()
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
   * - .toCreateEnvironmentSSH()
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
   * - .toCreateEnvironmentSSH()
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
   * - .toGetUserPublicKey()
   * - .toUpdateEnvironmentMembership()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifUserArn(value: string | string[], operator?: Operator | string) {
    return this.if(`UserArn`, value, operator ?? 'ArnLike');
  }
}
