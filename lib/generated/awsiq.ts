import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [iq](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiq.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iq extends PolicyStatement {
  public servicePrefix = 'iq';
  protected actionList: Actions = {
    "CreateProject": {
      "url": "https://aws.amazon.com/iq/",
      "description": "Grants permission to submit new project requests",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [iq](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiq.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to submit new project requests
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public createProject() {
    this.add('iq:CreateProject');
    return this;
  }
}
