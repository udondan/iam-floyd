import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [organizations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Organizations extends PolicyStatement {
  public servicePrefix = 'organizations';

  /**
   * Statement provider for service [organizations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsorganizations.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to send a response to the originator of a handshake agreeing to the action proposed by the handshake request
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_AcceptHandshake.html
   */
  public toAcceptHandshake() {
    return this.to('AcceptHandshake');
  }

  /**
   * Grants permission to attach a policy to a root, an organizational unit, or an individual account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_AttachPolicy.html
   */
  public toAttachPolicy() {
    return this.to('AttachPolicy');
  }

  /**
   * Grants permission to cancel a handshake
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_CancelHandshake.html
   */
  public toCancelHandshake() {
    return this.to('CancelHandshake');
  }

  /**
   * Grants permission to close an AWS account that is now a part of an Organizations, either created within the organization, or invited to join the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_CloseAccount.html
   */
  public toCloseAccount() {
    return this.to('CloseAccount');
  }

  /**
   * Grants permission to create an AWS account that is automatically a member of the organization with the credentials that made the request
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateAccount.html
   */
  public toCreateAccount() {
    return this.to('CreateAccount');
  }

  /**
   * Grants permission to create an AWS GovCloud (US) account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateGovCloudAccount.html
   */
  public toCreateGovCloudAccount() {
    return this.to('CreateGovCloudAccount');
  }

  /**
   * Grants permission to create an organization. The account with the credentials that calls the CreateOrganization operation automatically becomes the management account of the new organization
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateOrganization.html
   */
  public toCreateOrganization() {
    return this.to('CreateOrganization');
  }

  /**
   * Grants permission to create an organizational unit (OU) within a root or parent OU
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateOrganizationalUnit.html
   */
  public toCreateOrganizationalUnit() {
    return this.to('CreateOrganizationalUnit');
  }

  /**
   * Grants permission to create a policy that you can attach to a root, an organizational unit (OU), or an individual AWS account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreatePolicy.html
   */
  public toCreatePolicy() {
    return this.to('CreatePolicy');
  }

  /**
   * Grants permission to decline a handshake request. This sets the handshake state to DECLINED and effectively deactivates the request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeclineHandshake.html
   */
  public toDeclineHandshake() {
    return this.to('DeclineHandshake');
  }

  /**
   * Grants permission to delete the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeleteOrganization.html
   */
  public toDeleteOrganization() {
    return this.to('DeleteOrganization');
  }

  /**
   * Grants permission to delete an organizational unit from a root or another OU
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeleteOrganizationalUnit.html
   */
  public toDeleteOrganizationalUnit() {
    return this.to('DeleteOrganizationalUnit');
  }

  /**
   * Grants permission to delete a policy from your organization
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeletePolicy.html
   */
  public toDeletePolicy() {
    return this.to('DeletePolicy');
  }

  /**
   * Grants permission to delete a resource policy from your organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to deregister the specified member AWS account as a delegated administrator for the AWS service that is specified by ServicePrincipal
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServicePrincipal()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeregisterDelegatedAdministrator.html
   */
  public toDeregisterDelegatedAdministrator() {
    return this.to('DeregisterDelegatedAdministrator');
  }

  /**
   * Grants permission to retrieve Organizations-related details about the specified account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeAccount.html
   */
  public toDescribeAccount() {
    return this.to('DescribeAccount');
  }

  /**
   * Grants permission to retrieve the current status of an asynchronous request to create an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeCreateAccountStatus.html
   */
  public toDescribeCreateAccountStatus() {
    return this.to('DescribeCreateAccountStatus');
  }

  /**
   * Grants permission to retrieve the effective policy for an account
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeEffectivePolicy.html
   */
  public toDescribeEffectivePolicy() {
    return this.to('DescribeEffectivePolicy');
  }

  /**
   * Grants permission to retrieve details about a previously requested handshake
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeHandshake.html
   */
  public toDescribeHandshake() {
    return this.to('DescribeHandshake');
  }

  /**
   * Grants permission to retrieve details about the organization that the calling credentials belong to
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeOrganization.html
   */
  public toDescribeOrganization() {
    return this.to('DescribeOrganization');
  }

  /**
   * Grants permission to retrieve details about an organizational unit (OU)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeOrganizationalUnit.html
   */
  public toDescribeOrganizationalUnit() {
    return this.to('DescribeOrganizationalUnit');
  }

  /**
   * Grants permission to retrieve details about a policy
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribePolicy.html
   */
  public toDescribePolicy() {
    return this.to('DescribePolicy');
  }

  /**
   * Grants permission to retrieve information about a resource policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeResourcePolicy.html
   */
  public toDescribeResourcePolicy() {
    return this.to('DescribeResourcePolicy');
  }

  /**
   * Grants permission to detach a policy from a target root, organizational unit, or account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DetachPolicy.html
   */
  public toDetachPolicy() {
    return this.to('DetachPolicy');
  }

  /**
   * Grants permission to disable integration of an AWS service (the service that is specified by ServicePrincipal) with AWS Organizations
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServicePrincipal()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisableAWSServiceAccess.html
   */
  public toDisableAWSServiceAccess() {
    return this.to('DisableAWSServiceAccess');
  }

  /**
   * Grants permission to disable an organization policy type in a root
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisablePolicyType.html
   */
  public toDisablePolicyType() {
    return this.to('DisablePolicyType');
  }

  /**
   * Grants permission to enable integration of an AWS service (the service that is specified by ServicePrincipal) with AWS Organizations
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServicePrincipal()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html
   */
  public toEnableAWSServiceAccess() {
    return this.to('EnableAWSServiceAccess');
  }

  /**
   * Grants permission to start the process to enable all features in an organization, upgrading it from supporting only Consolidated Billing features
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAllFeatures.html
   */
  public toEnableAllFeatures() {
    return this.to('EnableAllFeatures');
  }

  /**
   * Grants permission to enable a policy type in a root
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnablePolicyType.html
   */
  public toEnablePolicyType() {
    return this.to('EnablePolicyType');
  }

  /**
   * Grants permission to send an invitation to another AWS account, asking it to join your organization as a member account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_InviteAccountToOrganization.html
   */
  public toInviteAccountToOrganization() {
    return this.to('InviteAccountToOrganization');
  }

  /**
   * Grants permission to remove a member account from its parent organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_LeaveOrganization.html
   */
  public toLeaveOrganization() {
    return this.to('LeaveOrganization');
  }

  /**
   * Grants permission to retrieve the list of the AWS services for which you enabled integration with your organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAWSServiceAccessForOrganization.html
   */
  public toListAWSServiceAccessForOrganization() {
    return this.to('ListAWSServiceAccessForOrganization');
  }

  /**
   * Grants permission to list all of the accounts in the organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccounts.html
   */
  public toListAccounts() {
    return this.to('ListAccounts');
  }

  /**
   * Grants permission to list the accounts in an organization that are contained by a root or organizational unit (OU)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccountsForParent.html
   */
  public toListAccountsForParent() {
    return this.to('ListAccountsForParent');
  }

  /**
   * Grants permission to list accounts that have invalid effective policies for a specified policy type
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccountsWithInvalidEffectivePolicy.html
   */
  public toListAccountsWithInvalidEffectivePolicy() {
    return this.to('ListAccountsWithInvalidEffectivePolicy');
  }

  /**
   * Grants permission to list all of the OUs or accounts that are contained in a parent OU or root
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListChildren.html
   */
  public toListChildren() {
    return this.to('ListChildren');
  }

  /**
   * Grants permission to list the asynchronous account creation requests that are currently being tracked for the organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListCreateAccountStatus.html
   */
  public toListCreateAccountStatus() {
    return this.to('ListCreateAccountStatus');
  }

  /**
   * Grants permission to list the AWS accounts that are designated as delegated administrators in this organization
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifServicePrincipal()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListDelegatedAdministrators.html
   */
  public toListDelegatedAdministrators() {
    return this.to('ListDelegatedAdministrators');
  }

  /**
   * Grants permission to list the AWS services for which the specified account is a delegated administrator in this organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListDelegatedServicesForAccount.html
   */
  public toListDelegatedServicesForAccount() {
    return this.to('ListDelegatedServicesForAccount');
  }

  /**
   * Grants permission to list validation errors found in the effective policy for a specific account and policy type
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListEffectivePolicyValidationErrors.html
   */
  public toListEffectivePolicyValidationErrors() {
    return this.to('ListEffectivePolicyValidationErrors');
  }

  /**
   * Grants permission to list all of the handshakes that are associated with an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListHandshakesForAccount.html
   */
  public toListHandshakesForAccount() {
    return this.to('ListHandshakesForAccount');
  }

  /**
   * Grants permission to list the handshakes that are associated with the organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListHandshakesForOrganization.html
   */
  public toListHandshakesForOrganization() {
    return this.to('ListHandshakesForOrganization');
  }

  /**
   * Grants permission to list all of the organizational units (OUs) in a parent organizational unit or root
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListOrganizationalUnitsForParent.html
   */
  public toListOrganizationalUnitsForParent() {
    return this.to('ListOrganizationalUnitsForParent');
  }

  /**
   * Grants permission to list the root or organizational units (OUs) that serve as the immediate parent of a child OU or account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListParents.html
   */
  public toListParents() {
    return this.to('ListParents');
  }

  /**
   * Grants permission to list all of the policies in an organization
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListPolicies.html
   */
  public toListPolicies() {
    return this.to('ListPolicies');
  }

  /**
   * Grants permission to list all of the policies that are directly attached to a root, organizational unit (OU), or account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListPoliciesForTarget.html
   */
  public toListPoliciesForTarget() {
    return this.to('ListPoliciesForTarget');
  }

  /**
   * Grants permission to list all of the roots that are defined in the organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListRoots.html
   */
  public toListRoots() {
    return this.to('ListRoots');
  }

  /**
   * Grants permission to list all tags for the specified resource
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all the roots, OUs, and accounts to which a policy is attached
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListTargetsForPolicy.html
   */
  public toListTargetsForPolicy() {
    return this.to('ListTargetsForPolicy');
  }

  /**
   * Grants permission to move an account from its current root or OU to another parent root or OU
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_MoveAccount.html
   */
  public toMoveAccount() {
    return this.to('MoveAccount');
  }

  /**
   * Grants permission to create or update a resource policy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to register the specified member account to administer the Organizations features of the AWS service that is specified by ServicePrincipal
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServicePrincipal()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_RegisterDelegatedAdministrator.html
   */
  public toRegisterDelegatedAdministrator() {
    return this.to('RegisterDelegatedAdministrator');
  }

  /**
   * Grants permission to remove the specified account from the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_RemoveAccountFromOrganization.html
   */
  public toRemoveAccountFromOrganization() {
    return this.to('RemoveAccountFromOrganization');
  }

  /**
   * Grants permission to add one or more tags to the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove one or more tags from the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to rename an organizational unit (OU)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_UpdateOrganizationalUnit.html
   */
  public toUpdateOrganizationalUnit() {
    return this.to('UpdateOrganizationalUnit');
  }

  /**
   * Grants permission to update an existing policy with a new name, description, or content
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_UpdatePolicy.html
   */
  public toUpdatePolicy() {
    return this.to('UpdatePolicy');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptHandshake',
      'AttachPolicy',
      'CancelHandshake',
      'CloseAccount',
      'CreateAccount',
      'CreateGovCloudAccount',
      'CreateOrganization',
      'CreateOrganizationalUnit',
      'CreatePolicy',
      'DeclineHandshake',
      'DeleteOrganization',
      'DeleteOrganizationalUnit',
      'DeletePolicy',
      'DeleteResourcePolicy',
      'DeregisterDelegatedAdministrator',
      'DetachPolicy',
      'DisableAWSServiceAccess',
      'DisablePolicyType',
      'EnableAWSServiceAccess',
      'EnableAllFeatures',
      'EnablePolicyType',
      'InviteAccountToOrganization',
      'LeaveOrganization',
      'MoveAccount',
      'PutResourcePolicy',
      'RegisterDelegatedAdministrator',
      'RemoveAccountFromOrganization',
      'UpdateOrganizationalUnit',
      'UpdatePolicy'
    ],
    Read: [
      'DescribeAccount',
      'DescribeCreateAccountStatus',
      'DescribeEffectivePolicy',
      'DescribeHandshake',
      'DescribeOrganization',
      'DescribeOrganizationalUnit',
      'DescribePolicy',
      'DescribeResourcePolicy'
    ],
    List: [
      'ListAWSServiceAccessForOrganization',
      'ListAccounts',
      'ListAccountsForParent',
      'ListAccountsWithInvalidEffectivePolicy',
      'ListChildren',
      'ListCreateAccountStatus',
      'ListDelegatedAdministrators',
      'ListDelegatedServicesForAccount',
      'ListEffectivePolicyValidationErrors',
      'ListHandshakesForAccount',
      'ListHandshakesForOrganization',
      'ListOrganizationalUnitsForParent',
      'ListParents',
      'ListPolicies',
      'ListPoliciesForTarget',
      'ListRoots',
      'ListTagsForResource',
      'ListTargetsForPolicy'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type account to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html
   *
   * @param organizationId - Identifier for the organizationId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAccount(organizationId: string, accountId?: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:organizations::${ account ?? this.defaultAccount }:account/o-${ organizationId }/${ accountId ?? this.defaultAccount }`);
  }

  /**
   * Adds a resource of type handshake to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html
   *
   * @param organizationId - Identifier for the organizationId.
   * @param handshakeType - Identifier for the handshakeType.
   * @param handshakeId - Identifier for the handshakeId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onHandshake(organizationId: string, handshakeType: string, handshakeId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:organizations::${ account ?? this.defaultAccount }:handshake/o-${ organizationId }/${ handshakeType }/h-${ handshakeId }`);
  }

  /**
   * Adds a resource of type organization to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html
   *
   * @param organizationId - Identifier for the organizationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onOrganization(organizationId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:organizations::${ account ?? this.defaultAccount }:organization/o-${ organizationId }`);
  }

  /**
   * Adds a resource of type organizationalunit to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html
   *
   * @param organizationId - Identifier for the organizationId.
   * @param organizationalUnitId - Identifier for the organizationalUnitId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOrganizationalunit(organizationId: string, organizationalUnitId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:organizations::${ account ?? this.defaultAccount }:ou/o-${ organizationId }/ou-${ organizationalUnitId }`);
  }

  /**
   * Adds a resource of type policy to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html
   *
   * @param organizationId - Identifier for the organizationId.
   * @param policyType - Identifier for the policyType.
   * @param policyId - Identifier for the policyId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPolicy(organizationId: string, policyType: string, policyId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:organizations::${ account ?? this.defaultAccount }:policy/o-${ organizationId }/${ policyType }/p-${ policyId }`);
  }

  /**
   * Adds a resource of type resourcepolicy to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html
   *
   * @param organizationId - Identifier for the organizationId.
   * @param resourcePolicyId - Identifier for the resourcePolicyId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResourcepolicy(organizationId: string, resourcePolicyId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:organizations::${ account ?? this.defaultAccount }:resourcepolicy/o-${ organizationId }/rp-${ resourcePolicyId }`);
  }

  /**
   * Adds a resource of type awspolicy to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html
   *
   * @param policyType - Identifier for the policyType.
   * @param policyId - Identifier for the policyId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAwspolicy(policyType: string, policyId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:organizations::aws:policy/${ policyType }/p-${ policyId }`);
  }

  /**
   * Adds a resource of type root to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html
   *
   * @param organizationId - Identifier for the organizationId.
   * @param rootId - Identifier for the rootId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRoot(organizationId: string, rootId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:organizations::${ account ?? this.defaultAccount }:root/o-${ organizationId }/r-${ rootId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAccount()
   * - .toCreateGovCloudAccount()
   * - .toCreateOrganizationalUnit()
   * - .toCreatePolicy()
   * - .toInviteAccountToOrganization()
   * - .toPutResourcePolicy()
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
   * - .toCreateAccount()
   * - .toCreateGovCloudAccount()
   * - .toCreatePolicy()
   *
   * Applies to resource types:
   * - account
   * - organizationalunit
   * - policy
   * - resourcepolicy
   * - root
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAccount()
   * - .toCreateGovCloudAccount()
   * - .toCreateOrganizationalUnit()
   * - .toCreatePolicy()
   * - .toInviteAccountToOrganization()
   * - .toPutResourcePolicy()
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
   * Filters access by the specified policy type names
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys
   *
   * Applies to actions:
   * - .toAttachPolicy()
   * - .toCreatePolicy()
   * - .toDeletePolicy()
   * - .toDescribeEffectivePolicy()
   * - .toDescribePolicy()
   * - .toDetachPolicy()
   * - .toDisablePolicyType()
   * - .toEnablePolicyType()
   * - .toListAccountsWithInvalidEffectivePolicy()
   * - .toListEffectivePolicyValidationErrors()
   * - .toListPolicies()
   * - .toListPoliciesForTarget()
   * - .toListTagsForResource()
   * - .toListTargetsForPolicy()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdatePolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPolicyType(value: string | string[], operator?: Operator | string) {
    return this.if(`PolicyType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the specified service principal names
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_permissions_overview.html#orgs_permissions_conditionkeys
   *
   * Applies to actions:
   * - .toDeregisterDelegatedAdministrator()
   * - .toDisableAWSServiceAccess()
   * - .toEnableAWSServiceAccess()
   * - .toListDelegatedAdministrators()
   * - .toRegisterDelegatedAdministrator()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifServicePrincipal(value: string | string[], operator?: Operator | string) {
    return this.if(`ServicePrincipal`, value, operator ?? 'StringLike');
  }
}
