import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [refactor-spaces](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhubrefactorspaces.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class RefactorSpaces extends PolicyStatement {
  public servicePrefix = 'refactor-spaces';

  /**
   * Statement provider for service [refactor-spaces](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhubrefactorspaces.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an application within an environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationCreatedByAccount()
   * - .ifCreatedByAccountIds()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to create an environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateEnvironment.html
   */
  public toCreateEnvironment() {
    return this.to('CreateEnvironment');
  }

  /**
   * Grants permission to create a route within an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationCreatedByAccount()
   * - .ifServiceCreatedByAccount()
   * - .ifRouteCreatedByAccount()
   * - .ifCreatedByAccountIds()
   * - .ifSourcePath()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateRoute.html
   */
  public toCreateRoute() {
    return this.to('CreateRoute');
  }

  /**
   * Grants permission to create a service within an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationCreatedByAccount()
   * - .ifServiceCreatedByAccount()
   * - .ifCreatedByAccountIds()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateService.html
   */
  public toCreateService() {
    return this.to('CreateService');
  }

  /**
   * Grants permission to delete an application from an environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationCreatedByAccount()
   * - .ifCreatedByAccountIds()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to delete an environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_DeleteEnvironment.html
   */
  public toDeleteEnvironment() {
    return this.to('DeleteEnvironment');
  }

  /**
   * Grants permission to delete a resource policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to delete a route from an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationCreatedByAccount()
   * - .ifServiceCreatedByAccount()
   * - .ifRouteCreatedByAccount()
   * - .ifCreatedByAccountIds()
   * - .ifSourcePath()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_DeleteRoute.html
   */
  public toDeleteRoute() {
    return this.to('DeleteRoute');
  }

  /**
   * Grants permission to delete a service from an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationCreatedByAccount()
   * - .ifServiceCreatedByAccount()
   * - .ifCreatedByAccountIds()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_DeleteService.html
   */
  public toDeleteService() {
    return this.to('DeleteService');
  }

  /**
   * Grants permission to get more information about an application
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApplicationCreatedByAccount()
   * - .ifCreatedByAccountIds()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_GetApplication.html
   */
  public toGetApplication() {
    return this.to('GetApplication');
  }

  /**
   * Grants permission to get more information for an environment
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_GetEnvironment.html
   */
  public toGetEnvironment() {
    return this.to('GetEnvironment');
  }

  /**
   * Grants permission to get the details about a resource policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to get more information about a route
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApplicationCreatedByAccount()
   * - .ifServiceCreatedByAccount()
   * - .ifRouteCreatedByAccount()
   * - .ifCreatedByAccountIds()
   * - .ifSourcePath()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_GetRoute.html
   */
  public toGetRoute() {
    return this.to('GetRoute');
  }

  /**
   * Grants permission to get more information about a service
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApplicationCreatedByAccount()
   * - .ifServiceCreatedByAccount()
   * - .ifCreatedByAccountIds()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_GetService.html
   */
  public toGetService() {
    return this.to('GetService');
  }

  /**
   * Grants permission to list all the applications in an environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_ListApplications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to list all the VPCs for the environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_ListEnvironmentVpcs.html
   */
  public toListEnvironmentVpcs() {
    return this.to('ListEnvironmentVpcs');
  }

  /**
   * Grants permission to list all environments
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_ListEnvironments.html
   */
  public toListEnvironments() {
    return this.to('ListEnvironments');
  }

  /**
   * Grants permission to list all the routes in an application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_ListRoutes.html
   */
  public toListRoutes() {
    return this.to('ListRoutes');
  }

  /**
   * Grants permission to list all the services in an environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_ListServices.html
   */
  public toListServices() {
    return this.to('ListServices');
  }

  /**
   * Grants permission to list all the tags for a given resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to add a resource policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifApplicationCreatedByAccount()
   * - .ifServiceCreatedByAccount()
   * - .ifRouteCreatedByAccount()
   * - .ifCreatedByAccountIds()
   * - .ifSourcePath()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a tag from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifApplicationCreatedByAccount()
   * - .ifServiceCreatedByAccount()
   * - .ifRouteCreatedByAccount()
   * - .ifCreatedByAccountIds()
   * - .ifSourcePath()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a route from an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationCreatedByAccount()
   * - .ifServiceCreatedByAccount()
   * - .ifRouteCreatedByAccount()
   * - .ifCreatedByAccountIds()
   * - .ifSourcePath()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_UpdateRoute.html
   */
  public toUpdateRoute() {
    return this.to('UpdateRoute');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateApplication',
      'CreateEnvironment',
      'CreateRoute',
      'CreateService',
      'DeleteApplication',
      'DeleteEnvironment',
      'DeleteResourcePolicy',
      'DeleteRoute',
      'DeleteService',
      'PutResourcePolicy',
      'UpdateRoute'
    ],
    Read: [
      'GetApplication',
      'GetEnvironment',
      'GetResourcePolicy',
      'GetRoute',
      'GetService',
      'ListApplications',
      'ListEnvironmentVpcs',
      'ListEnvironments',
      'ListRoutes',
      'ListServices',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-resources
   *
   * @param environmentId - Identifier for the environmentId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironment(environmentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:refactor-spaces:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:environment/${ environmentId }`);
  }

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-resources
   *
   * @param environmentId - Identifier for the environmentId.
   * @param applicationId - Identifier for the applicationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifApplicationCreatedByAccount()
   * - .ifCreatedByAccountIds()
   */
  public onApplication(environmentId: string, applicationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:refactor-spaces:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:environment/${ environmentId }/application/${ applicationId }`);
  }

  /**
   * Adds a resource of type service to the statement
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-resources
   *
   * @param environmentId - Identifier for the environmentId.
   * @param applicationId - Identifier for the applicationId.
   * @param serviceId - Identifier for the serviceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifApplicationCreatedByAccount()
   * - .ifCreatedByAccountIds()
   * - .ifServiceCreatedByAccount()
   */
  public onService(environmentId: string, applicationId: string, serviceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:refactor-spaces:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:environment/${ environmentId }/application/${ applicationId }/service/${ serviceId }`);
  }

  /**
   * Adds a resource of type route to the statement
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-resources
   *
   * @param environmentId - Identifier for the environmentId.
   * @param applicationId - Identifier for the applicationId.
   * @param routeId - Identifier for the routeId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifApplicationCreatedByAccount()
   * - .ifCreatedByAccountIds()
   * - .ifRouteCreatedByAccount()
   * - .ifServiceCreatedByAccount()
   * - .ifSourcePath()
   */
  public onRoute(environmentId: string, applicationId: string, routeId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:refactor-spaces:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:environment/${ environmentId }/application/${ applicationId }/route/${ routeId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateApplication()
   * - .toCreateEnvironment()
   * - .toCreateRoute()
   * - .toCreateService()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toDeleteApplication()
   * - .toDeleteEnvironment()
   * - .toDeleteRoute()
   * - .toDeleteService()
   * - .toGetApplication()
   * - .toGetEnvironment()
   * - .toGetRoute()
   * - .toGetService()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateRoute()
   *
   * Applies to resource types:
   * - environment
   * - application
   * - service
   * - route
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateApplication()
   * - .toCreateEnvironment()
   * - .toCreateRoute()
   * - .toCreateService()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by restricting the action to only those accounts that created the application within an environment
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateApplication()
   * - .toCreateRoute()
   * - .toCreateService()
   * - .toDeleteApplication()
   * - .toDeleteRoute()
   * - .toDeleteService()
   * - .toGetApplication()
   * - .toGetRoute()
   * - .toGetService()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateRoute()
   *
   * Applies to resource types:
   * - application
   * - service
   * - route
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifApplicationCreatedByAccount(value: string | string[], operator?: Operator | string) {
    return this.if(`ApplicationCreatedByAccount`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the accounts that created the resource
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateApplication()
   * - .toCreateRoute()
   * - .toCreateService()
   * - .toDeleteApplication()
   * - .toDeleteRoute()
   * - .toDeleteService()
   * - .toGetApplication()
   * - .toGetRoute()
   * - .toGetService()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateRoute()
   *
   * Applies to resource types:
   * - application
   * - service
   * - route
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCreatedByAccountIds(value: string | string[], operator?: Operator | string) {
    return this.if(`CreatedByAccountIds`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by restricting the action to only those accounts that created the route within an application
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateRoute()
   * - .toDeleteRoute()
   * - .toGetRoute()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateRoute()
   *
   * Applies to resource types:
   * - route
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRouteCreatedByAccount(value: string | string[], operator?: Operator | string) {
    return this.if(`RouteCreatedByAccount`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by restricting the action to only those accounts that created the service within an application
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateRoute()
   * - .toCreateService()
   * - .toDeleteRoute()
   * - .toDeleteService()
   * - .toGetRoute()
   * - .toGetService()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateRoute()
   *
   * Applies to resource types:
   * - service
   * - route
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifServiceCreatedByAccount(value: string | string[], operator?: Operator | string) {
    return this.if(`ServiceCreatedByAccount`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the path of the route
   *
   * https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to actions:
   * - .toCreateRoute()
   * - .toDeleteRoute()
   * - .toGetRoute()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateRoute()
   *
   * Applies to resource types:
   * - route
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSourcePath(value: string | string[], operator?: Operator | string) {
    return this.if(`SourcePath`, value, operator ?? 'StringLike');
  }
}
