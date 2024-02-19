import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [application-transformation](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationtransformationservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ApplicationTransformation extends PolicyStatement {
  public servicePrefix = 'application-transformation';

  /**
   * Statement provider for service [application-transformation](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationtransformationservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to get the details of all Containerization jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/tk-dotnet-refactoring/latest/userguide/what-is-tk-dotnet-refactoring.html
   */
  public toGetContainerization() {
    return this.to('GetContainerization');
  }

  /**
   * Grants permission to get the details of all Deployment jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/tk-dotnet-refactoring/latest/userguide/what-is-tk-dotnet-refactoring.html
   */
  public toGetDeployment() {
    return this.to('GetDeployment');
  }

  /**
   * Grants permission to Get the details of a Grouping Assessment Operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/microservice-extractor/latest/userguide/what-is-microservice-extractor.html
   */
  public toGetGroupingAssessment() {
    return this.to('GetGroupingAssessment');
  }

  /**
   * Grants permission to Get Porting Compatibility Operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/microservice-extractor/latest/userguide/what-is-microservice-extractor.html
   */
  public toGetPortingCompatibilityAssessment() {
    return this.to('GetPortingCompatibilityAssessment');
  }

  /**
   * Grants permission to Get the details of a Porting Recommendation Assessment Operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/microservice-extractor/latest/userguide/what-is-microservice-extractor.html
   */
  public toGetPortingRecommendationAssessment() {
    return this.to('GetPortingRecommendationAssessment');
  }

  /**
   * Grants permission to Get the details of a Runtime Assessment Operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/microservice-extractor/latest/userguide/what-is-microservice-extractor.html
   */
  public toGetRuntimeAssessment() {
    return this.to('GetRuntimeAssessment');
  }

  /**
   * Grants permission to Push Logs (Intended for Clients Only)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/microservice-extractor/latest/userguide/what-is-microservice-extractor.html
   */
  public toPutLogData() {
    return this.to('PutLogData');
  }

  /**
   * Grants permission to Push Metrics Data (Intended for Clients Only)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/microservice-extractor/latest/userguide/what-is-microservice-extractor.html
   */
  public toPutMetricData() {
    return this.to('PutMetricData');
  }

  /**
   * Grants permission to start a Containerization job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/tk-dotnet-refactoring/latest/userguide/what-is-tk-dotnet-refactoring.html
   */
  public toStartContainerization() {
    return this.to('StartContainerization');
  }

  /**
   * Grants permission to start a Deployment job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/tk-dotnet-refactoring/latest/userguide/what-is-tk-dotnet-refactoring.html
   */
  public toStartDeployment() {
    return this.to('StartDeployment');
  }

  /**
   * Grants permission to Start a Grouping Assessment Operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/microservice-extractor/latest/userguide/what-is-microservice-extractor.html
   */
  public toStartGroupingAssessment() {
    return this.to('StartGroupingAssessment');
  }

  /**
   * Grants permission to Start Porting Compatibility Operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/microservice-extractor/latest/userguide/what-is-microservice-extractor.html
   */
  public toStartPortingCompatibilityAssessment() {
    return this.to('StartPortingCompatibilityAssessment');
  }

  /**
   * Grants permission to Start the Porting Recommendation Assessment Operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/microservice-extractor/latest/userguide/what-is-microservice-extractor.html
   */
  public toStartPortingRecommendationAssessment() {
    return this.to('StartPortingRecommendationAssessment');
  }

  /**
   * Grants permission to Start a Runtime Assessment Operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/microservice-extractor/latest/userguide/what-is-microservice-extractor.html
   */
  public toStartRuntimeAssessment() {
    return this.to('StartRuntimeAssessment');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetContainerization',
      'GetDeployment',
      'GetGroupingAssessment',
      'GetPortingCompatibilityAssessment',
      'GetPortingRecommendationAssessment',
      'GetRuntimeAssessment'
    ],
    Write: [
      'PutLogData',
      'PutMetricData',
      'StartContainerization',
      'StartDeployment',
      'StartGroupingAssessment',
      'StartPortingCompatibilityAssessment',
      'StartPortingRecommendationAssessment',
      'StartRuntimeAssessment'
    ]
  };
}
