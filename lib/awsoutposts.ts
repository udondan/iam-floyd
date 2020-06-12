import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service outposts
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsoutposts.html
 */
export class Outposts extends PolicyStatement {
  public servicePrefix = 'outposts';
  public actions : Actions = {
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
  public resourceTypes : ResourceTypes = {
    "Outpost": {
      "name": "Outpost",
      "arn": "arn:${Partition}:outposts:${Region}:${Account}:outpost/${OutpostId}",
      "conditionKeys": []
    },
    "Site": {
      "name": "Site",
      "arn": "arn:${Partition}:outposts:${Region}:${Account}:site/${SiteId}",
      "conditionKeys": []
    },
    "Order": {
      "name": "Order",
      "arn": "arn:${Partition}:outposts:${Region}:${Account}:order/${OrderId}",
      "conditionKeys": []
    }
  };

  /**
   * Creates an Outpost
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_CreateOutpost.html
   */
  public createOutpost () {
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
  public getOutpost () {
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
  public getOutpostInstanceTypes () {
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
  public listOutposts () {
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
  public listSites () {
    this.add('outposts:ListSites');
    return this;
  }
}
