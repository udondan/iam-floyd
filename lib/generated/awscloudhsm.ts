import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [cloudhsm](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudhsm.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cloudhsm extends PolicyStatement {
  public servicePrefix = 'cloudhsm';

  /**
   * Statement provider for service [cloudhsm](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudhsm.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
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
    this.to('cloudhsm:AddTagsToResource');
    return this;
  }

  /**
   * Creates a copy of a backup in the specified region
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CopyBackupToRegion.html
   */
  public toCopyBackupToRegion() {
    this.to('cloudhsm:CopyBackupToRegion');
    return this;
  }

  /**
   * Creates a new AWS CloudHSM cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateCluster.html
   */
  public toCreateCluster() {
    this.to('cloudhsm:CreateCluster');
    return this;
  }

  /**
   * Creates a high-availability partition group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_CreateHapg.html
   */
  public toCreateHapg() {
    this.to('cloudhsm:CreateHapg');
    return this;
  }

  /**
   * Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_CreateHsm.html
   */
  public toCreateHsm() {
    this.to('cloudhsm:CreateHsm');
    return this;
  }

  /**
   * Creates an HSM client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_CreateLunaClient.html
   */
  public toCreateLunaClient() {
    this.to('cloudhsm:CreateLunaClient');
    return this;
  }

  /**
   * Deletes the specified CloudHSM backup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DeleteBackup.html
   */
  public toDeleteBackup() {
    this.to('cloudhsm:DeleteBackup');
    return this;
  }

  /**
   * Deletes the specified AWS CloudHSM cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DeleteCluster.html
   */
  public toDeleteCluster() {
    this.to('cloudhsm:DeleteCluster');
    return this;
  }

  /**
   * Deletes a high-availability partition group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DeleteHapg.html
   */
  public toDeleteHapg() {
    this.to('cloudhsm:DeleteHapg');
    return this;
  }

  /**
   * Deletes the specified HSM
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DeleteHsm.html
   */
  public toDeleteHsm() {
    this.to('cloudhsm:DeleteHsm');
    return this;
  }

  /**
   * Deletes a client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DeleteLunaClient.html
   */
  public toDeleteLunaClient() {
    this.to('cloudhsm:DeleteLunaClient');
    return this;
  }

  /**
   * Gets information about backups of AWS CloudHSM clusters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeBackups.html
   */
  public toDescribeBackups() {
    this.to('cloudhsm:DescribeBackups');
    return this;
  }

  /**
   * Gets information about AWS CloudHSM clusters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html
   */
  public toDescribeClusters() {
    this.to('cloudhsm:DescribeClusters');
    return this;
  }

  /**
   * Retrieves information about a high-availability partition group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DescribeHapg.html
   */
  public toDescribeHapg() {
    this.to('cloudhsm:DescribeHapg');
    return this;
  }

  /**
   * Retrieves information about an HSM. You can identify the HSM by its ARN or its serial number
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DescribeHsm.html
   */
  public toDescribeHsm() {
    this.to('cloudhsm:DescribeHsm');
    return this;
  }

  /**
   * Retrieves information about an HSM client
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_DescribeLunaClient.html
   */
  public toDescribeLunaClient() {
    this.to('cloudhsm:DescribeLunaClient');
    return this;
  }

  /**
   * Gets the configuration files necessary to connect to all high availability partition groups the client is associated with
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_GetConfig.html
   */
  public toGetConfig() {
    this.to('cloudhsm:GetConfig');
    return this;
  }

  /**
   * Claims an AWS CloudHSM cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_InitializeCluster.html
   */
  public toInitializeCluster() {
    this.to('cloudhsm:InitializeCluster');
    return this;
  }

  /**
   * Lists the Availability Zones that have available AWS CloudHSM capacity
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListAvailableZones.html
   */
  public toListAvailableZones() {
    this.to('cloudhsm:ListAvailableZones');
    return this;
  }

  /**
   * Lists the high-availability partition groups for the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListHapgs.html
   */
  public toListHapgs() {
    this.to('cloudhsm:ListHapgs');
    return this;
  }

  /**
   * Retrieves the identifiers of all of the HSMs provisioned for the current customer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListHsms.html
   */
  public toListHsms() {
    this.to('cloudhsm:ListHsms');
    return this;
  }

  /**
   * Lists all of the clients
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListLunaClients.html
   */
  public toListLunaClients() {
    this.to('cloudhsm:ListLunaClients');
    return this;
  }

  /**
   * Gets a list of tags for the specified AWS CloudHSM cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_ListTags.html
   */
  public toListTags() {
    this.to('cloudhsm:ListTags');
    return this;
  }

  /**
   * Returns a list of all tags for the specified AWS CloudHSM resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('cloudhsm:ListTagsForResource');
    return this;
  }

  /**
   * Modifies an existing high-availability partition group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ModifyHapg.html
   */
  public toModifyHapg() {
    this.to('cloudhsm:ModifyHapg');
    return this;
  }

  /**
   * Modifies an HSM
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ModifyHsm.html
   */
  public toModifyHsm() {
    this.to('cloudhsm:ModifyHsm');
    return this;
  }

  /**
   * Modifies the certificate used by the client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_ModifyLunaClient.html
   */
  public toModifyLunaClient() {
    this.to('cloudhsm:ModifyLunaClient');
    return this;
  }

  /**
   * Removes one or more tags from the specified AWS CloudHSM resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/cloudhsm/classic/APIReference/API_RemoveTagsFromResource.html
   */
  public toRemoveTagsFromResource() {
    this.to('cloudhsm:RemoveTagsFromResource');
    return this;
  }

  /**
   * Restores the specified CloudHSM backup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_RestoreBackup.html
   */
  public toRestoreBackup() {
    this.to('cloudhsm:RestoreBackup');
    return this;
  }

  /**
   * Adds or overwrites one or more tags for the specified AWS CloudHSM cluster
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
    this.to('cloudhsm:TagResource');
    return this;
  }

  /**
   * Removes the specified tag or tags from the specified AWS CloudHSM cluster
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('cloudhsm:UntagResource');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Tagging": [
      "AddTagsToResource",
      "RemoveTagsFromResource",
      "TagResource",
      "UntagResource"
    ],
    "Write": [
      "CopyBackupToRegion",
      "CreateCluster",
      "CreateHapg",
      "CreateHsm",
      "CreateLunaClient",
      "DeleteBackup",
      "DeleteCluster",
      "DeleteHapg",
      "DeleteHsm",
      "DeleteLunaClient",
      "InitializeCluster",
      "ModifyHapg",
      "ModifyHsm",
      "ModifyLunaClient",
      "RestoreBackup"
    ],
    "Read": [
      "DescribeBackups",
      "DescribeClusters",
      "DescribeHapg",
      "DescribeHsm",
      "DescribeLunaClient",
      "GetConfig",
      "ListTags",
      "ListTagsForResource"
    ],
    "List": [
      "ListAvailableZones",
      "ListHapgs",
      "ListHsms",
      "ListLunaClients"
    ]
  };

  /**
   * Adds a resource of type backup to the statement
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/userguide/backups.html
   *
   * @param cloudHsmBackupInstanceName - Identifier for the cloudHsmBackupInstanceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBackup(cloudHsmBackupInstanceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudhsm:${Region}:${Account}:backup/${CloudHsmBackupInstanceName}';
    arn = arn.replace('${CloudHsmBackupInstanceName}', cloudHsmBackupInstanceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/cloudhsm/latest/userguide/clusters.html
   *
   * @param cloudHsmClusterInstanceName - Identifier for the cloudHsmClusterInstanceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCluster(cloudHsmClusterInstanceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudhsm:${Region}:${Account}:cluster/${CloudHsmClusterInstanceName}';
    arn = arn.replace('${CloudHsmClusterInstanceName}', cloudHsmClusterInstanceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
