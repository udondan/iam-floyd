import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [servicediscovery](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudmap.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Servicediscovery extends PolicyStatement {
  public servicePrefix = 'servicediscovery';

  /**
   * Statement provider for service [servicediscovery](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudmap.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates an HTTP namespace.
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
    this.to('servicediscovery:CreateHttpNamespace');
    return this;
  }

  /**
   * Creates a private namespace based on DNS, which will be visible only inside a specified Amazon VPC.
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
    this.to('servicediscovery:CreatePrivateDnsNamespace');
    return this;
  }

  /**
   * Creates a public namespace based on DNS, which will be visible on the internet.
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
    this.to('servicediscovery:CreatePublicDnsNamespace');
    return this;
  }

  /**
   * Creates a service.
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
    this.to('servicediscovery:CreateService');
    return this;
  }

  /**
   * Deletes a specified namespace.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_DeleteNamespace.html
   */
  public toDeleteNamespace() {
    this.to('servicediscovery:DeleteNamespace');
    return this;
  }

  /**
   * Deletes a specified service.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_DeleteService.html
   */
  public toDeleteService() {
    this.to('servicediscovery:DeleteService');
    return this;
  }

  /**
   * Deletes the records and the health check, if any, that Amazon Route 53 created for the specified instance.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceArn()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_DeregisterInstance.html
   */
  public toDeregisterInstance() {
    this.to('servicediscovery:DeregisterInstance');
    return this;
  }

  /**
   * Discovers registered instances for a specified namespace and service.
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
    this.to('servicediscovery:DiscoverInstances');
    return this;
  }

  /**
   * Gets information about a specified instance.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifServiceArn()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetInstance.html
   */
  public toGetInstance() {
    this.to('servicediscovery:GetInstance');
    return this;
  }

  /**
   * Gets the current health status (Healthy, Unhealthy, or Unknown) of one or more instances.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifServiceArn()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetInstancesHealthStatus.html
   */
  public toGetInstancesHealthStatus() {
    this.to('servicediscovery:GetInstancesHealthStatus');
    return this;
  }

  /**
   * Gets information about a namespace.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetNamespace.html
   */
  public toGetNamespace() {
    this.to('servicediscovery:GetNamespace');
    return this;
  }

  /**
   * Gets information about a specific operation.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html
   */
  public toGetOperation() {
    this.to('servicediscovery:GetOperation');
    return this;
  }

  /**
   * Gets the settings for a specified service.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetService.html
   */
  public toGetService() {
    this.to('servicediscovery:GetService');
    return this;
  }

  /**
   * Gets summary information about the instances that were registered with a specified service.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifServiceArn()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_ListInstances.html
   */
  public toListInstances() {
    this.to('servicediscovery:ListInstances');
    return this;
  }

  /**
   * Gets information about the namespaces.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_ListNamespaces.html
   */
  public toListNamespaces() {
    this.to('servicediscovery:ListNamespaces');
    return this;
  }

  /**
   * Lists operations that match the criteria that you specify.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html
   */
  public toListOperations() {
    this.to('servicediscovery:ListOperations');
    return this;
  }

  /**
   * Gets settings for all the services that match specified filters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_ListServices.html
   */
  public toListServices() {
    this.to('servicediscovery:ListServices');
    return this;
  }

  /**
   * Lists tags for the specified resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('servicediscovery:ListTagsForResource');
    return this;
  }

  /**
   * Registers an instance based on the settings in a specified service.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceArn()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html
   */
  public toRegisterInstance() {
    this.to('servicediscovery:RegisterInstance');
    return this;
  }

  /**
   * Adds one or more tags to the specified resource.
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
    this.to('servicediscovery:TagResource');
    return this;
  }

  /**
   * Removes one or more tags from the specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('servicediscovery:UntagResource');
    return this;
  }

  /**
   * Updates the current health status for an instance that has a custom health check.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceArn()
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html
   */
  public toUpdateInstanceCustomHealthStatus() {
    this.to('servicediscovery:UpdateInstanceCustomHealthStatus');
    return this;
  }

  /**
   * Updates the settings in a specified service.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateService.html
   */
  public toUpdateService() {
    this.to('servicediscovery:UpdateService');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateHttpNamespace",
      "CreatePrivateDnsNamespace",
      "CreatePublicDnsNamespace",
      "CreateService",
      "DeleteNamespace",
      "DeleteService",
      "DeregisterInstance",
      "RegisterInstance",
      "UpdateInstanceCustomHealthStatus",
      "UpdateService"
    ],
    "Read": [
      "DiscoverInstances",
      "GetInstance",
      "GetInstancesHealthStatus",
      "GetNamespace",
      "GetOperation",
      "GetService"
    ],
    "List": [
      "ListInstances",
      "ListNamespaces",
      "ListOperations",
      "ListServices",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type namespace to the statement
   *
   * https://docs.aws.amazon.com/cloud-map/latest/dg/API_Namespace.html
   *
   * @param namespaceId - Identifier for the namespaceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNamespace(namespaceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:servicediscovery:${Region}:${Account}:namespace/${NamespaceId}';
    arn = arn.replace('${NamespaceId}', namespaceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type service to the statement
   *
   * https://docs.aws.amazon.com/cloud-map/latest/dg/API_Service.html
   *
   * @param serviceId - Identifier for the serviceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onService(serviceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:servicediscovery:${Region}:${Account}:service/${ServiceId}';
    arn = arn.replace('${ServiceId}', serviceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * A filter that lets you get objects by specifying the Amazon Resource Name (ARN) for the related namespace.
   *
   * https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions
   *
   * Applies to actions:
   * - .toCreateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifNamespaceArn(value: string | string[], operator?: Operator | string) {
    return this.if(`servicediscovery:NamespaceArn`, value, operator || 'StringLike');
  }

  /**
   * A filter that lets you get objects by specifying the name of the related namespace.
   *
   * https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions
   *
   * Applies to actions:
   * - .toDiscoverInstances()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifNamespaceName(value: string | string[], operator?: Operator | string) {
    return this.if(`servicediscovery:NamespaceName`, value, operator || 'StringLike');
  }

  /**
   * A filter that lets you get objects by specifying the Amazon Resource Name (ARN) for the related service.
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
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifServiceArn(value: string | string[], operator?: Operator | string) {
    return this.if(`servicediscovery:ServiceArn`, value, operator || 'StringLike');
  }

  /**
   * A filter that lets you get objects by specifying the name of the related service.
   *
   * https://docs.aws.amazon.com/cloud-map/latest/dg/access-control-overview.html#specifying-conditions
   *
   * Applies to actions:
   * - .toDiscoverInstances()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifServiceName(value: string | string[], operator?: Operator | string) {
    return this.if(`servicediscovery:ServiceName`, value, operator || 'StringLike');
  }
}
