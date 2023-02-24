import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [cloudtrail-data](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudtraildata.html).
 *
 * @param options - Options for the statement
 */
export class CloudtrailData extends PolicyStatement {
  public servicePrefix = 'cloudtrail-data';

  /**
   * Statement provider for service [cloudtrail-data](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudtraildata.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
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
    return this.on(`arn:${ partition || this.defaultPartition }:cloudtrail:${ region || '*' }:${ account || '*' }:channel/${ channelId }`);
  }
}
