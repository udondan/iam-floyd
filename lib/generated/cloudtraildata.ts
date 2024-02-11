import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [cloudtrail-data](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudtraildata.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CloudtrailData extends PolicyStatement {
  public servicePrefix = 'cloudtrail-data';

  /**
   * Statement provider for service [cloudtrail-data](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudtraildata.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to ingest your application events into CloudTrail Lake
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtraildata/latest/APIReference/API_PutAuditEvents.html
   */
  public toPutAuditEvents() {
    return this.to('PutAuditEvents');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'PutAuditEvents'
    ]
  };

  /**
   * Adds a resource of type channel to the statement
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/userguide/how-cloudtrail-works.html#how-cloudtrail-works-channels
   *
   * @param channelId - Identifier for the channelId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChannel(channelId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || CloudtrailData.defaultPartition }:cloudtrail:${ region || '*' }:${ account || '*' }:channel/${ channelId }`);
  }

  /**
   * Filters access by a tag's key and value in a request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - channel
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag keys in a request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
