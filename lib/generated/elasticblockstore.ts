import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [ebs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ebs extends PolicyStatement {
  public servicePrefix = 'ebs';

  /**
   * Statement provider for service [ebs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticblockstore.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to seal and complete the snapshot after all of the required blocks of data have been written to it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ebs/latest/APIReference/API_CompleteSnapshot.html
   */
  public toCompleteSnapshot() {
    this.to('ebs:CompleteSnapshot');
    return this;
  }

  /**
   * Grants permission to return the data of a block in an Amazon Elastic Block Store (EBS) snapshot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ebs/latest/APIReference/API_GetSnapshotBlock.html
   */
  public toGetSnapshotBlock() {
    this.to('ebs:GetSnapshotBlock');
    return this;
  }

  /**
   * Grants permission to list the blocks that are different between two Amazon Elastic Block Store (EBS) snapshots of the same volume/snapshot lineage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ebs/latest/APIReference/API_ListChangedBlocks.html
   */
  public toListChangedBlocks() {
    this.to('ebs:ListChangedBlocks');
    return this;
  }

  /**
   * Grants permission to list the blocks in an Amazon Elastic Block Store (EBS) snapshot.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ebs/latest/APIReference/API_ListSnapshotBlocks.html
   */
  public toListSnapshotBlocks() {
    this.to('ebs:ListSnapshotBlocks');
    return this;
  }

  /**
   * Grants permission to write a block of data to a snapshot created by the StartSnapshot operation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ebs/latest/APIReference/API_PutSnapshotBlock.html
   */
  public toPutSnapshotBlock() {
    this.to('ebs:PutSnapshotBlock');
    return this;
  }

  /**
   * Grants permission to create a new EBS snapshot.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ebs/latest/APIReference/API_StartSnapshot.html
   */
  public toStartSnapshot() {
    this.to('ebs:StartSnapshot');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CompleteSnapshot",
      "PutSnapshotBlock",
      "StartSnapshot"
    ],
    "Read": [
      "GetSnapshotBlock",
      "ListChangedBlocks",
      "ListSnapshotBlocks"
    ]
  };

  /**
   * Adds a resource of type snapshot to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format
   *
   * @param snapshotId - Identifier for the snapshotId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifDescription()
   * - .ifParentSnapshot()
   * - .ifVolumeSize()
   */
  public onSnapshot(snapshotId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}::snapshot/${SnapshotId}';
    arn = arn.replace('${SnapshotId}', snapshotId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the description of the snapshot being created.
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDescription(value: string | string[], operator?: Operator | string) {
    return this.if(`ebs:Description`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of the parent snapshot.
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifParentSnapshot(value: string | string[], operator?: Operator | string) {
    return this.if(`ebs:ParentSnapshot`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the size of the volume for the snapshot being created, in GiB.
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifVolumeSize(value: number | number[], operator?: Operator | string) {
    return this.if(`ebs:VolumeSize`, value, operator || 'NumericEquals');
  }
}

export type EbsActionsWrite = 'CompleteSnapshot' | 'PutSnapshotBlock' | 'StartSnapshot';
export type EbsActionsRead = 'GetSnapshotBlock' | 'ListChangedBlocks' | 'ListSnapshotBlocks';
export type EbsActions = EbsActionsWrite | EbsActionsRead;
