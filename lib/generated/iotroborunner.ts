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
   * Grants permission to create a site
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/API_CreateSite.html
   */
  public toCreateSite() {
    return this.to('CreateSite');
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
      'CreateDestination',
      'CreateSite',
      'CreateWorker',
      'CreateWorkerFleet',
      'DeleteDestination',
      'DeleteSite',
      'DeleteWorker',
      'DeleteWorkerFleet',
      'UpdateDestination',
      'UpdateSite',
      'UpdateWorker',
      'UpdateWorkerFleet'
    ],
    Read: [
      'GetDestination',
      'GetSite',
      'GetWorker',
      'GetWorkerFleet',
      'ListDestinations',
      'ListSites',
      'ListWorkerFleets',
      'ListWorkers'
    ]
  };

  /**
   * Adds a resource of type DestinationResource to the statement
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/
   *
   * @param siteId - Identifier for the siteId.
   * @param destinationId - Identifier for the destinationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifDestinationResourceId()
   */
  public onDestinationResource(siteId: string, destinationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotroborunner:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:site/${ siteId }/destination/${ destinationId }`);
  }

  /**
   * Adds a resource of type SiteResource to the statement
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/
   *
   * @param siteId - Identifier for the siteId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifSiteResourceId()
   */
  public onSiteResource(siteId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotroborunner:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:site/${ siteId }`);
  }

  /**
   * Adds a resource of type WorkerFleetResource to the statement
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/
   *
   * @param siteId - Identifier for the siteId.
   * @param workerFleetId - Identifier for the workerFleetId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifWorkerFleetResourceId()
   */
  public onWorkerFleetResource(siteId: string, workerFleetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotroborunner:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:site/${ siteId }/worker-fleet/${ workerFleetId }`);
  }

  /**
   * Adds a resource of type WorkerResource to the statement
   *
   * https://docs.aws.amazon.com/iotroborunner/latest/api/
   *
   * @param siteId - Identifier for the siteId.
   * @param workerFleetId - Identifier for the workerFleetId.
   * @param workerId - Identifier for the workerId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifWorkerResourceId()
   */
  public onWorkerResource(siteId: string, workerFleetId: string, workerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotroborunner:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:site/${ siteId }/worker-fleet/${ workerFleetId }/worker/${ workerId }`);
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
    return this.if(`DestinationResourceId`, value, operator ?? 'StringLike');
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
    return this.if(`SiteResourceId`, value, operator ?? 'StringLike');
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
    return this.if(`WorkerFleetResourceId`, value, operator ?? 'StringLike');
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
    return this.if(`WorkerResourceId`, value, operator ?? 'StringLike');
  }
}
