import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [wickr](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswickr.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Wickr extends PolicyStatement {
  public servicePrefix = 'wickr';

  /**
   * Statement provider for service [wickr](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswickr.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create and manage Wickr networks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toCreateAdminSession() {
    return this.to('CreateAdminSession');
  }

  /**
   * Grants permission to create a new wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toCreateNetwork() {
    return this.to('CreateNetwork');
  }

  /**
   * Grants permission to view Wickr networks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toListNetworks() {
    return this.to('ListNetworks');
  }

  /**
   * Grants permission to list the tags applied to a Wickr resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to add tags to a specified wickr resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag the specified tags from the specified wickr resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update Wickr network details
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toUpdateNetworkDetails() {
    return this.to('UpdateNetworkDetails');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateAdminSession',
      'CreateNetwork',
      'ListNetworks',
      'UpdateNetworkDetails'
    ],
    Read: [
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type network to the statement
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/
   *
   * @param networkId - Identifier for the networkId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNetwork(networkId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Wickr.defaultPartition }:wickr:${ region || '*' }:${ account || '*' }:network/${ networkId }`);
  }
}
