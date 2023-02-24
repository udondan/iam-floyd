import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [migrationhub-strategy](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhubstrategyrecommendations.html).
 *
 * @param options - Options for the statement
 */
export class MigrationhubStrategy extends PolicyStatement {
  public servicePrefix = 'migrationhub-strategy';

  /**
   * Statement provider for service [migrationhub-strategy](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhubstrategyrecommendations.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to get details of each anti pattern that collector should look at in a customer's environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetAntiPattern.html
   */
  public toGetAntiPattern() {
    return this.to('GetAntiPattern');
  }

  /**
   * Grants permission to get details of an application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetApplicationComponentDetails.html
   */
  public toGetApplicationComponentDetails() {
    return this.to('GetApplicationComponentDetails');
  }

  /**
   * Grants permission to get a list of all recommended strategies and tools for an application running in a server
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetApplicationComponentStrategies.html
   */
  public toGetApplicationComponentStrategies() {
    return this.to('GetApplicationComponentStrategies');
  }

  /**
   * Grants permission to retrieve status of an on-going assessment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetAssessment.html
   */
  public toGetAssessment() {
    return this.to('GetAssessment');
  }

  /**
   * Grants permission to get details of a specific import task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetImportFileTask.html
   */
  public toGetImportFileTask() {
    return this.to('GetImportFileTask');
  }

  /**
   * Grants permission to retrieve the latest assessment id
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetLatestAssessmentId.html
   */
  public toGetLatestAssessmentId() {
    return this.to('GetLatestAssessmentId');
  }

  /**
   * Grants permission to the collector to receive information from the service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetMessage.html
   */
  public toGetMessage() {
    return this.to('GetMessage');
  }

  /**
   * Grants permission to retrieve customer migration/Modernization preferences
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetPortfolioPreferences.html
   */
  public toGetPortfolioPreferences() {
    return this.to('GetPortfolioPreferences');
  }

  /**
   * Grants permission to retrieve overall summary (number-of servers to rehost etc as well as overall number of anti patterns)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetPortfolioSummary.html
   */
  public toGetPortfolioSummary() {
    return this.to('GetPortfolioSummary');
  }

  /**
   * Grants permission to retrieve detailed information about a recommendation report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetRecommendationReportDetails.html
   */
  public toGetRecommendationReportDetails() {
    return this.to('GetRecommendationReportDetails');
  }

  /**
   * Grants permission to get info about a specific server
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetServerDetails.html
   */
  public toGetServerDetails() {
    return this.to('GetServerDetails');
  }

  /**
   * Grants permission to get recommended strategies and tools for a specific server
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_GetServerStrategies.html
   */
  public toGetServerStrategies() {
    return this.to('GetServerStrategies');
  }

  /**
   * Grants permission to get a list of all anti patterns that collector should look for in a customer's environment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_ListAntiPatterns.html
   */
  public toListAntiPatterns() {
    return this.to('ListAntiPatterns');
  }

  /**
   * Grants permission to get a list of all applications running on servers on customer's servers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_ListApplicationComponents.html
   */
  public toListApplicationComponents() {
    return this.to('ListApplicationComponents');
  }

  /**
   * Grants permission to get a list of all collectors installed by the customer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_ListCollectors.html
   */
  public toListCollectors() {
    return this.to('ListCollectors');
  }

  /**
   * Grants permission to get list of all imports performed by the customer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_ListImportFileTask.html
   */
  public toListImportFileTask() {
    return this.to('ListImportFileTask');
  }

  /**
   * Grants permission to get a list of binaries that collector should assess
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_ListJarArtifacts.html
   */
  public toListJarArtifacts() {
    return this.to('ListJarArtifacts');
  }

  /**
   * Grants permission to get a list of all servers in a customer's environment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_ListServers.html
   */
  public toListServers() {
    return this.to('ListServers');
  }

  /**
   * Grants permission to save customer's Migration/Modernization preferences
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_PutPortfolioPreferences.html
   */
  public toPutPortfolioPreferences() {
    return this.to('PutPortfolioPreferences');
  }

  /**
   * Grants permission to register the collector to receive an ID and to start receiving messages from the service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_RegisterCollector.html
   */
  public toRegisterCollector() {
    return this.to('RegisterCollector');
  }

  /**
   * Grants permission to the collector to send information to the service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_SendMessage.html
   */
  public toSendMessage() {
    return this.to('SendMessage');
  }

  /**
   * Grants permission to start assessment in a customer's environment (collect data from all servers and provide recommendations)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_StartAssessment.html
   */
  public toStartAssessment() {
    return this.to('StartAssessment');
  }

  /**
   * Grants permission to start importing data from a file provided by customer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_StartImportFileTask.html
   */
  public toStartImportFileTask() {
    return this.to('StartImportFileTask');
  }

  /**
   * Grants permission to start generating a recommendation report
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_StartRecommendationReportGeneration.html
   */
  public toStartRecommendationReportGeneration() {
    return this.to('StartRecommendationReportGeneration');
  }

  /**
   * Grants permission to stop an on-going assessment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_StopAssessment.html
   */
  public toStopAssessment() {
    return this.to('StopAssessment');
  }

  /**
   * Grants permission to update details for an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_UpdateApplicationComponentConfig.html
   */
  public toUpdateApplicationComponentConfig() {
    return this.to('UpdateApplicationComponentConfig');
  }

  /**
   * Grants permission to the collector to send configuration information to the service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_UpdateCollectorConfiguration.html
   */
  public toUpdateCollectorConfiguration() {
    return this.to('UpdateCollectorConfiguration');
  }

  /**
   * Grants permission to update info on a server along with the recommended strategy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-strategy/latest/APIReference/API_UpdateServerConfig.html
   */
  public toUpdateServerConfig() {
    return this.to('UpdateServerConfig');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetAntiPattern',
      'GetApplicationComponentDetails',
      'GetApplicationComponentStrategies',
      'GetAssessment',
      'GetImportFileTask',
      'GetLatestAssessmentId',
      'GetMessage',
      'GetPortfolioPreferences',
      'GetPortfolioSummary',
      'GetRecommendationReportDetails',
      'GetServerDetails',
      'GetServerStrategies'
    ],
    List: [
      'ListAntiPatterns',
      'ListApplicationComponents',
      'ListCollectors',
      'ListImportFileTask',
      'ListJarArtifacts',
      'ListServers'
    ],
    Write: [
      'PutPortfolioPreferences',
      'RegisterCollector',
      'SendMessage',
      'StartAssessment',
      'StartImportFileTask',
      'StartRecommendationReportGeneration',
      'StopAssessment',
      'UpdateApplicationComponentConfig',
      'UpdateCollectorConfiguration',
      'UpdateServerConfig'
    ]
  };
}
