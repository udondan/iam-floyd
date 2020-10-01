import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [cloudformation](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudformation.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cloudformation extends PolicyStatement {
  public servicePrefix = 'cloudformation';
  protected actionList: Actions = {
    "CancelUpdateStack": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CancelUpdateStack.html",
      "description": "Cancels an update on the specified stack.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      }
    },
    "ContinueUpdateRollback": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ContinueUpdateRollback.html",
      "description": "For a specified stack that is in the UPDATE_ROLLBACK_FAILED state, continues rolling it back to the UPDATE_ROLLBACK_COMPLETE state.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      },
      "conditions": [
        "cloudformation:RoleArn"
      ]
    },
    "CreateChangeSet": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html",
      "description": "Creates a list of changes for a stack.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      },
      "conditions": [
        "cloudformation:ChangeSetName",
        "cloudformation:ResourceTypes",
        "cloudformation:ImportResourceTypes",
        "cloudformation:RoleArn",
        "cloudformation:StackPolicyUrl",
        "cloudformation:TemplateUrl",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateStack": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStack.html",
      "description": "Creates a stack as specified in the template.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      },
      "conditions": [
        "cloudformation:ResourceTypes",
        "cloudformation:RoleArn",
        "cloudformation:StackPolicyUrl",
        "cloudformation:TemplateUrl",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateStackInstances": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html",
      "description": "Creates stack instances for the specified accounts, within the specified regions.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stackset": {
          "required": true
        }
      }
    },
    "CreateStackSet": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackSet.html",
      "description": "Creates a stackset as specified in the template.",
      "accessLevel": "Write",
      "conditions": [
        "cloudformation:RoleArn",
        "cloudformation:TemplateUrl",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateUploadBucket": {
      "url": "",
      "description": "",
      "accessLevel": "Write"
    },
    "DeleteChangeSet": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteChangeSet.html",
      "description": "Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      },
      "conditions": [
        "cloudformation:ChangeSetName"
      ]
    },
    "DeleteStack": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStack.html",
      "description": "Deletes a specified stack.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      },
      "conditions": [
        "cloudformation:RoleArn"
      ]
    },
    "DeleteStackInstances": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackInstances.html",
      "description": "Deletes stack instances for the specified accounts, in the specified regions.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stackset": {
          "required": true
        }
      }
    },
    "DeleteStackSet": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackSet.html",
      "description": "Deletes a specified stackset.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stackset": {
          "required": true
        }
      }
    },
    "DeregisterType": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeregisterType.html",
      "description": "Deregisters an existing CloudFormation type or type version",
      "accessLevel": "Write"
    },
    "DescribeAccountLimits": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeAccountLimits.html",
      "description": "Retrieves your account's AWS CloudFormation limits.",
      "accessLevel": "Read"
    },
    "DescribeChangeSet": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeChangeSet.html",
      "description": "Returns the description for the specified change set.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      },
      "conditions": [
        "cloudformation:ChangeSetName"
      ]
    },
    "DescribeStackDriftDetectionStatus": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackDriftDetectionStatus.html",
      "description": "Returns information about a stack drift detection operation.",
      "accessLevel": "Read"
    },
    "DescribeStackEvents": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackEvents.html",
      "description": "Returns all stack related events for a specified stack.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      }
    },
    "DescribeStackInstance": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackInstance.html",
      "description": "Returns the stack instance that's associated with the specified stack set, AWS account, and region.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stackset": {
          "required": true
        }
      }
    },
    "DescribeStackResource": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResource.html",
      "description": "Returns a description of the specified resource in the specified stack.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      }
    },
    "DescribeStackResourceDrifts": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResourceDrifts.html",
      "description": "Returns drift information for the resources that have been checked for drift in the specified stack.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      }
    },
    "DescribeStackResources": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResources.html",
      "description": "Returns AWS resource descriptions for running and deleted stacks.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      }
    },
    "DescribeStackSet": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSet.html",
      "description": "Returns the description of the specified stack set.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stackset": {
          "required": true
        }
      }
    },
    "DescribeStackSetOperation": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSetOperation.html",
      "description": "Returns the description of the specified stack set operation.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stackset": {
          "required": true
        }
      }
    },
    "DescribeStacks": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStacks.html",
      "description": "Returns the description for the specified stack.",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      }
    },
    "DescribeType": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html",
      "description": "Returns information about the CloudFormation type requested",
      "accessLevel": "Read"
    },
    "DescribeTypeRegistration": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeTypeRegistration.html",
      "description": "Returns information about the registration process for a CloudFormation type",
      "accessLevel": "Read"
    },
    "DetectStackDrift": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackDrift.html",
      "description": "Detects whether a stack's actual configuration differs, or has drifted, from it's expected configuration, as defined in the stack template and any values specified as template parameters.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      }
    },
    "DetectStackResourceDrift": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackResourceDrift.html",
      "description": "Returns information about whether a resource's actual configuration differs, or has drifted, from it's expected configuration, as defined in the stack template and any values specified as template parameters.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      }
    },
    "DetectStackSetDrift": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackSetDrift.html",
      "description": "Enables users to detect drift on a stack set and the stack instances that belong to that stack set.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stackset": {
          "required": true
        }
      }
    },
    "EstimateTemplateCost": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_EstimateTemplateCost.html",
      "description": "Returns the estimated monthly cost of a template.",
      "accessLevel": "Read"
    },
    "ExecuteChangeSet": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html",
      "description": "Updates a stack using the input information that was provided when the specified change set was created.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      },
      "conditions": [
        "cloudformation:ChangeSetName"
      ]
    },
    "GetStackPolicy": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetStackPolicy.html",
      "description": "Returns the stack policy for a specified stack.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      }
    },
    "GetTemplate": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplate.html",
      "description": "Returns the template body for a specified stack.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      }
    },
    "GetTemplateSummary": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplateSummary.html",
      "description": "Returns information about a new or existing template.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stack": {
          "required": false
        },
        "stackset": {
          "required": false
        }
      }
    },
    "ListChangeSets": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListChangeSets.html",
      "description": "Returns the ID and status of each active change set for a stack. For example, AWS CloudFormation lists change sets that are in the CREATE_IN_PROGRESS or CREATE_PENDING state.",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      }
    },
    "ListExports": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListExports.html",
      "description": "Lists all exported output values in the account and region in which you call this action.",
      "accessLevel": "List"
    },
    "ListImports": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListImports.html",
      "description": "Lists all stacks that are importing an exported output value.",
      "accessLevel": "List"
    },
    "ListStackInstances": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSets.html",
      "description": "Returns summary information about stack instances that are associated with the specified stack set.",
      "accessLevel": "List",
      "resourceTypes": {
        "stackset": {
          "required": true
        }
      }
    },
    "ListStackResources": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackResources.html",
      "description": "Returns descriptions of all resources of the specified stack.",
      "accessLevel": "List",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      }
    },
    "ListStackSetOperationResults": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperationResults.html",
      "description": "Returns summary information about the results of a stack set operation.",
      "accessLevel": "List",
      "resourceTypes": {
        "stackset": {
          "required": true
        }
      }
    },
    "ListStackSetOperations": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperations.html",
      "description": "Returns summary information about operations performed on a stack set.",
      "accessLevel": "List",
      "resourceTypes": {
        "stackset": {
          "required": true
        }
      }
    },
    "ListStackSets": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSets.html",
      "description": "Returns summary information about stack sets that are associated with the user.",
      "accessLevel": "List",
      "resourceTypes": {
        "stackset": {
          "required": true
        }
      }
    },
    "ListStacks": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStacks.html",
      "description": "Returns the summary information for stacks whose status matches the specified StackStatusFilter.",
      "accessLevel": "List"
    },
    "ListTypeRegistrations": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeRegistrations.html",
      "description": "Lists CloudFormation type registration attempts",
      "accessLevel": "List"
    },
    "ListTypeVersions": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeVersions.html",
      "description": "Lists versions of a particular CloudFormation type",
      "accessLevel": "List"
    },
    "ListTypes": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypes.html",
      "description": "Lists available CloudFormation types",
      "accessLevel": "List"
    },
    "RegisterType": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html",
      "description": "Registers a new CloudFormation type",
      "accessLevel": "Write"
    },
    "SetStackPolicy": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetStackPolicy.html",
      "description": "Sets a stack policy for a specified stack.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      },
      "conditions": [
        "cloudformation:StackPolicyUrl"
      ]
    },
    "SetTypeDefaultVersion": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeDefaultVersion.html",
      "description": "Sets which version of a CloudFormation type applies to CloudFormation operations",
      "accessLevel": "Write"
    },
    "SignalResource": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SignalResource.html",
      "description": "Sends a signal to the specified resource with a success or failure status.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      }
    },
    "StopStackSetOperation": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_StopStackSetOperation.html",
      "description": "Stops an in-progress operation on a stack set and its associated stack instances.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stackset": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "",
      "description": "Tagging cloudformation resources.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "stack": {
          "required": false
        },
        "stackset": {
          "required": false
        }
      }
    },
    "UntagResource": {
      "url": "",
      "description": "Untagging cloudformation resources.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "stack": {
          "required": false
        },
        "stackset": {
          "required": false
        }
      }
    },
    "UpdateStack": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStack.html",
      "description": "Updates a stack as specified in the template.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      },
      "conditions": [
        "cloudformation:ResourceTypes",
        "cloudformation:RoleArn",
        "cloudformation:StackPolicyUrl",
        "cloudformation:TemplateUrl",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateStackInstances": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackInstances.html",
      "description": "Updates the parameter values for stack instances for the specified accounts, within the specified regions.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stackset": {
          "required": true
        }
      }
    },
    "UpdateStackSet": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html",
      "description": "Updates a stackset as specified in the template.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stackset": {
          "required": true
        }
      },
      "conditions": [
        "cloudformation:RoleArn",
        "cloudformation:TemplateUrl",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateTerminationProtection": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateTerminationProtection.html",
      "description": "Updates termination protection for the specified stack.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stack": {
          "required": true
        }
      }
    },
    "ValidateTemplate": {
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ValidateTemplate.html",
      "description": "Validates a specified template.",
      "accessLevel": "Read"
    }
  };
  protected resourceTypes: ResourceTypes = {
    "stack": {
      "name": "stack",
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-whatis-concepts.html#w2ab1b5c15b9",
      "arn": "arn:${Partition}:cloudformation:${Region}:${Account}:stack/${StackName}/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "stackset": {
      "name": "stackset",
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stacksets-concepts-stackset",
      "arn": "arn:${Partition}:cloudformation:${Region}:${Account}:stackset/${StackSetName}:${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "changeset": {
      "name": "changeset",
      "url": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-whatis-concepts.html#w2ab1b5c15c11",
      "arn": "arn:${Partition}:cloudformation:${Region}:${Account}:changeSet/${ChangeSetName}:${Id}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [cloudformation](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudformation.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Cancels an update on the specified stack.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CancelUpdateStack.html
   */
  public toCancelUpdateStack() {
    this.to('cloudformation:CancelUpdateStack');
    return this;
  }

  /**
   * For a specified stack that is in the UPDATE_ROLLBACK_FAILED state, continues rolling it back to the UPDATE_ROLLBACK_COMPLETE state.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRoleArn()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ContinueUpdateRollback.html
   */
  public toContinueUpdateRollback() {
    this.to('cloudformation:ContinueUpdateRollback');
    return this;
  }

  /**
   * Creates a list of changes for a stack.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifChangeSetName()
   * - .ifResourceTypes()
   * - .ifImportResourceTypes()
   * - .ifRoleArn()
   * - .ifStackPolicyUrl()
   * - .ifTemplateUrl()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html
   */
  public toCreateChangeSet() {
    this.to('cloudformation:CreateChangeSet');
    return this;
  }

  /**
   * Creates a stack as specified in the template.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifResourceTypes()
   * - .ifRoleArn()
   * - .ifStackPolicyUrl()
   * - .ifTemplateUrl()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStack.html
   */
  public toCreateStack() {
    this.to('cloudformation:CreateStack');
    return this;
  }

  /**
   * Creates stack instances for the specified accounts, within the specified regions.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html
   */
  public toCreateStackInstances() {
    this.to('cloudformation:CreateStackInstances');
    return this;
  }

  /**
   * Creates a stackset as specified in the template.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRoleArn()
   * - .ifTemplateUrl()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackSet.html
   */
  public toCreateStackSet() {
    this.to('cloudformation:CreateStackSet');
    return this;
  }

  /**
   *
   *
   * Access Level: Write
   */
  public toCreateUploadBucket() {
    this.to('cloudformation:CreateUploadBucket');
    return this;
  }

  /**
   * Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifChangeSetName()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteChangeSet.html
   */
  public toDeleteChangeSet() {
    this.to('cloudformation:DeleteChangeSet');
    return this;
  }

  /**
   * Deletes a specified stack.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRoleArn()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStack.html
   */
  public toDeleteStack() {
    this.to('cloudformation:DeleteStack');
    return this;
  }

  /**
   * Deletes stack instances for the specified accounts, in the specified regions.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackInstances.html
   */
  public toDeleteStackInstances() {
    this.to('cloudformation:DeleteStackInstances');
    return this;
  }

  /**
   * Deletes a specified stackset.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackSet.html
   */
  public toDeleteStackSet() {
    this.to('cloudformation:DeleteStackSet');
    return this;
  }

  /**
   * Deregisters an existing CloudFormation type or type version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeregisterType.html
   */
  public toDeregisterType() {
    this.to('cloudformation:DeregisterType');
    return this;
  }

  /**
   * Retrieves your account's AWS CloudFormation limits.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeAccountLimits.html
   */
  public toDescribeAccountLimits() {
    this.to('cloudformation:DescribeAccountLimits');
    return this;
  }

  /**
   * Returns the description for the specified change set.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifChangeSetName()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeChangeSet.html
   */
  public toDescribeChangeSet() {
    this.to('cloudformation:DescribeChangeSet');
    return this;
  }

  /**
   * Returns information about a stack drift detection operation.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackDriftDetectionStatus.html
   */
  public toDescribeStackDriftDetectionStatus() {
    this.to('cloudformation:DescribeStackDriftDetectionStatus');
    return this;
  }

  /**
   * Returns all stack related events for a specified stack.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackEvents.html
   */
  public toDescribeStackEvents() {
    this.to('cloudformation:DescribeStackEvents');
    return this;
  }

  /**
   * Returns the stack instance that's associated with the specified stack set, AWS account, and region.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackInstance.html
   */
  public toDescribeStackInstance() {
    this.to('cloudformation:DescribeStackInstance');
    return this;
  }

  /**
   * Returns a description of the specified resource in the specified stack.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResource.html
   */
  public toDescribeStackResource() {
    this.to('cloudformation:DescribeStackResource');
    return this;
  }

  /**
   * Returns drift information for the resources that have been checked for drift in the specified stack.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResourceDrifts.html
   */
  public toDescribeStackResourceDrifts() {
    this.to('cloudformation:DescribeStackResourceDrifts');
    return this;
  }

  /**
   * Returns AWS resource descriptions for running and deleted stacks.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResources.html
   */
  public toDescribeStackResources() {
    this.to('cloudformation:DescribeStackResources');
    return this;
  }

  /**
   * Returns the description of the specified stack set.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSet.html
   */
  public toDescribeStackSet() {
    this.to('cloudformation:DescribeStackSet');
    return this;
  }

  /**
   * Returns the description of the specified stack set operation.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSetOperation.html
   */
  public toDescribeStackSetOperation() {
    this.to('cloudformation:DescribeStackSetOperation');
    return this;
  }

  /**
   * Returns the description for the specified stack.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStacks.html
   */
  public toDescribeStacks() {
    this.to('cloudformation:DescribeStacks');
    return this;
  }

  /**
   * Returns information about the CloudFormation type requested
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html
   */
  public toDescribeType() {
    this.to('cloudformation:DescribeType');
    return this;
  }

  /**
   * Returns information about the registration process for a CloudFormation type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeTypeRegistration.html
   */
  public toDescribeTypeRegistration() {
    this.to('cloudformation:DescribeTypeRegistration');
    return this;
  }

  /**
   * Detects whether a stack's actual configuration differs, or has drifted, from it's expected configuration, as defined in the stack template and any values specified as template parameters.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackDrift.html
   */
  public toDetectStackDrift() {
    this.to('cloudformation:DetectStackDrift');
    return this;
  }

  /**
   * Returns information about whether a resource's actual configuration differs, or has drifted, from it's expected configuration, as defined in the stack template and any values specified as template parameters.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackResourceDrift.html
   */
  public toDetectStackResourceDrift() {
    this.to('cloudformation:DetectStackResourceDrift');
    return this;
  }

  /**
   * Enables users to detect drift on a stack set and the stack instances that belong to that stack set.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackSetDrift.html
   */
  public toDetectStackSetDrift() {
    this.to('cloudformation:DetectStackSetDrift');
    return this;
  }

  /**
   * Returns the estimated monthly cost of a template.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_EstimateTemplateCost.html
   */
  public toEstimateTemplateCost() {
    this.to('cloudformation:EstimateTemplateCost');
    return this;
  }

  /**
   * Updates a stack using the input information that was provided when the specified change set was created.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifChangeSetName()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html
   */
  public toExecuteChangeSet() {
    this.to('cloudformation:ExecuteChangeSet');
    return this;
  }

  /**
   * Returns the stack policy for a specified stack.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetStackPolicy.html
   */
  public toGetStackPolicy() {
    this.to('cloudformation:GetStackPolicy');
    return this;
  }

  /**
   * Returns the template body for a specified stack.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplate.html
   */
  public toGetTemplate() {
    this.to('cloudformation:GetTemplate');
    return this;
  }

  /**
   * Returns information about a new or existing template.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplateSummary.html
   */
  public toGetTemplateSummary() {
    this.to('cloudformation:GetTemplateSummary');
    return this;
  }

  /**
   * Returns the ID and status of each active change set for a stack. For example, AWS CloudFormation lists change sets that are in the CREATE_IN_PROGRESS or CREATE_PENDING state.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListChangeSets.html
   */
  public toListChangeSets() {
    this.to('cloudformation:ListChangeSets');
    return this;
  }

  /**
   * Lists all exported output values in the account and region in which you call this action.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListExports.html
   */
  public toListExports() {
    this.to('cloudformation:ListExports');
    return this;
  }

  /**
   * Lists all stacks that are importing an exported output value.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListImports.html
   */
  public toListImports() {
    this.to('cloudformation:ListImports');
    return this;
  }

  /**
   * Returns summary information about stack instances that are associated with the specified stack set.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSets.html
   */
  public toListStackInstances() {
    this.to('cloudformation:ListStackInstances');
    return this;
  }

  /**
   * Returns descriptions of all resources of the specified stack.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackResources.html
   */
  public toListStackResources() {
    this.to('cloudformation:ListStackResources');
    return this;
  }

  /**
   * Returns summary information about the results of a stack set operation.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperationResults.html
   */
  public toListStackSetOperationResults() {
    this.to('cloudformation:ListStackSetOperationResults');
    return this;
  }

  /**
   * Returns summary information about operations performed on a stack set.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperations.html
   */
  public toListStackSetOperations() {
    this.to('cloudformation:ListStackSetOperations');
    return this;
  }

  /**
   * Returns summary information about stack sets that are associated with the user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSets.html
   */
  public toListStackSets() {
    this.to('cloudformation:ListStackSets');
    return this;
  }

  /**
   * Returns the summary information for stacks whose status matches the specified StackStatusFilter.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStacks.html
   */
  public toListStacks() {
    this.to('cloudformation:ListStacks');
    return this;
  }

  /**
   * Lists CloudFormation type registration attempts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeRegistrations.html
   */
  public toListTypeRegistrations() {
    this.to('cloudformation:ListTypeRegistrations');
    return this;
  }

  /**
   * Lists versions of a particular CloudFormation type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeVersions.html
   */
  public toListTypeVersions() {
    this.to('cloudformation:ListTypeVersions');
    return this;
  }

  /**
   * Lists available CloudFormation types
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypes.html
   */
  public toListTypes() {
    this.to('cloudformation:ListTypes');
    return this;
  }

  /**
   * Registers a new CloudFormation type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html
   */
  public toRegisterType() {
    this.to('cloudformation:RegisterType');
    return this;
  }

  /**
   * Sets a stack policy for a specified stack.
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifStackPolicyUrl()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetStackPolicy.html
   */
  public toSetStackPolicy() {
    this.to('cloudformation:SetStackPolicy');
    return this;
  }

  /**
   * Sets which version of a CloudFormation type applies to CloudFormation operations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeDefaultVersion.html
   */
  public toSetTypeDefaultVersion() {
    this.to('cloudformation:SetTypeDefaultVersion');
    return this;
  }

  /**
   * Sends a signal to the specified resource with a success or failure status.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SignalResource.html
   */
  public toSignalResource() {
    this.to('cloudformation:SignalResource');
    return this;
  }

  /**
   * Stops an in-progress operation on a stack set and its associated stack instances.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_StopStackSetOperation.html
   */
  public toStopStackSetOperation() {
    this.to('cloudformation:StopStackSetOperation');
    return this;
  }

  /**
   * Tagging cloudformation resources.
   *
   * Access Level: Tagging
   */
  public toTagResource() {
    this.to('cloudformation:TagResource');
    return this;
  }

  /**
   * Untagging cloudformation resources.
   *
   * Access Level: Tagging
   */
  public toUntagResource() {
    this.to('cloudformation:UntagResource');
    return this;
  }

  /**
   * Updates a stack as specified in the template.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifResourceTypes()
   * - .ifRoleArn()
   * - .ifStackPolicyUrl()
   * - .ifTemplateUrl()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStack.html
   */
  public toUpdateStack() {
    this.to('cloudformation:UpdateStack');
    return this;
  }

  /**
   * Updates the parameter values for stack instances for the specified accounts, within the specified regions.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackInstances.html
   */
  public toUpdateStackInstances() {
    this.to('cloudformation:UpdateStackInstances');
    return this;
  }

  /**
   * Updates a stackset as specified in the template.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRoleArn()
   * - .ifTemplateUrl()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html
   */
  public toUpdateStackSet() {
    this.to('cloudformation:UpdateStackSet');
    return this;
  }

  /**
   * Updates termination protection for the specified stack.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateTerminationProtection.html
   */
  public toUpdateTerminationProtection() {
    this.to('cloudformation:UpdateTerminationProtection');
    return this;
  }

  /**
   * Validates a specified template.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ValidateTemplate.html
   */
  public toValidateTemplate() {
    this.to('cloudformation:ValidateTemplate');
    return this;
  }

  /**
   * Adds a resource of type stack to the statement
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-whatis-concepts.html#w2ab1b5c15b9
   *
   * @param stackName - Identifier for the stackName.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStack(stackName: string, id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudformation:${Region}:${Account}:stack/${StackName}/${Id}';
    arn = arn.replace('${StackName}', stackName);
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type stackset to the statement
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stacksets-concepts-stackset
   *
   * @param stackSetName - Identifier for the stackSetName.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStackset(stackSetName: string, id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudformation:${Region}:${Account}:stackset/${StackSetName}:${Id}';
    arn = arn.replace('${StackSetName}', stackSetName);
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type changeset to the statement
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-whatis-concepts.html#w2ab1b5c15c11
   *
   * @param changeSetName - Identifier for the changeSetName.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onChangeset(changeSetName: string, id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudformation:${Region}:${Account}:changeSet/${ChangeSetName}:${Id}';
    arn = arn.replace('${ChangeSetName}', changeSetName);
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * An AWS CloudFormation change set name. Use to control which change sets IAM users can execute or delete.
   *
   * Applies to actions:
   * - .toCreateChangeSet()
   * - .toDeleteChangeSet()
   * - .toDescribeChangeSet()
   * - .toExecuteChangeSet()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifChangeSetName(value: string | string[], operator?: string) {
    return this.if(`cloudformation:ChangeSetName`, value, operator || 'StringLike');
  }

  /**
   * The template resource types, such as `AWS::EC2::Instance`. Use to control which resource types IAM users can work with when they want to import a resource into a stack.
   *
   * Applies to actions:
   * - .toCreateChangeSet()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifImportResourceTypes(value: string | string[], operator?: string) {
    return this.if(`cloudformation:ImportResourceTypes`, value, operator || 'StringLike');
  }

  /**
   * The template resource types, such as `AWS::EC2::Instance`. Use to control which resource types IAM users can work with when they create or update a stack.
   *
   * Applies to actions:
   * - .toCreateChangeSet()
   * - .toCreateStack()
   * - .toUpdateStack()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTypes(value: string | string[], operator?: string) {
    return this.if(`cloudformation:ResourceTypes`, value, operator || 'StringLike');
  }

  /**
   * The ARN of an IAM service role. Use to control which service role IAM users can use to work with stacks or change sets.
   *
   * Applies to actions:
   * - .toContinueUpdateRollback()
   * - .toCreateChangeSet()
   * - .toCreateStack()
   * - .toCreateStackSet()
   * - .toDeleteStack()
   * - .toUpdateStack()
   * - .toUpdateStackSet()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifRoleArn(value: string | string[], operator?: string) {
    return this.if(`cloudformation:RoleArn`, value, operator || 'ArnEquals');
  }

  /**
   * An Amazon S3 stack policy URL. Use to control which stack policies IAM users can associate with a stack during a create or update stack action.
   *
   * Applies to actions:
   * - .toCreateChangeSet()
   * - .toCreateStack()
   * - .toSetStackPolicy()
   * - .toUpdateStack()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifStackPolicyUrl(value: string | string[], operator?: string) {
    return this.if(`cloudformation:StackPolicyUrl`, value, operator || 'StringLike');
  }

  /**
   * An Amazon S3 template URL. Use to control which templates IAM users can use when they create or update stacks.
   *
   * Applies to actions:
   * - .toCreateChangeSet()
   * - .toCreateStack()
   * - .toCreateStackSet()
   * - .toUpdateStack()
   * - .toUpdateStackSet()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTemplateUrl(value: string | string[], operator?: string) {
    return this.if(`cloudformation:TemplateUrl`, value, operator || 'StringLike');
  }
}
