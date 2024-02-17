import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [kafkaconnect](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedstreamingforkafkaconnect.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Kafkaconnect extends PolicyStatement {
  public servicePrefix = 'kafkaconnect';

  /**
   * Statement provider for service [kafkaconnect](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedstreamingforkafkaconnect.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an MSK Connect connector
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   * - firehose:TagDeliveryStream
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PassRole
   * - iam:PutRolePolicy
   * - logs:CreateLogDelivery
   * - logs:DescribeLogGroups
   * - logs:DescribeResourcePolicies
   * - logs:GetLogDelivery
   * - logs:ListLogDeliveries
   * - logs:PutResourcePolicy
   * - s3:GetBucketPolicy
   * - s3:PutBucketPolicy
   *
   * https://docs.aws.amazon.com/MSKC/latest/mskc/API_CreateConnector.html
   */
  public toCreateConnector() {
    return this.to('CreateConnector');
  }

  /**
   * Grants permission to create an MSK Connect custom plugin
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/MSKC/latest/mskc/API_CreateCustomPlugin.html
   */
  public toCreateCustomPlugin() {
    return this.to('CreateCustomPlugin');
  }

  /**
   * Grants permission to create an MSK Connect worker configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/MSKC/latest/mskc/API_CreateWorkerConfiguration.html
   */
  public toCreateWorkerConfiguration() {
    return this.to('CreateWorkerConfiguration');
  }

  /**
   * Grants permission to delete an MSK Connect connector
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - logs:DeleteLogDelivery
   * - logs:ListLogDeliveries
   *
   * https://docs.aws.amazon.com/MSKC/latest/mskc/API_DeleteConnector.html
   */
  public toDeleteConnector() {
    return this.to('DeleteConnector');
  }

  /**
   * Grants permission to delete an MSK Connect custom plugin
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/MSKC/latest/mskc/API_DeleteCustomPlugin.html
   */
  public toDeleteCustomPlugin() {
    return this.to('DeleteCustomPlugin');
  }

  /**
   * Grants permission to describe an MSK Connect connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/MSKC/latest/mskc/API_DescribeConnector.html
   */
  public toDescribeConnector() {
    return this.to('DescribeConnector');
  }

  /**
   * Grants permission to describe an MSK Connect custom plugin
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/MSKC/latest/mskc/API_DescribeCustomPlugin.html
   */
  public toDescribeCustomPlugin() {
    return this.to('DescribeCustomPlugin');
  }

  /**
   * Grants permission to describe an MSK Connect worker configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/MSKC/latest/mskc/API_DescribeWorkerConfiguration.html
   */
  public toDescribeWorkerConfiguration() {
    return this.to('DescribeWorkerConfiguration');
  }

  /**
   * Grants permission to list all MSK Connect connectors in this account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/MSKC/latest/mskc/API_ListConnectors.html
   */
  public toListConnectors() {
    return this.to('ListConnectors');
  }

  /**
   * Grants permission to list all MSK Connect custom plugins in this account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/MSKC/latest/mskc/API_ListCustomPlugins.html
   */
  public toListCustomPlugins() {
    return this.to('ListCustomPlugins');
  }

  /**
   * Grants permission to list all MSK Connect worker configurations in this account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/MSKC/latest/mskc/API_ListWorkerConfigurations.html
   */
  public toListWorkerConfigurations() {
    return this.to('ListWorkerConfigurations');
  }

  /**
   * Grants permission to update an MSK Connect connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/MSKC/latest/mskc/API_UpdateConnector.html
   */
  public toUpdateConnector() {
    return this.to('UpdateConnector');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateConnector',
      'CreateCustomPlugin',
      'CreateWorkerConfiguration',
      'DeleteConnector',
      'DeleteCustomPlugin',
      'UpdateConnector'
    ],
    Read: [
      'DescribeConnector',
      'DescribeCustomPlugin',
      'DescribeWorkerConfiguration',
      'ListConnectors',
      'ListCustomPlugins',
      'ListWorkerConfigurations'
    ]
  };

  /**
   * Adds a resource of type connector to the statement
   *
   * https://docs.aws.amazon.com/MSKC/latest/mskc/API_ConnectorSummary.html
   *
   * @param connectorName - Identifier for the connectorName.
   * @param uUID - Identifier for the uUID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onConnector(connectorName: string, uUID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:kafkaconnect:${ region || this.defaultRegion }:${ account || this.defaultAccount }:connector/${ connectorName }/${ uUID }`);
  }

  /**
   * Adds a resource of type custom plugin to the statement
   *
   * https://docs.aws.amazon.com/MSKC/latest/mskc/API_CustomPlugin.html
   *
   * @param customPluginName - Identifier for the customPluginName.
   * @param uUID - Identifier for the uUID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCustomPlugin(customPluginName: string, uUID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:kafkaconnect:${ region || this.defaultRegion }:${ account || this.defaultAccount }:custom-plugin/${ customPluginName }/${ uUID }`);
  }

  /**
   * Adds a resource of type worker configuration to the statement
   *
   * https://docs.aws.amazon.com/MSKC/latest/mskc/API_WorkerConfiguration.html
   *
   * @param workerConfigurationName - Identifier for the workerConfigurationName.
   * @param uUID - Identifier for the uUID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onWorkerConfiguration(workerConfigurationName: string, uUID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:kafkaconnect:${ region || this.defaultRegion }:${ account || this.defaultAccount }:worker-configuration/${ workerConfigurationName }/${ uUID }`);
  }
}
