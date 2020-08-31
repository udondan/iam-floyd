import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [applicationinsights](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_cloudwatchapplicationinsights.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Applicationinsights extends PolicyStatement {
  public servicePrefix = 'applicationinsights';
  protected actionList: Actions = {
    "CreateApplication": {
      "url": "https://docs.aws.amazon.com/appinsights/latest/APIReference/API_CreateApplication.html",
      "description": "Creates an application from a resource group",
      "accessLevel": "Write"
    },
    "CreateComponent": {
      "url": "https://docs.aws.amazon.com/appinsights/latest/APIReference/API_CreateComponent.html",
      "description": "Creates a component from a group of resources",
      "accessLevel": "Write"
    },
    "DeleteApplication": {
      "url": "https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DeleteApplication.html",
      "description": "Deletes an application",
      "accessLevel": "Write"
    },
    "DeleteComponent": {
      "url": "https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DeleteComponent.html",
      "description": "Deletes a component",
      "accessLevel": "Write"
    },
    "DescribeApplication": {
      "url": "https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeApplication.html",
      "description": "Describes an application",
      "accessLevel": "Read"
    },
    "DescribeComponent": {
      "url": "https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeComponent.html",
      "description": "Describes a component",
      "accessLevel": "Read"
    },
    "DescribeComponentConfiguration": {
      "url": "https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeComponentConfiguration.html",
      "description": "Describes a component configuration",
      "accessLevel": "Read"
    },
    "DescribeComponentConfigurationRecommendation": {
      "url": "https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeComponentConfigurationRecommendation.html",
      "description": "Describe the recommended application component configuration",
      "accessLevel": "Read"
    },
    "DescribeObservation": {
      "url": "https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeObservation.html",
      "description": "Describes an observation",
      "accessLevel": "Read"
    },
    "DescribeProblem": {
      "url": "https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeProblem.html",
      "description": "Describes a problem",
      "accessLevel": "Read"
    },
    "DescribeProblemObservations": {
      "url": "https://docs.aws.amazon.com/appinsights/latest/APIReference/API_DescribeProblemObservations.html",
      "description": "Describes the observation in a problem",
      "accessLevel": "Read"
    },
    "ListApplications": {
      "url": "https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListApplications.html",
      "description": "Lists all applications",
      "accessLevel": "List"
    },
    "ListComponents": {
      "url": "https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListComponents.html",
      "description": "List an application's components",
      "accessLevel": "List"
    },
    "ListProblems": {
      "url": "https://docs.aws.amazon.com/appinsights/latest/APIReference/API_ListProblems.html",
      "description": "Lists the problems in an application",
      "accessLevel": "List"
    },
    "UpdateApplication": {
      "url": "https://docs.aws.amazon.com/appinsights/latest/APIReference/API_UpdateApplication.html",
      "description": "Updates an application",
      "accessLevel": "Write"
    },
    "UpdateComponent": {
      "url": "https://docs.aws.amazon.com/appinsights/latest/APIReference/API_UpdateComponent.html",
      "description": "Updates a component",
      "accessLevel": "Write"
    },
    "UpdateComponentConfiguration": {
      "url": "https://docs.aws.amazon.com/appinsights/latest/APIReference/API_UpdateComponentConfiguration.html",
      "description": "Updates a component configuration",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {};

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
    this.add('applicationinsights:CreateApplication');
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
    this.add('applicationinsights:CreateComponent');
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
    this.add('applicationinsights:DeleteApplication');
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
    this.add('applicationinsights:DeleteComponent');
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
    this.add('applicationinsights:DescribeApplication');
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
    this.add('applicationinsights:DescribeComponent');
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
    this.add('applicationinsights:DescribeComponentConfiguration');
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
    this.add('applicationinsights:DescribeComponentConfigurationRecommendation');
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
    this.add('applicationinsights:DescribeObservation');
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
    this.add('applicationinsights:DescribeProblem');
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
    this.add('applicationinsights:DescribeProblemObservations');
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
    this.add('applicationinsights:ListApplications');
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
    this.add('applicationinsights:ListComponents');
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
    this.add('applicationinsights:ListProblems');
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
    this.add('applicationinsights:UpdateApplication');
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
    this.add('applicationinsights:UpdateComponent');
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
    this.add('applicationinsights:UpdateComponentConfiguration');
    return this;
  }
}
