import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [activate](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsactivate.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Activate extends PolicyStatement {
  public servicePrefix = 'activate';

  /**
   * Statement provider for service [activate](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsactivate.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to submit an Activate application form
   *
   * Access Level: Write
   */
  public toCreateForm() {
    this.to('activate:CreateForm');
    return this;
  }

  /**
   * Grants permission to get the AWS account contact information
   *
   * Access Level: Read
   */
  public toGetAccountContact() {
    this.to('activate:GetAccountContact');
    return this;
  }

  /**
   * Grants permission to get Activate tech posts and offer information
   *
   * Access Level: Read
   */
  public toGetContentInfo() {
    this.to('activate:GetContentInfo');
    return this;
  }

  /**
   * Grants permission to get the AWS cost information
   *
   * Access Level: Read
   */
  public toGetCosts() {
    this.to('activate:GetCosts');
    return this;
  }

  /**
   * Grants permission to get the AWS credit information
   *
   * Access Level: Read
   */
  public toGetCredits() {
    this.to('activate:GetCredits');
    return this;
  }

  /**
   * Grants permission to get the Activate member information
   *
   * Access Level: Read
   */
  public toGetMemberInfo() {
    this.to('activate:GetMemberInfo');
    return this;
  }

  /**
   * Grants permission to get an Activate program
   *
   * Access Level: Read
   */
  public toGetProgram() {
    this.to('activate:GetProgram');
    return this;
  }

  /**
   * Grants permission to create or update the Activate member information
   *
   * Access Level: Write
   */
  public toPutMemberInfo() {
    this.to('activate:PutMemberInfo');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateForm",
      "PutMemberInfo"
    ],
    "Read": [
      "GetAccountContact",
      "GetContentInfo",
      "GetCosts",
      "GetCredits",
      "GetMemberInfo",
      "GetProgram"
    ]
  };
}
