import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [account](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsaccountmanagement.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Account extends PolicyStatement {
  public servicePrefix = 'account';

  /**
   * Statement provider for service [account](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsaccountmanagement.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept the process to update the primary email address of an account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifEmailTargetDomain()
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/API_AcceptPrimaryEmailUpdate.html
   */
  public toAcceptPrimaryEmailUpdate() {
    return this.to('AcceptPrimaryEmailUpdate');
  }

  /**
   * Grants permission to close an account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/security_account-permissions-ref.html
   */
  public toCloseAccount() {
    return this.to('CloseAccount');
  }

  /**
   * Grants permission to delete the alternate contacts for an account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAlternateContactTypes()
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/API_DeleteAlternateContact.html
   */
  public toDeleteAlternateContact() {
    return this.to('DeleteAlternateContact');
  }

  /**
   * Grants permission to disable use of a Region
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTargetRegion()
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/API_DisableRegion.html
   */
  public toDisableRegion() {
    return this.to('DisableRegion');
  }

  /**
   * Grants permission to enable use of a Region
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTargetRegion()
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/API_EnableRegion.html
   */
  public toEnableRegion() {
    return this.to('EnableRegion');
  }

  /**
   * Grants permission to retrieve the account information for an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/API_GetAccountInformation.html
   */
  public toGetAccountInformation() {
    return this.to('GetAccountInformation');
  }

  /**
   * Grants permission to retrieve the alternate contacts for an account
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAlternateContactTypes()
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/API_GetAlternateContact.html
   */
  public toGetAlternateContact() {
    return this.to('GetAlternateContact');
  }

  /**
   * Grants permission to retrieve the primary contact information for an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/API_GetContactInformation.html
   */
  public toGetContactInformation() {
    return this.to('GetContactInformation');
  }

  /**
   * Grants permission to retrieve the primary email address of an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/API_GetPrimaryEmail.html
   */
  public toGetPrimaryEmail() {
    return this.to('GetPrimaryEmail');
  }

  /**
   * Grants permission to get the opt-in status of a Region
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifTargetRegion()
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/API_GetRegionOptStatus.html
   */
  public toGetRegionOptStatus() {
    return this.to('GetRegionOptStatus');
  }

  /**
   * Grants permission to list the available Regions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/API_ListRegions.html
   */
  public toListRegions() {
    return this.to('ListRegions');
  }

  /**
   * Grants permission to update the name for an account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/API_PutAccountName.html
   */
  public toPutAccountName() {
    return this.to('PutAccountName');
  }

  /**
   * Grants permission to modify the alternate contacts for an account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAlternateContactTypes()
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/API_PutAlternateContact.html
   */
  public toPutAlternateContact() {
    return this.to('PutAlternateContact');
  }

  /**
   * Grants permission to update the primary contact information for an account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/API_PutContactInformation.html
   */
  public toPutContactInformation() {
    return this.to('PutContactInformation');
  }

  /**
   * Grants permission to start the process to update the primary email address of an account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifEmailTargetDomain()
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/API_StartPrimaryEmailUpdate.html
   */
  public toStartPrimaryEmailUpdate() {
    return this.to('StartPrimaryEmailUpdate');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptPrimaryEmailUpdate',
      'CloseAccount',
      'DeleteAlternateContact',
      'DisableRegion',
      'EnableRegion',
      'PutAccountName',
      'PutAlternateContact',
      'PutContactInformation',
      'StartPrimaryEmailUpdate'
    ],
    Read: [
      'GetAccountInformation',
      'GetAlternateContact',
      'GetContactInformation',
      'GetPrimaryEmail',
      'GetRegionOptStatus'
    ],
    List: [
      'ListRegions'
    ]
  };

  /**
   * Adds a resource of type account to the statement
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-resources
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAccount(account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:account::${ account ?? this.defaultAccount }:account`);
  }

  /**
   * Adds a resource of type accountInOrganization to the statement
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-resources
   *
   * @param managementAccountId - Identifier for the managementAccountId.
   * @param organizationId - Identifier for the organizationId.
   * @param memberAccountId - Identifier for the memberAccountId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAccountInOrganization(managementAccountId: string, organizationId: string, memberAccountId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:account::${ managementAccountId }:account/o-${ organizationId }/${ memberAccountId }`);
  }

  /**
   * Filters access by the resource path for an account in an organization
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAccountResourceOrgPaths(value: string | string[], operator?: Operator | string) {
    return this.if(`AccountResourceOrgPaths`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by resource tags for an account in an organization
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAccountResourceOrgTags(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`AccountResourceOrgTags/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by alternate contact types
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toDeleteAlternateContact()
   * - .toGetAlternateContact()
   * - .toPutAlternateContact()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAlternateContactTypes(value: string | string[], operator?: Operator | string) {
    return this.if(`AlternateContactTypes`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by email domain of the target email address
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toAcceptPrimaryEmailUpdate()
   * - .toStartPrimaryEmailUpdate()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEmailTargetDomain(value: string | string[], operator?: Operator | string) {
    return this.if(`EmailTargetDomain`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a list of Regions. Enables or disables all the Regions specified here
   *
   * https://docs.aws.amazon.com/accounts/latest/reference/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toDisableRegion()
   * - .toEnableRegion()
   * - .toGetRegionOptStatus()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTargetRegion(value: string | string[], operator?: Operator | string) {
    return this.if(`TargetRegion`, value, operator ?? 'StringLike');
  }
}
