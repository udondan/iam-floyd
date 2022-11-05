import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [apprunner](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapprunner.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Apprunner extends PolicyStatement {
  public servicePrefix = 'apprunner';

  /**
   * Statement provider for service [apprunner](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapprunner.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate your own domain name with the AWS App Runner subdomain URL of your App Runner service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_AssociateCustomDomain.html
   */
  public toAssociateCustomDomain() {
    return this.to('AssociateCustomDomain');
  }

  /**
   * Grants permission to create an AWS App Runner automatic scaling configuration resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_CreateAutoScalingConfiguration.html
   */
  public toCreateAutoScalingConfiguration() {
    return this.to('CreateAutoScalingConfiguration');
  }

  /**
   * Grants permission to create an AWS App Runner connection resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_CreateConnection.html
   */
  public toCreateConnection() {
    return this.to('CreateConnection');
  }

  /**
   * Grants permission to create an AWS App Runner observability configuration resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_CreateObservabilityConfiguration.html
   */
  public toCreateObservabilityConfiguration() {
    return this.to('CreateObservabilityConfiguration');
  }

  /**
   * Grants permission to create an AWS App Runner service resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifConnectionArn()
   * - .ifAutoScalingConfigurationArn()
   * - .ifObservabilityConfigurationArn()
   * - .ifVpcConnectorArn()
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html
   */
  public toCreateService() {
    return this.to('CreateService');
  }

  /**
   * Grants permission to create an AWS App Runner VPC connector resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_CreateVpcConnector.html
   */
  public toCreateVpcConnector() {
    return this.to('CreateVpcConnector');
  }

  /**
   * Grants permission to create an AWS App Runner VpcIngressConnection resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifServiceArn()
   * - .ifVpcId()
   * - .ifVpcEndpointId()
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_CreateVpcIngressConnection.html
   */
  public toCreateVpcIngressConnection() {
    return this.to('CreateVpcIngressConnection');
  }

  /**
   * Grants permission to delete an AWS App Runner automatic scaling configuration resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteAutoScalingConfiguration.html
   */
  public toDeleteAutoScalingConfiguration() {
    return this.to('DeleteAutoScalingConfiguration');
  }

  /**
   * Grants permission to delete an AWS App Runner connection resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteConnection.html
   */
  public toDeleteConnection() {
    return this.to('DeleteConnection');
  }

  /**
   * Grants permission to delete an AWS App Runner observability configuration resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteObservabilityConfiguration.html
   */
  public toDeleteObservabilityConfiguration() {
    return this.to('DeleteObservabilityConfiguration');
  }

  /**
   * Grants permission to delete an AWS App Runner service resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html
   */
  public toDeleteService() {
    return this.to('DeleteService');
  }

  /**
   * Grants permission to delete an AWS App Runner VPC connector resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteVpcConnector.html
   */
  public toDeleteVpcConnector() {
    return this.to('DeleteVpcConnector');
  }

  /**
   * Grants permission to delete an AWS App Runner VpcIngressConnection resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteVpcIngressConnection.html
   */
  public toDeleteVpcIngressConnection() {
    return this.to('DeleteVpcIngressConnection');
  }

  /**
   * Grants permission to retrieve the description of an AWS App Runner automatic scaling configuration resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeAutoScalingConfiguration.html
   */
  public toDescribeAutoScalingConfiguration() {
    return this.to('DescribeAutoScalingConfiguration');
  }

  /**
   * Grants permission to retrieve descriptions of custom domain names associated with an AWS App Runner service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeCustomDomains.html
   */
  public toDescribeCustomDomains() {
    return this.to('DescribeCustomDomains');
  }

  /**
   * Grants permission to retrieve the description of an AWS App Runner observability configuration resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeObservabilityConfiguration.html
   */
  public toDescribeObservabilityConfiguration() {
    return this.to('DescribeObservabilityConfiguration');
  }

  /**
   * Grants permission to retrieve the description of an operation that occurred on an AWS App Runner service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeOperation.html
   */
  public toDescribeOperation() {
    return this.to('DescribeOperation');
  }

  /**
   * Grants permission to retrieve the description of an AWS App Runner service resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html
   */
  public toDescribeService() {
    return this.to('DescribeService');
  }

  /**
   * Grants permission to retrieve the description of an AWS App Runner VPC connector resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeVpcConnector.html
   */
  public toDescribeVpcConnector() {
    return this.to('DescribeVpcConnector');
  }

  /**
   * Grants permission to retrieve the description of an AWS App Runner VpcIngressConnection resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeVpcIngressConnection.html
   */
  public toDescribeVpcIngressConnection() {
    return this.to('DescribeVpcIngressConnection');
  }

  /**
   * Grants permission to disassociate a custom domain name from an AWS App Runner service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_DisassociateCustomDomain.html
   */
  public toDisassociateCustomDomain() {
    return this.to('DisassociateCustomDomain');
  }

  /**
   * Grants permission to retrieve a list of AWS App Runner automatic scaling configurations in your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_ListAutoScalingConfigurations.html
   */
  public toListAutoScalingConfigurations() {
    return this.to('ListAutoScalingConfigurations');
  }

  /**
   * Grants permission to retrieve a list of AWS App Runner connections in your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_ListConnections.html
   */
  public toListConnections() {
    return this.to('ListConnections');
  }

  /**
   * Grants permission to retrieve a list of AWS App Runner observability configurations in your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_ListObservabilityConfigurations.html
   */
  public toListObservabilityConfigurations() {
    return this.to('ListObservabilityConfigurations');
  }

  /**
   * Grants permission to retrieve a list of operations that occurred on an AWS App Runner service resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html
   */
  public toListOperations() {
    return this.to('ListOperations');
  }

  /**
   * Grants permission to retrieve a list of running AWS App Runner services in your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html
   */
  public toListServices() {
    return this.to('ListServices');
  }

  /**
   * Grants permission to list tags associated with an AWS App Runner resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to retrieve a list of AWS App Runner VPC connectors in your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_ListVpcConnectors.html
   */
  public toListVpcConnectors() {
    return this.to('ListVpcConnectors');
  }

  /**
   * Grants permission to retrieve a list of AWS App Runner VpcIngressConnections in your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_ListVpcConnections.html
   */
  public toListVpcIngressConnections() {
    return this.to('ListVpcIngressConnections');
  }

  /**
   * Grants permission to pause an active AWS App Runner service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_PauseService.html
   */
  public toPauseService() {
    return this.to('PauseService');
  }

  /**
   * Grants permission to resume an active AWS App Runner service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_ResumeService.html
   */
  public toResumeService() {
    return this.to('ResumeService');
  }

  /**
   * Grants permission to initiate a manual deployemnt to an AWS App Runner service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_StartDeployment.html
   */
  public toStartDeployment() {
    return this.to('StartDeployment');
  }

  /**
   * Grants permission to add tags to, or update tag values of, an AWS App Runner resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from an AWS App Runner resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an AWS App Runner service resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifConnectionArn()
   * - .ifAutoScalingConfigurationArn()
   * - .ifObservabilityConfigurationArn()
   * - .ifVpcConnectorArn()
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_UpdateService.html
   */
  public toUpdateService() {
    return this.to('UpdateService');
  }

  /**
   * Grants permission to update an AWS App Runner VpcIngressConnection resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifVpcId()
   * - .ifVpcEndpointId()
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_UpdateVpcIngressConnection.html
   */
  public toUpdateVpcIngressConnection() {
    return this.to('UpdateVpcIngressConnection');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateCustomDomain',
      'CreateAutoScalingConfiguration',
      'CreateConnection',
      'CreateObservabilityConfiguration',
      'CreateService',
      'CreateVpcConnector',
      'CreateVpcIngressConnection',
      'DeleteAutoScalingConfiguration',
      'DeleteConnection',
      'DeleteObservabilityConfiguration',
      'DeleteService',
      'DeleteVpcConnector',
      'DeleteVpcIngressConnection',
      'DisassociateCustomDomain',
      'PauseService',
      'ResumeService',
      'StartDeployment',
      'UpdateService',
      'UpdateVpcIngressConnection'
    ],
    Read: [
      'DescribeAutoScalingConfiguration',
      'DescribeCustomDomains',
      'DescribeObservabilityConfiguration',
      'DescribeOperation',
      'DescribeService',
      'DescribeVpcConnector',
      'DescribeVpcIngressConnection',
      'ListTagsForResource'
    ],
    List: [
      'ListAutoScalingConfigurations',
      'ListConnections',
      'ListObservabilityConfigurations',
      'ListOperations',
      'ListServices',
      'ListVpcConnectors',
      'ListVpcIngressConnections'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type service to the statement
   *
   * @param serviceName - Identifier for the serviceName.
   * @param serviceId - Identifier for the serviceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onService(serviceName: string, serviceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Apprunner.defaultPartition }:apprunner:${ region || '*' }:${ account || '*' }:service/${ serviceName }/${ serviceId }`);
  }

  /**
   * Adds a resource of type connection to the statement
   *
   * @param connectionName - Identifier for the connectionName.
   * @param connectionId - Identifier for the connectionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConnection(connectionName: string, connectionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Apprunner.defaultPartition }:apprunner:${ region || '*' }:${ account || '*' }:connection/${ connectionName }/${ connectionId }`);
  }

  /**
   * Adds a resource of type autoscalingconfiguration to the statement
   *
   * @param autoscalingConfigurationName - Identifier for the autoscalingConfigurationName.
   * @param autoscalingConfigurationVersion - Identifier for the autoscalingConfigurationVersion.
   * @param autoscalingConfigurationId - Identifier for the autoscalingConfigurationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAutoscalingconfiguration(autoscalingConfigurationName: string, autoscalingConfigurationVersion: string, autoscalingConfigurationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Apprunner.defaultPartition }:apprunner:${ region || '*' }:${ account || '*' }:autoscalingconfiguration/${ autoscalingConfigurationName }/${ autoscalingConfigurationVersion }/${ autoscalingConfigurationId }`);
  }

  /**
   * Adds a resource of type observabilityconfiguration to the statement
   *
   * @param observabilityConfigurationName - Identifier for the observabilityConfigurationName.
   * @param observabilityConfigurationVersion - Identifier for the observabilityConfigurationVersion.
   * @param observabilityConfigurationId - Identifier for the observabilityConfigurationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onObservabilityconfiguration(observabilityConfigurationName: string, observabilityConfigurationVersion: string, observabilityConfigurationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Apprunner.defaultPartition }:apprunner:${ region || '*' }:${ account || '*' }:observabilityconfiguration/${ observabilityConfigurationName }/${ observabilityConfigurationVersion }/${ observabilityConfigurationId }`);
  }

  /**
   * Adds a resource of type vpcconnector to the statement
   *
   * @param vpcConnectorName - Identifier for the vpcConnectorName.
   * @param vpcConnectorVersion - Identifier for the vpcConnectorVersion.
   * @param vpcConnectorId - Identifier for the vpcConnectorId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVpcconnector(vpcConnectorName: string, vpcConnectorVersion: string, vpcConnectorId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Apprunner.defaultPartition }:apprunner:${ region || '*' }:${ account || '*' }:vpcconnector/${ vpcConnectorName }/${ vpcConnectorVersion }/${ vpcConnectorId }`);
  }

  /**
   * Adds a resource of type vpcingressconnection to the statement
   *
   * @param vpcIngressConnectionName - Identifier for the vpcIngressConnectionName.
   * @param vpcIngressConnectionId - Identifier for the vpcIngressConnectionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVpcingressconnection(vpcIngressConnectionName: string, vpcIngressConnectionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Apprunner.defaultPartition }:apprunner:${ region || '*' }:${ account || '*' }:vpcingressconnection/${ vpcIngressConnectionName }/${ vpcIngressConnectionId }`);
  }

  /**
   * Filters access by the CreateService and UpdateService actions based on the ARN of an associated AutoScalingConfiguration resource
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toUpdateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifAutoScalingConfigurationArn(value: string | string[], operator?: Operator | string) {
    return this.if(`AutoScalingConfigurationArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the CreateService and UpdateService actions based on the ARN of an associated Connection resource
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toUpdateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifConnectionArn(value: string | string[], operator?: Operator | string) {
    return this.if(`ConnectionArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the CreateService and UpdateService actions based on the ARN of an associated ObservabilityConfiguration resource
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toUpdateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifObservabilityConfigurationArn(value: string | string[], operator?: Operator | string) {
    return this.if(`ObservabilityConfigurationArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the CreateVpcIngressConnection action based on the ARN of an associated Service resource
   *
   * Applies to actions:
   * - .toCreateVpcIngressConnection()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifServiceArn(value: string | string[], operator?: Operator | string) {
    return this.if(`ServiceArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the CreateService and UpdateService actions based on the ARN of an associated VpcConnector resource
   *
   * Applies to actions:
   * - .toCreateService()
   * - .toUpdateService()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifVpcConnectorArn(value: string | string[], operator?: Operator | string) {
    return this.if(`VpcConnectorArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the CreateVpcIngressConnection and UpdateVpcIngressConnection actions based on the VPC Endpoint in the request
   *
   * Applies to actions:
   * - .toCreateVpcIngressConnection()
   * - .toUpdateVpcIngressConnection()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcEndpointId(value: string | string[], operator?: Operator | string) {
    return this.if(`VpcEndpointId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the CreateVpcIngressConnection and UpdateVpcIngressConnection actions based on the VPC in the request
   *
   * Applies to actions:
   * - .toCreateVpcIngressConnection()
   * - .toUpdateVpcIngressConnection()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcId(value: string | string[], operator?: Operator | string) {
    return this.if(`VpcId`, value, operator || 'StringLike');
  }
}
