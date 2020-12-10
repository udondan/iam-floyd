import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [iotthingsgraph](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotthingsgraph.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iotthingsgraph extends PolicyStatement {
  public servicePrefix = 'iotthingsgraph';

  /**
   * Statement provider for service [iotthingsgraph](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotthingsgraph.html).
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
  public toAssociateEntityToThing() {
    this.to('iotthingsgraph:AssociateEntityToThing');
    return this;
  }

  /**
   * Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_CreateFlowTemplate.html
   */
  public toCreateFlowTemplate() {
    this.to('iotthingsgraph:CreateFlowTemplate');
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
  public toCreateSystemInstance() {
    this.to('iotthingsgraph:CreateSystemInstance');
    return this;
  }

  /**
   * Creates a system. The system is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_CreateSystemTemplate.html
   */
  public toCreateSystemTemplate() {
    this.to('iotthingsgraph:CreateSystemTemplate');
    return this;
  }

  /**
   * Deletes a workflow. Any new system or system instance that contains this workflow will fail to update or deploy. Existing system instances that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deploying the system instance).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeleteFlowTemplate.html
   */
  public toDeleteFlowTemplate() {
    this.to('iotthingsgraph:DeleteFlowTemplate');
    return this;
  }

  /**
   * Deletes the specified namespace. This action deletes all of the entities in the namespace. Delete the systems and flows in the namespace before performing this action.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeleteNamespace.html
   */
  public toDeleteNamespace() {
    this.to('iotthingsgraph:DeleteNamespace');
    return this;
  }

  /**
   * Deletes a system instance. Only instances that have never been deployed, or that have been undeployed from the target can be deleted. Users can create a new system instance that has the same ID as a deleted system instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeleteSystemInstance.html
   */
  public toDeleteSystemInstance() {
    this.to('iotthingsgraph:DeleteSystemInstance');
    return this;
  }

  /**
   * Deletes a system. New system instances can't contain the system after its deletion. Existing system instances that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeleteSystemTemplate.html
   */
  public toDeleteSystemTemplate() {
    this.to('iotthingsgraph:DeleteSystemTemplate');
    return this;
  }

  /**
   * Deploys the system instance to the target specified in CreateSystemInstance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeploySystemInstance.html
   */
  public toDeploySystemInstance() {
    this.to('iotthingsgraph:DeploySystemInstance');
    return this;
  }

  /**
   * Deprecates the specified workflow. This action marks the workflow for deletion. Deprecated flows can't be deployed, but existing system instances that use the flow will continue to run.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeprecateFlowTemplate.html
   */
  public toDeprecateFlowTemplate() {
    this.to('iotthingsgraph:DeprecateFlowTemplate');
    return this;
  }

  /**
   * Deprecates the specified system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DeprecateSystemTemplate.html
   */
  public toDeprecateSystemTemplate() {
    this.to('iotthingsgraph:DeprecateSystemTemplate');
    return this;
  }

  /**
   * Gets the latest version of the user's namespace and the public version that it is tracking.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_DescribeNamespace.html
   */
  public toDescribeNamespace() {
    this.to('iotthingsgraph:DescribeNamespace');
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
  public toDissociateEntityFromThing() {
    this.to('iotthingsgraph:DissociateEntityFromThing');
    return this;
  }

  /**
   * Gets descriptions of the specified entities. Uses the latest version of the user's namespace by default.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetEntities.html
   */
  public toGetEntities() {
    this.to('iotthingsgraph:GetEntities');
    return this;
  }

  /**
   * Gets the latest version of the DefinitionDocument and FlowTemplateSummary for the specified workflow.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetFlowTemplate.html
   */
  public toGetFlowTemplate() {
    this.to('iotthingsgraph:GetFlowTemplate');
    return this;
  }

  /**
   * Gets revisions of the specified workflow. Only the last 100 revisions are stored. If the workflow has been deprecated, this action will return revisions that occurred before the deprecation. This action won't work for workflows that have been deleted.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetFlowTemplateRevisions.html
   */
  public toGetFlowTemplateRevisions() {
    this.to('iotthingsgraph:GetFlowTemplateRevisions');
    return this;
  }

  /**
   * Gets the status of a namespace deletion task.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetNamespaceDeletionStatus.html
   */
  public toGetNamespaceDeletionStatus() {
    this.to('iotthingsgraph:GetNamespaceDeletionStatus');
    return this;
  }

  /**
   * Gets a system instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetSystemInstance.html
   */
  public toGetSystemInstance() {
    this.to('iotthingsgraph:GetSystemInstance');
    return this;
  }

  /**
   * Gets a system.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetSystemTemplate.html
   */
  public toGetSystemTemplate() {
    this.to('iotthingsgraph:GetSystemTemplate');
    return this;
  }

  /**
   * Gets revisions made to the specified system template. Only the previous 100 revisions are stored. If the system has been deprecated, this action will return the revisions that occurred before its deprecation. This action won't work with systems that have been deleted.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetSystemTemplateRevisions.html
   */
  public toGetSystemTemplateRevisions() {
    this.to('iotthingsgraph:GetSystemTemplateRevisions');
    return this;
  }

  /**
   * Gets the status of the specified upload.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_GetUploadStatus.html
   */
  public toGetUploadStatus() {
    this.to('iotthingsgraph:GetUploadStatus');
    return this;
  }

  /**
   * Lists details of a single workflow execution
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_ListFlowExecutionMessages.html
   */
  public toListFlowExecutionMessages() {
    this.to('iotthingsgraph:ListFlowExecutionMessages');
    return this;
  }

  /**
   * Lists all tags for a given resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('iotthingsgraph:ListTagsForResource');
    return this;
  }

  /**
   * Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_SearchEntities.html
   */
  public toSearchEntities() {
    this.to('iotthingsgraph:SearchEntities');
    return this;
  }

  /**
   * Searches for workflow executions of a system instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_SearchFlowExecutions.html
   */
  public toSearchFlowExecutions() {
    this.to('iotthingsgraph:SearchFlowExecutions');
    return this;
  }

  /**
   * Searches for summary information about workflows.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_SearchFlowTemplates.html
   */
  public toSearchFlowTemplates() {
    this.to('iotthingsgraph:SearchFlowTemplates');
    return this;
  }

  /**
   * Searches for system instances in the user's account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_SearchSystemInstances.html
   */
  public toSearchSystemInstances() {
    this.to('iotthingsgraph:SearchSystemInstances');
    return this;
  }

  /**
   * Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_SearchSystemTemplates.html
   */
  public toSearchSystemTemplates() {
    this.to('iotthingsgraph:SearchSystemTemplates');
    return this;
  }

  /**
   * Searches for things associated with the specified entity. You can search by both device and device model.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_SearchThings.html
   */
  public toSearchThings() {
    this.to('iotthingsgraph:SearchThings');
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
  public toTagResource() {
    this.to('iotthingsgraph:TagResource');
    return this;
  }

  /**
   * Removes the system instance and associated triggers from the target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_UndeploySystemInstance.html
   */
  public toUndeploySystemInstance() {
    this.to('iotthingsgraph:UndeploySystemInstance');
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
  public toUntagResource() {
    this.to('iotthingsgraph:UntagResource');
    return this;
  }

  /**
   * Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. The workflow can contain only entities in the specified namespace.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_UpdateFlowTemplate.html
   */
  public toUpdateFlowTemplate() {
    this.to('iotthingsgraph:UpdateFlowTemplate');
    return this;
  }

  /**
   * Updates the specified system. You don't need to run this action after updating a workflow. Any system instance that uses the system will see the changes in the system when it is redeployed.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_UpdateSystemTemplate.html
   */
  public toUpdateSystemTemplate() {
    this.to('iotthingsgraph:UpdateSystemTemplate');
    return this;
  }

  /**
   * Asynchronously uploads one or more entity definitions to the user's namespace.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/thingsgraph/latest/APIReference/{APIReferenceDocPage}API_UploadEntityDefinitions.html
   */
  public toUploadEntityDefinitions() {
    this.to('iotthingsgraph:UploadEntityDefinitions');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateEntityToThing",
      "CreateFlowTemplate",
      "CreateSystemTemplate",
      "DeleteFlowTemplate",
      "DeleteNamespace",
      "DeleteSystemInstance",
      "DeleteSystemTemplate",
      "DeploySystemInstance",
      "DeprecateFlowTemplate",
      "DeprecateSystemTemplate",
      "DissociateEntityFromThing",
      "UndeploySystemInstance",
      "UpdateFlowTemplate",
      "UpdateSystemTemplate",
      "UploadEntityDefinitions"
    ],
    "Tagging": [
      "CreateSystemInstance",
      "TagResource",
      "UntagResource"
    ],
    "Read": [
      "DescribeNamespace",
      "GetEntities",
      "GetFlowTemplate",
      "GetFlowTemplateRevisions",
      "GetNamespaceDeletionStatus",
      "GetSystemInstance",
      "GetSystemTemplate",
      "GetSystemTemplateRevisions",
      "GetUploadStatus",
      "SearchEntities",
      "SearchFlowExecutions",
      "SearchFlowTemplates",
      "SearchSystemInstances",
      "SearchSystemTemplates",
      "SearchThings"
    ],
    "List": [
      "ListFlowExecutionMessages",
      "ListTagsForResource"
    ]
  };

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
}

export type IotthingsgraphActionsWrite = 'AssociateEntityToThing' | 'CreateFlowTemplate' | 'CreateSystemTemplate' | 'DeleteFlowTemplate' | 'DeleteNamespace' | 'DeleteSystemInstance' | 'DeleteSystemTemplate' | 'DeploySystemInstance' | 'DeprecateFlowTemplate' | 'DeprecateSystemTemplate' | 'DissociateEntityFromThing' | 'UndeploySystemInstance' | 'UpdateFlowTemplate' | 'UpdateSystemTemplate' | 'UploadEntityDefinitions';
export type IotthingsgraphActionsTagging = 'CreateSystemInstance' | 'TagResource' | 'UntagResource';
export type IotthingsgraphActionsRead = 'DescribeNamespace' | 'GetEntities' | 'GetFlowTemplate' | 'GetFlowTemplateRevisions' | 'GetNamespaceDeletionStatus' | 'GetSystemInstance' | 'GetSystemTemplate' | 'GetSystemTemplateRevisions' | 'GetUploadStatus' | 'SearchEntities' | 'SearchFlowExecutions' | 'SearchFlowTemplates' | 'SearchSystemInstances' | 'SearchSystemTemplates' | 'SearchThings';
export type IotthingsgraphActionsList = 'ListFlowExecutionMessages' | 'ListTagsForResource';
export type IotthingsgraphActions = IotthingsgraphActionsWrite | IotthingsgraphActionsTagging | IotthingsgraphActionsRead | IotthingsgraphActionsList;
