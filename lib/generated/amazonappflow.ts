import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [appflow](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonappflow.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Appflow extends PolicyStatement {
  public servicePrefix = 'appflow';
  protected actionList: Actions = {
    "CreateConnectorProfile": {
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_CreateConnectorProfile.html",
      "description": "Grants permission to create a login profile to be used with Amazon AppFlow flows",
      "accessLevel": "Write"
    },
    "CreateFlow": {
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_CreateFlow.html",
      "description": "Grants permission to create an Amazon AppFlow flow",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteConnectorProfile": {
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectorProfiles.html",
      "description": "Grants permission to delete a login profile configured in Amazon AppFlow",
      "accessLevel": "Write",
      "resourceTypes": {
        "connectorprofile": {
          "required": true
        }
      }
    },
    "DeleteFlow": {
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DeleteFlow.html",
      "description": "Grants permission to delete an Amazon AppFlow flow",
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
    "DescribeConnectorEntity": {
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectorEntity.html",
      "description": "Grants permission to describe all fields for an object in a login profile configured in Amazon AppFlow",
      "accessLevel": "Read",
      "resourceTypes": {
        "connectorprofile": {
          "required": true
        }
      }
    },
    "DescribeConnectorFields": {
      "url": "https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions",
      "description": "Grants permission to describe all fields for an object in a login profile configured in Amazon AppFlow (Console Only)",
      "accessLevel": "Read",
      "resourceTypes": {
        "connectorprofile": {
          "required": true
        }
      }
    },
    "DescribeConnectorProfiles": {
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectorProfiles.html",
      "description": "Grants permission to describe all login profiles configured in Amazon AppFlow",
      "accessLevel": "Read"
    },
    "DescribeConnectors": {
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectors.html",
      "description": "Grants permission to describe all connectors supported by Amazon AppFlow",
      "accessLevel": "Read"
    },
    "DescribeFlow": {
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeFlow.html",
      "description": "Grants permission to describe a specific flow configured in Amazon AppFlow",
      "accessLevel": "Read"
    },
    "DescribeFlowExecution": {
      "url": "https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions",
      "description": "Grants permission to describe all flow executions for a flow configured in Amazon AppFlow (Console Only)",
      "accessLevel": "Read",
      "resourceTypes": {
        "flow": {
          "required": true
        }
      }
    },
    "DescribeFlowExecutionRecords": {
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeFlowExecutionRecords.html",
      "description": "Grants permission to describe all flow executions for a flow configured in Amazon AppFlow",
      "accessLevel": "Read",
      "resourceTypes": {
        "flow": {
          "required": true
        }
      }
    },
    "DescribeFlows": {
      "url": "https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions",
      "description": "Grants permission to describe all flows configured in Amazon AppFlow (Console Only)",
      "accessLevel": "Read"
    },
    "ListConnectorEntities": {
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListConnectorEntities.html",
      "description": "Grants permission to list all objects for a login profile configured in Amazon AppFlow",
      "accessLevel": "List",
      "resourceTypes": {
        "connectorprofile": {
          "required": true
        }
      }
    },
    "ListConnectorFields": {
      "url": "https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions",
      "description": "Grants permission to list all objects for a login profile configured in Amazon AppFlow (Console Only)",
      "accessLevel": "Read",
      "resourceTypes": {
        "connectorprofile": {
          "required": true
        }
      }
    },
    "ListFlows": {
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListFlows.html",
      "description": "Grants permission to list all flows configured in Amazon AppFlow",
      "accessLevel": "List",
      "resourceTypes": {
        "flow": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to list tags for a flow",
      "accessLevel": "List",
      "resourceTypes": {
        "flow": {
          "required": true
        }
      }
    },
    "RunFlow": {
      "url": "https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions",
      "description": "Grants permission to run a flow configured in Amazon AppFlow (Console Only)",
      "accessLevel": "Write",
      "resourceTypes": {
        "flow": {
          "required": true
        }
      }
    },
    "StartFlow": {
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_StartFlow.html",
      "description": "Grants permission to activate (for scheduled and event-triggered flows) or run (for on-demand flows) a flow configured in Amazon AppFlow",
      "accessLevel": "Write",
      "resourceTypes": {
        "flow": {
          "required": true
        }
      }
    },
    "StopFlow": {
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_StopFlow.html",
      "description": "Grants permission to deactivate a scheduled or event-triggered flow configured in Amazon AppFlow",
      "accessLevel": "Write",
      "resourceTypes": {
        "flow": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_TagResource.html",
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
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UntagResource.html",
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
    "UpdateConnectorProfile": {
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UpdateConnectorProfile.html",
      "description": "Grants permission to update a login profile configured in Amazon AppFlow",
      "accessLevel": "Write",
      "resourceTypes": {
        "flow": {
          "required": true
        }
      }
    },
    "UpdateFlow": {
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UpdateFlow.html",
      "description": "Grants permission to update a flow configured in Amazon AppFlow",
      "accessLevel": "Write",
      "resourceTypes": {
        "flow": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "connectorprofile": {
      "name": "connectorprofile",
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ConnectorProfile.html",
      "arn": "arn:${Partition}:appflow:${Region}:${Account}:connectorprofile/${ProfileName}",
      "conditionKeys": []
    },
    "flow": {
      "name": "flow",
      "url": "https://docs.aws.amazon.com/appflow/1.0/APIReference/API_FlowDefinition.html",
      "arn": "arn:${Partition}:appflow:${Region}:${Account}:flow/${FlowName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
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
   * Grants permission to create a login profile to be used with Amazon AppFlow flows
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_CreateConnectorProfile.html
   */
  public toCreateConnectorProfile() {
    this.add('appflow:CreateConnectorProfile');
    return this;
  }

  /**
   * Grants permission to create an Amazon AppFlow flow
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_CreateFlow.html
   */
  public toCreateFlow() {
    this.add('appflow:CreateFlow');
    return this;
  }

  /**
   * Grants permission to delete a login profile configured in Amazon AppFlow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectorProfiles.html
   */
  public toDeleteConnectorProfile() {
    this.add('appflow:DeleteConnectorProfile');
    return this;
  }

  /**
   * Grants permission to delete an Amazon AppFlow flow
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DeleteFlow.html
   */
  public toDeleteFlow() {
    this.add('appflow:DeleteFlow');
    return this;
  }

  /**
   * Grants permission to describe all fields for an object in a login profile configured in Amazon AppFlow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectorEntity.html
   */
  public toDescribeConnectorEntity() {
    this.add('appflow:DescribeConnectorEntity');
    return this;
  }

  /**
   * Grants permission to describe all fields for an object in a login profile configured in Amazon AppFlow (Console Only)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   */
  public toDescribeConnectorFields() {
    this.add('appflow:DescribeConnectorFields');
    return this;
  }

  /**
   * Grants permission to describe all login profiles configured in Amazon AppFlow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectorProfiles.html
   */
  public toDescribeConnectorProfiles() {
    this.add('appflow:DescribeConnectorProfiles');
    return this;
  }

  /**
   * Grants permission to describe all connectors supported by Amazon AppFlow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectors.html
   */
  public toDescribeConnectors() {
    this.add('appflow:DescribeConnectors');
    return this;
  }

  /**
   * Grants permission to describe a specific flow configured in Amazon AppFlow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeFlow.html
   */
  public toDescribeFlow() {
    this.add('appflow:DescribeFlow');
    return this;
  }

  /**
   * Grants permission to describe all flow executions for a flow configured in Amazon AppFlow (Console Only)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   */
  public toDescribeFlowExecution() {
    this.add('appflow:DescribeFlowExecution');
    return this;
  }

  /**
   * Grants permission to describe all flow executions for a flow configured in Amazon AppFlow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeFlowExecutionRecords.html
   */
  public toDescribeFlowExecutionRecords() {
    this.add('appflow:DescribeFlowExecutionRecords');
    return this;
  }

  /**
   * Grants permission to describe all flows configured in Amazon AppFlow (Console Only)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   */
  public toDescribeFlows() {
    this.add('appflow:DescribeFlows');
    return this;
  }

  /**
   * Grants permission to list all objects for a login profile configured in Amazon AppFlow
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListConnectorEntities.html
   */
  public toListConnectorEntities() {
    this.add('appflow:ListConnectorEntities');
    return this;
  }

  /**
   * Grants permission to list all objects for a login profile configured in Amazon AppFlow (Console Only)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   */
  public toListConnectorFields() {
    this.add('appflow:ListConnectorFields');
    return this;
  }

  /**
   * Grants permission to list all flows configured in Amazon AppFlow
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListFlows.html
   */
  public toListFlows() {
    this.add('appflow:ListFlows');
    return this;
  }

  /**
   * Grants permission to list tags for a flow
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('appflow:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to run a flow configured in Amazon AppFlow (Console Only)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   */
  public toRunFlow() {
    this.add('appflow:RunFlow');
    return this;
  }

  /**
   * Grants permission to activate (for scheduled and event-triggered flows) or run (for on-demand flows) a flow configured in Amazon AppFlow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_StartFlow.html
   */
  public toStartFlow() {
    this.add('appflow:StartFlow');
    return this;
  }

  /**
   * Grants permission to deactivate a scheduled or event-triggered flow configured in Amazon AppFlow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_StopFlow.html
   */
  public toStopFlow() {
    this.add('appflow:StopFlow');
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
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_TagResource.html
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
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('appflow:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a login profile configured in Amazon AppFlow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UpdateConnectorProfile.html
   */
  public toUpdateConnectorProfile() {
    this.add('appflow:UpdateConnectorProfile');
    return this;
  }

  /**
   * Grants permission to update a flow configured in Amazon AppFlow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UpdateFlow.html
   */
  public toUpdateFlow() {
    this.add('appflow:UpdateFlow');
    return this;
  }

  /**
   * Adds a resource of type connectorprofile to the statement
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ConnectorProfile.html
   *
   * @param profileName - Identifier for the profileName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onConnectorprofile(profileName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appflow:${Region}:${Account}:connectorprofile/${ProfileName}';
    arn = arn.replace('${ProfileName}', profileName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type flow to the statement
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_FlowDefinition.html
   *
   * @param flowName - Identifier for the flowName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFlow(flowName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appflow:${Region}:${Account}:flow/${FlowName}';
    arn = arn.replace('${FlowName}', flowName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
