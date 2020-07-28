import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [iotthingsgraph](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotthingsgraph.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iotthingsgraph extends PolicyStatement {
  public servicePrefix = 'iotthingsgraph';
  protected actionList: Actions = {
    "AssociateEntityToThing": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_AssociateEntityToThing.html",
      "description": "Associates a device with a concrete thing that is in the user's registry. A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.",
      "accessLevel": "Write",
      "dependentActions": [
        "iot:DescribeThing",
        "iot:DescribeThingGroup"
      ]
    },
    "CreateFlowTemplate": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_CreateFlowTemplate.html",
      "description": "Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.",
      "accessLevel": "Write"
    },
    "CreateSystemInstance": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_CreateSystemInstance.html",
      "description": "Creates an instance of a system with specified configurations and Things.",
      "accessLevel": "Tagging",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateSystemTemplate": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_CreateSystemTemplate.html",
      "description": "Creates a system. The system is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.",
      "accessLevel": "Write"
    },
    "DeleteFlowTemplate": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeleteFlowTemplate.html",
      "description": "Deletes a workflow. Any new system or system instance that contains this workflow will fail to update or deploy. Existing system instances that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deploying the system instance).",
      "accessLevel": "Write",
      "resourceTypes": {
        "Workflow": {
          "required": true
        }
      }
    },
    "DeleteNamespace": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeleteNamespace.html",
      "description": "Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows in the namespace before performing this action.",
      "accessLevel": "Write"
    },
    "DeleteSystemInstance": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeleteSystemInstance.html",
      "description": "Deletes a system instance. Only instances that have never been deployed, or that have been undeployed from the target can be deleted. Users can create a new system instance that has the same ID as a deleted system instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "SystemInstance": {
          "required": true
        }
      }
    },
    "DeleteSystemTemplate": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeleteSystemTemplate.html",
      "description": "Deletes a system. New system instances can't contain the system after its deletion. Existing system instances that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.",
      "accessLevel": "Write",
      "resourceTypes": {
        "System": {
          "required": true
        }
      }
    },
    "DeploySystemInstance": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeploySystemInstance.html",
      "description": "Deploys the system instance to the target specified in CreateSystemInstance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "SystemInstance": {
          "required": true
        }
      }
    },
    "DeprecateFlowTemplate": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeprecateFlowTemplate.html",
      "description": "Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing system instances that use the flow will continue to run.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Workflow": {
          "required": true
        }
      }
    },
    "DeprecateSystemTemplate": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeprecateSystemTemplate.html",
      "description": "Deprecates the specified system.",
      "accessLevel": "Write",
      "resourceTypes": {
        "System": {
          "required": true
        }
      }
    },
    "DescribeNamespace": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DescribeNamespace.html",
      "description": "Gets the latest version of the user's namespace and the public version that it is tracking.",
      "accessLevel": "Read"
    },
    "DissociateEntityFromThing": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DissociateEntityFromThing.html",
      "description": "Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only one entity of a particular type can be associated with a thing.",
      "accessLevel": "Write",
      "dependentActions": [
        "iot:DescribeThing",
        "iot:DescribeThingGroup"
      ]
    },
    "GetEntities": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetEntities.html",
      "description": "Gets descriptions of the specified entities. Uses the latest version of the user's namespace by default.",
      "accessLevel": "Read"
    },
    "GetFlowTemplate": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetFlowTemplate.html",
      "description": "Gets the latest version of the DefinitionDocument and FlowTemplateSummary for the specified workflow.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Workflow": {
          "required": true
        }
      }
    },
    "GetFlowTemplateRevisions": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetFlowTemplateRevisions.html",
      "description": "Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated, this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Workflow": {
          "required": true
        }
      }
    },
    "GetNamespaceDeletionStatus": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetNamespaceDeletionStatus.html",
      "description": "Gets the status of a namespace deletion task.",
      "accessLevel": "Read"
    },
    "GetSystemInstance": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetSystemInstance.html",
      "description": "Gets a system instance.",
      "accessLevel": "Read",
      "resourceTypes": {
        "SystemInstance": {
          "required": true
        }
      }
    },
    "GetSystemTemplate": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetSystemTemplate.html",
      "description": "Gets a system.",
      "accessLevel": "Read",
      "resourceTypes": {
        "System": {
          "required": true
        }
      }
    },
    "GetSystemTemplateRevisions": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetSystemTemplateRevisions.html",
      "description": "Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return the revisions that occurred before its deprecation. This action won't work with systems that have been deleted.",
      "accessLevel": "Read",
      "resourceTypes": {
        "System": {
          "required": true
        }
      }
    },
    "GetUploadStatus": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetUploadStatus.html",
      "description": "Gets the status of the specified upload.",
      "accessLevel": "Read"
    },
    "ListFlowExecutionMessages": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_ListFlowExecutionMessages.html",
      "description": "Lists details of a single workflow execution",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_ListTagsForResource.html",
      "description": "Lists all tags for a given resource",
      "accessLevel": "List",
      "resourceTypes": {
        "SystemInstance": {
          "required": false
        }
      }
    },
    "SearchEntities": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_SearchEntities.html",
      "description": "Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.",
      "accessLevel": "Read"
    },
    "SearchFlowExecutions": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_SearchFlowExecutions.html",
      "description": "Searches for workflow executions of a system instance",
      "accessLevel": "Read",
      "resourceTypes": {
        "SystemInstance": {
          "required": true
        }
      }
    },
    "SearchFlowTemplates": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_SearchFlowTemplates.html",
      "description": "Searches for summary information about workflows.",
      "accessLevel": "Read"
    },
    "SearchSystemInstances": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_SearchSystemInstances.html",
      "description": "Searches for system instances in the user's account.",
      "accessLevel": "Read"
    },
    "SearchSystemTemplates": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_SearchSystemTemplates.html",
      "description": "Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.",
      "accessLevel": "Read"
    },
    "SearchThings": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_SearchThings.html",
      "description": "Searches for things associated with the specified entity. You can search by both device and device model.",
      "accessLevel": "Read"
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_TagResource.html",
      "description": "Tag a specified resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "SystemInstance": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UndeploySystemInstance": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_UndeploySystemInstance.html",
      "description": "Removes the system instance and associated triggers from the target.",
      "accessLevel": "Write",
      "resourceTypes": {
        "SystemInstance": {
          "required": true
        }
      }
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_UntagResource.html",
      "description": "Untag a specified resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "SystemInstance": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateFlowTemplate": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_UpdateFlowTemplate.html",
      "description": "Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. The workflow can contain only entities in the specified namespace.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Workflow": {
          "required": true
        }
      }
    },
    "UpdateSystemTemplate": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_UpdateSystemTemplate.html",
      "description": "Updates the specified system. You don't need to run this action after updating a workflow. Any system instance that uses the system will see the changes in the system when it is redeployed.",
      "accessLevel": "Write",
      "resourceTypes": {
        "System": {
          "required": true
        }
      }
    },
    "UploadEntityDefinitions": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_UploadEntityDefinitions.html",
      "description": "Asynchronously uploads one or more entity definitions to the user's namespace.",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {
    "Workflow": {
      "name": "Workflow",
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-models-tdm-iot-workflow.html",
      "arn": "arn:${Partition}:iotthingsgraph:${Region}:${Account}:Workflow/${NamespacePath}",
      "conditionKeys": []
    },
    "System": {
      "name": "System",
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-models-tdm-iot-system.html",
      "arn": "arn:${Partition}:iotthingsgraph:${Region}:${Account}:System/${NamespacePath}",
      "conditionKeys": []
    },
    "SystemInstance": {
      "name": "SystemInstance",
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-models-tdm-iot-sdc-deployconfig.html",
      "arn": "arn:${Partition}:iotthingsgraph:${Region}:${Account}:Deployment/${NamespacePath}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [iotthingsgraph](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotthingsgraph.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Associates a device with a concrete thing that is in the user's registry. A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iot:DescribeThing
   * - iot:DescribeThingGroup
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_AssociateEntityToThing.html
   */
  public associateEntityToThing() {
    this.add('iotthingsgraph:AssociateEntityToThing');
    return this;
  }

  /**
   * Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_CreateFlowTemplate.html
   */
  public createFlowTemplate() {
    this.add('iotthingsgraph:CreateFlowTemplate');
    return this;
  }

  /**
   * Creates an instance of a system with specified configurations and Things.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_CreateSystemInstance.html
   */
  public createSystemInstance() {
    this.add('iotthingsgraph:CreateSystemInstance');
    return this;
  }

  /**
   * Creates a system. The system is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_CreateSystemTemplate.html
   */
  public createSystemTemplate() {
    this.add('iotthingsgraph:CreateSystemTemplate');
    return this;
  }

  /**
   * Deletes a workflow. Any new system or system instance that contains this workflow will fail to update or deploy. Existing system instances that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deploying the system instance).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeleteFlowTemplate.html
   */
  public deleteFlowTemplate() {
    this.add('iotthingsgraph:DeleteFlowTemplate');
    return this;
  }

  /**
   * Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows in the namespace before performing this action.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeleteNamespace.html
   */
  public deleteNamespace() {
    this.add('iotthingsgraph:DeleteNamespace');
    return this;
  }

  /**
   * Deletes a system instance. Only instances that have never been deployed, or that have been undeployed from the target can be deleted. Users can create a new system instance that has the same ID as a deleted system instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeleteSystemInstance.html
   */
  public deleteSystemInstance() {
    this.add('iotthingsgraph:DeleteSystemInstance');
    return this;
  }

  /**
   * Deletes a system. New system instances can't contain the system after its deletion. Existing system instances that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeleteSystemTemplate.html
   */
  public deleteSystemTemplate() {
    this.add('iotthingsgraph:DeleteSystemTemplate');
    return this;
  }

  /**
   * Deploys the system instance to the target specified in CreateSystemInstance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeploySystemInstance.html
   */
  public deploySystemInstance() {
    this.add('iotthingsgraph:DeploySystemInstance');
    return this;
  }

  /**
   * Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing system instances that use the flow will continue to run.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeprecateFlowTemplate.html
   */
  public deprecateFlowTemplate() {
    this.add('iotthingsgraph:DeprecateFlowTemplate');
    return this;
  }

  /**
   * Deprecates the specified system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeprecateSystemTemplate.html
   */
  public deprecateSystemTemplate() {
    this.add('iotthingsgraph:DeprecateSystemTemplate');
    return this;
  }

  /**
   * Gets the latest version of the user's namespace and the public version that it is tracking.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DescribeNamespace.html
   */
  public describeNamespace() {
    this.add('iotthingsgraph:DescribeNamespace');
    return this;
  }

  /**
   * Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only one entity of a particular type can be associated with a thing.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iot:DescribeThing
   * - iot:DescribeThingGroup
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DissociateEntityFromThing.html
   */
  public dissociateEntityFromThing() {
    this.add('iotthingsgraph:DissociateEntityFromThing');
    return this;
  }

  /**
   * Gets descriptions of the specified entities. Uses the latest version of the user's namespace by default.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetEntities.html
   */
  public getEntities() {
    this.add('iotthingsgraph:GetEntities');
    return this;
  }

  /**
   * Gets the latest version of the DefinitionDocument and FlowTemplateSummary for the specified workflow.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetFlowTemplate.html
   */
  public getFlowTemplate() {
    this.add('iotthingsgraph:GetFlowTemplate');
    return this;
  }

  /**
   * Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated, this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetFlowTemplateRevisions.html
   */
  public getFlowTemplateRevisions() {
    this.add('iotthingsgraph:GetFlowTemplateRevisions');
    return this;
  }

  /**
   * Gets the status of a namespace deletion task.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetNamespaceDeletionStatus.html
   */
  public getNamespaceDeletionStatus() {
    this.add('iotthingsgraph:GetNamespaceDeletionStatus');
    return this;
  }

  /**
   * Gets a system instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetSystemInstance.html
   */
  public getSystemInstance() {
    this.add('iotthingsgraph:GetSystemInstance');
    return this;
  }

  /**
   * Gets a system.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetSystemTemplate.html
   */
  public getSystemTemplate() {
    this.add('iotthingsgraph:GetSystemTemplate');
    return this;
  }

  /**
   * Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return the revisions that occurred before its deprecation. This action won't work with systems that have been deleted.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetSystemTemplateRevisions.html
   */
  public getSystemTemplateRevisions() {
    this.add('iotthingsgraph:GetSystemTemplateRevisions');
    return this;
  }

  /**
   * Gets the status of the specified upload.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetUploadStatus.html
   */
  public getUploadStatus() {
    this.add('iotthingsgraph:GetUploadStatus');
    return this;
  }

  /**
   * Lists details of a single workflow execution
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_ListFlowExecutionMessages.html
   */
  public listFlowExecutionMessages() {
    this.add('iotthingsgraph:ListFlowExecutionMessages');
    return this;
  }

  /**
   * Lists all tags for a given resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('iotthingsgraph:ListTagsForResource');
    return this;
  }

  /**
   * Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_SearchEntities.html
   */
  public searchEntities() {
    this.add('iotthingsgraph:SearchEntities');
    return this;
  }

  /**
   * Searches for workflow executions of a system instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_SearchFlowExecutions.html
   */
  public searchFlowExecutions() {
    this.add('iotthingsgraph:SearchFlowExecutions');
    return this;
  }

  /**
   * Searches for summary information about workflows.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_SearchFlowTemplates.html
   */
  public searchFlowTemplates() {
    this.add('iotthingsgraph:SearchFlowTemplates');
    return this;
  }

  /**
   * Searches for system instances in the user's account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_SearchSystemInstances.html
   */
  public searchSystemInstances() {
    this.add('iotthingsgraph:SearchSystemInstances');
    return this;
  }

  /**
   * Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_SearchSystemTemplates.html
   */
  public searchSystemTemplates() {
    this.add('iotthingsgraph:SearchSystemTemplates');
    return this;
  }

  /**
   * Searches for things associated with the specified entity. You can search by both device and device model.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_SearchThings.html
   */
  public searchThings() {
    this.add('iotthingsgraph:SearchThings');
    return this;
  }

  /**
   * Tag a specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_TagResource.html
   */
  public tagResource() {
    this.add('iotthingsgraph:TagResource');
    return this;
  }

  /**
   * Removes the system instance and associated triggers from the target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_UndeploySystemInstance.html
   */
  public undeploySystemInstance() {
    this.add('iotthingsgraph:UndeploySystemInstance');
    return this;
  }

  /**
   * Untag a specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_UntagResource.html
   */
  public untagResource() {
    this.add('iotthingsgraph:UntagResource');
    return this;
  }

  /**
   * Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. The workflow can contain only entities in the specified namespace.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_UpdateFlowTemplate.html
   */
  public updateFlowTemplate() {
    this.add('iotthingsgraph:UpdateFlowTemplate');
    return this;
  }

  /**
   * Updates the specified system. You don't need to run this action after updating a workflow. Any system instance that uses the system will see the changes in the system when it is redeployed.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_UpdateSystemTemplate.html
   */
  public updateSystemTemplate() {
    this.add('iotthingsgraph:UpdateSystemTemplate');
    return this;
  }

  /**
   * Asynchronously uploads one or more entity definitions to the user's namespace.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_UploadEntityDefinitions.html
   */
  public uploadEntityDefinitions() {
    this.add('iotthingsgraph:UploadEntityDefinitions');
    return this;
  }

  /**
   * Adds a resource of type Workflow to the statement
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-models-tdm-iot-workflow.html
   *
   * @param namespacePath - Identifier for the namespacePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onWorkflow(namespacePath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotthingsgraph:${Region}:${Account}:Workflow/${NamespacePath}';
    arn = arn.replace('${NamespacePath}', namespacePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type System to the statement
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-models-tdm-iot-system.html
   *
   * @param namespacePath - Identifier for the namespacePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSystem(namespacePath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotthingsgraph:${Region}:${Account}:System/${NamespacePath}';
    arn = arn.replace('${NamespacePath}', namespacePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type SystemInstance to the statement
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-models-tdm-iot-sdc-deployconfig.html
   *
   * @param namespacePath - Identifier for the namespacePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSystemInstance(namespacePath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotthingsgraph:${Region}:${Account}:Deployment/${NamespacePath}';
    arn = arn.replace('${NamespacePath}', namespacePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by a key that is present in the request the user makes to the thingsgraph service.
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/ug/tagging-tg.html/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .createSystemInstance()
   * - .tagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a tag key and value pair.
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/ug/tagging-tg.html/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to resource types:
   * - SystemInstance
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the list of all the tag key names present in the request the user makes to the thingsgraph service.
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/ug/tagging-tg.html/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .createSystemInstance()
   * - .tagResource()
   * - .untagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
