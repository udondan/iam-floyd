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
    return this.to('CreateForm');
  }

  /**
   * Grants permission to get the AWSaccount contact information
   *
   * Access Level: Read
   */
  public toGetAccountContact() {
    return this.to('GetAccountContact');
  }

  /**
   * Grants permission to get Activate tech posts and offer information
   *
   * Access Level: Read
   */
  public toGetContentInfo() {
    return this.to('GetContentInfo');
  }

  /**
   * Grants permission to get the AWS cost information
   *
   * Access Level: Read
   */
  public toGetCosts() {
    return this.to('GetCosts');
  }

  /**
   * Grants permission to get the AWS credit information
   *
   * Access Level: Read
   */
  public toGetCredits() {
    return this.to('GetCredits');
  }

  /**
   * Grants permission to get the Activate member information
   *
   * Access Level: Read
   */
  public toGetMemberInfo() {
    return this.to('GetMemberInfo');
  }

  /**
   * Grants permission to get an Activate program
   *
   * Access Level: Read
   */
  public toGetProgram() {
    return this.to('GetProgram');
  }

  /**
   * Grants permission to create or update the Activate member information
   *
   * Access Level: Write
   */
  public toPutMemberInfo() {
    return this.to('PutMemberInfo');
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
