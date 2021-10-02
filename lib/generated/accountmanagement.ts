import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to delete the alternate contacts for an account
   *
   * Access Level: Write
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
   * https://docs.aws.amazon.com/general/latest/gr/rande-manage.html
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
   * https://docs.aws.amazon.com/general/latest/gr/rande-manage.html
   */
  public toEnableRegion() {
    return this.to('EnableRegion');
  }

  /**
   * Grants permission to retrieve the alternate contacts for an account
   *
   * Access Level: Read
   */
  public toGetAlternateContact() {
    return this.to('GetAlternateContact');
  }

  /**
   * Grants permission to list the available Regions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/general/latest/gr/rande-manage.html
   */
  public toListRegions() {
    return this.to('ListRegions');
  }

  /**
   * Grants permission to modify the alternate contacts for an account
   *
   * Access Level: Write
   */
  public toPutAlternateContact() {
    return this.to('PutAlternateContact');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "DeleteAlternateContact",
      "DisableRegion",
      "EnableRegion",
      "PutAlternateContact"
    ],
    "Read": [
      "GetAlternateContact"
    ],
    "List": [
      "ListRegions"
    ]
  };

  /**
   * Adds a resource of type account to the statement
   *
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAccount(account?: string, partition?: string) {
    var arn = 'arn:${Partition}:account::${Account}:account';
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type accountInOrganization to the statement
   *
   * @param managementAccountId - Identifier for the managementAccountId.
   * @param organizationId - Identifier for the organizationId.
   * @param memberAccountId - Identifier for the memberAccountId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAccountInOrganization(managementAccountId: string, organizationId: string, memberAccountId: string, partition?: string) {
    var arn = 'arn:${Partition}:account::${ManagementAccountId}:account/o-${OrganizationId}/${MemberAccountId}';
    arn = arn.replace('${ManagementAccountId}', managementAccountId);
    arn = arn.replace('${OrganizationId}', organizationId);
    arn = arn.replace('${MemberAccountId}', memberAccountId);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the resource path for an account in an organization
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAccountResourceOrgPaths(value: string | string[], operator?: Operator | string) {
    return this.if(`AccountResourceOrgPaths`, value, operator || 'StringLike');
  }

  /**
   * Filters access by resource tags for an account in an organization
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAccountResourceOrgTags(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`AccountResourceOrgTags/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by alternate contact types
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAlternateContactTypes(value: string | string[], operator?: Operator | string) {
    return this.if(`AlternateContactTypes`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a list of Regions. Enables or disables all the Regions specified here
   *
   * Applies to actions:
   * - .toDisableRegion()
   * - .toEnableRegion()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTargetRegion(value: string | string[], operator?: Operator | string) {
    return this.if(`TargetRegion`, value, operator || 'StringLike');
  }
}
