import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [organizations](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsorganizations.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Organizations extends PolicyStatement {
  public servicePrefix = 'organizations';

  /**
   * Statement provider for service [organizations](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsorganizations.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to send a response to the originator of a handshake agreeing to the action proposed by the handshake request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_AcceptHandshake.html
   */
  public toAcceptHandshake() {
    this.to('organizations:AcceptHandshake');
    return this;
  }

  /**
   * Grants permission to attach a policy to a root, an organizational unit, or an individual account.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_AttachPolicy.html
   */
  public toAttachPolicy() {
    this.to('organizations:AttachPolicy');
    return this;
  }

  /**
   * Grants permission to cancel a handshake.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_CancelHandshake.html
   */
  public toCancelHandshake() {
    this.to('organizations:CancelHandshake');
    return this;
  }

  /**
   * Grants permission to create an AWS account that is automatically a member of the organization with the credentials that made the request.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateAccount.html
   */
  public toCreateAccount() {
    this.to('organizations:CreateAccount');
    return this;
  }

  /**
   * Grants permission to create an AWS GovCloud (US) account.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateGovCloudAccount.html
   */
  public toCreateGovCloudAccount() {
    this.to('organizations:CreateGovCloudAccount');
    return this;
  }

  /**
   * Grants permission to create an organization. The account with the credentials that calls the CreateOrganization operation automatically becomes the master account of the new organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateOrganization.html
   */
  public toCreateOrganization() {
    this.to('organizations:CreateOrganization');
    return this;
  }

  /**
   * Grants permission to create an organizational unit (OU) within a root or parent OU.
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
    this.to('organizations:CreateOrganizationalUnit');
    return this;
  }

  /**
   * Grants permission to create a policy that you can attach to a root, an organizational unit (OU), or an individual AWS account.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreatePolicy.html
   */
  public toCreatePolicy() {
    this.to('organizations:CreatePolicy');
    return this;
  }

  /**
   * Grants permission to decline a handshake request. This sets the handshake state to DECLINED and effectively deactivates the request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeclineHandshake.html
   */
  public toDeclineHandshake() {
    this.to('organizations:DeclineHandshake');
    return this;
  }

  /**
   * Grants permission to delete the organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeleteOrganization.html
   */
  public toDeleteOrganization() {
    this.to('organizations:DeleteOrganization');
    return this;
  }

  /**
   * Grants permission to delete an organizational unit from a root or another OU.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeleteOrganizationalUnit.html
   */
  public toDeleteOrganizationalUnit() {
    this.to('organizations:DeleteOrganizationalUnit');
    return this;
  }

  /**
   * Grants permission to delete a policy from your organization.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeletePolicy.html
   */
  public toDeletePolicy() {
    this.to('organizations:DeletePolicy');
    return this;
  }

  /**
   * Grants permission to deregister the specified member AWS account as a delegated administrator for the AWS service that is specified by ServicePrincipal.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServicePrincipal()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DeregisterDelegatedAdministrator.html
   */
  public toDeregisterDelegatedAdministrator() {
    this.to('organizations:DeregisterDelegatedAdministrator');
    return this;
  }

  /**
   * Grants permission to retrieve Organizations-related details about the specified account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeAccount.html
   */
  public toDescribeAccount() {
    this.to('organizations:DescribeAccount');
    return this;
  }

  /**
   * Grants permission to retrieve the current status of an asynchronous request to create an account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeCreateAccountStatus.html
   */
  public toDescribeCreateAccountStatus() {
    this.to('organizations:DescribeCreateAccountStatus');
    return this;
  }

  /**
   * Grants permission to retrieve the effective policy for an account.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeEffectivePolicy.html
   */
  public toDescribeEffectivePolicy() {
    this.to('organizations:DescribeEffectivePolicy');
    return this;
  }

  /**
   * Grants permission to retrieve details about a previously requested handshake.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeHandshake.html
   */
  public toDescribeHandshake() {
    this.to('organizations:DescribeHandshake');
    return this;
  }

  /**
   * Grants permission to retrieves details about the organization that the calling credentials belong to.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeOrganization.html
   */
  public toDescribeOrganization() {
    this.to('organizations:DescribeOrganization');
    return this;
  }

  /**
   * Grants permission to retrieve details about an organizational unit (OU).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeOrganizationalUnit.html
   */
  public toDescribeOrganizationalUnit() {
    this.to('organizations:DescribeOrganizationalUnit');
    return this;
  }

  /**
   * Grants permission to retrieves details about a policy.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribePolicy.html
   */
  public toDescribePolicy() {
    this.to('organizations:DescribePolicy');
    return this;
  }

  /**
   * Grants permission to detach a policy from a target root, organizational unit, or account.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DetachPolicy.html
   */
  public toDetachPolicy() {
    this.to('organizations:DetachPolicy');
    return this;
  }

  /**
   * Grants permission to disable integration of an AWS service (the service that is specified by ServicePrincipal) with AWS Organizations.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServicePrincipal()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisableAWSServiceAccess.html
   */
  public toDisableAWSServiceAccess() {
    this.to('organizations:DisableAWSServiceAccess');
    return this;
  }

  /**
   * Grants permission to disable an organization policy type in a root.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_DisablePolicyType.html
   */
  public toDisablePolicyType() {
    this.to('organizations:DisablePolicyType');
    return this;
  }

  /**
   * Grants permission to enable integration of an AWS service (the service that is specified by ServicePrincipal) with AWS Organizations.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServicePrincipal()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html
   */
  public toEnableAWSServiceAccess() {
    this.to('organizations:EnableAWSServiceAccess');
    return this;
  }

  /**
   * Grants permission to start the process to enable all features in an organization, upgrading it from supporting only Consolidated Billing features.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAllFeatures.html
   */
  public toEnableAllFeatures() {
    this.to('organizations:EnableAllFeatures');
    return this;
  }

  /**
   * Grants permission to enable a policy type in a root.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnablePolicyType.html
   */
  public toEnablePolicyType() {
    this.to('organizations:EnablePolicyType');
    return this;
  }

  /**
   * Grants permission to send an invitation to another AWS account, asking it to join your organization as a member account.
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
    this.to('organizations:InviteAccountToOrganization');
    return this;
  }

  /**
   * Grants permission to remove a member account from its parent organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_LeaveOrganization.html
   */
  public toLeaveOrganization() {
    this.to('organizations:LeaveOrganization');
    return this;
  }

  /**
   * Grants permission to retrieve the list of the AWS services for which you enabled integration with your organization.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAWSServiceAccessForOrganization.html
   */
  public toListAWSServiceAccessForOrganization() {
    this.to('organizations:ListAWSServiceAccessForOrganization');
    return this;
  }

  /**
   * Grants permission to list all of the the accounts in the organization.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccounts.html
   */
  public toListAccounts() {
    this.to('organizations:ListAccounts');
    return this;
  }

  /**
   * Grants permission to list the accounts in an organization that are contained by a root or organizational unit (OU).
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccountsForParent.html
   */
  public toListAccountsForParent() {
    this.to('organizations:ListAccountsForParent');
    return this;
  }

  /**
   * Grants permission to list all of the OUs or accounts that are contained in a parent OU or root.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListChildren.html
   */
  public toListChildren() {
    this.to('organizations:ListChildren');
    return this;
  }

  /**
   * Grants permission to list the asynchronous account creation requests that are currently being tracked for the organization.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListCreateAccountStatus.html
   */
  public toListCreateAccountStatus() {
    this.to('organizations:ListCreateAccountStatus');
    return this;
  }

  /**
   * Grants permission to list the AWS accounts that are designated as delegated administrators in this organization.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifServicePrincipal()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListDelegatedAdministrators.html
   */
  public toListDelegatedAdministrators() {
    this.to('organizations:ListDelegatedAdministrators');
    return this;
  }

  /**
   * Grants permission to list the AWS services for which the specified account is a delegated administrator in this organization.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListDelegatedServicesForAccount.html
   */
  public toListDelegatedServicesForAccount() {
    this.to('organizations:ListDelegatedServicesForAccount');
    return this;
  }

  /**
   * Grants permission to list all of the handshakes that are associated with an account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListHandshakesForAccount.html
   */
  public toListHandshakesForAccount() {
    this.to('organizations:ListHandshakesForAccount');
    return this;
  }

  /**
   * Grants permission to list the handshakes that are associated with the organization.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListHandshakesForOrganization.html
   */
  public toListHandshakesForOrganization() {
    this.to('organizations:ListHandshakesForOrganization');
    return this;
  }

  /**
   * Grants permission to lists all of the organizational units (OUs) in a parent organizational unit or root.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListOrganizationalUnitsForParent.html
   */
  public toListOrganizationalUnitsForParent() {
    this.to('organizations:ListOrganizationalUnitsForParent');
    return this;
  }

  /**
   * Grants permission to list the root or organizational units (OUs) that serve as the immediate parent of a child OU or account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListParents.html
   */
  public toListParents() {
    this.to('organizations:ListParents');
    return this;
  }

  /**
   * Grants permission to list all of the policies in an organization.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListPolicies.html
   */
  public toListPolicies() {
    this.to('organizations:ListPolicies');
    return this;
  }

  /**
   * Grants permission to list all of the policies that are directly attached to a root, organizational unit (OU), or account.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListPoliciesForTarget.html
   */
  public toListPoliciesForTarget() {
    this.to('organizations:ListPoliciesForTarget');
    return this;
  }

  /**
   * Grants permission to list all of the roots that are defined in the organization.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListRoots.html
   */
  public toListRoots() {
    this.to('organizations:ListRoots');
    return this;
  }

  /**
   * Grants permission to list all tags for the specified resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('organizations:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to list all the roots, OUs, and accounts to which a policy is attached.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListTargetsForPolicy.html
   */
  public toListTargetsForPolicy() {
    this.to('organizations:ListTargetsForPolicy');
    return this;
  }

  /**
   * Grants permission to move an account from its current root or OU to another parent root or OU.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_MoveAccount.html
   */
  public toMoveAccount() {
    this.to('organizations:MoveAccount');
    return this;
  }

  /**
   * Grants permission to register the specified member account to administer the Organizations features of the AWS service that is specified by ServicePrincipal.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServicePrincipal()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_RegisterDelegatedAdministrator.html
   */
  public toRegisterDelegatedAdministrator() {
    this.to('organizations:RegisterDelegatedAdministrator');
    return this;
  }

  /**
   * Grants permission to removes the specified account from the organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_RemoveAccountFromOrganization.html
   */
  public toRemoveAccountFromOrganization() {
    this.to('organizations:RemoveAccountFromOrganization');
    return this;
  }

  /**
   * Grants permission to add one or more tags to the specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('organizations:TagResource');
    return this;
  }

  /**
   * Grants permission to remove one or more tags from the specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('organizations:UntagResource');
    return this;
  }

  /**
   * Grants permission to rename an organizational unit (OU).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_UpdateOrganizationalUnit.html
   */
  public toUpdateOrganizationalUnit() {
    this.to('organizations:UpdateOrganizationalUnit');
    return this;
  }

  /**
   * Grants permission to update an existing policy with a new name, description, or content.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyType()
   *
   * https://docs.aws.amazon.com/organizations/latest/APIReference/API_UpdatePolicy.html
   */
  public toUpdatePolicy() {
    this.to('organizations:UpdatePolicy');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptHandshake",
      "AttachPolicy",
      "CancelHandshake",
      "CreateAccount",
      "CreateGovCloudAccount",
      "CreateOrganization",
      "CreateOrganizationalUnit",
      "CreatePolicy",
      "DeclineHandshake",
      "DeleteOrganization",
      "DeleteOrganizationalUnit",
      "DeletePolicy",
      "DeregisterDelegatedAdministrator",
      "DetachPolicy",
      "DisableAWSServiceAccess",
      "DisablePolicyType",
      "EnableAWSServiceAccess",
      "EnableAllFeatures",
      "EnablePolicyType",
      "InviteAccountToOrganization",
      "LeaveOrganization",
      "MoveAccount",
      "RegisterDelegatedAdministrator",
      "RemoveAccountFromOrganization",
      "UpdateOrganizationalUnit",
      "UpdatePolicy"
    ],
    "Read": [
      "DescribeAccount",
      "DescribeCreateAccountStatus",
      "DescribeEffectivePolicy",
      "DescribeHandshake",
      "DescribeOrganization",
      "DescribeOrganizationalUnit",
      "DescribePolicy"
    ],
    "List": [
      "ListAWSServiceAccessForOrganization",
      "ListAccounts",
      "ListAccountsForParent",
      "ListChildren",
      "ListCreateAccountStatus",
      "ListDelegatedAdministrators",
      "ListDelegatedServicesForAccount",
      "ListHandshakesForAccount",
      "ListHandshakesForOrganization",
      "ListOrganizationalUnitsForParent",
      "ListParents",
      "ListPolicies",
      "ListPoliciesForTarget",
      "ListRoots",
      "ListTagsForResource",
      "ListTargetsForPolicy"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type account to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   *
   * @param masterAccountId - Identifier for the masterAccountId.
   * @param organizationId - Identifier for the organizationId.
   * @param accountId - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAccount(masterAccountId: string, organizationId: string, accountId?: string, partition?: string) {
    var arn = 'arn:${Partition}:organizations::${MasterAccountId}:account/o-${OrganizationId}/${AccountId}';
    arn = arn.replace('${MasterAccountId}', masterAccountId);
    arn = arn.replace('${OrganizationId}', organizationId);
    arn = arn.replace('${AccountId}', accountId || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type handshake to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   *
   * @param masterAccountId - Identifier for the masterAccountId.
   * @param organizationId - Identifier for the organizationId.
   * @param handshakeType - Identifier for the handshakeType.
   * @param handshakeId - Identifier for the handshakeId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onHandshake(masterAccountId: string, organizationId: string, handshakeType: string, handshakeId: string, partition?: string) {
    var arn = 'arn:${Partition}:organizations::${MasterAccountId}:handshake/o-${OrganizationId}/${HandshakeType}/h-${HandshakeId}';
    arn = arn.replace('${MasterAccountId}', masterAccountId);
    arn = arn.replace('${OrganizationId}', organizationId);
    arn = arn.replace('${HandshakeType}', handshakeType);
    arn = arn.replace('${HandshakeId}', handshakeId);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type organization to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   *
   * @param masterAccountId - Identifier for the masterAccountId.
   * @param organizationId - Identifier for the organizationId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onOrganization(masterAccountId: string, organizationId: string, partition?: string) {
    var arn = 'arn:${Partition}:organizations::${MasterAccountId}:organization/o-${OrganizationId}';
    arn = arn.replace('${MasterAccountId}', masterAccountId);
    arn = arn.replace('${OrganizationId}', organizationId);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type organizationalunit to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   *
   * @param masterAccountId - Identifier for the masterAccountId.
   * @param organizationId - Identifier for the organizationId.
   * @param organizationalUnitId - Identifier for the organizationalUnitId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOrganizationalunit(masterAccountId: string, organizationId: string, organizationalUnitId: string, partition?: string) {
    var arn = 'arn:${Partition}:organizations::${MasterAccountId}:ou/o-${OrganizationId}/ou-${OrganizationalUnitId}';
    arn = arn.replace('${MasterAccountId}', masterAccountId);
    arn = arn.replace('${OrganizationId}', organizationId);
    arn = arn.replace('${OrganizationalUnitId}', organizationalUnitId);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type policy to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   *
   * @param masterAccountId - Identifier for the masterAccountId.
   * @param organizationId - Identifier for the organizationId.
   * @param policyType - Identifier for the policyType.
   * @param policyId - Identifier for the policyId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPolicy(masterAccountId: string, organizationId: string, policyType: string, policyId: string, partition?: string) {
    var arn = 'arn:${Partition}:organizations::${MasterAccountId}:policy/o-${OrganizationId}/${PolicyType}/p-${PolicyId}';
    arn = arn.replace('${MasterAccountId}', masterAccountId);
    arn = arn.replace('${OrganizationId}', organizationId);
    arn = arn.replace('${PolicyType}', policyType);
    arn = arn.replace('${PolicyId}', policyId);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type awspolicy to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   *
   * @param policyType - Identifier for the policyType.
   * @param policyId - Identifier for the policyId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAwspolicy(policyType: string, policyId: string, partition?: string) {
    var arn = 'arn:${Partition}:organizations::aws:policy/${PolicyType}/p-${PolicyId}';
    arn = arn.replace('${PolicyType}', policyType);
    arn = arn.replace('${PolicyId}', policyId);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type root to the statement
   *
   * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_arn-formats.html
   *
   * @param masterAccountId - Identifier for the masterAccountId.
   * @param organizationId - Identifier for the organizationId.
   * @param rootId - Identifier for the rootId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRoot(masterAccountId: string, organizationId: string, rootId: string, partition?: string) {
    var arn = 'arn:${Partition}:organizations::${MasterAccountId}:root/o-${OrganizationId}/r-${RootId}';
    arn = arn.replace('${MasterAccountId}', masterAccountId);
    arn = arn.replace('${OrganizationId}', organizationId);
    arn = arn.replace('${RootId}', rootId);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Enables you to filter the request to only the specified policy type names.
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
   * - .toListPolicies()
   * - .toListPoliciesForTarget()
   * - .toListTargetsForPolicy()
   * - .toUpdatePolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPolicyType(value: string | string[], operator?: string) {
    return this.if(`organizations:PolicyType`, value, operator || 'StringLike');
  }

  /**
   * Enables you to filter the request to only the specified service principal names.
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
  public ifServicePrincipal(value: string | string[], operator?: string) {
    return this.if(`organizations:ServicePrincipal`, value, operator || 'StringLike');
  }
}
