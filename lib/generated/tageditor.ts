import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [resource-explorer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstageditor.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ResourceExplorer extends PolicyStatement {
  public servicePrefix = 'resource-explorer';

  /**
   * Statement provider for service [resource-explorer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstageditor.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to retrieve the resource types currently supported by Tag Editor
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-prereqs.html#rg-permissions-te
   */
  public toListResourceTypes() {
    this.to('resource-explorer:ListResourceTypes');
    return this;
  }

  /**
   * Grants permission to retrieve the identifiers of the resources in the AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-prereqs.html#rg-permissions-te
   */
  public toListResources() {
    this.to('resource-explorer:ListResources');
    return this;
  }

  /**
   * Grants permission to retrieve the tags attached to the specified resource identifiers
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - tag:GetResources
   *
   * https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-prereqs.html#rg-permissions-te
   */
  public toListTags() {
    this.to('resource-explorer:ListTags');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "List": [
      "ListResourceTypes",
      "ListResources"
    ],
    "Read": [
      "ListTags"
    ]
  };
}
