import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service iotthingsgraph
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotthingsgraph.html
 */
export class Iotthingsgraph extends PolicyStatement {
  public servicePrefix = 'iotthingsgraph';
  public actions : Actions = {
    "AssociateEntityToThing": {
      "url": "https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_AssociateEntityToThing.html",
      "description": "Associates a device with a concrete thing that is in the user's registry. A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.",
      "accessLevel": "Write"
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
      "accessLevel": "Write"
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

  /**
   * Associates a device with a concrete thing that is in the user's registry. A thing can be associated with only one device at a time. If you associate a thing with a new device id, its previous association will be removed.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_AssociateEntityToThing.html
   */
  public associateEntityToThing () {
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
  public createFlowTemplate () {
    this.add('iotthingsgraph:CreateFlowTemplate');
    return this;
  }

  /**
   * Creates an instance of a system with specified configurations and Things.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_CreateSystemInstance.html
   */
  public createSystemInstance () {
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
  public createSystemTemplate () {
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
  public deleteFlowTemplate () {
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
  public deleteNamespace () {
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
  public deleteSystemInstance () {
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
  public deleteSystemTemplate () {
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
  public deploySystemInstance () {
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
  public deprecateFlowTemplate () {
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
  public deprecateSystemTemplate () {
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
  public describeNamespace () {
    this.add('iotthingsgraph:DescribeNamespace');
    return this;
  }

  /**
   * Dissociates a device entity from a concrete thing. The action takes only the type of the entity that you need to dissociate because only one entity of a particular type can be associated with a thing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DissociateEntityFromThing.html
   */
  public dissociateEntityFromThing () {
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
  public getEntities () {
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
  public getFlowTemplate () {
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
  public getFlowTemplateRevisions () {
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
  public getNamespaceDeletionStatus () {
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
  public getSystemInstance () {
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
  public getSystemTemplate () {
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
  public getSystemTemplateRevisions () {
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
  public getUploadStatus () {
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
  public listFlowExecutionMessages () {
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
  public listTagsForResource () {
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
  public searchEntities () {
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
  public searchFlowExecutions () {
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
  public searchFlowTemplates () {
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
  public searchSystemInstances () {
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
  public searchSystemTemplates () {
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
  public searchThings () {
    this.add('iotthingsgraph:SearchThings');
    return this;
  }

  /**
   * Tag a specified resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_TagResource.html
   */
  public tagResource () {
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
  public undeploySystemInstance () {
    this.add('iotthingsgraph:UndeploySystemInstance');
    return this;
  }

  /**
   * Untag a specified resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_UntagResource.html
   */
  public untagResource () {
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
  public updateFlowTemplate () {
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
  public updateSystemTemplate () {
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
  public uploadEntityDefinitions () {
    this.add('iotthingsgraph:UploadEntityDefinitions');
    return this;
  }
}
