import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [appflow](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonappflow.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Appflow extends PolicyStatement {
  public servicePrefix = 'appflow';
  protected actionList: Actions = {
    "CreateConnectorProfile": {
      "url": "https://docs.aws.amazon.com/",
      "description": "Grants permission to create a login profile to be used with AppFlow flows",
      "accessLevel": "Write"
    },
    "CreateFlow": {
      "url": "https://docs.aws.amazon.com/",
      "description": "Grants permission to create an AppFlow flow",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteConnectorProfile": {
      "url": "https://docs.aws.amazon.com/",
      "description": "Grants permission to delete a login profile set up for use with AppFlow",
      "accessLevel": "Write",
      "resourceTypes": {
        "connectorprofile": {
          "required": true
        }
      }
    },
    "DeleteFlow": {
      "url": "https://docs.aws.amazon.com/",
      "description": "Grants permission to delete an AppFlow flow",
      "accessLevel": "Write",
      "resourceTypes": {
        "flow": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DescribeConnectorFields": {
      "url": "https://docs.aws.amazon.com/",
      "description": "Grants permission to describe all fields supported by AppFlow",
      "accessLevel": "Read",
      "resourceTypes": {
        "connectorprofile": {
          "required": true
        }
      }
    },
    "DescribeConnectorProfiles": {
      "url": "https://docs.aws.amazon.com/",
      "description": "Grants permission to describe all login profiles configured in AppFlow",
      "accessLevel": "Read"
    },
    "DescribeConnectors": {
      "url": "https://docs.aws.amazon.com/",
      "description": "Grants permission to describe all connectors supported by AppFlow",
      "accessLevel": "Read"
    },
    "DescribeFlowExecution": {
      "url": "https://docs.aws.amazon.com/",
      "description": "Grants permission to describe all flow executions for a flow configured in AppFlow",
      "accessLevel": "Read",
      "resourceTypes": {
        "flow": {
          "required": true
        }
      }
    },
    "DescribeFlows": {
      "url": "https://docs.aws.amazon.com/",
      "description": "Grants permission to describe all flows configured in AppFlow",
      "accessLevel": "Read"
    },
    "ListConnectorFields": {
      "url": "https://docs.aws.amazon.com/",
      "description": "Grants permission to list all fields supported by AppFlow",
      "accessLevel": "Read",
      "resourceTypes": {
        "connectorprofile": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/appflow/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to list tags for a flow",
      "accessLevel": "List",
      "resourceTypes": {
        "flow": {
          "required": true
        }
      }
    },
    "RunFlow": {
      "url": "https://docs.aws.amazon.com/",
      "description": "Grants permission to run a flow configured in AppFlow",
      "accessLevel": "Write",
      "resourceTypes": {
        "flow": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/appflow/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to tag a flow",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "flow": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/appflow/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to untag a flow",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "flow": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateFlow": {
      "url": "https://docs.aws.amazon.com/",
      "description": "Grants permission to update an AppFlow flow",
      "accessLevel": "Write",
      "resourceTypes": {
        "flow": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "flow": {
      "name": "flow",
      "url": "https://docs.aws.amazon.com/",
      "arn": "arn:${Partition}:appflow::${Account}:flow/${FlowName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "connectorprofile": {
      "name": "connectorprofile",
      "url": "https://docs.aws.amazon.com/",
      "arn": "arn:${Partition}:appflow::${Account}:connectorprofile/${ProfileName}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [appflow](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonappflow.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a login profile to be used with AppFlow flows
   *
   * Access Level: Write
   */
  public toCreateConnectorProfile() {
    this.add('appflow:CreateConnectorProfile');
    return this;
  }

  /**
   * Grants permission to create an AppFlow flow
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   */
  public toCreateFlow() {
    this.add('appflow:CreateFlow');
    return this;
  }

  /**
   * Grants permission to delete a login profile set up for use with AppFlow
   *
   * Access Level: Write
   */
  public toDeleteConnectorProfile() {
    this.add('appflow:DeleteConnectorProfile');
    return this;
  }

  /**
   * Grants permission to delete an AppFlow flow
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   */
  public toDeleteFlow() {
    this.add('appflow:DeleteFlow');
    return this;
  }

  /**
   * Grants permission to describe all fields supported by AppFlow
   *
   * Access Level: Read
   */
  public toDescribeConnectorFields() {
    this.add('appflow:DescribeConnectorFields');
    return this;
  }

  /**
   * Grants permission to describe all login profiles configured in AppFlow
   *
   * Access Level: Read
   */
  public toDescribeConnectorProfiles() {
    this.add('appflow:DescribeConnectorProfiles');
    return this;
  }

  /**
   * Grants permission to describe all connectors supported by AppFlow
   *
   * Access Level: Read
   */
  public toDescribeConnectors() {
    this.add('appflow:DescribeConnectors');
    return this;
  }

  /**
   * Grants permission to describe all flow executions for a flow configured in AppFlow
   *
   * Access Level: Read
   */
  public toDescribeFlowExecution() {
    this.add('appflow:DescribeFlowExecution');
    return this;
  }

  /**
   * Grants permission to describe all flows configured in AppFlow
   *
   * Access Level: Read
   */
  public toDescribeFlows() {
    this.add('appflow:DescribeFlows');
    return this;
  }

  /**
   * Grants permission to list all fields supported by AppFlow
   *
   * Access Level: Read
   */
  public toListConnectorFields() {
    this.add('appflow:ListConnectorFields');
    return this;
  }

  /**
   * Grants permission to list tags for a flow
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appflow/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('appflow:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to run a flow configured in AppFlow
   *
   * Access Level: Write
   */
  public toRunFlow() {
    this.add('appflow:RunFlow');
    return this;
  }

  /**
   * Grants permission to tag a flow
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/appflow/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.add('appflow:TagResource');
    return this;
  }

  /**
   * Grants permission to untag a flow
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appflow/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('appflow:UntagResource');
    return this;
  }

  /**
   * Grants permission to update an AppFlow flow
   *
   * Access Level: Write
   */
  public toUpdateFlow() {
    this.add('appflow:UpdateFlow');
    return this;
  }

  /**
   * Adds a resource of type flow to the statement
   *
   * @param flowName - Identifier for the flowName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFlow(flowName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:appflow::${Account}:flow/${FlowName}';
    arn = arn.replace('${FlowName}', flowName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type connectorprofile to the statement
   *
   * @param profileName - Identifier for the profileName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onConnectorprofile(profileName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:appflow::${Account}:connectorprofile/${ProfileName}';
    arn = arn.replace('${ProfileName}', profileName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateFlow()
   * - .toDeleteFlow()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag-value associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - flow
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateFlow()
   * - .toDeleteFlow()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
