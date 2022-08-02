import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [iotroborunner](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotroborunner.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iotroborunner extends PolicyStatement {
  public servicePrefix = 'iotroborunner';

  /**
   * Statement provider for service [iotroborunner](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotroborunner.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_CreateAction.html
   */
  public toCreateAction() {
    return this.to('CreateAction');
  }

  /**
   * Grants permission to create an action template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_CreateActionTemplate.html
   */
  public toCreateActionTemplate() {
    return this.to('CreateActionTemplate');
  }

  /**
   * Grants permission to create an action template dependency
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_CreateActionTemplateDependency.html
   */
  public toCreateActionTemplateDependency() {
    return this.to('CreateActionTemplateDependency');
  }

  /**
   * Grants permission to create an activity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_CreateActivity.html
   */
  public toCreateActivity() {
    return this.to('CreateActivity');
  }

  /**
   * Grants permission to create an activity dependency
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_CreateActivityDependency.html
   */
  public toCreateActivityDependency() {
    return this.to('CreateActivityDependency');
  }

  /**
   * Grants permission to create a destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_CreateDestination.html
   */
  public toCreateDestination() {
    return this.to('CreateDestination');
  }

  /**
   * Grants permission to create a destination relationship
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_CreateDestinationRelationship.html
   */
  public toCreateDestinationRelationship() {
    return this.to('CreateDestinationRelationship');
  }

  /**
   * Grants permission to create a site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_CreateSite.html
   */
  public toCreateSite() {
    return this.to('CreateSite');
  }

  /**
   * Grants permission to create a task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_CreateTask.html
   */
  public toCreateTask() {
    return this.to('CreateTask');
  }

  /**
   * Grants permission to create a task dependency
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_CreateTaskDependency.html
   */
  public toCreateTaskDependency() {
    return this.to('CreateTaskDependency');
  }

  /**
   * Grants permission to create a worker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_CreateWorker.html
   */
  public toCreateWorker() {
    return this.to('CreateWorker');
  }

  /**
   * Grants permission to create a worker fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_CreateWorkerFleet.html
   */
  public toCreateWorkerFleet() {
    return this.to('CreateWorkerFleet');
  }

  /**
   * Grants permission to delete an action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_DeleteAction.html
   */
  public toDeleteAction() {
    return this.to('DeleteAction');
  }

  /**
   * Grants permission to delete an action template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_DeleteActionTemplate.html
   */
  public toDeleteActionTemplate() {
    return this.to('DeleteActionTemplate');
  }

  /**
   * Grants permission to delete an action template dependency
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_DeleteActionTemplateDependency.html
   */
  public toDeleteActionTemplateDependency() {
    return this.to('DeleteActionTemplateDependency');
  }

  /**
   * Grants permission to delete an activity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_DeleteActivity.html
   */
  public toDeleteActivity() {
    return this.to('DeleteActivity');
  }

  /**
   * Grants permission to delete an activity dependency
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_DeleteActivityDependency.html
   */
  public toDeleteActivityDependency() {
    return this.to('DeleteActivityDependency');
  }

  /**
   * Grants permission to delete a destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_DeleteDestination.html
   */
  public toDeleteDestination() {
    return this.to('DeleteDestination');
  }

  /**
   * Grants permission to delete a destination relationship
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_DeleteDestinationRelationship.html
   */
  public toDeleteDestinationRelationship() {
    return this.to('DeleteDestinationRelationship');
  }

  /**
   * Grants permission to delete a site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_DeleteSite.html
   */
  public toDeleteSite() {
    return this.to('DeleteSite');
  }

  /**
   * Grants permission to delete a task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_DeleteTask.html
   */
  public toDeleteTask() {
    return this.to('DeleteTask');
  }

  /**
   * Grants permission to delete a task dependency
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_DeleteTaskDependency.html
   */
  public toDeleteTaskDependency() {
    return this.to('DeleteTaskDependency');
  }

  /**
   * Grants permission to delete a worker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_DeleteWorker.html
   */
  public toDeleteWorker() {
    return this.to('DeleteWorker');
  }

  /**
   * Grants permission to delete a worker fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_DeleteWorkerFleet.html
   */
  public toDeleteWorkerFleet() {
    return this.to('DeleteWorkerFleet');
  }

  /**
   * Grants permission to get an action
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_GetAction.html
   */
  public toGetAction() {
    return this.to('GetAction');
  }

  /**
   * Grants permission to get an action template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_GetActionTemplate.html
   */
  public toGetActionTemplate() {
    return this.to('GetActionTemplate');
  }

  /**
   * Grants permission to get an activity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_GetActivity.html
   */
  public toGetActivity() {
    return this.to('GetActivity');
  }

  /**
   * Grants permission to get a destination
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_GetDestination.html
   */
  public toGetDestination() {
    return this.to('GetDestination');
  }

  /**
   * Grants permission to get a destination relationship
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_GetDestinationRelationship.html
   */
  public toGetDestinationRelationship() {
    return this.to('GetDestinationRelationship');
  }

  /**
   * Grants permission to get a site
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_GetSite.html
   */
  public toGetSite() {
    return this.to('GetSite');
  }

  /**
   * Grants permission to get a task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_GetTask.html
   */
  public toGetTask() {
    return this.to('GetTask');
  }

  /**
   * Grants permission to get a worker
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_GetWorker.html
   */
  public toGetWorker() {
    return this.to('GetWorker');
  }

  /**
   * Grants permission to get a worker fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_GetWorkerFleet.html
   */
  public toGetWorkerFleet() {
    return this.to('GetWorkerFleet');
  }

  /**
   * Grants permission to list action templates
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_ListActionTemplates.html
   */
  public toListActionTemplates() {
    return this.to('ListActionTemplates');
  }

  /**
   * Grants permission to list actions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_ListActions.html
   */
  public toListActions() {
    return this.to('ListActions');
  }

  /**
   * Grants permission to list activities
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_ListActivities.html
   */
  public toListActivities() {
    return this.to('ListActivities');
  }

  /**
   * Grants permission to list destination relationships
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_ListDestinationRelationships.html
   */
  public toListDestinationRelationships() {
    return this.to('ListDestinationRelationships');
  }

  /**
   * Grants permission to list destinations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_ListDestinations.html
   */
  public toListDestinations() {
    return this.to('ListDestinations');
  }

  /**
   * Grants permission to list sites
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_ListSites.html
   */
  public toListSites() {
    return this.to('ListSites');
  }

  /**
   * Grants permission to list tasks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_ListTasks.html
   */
  public toListTasks() {
    return this.to('ListTasks');
  }

  /**
   * Grants permission to list worker fleets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_ListWorkerFleets.html
   */
  public toListWorkerFleets() {
    return this.to('ListWorkerFleets');
  }

  /**
   * Grants permission to list workers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_ListWorkers.html
   */
  public toListWorkers() {
    return this.to('ListWorkers');
  }

  /**
   * Grants permission to update an action's state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_UpdateActionState.html
   */
  public toUpdateActionState() {
    return this.to('UpdateActionState');
  }

  /**
   * Grants permission to update an activity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_UpdateActivity.html
   */
  public toUpdateActivity() {
    return this.to('UpdateActivity');
  }

  /**
   * Grants permission to update a destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_UpdateDestination.html
   */
  public toUpdateDestination() {
    return this.to('UpdateDestination');
  }

  /**
   * Grants permission to update a site
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_UpdateSite.html
   */
  public toUpdateSite() {
    return this.to('UpdateSite');
  }

  /**
   * Grants permission to update a task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_UpdateTask.html
   */
  public toUpdateTask() {
    return this.to('UpdateTask');
  }

  /**
   * Grants permission to update a worker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_UpdateWorker.html
   */
  public toUpdateWorker() {
    return this.to('UpdateWorker');
  }

  /**
   * Grants permission to update a worker fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_UpdateWorkerFleet.html
   */
  public toUpdateWorkerFleet() {
    return this.to('UpdateWorkerFleet');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateAction',
      'CreateActionTemplate',
      'CreateActionTemplateDependency',
      'CreateActivity',
      'CreateActivityDependency',
      'CreateDestination',
      'CreateDestinationRelationship',
      'CreateSite',
      'CreateTask',
      'CreateTaskDependency',
      'CreateWorker',
      'CreateWorkerFleet',
      'DeleteAction',
      'DeleteActionTemplate',
      'DeleteActionTemplateDependency',
      'DeleteActivity',
      'DeleteActivityDependency',
      'DeleteDestination',
      'DeleteDestinationRelationship',
      'DeleteSite',
      'DeleteTask',
      'DeleteTaskDependency',
      'DeleteWorker',
      'DeleteWorkerFleet',
      'UpdateActionState',
      'UpdateActivity',
      'UpdateDestination',
      'UpdateSite',
      'UpdateTask',
      'UpdateWorker',
      'UpdateWorkerFleet'
    ],
    Read: [
      'GetAction',
      'GetActionTemplate',
      'GetActivity',
      'GetDestination',
      'GetDestinationRelationship',
      'GetSite',
      'GetTask',
      'GetWorker',
      'GetWorkerFleet',
      'ListActionTemplates',
      'ListActions',
      'ListActivities',
      'ListDestinationRelationships',
      'ListDestinations',
      'ListSites',
      'ListTasks',
      'ListWorkerFleets',
      'ListWorkers'
    ]
  };

  /**
   * Adds a resource of type ActionResource to the statement
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/
   *
   * @param actionId - Identifier for the actionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifActionResourceId()
   */
  public onActionResource(actionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Iotroborunner.defaultPartition }:iotroborunner:${ region || '*' }:${ account || '*' }:action/${ actionId }`);
  }

  /**
   * Adds a resource of type ActionTemplateResource to the statement
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/
   *
   * @param actionTemplateId - Identifier for the actionTemplateId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifActionTemplateResourceId()
   */
  public onActionTemplateResource(actionTemplateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Iotroborunner.defaultPartition }:iotroborunner:${ region || '*' }:${ account || '*' }:action-template/${ actionTemplateId }`);
  }

  /**
   * Adds a resource of type ActivityResource to the statement
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/
   *
   * @param activityId - Identifier for the activityId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifActivityResourceId()
   */
  public onActivityResource(activityId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Iotroborunner.defaultPartition }:iotroborunner:${ region || '*' }:${ account || '*' }:activity/${ activityId }`);
  }

  /**
   * Adds a resource of type DestinationRelationshipResource to the statement
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/
   *
   * @param destinationRelationshipId - Identifier for the destinationRelationshipId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifDestinationRelationshipResourceId()
   */
  public onDestinationRelationshipResource(destinationRelationshipId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Iotroborunner.defaultPartition }:iotroborunner:${ region || '*' }:${ account || '*' }:destination-relationship/${ destinationRelationshipId }`);
  }

  /**
   * Adds a resource of type DestinationResource to the statement
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/
   *
   * @param destinationId - Identifier for the destinationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifDestinationResourceId()
   */
  public onDestinationResource(destinationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Iotroborunner.defaultPartition }:iotroborunner:${ region || '*' }:${ account || '*' }:destination/${ destinationId }`);
  }

  /**
   * Adds a resource of type SiteResource to the statement
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/
   *
   * @param siteId - Identifier for the siteId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifSiteResourceId()
   */
  public onSiteResource(siteId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Iotroborunner.defaultPartition }:iotroborunner:${ region || '*' }:${ account || '*' }:site/${ siteId }`);
  }

  /**
   * Adds a resource of type TaggingResource to the statement
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/
   *
   * @param tagKey - Identifier for the tagKey.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifTaggingResourceTagKey()
   */
  public onTaggingResource(tagKey: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Iotroborunner.defaultPartition }:iotroborunner:${ region || '*' }:${ account || '*' }:tag/${ tagKey }`);
  }

  /**
   * Adds a resource of type TaskResource to the statement
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/
   *
   * @param taskId - Identifier for the taskId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifTaskResourceId()
   */
  public onTaskResource(taskId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Iotroborunner.defaultPartition }:iotroborunner:${ region || '*' }:${ account || '*' }:task/${ taskId }`);
  }

  /**
   * Adds a resource of type WorkerFleetResource to the statement
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/
   *
   * @param siteId - Identifier for the siteId.
   * @param workerFleetId - Identifier for the workerFleetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifWorkerFleetResourceId()
   */
  public onWorkerFleetResource(siteId: string, workerFleetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Iotroborunner.defaultPartition }:iotroborunner:${ region || '*' }:${ account || '*' }:site/${ siteId }/worker-fleet/${ workerFleetId }`);
  }

  /**
   * Adds a resource of type WorkerResource to the statement
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/
   *
   * @param siteId - Identifier for the siteId.
   * @param workerFleetId - Identifier for the workerFleetId.
   * @param workerId - Identifier for the workerId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifWorkerResourceId()
   */
  public onWorkerResource(siteId: string, workerFleetId: string, workerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Iotroborunner.defaultPartition }:iotroborunner:${ region || '*' }:${ account || '*' }:site/${ siteId }/worker-fleet/${ workerFleetId }/worker/${ workerId }`);
  }

  /**
   * Filters access by the action's identifier
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/dev/#Action
   *
   * Applies to resource types:
   * - ActionResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifActionResourceId(value: string | string[], operator?: Operator | string) {
    return this.if(`ActionResourceId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the action template's identifier
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/dev/#ActionTemplate
   *
   * Applies to resource types:
   * - ActionTemplateResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifActionTemplateResourceId(value: string | string[], operator?: Operator | string) {
    return this.if(`ActionTemplateResourceId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the activity's identifier
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/dev/#Activity
   *
   * Applies to resource types:
   * - ActivityResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifActivityResourceId(value: string | string[], operator?: Operator | string) {
    return this.if(`ActivityResourceId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the destination relationship's identifier
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/dev/#DestinationRelationship
   *
   * Applies to resource types:
   * - DestinationRelationshipResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDestinationRelationshipResourceId(value: string | string[], operator?: Operator | string) {
    return this.if(`DestinationRelationshipResourceId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the destination's identifier
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/dev/#Destination
   *
   * Applies to resource types:
   * - DestinationResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDestinationResourceId(value: string | string[], operator?: Operator | string) {
    return this.if(`DestinationResourceId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the site's identifier
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/dev/#Site
   *
   * Applies to resource types:
   * - SiteResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSiteResourceId(value: string | string[], operator?: Operator | string) {
    return this.if(`SiteResourceId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the metadata tag name
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/dev/#Tagging
   *
   * Applies to resource types:
   * - TaggingResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTaggingResourceTagKey(value: string | string[], operator?: Operator | string) {
    return this.if(`TaggingResourceTagKey`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the task's identifer
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/dev/#Task
   *
   * Applies to resource types:
   * - TaskResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTaskResourceId(value: string | string[], operator?: Operator | string) {
    return this.if(`TaskResourceId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the worker fleet's identifier
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/dev/#WorkerFleet
   *
   * Applies to resource types:
   * - WorkerFleetResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWorkerFleetResourceId(value: string | string[], operator?: Operator | string) {
    return this.if(`WorkerFleetResourceId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the workers identifier
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/dev/#Worker
   *
   * Applies to resource types:
   * - WorkerResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWorkerResourceId(value: string | string[], operator?: Operator | string) {
    return this.if(`WorkerResourceId`, value, operator || 'StringLike');
  }
}
