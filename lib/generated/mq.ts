import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [mq](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmq.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mq extends PolicyStatement {
  public servicePrefix = 'mq';

  /**
   * Statement provider for service [mq](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmq.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a broker
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:CreateNetworkInterfacePermission
   * - ec2:CreateSecurityGroup
   * - ec2:CreateVpcEndpoint
   * - ec2:DescribeInternetGateways
   * - ec2:DescribeNetworkInterfacePermissions
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcEndpoints
   * - ec2:DescribeVpcs
   * - ec2:ModifyNetworkInterfaceAttribute
   * - iam:CreateServiceLinkedRole
   * - route53:AssociateVPCWithHostedZone
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-brokers.html#rest-api-brokers-methods-post
   */
  public toCreateBroker() {
    return this.to('CreateBroker');
  }

  /**
   * Grants permission to create a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and engine version)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configurations.html#rest-api-configurations-methods-post
   */
  public toCreateConfiguration() {
    return this.to('CreateConfiguration');
  }

  /**
   * Grants permission to create tags
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-post
   */
  public toCreateTags() {
    return this.to('CreateTags');
  }

  /**
   * Grants permission to create an ActiveMQ user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-post
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permission to delete a broker
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DeleteNetworkInterface
   * - ec2:DeleteNetworkInterfacePermission
   * - ec2:DeleteVpcEndpoints
   * - ec2:DetachNetworkInterface
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-delete
   */
  public toDeleteBroker() {
    return this.to('DeleteBroker');
  }

  /**
   * Grants permission to delete tags
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-delete
   */
  public toDeleteTags() {
    return this.to('DeleteTags');
  }

  /**
   * Grants permission to delete an ActiveMQ user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-delete
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permission to return information about the specified broker
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-get
   */
  public toDescribeBroker() {
    return this.to('DescribeBroker');
  }

  /**
   * Grants permission to return information about broker engines
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/broker-engine-types.html#broker-engine-types-http-methods
   */
  public toDescribeBrokerEngineTypes() {
    return this.to('DescribeBrokerEngineTypes');
  }

  /**
   * Grants permission to return information about the broker instance options
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/broker-instance-options.html#broker-engine-types-http-methods
   */
  public toDescribeBrokerInstanceOptions() {
    return this.to('DescribeBrokerInstanceOptions');
  }

  /**
   * Grants permission to return information about the specified configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration.html#rest-api-configuration-methods-get
   */
  public toDescribeConfiguration() {
    return this.to('DescribeConfiguration');
  }

  /**
   * Grants permission to return the specified configuration revision for the specified configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration-revision.html#rest-api-configuration-revision-methods-get
   */
  public toDescribeConfigurationRevision() {
    return this.to('DescribeConfigurationRevision');
  }

  /**
   * Grants permission to return information about an ActiveMQ user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-get
   */
  public toDescribeUser() {
    return this.to('DescribeUser');
  }

  /**
   * Grants permission to return a list of all brokers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-brokers.html#rest-api-brokers-methods-get
   */
  public toListBrokers() {
    return this.to('ListBrokers');
  }

  /**
   * Grants permission to return a list of all existing revisions for the specified configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-revisions.html#rest-api-revisions-methods-get
   */
  public toListConfigurationRevisions() {
    return this.to('ListConfigurationRevisions');
  }

  /**
   * Grants permission to return a list of all configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configurations.html#rest-api-configurations-methods-get
   */
  public toListConfigurations() {
    return this.to('ListConfigurations');
  }

  /**
   * Grants permission to return a list of tags
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-get
   */
  public toListTags() {
    return this.to('ListTags');
  }

  /**
   * Grants permission to return a list of all ActiveMQ users
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-users.html#rest-api-users-methods-get
   */
  public toListUsers() {
    return this.to('ListUsers');
  }

  /**
   * Grants permission to reboot a broker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-restart.html#rest-api-reboot-methods-post
   */
  public toRebootBroker() {
    return this.to('RebootBroker');
  }

  /**
   * Grants permission to add a pending configuration change to a broker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-get
   */
  public toUpdateBroker() {
    return this.to('UpdateBroker');
  }

  /**
   * Grants permission to update the specified configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration.html#rest-api-configuration-methods-put
   */
  public toUpdateConfiguration() {
    return this.to('UpdateConfiguration');
  }

  /**
   * Grants permission to update the information for an ActiveMQ user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-put
   */
  public toUpdateUser() {
    return this.to('UpdateUser');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateBroker',
      'CreateConfiguration',
      'CreateUser',
      'DeleteBroker',
      'DeleteUser',
      'RebootBroker',
      'UpdateBroker',
      'UpdateConfiguration',
      'UpdateUser'
    ],
    Tagging: [
      'CreateTags',
      'DeleteTags'
    ],
    Read: [
      'DescribeBroker',
      'DescribeBrokerEngineTypes',
      'DescribeBrokerInstanceOptions',
      'DescribeConfiguration',
      'DescribeConfigurationRevision',
      'DescribeUser'
    ],
    List: [
      'ListBrokers',
      'ListConfigurationRevisions',
      'ListConfigurations',
      'ListTags',
      'ListUsers'
    ]
  };

  /**
   * Adds a resource of type brokers to the statement
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/amazon-mq-how-it-works.html
   *
   * @param brokerId - Identifier for the brokerId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBrokers(brokerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:mq:${ region || '*' }:${ account || '*' }:broker:${ brokerId }`);
  }

  /**
   * Adds a resource of type configurations to the statement
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/amazon-mq-how-it-works.html
   *
   * @param configurationId - Identifier for the configurationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfigurations(configurationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:mq:${ region || '*' }:${ account || '*' }:configuration:${ configurationId }`);
  }
}
