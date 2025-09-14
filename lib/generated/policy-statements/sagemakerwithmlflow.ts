import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [sagemaker-mlflow](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsagemakerwithmlflow.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SagemakerMlflow extends PolicyStatement {
  public servicePrefix = 'sagemaker-mlflow';

  /**
   * Statement provider for service [sagemaker-mlflow](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsagemakerwithmlflow.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to access the MLflow UI
   *
   * Access Level: Read
   */
  public toAccessUI() {
    return this.to('AccessUI');
  }

  /**
   * Grants permission to create an MLflow experiment
   *
   * Access Level: Write
   */
  public toCreateExperiment() {
    return this.to('CreateExperiment');
  }

  /**
   * Grants permission to create a new model version
   *
   * Access Level: Write
   */
  public toCreateModelVersion() {
    return this.to('CreateModelVersion');
  }

  /**
   * Grants permission to create a registered model
   *
   * Access Level: Write
   */
  public toCreateRegisteredModel() {
    return this.to('CreateRegisteredModel');
  }

  /**
   * Grants permission to create a new run within an experiment
   *
   * Access Level: Write
   */
  public toCreateRun() {
    return this.to('CreateRun');
  }

  /**
   * Grants permission to mark an MLflow experiment for deletion
   *
   * Access Level: Write
   */
  public toDeleteExperiment() {
    return this.to('DeleteExperiment');
  }

  /**
   * Grants permission to delete a logged model in MLflow
   *
   * Access Level: Write
   */
  public toDeleteLoggedModel() {
    return this.to('DeleteLoggedModel');
  }

  /**
   * Grants permission to delete a tag for a logged model in MLflow
   *
   * Access Level: Write
   */
  public toDeleteLoggedModelTag() {
    return this.to('DeleteLoggedModelTag');
  }

  /**
   * Grants permission to delete a model version
   *
   * Access Level: Write
   */
  public toDeleteModelVersion() {
    return this.to('DeleteModelVersion');
  }

  /**
   * Grants permission to delete a model version tag
   *
   * Access Level: Write
   */
  public toDeleteModelVersionTag() {
    return this.to('DeleteModelVersionTag');
  }

  /**
   * Grants permission to delete a registered model
   *
   * Access Level: Write
   */
  public toDeleteRegisteredModel() {
    return this.to('DeleteRegisteredModel');
  }

  /**
   * Grants permission to delete a registered model alias
   *
   * Access Level: Write
   */
  public toDeleteRegisteredModelAlias() {
    return this.to('DeleteRegisteredModelAlias');
  }

  /**
   * Grants permission to delete a registered model tag
   *
   * Access Level: Write
   */
  public toDeleteRegisteredModelTag() {
    return this.to('DeleteRegisteredModelTag');
  }

  /**
   * Grants permission to mark a run for deletion
   *
   * Access Level: Write
   */
  public toDeleteRun() {
    return this.to('DeleteRun');
  }

  /**
   * Grants permission to delete a tag on a run
   *
   * Access Level: Write
   */
  public toDeleteTag() {
    return this.to('DeleteTag');
  }

  /**
   * Grants permission to delete a trace tag in MLflow
   *
   * Access Level: Write
   */
  public toDeleteTraceTag() {
    return this.to('DeleteTraceTag');
  }

  /**
   * Grants permission to delete traces in MLflow
   *
   * Access Level: Write
   */
  public toDeleteTraces() {
    return this.to('DeleteTraces');
  }

  /**
   * Grants permission to end a trace in MLflow
   *
   * Access Level: Write
   */
  public toEndTrace() {
    return this.to('EndTrace');
  }

  /**
   * Grants permission to set status for a logged model in MLflow
   *
   * Access Level: Write
   */
  public toFinalizeLoggedModel() {
    return this.to('FinalizeLoggedModel');
  }

  /**
   * Grants permission to get a URI to download model artifacts for a specific model version
   *
   * Access Level: Read
   */
  public toGetDownloadURIForModelVersionArtifacts() {
    return this.to('GetDownloadURIForModelVersionArtifacts');
  }

  /**
   * Grants permission to get metadata for an MLflow experiment
   *
   * Access Level: Read
   */
  public toGetExperiment() {
    return this.to('GetExperiment');
  }

  /**
   * Grants permission to get metadata for an MLflow experiment by name
   *
   * Access Level: Read
   */
  public toGetExperimentByName() {
    return this.to('GetExperimentByName');
  }

  /**
   * Grants permission to get the latest model versions
   *
   * Access Level: List
   */
  public toGetLatestModelVersions() {
    return this.to('GetLatestModelVersions');
  }

  /**
   * Grants permission to get a logged model in MLflow
   *
   * Access Level: Read
   */
  public toGetLoggedModel() {
    return this.to('GetLoggedModel');
  }

  /**
   * Grants permission to get a list of all values for the specified metric for a given run
   *
   * Access Level: Read
   */
  public toGetMetricHistory() {
    return this.to('GetMetricHistory');
  }

  /**
   * Grants permission to get a model version by model name and version
   *
   * Access Level: Read
   */
  public toGetModelVersion() {
    return this.to('GetModelVersion');
  }

  /**
   * Grants permission to get model version by alias in MLflow
   *
   * Access Level: Read
   */
  public toGetModelVersionByAlias() {
    return this.to('GetModelVersionByAlias');
  }

  /**
   * Grants permission to get a registered model
   *
   * Access Level: Read
   */
  public toGetRegisteredModel() {
    return this.to('GetRegisteredModel');
  }

  /**
   * Grants permission to get metadata, metrics, parameters, and tags for a run
   *
   * Access Level: Read
   */
  public toGetRun() {
    return this.to('GetRun');
  }

  /**
   * Grants permission to get information about a trace in MLflow
   *
   * Access Level: Read
   */
  public toGetTraceInfo() {
    return this.to('GetTraceInfo');
  }

  /**
   * Grants permission to list artifacts for a run
   *
   * Access Level: List
   */
  public toListArtifacts() {
    return this.to('ListArtifacts');
  }

  /**
   * Grants permission to list artifacts for a logged model in MLflow
   *
   * Access Level: List
   */
  public toListLoggedModelArtifacts() {
    return this.to('ListLoggedModelArtifacts');
  }

  /**
   * Grants permission to log a batch of metrics, parameters, and tags for a run
   *
   * Access Level: Write
   */
  public toLogBatch() {
    return this.to('LogBatch');
  }

  /**
   * Grants permission to log inputs for a run
   *
   * Access Level: Write
   */
  public toLogInputs() {
    return this.to('LogInputs');
  }

  /**
   * Grants permission to log params for a logged model in MLflow
   *
   * Access Level: Write
   */
  public toLogLoggedModelParams() {
    return this.to('LogLoggedModelParams');
  }

  /**
   * Grants permission to log a metric for a run
   *
   * Access Level: Write
   */
  public toLogMetric() {
    return this.to('LogMetric');
  }

  /**
   * Grants permission to log the model associated with a run
   *
   * Access Level: Write
   */
  public toLogModel() {
    return this.to('LogModel');
  }

  /**
   * Grants permission to log outputs, such as models, for a run in MLflow
   *
   * Access Level: Write
   */
  public toLogOutputs() {
    return this.to('LogOutputs');
  }

  /**
   * Grants permission to log a parameter tracked during a run
   *
   * Access Level: Write
   */
  public toLogParam() {
    return this.to('LogParam');
  }

  /**
   * Grants permission to rename a registered model
   *
   * Access Level: Write
   */
  public toRenameRegisteredModel() {
    return this.to('RenameRegisteredModel');
  }

  /**
   * Grants permission to restore an experiment marked for deletion
   *
   * Access Level: Write
   */
  public toRestoreExperiment() {
    return this.to('RestoreExperiment');
  }

  /**
   * Grants permission to restore a deleted run
   *
   * Access Level: Write
   */
  public toRestoreRun() {
    return this.to('RestoreRun');
  }

  /**
   * Grants permission to search for MLflow experiments
   *
   * Access Level: Read
   */
  public toSearchExperiments() {
    return this.to('SearchExperiments');
  }

  /**
   * Grants permission to search for logged models in MLflow
   *
   * Access Level: Read
   */
  public toSearchLoggedModels() {
    return this.to('SearchLoggedModels');
  }

  /**
   * Grants permission to search for a model version
   *
   * Access Level: Read
   */
  public toSearchModelVersions() {
    return this.to('SearchModelVersions');
  }

  /**
   * Grants permission to search for registered models in MLflow
   *
   * Access Level: Read
   */
  public toSearchRegisteredModels() {
    return this.to('SearchRegisteredModels');
  }

  /**
   * Grants permission to search for runs that satisfy expressions
   *
   * Access Level: Read
   */
  public toSearchRuns() {
    return this.to('SearchRuns');
  }

  /**
   * Grants permission to search for traces in MLflow
   *
   * Access Level: Read
   */
  public toSearchTraces() {
    return this.to('SearchTraces');
  }

  /**
   * Grants permission to set a tag on an experiment
   *
   * Access Level: Write
   */
  public toSetExperimentTag() {
    return this.to('SetExperimentTag');
  }

  /**
   * Grants permission to set tags for a logged model in MLflow
   *
   * Access Level: Write
   */
  public toSetLoggedModelTags() {
    return this.to('SetLoggedModelTags');
  }

  /**
   * Grants permission to set a tag for the model version
   *
   * Access Level: Write
   */
  public toSetModelVersionTag() {
    return this.to('SetModelVersionTag');
  }

  /**
   * Grants permission to set a registered model alias
   *
   * Access Level: Write
   */
  public toSetRegisteredModelAlias() {
    return this.to('SetRegisteredModelAlias');
  }

  /**
   * Grants permission to set a tag for a registered model
   *
   * Access Level: Write
   */
  public toSetRegisteredModelTag() {
    return this.to('SetRegisteredModelTag');
  }

  /**
   * Grants permission to set a tag on a run
   *
   * Access Level: Write
   */
  public toSetTag() {
    return this.to('SetTag');
  }

  /**
   * Grants permission to set a trace tag in MLflow
   *
   * Access Level: Write
   */
  public toSetTraceTag() {
    return this.to('SetTraceTag');
  }

  /**
   * Grants permission to start a trace in MLflow
   *
   * Access Level: Write
   */
  public toStartTrace() {
    return this.to('StartTrace');
  }

  /**
   * Grants permission to transition a model version to a particular stage
   *
   * Access Level: Write
   */
  public toTransitionModelVersionStage() {
    return this.to('TransitionModelVersionStage');
  }

  /**
   * Grants permission to update the metadata for an MLflow experiment
   *
   * Access Level: Write
   */
  public toUpdateExperiment() {
    return this.to('UpdateExperiment');
  }

  /**
   * Grants permission to update the model version
   *
   * Access Level: Write
   */
  public toUpdateModelVersion() {
    return this.to('UpdateModelVersion');
  }

  /**
   * Grants permission to update a registered model
   *
   * Access Level: Write
   */
  public toUpdateRegisteredModel() {
    return this.to('UpdateRegisteredModel');
  }

  /**
   * Grants permission to update run metadata
   *
   * Access Level: Write
   */
  public toUpdateRun() {
    return this.to('UpdateRun');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'AccessUI',
      'GetDownloadURIForModelVersionArtifacts',
      'GetExperiment',
      'GetExperimentByName',
      'GetLoggedModel',
      'GetMetricHistory',
      'GetModelVersion',
      'GetModelVersionByAlias',
      'GetRegisteredModel',
      'GetRun',
      'GetTraceInfo',
      'SearchExperiments',
      'SearchLoggedModels',
      'SearchModelVersions',
      'SearchRegisteredModels',
      'SearchRuns',
      'SearchTraces'
    ],
    Write: [
      'CreateExperiment',
      'CreateModelVersion',
      'CreateRegisteredModel',
      'CreateRun',
      'DeleteExperiment',
      'DeleteLoggedModel',
      'DeleteLoggedModelTag',
      'DeleteModelVersion',
      'DeleteModelVersionTag',
      'DeleteRegisteredModel',
      'DeleteRegisteredModelAlias',
      'DeleteRegisteredModelTag',
      'DeleteRun',
      'DeleteTag',
      'DeleteTraceTag',
      'DeleteTraces',
      'EndTrace',
      'FinalizeLoggedModel',
      'LogBatch',
      'LogInputs',
      'LogLoggedModelParams',
      'LogMetric',
      'LogModel',
      'LogOutputs',
      'LogParam',
      'RenameRegisteredModel',
      'RestoreExperiment',
      'RestoreRun',
      'SetExperimentTag',
      'SetLoggedModelTags',
      'SetModelVersionTag',
      'SetRegisteredModelAlias',
      'SetRegisteredModelTag',
      'SetTag',
      'SetTraceTag',
      'StartTrace',
      'TransitionModelVersionStage',
      'UpdateExperiment',
      'UpdateModelVersion',
      'UpdateRegisteredModel',
      'UpdateRun'
    ],
    List: [
      'GetLatestModelVersions',
      'ListArtifacts',
      'ListLoggedModelArtifacts'
    ]
  };

  /**
   * Adds a resource of type mlflow-tracking-server to the statement
   *
   * https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_MlflowTrackingServer.html
   *
   * @param mlflowTrackingServerName - Identifier for the mlflowTrackingServerName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifSagemakerResourceTag()
   */
  public onMlflowTrackingServer(mlflowTrackingServerName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sagemaker:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:mlflow-tracking-server/${ mlflowTrackingServerName }`);
  }

  /**
   * Filters access by a tag key and value pair
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to resource types:
   * - mlflow-tracking-server
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a tag key and value pair
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to resource types:
   * - mlflow-tracking-server
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSagemakerResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`sagemaker:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }
}
