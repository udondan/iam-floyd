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
   * Accept the specified resource share invitation
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
   * Associates resource(s) and/or principal(s) to a resource share
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
   * Associate a Permission with a Resource Share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAllowsExternalPrincipals()
   * - .ifResourceShareName()
   * - .ifPermissionArn()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_AssociateResourceSharePermission.html
   */
  public toAssociateResourceSharePermission() {
    return this.to('AssociateResourceSharePermission');
  }

  /**
   * Create resource share with provided resource(s) and/or principal(s)
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
   * Delete resource share
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
   * Disassociates resource(s) and/or principal(s) from a resource share
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
   * Disassociate a Permission from a Resource Share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAllowsExternalPrincipals()
   * - .ifResourceShareName()
   * - .ifPermissionArn()
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
   * Gets the contents of an AWS RAM permission
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
   * Gets the policies for the specified resources that you own and have shared
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourcePolicies.html
   */
  public toGetResourcePolicies() {
    return this.to('GetResourcePolicies');
  }

  /**
   * Get a set of resource share associations from a provided list or with a specified status of the specified type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareAssociations.html
   */
  public toGetResourceShareAssociations() {
    return this.to('GetResourceShareAssociations');
  }

  /**
   * Get resource share invitations by the specified invitation arn or those for the resource share
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareInvitations.html
   */
  public toGetResourceShareInvitations() {
    return this.to('GetResourceShareInvitations');
  }

  /**
   * Get a set of resource shares from a provided list or with a specified status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShares.html
   */
  public toGetResourceShares() {
    return this.to('GetResourceShares');
  }

  /**
   * Lists the resources in a resource share that is shared with you but that the invitation is still pending for
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPendingInvitationResources.html
   */
  public toListPendingInvitationResources() {
    return this.to('ListPendingInvitationResources');
  }

  /**
   * Lists the AWS RAM permissions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPermissions.html
   */
  public toListPermissions() {
    return this.to('ListPermissions');
  }

  /**
   * Lists the principals that you have shared resources with or that have shared resources with you
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPrincipals.html
   */
  public toListPrincipals() {
    return this.to('ListPrincipals');
  }

  /**
   * List the Permissions associated with a Resource Share
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
   * Lists the shareable resource types supported by AWS RAM
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListResourceTypes.html
   */
  public toListResourceTypes() {
    return this.to('ListResourceTypes');
  }

  /**
   * Lists the resources that you added to a resource shares or the resources that are shared with you
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListResources.html
   */
  public toListResources() {
    return this.to('ListResources');
  }

  /**
   * Use this API action to promote the resource share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html
   */
  public toPromoteResourceShareCreatedFromPolicy() {
    return this.to('PromoteResourceShareCreatedFromPolicy');
  }

  /**
   * Reject the specified resource share invitation
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
   * Tag the specified resources share
   *
   * Access Level: Write
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
   * Untag the specified resource share
   *
   * Access Level: Write
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
   * Update attributes of the resource share
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
      "TagResource",
      "UntagResource",
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
   * Indicates that the action can only be performed on resource shares that allow or deny sharing with external principals. For example, specify true if the action can only be performed on resource shares that allow sharing with external principals. External principals are AWS accounts that are outside of its AWS organization
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toAssociateResourceShare()
   * - .toAssociateResourceSharePermission()
   * - .toDeleteResourceShare()
   * - .toDisassociateResourceShare()
   * - .toDisassociateResourceSharePermission()
   * - .toListResourceSharePermissions()
   * - .toPromoteResourceShareCreatedFromPolicy()
   * - .toUpdateResourceShare()
   *
   * Applies to resource types:
   * - resource-share
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifAllowsExternalPrincipals(value?: boolean) {
    return this.if(`ram:AllowsExternalPrincipals`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Indicates that the action can only be performed on a resource using the specified Permission ARN.
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toAssociateResourceSharePermission()
   * - .toDisassociateResourceSharePermission()
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
   * Principals with the specified format can be associated to or disassociated from a resource share
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
   * The request must have the specified value for 'allowExternalPrincipals'. External principals are AWS accounts that are outside of its AWS Organization
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
    return this.if(`ram:RequestedAllowsExternalPrincipals`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Indicates that the action can only be performed on the specified resource type
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
   * Indicates that the action can only be performed on a resource with the specified ARN.
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
   * Indicates that the action can only be performed on a resource share with the specified name.
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toAssociateResourceShare()
   * - .toAssociateResourceSharePermission()
   * - .toDeleteResourceShare()
   * - .toDisassociateResourceShare()
   * - .toDisassociateResourceSharePermission()
   * - .toListResourceSharePermissions()
   * - .toPromoteResourceShareCreatedFromPolicy()
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
   * Indicates that the action can only be performed on resource shares owned by a specific account. For example, you can use this condition key to specify which resource share invitations can be accepted or rejected based on the resource share owner’s account ID.
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toAcceptResourceShareInvitation()
   * - .toRejectResourceShareInvitation()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifShareOwnerAccountId(value: string | string[], operator?: Operator | string) {
    return this.if(`ShareOwnerAccountId`, value, operator || 'StringLike');
  }
}
