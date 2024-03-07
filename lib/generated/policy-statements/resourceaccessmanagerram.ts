import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [ram](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourceaccessmanagerram.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ram extends PolicyStatement {
  public servicePrefix = 'ram';

  /**
   * Statement provider for service [ram](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourceaccessmanagerram.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept the specified resource share invitation
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifShareOwnerAccountId()
   * - .ifResourceShareName()
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
   * - .ifResourceTag()
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
   * Grants permission to create a Permission that can be associated to a Resource Share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPermissionArn()
   * - .ifPermissionResourceType()
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ram:TagResource
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_CreatePermission.html
   */
  public toCreatePermission() {
    return this.to('CreatePermission');
  }

  /**
   * Grants permission to create a new version of a Permission that can be associated to a Resource Share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPermissionArn()
   * - .ifPermissionResourceType()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_CreatePermissionVersion.html
   */
  public toCreatePermissionVersion() {
    return this.to('CreatePermissionVersion');
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
   * Grants permission to delete a specified Permission
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifPermissionArn()
   * - .ifPermissionResourceType()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_DeletePermission.html
   */
  public toDeletePermission() {
    return this.to('DeletePermission');
  }

  /**
   * Grants permission to delete a specified version of a permission
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPermissionArn()
   * - .ifPermissionResourceType()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_DeletePermissionVersion.html
   */
  public toDeletePermissionVersion() {
    return this.to('DeletePermissionVersion');
  }

  /**
   * Grants permission to delete resource share
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
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
   * - .ifResourceTag()
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
   * Access Level: Permissions management
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - organizations:DescribeOrganization
   * - organizations:EnableAWSServiceAccess
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
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
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
   * Possible conditions:
   * - .ifResourceShareName()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPendingInvitationResources.html
   */
  public toListPendingInvitationResources() {
    return this.to('ListPendingInvitationResources');
  }

  /**
   * Grants permission to list information about the permission and any associations
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPermissionArn()
   * - .ifPermissionResourceType()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPermissionAssociations.html
   */
  public toListPermissionAssociations() {
    return this.to('ListPermissionAssociations');
  }

  /**
   * Grants permission to list the versions of an AWS RAM permission
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListPermissionVersions.html
   */
  public toListPermissionVersions() {
    return this.to('ListPermissionVersions');
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
   * Grants permission to retrieve the status of the asynchronous permission replacement
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ListReplacePermissionAssociationsWork.html
   */
  public toListReplacePermissionAssociationsWork() {
    return this.to('ListReplacePermissionAssociationsWork');
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
   * Grants permission to create a separate, fully manageable customer managed permission
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPermissionArn()
   * - .ifPermissionResourceType()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_PromotePermissionCreatedFromPolicy.html
   */
  public toPromotePermissionCreatedFromPolicy() {
    return this.to('PromotePermissionCreatedFromPolicy');
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
   * - .ifResourceShareName()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_RejectResourceShareInvitation.html
   */
  public toRejectResourceShareInvitation() {
    return this.to('RejectResourceShareInvitation');
  }

  /**
   * Grants permission to update all resource shares to a new permission
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPermissionArn()
   * - .ifPermissionResourceType()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ReplacePermissionAssociations.html
   */
  public toReplacePermissionAssociations() {
    return this.to('ReplacePermissionAssociations');
  }

  /**
   * Grants permission to specify a version number as the default version for the respective customer managed permission
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPermissionArn()
   * - .ifPermissionResourceType()
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_SetDefaultPermissionVersion.html
   */
  public toSetDefaultPermissionVersion() {
    return this.to('SetDefaultPermissionVersion');
  }

  /**
   * Grants permission to tag the specified resource share or permission
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
   * Grants permission to untag the specified resource share or permission
   *
   * Access Level: Tagging
   *
   * Possible conditions:
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
   * - .ifResourceTag()
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
    Write: [
      'AcceptResourceShareInvitation',
      'AssociateResourceShare',
      'AssociateResourceSharePermission',
      'CreatePermission',
      'CreatePermissionVersion',
      'CreateResourceShare',
      'DeletePermission',
      'DeletePermissionVersion',
      'DeleteResourceShare',
      'DisassociateResourceShare',
      'DisassociateResourceSharePermission',
      'PromotePermissionCreatedFromPolicy',
      'PromoteResourceShareCreatedFromPolicy',
      'RejectResourceShareInvitation',
      'ReplacePermissionAssociations',
      'SetDefaultPermissionVersion',
      'UpdateResourceShare'
    ],
    'Permissions management': [
      'EnableSharingWithAwsOrganization'
    ],
    Read: [
      'GetPermission',
      'GetResourcePolicies',
      'GetResourceShareAssociations',
      'GetResourceShareInvitations',
      'GetResourceShares',
      'ListPendingInvitationResources'
    ],
    List: [
      'ListPermissionAssociations',
      'ListPermissionVersions',
      'ListPermissions',
      'ListPrincipals',
      'ListReplacePermissionAssociationsWork',
      'ListResourceSharePermissions',
      'ListResourceTypes',
      'ListResources'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type resource-share to the statement
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ResourceShare.html
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAllowsExternalPrincipals()
   * - .ifResourceShareName()
   */
  public onResourceShare(resourcePath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ram:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:resource-share/${ resourcePath }`);
  }

  /**
   * Adds a resource of type resource-share-invitation to the statement
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ResourceShareInvitation.html
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifShareOwnerAccountId()
   */
  public onResourceShareInvitation(resourcePath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ram:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:resource-share-invitation/${ resourcePath }`);
  }

  /**
   * Adds a resource of type permission to the statement
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ResourceSharePermissionDetail.html
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifPermissionArn()
   * - .ifPermissionResourceType()
   */
  public onPermission(resourcePath: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ram::${ account ?? this.defaultAccount }:permission/${ resourcePath }`);
  }

  /**
   * Adds a resource of type customer-managed-permission to the statement
   *
   * https://docs.aws.amazon.com/ram/latest/APIReference/API_ResourceSharePermissionDetail.html
   *
   * @param resourcePath - Identifier for the resourcePath.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifPermissionArn()
   * - .ifPermissionResourceType()
   */
  public onCustomerManagedPermission(resourcePath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ram:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:permission/${ resourcePath }`);
  }

  /**
   * Filters access by the tags that are passed in the request when creating or tagging a resource share. If users don't pass these specific tags, or if they don't specify tags at all, the request fails
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreatePermission()
   * - .toCreateResourceShare()
   * - .toGetResourceShares()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toAssociateResourceShare()
   * - .toCreatePermission()
   * - .toDeletePermission()
   * - .toDeleteResourceShare()
   * - .toDisassociateResourceShare()
   * - .toListResourceSharePermissions()
   * - .toUpdateResourceShare()
   *
   * Applies to resource types:
   * - resource-share
   * - customer-managed-permission
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed when creating or tagging a resource share
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreatePermission()
   * - .toCreateResourceShare()
   * - .toGetResourceShares()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by resource shares that allow or deny sharing with external principals. For example, specify true if the action can only be performed on resource shares that allow sharing with external principals. External principals are AWS accounts that are outside of its AWS organization
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
   * Filters access by the specified Permission ARN
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toCreatePermission()
   * - .toCreatePermissionVersion()
   * - .toDeletePermission()
   * - .toDeletePermissionVersion()
   * - .toGetPermission()
   * - .toListPermissionAssociations()
   * - .toPromotePermissionCreatedFromPolicy()
   * - .toReplacePermissionAssociations()
   * - .toSetDefaultPermissionVersion()
   *
   * Applies to resource types:
   * - permission
   * - customer-managed-permission
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifPermissionArn(value: string | string[], operator?: Operator | string) {
    return this.if(`PermissionArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by permissions of specified resource type
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toCreatePermission()
   * - .toCreatePermissionVersion()
   * - .toDeletePermission()
   * - .toDeletePermissionVersion()
   * - .toListPermissionAssociations()
   * - .toPromotePermissionCreatedFromPolicy()
   * - .toReplacePermissionAssociations()
   * - .toSetDefaultPermissionVersion()
   *
   * Applies to resource types:
   * - permission
   * - customer-managed-permission
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPermissionResourceType(value: string | string[], operator?: Operator | string) {
    return this.if(`PermissionResourceType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by format of the specified principal
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
    return this.if(`Principal`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the specified value for 'allowExternalPrincipals'. External principals are AWS accounts that are outside of its AWS Organization
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
   * Filters access by the specified resource type
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
    return this.if(`RequestedResourceType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the specified ARN
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
    return this.if(`ResourceArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by a resource share with the specified name
   *
   * https://docs.aws.amazon.com/ram/latest/userguide/iam-policies.html#iam-policies-condition
   *
   * Applies to actions:
   * - .toAcceptResourceShareInvitation()
   * - .toAssociateResourceShare()
   * - .toDeleteResourceShare()
   * - .toDisassociateResourceShare()
   * - .toListPendingInvitationResources()
   * - .toListResourceSharePermissions()
   * - .toRejectResourceShareInvitation()
   * - .toUpdateResourceShare()
   *
   * Applies to resource types:
   * - resource-share
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceShareName(value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceShareName`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toAssociateResourceShare()
   * - .toDeleteResourceShare()
   * - .toDisassociateResourceShare()
   * - .toUpdateResourceShare()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by resource shares owned by a specific account. For example, you can use this condition key to specify which resource share invitations can be accepted or rejected based on the resource share owner’s account ID
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
    return this.if(`ShareOwnerAccountId`, value, operator ?? 'StringLike');
  }
}
