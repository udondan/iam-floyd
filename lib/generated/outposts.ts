import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel an order
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_CancelOrder.html
   */
  public toCancelOrder() {
    return this.to('CancelOrder');
  }

  /**
   * Grants permission to create an order
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_CreateOrder.html
   */
  public toCreateOrder() {
    return this.to('CreateOrder');
  }

  /**
   * Grants permission to create an Outpost
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_CreateOutpost.html
   */
  public toCreateOutpost() {
    return this.to('CreateOutpost');
  }

  /**
   * Grants permission to create a private connectivity configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/how-outposts-works.html#private-connectivity
   */
  public toCreatePrivateConnectivityConfig() {
    return this.to('CreatePrivateConnectivityConfig');
  }

  /**
   * Grants permission to create a site
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_CreateSite.html
   */
  public toCreateSite() {
    return this.to('CreateSite');
  }

  /**
   * Grants permission to delete an Outpost
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_DeleteOutpost.html
   */
  public toDeleteOutpost() {
    return this.to('DeleteOutpost');
  }

  /**
   * Grants permission to delete a site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_DeleteSite.html
   */
  public toDeleteSite() {
    return this.to('DeleteSite');
  }

  /**
   * Grants permission to get a catalog item
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetCatalogItem.html
   */
  public toGetCatalogItem() {
    return this.to('GetCatalogItem');
  }

  /**
   * Grants permission to get information about the connection for your Outpost server
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetConnection.html
   */
  public toGetConnection() {
    return this.to('GetConnection');
  }

  /**
   * Grants permission to get information about an order
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetOrder.html
   */
  public toGetOrder() {
    return this.to('GetOrder');
  }

  /**
   * Grants permission to get information about the specified Outpost
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetOutpost.html
   */
  public toGetOutpost() {
    return this.to('GetOutpost');
  }

  /**
   * Grants permission to get the instance types for the specified Outpost
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetOutpostInstanceTypes.html
   */
  public toGetOutpostInstanceTypes() {
    return this.to('GetOutpostInstanceTypes');
  }

  /**
   * Grants permission to get a private connectivity configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/how-outposts-works.html#private-connectivity
   */
  public toGetPrivateConnectivityConfig() {
    return this.to('GetPrivateConnectivityConfig');
  }

  /**
   * Grants permission to get a site
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetSite.html
   */
  public toGetSite() {
    return this.to('GetSite');
  }

  /**
   * Grants permission to get a site address
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_GetSiteAddress.html
   */
  public toGetSiteAddress() {
    return this.to('GetSiteAddress');
  }

  /**
   * Grants permission to list the assets for your Outpost
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListAssets.html
   */
  public toListAssets() {
    return this.to('ListAssets');
  }

  /**
   * Grants permission to list all catalog items
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListCatalogItems.html
   */
  public toListCatalogItems() {
    return this.to('ListCatalogItems');
  }

  /**
   * Grants permission to list the orders for your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListOrders.html
   */
  public toListOrders() {
    return this.to('ListOrders');
  }

  /**
   * Grants permission to list the Outposts for your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListOutposts.html
   */
  public toListOutposts() {
    return this.to('ListOutposts');
  }

  /**
   * Grants permission to list the sites for your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListSites.html
   */
  public toListSites() {
    return this.to('ListSites');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to start a connection for your Outpost server
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_StartConnection.html
   */
  public toStartConnection() {
    return this.to('StartConnection');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an Outpost
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_UpdateOutpost.html
   */
  public toUpdateOutpost() {
    return this.to('UpdateOutpost');
  }

  /**
   * Grants permission to update a site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_UpdateSite.html
   */
  public toUpdateSite() {
    return this.to('UpdateSite');
  }

  /**
   * Grants permission to update the site address
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_UpdateSiteAddress.html
   */
  public toUpdateSiteAddress() {
    return this.to('UpdateSiteAddress');
  }

  /**
   * Grants permission to update the physical properties of a rack at a site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/outposts/latest/APIReference/API_UpdateSiteRackPhysicalProperties.html
   */
  public toUpdateSiteRackPhysicalProperties() {
    return this.to('UpdateSiteRackPhysicalProperties');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelOrder',
      'CreateOrder',
      'CreateOutpost',
      'CreatePrivateConnectivityConfig',
      'CreateSite',
      'DeleteOutpost',
      'DeleteSite',
      'StartConnection',
      'UpdateOutpost',
      'UpdateSite',
      'UpdateSiteAddress',
      'UpdateSiteRackPhysicalProperties'
    ],
    Read: [
      'GetCatalogItem',
      'GetConnection',
      'GetOrder',
      'GetOutpost',
      'GetOutpostInstanceTypes',
      'GetPrivateConnectivityConfig',
      'GetSite',
      'GetSiteAddress',
      'ListTagsForResource'
    ],
    List: [
      'ListAssets',
      'ListCatalogItems',
      'ListOrders',
      'ListOutposts',
      'ListSites'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type outpost to the statement
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/work-with-outposts.html
   *
   * @param outpostId - Identifier for the outpostId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOutpost(outpostId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Outposts.defaultPartition }:outposts:${ region || '*' }:${ account || '*' }:outpost/${ outpostId }`);
  }

  /**
   * Adds a resource of type site to the statement
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/work-with-outposts.html
   *
   * @param siteId - Identifier for the siteId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSite(siteId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Outposts.defaultPartition }:outposts:${ region || '*' }:${ account || '*' }:site/${ siteId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/identity-access-management.html
   *
   * Applies to actions:
   * - .toCreateOutpost()
   * - .toCreateSite()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/identity-access-management.html
   *
   * Applies to resource types:
   * - outpost
   * - site
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/outposts/latest/userguide/identity-access-management.html
   *
   * Applies to actions:
   * - .toCreateOutpost()
   * - .toCreateSite()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
