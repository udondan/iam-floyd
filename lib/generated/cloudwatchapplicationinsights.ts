import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [applicationinsights](https://docs.aws.amazon.com/service-authorization/latest/reference/list_cloudwatchapplicationinsights.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Applicationinsights extends PolicyStatement {
  public servicePrefix = 'applicationinsights';

  /**
   * Statement provider for service [applicationinsights](https://docs.aws.amazon.com/service-authorization/latest/reference/list_cloudwatchapplicationinsights.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an application from a resource group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to create a component from a group of resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_CreateComponent.html
   */
  public toCreateComponent() {
    return this.to('CreateComponent');
  }

  /**
   * Grants permission to create log a pattern
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_CreateLogPattern.html
   */
  public toCreateLogPattern() {
    return this.to('CreateLogPattern');
  }

  /**
   * Grants permission to delete an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to delete a component
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DeleteComponent.html
   */
  public toDeleteComponent() {
    return this.to('DeleteComponent');
  }

  /**
   * Grants permission to delete a log pattern
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DeleteLogPattern.html
   */
  public toDeleteLogPattern() {
    return this.to('DeleteLogPattern');
  }

  /**
   * Grants permission to describe an application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeApplication.html
   */
  public toDescribeApplication() {
    return this.to('DescribeApplication');
  }

  /**
   * Grants permission to describe a component
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeComponent.html
   */
  public toDescribeComponent() {
    return this.to('DescribeComponent');
  }

  /**
   * Grants permission to describe a component's configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeComponentConfiguration.html
   */
  public toDescribeComponentConfiguration() {
    return this.to('DescribeComponentConfiguration');
  }

  /**
   * Grants permission to describe the recommended application component configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeComponentConfigurationRecommendation.html
   */
  public toDescribeComponentConfigurationRecommendation() {
    return this.to('DescribeComponentConfigurationRecommendation');
  }

  /**
   * Grants permission to describe a log pattern
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeLogPattern.html
   */
  public toDescribeLogPattern() {
    return this.to('DescribeLogPattern');
  }

  /**
   * Grants permission to describe an observation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeObservation.html
   */
  public toDescribeObservation() {
    return this.to('DescribeObservation');
  }

  /**
   * Grants permission to describe a problem
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeProblem.html
   */
  public toDescribeProblem() {
    return this.to('DescribeProblem');
  }

  /**
   * Grants permission to describe the observation in a problem
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeProblemObservations.html
   */
  public toDescribeProblemObservations() {
    return this.to('DescribeProblemObservations');
  }

  /**
   * Grants permission to list all applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListApplications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to list an application's components
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListComponents.html
   */
  public toListComponents() {
    return this.to('ListComponents');
  }

  /**
   * Grants permission to list configuration history
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListConfigurationHistory.html
   */
  public toListConfigurationHistory() {
    return this.to('ListConfigurationHistory');
  }

  /**
   * Grants permission to list log pattern sets for an application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListLogPatternSets.html
   */
  public toListLogPatternSets() {
    return this.to('ListLogPatternSets');
  }

  /**
   * Grants permission to list log patterns
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListLogPatterns.html
   */
  public toListLogPatterns() {
    return this.to('ListLogPatterns');
  }

  /**
   * Grants permission to list the problems in an application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListProblems.html
   */
  public toListProblems() {
    return this.to('ListProblems');
  }

  /**
   * Grants permission to list tags for the resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  /**
   * Grants permission to update a component
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_UpdateComponent.html
   */
  public toUpdateComponent() {
    return this.to('UpdateComponent');
  }

  /**
   * Grants permission to update a component's configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_UpdateComponentConfiguration.html
   */
  public toUpdateComponentConfiguration() {
    return this.to('UpdateComponentConfiguration');
  }

  /**
   * Grants permission to update a log pattern
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_UpdateLogPattern.html
   */
  public toUpdateLogPattern() {
    return this.to('UpdateLogPattern');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateApplication",
      "CreateComponent",
      "CreateLogPattern",
      "DeleteApplication",
      "DeleteComponent",
      "DeleteLogPattern",
      "UpdateApplication",
      "UpdateComponent",
      "UpdateComponentConfiguration",
      "UpdateLogPattern"
    ],
    "Read": [
      "DescribeApplication",
      "DescribeComponent",
      "DescribeComponentConfiguration",
      "DescribeComponentConfigurationRecommendation",
      "DescribeLogPattern",
      "DescribeObservation",
      "DescribeProblem",
      "DescribeProblemObservations",
      "ListTagsForResource"
    ],
    "List": [
      "ListApplications",
      "ListComponents",
      "ListConfigurationHistory",
      "ListLogPatternSets",
      "ListLogPatterns",
      "ListProblems"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };
}
