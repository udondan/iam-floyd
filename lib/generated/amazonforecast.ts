import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [forecast](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonforecast.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Forecast extends PolicyStatement {
  public servicePrefix = 'forecast';
  protected actionList: Actions = {
    "CreateDataset": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_CreateDataset.html",
      "description": "Creates a dataset",
      "accessLevel": "Write",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDatasetGroup": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_CreateDatasetGroup.html",
      "description": "Creates a dataset group",
      "accessLevel": "Write",
      "resourceTypes": {
        "datasetGroup": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDatasetImportJob": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_CreateDatasetImportJob.html",
      "description": "Creates a dataset import job",
      "accessLevel": "Write",
      "resourceTypes": {
        "datasetImportJob": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateForecast": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_CreateForecast.html",
      "description": "Creates a forecast",
      "accessLevel": "Write",
      "resourceTypes": {
        "predictor": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateForecastExportJob": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_CreateForecastExportJob.html",
      "description": "Creates a forecast export job",
      "accessLevel": "Write",
      "resourceTypes": {
        "forecast": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreatePredictor": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_CreatePredictor.html",
      "description": "Creates a predictor",
      "accessLevel": "Write",
      "resourceTypes": {
        "datasetGroup": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteDataset": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteDataset.html",
      "description": "Deletes a dataset",
      "accessLevel": "Write",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      }
    },
    "DeleteDatasetGroup": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteDatasetGroup.html",
      "description": "Deletes a dataset group",
      "accessLevel": "Write",
      "resourceTypes": {
        "datasetGroup": {
          "required": true
        }
      }
    },
    "DeleteDatasetImportJob": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteDatasetImportJob.html",
      "description": "Deletes a dataset import job",
      "accessLevel": "Write",
      "resourceTypes": {
        "datasetImportJob": {
          "required": true
        }
      }
    },
    "DeleteForecast": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteForecast.html",
      "description": "Deletes a forecast",
      "accessLevel": "Write",
      "resourceTypes": {
        "forecast": {
          "required": true
        }
      }
    },
    "DeleteForecastExportJob": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteForecastExportJob.html",
      "description": "Deletes a forecast export job",
      "accessLevel": "Write",
      "resourceTypes": {
        "forecastExport": {
          "required": true
        }
      }
    },
    "DeletePredictor": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeletePredictor.html",
      "description": "Deletes a predictor",
      "accessLevel": "Write",
      "resourceTypes": {
        "predictor": {
          "required": true
        }
      }
    },
    "DescribeDataset": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeDataset.html",
      "description": "Describes a dataset",
      "accessLevel": "Read",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      }
    },
    "DescribeDatasetGroup": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeDatasetGroup.html",
      "description": "Describes a dataset group",
      "accessLevel": "Read",
      "resourceTypes": {
        "datasetGroup": {
          "required": true
        }
      }
    },
    "DescribeDatasetImportJob": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeDatasetImportJob.html",
      "description": "Describes a dataset import job",
      "accessLevel": "Read",
      "resourceTypes": {
        "datasetImportJob": {
          "required": true
        }
      }
    },
    "DescribeForecast": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeForecast.html",
      "description": "Describes a forecast",
      "accessLevel": "Read",
      "resourceTypes": {
        "forecast": {
          "required": true
        }
      }
    },
    "DescribeForecastExportJob": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeForecastExportJob.html",
      "description": "Describes a forecast export job",
      "accessLevel": "Read",
      "resourceTypes": {
        "forecastExport": {
          "required": true
        }
      }
    },
    "DescribePredictor": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribePredictor.html",
      "description": "Describes a predictor",
      "accessLevel": "Read",
      "resourceTypes": {
        "predictor": {
          "required": true
        }
      }
    },
    "GetAccuracyMetrics": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_GetAccuracyMetrics.html",
      "description": "Gets Accuracy Metrics for a predictor",
      "accessLevel": "Read",
      "resourceTypes": {
        "predictor": {
          "required": true
        }
      }
    },
    "ListDatasetGroups": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListDatasetGroups.html",
      "description": "Lists dataset groups",
      "accessLevel": "List"
    },
    "ListDatasetImportJobs": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListDatasetImportJobs.html",
      "description": "Lists dataset import jobs",
      "accessLevel": "List"
    },
    "ListDatasets": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListDatasets.html",
      "description": "Lists datasets",
      "accessLevel": "List"
    },
    "ListForecastExportJobs": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListForecastExportJobs.html",
      "description": "Lists forecast export jobs",
      "accessLevel": "List"
    },
    "ListForecasts": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListForecasts.html",
      "description": "Lists forecasts",
      "accessLevel": "List"
    },
    "ListPredictors": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListPredictors.html",
      "description": "Lists predictors",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListTagsForResource.html",
      "description": "Lists the tags for an Amazon Forecast resource",
      "accessLevel": "List",
      "resourceTypes": {
        "dataset": {
          "required": false
        },
        "datasetGroup": {
          "required": false
        },
        "datasetImportJob": {
          "required": false
        },
        "forecast": {
          "required": false
        },
        "forecastExport": {
          "required": false
        },
        "predictor": {
          "required": false
        }
      }
    },
    "QueryForecast": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_forecastquery_QueryForecast.html",
      "description": "Retrieves a forecast for a single item",
      "accessLevel": "Read",
      "resourceTypes": {
        "forecast": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_TagResource.html",
      "description": "Associates the specified tags to a resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "dataset": {
          "required": false
        },
        "datasetGroup": {
          "required": false
        },
        "datasetImportJob": {
          "required": false
        },
        "forecast": {
          "required": false
        },
        "forecastExport": {
          "required": false
        },
        "predictor": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_UntagResource.html",
      "description": "Deletes the specified tags for a resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "dataset": {
          "required": false
        },
        "datasetGroup": {
          "required": false
        },
        "datasetImportJob": {
          "required": false
        },
        "forecast": {
          "required": false
        },
        "forecastExport": {
          "required": false
        },
        "predictor": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateDatasetGroup": {
      "url": "https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_UpdateDatasetGroup.html",
      "description": "Updates a dataset group",
      "accessLevel": "Write",
      "resourceTypes": {
        "dataset": {
          "required": true
        },
        "datasetGroup": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "dataset": {
      "name": "dataset",
      "url": "",
      "arn": "arn:${Partition}:forecast:${Region}:${Account}:dataset/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "datasetGroup": {
      "name": "datasetGroup",
      "url": "",
      "arn": "arn:${Partition}:forecast:${Region}:${Account}:dataset-group/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "datasetImportJob": {
      "name": "datasetImportJob",
      "url": "",
      "arn": "arn:${Partition}:forecast:${Region}:${Account}:dataset-import-job/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "algorithm": {
      "name": "algorithm",
      "url": "",
      "arn": "arn:${Partition}:forecast:::algorithm/${ResourceId}",
      "conditionKeys": []
    },
    "predictor": {
      "name": "predictor",
      "url": "",
      "arn": "arn:${Partition}:forecast:${Region}:${Account}:predictor/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "forecast": {
      "name": "forecast",
      "url": "",
      "arn": "arn:${Partition}:forecast:${Region}:${Account}:forecast/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "forecastExport": {
      "name": "forecastExport",
      "url": "",
      "arn": "arn:${Partition}:forecast:${Region}:${Account}:forecast-export-job/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [forecast](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonforecast.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a dataset
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_CreateDataset.html
   */
  public createDataset() {
    this.add('forecast:CreateDataset');
    return this;
  }

  /**
   * Creates a dataset group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_CreateDatasetGroup.html
   */
  public createDatasetGroup() {
    this.add('forecast:CreateDatasetGroup');
    return this;
  }

  /**
   * Creates a dataset import job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_CreateDatasetImportJob.html
   */
  public createDatasetImportJob() {
    this.add('forecast:CreateDatasetImportJob');
    return this;
  }

  /**
   * Creates a forecast
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_CreateForecast.html
   */
  public createForecast() {
    this.add('forecast:CreateForecast');
    return this;
  }

  /**
   * Creates a forecast export job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_CreateForecastExportJob.html
   */
  public createForecastExportJob() {
    this.add('forecast:CreateForecastExportJob');
    return this;
  }

  /**
   * Creates a predictor
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_CreatePredictor.html
   */
  public createPredictor() {
    this.add('forecast:CreatePredictor');
    return this;
  }

  /**
   * Deletes a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteDataset.html
   */
  public deleteDataset() {
    this.add('forecast:DeleteDataset');
    return this;
  }

  /**
   * Deletes a dataset group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteDatasetGroup.html
   */
  public deleteDatasetGroup() {
    this.add('forecast:DeleteDatasetGroup');
    return this;
  }

  /**
   * Deletes a dataset import job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteDatasetImportJob.html
   */
  public deleteDatasetImportJob() {
    this.add('forecast:DeleteDatasetImportJob');
    return this;
  }

  /**
   * Deletes a forecast
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteForecast.html
   */
  public deleteForecast() {
    this.add('forecast:DeleteForecast');
    return this;
  }

  /**
   * Deletes a forecast export job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeleteForecastExportJob.html
   */
  public deleteForecastExportJob() {
    this.add('forecast:DeleteForecastExportJob');
    return this;
  }

  /**
   * Deletes a predictor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DeletePredictor.html
   */
  public deletePredictor() {
    this.add('forecast:DeletePredictor');
    return this;
  }

  /**
   * Describes a dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeDataset.html
   */
  public describeDataset() {
    this.add('forecast:DescribeDataset');
    return this;
  }

  /**
   * Describes a dataset group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeDatasetGroup.html
   */
  public describeDatasetGroup() {
    this.add('forecast:DescribeDatasetGroup');
    return this;
  }

  /**
   * Describes a dataset import job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeDatasetImportJob.html
   */
  public describeDatasetImportJob() {
    this.add('forecast:DescribeDatasetImportJob');
    return this;
  }

  /**
   * Describes a forecast
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeForecast.html
   */
  public describeForecast() {
    this.add('forecast:DescribeForecast');
    return this;
  }

  /**
   * Describes a forecast export job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribeForecastExportJob.html
   */
  public describeForecastExportJob() {
    this.add('forecast:DescribeForecastExportJob');
    return this;
  }

  /**
   * Describes a predictor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_DescribePredictor.html
   */
  public describePredictor() {
    this.add('forecast:DescribePredictor');
    return this;
  }

  /**
   * Gets Accuracy Metrics for a predictor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_GetAccuracyMetrics.html
   */
  public getAccuracyMetrics() {
    this.add('forecast:GetAccuracyMetrics');
    return this;
  }

  /**
   * Lists dataset groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListDatasetGroups.html
   */
  public listDatasetGroups() {
    this.add('forecast:ListDatasetGroups');
    return this;
  }

  /**
   * Lists dataset import jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListDatasetImportJobs.html
   */
  public listDatasetImportJobs() {
    this.add('forecast:ListDatasetImportJobs');
    return this;
  }

  /**
   * Lists datasets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListDatasets.html
   */
  public listDatasets() {
    this.add('forecast:ListDatasets');
    return this;
  }

  /**
   * Lists forecast export jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListForecastExportJobs.html
   */
  public listForecastExportJobs() {
    this.add('forecast:ListForecastExportJobs');
    return this;
  }

  /**
   * Lists forecasts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListForecasts.html
   */
  public listForecasts() {
    this.add('forecast:ListForecasts');
    return this;
  }

  /**
   * Lists predictors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListPredictors.html
   */
  public listPredictors() {
    this.add('forecast:ListPredictors');
    return this;
  }

  /**
   * Lists the tags for an Amazon Forecast resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('forecast:ListTagsForResource');
    return this;
  }

  /**
   * Retrieves a forecast for a single item
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_forecastquery_QueryForecast.html
   */
  public queryForecast() {
    this.add('forecast:QueryForecast');
    return this;
  }

  /**
   * Associates the specified tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_TagResource.html
   */
  public tagResource() {
    this.add('forecast:TagResource');
    return this;
  }

  /**
   * Deletes the specified tags for a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_UntagResource.html
   */
  public untagResource() {
    this.add('forecast:UntagResource');
    return this;
  }

  /**
   * Updates a dataset group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/forecast/latest/dg/API_Operations.htmlAPI_UpdateDatasetGroup.html
   */
  public updateDatasetGroup() {
    this.add('forecast:UpdateDatasetGroup');
    return this;
  }

  /**
   * Adds a resource of type dataset to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataset(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:forecast:${Region}:${Account}:dataset/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type datasetGroup to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDatasetGroup(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:forecast:${Region}:${Account}:dataset-group/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type datasetImportJob to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDatasetImportJob(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:forecast:${Region}:${Account}:dataset-import-job/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type algorithm to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAlgorithm(resourceId: string, partition?: string) {
    var arn = 'arn:${Partition}:forecast:::algorithm/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type predictor to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPredictor(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:forecast:${Region}:${Account}:predictor/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type forecast to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onForecast(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:forecast:${Region}:${Account}:forecast/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type forecastExport to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onForecastExport(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:forecast:${Region}:${Account}:forecast-export-job/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .createDataset()
   * - .createDatasetGroup()
   * - .createDatasetImportJob()
   * - .createForecast()
   * - .createForecastExportJob()
   * - .createPredictor()
   * - .tagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - dataset
   * - datasetGroup
   * - datasetImportJob
   * - predictor
   * - forecast
   * - forecastExport
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .createDataset()
   * - .createDatasetGroup()
   * - .createDatasetImportJob()
   * - .createForecast()
   * - .createForecastExportJob()
   * - .createPredictor()
   * - .tagResource()
   * - .untagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
