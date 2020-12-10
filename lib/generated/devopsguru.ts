import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [devops-guru](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondevopsguru.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class DevopsGuru extends PolicyStatement {
  public servicePrefix = 'devops-guru';

  /**
   * Statement provider for service [devops-guru](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondevopsguru.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add a notification channel to DevOps Guru
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sns:GetTopicAttributes
   * - sns:SetTopicAttributes
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_AddNotificationChannel.html
   */
  public toAddNotificationChannel() {
    this.to('devops-guru:AddNotificationChannel');
    return this;
  }

  /**
   * Grants permission to view the health of operations in your AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeAccountHealth.html
   */
  public toDescribeAccountHealth() {
    this.to('devops-guru:DescribeAccountHealth');
    return this;
  }

  /**
   * Grants permission to view the health of operations within a time range in your AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeAccountOverview.html
   */
  public toDescribeAccountOverview() {
    this.to('devops-guru:DescribeAccountOverview');
    return this;
  }

  /**
   * Grants permission to list the details of a specified anomaly
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeAnomaly.html
   */
  public toDescribeAnomaly() {
    this.to('devops-guru:DescribeAnomaly');
    return this;
  }

  /**
   * Grants permission to list the details of a specified insight
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeInsight.html
   */
  public toDescribeInsight() {
    this.to('devops-guru:DescribeInsight');
    return this;
  }

  /**
   * Grants permission to view the health of operations for each AWS CloudFormation stack specified in DevOps Guru
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeResourceCollectionHealth.html
   */
  public toDescribeResourceCollectionHealth() {
    this.to('devops-guru:DescribeResourceCollectionHealth');
    return this;
  }

  /**
   * Grants permission to view the integration status of services that can be integrated with DevOps Guru
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeServiceIntegration.html
   */
  public toDescribeServiceIntegration() {
    this.to('devops-guru:DescribeServiceIntegration');
    return this;
  }

  /**
   * Grants permission to list AWS CloudFormation stacks that DevOps Guru is configured to use
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_GetResourceCollection.html
   */
  public toGetResourceCollection() {
    this.to('devops-guru:GetResourceCollection');
    return this;
  }

  /**
   * Grants permission to list anomalies of a given insight in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListAnomaliesForInsight.html
   */
  public toListAnomaliesForInsight() {
    this.to('devops-guru:ListAnomaliesForInsight');
    return this;
  }

  /**
   * Grants permission to list resource events that are evaluated by DevOps Guru
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListEvents.html
   */
  public toListEvents() {
    this.to('devops-guru:ListEvents');
    return this;
  }

  /**
   * Grants permission to list insights in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListInsights.html
   */
  public toListInsights() {
    this.to('devops-guru:ListInsights');
    return this;
  }

  /**
   * Grants permission to list notification channels configured for DevOps Guru in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListNotificationChannels.html
   */
  public toListNotificationChannels() {
    this.to('devops-guru:ListNotificationChannels');
    return this;
  }

  /**
   * Grants permission to list a specified insight's recommendations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListRecommendations.html
   */
  public toListRecommendations() {
    this.to('devops-guru:ListRecommendations');
    return this;
  }

  /**
   * Grants permission to submit a feedback to DevOps Guru
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_PutFeedback.html
   */
  public toPutFeedback() {
    this.to('devops-guru:PutFeedback');
    return this;
  }

  /**
   * Grants permission to remove a notification channel from DevOps Guru
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sns:GetTopicAttributes
   * - sns:SetTopicAttributes
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_RemoveNotificationChannel.html
   */
  public toRemoveNotificationChannel() {
    this.to('devops-guru:RemoveNotificationChannel');
    return this;
  }

  /**
   * Grants permission to search insights in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_SearchInsights.html
   */
  public toSearchInsights() {
    this.to('devops-guru:SearchInsights');
    return this;
  }

  /**
   * Grants permission to update the list of AWS CloudFormation stacks that are used to specify which AWS resources in your account are analyzed by DevOps Guru
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_UpdateResourceCollection.html
   */
  public toUpdateResourceCollection() {
    this.to('devops-guru:UpdateResourceCollection');
    return this;
  }

  /**
   * Grants permissions to enable or disable a service that integrates with DevOps Guru
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_UpdateServiceIntegration.html
   */
  public toUpdateServiceIntegration() {
    this.to('devops-guru:UpdateServiceIntegration');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddNotificationChannel",
      "PutFeedback",
      "RemoveNotificationChannel",
      "UpdateResourceCollection",
      "UpdateServiceIntegration"
    ],
    "Read": [
      "DescribeAccountHealth",
      "DescribeAccountOverview",
      "DescribeAnomaly",
      "DescribeInsight",
      "DescribeResourceCollectionHealth",
      "DescribeServiceIntegration",
      "GetResourceCollection"
    ],
    "List": [
      "ListAnomaliesForInsight",
      "ListEvents",
      "ListInsights",
      "ListNotificationChannels",
      "ListRecommendations",
      "SearchInsights"
    ]
  };

  /**
   * Adds a resource of type topic to the statement
   *
   * https://docs.aws.amazon.com/devops-guru/latest/userguide/CreateTopic.html
   *
   * @param topicName - Identifier for the topicName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTopic(topicName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sns:${Region}:${Account}:${TopicName}';
    arn = arn.replace('${TopicName}', topicName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type DevopsGuruActionsWrite = 'AddNotificationChannel' | 'PutFeedback' | 'RemoveNotificationChannel' | 'UpdateResourceCollection' | 'UpdateServiceIntegration';
export type DevopsGuruActionsRead = 'DescribeAccountHealth' | 'DescribeAccountOverview' | 'DescribeAnomaly' | 'DescribeInsight' | 'DescribeResourceCollectionHealth' | 'DescribeServiceIntegration' | 'GetResourceCollection';
export type DevopsGuruActionsList = 'ListAnomaliesForInsight' | 'ListEvents' | 'ListInsights' | 'ListNotificationChannels' | 'ListRecommendations' | 'SearchInsights';
export type DevopsGuruActions = DevopsGuruActionsWrite | DevopsGuruActionsRead | DevopsGuruActionsList;
