import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [neptune-db](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonneptune.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class NeptuneDb extends PolicyStatement {
  public servicePrefix = 'neptune-db';

  /**
   * Statement provider for service [neptune-db](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonneptune.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel a loader job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#cancelloaderjob
   */
  public toCancelLoaderJob() {
    return this.to('CancelLoaderJob');
  }

  /**
   * Grants permission to cancel an ML data processing job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#cancelmldataprocessingjob
   */
  public toCancelMLDataProcessingJob() {
    return this.to('CancelMLDataProcessingJob');
  }

  /**
   * Grants permission to cancel an ML model training job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#cancelmlmodeltrainingjob
   */
  public toCancelMLModelTrainingJob() {
    return this.to('CancelMLModelTrainingJob');
  }

  /**
   * Grants permission to cancel an ML model transform job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#cancelmlmodeltransformjob
   */
  public toCancelMLModelTransformJob() {
    return this.to('CancelMLModelTransformJob');
  }

  /**
   * Grants permission to cancel a query
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#cancelquery
   */
  public toCancelQuery() {
    return this.to('CancelQuery');
  }

  /**
   * Grants permission to create an ML endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#createmlendpoint
   */
  public toCreateMLEndpoint() {
    return this.to('CreateMLEndpoint');
  }

  /**
   * Grants permission to run delete data via query APIs on database
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifQueryLanguage()
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#deletedataviaquery
   */
  public toDeleteDataViaQuery() {
    return this.to('DeleteDataViaQuery');
  }

  /**
   * Grants permission to delete an ML endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#deletemlendpoint
   */
  public toDeleteMLEndpoint() {
    return this.to('DeleteMLEndpoint');
  }

  /**
   * Grants permission to delete all the statistics in the database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#deletestatistics
   */
  public toDeleteStatistics() {
    return this.to('DeleteStatistics');
  }

  /**
   * Grants permission to check the status of the Neptune engine
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getenginestatus
   */
  public toGetEngineStatus() {
    return this.to('GetEngineStatus');
  }

  /**
   * Grants permission to get the graph summary from the database
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getgraphsummary
   */
  public toGetGraphSummary() {
    return this.to('GetGraphSummary');
  }

  /**
   * Grants permission to check the status of a loader job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getloaderjobstatus
   */
  public toGetLoaderJobStatus() {
    return this.to('GetLoaderJobStatus');
  }

  /**
   * Grants permission to check the status of an ML data processing job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getmldataprocessingjobstatus
   */
  public toGetMLDataProcessingJobStatus() {
    return this.to('GetMLDataProcessingJobStatus');
  }

  /**
   * Grants permission to check the status of an ML endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getmlendpointstatus
   */
  public toGetMLEndpointStatus() {
    return this.to('GetMLEndpointStatus');
  }

  /**
   * Grants permission to check the status of an ML model training job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getmlmodeltrainingjobstatus
   */
  public toGetMLModelTrainingJobStatus() {
    return this.to('GetMLModelTrainingJobStatus');
  }

  /**
   * Grants permission to check the status of an ML model transform job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getmlmodeltransformjobstatus
   */
  public toGetMLModelTransformJobStatus() {
    return this.to('GetMLModelTransformJobStatus');
  }

  /**
   * Grants permission to check the status of all active queries
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifQueryLanguage()
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getquerystatus
   */
  public toGetQueryStatus() {
    return this.to('GetQueryStatus');
  }

  /**
   * Grants permission to check the status of statistics of the database
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getstatisticsstatus
   */
  public toGetStatisticsStatus() {
    return this.to('GetStatisticsStatus');
  }

  /**
   * Grants permission to fetch stream records from Neptune
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifQueryLanguage()
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getstreamrecords
   */
  public toGetStreamRecords() {
    return this.to('GetStreamRecords');
  }

  /**
   * Grants permission to list all the loader jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#listloaderjobs
   */
  public toListLoaderJobs() {
    return this.to('ListLoaderJobs');
  }

  /**
   * Grants permission to list all the ML data processing jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#listmldataprocessingjobs
   */
  public toListMLDataProcessingJobs() {
    return this.to('ListMLDataProcessingJobs');
  }

  /**
   * Grants permission to list all the ML endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#listmlendpoints
   */
  public toListMLEndpoints() {
    return this.to('ListMLEndpoints');
  }

  /**
   * Grants permission to list all the ML model training jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#listmlmodeltrainingjobs
   */
  public toListMLModelTrainingJobs() {
    return this.to('ListMLModelTrainingJobs');
  }

  /**
   * Grants permission to list all the ML model transform jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#listmlmodeltransformjobs
   */
  public toListMLModelTransformJobs() {
    return this.to('ListMLModelTransformJobs');
  }

  /**
   * Grants permission to manage statistics in the database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#managestatistics
   */
  public toManageStatistics() {
    return this.to('ManageStatistics');
  }

  /**
   * Grants permission to run read data via query APIs on database
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifQueryLanguage()
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#readdataviaquery
   */
  public toReadDataViaQuery() {
    return this.to('ReadDataViaQuery');
  }

  /**
   * Grants permission to get the token needed for reset and resets the Neptune database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#resetdatabase
   */
  public toResetDatabase() {
    return this.to('ResetDatabase');
  }

  /**
   * Grants permission to start a loader job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#startloaderjob
   */
  public toStartLoaderJob() {
    return this.to('StartLoaderJob');
  }

  /**
   * Grants permission to start an ML data processing job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#startmldataprocessingjob
   */
  public toStartMLDataProcessingJob() {
    return this.to('StartMLDataProcessingJob');
  }

  /**
   * Grants permission to start an ML model training job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#startmlmodeltrainingjob
   */
  public toStartMLModelTrainingJob() {
    return this.to('StartMLModelTrainingJob');
  }

  /**
   * Grants permission to start an ML model transform job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#startmlmodeltransformjob
   */
  public toStartMLModelTransformJob() {
    return this.to('StartMLModelTransformJob');
  }

  /**
   * Grants permission to run write data via query APIs on database
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifQueryLanguage()
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#writedataviaquery
   */
  public toWriteDataViaQuery() {
    return this.to('WriteDataViaQuery');
  }

  /**
   * Grants permission to all data-access actions in engine versions prior to 1.2.0.0
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html
   */
  public toConnect() {
    return this.to('connect');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelLoaderJob',
      'CancelMLDataProcessingJob',
      'CancelMLModelTrainingJob',
      'CancelMLModelTransformJob',
      'CancelQuery',
      'CreateMLEndpoint',
      'DeleteDataViaQuery',
      'DeleteMLEndpoint',
      'DeleteStatistics',
      'ManageStatistics',
      'ResetDatabase',
      'StartLoaderJob',
      'StartMLDataProcessingJob',
      'StartMLModelTrainingJob',
      'StartMLModelTransformJob',
      'WriteDataViaQuery',
      'connect'
    ],
    Read: [
      'GetEngineStatus',
      'GetGraphSummary',
      'GetLoaderJobStatus',
      'GetMLDataProcessingJobStatus',
      'GetMLEndpointStatus',
      'GetMLModelTrainingJobStatus',
      'GetMLModelTransformJobStatus',
      'GetQueryStatus',
      'GetStatisticsStatus',
      'GetStreamRecords',
      'ReadDataViaQuery'
    ],
    List: [
      'ListLoaderJobs',
      'ListMLDataProcessingJobs',
      'ListMLEndpoints',
      'ListMLModelTrainingJobs',
      'ListMLModelTransformJobs'
    ]
  };

  /**
   * Adds a resource of type database to the statement
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-resources.html
   *
   * @param cluster - Identifier for the cluster.
   * @param database - Identifier for the database.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDatabase(cluster: string, database: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:neptune-db:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:${ cluster }/${ database }`);
  }

  /**
   * Filters access by graph model
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html#iam-neptune-condition-keys
   *
   * Applies to actions:
   * - .toDeleteDataViaQuery()
   * - .toGetQueryStatus()
   * - .toGetStreamRecords()
   * - .toReadDataViaQuery()
   * - .toWriteDataViaQuery()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifQueryLanguage(value: string | string[], operator?: Operator | string) {
    return this.if(`QueryLanguage`, value, operator ?? 'StringLike');
  }
}
