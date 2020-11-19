import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [iq](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiq.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iq extends PolicyStatement {
  public servicePrefix = 'iq';

  /**
   * Statement provider for service [iq](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiq.html).
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
  public toCreateProject() {
    this.to('iq:CreateProject');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateProject"
    ]
  };
}
