import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service codeguru
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncodeguru.html
 */
export class Codeguru extends PolicyStatement {
  public servicePrefix = 'codeguru';
  public actions: Actions = {
    "GetCodeGuruFreeTrialSummary": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetCodeGuruFreeTrialSummary.html",
      "description": "Gets free trial summary for the CodeGuru service which includes expiration date.",
      "accessLevel": "Read"
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * Action provider for service codeguru
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncodeguru.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Gets free trial summary for the CodeGuru service which includes expiration date.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetCodeGuruFreeTrialSummary.html
   */
  public getCodeGuruFreeTrialSummary() {
    this.add('codeguru:GetCodeGuruFreeTrialSummary');
    return this;
  }
}
