import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [outposts](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsoutposts.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Outposts extends PolicyStatement {
  public servicePrefix = 'outposts';

  /**
   * Statement provider for service [outposts](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsoutposts.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates an Outpost
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_CreateOutpost.html
   */
  public toCreateOutpost() {
    this.to('outposts:CreateOutpost');
    return this;
  }

  /**
   * Gets information about the specified Outpost
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetOutpost.html
   */
  public toGetOutpost() {
    this.to('outposts:GetOutpost');
    return this;
  }

  /**
   * Lists the instance types for the specified Outpost
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetOutpostInstanceTypes.html
   */
  public toGetOutpostInstanceTypes() {
    this.to('outposts:GetOutpostInstanceTypes');
    return this;
  }

  /**
   * List the Outposts for your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListOutposts.html
   */
  public toListOutposts() {
    this.to('outposts:ListOutposts');
    return this;
  }

  /**
   * Lists the sites for the specified AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListSites.html
   */
  public toListSites() {
    this.to('outposts:ListSites');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateOutpost"
    ],
    "Read": [
      "GetOutpost",
      "GetOutpostInstanceTypes"
    ],
    "List": [
      "ListOutposts",
      "ListSites"
    ]
  };

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
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
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
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
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
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
