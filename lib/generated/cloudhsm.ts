import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
   * Adds or overwrites one or more tags for the specified AWS CloudHSM resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_AddTagsToResource.html
   */
  public toAddTagsToResource() {
    return this.to('AddTagsToResource');
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
   * Creates a high-availability partition group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_CreateHapg.html
   */
  public toCreateHapg() {
    return this.to('CreateHapg');
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
   * Creates an HSM client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_CreateLunaClient.html
   */
  public toCreateLunaClient() {
    return this.to('CreateLunaClient');
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
   * Deletes a high-availability partition group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DeleteHapg.html
   */
  public toDeleteHapg() {
    return this.to('DeleteHapg');
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
   * Deletes a client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DeleteLunaClient.html
   */
  public toDeleteLunaClient() {
    return this.to('DeleteLunaClient');
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
   * Retrieves information about a high-availability partition group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DescribeHapg.html
   */
  public toDescribeHapg() {
    return this.to('DescribeHapg');
  }

  /**
   * Retrieves information about an HSM. You can identify the HSM by its ARN or its serial number
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DescribeHsm.html
   */
  public toDescribeHsm() {
    return this.to('DescribeHsm');
  }

  /**
   * Retrieves information about an HSM client
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DescribeLunaClient.html
   */
  public toDescribeLunaClient() {
    return this.to('DescribeLunaClient');
  }

  /**
   * Gets the configuration files necessary to connect to all high availability partition groups the client is associated with
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_GetConfig.html
   */
  public toGetConfig() {
    return this.to('GetConfig');
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
   * Lists the Availability Zones that have available AWS CloudHSM capacity
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListAvailableZones.html
   */
  public toListAvailableZones() {
    return this.to('ListAvailableZones');
  }

  /**
   * Lists the high-availability partition groups for the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListHapgs.html
   */
  public toListHapgs() {
    return this.to('ListHapgs');
  }

  /**
   * Retrieves the identifiers of all of the HSMs provisioned for the current customer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListHsms.html
   */
  public toListHsms() {
    return this.to('ListHsms');
  }

  /**
   * Lists all of the clients
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListLunaClients.html
   */
  public toListLunaClients() {
    return this.to('ListLunaClients');
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
   * Returns a list of all tags for the specified AWS CloudHSM resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
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
   * Modifies an existing high-availability partition group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ModifyHapg.html
   */
  public toModifyHapg() {
    return this.to('ModifyHapg');
  }

  /**
   * Modifies an HSM
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ModifyHsm.html
   */
  public toModifyHsm() {
    return this.to('ModifyHsm');
  }

  /**
   * Modifies the certificate used by the client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ModifyLunaClient.html
   */
  public toModifyLunaClient() {
    return this.to('ModifyLunaClient');
  }

  /**
   * Removes one or more tags from the specified AWS CloudHSM resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_RemoveTagsFromResource.html
   */
  public toRemoveTagsFromResource() {
    return this.to('RemoveTagsFromResource');
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
    Tagging: [
      'AddTagsToResource',
      'RemoveTagsFromResource',
      'TagResource',
      'UntagResource'
    ],
    Write: [
      'CopyBackupToRegion',
      'CreateCluster',
      'CreateHapg',
      'CreateHsm',
      'CreateLunaClient',
      'DeleteBackup',
      'DeleteCluster',
      'DeleteHapg',
      'DeleteHsm',
      'DeleteLunaClient',
      'InitializeCluster',
      'ModifyBackupAttributes',
      'ModifyCluster',
      'ModifyHapg',
      'ModifyHsm',
      'ModifyLunaClient',
      'RestoreBackup'
    ],
    Read: [
      'DescribeBackups',
      'DescribeClusters',
      'DescribeHapg',
      'DescribeHsm',
      'DescribeLunaClient',
      'GetConfig',
      'ListTags',
      'ListTagsForResource'
    ],
    List: [
      'ListAvailableZones',
      'ListHapgs',
      'ListHsms',
      'ListLunaClients'
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
    return this.on(`arn:${ partition || this.defaultPartition }:cloudhsm:${ region || this.defaultRegion }:${ account || this.defaultAccount }:backup/${ cloudHsmBackupInstanceName }`);
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
    return this.on(`arn:${ partition || this.defaultPartition }:cloudhsm:${ region || this.defaultRegion }:${ account || this.defaultAccount }:cluster/${ cloudHsmClusterInstanceName }`);
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
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
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
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
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
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
