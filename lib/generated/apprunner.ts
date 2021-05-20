import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
  constructor (sid?: string) {
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
   * Grants permission to create an AWS App Runner service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifConnectionArn()
   * - .ifAutoScalingConfigurationArn()
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html
   */
  public toCreateService() {
    return this.to('CreateService');
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
   * Grants permission to delete an AWS App Runner connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteConnection.html
   */
  public toDeleteConnection() {
    return this.to('DeleteConnection');
  }

  /**
   * Grants permission to delete an AWS App Runner service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html
   */
  public toDeleteService() {
    return this.to('DeleteService');
  }

  /**
   * Grants permission to retrieve descriptions of an AWS App Runner automatic scaling configuration resource
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
   * Grants permission to retrieve description of an operation that occurred on an AWS App Runner service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeOperation.html
   */
  public toDescribeOperation() {
    return this.to('DescribeOperation');
  }

  /**
   * Grants permission to retrieve description of an AWS App Runner service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html
   */
  public toDescribeService() {
    return this.to('DescribeService');
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
   * Grants permission to retrieve a list of AWS App Runner connections associated with your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_ListConnections.html
   */
  public toListConnections() {
    return this.to('ListConnections');
  }

  /**
   * Grants permission to retrieve a list of operations that occurred on an AWS App Runner service
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
   * Grants permission to add tags to, or update tag values of, an App Runner resource
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
   * Grants permission to remove tags from an App Runner resource
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
   * Grants permission to update an AWS App Runner service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifConnectionArn()
   * - .ifAutoScalingConfigurationArn()
   *
   * https://docs.aws.amazon.com/apprunner/latest/api/API_UpdateService.html
   */
  public toUpdateService() {
    return this.to('UpdateService');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateCustomDomain",
      "CreateAutoScalingConfiguration",
      "CreateConnection",
      "CreateService",
      "DeleteAutoScalingConfiguration",
      "DeleteConnection",
      "DeleteService",
      "DisassociateCustomDomain",
      "PauseService",
      "ResumeService",
      "StartDeployment",
      "UpdateService"
    ],
    "Read": [
      "DescribeAutoScalingConfiguration",
      "DescribeCustomDomains",
      "DescribeOperation",
      "DescribeService",
      "ListTagsForResource"
    ],
    "List": [
      "ListAutoScalingConfigurations",
      "ListConnections",
      "ListOperations",
      "ListServices"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type service to the statement
   *
   * @param serviceName - Identifier for the serviceName.
   * @param serviceId - Identifier for the serviceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onService(serviceName: string, serviceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apprunner:${Region}:${Account}:service/${ServiceName}/${ServiceId}';
    arn = arn.replace('${ServiceName}', serviceName);
    arn = arn.replace('${ServiceId}', serviceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type connection to the statement
   *
   * @param connectionName - Identifier for the connectionName.
   * @param connectionId - Identifier for the connectionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConnection(connectionName: string, connectionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apprunner:${Region}:${Account}:connection/${ConnectionName}/${ConnectionId}';
    arn = arn.replace('${ConnectionName}', connectionName);
    arn = arn.replace('${ConnectionId}', connectionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type autoscalingconfiguration to the statement
   *
   * @param autoscalingConfigurationName - Identifier for the autoscalingConfigurationName.
   * @param autoscalingConfigurationVersion - Identifier for the autoscalingConfigurationVersion.
   * @param autoscalingConfigurationId - Identifier for the autoscalingConfigurationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAutoscalingconfiguration(autoscalingConfigurationName: string, autoscalingConfigurationVersion: string, autoscalingConfigurationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apprunner:${Region}:${Account}:autoscalingconfiguration/${AutoscalingConfigurationName}/${AutoscalingConfigurationVersion}/${AutoscalingConfigurationId}';
    arn = arn.replace('${AutoscalingConfigurationName}', autoscalingConfigurationName);
    arn = arn.replace('${AutoscalingConfigurationVersion}', autoscalingConfigurationVersion);
    arn = arn.replace('${AutoscalingConfigurationId}', autoscalingConfigurationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access to the CreateService and UpdateService actions based on the ARN of an associated AutoScalingConfiguration resource
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
   * Filters access to the CreateService and UpdateService actions based on the ARN of an associated Connection resource
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
}
