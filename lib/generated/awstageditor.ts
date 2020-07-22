import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [resource-explorer](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awstageditor.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ResourceExplorer extends PolicyStatement {
  public servicePrefix = 'resource-explorer';
  protected actionList: Actions = {
    "ListResourceTypes": {
      "url": "https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-prereqs.html#rg-permissions-te",
      "description": "Grants permission to retrieve the resource types currently supported by Tag Editor",
      "accessLevel": "List"
    },
    "ListResources": {
      "url": "https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-prereqs.html#rg-permissions-te",
      "description": "Grants permission to retrieve the identifiers of the resources in the AWS account",
      "accessLevel": "List"
    },
    "ListTags": {
      "url": "https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-prereqs.html#rg-permissions-te",
      "description": "Grants permission to retrieve the tags attached to the specified resource identifiers",
      "accessLevel": "Read",
      "dependentActions": [
        "tag:GetResources"
      ]
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [resource-explorer](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awstageditor.html).
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
  public listResourceTypes() {
    this.add('resource-explorer:ListResourceTypes');
    return this;
  }

  /**
   * Grants permission to retrieve the identifiers of the resources in the AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-prereqs.html#rg-permissions-te
   */
  public listResources() {
    this.add('resource-explorer:ListResources');
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
  public listTags() {
    this.add('resource-explorer:ListTags');
    return this;
  }
}
