import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [ebs](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticblockstore.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ebs extends PolicyStatement {
  public servicePrefix = 'ebs';
  protected actionList: Actions = {
    "GetSnapshotBlock": {
      "url": "https://docs.aws.amazon.com/ebs/latest/APIReference/API_GetSnapshotBlock.html",
      "description": "Grants permission to return the data of a block in an Amazon Elastic Block Store (EBS) snapshot",
      "accessLevel": "Read",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "ListChangedBlocks": {
      "url": "https://docs.aws.amazon.com/ebs/latest/APIReference/API_ListChangedBlocks.html",
      "description": "Grants permission to list the block indexes and block tokens for blocks that are different between two Amazon Elastic Block Store (EBS) snapshots of the same volume/snapshot lineage",
      "accessLevel": "Read",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    },
    "ListSnapshotBlocks": {
      "url": "https://docs.aws.amazon.com/ebs/latest/APIReference/API_ListSnapshotBlocks.html",
      "description": "Grants permission to list the block indexes and block tokens for blocks in an Amazon Elastic Block Store (EBS) snapshot.",
      "accessLevel": "Read",
      "resourceTypes": {
        "snapshot": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "snapshot": {
      "name": "snapshot",
      "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policy-structure.html#EC2_ARN_Format",
      "arn": "arn:${Partition}:ec2:${Region}::snapshot/${SnapshotId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [ebs](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticblockstore.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to return the data of a block in an Amazon Elastic Block Store (EBS) snapshot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ebs/latest/APIReference/API_GetSnapshotBlock.html
   */
  public toGetSnapshotBlock() {
    this.add('ebs:GetSnapshotBlock');
    return this;
  }

  /**
   * Grants permission to list the block indexes and block tokens for blocks that are different between two Amazon Elastic Block Store (EBS) snapshots of the same volume/snapshot lineage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ebs/latest/APIReference/API_ListChangedBlocks.html
   */
  public toListChangedBlocks() {
    this.add('ebs:ListChangedBlocks');
    return this;
  }

  /**
   * Grants permission to list the block indexes and block tokens for blocks in an Amazon Elastic Block Store (EBS) snapshot.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ebs/latest/APIReference/API_ListSnapshotBlocks.html
   */
  public toListSnapshotBlocks() {
    this.add('ebs:ListSnapshotBlocks');
    return this;
  }

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
   * - .ifAwsResourceTag()
   */
  public onSnapshot(snapshotId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}::snapshot/${SnapshotId}';
    arn = arn.replace('${SnapshotId}', snapshotId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access based on tag key-value pairs assigned to the AWS resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - snapshot
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}
