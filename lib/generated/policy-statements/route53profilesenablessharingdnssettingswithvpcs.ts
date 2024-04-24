import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [route53profiles](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53profilesenablessharingdnssettingswithvpcs.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Route53profiles extends PolicyStatement {
  public servicePrefix = 'route53profiles';

  /**
   * Statement provider for service [route53profiles](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53profilesenablessharingdnssettingswithvpcs.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associates a Profile to the customer VPC
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53profiles_AssociateProfile.html
   */
  public toAssociateProfile() {
    return this.to('AssociateProfile');
  }

  /**
   * Grants permission to associates a resource, such as DNS Firewall rule group, private hosted zone, resolver rule, etc. to a specified Profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53profiles_AssociateResourceToProfile.html
   */
  public toAssociateResourceToProfile() {
    return this.to('AssociateResourceToProfile');
  }

  /**
   * Grants permission to create a new Profile resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53profiles_CreateProfile.html
   */
  public toCreateProfile() {
    return this.to('CreateProfile');
  }

  /**
   * Grants permission to delete a Profile specified byt the ProfileId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53profiles_DeleteProfile.html
   */
  public toDeleteProfile() {
    return this.to('DeleteProfile');
  }

  /**
   * Grants permission to delete an association between a customer VPC and the specified Profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53profiles_DisassociateProfile.html
   */
  public toDisassociateProfile() {
    return this.to('DisassociateProfile');
  }

  /**
   * Grants permission to delete the asoociation between the resource. such as DNS Firewall rule group, private hosted zone, resolver rule, etc. and the specified Profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53profiles_DisassociateResourceFromProfile.html
   */
  public toDisassociateResourceFromProfile() {
    return this.to('DisassociateResourceFromProfile');
  }

  /**
   * Grants permission to get a Profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53profiles_GetProfile.html
   */
  public toGetProfile() {
    return this.to('GetProfile');
  }

  /**
   * Grants permission to get a Profile to a VPC association specified by the Profile association ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53profiles_GetProfileAssociation.html
   */
  public toGetProfileAssociation() {
    return this.to('GetProfileAssociation');
  }

  /**
   * Grants permission to get a Profile resource association based on the ProfileResourceAssociationId
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53profiles_GetProfileResourceAssociation.html
   */
  public toGetProfileResourceAssociation() {
    return this.to('GetProfileResourceAssociation');
  }

  /**
   * Grants permission to list all VPCs the specified Profile is associated to
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53profiles_ListProfileAssociations.html
   */
  public toListProfileAssociations() {
    return this.to('ListProfileAssociations');
  }

  /**
   * Grants permission to list all the associations between the resources, such as DNS Firewall rule groups, private hosted zones, resolver rules, etc. for the given Profile ID
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53profiles_ListProfileResourceAssociations.html
   */
  public toListProfileResourceAssociations() {
    return this.to('ListProfileResourceAssociations');
  }

  /**
   * Grants permission to list all the Profiles created by, and shared to the customer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53profiles_ListProfiles.html
   */
  public toListProfiles() {
    return this.to('ListProfiles');
  }

  /**
   * Grants permission to list all tags associated with the resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53profiles_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to add a tag to the given resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53profiles_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to delete a tag from the given resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53profiles_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the Profile resource association name or the resource properties or both, if both name and resource properties are null, the api returns the existing Profile resource association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53profiles_UpdateProfileResourceAssociation.html
   */
  public toUpdateProfileResourceAssociation() {
    return this.to('UpdateProfileResourceAssociation');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateProfile',
      'AssociateResourceToProfile',
      'CreateProfile',
      'DeleteProfile',
      'DisassociateProfile',
      'DisassociateResourceFromProfile',
      'UpdateProfileResourceAssociation'
    ],
    Read: [
      'GetProfile',
      'GetProfileAssociation',
      'GetProfileResourceAssociation'
    ],
    List: [
      'ListProfileAssociations',
      'ListProfileResourceAssociations',
      'ListProfiles',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type profile to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/#access-control-resources
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProfile(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:route53profiles:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:profile/${ resourceId }`);
  }

  /**
   * Adds a resource of type profile-association to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/#access-control-resources
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProfileAssociation(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:route53profiles:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:profile-association/${ resourceId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAssociateProfile()
   * - .toCreateProfile()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - profile
   * - profile-association
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toAssociateProfile()
   * - .toCreateProfile()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
