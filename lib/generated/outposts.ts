import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [outposts](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsoutposts.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Outposts extends PolicyStatement {
  public servicePrefix = 'outposts';

  /**
   * Statement provider for service [outposts](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsoutposts.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an Outpost
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
   * Grants permission to delete an outpost
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/Welcome.html
   */
  public toDeleteOutpost() {
    this.to('outposts:DeleteOutpost');
    return this;
  }

  /**
   * Grants permission to delete an site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/Welcome.html
   */
  public toDeleteSite() {
    this.to('outposts:DeleteSite');
    return this;
  }

  /**
   * Grants permission to get information about the specified Outpost
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
   * Grants permission to list the instance types for the specified Outpost
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
   * Grants permission to list the Outposts for your AWS account
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
   * Grants permission to list the sites for your AWS account
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
      "CreateOutpost",
      "DeleteOutpost",
      "DeleteSite"
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
}

export type OutpostsActionsWrite = 'CreateOutpost' | 'DeleteOutpost' | 'DeleteSite';
export type OutpostsActionsRead = 'GetOutpost' | 'GetOutpostInstanceTypes';
export type OutpostsActionsList = 'ListOutposts' | 'ListSites';
export type OutpostsActions = OutpostsActionsWrite | OutpostsActionsRead | OutpostsActionsList;
