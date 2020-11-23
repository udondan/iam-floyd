import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [aws-marketplace-image-building-service](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplaceimagebuildingservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMarketplaceImageBuildingService extends PolicyStatement {
  public servicePrefix = 'aws-marketplace';

  /**
   * Statement provider for service [aws-marketplace-image-building-service](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplaceimagebuildingservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Describes Image Builds identified by a build Id
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/api-reference.html
   */
  public toDescribeBuilds() {
    this.to('aws-marketplace-image-building-service:DescribeBuilds');
    return this;
  }

  /**
   * Lists Image Builds.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/api-reference.html
   */
  public toListBuilds() {
    this.to('aws-marketplace-image-building-service:ListBuilds');
    return this;
  }

  /**
   * Starts an Image Build
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/api-reference.html
   */
  public toStartBuild() {
    this.to('aws-marketplace-image-building-service:StartBuild');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "DescribeBuilds",
      "ListBuilds"
    ],
    "Write": [
      "StartBuild"
    ]
  };
}
