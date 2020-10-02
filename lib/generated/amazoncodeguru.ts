import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [codeguru](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncodeguru.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Codeguru extends PolicyStatement {
  public servicePrefix = 'codeguru';

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
    this.to('codeguru:GetCodeGuruFreeTrialSummary');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "GetCodeGuruFreeTrialSummary"
    ]
  };
}
