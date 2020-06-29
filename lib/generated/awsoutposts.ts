import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service outposts
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsoutposts.html
 */
export class Outposts extends PolicyStatement {
  public servicePrefix = 'outposts';
  public actions: Actions = {
    "CreateOutpost": {
      "url": "https://docs.aws.amazon.com/outposts/latest/APIReference/API_CreateOutpost.html",
      "description": "Creates an Outpost",
      "accessLevel": "Write"
    },
    "GetOutpost": {
      "url": "https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetOutpost.html",
      "description": "Gets information about the specified Outpost",
      "accessLevel": "Read"
    },
    "GetOutpostInstanceTypes": {
      "url": "https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetOutpostInstanceTypes.html",
      "description": "Lists the instance types for the specified Outpost",
      "accessLevel": "Read"
    },
    "ListOutposts": {
      "url": "https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListOutposts.html",
      "description": "List the Outposts for your AWS account",
      "accessLevel": "List"
    },
    "ListSites": {
      "url": "https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListSites.html",
      "description": "Lists the sites for the specified AWS account",
      "accessLevel": "List"
    }
  };
  public resourceTypes: ResourceTypes = {
    "Outpost": {
      "name": "Outpost",
      "url": "https://docs.aws.amazon.com/outposts/latest/APIReference/API_Outpost.html",
      "arn": "arn:${Partition}:outposts:${Region}:${Account}:outpost/${OutpostId}",
      "conditionKeys": []
    },
    "Site": {
      "name": "Site",
      "url": "https://docs.aws.amazon.com/outposts/latest/APIReference/API_Site.html",
      "arn": "arn:${Partition}:outposts:${Region}:${Account}:site/${SiteId}",
      "conditionKeys": []
    },
    "Order": {
      "name": "Order",
      "url": "https://docs.aws.amazon.com/outposts/latest/APIReference/Welcome.html",
      "arn": "arn:${Partition}:outposts:${Region}:${Account}:order/${OrderId}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service outposts
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsoutposts.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Creates an Outpost
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_CreateOutpost.html
   */
  public createOutpost() {
    this.add('outposts:CreateOutpost');
    return this;
  }

  /**
   * Gets information about the specified Outpost
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetOutpost.html
   */
  public getOutpost() {
    this.add('outposts:GetOutpost');
    return this;
  }

  /**
   * Lists the instance types for the specified Outpost
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetOutpostInstanceTypes.html
   */
  public getOutpostInstanceTypes() {
    this.add('outposts:GetOutpostInstanceTypes');
    return this;
  }

  /**
   * List the Outposts for your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListOutposts.html
   */
  public listOutposts() {
    this.add('outposts:ListOutposts');
    return this;
  }

  /**
   * Lists the sites for the specified AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListSites.html
   */
  public listSites() {
    this.add('outposts:ListSites');
    return this;
  }

  /**
   * Adds a resource of type Outpost to the statement
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_Outpost.html
   *
   * @param outpostId - Identifier for the outpostId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onOutpost(outpostId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:outposts:${Region}:${Account}:outpost/${OutpostId}';
    arn = arn.replace('${OutpostId}', outpostId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Site to the statement
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_Site.html
   *
   * @param siteId - Identifier for the siteId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSite(siteId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:outposts:${Region}:${Account}:site/${SiteId}';
    arn = arn.replace('${SiteId}', siteId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Order to the statement
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/Welcome.html
   *
   * @param orderId - Identifier for the orderId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onOrder(orderId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:outposts:${Region}:${Account}:order/${OrderId}';
    arn = arn.replace('${OrderId}', orderId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
