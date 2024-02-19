import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

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
  constructor(sid?: string) {
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
    return this.to('AddTags');
  }

  /**
   * Generates predictions for a group of observations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateBatchPrediction.html
   */
  public toCreateBatchPrediction() {
    return this.to('CreateBatchPrediction');
  }

  /**
   * Creates a DataSource object from an Amazon RDS
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateDataSourceFromRDS.html
   */
  public toCreateDataSourceFromRDS() {
    return this.to('CreateDataSourceFromRDS');
  }

  /**
   * Creates a DataSource from a database hosted on an Amazon Redshift cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateDataSourceFromRedshift.html
   */
  public toCreateDataSourceFromRedshift() {
    return this.to('CreateDataSourceFromRedshift');
  }

  /**
   * Creates a DataSource object from S3
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateDataSourceFromS3.html
   */
  public toCreateDataSourceFromS3() {
    return this.to('CreateDataSourceFromS3');
  }

  /**
   * Creates a new Evaluation of an MLModel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateEvaluation.html
   */
  public toCreateEvaluation() {
    return this.to('CreateEvaluation');
  }

  /**
   * Creates a new MLModel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateMLModel.html
   */
  public toCreateMLModel() {
    return this.to('CreateMLModel');
  }

  /**
   * Creates a real-time endpoint for the MLModel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateRealtimeEndpoint.html
   */
  public toCreateRealtimeEndpoint() {
    return this.to('CreateRealtimeEndpoint');
  }

  /**
   * Assigns the DELETED status to a BatchPrediction, rendering it unusable
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteBatchPrediction.html
   */
  public toDeleteBatchPrediction() {
    return this.to('DeleteBatchPrediction');
  }

  /**
   * Assigns the DELETED status to a DataSource, rendering it unusable
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteDataSource.html
   */
  public toDeleteDataSource() {
    return this.to('DeleteDataSource');
  }

  /**
   * Assigns the DELETED status to an Evaluation, rendering it unusable
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteEvaluation.html
   */
  public toDeleteEvaluation() {
    return this.to('DeleteEvaluation');
  }

  /**
   * Assigns the DELETED status to an MLModel, rendering it unusable
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteMLModel.html
   */
  public toDeleteMLModel() {
    return this.to('DeleteMLModel');
  }

  /**
   * Deletes a real time endpoint of an MLModel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteRealtimeEndpoint.html
   */
  public toDeleteRealtimeEndpoint() {
    return this.to('DeleteRealtimeEndpoint');
  }

  /**
   * Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteTags.html
   */
  public toDeleteTags() {
    return this.to('DeleteTags');
  }

  /**
   * Returns a list of BatchPrediction operations that match the search criteria in the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeBatchPredictions.html
   */
  public toDescribeBatchPredictions() {
    return this.to('DescribeBatchPredictions');
  }

  /**
   * Returns a list of DataSource that match the search criteria in the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeDataSources.html
   */
  public toDescribeDataSources() {
    return this.to('DescribeDataSources');
  }

  /**
   * Returns a list of DescribeEvaluations that match the search criteria in the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeEvaluations.html
   */
  public toDescribeEvaluations() {
    return this.to('DescribeEvaluations');
  }

  /**
   * Returns a list of MLModel that match the search criteria in the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeMLModels.html
   */
  public toDescribeMLModels() {
    return this.to('DescribeMLModels');
  }

  /**
   * Describes one or more of the tags for your Amazon ML object
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeTags.html
   */
  public toDescribeTags() {
    return this.to('DescribeTags');
  }

  /**
   * Returns a BatchPrediction that includes detailed metadata, status, and data file information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetBatchPrediction.html
   */
  public toGetBatchPrediction() {
    return this.to('GetBatchPrediction');
  }

  /**
   * Returns a DataSource that includes metadata and data file information, as well as the current status of the DataSource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetDataSource.html
   */
  public toGetDataSource() {
    return this.to('GetDataSource');
  }

  /**
   * Returns an Evaluation that includes metadata as well as the current status of the Evaluation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetEvaluation.html
   */
  public toGetEvaluation() {
    return this.to('GetEvaluation');
  }

  /**
   * Returns an MLModel that includes detailed metadata, and data source information as well as the current status of the MLModel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetMLModel.html
   */
  public toGetMLModel() {
    return this.to('GetMLModel');
  }

  /**
   * Generates a prediction for the observation using the specified ML Model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_Predict.html
   */
  public toPredict() {
    return this.to('Predict');
  }

  /**
   * Updates the BatchPredictionName of a BatchPrediction
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateBatchPrediction.html
   */
  public toUpdateBatchPrediction() {
    return this.to('UpdateBatchPrediction');
  }

  /**
   * Updates the DataSourceName of a DataSource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateDataSource.html
   */
  public toUpdateDataSource() {
    return this.to('UpdateDataSource');
  }

  /**
   * Updates the EvaluationName of an Evaluation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateEvaluation.html
   */
  public toUpdateEvaluation() {
    return this.to('UpdateEvaluation');
  }

  /**
   * Updates the MLModelName and the ScoreThreshold of an MLModel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateMLModel.html
   */
  public toUpdateMLModel() {
    return this.to('UpdateMLModel');
  }

  protected accessLevelList: AccessLevelList = {
    Tagging: [
      'AddTags',
      'DeleteTags'
    ],
    Write: [
      'CreateBatchPrediction',
      'CreateDataSourceFromRDS',
      'CreateDataSourceFromRedshift',
      'CreateDataSourceFromS3',
      'CreateEvaluation',
      'CreateMLModel',
      'CreateRealtimeEndpoint',
      'DeleteBatchPrediction',
      'DeleteDataSource',
      'DeleteEvaluation',
      'DeleteMLModel',
      'DeleteRealtimeEndpoint',
      'Predict',
      'UpdateBatchPrediction',
      'UpdateDataSource',
      'UpdateEvaluation',
      'UpdateMLModel'
    ],
    List: [
      'DescribeBatchPredictions',
      'DescribeDataSources',
      'DescribeEvaluations',
      'DescribeMLModels',
      'DescribeTags'
    ],
    Read: [
      'GetBatchPrediction',
      'GetDataSource',
      'GetEvaluation',
      'GetMLModel'
    ]
  };

  /**
   * Adds a resource of type batchprediction to the statement
   *
   * https://docs.aws.amazon.com/machine-learning/latest/dg/amazon-machine-learning-key-concepts.html#batch-predictions
   *
   * @param batchPredictionId - Identifier for the batchPredictionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBatchprediction(batchPredictionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:machinelearning:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:batchprediction/${ batchPredictionId }`);
  }

  /**
   * Adds a resource of type datasource to the statement
   *
   * https://docs.aws.amazon.com/machine-learning/latest/dg/amazon-machine-learning-key-concepts.html#datasources
   *
   * @param datasourceId - Identifier for the datasourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDatasource(datasourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:machinelearning:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:datasource/${ datasourceId }`);
  }

  /**
   * Adds a resource of type evaluation to the statement
   *
   * https://docs.aws.amazon.com/machine-learning/latest/dg/amazon-machine-learning-key-concepts.html#evaluations
   *
   * @param evaluationId - Identifier for the evaluationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEvaluation(evaluationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:machinelearning:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:evaluation/${ evaluationId }`);
  }

  /**
   * Adds a resource of type mlmodel to the statement
   *
   * https://docs.aws.amazon.com/machine-learning/latest/dg/amazon-machine-learning-key-concepts.html#ml-models
   *
   * @param mlModelId - Identifier for the mlModelId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onMlmodel(mlModelId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:machinelearning:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:mlmodel/${ mlModelId }`);
  }
}
