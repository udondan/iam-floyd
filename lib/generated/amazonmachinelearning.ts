import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [machinelearning](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmachinelearning.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Machinelearning extends PolicyStatement {
  public servicePrefix = 'machinelearning';
  protected actionList: Actions = {
    "AddTags": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_AddTags.html",
      "description": "Adds one or more tags to an object, up to a limit of 10. Each tag consists of a key and an optional value",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "batchprediction": {
          "required": false
        },
        "datasource": {
          "required": false
        },
        "evaluation": {
          "required": false
        },
        "mlmodel": {
          "required": false
        }
      }
    },
    "CreateBatchPrediction": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateBatchPrediction.html",
      "description": "Generates predictions for a group of observations",
      "accessLevel": "Write",
      "resourceTypes": {
        "batchprediction": {
          "required": true
        },
        "datasource": {
          "required": true
        },
        "mlmodel": {
          "required": true
        }
      }
    },
    "CreateDataSourceFromRDS": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateDataSourceFromRDS.html",
      "description": "Creates a DataSource object from an Amazon RDS",
      "accessLevel": "Write",
      "resourceTypes": {
        "datasource": {
          "required": true
        }
      }
    },
    "CreateDataSourceFromRedshift": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateDataSourceFromRedshift.html",
      "description": "Creates a DataSource from a database hosted on an Amazon Redshift cluster",
      "accessLevel": "Write",
      "resourceTypes": {
        "datasource": {
          "required": true
        }
      }
    },
    "CreateDataSourceFromS3": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateDataSourceFromS3.html",
      "description": "Creates a DataSource object from S3",
      "accessLevel": "Write",
      "resourceTypes": {
        "datasource": {
          "required": true
        }
      }
    },
    "CreateEvaluation": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateEvaluation.html",
      "description": "Creates a new Evaluation of an MLModel",
      "accessLevel": "Write",
      "resourceTypes": {
        "datasource": {
          "required": true
        },
        "evaluation": {
          "required": true
        },
        "mlmodel": {
          "required": true
        }
      }
    },
    "CreateMLModel": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateMLModel.html",
      "description": "Creates a new MLModel",
      "accessLevel": "Write",
      "resourceTypes": {
        "datasource": {
          "required": true
        },
        "mlmodel": {
          "required": true
        }
      }
    },
    "CreateRealtimeEndpoint": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_CreateRealtimeEndpoint.html",
      "description": "Creates a real-time endpoint for the MLModel",
      "accessLevel": "Write",
      "resourceTypes": {
        "mlmodel": {
          "required": true
        }
      }
    },
    "DeleteBatchPrediction": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteBatchPrediction.html",
      "description": "Assigns the DELETED status to a BatchPrediction, rendering it unusable",
      "accessLevel": "Write",
      "resourceTypes": {
        "batchprediction": {
          "required": true
        }
      }
    },
    "DeleteDataSource": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteDataSource.html",
      "description": "Assigns the DELETED status to a DataSource, rendering it unusable",
      "accessLevel": "Write",
      "resourceTypes": {
        "datasource": {
          "required": true
        }
      }
    },
    "DeleteEvaluation": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteEvaluation.html",
      "description": "Assigns the DELETED status to an Evaluation, rendering it unusable",
      "accessLevel": "Write",
      "resourceTypes": {
        "evaluation": {
          "required": true
        }
      }
    },
    "DeleteMLModel": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteMLModel.html",
      "description": "Assigns the DELETED status to an MLModel, rendering it unusable",
      "accessLevel": "Write",
      "resourceTypes": {
        "mlmodel": {
          "required": true
        }
      }
    },
    "DeleteRealtimeEndpoint": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteRealtimeEndpoint.html",
      "description": "Deletes a real time endpoint of an MLModel",
      "accessLevel": "Write",
      "resourceTypes": {
        "mlmodel": {
          "required": true
        }
      }
    },
    "DeleteTags": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DeleteTags.html",
      "description": "Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "batchprediction": {
          "required": false
        },
        "datasource": {
          "required": false
        },
        "evaluation": {
          "required": false
        },
        "mlmodel": {
          "required": false
        }
      }
    },
    "DescribeBatchPredictions": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeBatchPredictions.html",
      "description": "Returns a list of BatchPrediction operations that match the search criteria in the request",
      "accessLevel": "List"
    },
    "DescribeDataSources": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeDataSources.html",
      "description": "Returns a list of DataSource that match the search criteria in the request",
      "accessLevel": "List"
    },
    "DescribeEvaluations": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeEvaluations.html",
      "description": "Returns a list of DescribeEvaluations that match the search criteria in the request",
      "accessLevel": "List"
    },
    "DescribeMLModels": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeMLModels.html",
      "description": "Returns a list of MLModel that match the search criteria in the request",
      "accessLevel": "List"
    },
    "DescribeTags": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_DescribeTags.html",
      "description": "Describes one or more of the tags for your Amazon ML object",
      "accessLevel": "List",
      "resourceTypes": {
        "batchprediction": {
          "required": false
        },
        "datasource": {
          "required": false
        },
        "evaluation": {
          "required": false
        },
        "mlmodel": {
          "required": false
        }
      }
    },
    "GetBatchPrediction": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetBatchPrediction.html",
      "description": "Returns a BatchPrediction that includes detailed metadata, status, and data file information",
      "accessLevel": "Read",
      "resourceTypes": {
        "batchprediction": {
          "required": true
        }
      }
    },
    "GetDataSource": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetDataSource.html",
      "description": "Returns a DataSource that includes metadata and data file information, as well as the current status of the DataSource",
      "accessLevel": "Read",
      "resourceTypes": {
        "datasource": {
          "required": true
        }
      }
    },
    "GetEvaluation": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetEvaluation.html",
      "description": "Returns an Evaluation that includes metadata as well as the current status of the Evaluation",
      "accessLevel": "Read",
      "resourceTypes": {
        "datasource": {
          "required": true
        }
      }
    },
    "GetMLModel": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_GetMLModel.html",
      "description": "Returns an MLModel that includes detailed metadata, and data source information as well as the current status of the MLModel",
      "accessLevel": "Read",
      "resourceTypes": {
        "mlmodel": {
          "required": true
        }
      }
    },
    "Predict": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_Predict.html",
      "description": "Generates a prediction for the observation using the specified ML Model",
      "accessLevel": "Write",
      "resourceTypes": {
        "mlmodel": {
          "required": true
        }
      }
    },
    "UpdateBatchPrediction": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateBatchPrediction.html",
      "description": "Updates the BatchPredictionName of a BatchPrediction",
      "accessLevel": "Write",
      "resourceTypes": {
        "batchprediction": {
          "required": true
        }
      }
    },
    "UpdateDataSource": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateDataSource.html",
      "description": "Updates the DataSourceName of a DataSource",
      "accessLevel": "Write",
      "resourceTypes": {
        "datasource": {
          "required": true
        }
      }
    },
    "UpdateEvaluation": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateEvaluation.html",
      "description": "Updates the EvaluationName of an Evaluation",
      "accessLevel": "Write",
      "resourceTypes": {
        "evaluation": {
          "required": true
        }
      }
    },
    "UpdateMLModel": {
      "url": "https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_UpdateMLModel.html",
      "description": "Updates the MLModelName and the ScoreThreshold of an MLModel",
      "accessLevel": "Write",
      "resourceTypes": {
        "mlmodel": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "batchprediction": {
      "name": "batchprediction",
      "url": "https://docs.aws.amazon.com/machine-learning/latest/dg/amazon-machine-learning-key-concepts.html#batch-predictions",
      "arn": "arn:${Partition}:machinelearning:${Region}:${Account}:batchprediction/${BatchPredictionId}",
      "conditionKeys": []
    },
    "datasource": {
      "name": "datasource",
      "url": "https://docs.aws.amazon.com/machine-learning/latest/dg/amazon-machine-learning-key-concepts.html#datasources",
      "arn": "arn:${Partition}:machinelearning:${Region}:${Account}:datasource/${DatasourceId}",
      "conditionKeys": []
    },
    "evaluation": {
      "name": "evaluation",
      "url": "https://docs.aws.amazon.com/machine-learning/latest/dg/amazon-machine-learning-key-concepts.html#evaluations",
      "arn": "arn:${Partition}:machinelearning:${Region}:${Account}:evaluation/${EvaluationId}",
      "conditionKeys": []
    },
    "mlmodel": {
      "name": "mlmodel",
      "url": "https://docs.aws.amazon.com/machine-learning/latest/dg/amazon-machine-learning-key-concepts.html#ml-models",
      "arn": "arn:${Partition}:machinelearning:${Region}:${Account}:mlmodel/${MlModelId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [machinelearning](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmachinelearning.html).
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
    this.add('machinelearning:AddTags');
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
    this.add('machinelearning:CreateBatchPrediction');
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
    this.add('machinelearning:CreateDataSourceFromRDS');
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
    this.add('machinelearning:CreateDataSourceFromRedshift');
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
    this.add('machinelearning:CreateDataSourceFromS3');
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
    this.add('machinelearning:CreateEvaluation');
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
    this.add('machinelearning:CreateMLModel');
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
    this.add('machinelearning:CreateRealtimeEndpoint');
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
    this.add('machinelearning:DeleteBatchPrediction');
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
    this.add('machinelearning:DeleteDataSource');
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
    this.add('machinelearning:DeleteEvaluation');
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
    this.add('machinelearning:DeleteMLModel');
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
    this.add('machinelearning:DeleteRealtimeEndpoint');
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
    this.add('machinelearning:DeleteTags');
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
    this.add('machinelearning:DescribeBatchPredictions');
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
    this.add('machinelearning:DescribeDataSources');
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
    this.add('machinelearning:DescribeEvaluations');
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
    this.add('machinelearning:DescribeMLModels');
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
    this.add('machinelearning:DescribeTags');
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
    this.add('machinelearning:GetBatchPrediction');
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
    this.add('machinelearning:GetDataSource');
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
    this.add('machinelearning:GetEvaluation');
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
    this.add('machinelearning:GetMLModel');
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
    this.add('machinelearning:Predict');
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
    this.add('machinelearning:UpdateBatchPrediction');
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
    this.add('machinelearning:UpdateDataSource');
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
    this.add('machinelearning:UpdateEvaluation');
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
    this.add('machinelearning:UpdateMLModel');
    return this;
  }

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
