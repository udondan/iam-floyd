import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [cloudhsm](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudhsm.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cloudhsm extends PolicyStatement {
  public servicePrefix = 'cloudhsm';

  /**
   * Statement provider for service [cloudhsm](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudhsm.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a copy of a backup in the specified region
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - cloudhsm:CopyBackupToRegion
   * - cloudhsm:TagResource
   * - cloudhsm:UntagResource
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CopyBackupToRegion.html
   */
  public toCopyBackupToRegion() {
    return this.to('CopyBackupToRegion');
  }

  /**
   * Grants permission to create a new AWS CloudHSM cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - cloudhsm:TagResource
   * - ec2:AuthorizeSecurityGroupEgress
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:CreateSecurityGroup
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:RevokeSecurityGroupEgress
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateCluster.html
   */
  public toCreateCluster() {
    return this.to('CreateCluster');
  }

  /**
   * Grants permission to create a new hardware security module (HSM) in the specified AWS CloudHSM cluster
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:AuthorizeSecurityGroupEgress
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:CreateNetworkInterface
   * - ec2:CreateSecurityGroup
   * - ec2:DeleteNetworkInterface
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:RevokeSecurityGroupEgress
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateHsm.html
   */
  public toCreateHsm() {
    return this.to('CreateHsm');
  }

  /**
   * Grants permission to delete the specified CloudHSM backup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DeleteBackup.html
   */
  public toDeleteBackup() {
    return this.to('DeleteBackup');
  }

  /**
   * Grants permission to delete the specified AWS CloudHSM cluster
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DeleteNetworkInterface
   * - ec2:DeleteSecurityGroup
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DeleteCluster.html
   */
  public toDeleteCluster() {
    return this.to('DeleteCluster');
  }

  /**
   * Grants permission to delete the specified HSM
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DeleteNetworkInterface
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DeleteHsm.html
   */
  public toDeleteHsm() {
    return this.to('DeleteHsm');
  }

  /**
   * Grants permission to delete the policy attached to CloudHSM resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to get information about backups of AWS CloudHSM clusters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeBackups.html
   */
  public toDescribeBackups() {
    return this.to('DescribeBackups');
  }

  /**
   * Grants permission to get information about AWS CloudHSM clusters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html
   */
  public toDescribeClusters() {
    return this.to('DescribeClusters');
  }

  /**
   * Grants permission to get information about the policy attached to a AWS CloudHSM resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to claim an AWS CloudHSM cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_InitializeCluster.html
   */
  public toInitializeCluster() {
    return this.to('InitializeCluster');
  }

  /**
   * Grants permission to get a list of tags for the specified AWS CloudHSM cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_ListTags.html
   */
  public toListTags() {
    return this.to('ListTags');
  }

  /**
   * Grants permission to modify attributes for an AWS CloudHSM backup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_ModifyBackupAttributes.html
   */
  public toModifyBackupAttributes() {
    return this.to('ModifyBackupAttributes');
  }

  /**
   * Grants permission to modify AWS CloudHSM cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_ModifyCluster.html
   */
  public toModifyCluster() {
    return this.to('ModifyCluster');
  }

  /**
   * Grants permission to attach a policy to an AWS CloudHSM resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to restore the specified CloudHSM backup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_RestoreBackup.html
   */
  public toRestoreBackup() {
    return this.to('RestoreBackup');
  }

  /**
   * Grants permission to add or overwrite one or more tags for the specified AWS CloudHSM cluster
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove the specified tag or tags from the specified AWS CloudHSM cluster
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CopyBackupToRegion',
      'CreateCluster',
      'CreateHsm',
      'DeleteBackup',
      'DeleteCluster',
      'DeleteHsm',
      'DeleteResourcePolicy',
      'InitializeCluster',
      'ModifyBackupAttributes',
      'ModifyCluster',
      'PutResourcePolicy',
      'RestoreBackup'
    ],
    Read: [
      'DescribeBackups',
      'DescribeClusters',
      'GetResourcePolicy',
      'ListTags'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type backup to the statement
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/userguide/backups.html
   *
   * @param cloudHsmBackupInstanceName - Identifier for the cloudHsmBackupInstanceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBackup(cloudHsmBackupInstanceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudhsm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:backup/${ cloudHsmBackupInstanceName }`);
  }

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/userguide/clusters.html
   *
   * @param cloudHsmClusterInstanceName - Identifier for the cloudHsmClusterInstanceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCluster(cloudHsmClusterInstanceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudhsm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:cluster/${ cloudHsmClusterInstanceName }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCopyBackupToRegion()
   * - .toCreateCluster()
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
   * - backup
   * - cluster
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
   * - .toCopyBackupToRegion()
   * - .toCreateCluster()
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
