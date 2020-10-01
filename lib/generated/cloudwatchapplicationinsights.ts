import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [applicationinsights](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_cloudwatchapplicationinsights.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Applicationinsights extends PolicyStatement {
  public servicePrefix = 'applicationinsights';

  /**
   * Statement provider for service [applicationinsights](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_cloudwatchapplicationinsights.html).
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
    this.to('applicationinsights:CreateApplication');
    return this;
  }

  /**
   * Creates a component from a group of resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_CreateComponent.html
   */
  public toCreateComponent() {
    this.to('applicationinsights:CreateComponent');
    return this;
  }

  /**
   * Deletes an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    this.to('applicationinsights:DeleteApplication');
    return this;
  }

  /**
   * Deletes a component
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DeleteComponent.html
   */
  public toDeleteComponent() {
    this.to('applicationinsights:DeleteComponent');
    return this;
  }

  /**
   * Describes an application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeApplication.html
   */
  public toDescribeApplication() {
    this.to('applicationinsights:DescribeApplication');
    return this;
  }

  /**
   * Describes a component
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeComponent.html
   */
  public toDescribeComponent() {
    this.to('applicationinsights:DescribeComponent');
    return this;
  }

  /**
   * Describes a component configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeComponentConfiguration.html
   */
  public toDescribeComponentConfiguration() {
    this.to('applicationinsights:DescribeComponentConfiguration');
    return this;
  }

  /**
   * Describe the recommended application component configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeComponentConfigurationRecommendation.html
   */
  public toDescribeComponentConfigurationRecommendation() {
    this.to('applicationinsights:DescribeComponentConfigurationRecommendation');
    return this;
  }

  /**
   * Describes an observation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeObservation.html
   */
  public toDescribeObservation() {
    this.to('applicationinsights:DescribeObservation');
    return this;
  }

  /**
   * Describes a problem
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeProblem.html
   */
  public toDescribeProblem() {
    this.to('applicationinsights:DescribeProblem');
    return this;
  }

  /**
   * Describes the observation in a problem
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeProblemObservations.html
   */
  public toDescribeProblemObservations() {
    this.to('applicationinsights:DescribeProblemObservations');
    return this;
  }

  /**
   * Lists all applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListApplications.html
   */
  public toListApplications() {
    this.to('applicationinsights:ListApplications');
    return this;
  }

  /**
   * List an application's components
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListComponents.html
   */
  public toListComponents() {
    this.to('applicationinsights:ListComponents');
    return this;
  }

  /**
   * Lists the problems in an application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListProblems.html
   */
  public toListProblems() {
    this.to('applicationinsights:ListProblems');
    return this;
  }

  /**
   * Updates an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    this.to('applicationinsights:UpdateApplication');
    return this;
  }

  /**
   * Updates a component
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_UpdateComponent.html
   */
  public toUpdateComponent() {
    this.to('applicationinsights:UpdateComponent');
    return this;
  }

  /**
   * Updates a component configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appinsights/latest/APIReference/API_UpdateComponentConfiguration.html
   */
  public toUpdateComponentConfiguration() {
    this.to('applicationinsights:UpdateComponentConfiguration');
    return this;
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
