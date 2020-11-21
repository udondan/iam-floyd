import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [elemental-support-content](https://docs.aws.amazon.com/service-authorization/latest/reference/list_elementalsupportcontent.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ElementalSupportContent extends PolicyStatement {
  public servicePrefix = 'elemental-support-content';

  /**
   * Statement provider for service [elemental-support-content](https://docs.aws.amazon.com/service-authorization/latest/reference/list_elementalsupportcontent.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grant the permission to search support content
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toQuery() {
    this.to('elemental-support-content:Query');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "Query"
    ]
  };
}
