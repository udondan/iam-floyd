import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [tiros](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstiros.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Tiros extends PolicyStatement {
  public servicePrefix = 'tiros';

  /**
   * Statement provider for service [tiros](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstiros.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a VPC reachability query
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html
   */
  public toCreateQuery() {
    return this.to('CreateQuery');
  }

  /**
   * Grants permission to get VPC reachability query answers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html
   */
  public toGetQueryAnswer() {
    return this.to('GetQueryAnswer');
  }

  /**
   * Grants permission to get VPC reachability query explanations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/vpc/latest/reachability/security_iam_required-API-permissions.html
   */
  public toGetQueryExplanation() {
    return this.to('GetQueryExplanation');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateQuery"
    ],
    "Read": [
      "GetQueryAnswer",
      "GetQueryExplanation"
    ]
  };
}
