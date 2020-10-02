import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [mq](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmq.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mq extends PolicyStatement {
  public servicePrefix = 'mq';

  /**
   * Statement provider for service [mq](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmq.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a broker.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-brokers.html#rest-api-brokers-methods-post
   */
  public toCreateBroker() {
    this.to('mq:CreateBroker');
    return this;
  }

  /**
   * Grants permission to create a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and engine version).
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
    this.to('mq:CreateConfiguration');
    return this;
  }

  /**
   * Grants permission to create tags.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-post
   */
  public toCreateTags() {
    this.to('mq:CreateTags');
    return this;
  }

  /**
   * Grants permission to create an ActiveMQ user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-post
   */
  public toCreateUser() {
    this.to('mq:CreateUser');
    return this;
  }

  /**
   * Grants permission to delete a broker.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-delete
   */
  public toDeleteBroker() {
    this.to('mq:DeleteBroker');
    return this;
  }

  /**
   * Grants permission to delete tags.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-delete
   */
  public toDeleteTags() {
    this.to('mq:DeleteTags');
    return this;
  }

  /**
   * Grants permission to delete an ActiveMQ user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-delete
   */
  public toDeleteUser() {
    this.to('mq:DeleteUser');
    return this;
  }

  /**
   * Grants permission to return information about the specified broker.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-get
   */
  public toDescribeBroker() {
    this.to('mq:DescribeBroker');
    return this;
  }

  /**
   * Grants permission to return information about broker engines.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/broker-engine-types.html#broker-engine-types-http-methods
   */
  public toDescribeBrokerEngineTypes() {
    this.to('mq:DescribeBrokerEngineTypes');
    return this;
  }

  /**
   * Grants permission to return information about the broker instance options
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/broker-instance-options.html#broker-engine-types-http-methods
   */
  public toDescribeBrokerInstanceOptions() {
    this.to('mq:DescribeBrokerInstanceOptions');
    return this;
  }

  /**
   * Grants permission to return information about the specified configuration.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration.html#rest-api-configuration-methods-get
   */
  public toDescribeConfiguration() {
    this.to('mq:DescribeConfiguration');
    return this;
  }

  /**
   * Grants permission to return the specified configuration revision for the specified configuration.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration-revision.html#rest-api-configuration-revision-methods-get
   */
  public toDescribeConfigurationRevision() {
    this.to('mq:DescribeConfigurationRevision');
    return this;
  }

  /**
   * Grants permission to return information about an ActiveMQ user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-get
   */
  public toDescribeUser() {
    this.to('mq:DescribeUser');
    return this;
  }

  /**
   * Grants permission to return a list of all brokers.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-brokers.html#rest-api-brokers-methods-get
   */
  public toListBrokers() {
    this.to('mq:ListBrokers');
    return this;
  }

  /**
   * Grants permission to return a list of all existing revisions for the specified configuration.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-revisions.html#rest-api-revisions-methods-get
   */
  public toListConfigurationRevisions() {
    this.to('mq:ListConfigurationRevisions');
    return this;
  }

  /**
   * Grants permission to return a list of all configurations.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configurations.html#rest-api-configurations-methods-get
   */
  public toListConfigurations() {
    this.to('mq:ListConfigurations');
    return this;
  }

  /**
   * Grants permission to return a list of tags.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-get
   */
  public toListTags() {
    this.to('mq:ListTags');
    return this;
  }

  /**
   * Grants permission to return a list of all ActiveMQ users.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-users.html#rest-api-users-methods-get
   */
  public toListUsers() {
    this.to('mq:ListUsers');
    return this;
  }

  /**
   * Grants permission to reboot a broker.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-restart.html#rest-api-reboot-methods-post
   */
  public toRebootBroker() {
    this.to('mq:RebootBroker');
    return this;
  }

  /**
   * Grants permission to add a pending configuration change to a broker.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-get
   */
  public toUpdateBroker() {
    this.to('mq:UpdateBroker');
    return this;
  }

  /**
   * Grants permission to update the specified configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration.html#rest-api-configuration-methods-put
   */
  public toUpdateConfiguration() {
    this.to('mq:UpdateConfiguration');
    return this;
  }

  /**
   * Grants permission to update the information for an ActiveMQ user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-put
   */
  public toUpdateUser() {
    this.to('mq:UpdateUser');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateBroker",
      "CreateConfiguration",
      "CreateTags",
      "CreateUser",
      "DeleteBroker",
      "DeleteTags",
      "DeleteUser",
      "RebootBroker",
      "UpdateBroker",
      "UpdateConfiguration",
      "UpdateUser"
    ],
    "Read": [
      "DescribeBroker",
      "DescribeBrokerEngineTypes",
      "DescribeBrokerInstanceOptions",
      "DescribeConfiguration",
      "DescribeConfigurationRevision",
      "DescribeUser"
    ],
    "List": [
      "ListBrokers",
      "ListConfigurationRevisions",
      "ListConfigurations",
      "ListTags",
      "ListUsers"
    ]
  };

  /**
   * Adds a resource of type brokers to the statement
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
    var arn = 'arn:${Partition}:mq:${Region}:${Account}:broker:${Broker-id}';
    arn = arn.replace('${Broker-id}', brokerId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type configurations to the statement
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
    var arn = 'arn:${Partition}:mq:${Region}:${Account}:configuration:${Configuration-id}';
    arn = arn.replace('${Configuration-id}', configurationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
