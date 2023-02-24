import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [aws-marketplace-image-building-service](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplaceimagebuildingservice.html).
 *
 * @param options - Options for the statement
 */
export class AwsMarketplaceImageBuildingService extends PolicyStatement {
  public servicePrefix = 'aws-marketplace';

  /**
   * Statement provider for service [aws-marketplace-image-building-service](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplaceimagebuildingservice.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Describes Image Builds identified by a build Id
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/api-reference.html
   */
  public toDescribeBuilds() {
    return this.to('DescribeBuilds');
  }

  /**
   * Lists Image Builds.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/api-reference.html
   */
  public toListBuilds() {
    return this.to('ListBuilds');
  }

  /**
   * Starts an Image Build
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/api-reference.html
   */
  public toStartBuild() {
    return this.to('StartBuild');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'DescribeBuilds',
      'ListBuilds'
    ],
    Write: [
      'StartBuild'
    ]
  };
}
