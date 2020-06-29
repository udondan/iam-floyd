import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service aws-marketplace-image-building-service
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplaceimagebuildingservice.html
 */
export class AwsMarketplaceImageBuildingService extends PolicyStatement {
  public servicePrefix = 'aws-marketplace-image-building-service';
  public actions: Actions = {
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
  public resourceTypes: ResourceTypes = {};

  /**
   * Action provider for service aws-marketplace-image-building-service
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplaceimagebuildingservice.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Describes Image Builds identified by a build Id
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/api-reference.html
   */
  public describeBuilds() {
    this.add('aws-marketplace-image-building-service:DescribeBuilds');
    return this;
  }

  /**
   * Lists Image Builds.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/api-reference.html
   */
  public listBuilds() {
    this.add('aws-marketplace-image-building-service:ListBuilds');
    return this;
  }

  /**
   * Starts an Image Build
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/api-reference.html
   */
  public startBuild() {
    this.add('aws-marketplace-image-building-service:StartBuild');
    return this;
  }
}
