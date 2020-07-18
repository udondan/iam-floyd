import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service appflow
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonappflow.html
 */
export class Appflow extends PolicyStatement {
  public servicePrefix = 'appflow';
  public actions: Actions = {
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
  public resourceTypes: ResourceTypes = {
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
   * Action provider for service appflow
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonappflow.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Grants permission to create a login profile to be used with AppFlow flows
   *
   * Access Level: Write
   */
  public createConnectorProfile() {
    this.add('appflow:CreateConnectorProfile');
    return this;
  }

  /**
   * Grants permission to create an AppFlow flow
   *
   * Access Level: Write
   */
  public createFlow() {
    this.add('appflow:CreateFlow');
    return this;
  }

  /**
   * Grants permission to delete a login profile set up for use with AppFlow
   *
   * Access Level: Write
   */
  public deleteConnectorProfile() {
    this.add('appflow:DeleteConnectorProfile');
    return this;
  }

  /**
   * Grants permission to delete an AppFlow flow
   *
   * Access Level: Write
   */
  public deleteFlow() {
    this.add('appflow:DeleteFlow');
    return this;
  }

  /**
   * Grants permission to describe all fields supported by AppFlow
   *
   * Access Level: Read
   */
  public describeConnectorFields() {
    this.add('appflow:DescribeConnectorFields');
    return this;
  }

  /**
   * Grants permission to describe all login profiles configured in AppFlow
   *
   * Access Level: Read
   */
  public describeConnectorProfiles() {
    this.add('appflow:DescribeConnectorProfiles');
    return this;
  }

  /**
   * Grants permission to describe all connectors supported by AppFlow
   *
   * Access Level: Read
   */
  public describeConnectors() {
    this.add('appflow:DescribeConnectors');
    return this;
  }

  /**
   * Grants permission to describe all flow executions for a flow configured in AppFlow
   *
   * Access Level: Read
   */
  public describeFlowExecution() {
    this.add('appflow:DescribeFlowExecution');
    return this;
  }

  /**
   * Grants permission to describe all flows configured in AppFlow
   *
   * Access Level: Read
   */
  public describeFlows() {
    this.add('appflow:DescribeFlows');
    return this;
  }

  /**
   * Grants permission to list all fields supported by AppFlow
   *
   * Access Level: Read
   */
  public listConnectorFields() {
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
  public listTagsForResource() {
    this.add('appflow:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to run a flow configured in AppFlow
   *
   * Access Level: Write
   */
  public runFlow() {
    this.add('appflow:RunFlow');
    return this;
  }

  /**
   * Grants permission to tag a flow
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/appflow/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('appflow:TagResource');
    return this;
  }

  /**
   * Grants permission to untag a flow
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/appflow/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('appflow:UntagResource');
    return this;
  }

  /**
   * Grants permission to update an AppFlow flow
   *
   * Access Level: Write
   */
  public updateFlow() {
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
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
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
}
