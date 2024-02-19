import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [application-cost-profiler](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationcostprofilerservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ApplicationCostProfiler extends PolicyStatement {
  public servicePrefix = 'application-cost-profiler';

  /**
   * Statement provider for service [application-cost-profiler](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsapplicationcostprofilerservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to delete the configuration with specific Application Cost Profiler Report thereby effectively disabling report generation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-cost-profiler/latest/APIReference/API_DeleteReportDefinition.html
   */
  public toDeleteReportDefinition() {
    return this.to('DeleteReportDefinition');
  }

  /**
   * Grants permission to fetch the configuration with specific Application Cost Profiler Report request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/application-cost-profiler/latest/APIReference/API_GetReportDefinition.html
   */
  public toGetReportDefinition() {
    return this.to('GetReportDefinition');
  }

  /**
   * Grants permission to import the application usage from S3
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-cost-profiler/latest/APIReference/API_ImportApplicationUsage.html
   */
  public toImportApplicationUsage() {
    return this.to('ImportApplicationUsage');
  }

  /**
   * Grants permission to get a list of the different Application Cost Profiler Report configurations they have created
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/application-cost-profiler/latest/APIReference/API_ListReportDefinitions.html
   */
  public toListReportDefinitions() {
    return this.to('ListReportDefinitions');
  }

  /**
   * Grants permission to create Application Cost Profiler Report configurations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-cost-profiler/latest/APIReference/API_PutReportDefinition.html
   */
  public toPutReportDefinition() {
    return this.to('PutReportDefinition');
  }

  /**
   * Grants permission to update an existing Application Cost Profiler Report configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-cost-profiler/latest/APIReference/API_UpdateReportDefinition.html
   */
  public toUpdateReportDefinition() {
    return this.to('UpdateReportDefinition');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'DeleteReportDefinition',
      'ImportApplicationUsage',
      'PutReportDefinition',
      'UpdateReportDefinition'
    ],
    Read: [
      'GetReportDefinition',
      'ListReportDefinitions'
    ]
  };
}
