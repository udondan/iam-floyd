import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service aws-marketplace
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplaceimagebuildingservice.html
 */
export class AwsMarketplaceImageBuildingService extends PolicyStatement {
  public servicePrefix = 'aws-marketplace';
  public actions : Actions = {
    "DescribeBuilds": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/api-reference.html",
      "description": "Describes Image Builds identified by a build Id",
      "accessLevel": "Read"
    },
    "ListBuilds": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/api-reference.html",
      "description": "Lists Image Builds.",
      "accessLevel": "Read"
    },
    "StartBuild": {
      "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/api-reference.html",
      "description": "Starts an Image Build",
      "accessLevel": "Write"
    }
  };

  /**
   * Describes Image Builds identified by a build Id
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/api-reference.html
   */
  public describeBuilds () {
    this.add('aws-marketplace:DescribeBuilds');
    return this;
  }

  /**
   * Lists Image Builds.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/api-reference.html
   */
  public listBuilds () {
    this.add('aws-marketplace:ListBuilds');
    return this;
  }

  /**
   * Starts an Image Build
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/api-reference.html
   */
  public startBuild () {
    this.add('aws-marketplace:StartBuild');
    return this;
  }
}
