import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [elemental-support-cases](https://docs.aws.amazon.com/service-authorization/latest/reference/list_elementalsupportcases.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ElementalSupportCases extends PolicyStatement {
  public servicePrefix = 'elemental-support-cases';

  /**
   * Statement provider for service [elemental-support-cases](https://docs.aws.amazon.com/service-authorization/latest/reference/list_elementalsupportcases.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grant the permission to create a support case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toCreateCase() {
    this.to('elemental-support-cases:CreateCase');
    return this;
  }

  /**
   * Grant the permission to describe a support case in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toGetCase() {
    this.to('elemental-support-cases:GetCase');
    return this;
  }

  /**
   * Grant the permission to list the support cases in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toGetCases() {
    this.to('elemental-support-cases:GetCases');
    return this;
  }

  /**
   * Grant the permission to update a support case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toUpdateCase() {
    this.to('elemental-support-cases:UpdateCase');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateCase",
      "UpdateCase"
    ],
    "Read": [
      "GetCase",
      "GetCases"
    ]
  };
}

export type ElementalSupportCasesActionsWrite = 'CreateCase' | 'UpdateCase';
export type ElementalSupportCasesActionsRead = 'GetCase' | 'GetCases';
export type ElementalSupportCasesActions = ElementalSupportCasesActionsWrite | ElementalSupportCasesActionsRead;
