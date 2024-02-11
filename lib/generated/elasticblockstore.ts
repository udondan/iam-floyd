import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to seal and complete the snapshot after all of the required blocks of data have been written to it
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ebs/latest/APIReference/API_CompleteSnapshot.html
   */
  public toCompleteSnapshot() {
    return this.to('CompleteSnapshot');
  }

  /**
   * Grants permission to return the data of a block in an Amazon Elastic Block Store (EBS) snapshot
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ebs/latest/APIReference/API_GetSnapshotBlock.html
   */
  public toGetSnapshotBlock() {
    return this.to('GetSnapshotBlock');
  }

  /**
   * Grants permission to list the blocks that are different between two Amazon Elastic Block Store (EBS) snapshots of the same volume/snapshot lineage
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ebs/latest/APIReference/API_ListChangedBlocks.html
   */
  public toListChangedBlocks() {
    return this.to('ListChangedBlocks');
  }

  /**
   * Grants permission to list the blocks in an Amazon Elastic Block Store (EBS) snapshot
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ebs/latest/APIReference/API_ListSnapshotBlocks.html
   */
  public toListSnapshotBlocks() {
    return this.to('ListSnapshotBlocks');
  }

  /**
   * Grants permission to write a block of data to a snapshot created by the StartSnapshot operation
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/ebs/latest/APIReference/API_PutSnapshotBlock.html
   */
  public toPutSnapshotBlock() {
    return this.to('PutSnapshotBlock');
  }

  /**
   * Grants permission to create a new EBS snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifDescription()
   * - .ifParentSnapshot()
   * - .ifVolumeSize()
   *
   * https://docs.aws.amazon.com/ebs/latest/APIReference/API_StartSnapshot.html
   */
  public toStartSnapshot() {
    return this.to('StartSnapshot');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CompleteSnapshot',
      'PutSnapshotBlock',
      'StartSnapshot'
    ],
    Read: [
      'GetSnapshotBlock',
      'ListChangedBlocks',
      'ListSnapshotBlocks'
    ]
  };

  /**
   * Adds a resource of type snapshot to the statement
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html
   *
   * @param snapshotId - Identifier for the snapshotId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
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
    return this.on(`arn:${ partition || Ebs.defaultPartition }:ec2:${ region || '*' }::snapshot/${ snapshotId }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toStartSnapshot()
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a tag key and value pair of a resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCompleteSnapshot()
   * - .toGetSnapshotBlock()
   * - .toListChangedBlocks()
   * - .toListSnapshotBlocks()
   * - .toPutSnapshotBlock()
   * - .toStartSnapshot()
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a list of tag keys that are allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toStartSnapshot()
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the description of the snapshot being created
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticblockstore.html#amazonelasticblockstore-policy-keys
   *
   * Applies to actions:
   * - .toStartSnapshot()
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDescription(value: string | string[], operator?: Operator | string) {
    return this.if(`Description`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of the parent snapshot
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticblockstore.html#amazonelasticblockstore-policy-keys
   *
   * Applies to actions:
   * - .toStartSnapshot()
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifParentSnapshot(value: string | string[], operator?: Operator | string) {
    return this.if(`ParentSnapshot`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the size of the volume for the snapshot being created, in GiB
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticblockstore.html#amazonelasticblockstore-policy-keys
   *
   * Applies to actions:
   * - .toStartSnapshot()
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifVolumeSize(value: number | number[], operator?: Operator | string) {
    return this.if(`VolumeSize`, value, operator || 'NumericEquals');
  }
}
