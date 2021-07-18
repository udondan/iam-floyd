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
    return this.to('AddNotificationChannel');
  }

  /**
   * Grants permission to view the health of operations in your AWSaccount
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeAccountHealth.html
   */
  public toDescribeAccountHealth() {
    return this.to('DescribeAccountHealth');
  }

  /**
   * Grants permission to view the health of operations within a time range in your AWSaccount
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeAccountOverview.html
   */
  public toDescribeAccountOverview() {
    return this.to('DescribeAccountOverview');
  }

  /**
   * Grants permission to list the details of a specified anomaly
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeAnomaly.html
   */
  public toDescribeAnomaly() {
    return this.to('DescribeAnomaly');
  }

  /**
   * Grants permission to view the feedback details of a specified insight
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeFeedback.html
   */
  public toDescribeFeedback() {
    return this.to('DescribeFeedback');
  }

  /**
   * Grants permission to list the details of a specified insight
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeInsight.html
   */
  public toDescribeInsight() {
    return this.to('DescribeInsight');
  }

  /**
   * Grants permission to view the health of operations for each AWS CloudFormation stack specified in DevOps Guru
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeResourceCollectionHealth.html
   */
  public toDescribeResourceCollectionHealth() {
    return this.to('DescribeResourceCollectionHealth');
  }

  /**
   * Grants permission to view the integration status of services that can be integrated with DevOps Guru
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_DescribeServiceIntegration.html
   */
  public toDescribeServiceIntegration() {
    return this.to('DescribeServiceIntegration');
  }

  /**
   * Grants permission to list service resource cost estimates
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_GetCostEstimation.html
   */
  public toGetCostEstimation() {
    return this.to('GetCostEstimation');
  }

  /**
   * Grants permission to list AWS CloudFormation stacks that DevOps Guru is configured to use
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_GetResourceCollection.html
   */
  public toGetResourceCollection() {
    return this.to('GetResourceCollection');
  }

  /**
   * Grants permission to list anomalies of a given insight in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListAnomaliesForInsight.html
   */
  public toListAnomaliesForInsight() {
    return this.to('ListAnomaliesForInsight');
  }

  /**
   * Grants permission to list resource events that are evaluated by DevOps Guru
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListEvents.html
   */
  public toListEvents() {
    return this.to('ListEvents');
  }

  /**
   * Grants permission to list insights in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListInsights.html
   */
  public toListInsights() {
    return this.to('ListInsights');
  }

  /**
   * Grants permission to list notification channels configured for DevOps Guru in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListNotificationChannels.html
   */
  public toListNotificationChannels() {
    return this.to('ListNotificationChannels');
  }

  /**
   * Grants permission to list a specified insight's recommendations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_ListRecommendations.html
   */
  public toListRecommendations() {
    return this.to('ListRecommendations');
  }

  /**
   * Grants permission to submit a feedback to DevOps Guru
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_PutFeedback.html
   */
  public toPutFeedback() {
    return this.to('PutFeedback');
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
    return this.to('RemoveNotificationChannel');
  }

  /**
   * Grants permission to search insights in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_SearchInsights.html
   */
  public toSearchInsights() {
    return this.to('SearchInsights');
  }

  /**
   * Grants permission to start the creation of an estimate of the monthly cost
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_StartCostEstimation.html
   */
  public toStartCostEstimation() {
    return this.to('StartCostEstimation');
  }

  /**
   * Grants permission to update the list of AWS CloudFormation stacks that are used to specify which AWS resources in your account are analyzed by DevOps Guru
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_UpdateResourceCollection.html
   */
  public toUpdateResourceCollection() {
    return this.to('UpdateResourceCollection');
  }

  /**
   * Grants permissions to enable or disable a service that integrates with DevOps Guru
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devops-guru/latest/APIReference/API_UpdateServiceIntegration.html
   */
  public toUpdateServiceIntegration() {
    return this.to('UpdateServiceIntegration');
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
      "DescribeFeedback",
      "DescribeInsight",
      "DescribeResourceCollectionHealth",
      "DescribeServiceIntegration",
      "GetCostEstimation",
      "GetResourceCollection",
      "StartCostEstimation"
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
