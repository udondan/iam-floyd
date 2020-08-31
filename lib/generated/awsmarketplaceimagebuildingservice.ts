import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [aws-marketplace-image-building-service](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplaceimagebuildingservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMarketplaceImageBuildingService extends PolicyStatement {
  public servicePrefix = 'aws-marketplace-image-building-service';
  protected actionList: Actions = {
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
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [aws-marketplace-image-building-service](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplaceimagebuildingservice.html).
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
  public toListBuilds() {
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
  public toStartBuild() {
    this.add('aws-marketplace-image-building-service:StartBuild');
    return this;
  }
}
