import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [eventsbilltoaws](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsreinventeventpassamountchargetocustomerawsaccount.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Eventsbilltoaws extends PolicyStatement {
  public servicePrefix = 'eventsbilltoaws';

  /**
   * Statement provider for service [eventsbilltoaws](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsreinventeventpassamountchargetocustomerawsaccount.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to approve or deny the reinvent pass charge to AWS account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/eventsbilltoaws/latest/reference/
   */
  public toApprove() {
    return this.to('approve');
  }

  /**
   * Grants permission to get the AWS reinvent pass purchase details
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/eventsbilltoaws/latest/reference/
   */
  public toInfo() {
    return this.to('info');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'approve'
    ],
    Read: [
      'info'
    ]
  };

  /**
   * Adds a resource of type approve to the statement
   *
   * https://docs.aws.amazon.com/eventsbilltoaws/latest/reference/security-iam.html
   *
   * @param relativeId - Identifier for the relativeId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApprove(relativeId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:eventsbilltoaws:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:${ relativeId }`);
  }

  /**
   * Adds a resource of type info to the statement
   *
   * https://docs.aws.amazon.com/eventsbilltoaws/latest/reference/security-iam.html
   *
   * @param relativeId - Identifier for the relativeId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInfo(relativeId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:eventsbilltoaws:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:${ relativeId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/condition-keys-requesttag
   *
   * Applies to actions:
   * - .toApprove()
   * - .toInfo()
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
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toApprove()
   * - .toInfo()
   *
   * Applies to resource types:
   * - approve
   * - info
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a key that is present in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toApprove()
   * - .toInfo()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
