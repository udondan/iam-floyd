import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [iotanalytics](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotanalytics.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iotanalytics extends PolicyStatement {
  public servicePrefix = 'iotanalytics';
  protected actionList: Actions = {
    "BatchPutMessage": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_BatchPutMessage.html",
      "description": "Puts a batch of messages into the specified channel.",
      "accessLevel": "Write",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "CancelPipelineReprocessing": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CancelPipelineReprocessing.html",
      "description": "Cancels reprocessing for the specified pipeline.",
      "accessLevel": "Write",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    },
    "CreateChannel": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateChannel.html",
      "description": "Creates a channel.",
      "accessLevel": "Write",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDataset": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateDataset.html",
      "description": "Creates a dataset.",
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
    "CreateDatasetContent": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateDatasetContent.html",
      "description": "Generates content of the specified dataset (by executing the dataset actions).",
      "accessLevel": "Write",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      }
    },
    "CreateDatastore": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateDatastore.html",
      "description": "Creates a datastore.",
      "accessLevel": "Write",
      "resourceTypes": {
        "datastore": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreatePipeline": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreatePipeline.html",
      "description": "Creates a pipeline.",
      "accessLevel": "Write",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteChannel": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteChannel.html",
      "description": "Deletes the specified channel.",
      "accessLevel": "Write",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "DeleteDataset": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteDataset.html",
      "description": "Deletes the specified dataset.",
      "accessLevel": "Write",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      }
    },
    "DeleteDatasetContent": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteDatasetContent.html",
      "description": "Deletes the content of the specified dataset.",
      "accessLevel": "Write",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      }
    },
    "DeleteDatastore": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteDatastore.html",
      "description": "Deletes the specified datastore.",
      "accessLevel": "Write",
      "resourceTypes": {
        "datastore": {
          "required": true
        }
      }
    },
    "DeletePipeline": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeletePipeline.html",
      "description": "Deletes the specified pipeline.",
      "accessLevel": "Write",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    },
    "DescribeChannel": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeChannel.html",
      "description": "Describes the specified channel.",
      "accessLevel": "Read",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "DescribeDataset": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeDataset.html",
      "description": "Describes the specified dataset.",
      "accessLevel": "Read",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      }
    },
    "DescribeDatastore": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeDatastore.html",
      "description": "Describes the specified datastore.",
      "accessLevel": "Read",
      "resourceTypes": {
        "datastore": {
          "required": true
        }
      }
    },
    "DescribeLoggingOptions": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeLoggingOptions.html",
      "description": "Describes logging options for the the account.",
      "accessLevel": "Read"
    },
    "DescribePipeline": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribePipeline.html",
      "description": "Describes the specified pipeline.",
      "accessLevel": "Read",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    },
    "GetDatasetContent": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_GetDatasetContent.html",
      "description": "Gets the content of the specified dataset.",
      "accessLevel": "Read",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      }
    },
    "ListChannels": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListChannels.html",
      "description": "Lists the channels for the account.",
      "accessLevel": "List"
    },
    "ListDatasets": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListDatasets.html",
      "description": "Lists the datasets for the account.",
      "accessLevel": "List"
    },
    "ListDatastores": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListDatastores.html",
      "description": "Lists the datastores for the account.",
      "accessLevel": "List"
    },
    "ListPipelines": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListPipelines.html",
      "description": "Lists the pipelines for the account.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListTagsForResource.html",
      "description": "Lists the tags (metadata) which you have assigned to the resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "channel": {
          "required": false
        },
        "dataset": {
          "required": false
        },
        "datastore": {
          "required": false
        },
        "pipeline": {
          "required": false
        }
      }
    },
    "PutLoggingOptions": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_PutLoggingOptions.html",
      "description": "Puts logging options for the the account.",
      "accessLevel": "Write"
    },
    "RunPipelineActivity": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_RunPipelineActivity.html",
      "description": "Runs the specified pipeline activity.",
      "accessLevel": "Read"
    },
    "SampleChannelData": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_SampleChannelData.html",
      "description": "Samples the specified channel's data.",
      "accessLevel": "Read",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "StartPipelineReprocessing": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_StartPipelineReprocessing.html",
      "description": "Starts reprocessing for the specified pipeline.",
      "accessLevel": "Write",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_TagResource.html",
      "description": "Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "channel": {
          "required": false
        },
        "dataset": {
          "required": false
        },
        "datastore": {
          "required": false
        },
        "pipeline": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UntagResource.html",
      "description": "Removes the given tags (metadata) from the resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "channel": {
          "required": false
        },
        "dataset": {
          "required": false
        },
        "datastore": {
          "required": false
        },
        "pipeline": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateChannel": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdateChannel.html",
      "description": "Updates the specified channel.",
      "accessLevel": "Write",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "UpdateDataset": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdateDataset.html",
      "description": "Updates the specified dataset.",
      "accessLevel": "Write",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      }
    },
    "UpdateDatastore": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdateDatastore.html",
      "description": "Updates the specified datastore.",
      "accessLevel": "Write",
      "resourceTypes": {
        "datastore": {
          "required": true
        }
      }
    },
    "UpdatePipeline": {
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdatePipeline.html",
      "description": "Updates the specified pipeline.",
      "accessLevel": "Write",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "channel": {
      "name": "channel",
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how",
      "arn": "arn:${Partition}:iotanalytics:${Region}:${Account}:channel/${ChannelName}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "iotanalytics:ResourceTag/${TagKey}"
      ]
    },
    "dataset": {
      "name": "dataset",
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how",
      "arn": "arn:${Partition}:iotanalytics:${Region}:${Account}:dataset/${DatasetName}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "iotanalytics:ResourceTag/${TagKey}"
      ]
    },
    "datastore": {
      "name": "datastore",
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how",
      "arn": "arn:${Partition}:iotanalytics:${Region}:${Account}:datastore/${DatastoreName}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "iotanalytics:ResourceTag/${TagKey}"
      ]
    },
    "pipeline": {
      "name": "pipeline",
      "url": "https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how",
      "arn": "arn:${Partition}:iotanalytics:${Region}:${Account}:pipeline/${PipelineName}",
      "conditionKeys": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "iotanalytics:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [iotanalytics](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotanalytics.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Puts a batch of messages into the specified channel.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_BatchPutMessage.html
   */
  public toBatchPutMessage() {
    this.add('iotanalytics:BatchPutMessage');
    return this;
  }

  /**
   * Cancels reprocessing for the specified pipeline.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CancelPipelineReprocessing.html
   */
  public toCancelPipelineReprocessing() {
    this.add('iotanalytics:CancelPipelineReprocessing');
    return this;
  }

  /**
   * Creates a channel.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateChannel.html
   */
  public toCreateChannel() {
    this.add('iotanalytics:CreateChannel');
    return this;
  }

  /**
   * Creates a dataset.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateDataset.html
   */
  public toCreateDataset() {
    this.add('iotanalytics:CreateDataset');
    return this;
  }

  /**
   * Generates content of the specified dataset (by executing the dataset actions).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateDatasetContent.html
   */
  public toCreateDatasetContent() {
    this.add('iotanalytics:CreateDatasetContent');
    return this;
  }

  /**
   * Creates a datastore.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreateDatastore.html
   */
  public toCreateDatastore() {
    this.add('iotanalytics:CreateDatastore');
    return this;
  }

  /**
   * Creates a pipeline.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_CreatePipeline.html
   */
  public toCreatePipeline() {
    this.add('iotanalytics:CreatePipeline');
    return this;
  }

  /**
   * Deletes the specified channel.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteChannel.html
   */
  public toDeleteChannel() {
    this.add('iotanalytics:DeleteChannel');
    return this;
  }

  /**
   * Deletes the specified dataset.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteDataset.html
   */
  public toDeleteDataset() {
    this.add('iotanalytics:DeleteDataset');
    return this;
  }

  /**
   * Deletes the content of the specified dataset.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteDatasetContent.html
   */
  public toDeleteDatasetContent() {
    this.add('iotanalytics:DeleteDatasetContent');
    return this;
  }

  /**
   * Deletes the specified datastore.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeleteDatastore.html
   */
  public toDeleteDatastore() {
    this.add('iotanalytics:DeleteDatastore');
    return this;
  }

  /**
   * Deletes the specified pipeline.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeletePipeline.html
   */
  public toDeletePipeline() {
    this.add('iotanalytics:DeletePipeline');
    return this;
  }

  /**
   * Describes the specified channel.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeChannel.html
   */
  public toDescribeChannel() {
    this.add('iotanalytics:DescribeChannel');
    return this;
  }

  /**
   * Describes the specified dataset.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeDataset.html
   */
  public toDescribeDataset() {
    this.add('iotanalytics:DescribeDataset');
    return this;
  }

  /**
   * Describes the specified datastore.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeDatastore.html
   */
  public toDescribeDatastore() {
    this.add('iotanalytics:DescribeDatastore');
    return this;
  }

  /**
   * Describes logging options for the the account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribeLoggingOptions.html
   */
  public toDescribeLoggingOptions() {
    this.add('iotanalytics:DescribeLoggingOptions');
    return this;
  }

  /**
   * Describes the specified pipeline.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DescribePipeline.html
   */
  public toDescribePipeline() {
    this.add('iotanalytics:DescribePipeline');
    return this;
  }

  /**
   * Gets the content of the specified dataset.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_GetDatasetContent.html
   */
  public toGetDatasetContent() {
    this.add('iotanalytics:GetDatasetContent');
    return this;
  }

  /**
   * Lists the channels for the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListChannels.html
   */
  public toListChannels() {
    this.add('iotanalytics:ListChannels');
    return this;
  }

  /**
   * Lists the datasets for the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListDatasets.html
   */
  public toListDatasets() {
    this.add('iotanalytics:ListDatasets');
    return this;
  }

  /**
   * Lists the datastores for the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListDatastores.html
   */
  public toListDatastores() {
    this.add('iotanalytics:ListDatastores');
    return this;
  }

  /**
   * Lists the pipelines for the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListPipelines.html
   */
  public toListPipelines() {
    this.add('iotanalytics:ListPipelines');
    return this;
  }

  /**
   * Lists the tags (metadata) which you have assigned to the resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('iotanalytics:ListTagsForResource');
    return this;
  }

  /**
   * Puts logging options for the the account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_PutLoggingOptions.html
   */
  public toPutLoggingOptions() {
    this.add('iotanalytics:PutLoggingOptions');
    return this;
  }

  /**
   * Runs the specified pipeline activity.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_RunPipelineActivity.html
   */
  public toRunPipelineActivity() {
    this.add('iotanalytics:RunPipelineActivity');
    return this;
  }

  /**
   * Samples the specified channel's data.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_SampleChannelData.html
   */
  public toSampleChannelData() {
    this.add('iotanalytics:SampleChannelData');
    return this;
  }

  /**
   * Starts reprocessing for the specified pipeline.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_StartPipelineReprocessing.html
   */
  public toStartPipelineReprocessing() {
    this.add('iotanalytics:StartPipelineReprocessing');
    return this;
  }

  /**
   * Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.add('iotanalytics:TagResource');
    return this;
  }

  /**
   * Removes the given tags (metadata) from the resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('iotanalytics:UntagResource');
    return this;
  }

  /**
   * Updates the specified channel.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdateChannel.html
   */
  public toUpdateChannel() {
    this.add('iotanalytics:UpdateChannel');
    return this;
  }

  /**
   * Updates the specified dataset.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdateDataset.html
   */
  public toUpdateDataset() {
    this.add('iotanalytics:UpdateDataset');
    return this;
  }

  /**
   * Updates the specified datastore.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdateDatastore.html
   */
  public toUpdateDatastore() {
    this.add('iotanalytics:UpdateDatastore');
    return this;
  }

  /**
   * Updates the specified pipeline.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_UpdatePipeline.html
   */
  public toUpdatePipeline() {
    this.add('iotanalytics:UpdatePipeline');
    return this;
  }

  /**
   * Adds a resource of type channel to the statement
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how
   *
   * @param channelName - Identifier for the channelName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifResourceTag()
   */
  public onChannel(channelName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotanalytics:${Region}:${Account}:channel/${ChannelName}';
    arn = arn.replace('${ChannelName}', channelName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dataset to the statement
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how
   *
   * @param datasetName - Identifier for the datasetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifResourceTag()
   */
  public onDataset(datasetName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotanalytics:${Region}:${Account}:dataset/${DatasetName}';
    arn = arn.replace('${DatasetName}', datasetName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type datastore to the statement
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how
   *
   * @param datastoreName - Identifier for the datastoreName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifResourceTag()
   */
  public onDatastore(datastoreName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotanalytics:${Region}:${Account}:datastore/${DatastoreName}';
    arn = arn.replace('${DatastoreName}', datastoreName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type pipeline to the statement
   *
   * https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how
   *
   * @param pipelineName - Identifier for the pipelineName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifResourceTag()
   */
  public onPipeline(pipelineName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotanalytics:${Region}:${Account}:pipeline/${PipelineName}';
    arn = arn.replace('${PipelineName}', pipelineName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * The preface string for a tag key and value pair attached to an IoT Analytics resource.
   *
   * Applies to resource types:
   * - channel
   * - dataset
   * - datastore
   * - pipeline
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`iotanalytics:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}
