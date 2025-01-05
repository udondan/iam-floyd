import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [servicediscovery](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudmap.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Servicediscovery extends PolicyStatement {
  public servicePrefix = 'servicediscovery';

  /**
   * Statement provider for service [servicediscovery](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudmap.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an HTTP namespace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateHttpNamespace.html
   */
  public toCreateHttpNamespace() {
    return this.to('CreateHttpNamespace');
  }

  /**
   * Grants permission to create a private namespace based on DNS, which will be visible only inside a specified Amazon VPC
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_CreatePrivateDnsNamespace.html
   */
  public toCreatePrivateDnsNamespace() {
    return this.to('CreatePrivateDnsNamespace');
  }

  /**
   * Grants permission to create a public namespace based on DNS, which will be visible on the internet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_CreatePublicDnsNamespace.html
   */
  public toCreatePublicDnsNamespace() {
    return this.to('CreatePublicDnsNamespace');
  }

  /**
   * Grants permission to create a service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifNamespaceArn()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html
   */
  public toCreateService() {
    return this.to('CreateService');
  }

  /**
   * Grants permission to delete a specified namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_DeleteNamespace.html
   */
  public toDeleteNamespace() {
    return this.to('DeleteNamespace');
  }

  /**
   * Grants permission to delete a specified service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_DeleteService.html
   */
  public toDeleteService() {
    return this.to('DeleteService');
  }

  /**
   * Grants permission to delete specified attributes from a service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_DeleteServiceAttributes.html
   */
  public toDeleteServiceAttributes() {
    return this.to('DeleteServiceAttributes');
  }

  /**
   * Grants permission to delete the records and the health check, if any, that Amazon Route 53 created for the specified instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceArn()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_DeregisterInstance.html
   */
  public toDeregisterInstance() {
    return this.to('DeregisterInstance');
  }

  /**
   * Grants permission to discover registered instances for a specified namespace and service
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifNamespaceName()
   * - .ifServiceName()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html
   */
  public toDiscoverInstances() {
    return this.to('DiscoverInstances');
  }

  /**
   * Grants permission to discover the revision of the instances for a specified namespace and service
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifNamespaceName()
   * - .ifServiceName()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstancesRevision.html
   */
  public toDiscoverInstancesRevision() {
    return this.to('DiscoverInstancesRevision');
  }

  /**
   * Grants permission to get information about a specified instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifServiceArn()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetInstance.html
   */
  public toGetInstance() {
    return this.to('GetInstance');
  }

  /**
   * Grants permission to get the current health status (Healthy, Unhealthy, or Unknown) of one or more instances
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifServiceArn()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetInstancesHealthStatus.html
   */
  public toGetInstancesHealthStatus() {
    return this.to('GetInstancesHealthStatus');
  }

  /**
   * Grants permission to get information about a namespace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetNamespace.html
   */
  public toGetNamespace() {
    return this.to('GetNamespace');
  }

  /**
   * Grants permission to get information about a specific operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html
   */
  public toGetOperation() {
    return this.to('GetOperation');
  }

  /**
   * Grants permission to get the settings for a specified service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetService.html
   */
  public toGetService() {
    return this.to('GetService');
  }

  /**
   * Grants permission to get the attributes for a specified service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetServiceAttributes.html
   */
  public toGetServiceAttributes() {
    return this.to('GetServiceAttributes');
  }

  /**
   * Grants permission to get summary information about the instances that were registered with a specified service
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifServiceArn()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_ListInstances.html
   */
  public toListInstances() {
    return this.to('ListInstances');
  }

  /**
   * Grants permission to get information about the namespaces
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_ListNamespaces.html
   */
  public toListNamespaces() {
    return this.to('ListNamespaces');
  }

  /**
   * Grants permission to list operations that match the criteria that you specify
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html
   */
  public toListOperations() {
    return this.to('ListOperations');
  }

  /**
   * Grants permission to get settings for all the services that match specified filters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_ListServices.html
   */
  public toListServices() {
    return this.to('ListServices');
  }

  /**
   * Grants permission to lists tags for the specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to register an instance based on the settings in a specified service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceArn()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html
   */
  public toRegisterInstance() {
    return this.to('RegisterInstance');
  }

  /**
   * Grants permission to add one or more tags to the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove one or more tags from the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the settings for a HTTP namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateHttpNamespace.html
   */
  public toUpdateHttpNamespace() {
    return this.to('UpdateHttpNamespace');
  }

  /**
   * Grants permission to update the current health status for an instance that has a custom health check
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceArn()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html
   */
  public toUpdateInstanceCustomHealthStatus() {
    return this.to('UpdateInstanceCustomHealthStatus');
  }

  /**
   * Grants permission to update the settings for a private DNS namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdatePrivateDnsNamespace.html
   */
  public toUpdatePrivateDnsNamespace() {
    return this.to('UpdatePrivateDnsNamespace');
  }

  /**
   * Grants permission to update the settings for a public DNS namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdatePublicDnsNamespace.html
   */
  public toUpdatePublicDnsNamespace() {
    return this.to('UpdatePublicDnsNamespace');
  }

  /**
   * Grants permission to update the settings in a specified service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateService.html
   */
  public toUpdateService() {
    return this.to('UpdateService');
  }

  /**
   * Grants permission to update the attributes in a specified service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateServiceAttributes.html
   */
  public toUpdateServiceAttributes() {
    return this.to('UpdateServiceAttributes');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateHttpNamespace',
      'CreatePrivateDnsNamespace',
      'CreatePublicDnsNamespace',
      'CreateService',
      'DeleteNamespace',
      'DeleteService',
      'DeleteServiceAttributes',
      'DeregisterInstance',
      'RegisterInstance',
      'UpdateHttpNamespace',
      'UpdateInstanceCustomHealthStatus',
      'UpdatePrivateDnsNamespace',
      'UpdatePublicDnsNamespace',
      'UpdateService',
      'UpdateServiceAttributes'
    ],
    Read: [
      'DiscoverInstances',
      'DiscoverInstancesRevision',
      'GetInstance',
      'GetInstancesHealthStatus',
      'GetNamespace',
      'GetOperation',
      'GetService',
      'GetServiceAttributes',
      'ListInstances',
      'ListNamespaces',
      'ListServices',
      'ListTagsForResource'
    ],
    List: [
      'ListOperations'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type namespace to the statement
   *
   * https://docs.aws.amazon.com/cloud-map/latest/dg/API_Namespace.html
   *
   * @param namespaceId - Identifier for the namespaceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNamespace(namespaceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:servicediscovery:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:namespace/${ namespaceId }`);
  }

  /**
   * Adds a resource of type service to the statement
   *
   * https://docs.aws.amazon.com/cloud-map/latest/dg/API_Service.html
   *
   * @param serviceId - Identifier for the serviceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onService(serviceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:servicediscovery:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:service/${ serviceId }`);
  }

  /**
   * Filters actions based on the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateHttpNamespace()
   * - .toCreatePrivateDnsNamespace()
   * - .toCreatePublicDnsNamespace()
   * - .toCreateService()
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
   * Filters actions based on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - namespace
   * - service
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters actions based on the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateHttpNamespace()
   * - .toCreatePrivateDnsNamespace()
   * - .toCreatePublicDnsNamespace()
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
   * Filters access by specifying the Amazon Resource Name (ARN) for the related namespace
   *
   * https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions
   *
   * Applies to actions:
   * - .toCreateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifNamespaceArn(value: string | string[], operator?: Operator | string) {
    return this.if(`NamespaceArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by specifying the name of the related namespace
   *
   * https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions
   *
   * Applies to actions:
   * - .toDiscoverInstances()
   * - .toDiscoverInstancesRevision()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifNamespaceName(value: string | string[], operator?: Operator | string) {
    return this.if(`NamespaceName`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by specifying the Amazon Resource Name (ARN) for the related service
   *
   * https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions
   *
   * Applies to actions:
   * - .toDeregisterInstance()
   * - .toGetInstance()
   * - .toGetInstancesHealthStatus()
   * - .toListInstances()
   * - .toRegisterInstance()
   * - .toUpdateInstanceCustomHealthStatus()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifServiceArn(value: string | string[], operator?: Operator | string) {
    return this.if(`ServiceArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by specifying the name of the related service
   *
   * https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions
   *
   * Applies to actions:
   * - .toDiscoverInstances()
   * - .toDiscoverInstancesRevision()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifServiceName(value: string | string[], operator?: Operator | string) {
    return this.if(`ServiceName`, value, operator ?? 'StringLike');
  }
}
