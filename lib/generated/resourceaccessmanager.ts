import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [ram](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourceaccessmanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ram extends PolicyStatement {
  public servicePrefix = 'ram';

  /**
   * Statement provider for service [ram](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourceaccessmanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grant permission to accept the specified resource share invitation
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifShareOwnerAccountId()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_AcceptResourceShareInvitation.html
   */
  public toAcceptResourceShareInvitation() {
    return this.to('AcceptResourceShareInvitation');
  }

  /**
   * Grants permission to associate resource(s) and/or principal(s) to a resource share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceShareName()
   * - .ifAllowsExternalPrincipals()
   * - .ifPrincipal()
   * - .ifRequestedResourceType()
   * - .ifResourceArn()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_AssociateResourceShare.html
   */
  public toAssociateResourceShare() {
    return this.to('AssociateResourceShare');
  }

  /**
   * Grants permission to associate a Permission with a Resource Share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_AssociateResourceSharePermission.html
   */
  public toAssociateResourceSharePermission() {
    return this.to('AssociateResourceSharePermission');
  }

  /**
   * Grants permission to create a resource share with provided resource(s) and/or principal(s)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifRequestedResourceType()
   * - .ifResourceArn()
   * - .ifRequestedAllowsExternalPrincipals()
   * - .ifPrincipal()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html
   */
  public toCreateResourceShare() {
    return this.to('CreateResourceShare');
  }

  /**
   * Grants permission to delete resource share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceShareName()
   * - .ifAllowsExternalPrincipals()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_DeleteResourceShare.html
   */
  public toDeleteResourceShare() {
    return this.to('DeleteResourceShare');
  }

  /**
   * Grants permission to disassociate resource(s) and/or principal(s) from a resource share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceShareName()
   * - .ifAllowsExternalPrincipals()
   * - .ifPrincipal()
   * - .ifRequestedResourceType()
   * - .ifResourceArn()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_DisassociateResourceShare.html
   */
  public toDisassociateResourceShare() {
    return this.to('DisassociateResourceShare');
  }

  /**
   * Grants permission to disassociate a Permission from a Resource Share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_DisassociateResourceSharePermission.html
   */
  public toDisassociateResourceSharePermission() {
    return this.to('DisassociateResourceSharePermission');
  }

  /**
   * Grants permission to access customer's organization and create a SLR in the customer's account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_EnableSharingWithAwsOrganization.html
   */
  public toEnableSharingWithAwsOrganization() {
    return this.to('EnableSharingWithAwsOrganization');
  }

  /**
   * Grants permission to get the contents of an AWS RAM permission
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPermissionArn()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_GetPermission.html
   */
  public toGetPermission() {
    return this.to('GetPermission');
  }

  /**
   * Grants permission to get the policies for the specified resources that you own and have shared
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourcePolicies.html
   */
  public toGetResourcePolicies() {
    return this.to('GetResourcePolicies');
  }

  /**
   * Grants permission to get a set of resource share associations from a provided list or with a specified status of the specified type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareAssociations.html
   */
  public toGetResourceShareAssociations() {
    return this.to('GetResourceShareAssociations');
  }

  /**
   * Grants permission to get resource share invitations by the specified invitation arn or those for the resource share
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareInvitations.html
   */
  public toGetResourceShareInvitations() {
    return this.to('GetResourceShareInvitations');
  }

  /**
   * Grants permission to get a set of resource shares from a provided list or with a specified status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShares.html
   */
  public toGetResourceShares() {
    return this.to('GetResourceShares');
  }

  /**
   * Grants permission to list the resources in a resource share that is shared with you but that the invitation is still pending for
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPendingInvitationResources.html
   */
  public toListPendingInvitationResources() {
    return this.to('ListPendingInvitationResources');
  }

  /**
   * Grants permission to list the AWS RAM permissions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPermissions.html
   */
  public toListPermissions() {
    return this.to('ListPermissions');
  }

  /**
   * Grants permission to list the principals that you have shared resources with or that have shared resources with you
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPrincipals.html
   */
  public toListPrincipals() {
    return this.to('ListPrincipals');
  }

  /**
   * Grants permission to list the Permissions associated with a Resource Share
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceShareName()
   * - .ifAllowsExternalPrincipals()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListResourceSharePermissions.html
   */
  public toListResourceSharePermissions() {
    return this.to('ListResourceSharePermissions');
  }

  /**
   * Grants permission to list the shareable resource types supported by AWS RAM
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListResourceTypes.html
   */
  public toListResourceTypes() {
    return this.to('ListResourceTypes');
  }

  /**
   * Grants permission to list the resources that you added to resource shares or the resources that are shared with you
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListResources.html
   */
  public toListResources() {
    return this.to('ListResources');
  }

  /**
   * Grants permission to promote the specified resource share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html
   */
  public toPromoteResourceShareCreatedFromPolicy() {
    return this.to('PromoteResourceShareCreatedFromPolicy');
  }

  /**
   * Grants permission to reject the specified resource share invitation
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifShareOwnerAccountId()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_RejectResourceShareInvitation.html
   */
  public toRejectResourceShareInvitation() {
    return this.to('RejectResourceShareInvitation');
  }

  /**
   * Grants permission to tag the specified resource share
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag the specified resource share
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update attributes of the resource share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceShareName()
   * - .ifAllowsExternalPrincipals()
   * - .ifRequestedAllowsExternalPrincipals()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_UpdateResourceShare.html
   */
  public toUpdateResourceShare() {
    return this.to('UpdateResourceShare');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptResourceShareInvitation",
      "AssociateResourceShare",
      "AssociateResourceSharePermission",
      "CreateResourceShare",
      "DeleteResourceShare",
      "DisassociateResourceShare",
      "DisassociateResourceSharePermission",
      "EnableSharingWithAwsOrganization",
      "PromoteResourceShareCreatedFromPolicy",
      "RejectResourceShareInvitation",
      "UpdateResourceShare"
    ],
    "Read": [
      "GetPermission",
      "GetResourcePolicies",
      "GetResourceShareAssociations",
      "GetResourceShareInvitations",
      "GetResourceShares",
      "ListPendingInvitationResources"
    ],
    "List": [
      "ListPermissions",
      "ListPrincipals",
      "ListResourceSharePermissions",
      "ListResourceTypes",
      "ListResources"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type resource-share to the statement
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ResourceShare.html
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAllowsExternalPrincipals()
   * - .ifResourceShareName()
   */
  public onResourceShare(resourcePath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ram:${Region}:${Account}:resource-share/${ResourcePath}';
    arn = arn.replace('${ResourcePath}', resourcePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type resource-share-invitation to the statement
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ResourceShareInvitation.html
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifShareOwnerAccountId()
   */
  public onResourceShareInvitation(resourcePath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ram:${Region}:${Account}:resource-share-invitation/${ResourcePath}';
    arn = arn.replace('${ResourcePath}', resourcePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type permission to the statement
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ResourceSharePermissionDetail.html
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifPermissionArn()
   */
  public onPermission(resourcePath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:ram::${Account}:permission/${ResourcePath}';
    arn = arn.replace('${ResourcePath}', resourcePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access based on resource shares that allow or deny sharing with external principals. For example, specify true if the action can only be performed on resource shares that allow sharing with external principals. External principals are AWS accounts that are outside of its AWS organization
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toAssociateResourceShare()
   * - .toDeleteResourceShare()
   * - .toDisassociateResourceShare()
   * - .toListResourceSharePermissions()
   * - .toUpdateResourceShare()
   *
   * Applies to resource types:
   * - resource-share
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifAllowsExternalPrincipals(value?: boolean) {
    return this.if(`AllowsExternalPrincipals`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access based on the specified Permission ARN
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toGetPermission()
   *
   * Applies to resource types:
   * - permission
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifPermissionArn(value: string | string[], operator?: Operator | string) {
    return this.if(`PermissionArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access based on the format of the specified principal
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toAssociateResourceShare()
   * - .toCreateResourceShare()
   * - .toDisassociateResourceShare()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPrincipal(value: string | string[], operator?: Operator | string) {
    return this.if(`Principal`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the specified value for 'allowExternalPrincipals'. External principals are AWS accounts that are outside of its AWS Organization
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toCreateResourceShare()
   * - .toUpdateResourceShare()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifRequestedAllowsExternalPrincipals(value?: boolean) {
    return this.if(`RequestedAllowsExternalPrincipals`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access based on the specified resource type
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toAssociateResourceShare()
   * - .toCreateResourceShare()
   * - .toDisassociateResourceShare()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestedResourceType(value: string | string[], operator?: Operator | string) {
    return this.if(`RequestedResourceType`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on a resource with the specified ARN
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toAssociateResourceShare()
   * - .toCreateResourceShare()
   * - .toDisassociateResourceShare()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifResourceArn(value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access based on a resource share with the specified name
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toAssociateResourceShare()
   * - .toDeleteResourceShare()
   * - .toDisassociateResourceShare()
   * - .toListResourceSharePermissions()
   * - .toUpdateResourceShare()
   *
   * Applies to resource types:
   * - resource-share
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceShareName(value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceShareName`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on resource shares owned by a specific account. For example, you can use this condition key to specify which resource share invitations can be accepted or rejected based on the resource share owner’s account ID
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toAcceptResourceShareInvitation()
   * - .toRejectResourceShareInvitation()
   *
   * Applies to resource types:
   * - resource-share-invitation
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifShareOwnerAccountId(value: string | string[], operator?: Operator | string) {
    return this.if(`ShareOwnerAccountId`, value, operator || 'StringLike');
  }
}
