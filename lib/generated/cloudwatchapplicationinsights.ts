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
   * Creates an application from a resource group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Creates a component from a group of resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_CreateComponent.html
   */
  public toCreateComponent() {
    return this.to('CreateComponent');
  }

  /**
   * Deletes an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Deletes a component
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DeleteComponent.html
   */
  public toDeleteComponent() {
    return this.to('DeleteComponent');
  }

  /**
   * Describes an application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeApplication.html
   */
  public toDescribeApplication() {
    return this.to('DescribeApplication');
  }

  /**
   * Describes a component
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeComponent.html
   */
  public toDescribeComponent() {
    return this.to('DescribeComponent');
  }

  /**
   * Describes a component configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeComponentConfiguration.html
   */
  public toDescribeComponentConfiguration() {
    return this.to('DescribeComponentConfiguration');
  }

  /**
   * Describe the recommended application component configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeComponentConfigurationRecommendation.html
   */
  public toDescribeComponentConfigurationRecommendation() {
    return this.to('DescribeComponentConfigurationRecommendation');
  }

  /**
   * Describes an observation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeObservation.html
   */
  public toDescribeObservation() {
    return this.to('DescribeObservation');
  }

  /**
   * Describes a problem
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeProblem.html
   */
  public toDescribeProblem() {
    return this.to('DescribeProblem');
  }

  /**
   * Describes the observation in a problem
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeProblemObservations.html
   */
  public toDescribeProblemObservations() {
    return this.to('DescribeProblemObservations');
  }

  /**
   * Lists all applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListApplications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * List an application's components
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListComponents.html
   */
  public toListComponents() {
    return this.to('ListComponents');
  }

  /**
   * Lists the problems in an application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListProblems.html
   */
  public toListProblems() {
    return this.to('ListProblems');
  }

  /**
   * Updates an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  /**
   * Updates a component
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_UpdateComponent.html
   */
  public toUpdateComponent() {
    return this.to('UpdateComponent');
  }

  /**
   * Updates a component configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_UpdateComponentConfiguration.html
   */
  public toUpdateComponentConfiguration() {
    return this.to('UpdateComponentConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateApplication",
      "CreateComponent",
      "DeleteApplication",
      "DeleteComponent",
      "UpdateApplication",
      "UpdateComponent",
      "UpdateComponentConfiguration"
    ],
    "Read": [
      "DescribeApplication",
      "DescribeComponent",
      "DescribeComponentConfiguration",
      "DescribeComponentConfigurationRecommendation",
      "DescribeObservation",
      "DescribeProblem",
      "DescribeProblemObservations"
    ],
    "List": [
      "ListApplications",
      "ListComponents",
      "ListProblems"
    ]
  };
}
