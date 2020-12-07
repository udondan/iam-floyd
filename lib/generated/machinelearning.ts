import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [machinelearning](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmachinelearning.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Machinelearning extends PolicyStatement {
  public servicePrefix = 'machinelearning';

  /**
   * Statement provider for service [machinelearning](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmachinelearning.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds one or more tags to an object, up to a limit of 10. Each tag consists of a key and an optional value
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_AddTags.html
   */
  public toAddTags() {
    this.to('machinelearning:AddTags');
    return this;
  }

  /**
   * Generates predictions for a group of observations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateBatchPrediction.html
   */
  public toCreateBatchPrediction() {
    this.to('machinelearning:CreateBatchPrediction');
    return this;
  }

  /**
   * Creates a DataSource object from an Amazon RDS
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateDataSourceFromRDS.html
   */
  public toCreateDataSourceFromRDS() {
    this.to('machinelearning:CreateDataSourceFromRDS');
    return this;
  }

  /**
   * Creates a DataSource from a database hosted on an Amazon Redshift cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateDataSourceFromRedshift.html
   */
  public toCreateDataSourceFromRedshift() {
    this.to('machinelearning:CreateDataSourceFromRedshift');
    return this;
  }

  /**
   * Creates a DataSource object from S3
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateDataSourceFromS3.html
   */
  public toCreateDataSourceFromS3() {
    this.to('machinelearning:CreateDataSourceFromS3');
    return this;
  }

  /**
   * Creates a new Evaluation of an MLModel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateEvaluation.html
   */
  public toCreateEvaluation() {
    this.to('machinelearning:CreateEvaluation');
    return this;
  }

  /**
   * Creates a new MLModel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateMLModel.html
   */
  public toCreateMLModel() {
    this.to('machinelearning:CreateMLModel');
    return this;
  }

  /**
   * Creates a real-time endpoint for the MLModel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateRealtimeEndpoint.html
   */
  public toCreateRealtimeEndpoint() {
    this.to('machinelearning:CreateRealtimeEndpoint');
    return this;
  }

  /**
   * Assigns the DELETED status to a BatchPrediction, rendering it unusable
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteBatchPrediction.html
   */
  public toDeleteBatchPrediction() {
    this.to('machinelearning:DeleteBatchPrediction');
    return this;
  }

  /**
   * Assigns the DELETED status to a DataSource, rendering it unusable
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteDataSource.html
   */
  public toDeleteDataSource() {
    this.to('machinelearning:DeleteDataSource');
    return this;
  }

  /**
   * Assigns the DELETED status to an Evaluation, rendering it unusable
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteEvaluation.html
   */
  public toDeleteEvaluation() {
    this.to('machinelearning:DeleteEvaluation');
    return this;
  }

  /**
   * Assigns the DELETED status to an MLModel, rendering it unusable
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteMLModel.html
   */
  public toDeleteMLModel() {
    this.to('machinelearning:DeleteMLModel');
    return this;
  }

  /**
   * Deletes a real time endpoint of an MLModel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteRealtimeEndpoint.html
   */
  public toDeleteRealtimeEndpoint() {
    this.to('machinelearning:DeleteRealtimeEndpoint');
    return this;
  }

  /**
   * Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteTags.html
   */
  public toDeleteTags() {
    this.to('machinelearning:DeleteTags');
    return this;
  }

  /**
   * Returns a list of BatchPrediction operations that match the search criteria in the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeBatchPredictions.html
   */
  public toDescribeBatchPredictions() {
    this.to('machinelearning:DescribeBatchPredictions');
    return this;
  }

  /**
   * Returns a list of DataSource that match the search criteria in the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeDataSources.html
   */
  public toDescribeDataSources() {
    this.to('machinelearning:DescribeDataSources');
    return this;
  }

  /**
   * Returns a list of DescribeEvaluations that match the search criteria in the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeEvaluations.html
   */
  public toDescribeEvaluations() {
    this.to('machinelearning:DescribeEvaluations');
    return this;
  }

  /**
   * Returns a list of MLModel that match the search criteria in the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeMLModels.html
   */
  public toDescribeMLModels() {
    this.to('machinelearning:DescribeMLModels');
    return this;
  }

  /**
   * Describes one or more of the tags for your Amazon ML object
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeTags.html
   */
  public toDescribeTags() {
    this.to('machinelearning:DescribeTags');
    return this;
  }

  /**
   * Returns a BatchPrediction that includes detailed metadata, status, and data file information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetBatchPrediction.html
   */
  public toGetBatchPrediction() {
    this.to('machinelearning:GetBatchPrediction');
    return this;
  }

  /**
   * Returns a DataSource that includes metadata and data file information, as well as the current status of the DataSource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetDataSource.html
   */
  public toGetDataSource() {
    this.to('machinelearning:GetDataSource');
    return this;
  }

  /**
   * Returns an Evaluation that includes metadata as well as the current status of the Evaluation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetEvaluation.html
   */
  public toGetEvaluation() {
    this.to('machinelearning:GetEvaluation');
    return this;
  }

  /**
   * Returns an MLModel that includes detailed metadata, and data source information as well as the current status of the MLModel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetMLModel.html
   */
  public toGetMLModel() {
    this.to('machinelearning:GetMLModel');
    return this;
  }

  /**
   * Generates a prediction for the observation using the specified ML Model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_Predict.html
   */
  public toPredict() {
    this.to('machinelearning:Predict');
    return this;
  }

  /**
   * Updates the BatchPredictionName of a BatchPrediction
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateBatchPrediction.html
   */
  public toUpdateBatchPrediction() {
    this.to('machinelearning:UpdateBatchPrediction');
    return this;
  }

  /**
   * Updates the DataSourceName of a DataSource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateDataSource.html
   */
  public toUpdateDataSource() {
    this.to('machinelearning:UpdateDataSource');
    return this;
  }

  /**
   * Updates the EvaluationName of an Evaluation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateEvaluation.html
   */
  public toUpdateEvaluation() {
    this.to('machinelearning:UpdateEvaluation');
    return this;
  }

  /**
   * Updates the MLModelName and the ScoreThreshold of an MLModel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateMLModel.html
   */
  public toUpdateMLModel() {
    this.to('machinelearning:UpdateMLModel');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Tagging": [
      "AddTags",
      "DeleteTags"
    ],
    "Write": [
      "CreateBatchPrediction",
      "CreateDataSourceFromRDS",
      "CreateDataSourceFromRedshift",
      "CreateDataSourceFromS3",
      "CreateEvaluation",
      "CreateMLModel",
      "CreateRealtimeEndpoint",
      "DeleteBatchPrediction",
      "DeleteDataSource",
      "DeleteEvaluation",
      "DeleteMLModel",
      "DeleteRealtimeEndpoint",
      "Predict",
      "UpdateBatchPrediction",
      "UpdateDataSource",
      "UpdateEvaluation",
      "UpdateMLModel"
    ],
    "List": [
      "DescribeBatchPredictions",
      "DescribeDataSources",
      "DescribeEvaluations",
      "DescribeMLModels",
      "DescribeTags"
    ],
    "Read": [
      "GetBatchPrediction",
      "GetDataSource",
      "GetEvaluation",
      "GetMLModel"
    ]
  };

  /**
   * Adds a resource of type batchprediction to the statement
   *
   * https://docs.aws.amazon.com/machine-learning/latest/dg/amazon-machine-learning-key-concepts.html#batch-predictions
   *
   * @param batchPredictionId - Identifier for the batchPredictionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onBatchprediction(batchPredictionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:machinelearning:${Region}:${Account}:batchprediction/${BatchPredictionId}';
    arn = arn.replace('${BatchPredictionId}', batchPredictionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type datasource to the statement
   *
   * https://docs.aws.amazon.com/machine-learning/latest/dg/amazon-machine-learning-key-concepts.html#datasources
   *
   * @param datasourceId - Identifier for the datasourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDatasource(datasourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:machinelearning:${Region}:${Account}:datasource/${DatasourceId}';
    arn = arn.replace('${DatasourceId}', datasourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type evaluation to the statement
   *
   * https://docs.aws.amazon.com/machine-learning/latest/dg/amazon-machine-learning-key-concepts.html#evaluations
   *
   * @param evaluationId - Identifier for the evaluationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEvaluation(evaluationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:machinelearning:${Region}:${Account}:evaluation/${EvaluationId}';
    arn = arn.replace('${EvaluationId}', evaluationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type mlmodel to the statement
   *
   * https://docs.aws.amazon.com/machine-learning/latest/dg/amazon-machine-learning-key-concepts.html#ml-models
   *
   * @param mlModelId - Identifier for the mlModelId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onMlmodel(mlModelId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:machinelearning:${Region}:${Account}:mlmodel/${MlModelId}';
    arn = arn.replace('${MlModelId}', mlModelId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type MachinelearningActionsTagging = 'AddTags' | 'DeleteTags';
export type MachinelearningActionsWrite = 'CreateBatchPrediction' | 'CreateDataSourceFromRDS' | 'CreateDataSourceFromRedshift' | 'CreateDataSourceFromS3' | 'CreateEvaluation' | 'CreateMLModel' | 'CreateRealtimeEndpoint' | 'DeleteBatchPrediction' | 'DeleteDataSource' | 'DeleteEvaluation' | 'DeleteMLModel' | 'DeleteRealtimeEndpoint' | 'Predict' | 'UpdateBatchPrediction' | 'UpdateDataSource' | 'UpdateEvaluation' | 'UpdateMLModel';
export type MachinelearningActionsList = 'DescribeBatchPredictions' | 'DescribeDataSources' | 'DescribeEvaluations' | 'DescribeMLModels' | 'DescribeTags';
export type MachinelearningActionsRead = 'GetBatchPrediction' | 'GetDataSource' | 'GetEvaluation' | 'GetMLModel';
export type MachinelearningActions = MachinelearningActionsTagging | MachinelearningActionsWrite | MachinelearningActionsList | MachinelearningActionsRead;
