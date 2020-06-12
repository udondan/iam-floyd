import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service appflow
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonappflow.html
 */
export class Appflow extends PolicyStatement {
  public servicePrefix = 'appflow';
  public actions : Actions = {
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
  public resourceTypes : ResourceTypes = {
    "flow": {
      "name": "flow",
      "arn": "arn:${Partition}:appflow::${Account}:flow/${flowName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "connectorprofile": {
      "name": "connectorprofile",
      "arn": "arn:${Partition}:appflow::${Account}:connectorprofile/${profileName}",
      "conditionKeys": []
    }
  };

  /**
   * Grants permission to create a login profile to be used with AppFlow flows
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/
   */
  public createConnectorProfile () {
    this.add('appflow:CreateConnectorProfile');
    return this;
  }

  /**
   * Grants permission to create an AppFlow flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/
   */
  public createFlow () {
    this.add('appflow:CreateFlow');
    return this;
  }

  /**
   * Grants permission to delete a login profile set up for use with AppFlow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/
   */
  public deleteConnectorProfile () {
    this.add('appflow:DeleteConnectorProfile');
    return this;
  }

  /**
   * Grants permission to delete an AppFlow flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/
   */
  public deleteFlow () {
    this.add('appflow:DeleteFlow');
    return this;
  }

  /**
   * Grants permission to describe all fields supported by AppFlow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/
   */
  public describeConnectorFields () {
    this.add('appflow:DescribeConnectorFields');
    return this;
  }

  /**
   * Grants permission to describe all login profiles configured in AppFlow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/
   */
  public describeConnectorProfiles () {
    this.add('appflow:DescribeConnectorProfiles');
    return this;
  }

  /**
   * Grants permission to describe all connectors supported by AppFlow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/
   */
  public describeConnectors () {
    this.add('appflow:DescribeConnectors');
    return this;
  }

  /**
   * Grants permission to describe all flow executions for a flow configured in AppFlow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/
   */
  public describeFlowExecution () {
    this.add('appflow:DescribeFlowExecution');
    return this;
  }

  /**
   * Grants permission to describe all flows configured in AppFlow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/
   */
  public describeFlows () {
    this.add('appflow:DescribeFlows');
    return this;
  }

  /**
   * Grants permission to list all fields supported by AppFlow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/
   */
  public listConnectorFields () {
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
  public listTagsForResource () {
    this.add('appflow:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to run a flow configured in AppFlow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/
   */
  public runFlow () {
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
  public tagResource () {
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
  public untagResource () {
    this.add('appflow:UntagResource');
    return this;
  }

  /**
   * Grants permission to update an AppFlow flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/
   */
  public updateFlow () {
    this.add('appflow:UpdateFlow');
    return this;
  }
}
