import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [application-signals](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchapplicationsignals.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ApplicationSignals extends PolicyStatement {
  public servicePrefix = 'application-signals';

  /**
   * Statement provider for service [application-signals](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchapplicationsignals.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to batch retrieve a service level objective budget report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/applicationsignals/latest/APIReference/API_BatchGetServiceLevelObjectiveBudgetReport.html
   */
  public toBatchGetServiceLevelObjectiveBudgetReport() {
    return this.to('BatchGetServiceLevelObjectiveBudgetReport');
  }

  /**
   * Grants permission to add or remove exclusion windows from Amazon CloudWatch SLOs
   *
   * Access Level: Write
   */
  public toBatchUpdateExclusionWindows() {
    return this.to('BatchUpdateExclusionWindows');
  }

  /**
   * Grants permission to create a service level objective
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/applicationsignals/latest/APIReference/API_CreateServiceLevelObjective.html
   */
  public toCreateServiceLevelObjective() {
    return this.to('CreateServiceLevelObjective');
  }

  /**
   * Grants permission to delete a service level objective
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/applicationsignals/latest/APIReference/API_DeleteServiceLevelObjective.html
   */
  public toDeleteServiceLevelObjective() {
    return this.to('DeleteServiceLevelObjective');
  }

  /**
   * Grants permission to retrieve information about a service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/applicationsignals/latest/APIReference/API_GetService.html
   */
  public toGetService() {
    return this.to('GetService');
  }

  /**
   * Grants permission to retrieve information about service level objective
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/applicationsignals/latest/APIReference/API_GetServiceLevelObjective.html
   */
  public toGetServiceLevelObjective() {
    return this.to('GetServiceLevelObjective');
  }

  /**
   * Grants permission to share Application Signals resources with a monitoring account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account-Setup.html#CloudWatch-Unified-Cross-Account-Setup-permissions
   */
  public toLink() {
    return this.to('Link');
  }

  /**
   * Grants permission to list entities associated with other entities
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Application_Signals_Permissions.html
   */
  public toListObservedEntities() {
    return this.to('ListObservedEntities');
  }

  /**
   * Grants permission to list service dependencies
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/applicationsignals/latest/APIReference/API_ListServiceDependencies.html
   */
  public toListServiceDependencies() {
    return this.to('ListServiceDependencies');
  }

  /**
   * Grants permission to list service dependents
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/applicationsignals/latest/APIReference/API_ListServiceDependents.html
   */
  public toListServiceDependents() {
    return this.to('ListServiceDependents');
  }

  /**
   * Grants permission to list exclusion windows for an Amazon CloudWatch SLO
   *
   * Access Level: List
   */
  public toListServiceLevelObjectiveExclusionWindows() {
    return this.to('ListServiceLevelObjectiveExclusionWindows');
  }

  /**
   * Grants permission to list service level objectives
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/applicationsignals/latest/APIReference/API_ListServiceLevelObjectives.html
   */
  public toListServiceLevelObjectives() {
    return this.to('ListServiceLevelObjectives');
  }

  /**
   * Grants permission to list service operations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/applicationsignals/latest/APIReference/API_ListServiceOperations.html
   */
  public toListServiceOperations() {
    return this.to('ListServiceOperations');
  }

  /**
   * Grants permission to list services
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/applicationsignals/latest/APIReference/API_ListServices.html
   */
  public toListServices() {
    return this.to('ListServices');
  }

  /**
   * Grants permission to list tags for an Amazon CloudWatch SLO
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/applicationsignals/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to enable CloudWatch discovery
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/applicationsignals/latest/APIReference/API_StartDiscovery.html
   */
  public toStartDiscovery() {
    return this.to('StartDiscovery');
  }

  /**
   * Grants permission to add tags to an Amazon CloudWatch SLO
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/applicationsignals/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag to an Amazon CloudWatch SLO
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/applicationsignals/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a service level objective
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/applicationsignals/latest/APIReference/API_UpdateServiceLevelObjective.html
   */
  public toUpdateServiceLevelObjective() {
    return this.to('UpdateServiceLevelObjective');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'BatchGetServiceLevelObjectiveBudgetReport',
      'GetService',
      'GetServiceLevelObjective',
      'ListServiceDependencies',
      'ListServiceDependents',
      'ListServiceOperations',
      'ListTagsForResource'
    ],
    Write: [
      'BatchUpdateExclusionWindows',
      'CreateServiceLevelObjective',
      'DeleteServiceLevelObjective',
      'Link',
      'StartDiscovery',
      'UpdateServiceLevelObjective'
    ],
    List: [
      'ListObservedEntities',
      'ListServiceLevelObjectiveExclusionWindows',
      'ListServiceLevelObjectives',
      'ListServices'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type slo to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-ServiceLevelObjectives.html
   *
   * @param sloName - Identifier for the sloName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSlo(sloName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:application-signals:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:slo/${ sloName }`);
  }

  /**
   * Filters access by the allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateServiceLevelObjective()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag-value associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - slo
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateServiceLevelObjective()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
