import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [codeguru](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncodeguru.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Codeguru extends PolicyStatement {
  public servicePrefix = 'codeguru';
  protected actionList: Actions = {
    "GetCodeGuruFreeTrialSummary": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetCodeGuruFreeTrialSummary.html",
      "description": "Gets free trial summary for the CodeGuru service which includes expiration date.",
      "accessLevel": "Read"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [codeguru](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncodeguru.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Gets free trial summary for the CodeGuru service which includes expiration date.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetCodeGuruFreeTrialSummary.html
   */
  public toGetCodeGuruFreeTrialSummary() {
    this.add('codeguru:GetCodeGuruFreeTrialSummary');
    return this;
  }
}
