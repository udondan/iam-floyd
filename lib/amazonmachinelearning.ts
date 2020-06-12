import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service machinelearning
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmachinelearning.html
 */
export class Machinelearning extends PolicyStatement {
  public servicePrefix = 'machinelearning';
  public actions : Actions = {
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
  public resourceTypes : ResourceTypes = {
    "batchprediction": {
      "name": "batchprediction",
      "arn": "arn:${Partition}:machinelearning:${Region}:${Account}:batchprediction/${BatchPredictionId}",
      "conditionKeys": []
    },
    "datasource": {
      "name": "datasource",
      "arn": "arn:${Partition}:machinelearning:${Region}:${Account}:datasource/${DatasourceId}",
      "conditionKeys": []
    },
    "evaluation": {
      "name": "evaluation",
      "arn": "arn:${Partition}:machinelearning:${Region}:${Account}:evaluation/${EvaluationId}",
      "conditionKeys": []
    },
    "mlmodel": {
      "name": "mlmodel",
      "arn": "arn:${Partition}:machinelearning:${Region}:${Account}:mlmodel/${MlModelId}",
      "conditionKeys": []
    }
  };

  /**
   * Adds one or more tags to an object, up to a limit of 10. Each tag consists of a key and an optional value
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/machine-learning/latest/APIReference/API_AddTags.html
   */
  public addTags () {
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
  public createBatchPrediction () {
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
  public createDataSourceFromRDS () {
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
  public createDataSourceFromRedshift () {
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
  public createDataSourceFromS3 () {
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
  public createEvaluation () {
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
  public createMLModel () {
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
  public createRealtimeEndpoint () {
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
  public deleteBatchPrediction () {
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
  public deleteDataSource () {
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
  public deleteEvaluation () {
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
  public deleteMLModel () {
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
  public deleteRealtimeEndpoint () {
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
  public deleteTags () {
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
  public describeBatchPredictions () {
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
  public describeDataSources () {
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
  public describeEvaluations () {
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
  public describeMLModels () {
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
  public describeTags () {
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
  public getBatchPrediction () {
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
  public getDataSource () {
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
  public getEvaluation () {
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
  public getMLModel () {
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
  public predict () {
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
  public updateBatchPrediction () {
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
  public updateDataSource () {
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
  public updateEvaluation () {
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
  public updateMLModel () {
    this.add('machinelearning:UpdateMLModel');
    return this;
  }
}
