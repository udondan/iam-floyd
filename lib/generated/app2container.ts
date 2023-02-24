import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [a2c](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapp2container.html).
 *
 * @param options - Options for the statement
 */
export class A2c extends PolicyStatement {
  public servicePrefix = 'a2c';

  /**
   * Statement provider for service [a2c](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapp2container.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to get the details of all Containerization jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/tk-dotnet-refactoring/latest/userguide/what-is-tk-dotnet-refactoring.html
   */
  public toGetContainerizationJobDetails() {
    return this.to('GetContainerizationJobDetails');
  }

  /**
   * Grants permission to get the details of all Deployment jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/tk-dotnet-refactoring/latest/userguide/what-is-tk-dotnet-refactoring.html
   */
  public toGetDeploymentJobDetails() {
    return this.to('GetDeploymentJobDetails');
  }

  /**
   * Grants permission to start a Containerization job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/tk-dotnet-refactoring/latest/userguide/what-is-tk-dotnet-refactoring.html
   */
  public toStartContainerizationJob() {
    return this.to('StartContainerizationJob');
  }

  /**
   * Grants permission to start a Deploymnet job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/tk-dotnet-refactoring/latest/userguide/what-is-tk-dotnet-refactoring.html
   */
  public toStartDeploymentJob() {
    return this.to('StartDeploymentJob');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetContainerizationJobDetails',
      'GetDeploymentJobDetails'
    ],
    Write: [
      'StartContainerizationJob',
      'StartDeploymentJob'
    ]
  };
}
