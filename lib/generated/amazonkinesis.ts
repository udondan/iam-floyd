import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [kinesis](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesis.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Kinesis extends PolicyStatement {
  public servicePrefix = 'kinesis';
  protected actionList: Actions = {
    "AddTagsToStream": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_AddTagsToStream.html",
      "description": "Adds or updates tags for the specified Amazon Kinesis stream. Each stream can have up to 10 tags.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "CreateStream": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_CreateStream.html",
      "description": "Creates a Amazon Kinesis stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "DecreaseStreamRetentionPeriod": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DecreaseStreamRetentionPeriod.html",
      "description": "Decreases the stream's retention period, which is the length of time data records are accessible after they are added to the stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "DeleteStream": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DeleteStream.html",
      "description": "Deletes a stream and all its shards and data.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "DeregisterStreamConsumer": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DeregisterStreamConsumer.html",
      "description": "Deregisters a stream consumer with a Kinesis data stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "consumer": {
          "required": true
        },
        "stream": {
          "required": true
        }
      }
    },
    "DescribeLimits": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeLimits.html",
      "description": "Describes the shard limits and usage for the account.",
      "accessLevel": "Read"
    },
    "DescribeStream": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStream.html",
      "description": "Describes the specified stream.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "DescribeStreamConsumer": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStreamConsumer.html",
      "description": "Gets the description of a registered stream consumer.",
      "accessLevel": "Read",
      "resourceTypes": {
        "consumer": {
          "required": true
        },
        "stream": {
          "required": true
        }
      }
    },
    "DescribeStreamSummary": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStreamSummary.html",
      "description": "Provides a summarized description of the specified Kinesis data stream without the shard list.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "DisableEnhancedMonitoring": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DisableEnhancedMonitoring.html",
      "description": "Disables enhanced monitoring.",
      "accessLevel": "Write"
    },
    "EnableEnhancedMonitoring": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_EnableEnhancedMonitoring.html",
      "description": "API_EnableEnhancedMonitoring.html",
      "accessLevel": "Write"
    },
    "GetRecords": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html",
      "description": "Gets data records from a shard.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "GetShardIterator": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html",
      "description": "Gets a shard iterator. A shard iterator expires five minutes after it is returned to the requester.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "IncreaseStreamRetentionPeriod": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_IncreaseStreamRetentionPeriod.html",
      "description": "Increases the stream's retention period, which is the length of time data records are accessible after they are added to the stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "ListShards": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListShards.html",
      "description": "Lists the shards in a stream and provides information about each shard.",
      "accessLevel": "List"
    },
    "ListStreamConsumers": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListStreamConsumers.html",
      "description": "Lists the stream consumers registered to receive data from a Kinesis stream using enhanced fan-out, and provides information about each consumer.",
      "accessLevel": "List"
    },
    "ListStreams": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListStreams.html",
      "description": "Lists your streams.",
      "accessLevel": "List"
    },
    "ListTagsForStream": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListTagsForStream.html",
      "description": "Lists the tags for the specified Amazon Kinesis stream.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "MergeShards": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_MergeShards.html",
      "description": "Merges two adjacent shards in a stream and combines them into a single shard to reduce the stream's capacity to ingest and transport data.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "PutRecord": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecord.html",
      "description": "Writes a single data record from a producer into an Amazon Kinesis stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "PutRecords": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecords.html",
      "description": "Writes multiple data records from a producer into an Amazon Kinesis stream in a single call (also referred to as a PutRecords request).",
      "accessLevel": "Write",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "RegisterStreamConsumer": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_RegisterStreamConsumer.html",
      "description": "Registers a stream consumer with a Kinesis data stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "consumer": {
          "required": true
        },
        "stream": {
          "required": true
        }
      }
    },
    "RemoveTagsFromStream": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_RemoveTagsFromStream.html",
      "description": "Description for SplitShard",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "SplitShard": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_SplitShard.html",
      "description": "Description for SplitShard",
      "accessLevel": "Write",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "StartStreamEncryption": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_StartStreamEncryption.html",
      "description": "Grants permission to enable or update server-side encryption using an AWS KMS key for a specified stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "kmsKey": {
          "required": true
        },
        "stream": {
          "required": true
        }
      }
    },
    "StopStreamEncryption": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_StopStreamEncryption.html",
      "description": "Grants permission to disable server-side encryption for a specified stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "kmsKey": {
          "required": true
        },
        "stream": {
          "required": true
        }
      }
    },
    "SubscribeToShard": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_SubscribeToShard.html",
      "description": "Listening to a specific shard with enhanced fan-out.",
      "accessLevel": "Read",
      "resourceTypes": {
        "consumer": {
          "required": true
        },
        "stream": {
          "required": true
        }
      }
    },
    "UpdateShardCount": {
      "url": "https://docs.aws.amazon.com/kinesis/latest/APIReference/API_UpdateShardCount.html",
      "description": "Updates the shard count of the specified stream to the specified number of shards.",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {
    "stream": {
      "name": "stream",
      "url": "https://docs.aws.amazon.com/kinesis/latest/dev/amazon-kinesis-streams.html",
      "arn": "arn:${Partition}:kinesis:${Region}:${Account}:stream/${StreamName}",
      "conditionKeys": []
    },
    "consumer": {
      "name": "consumer",
      "url": "https://docs.aws.amazon.com/kinesis/latest/dev/amazon-kinesis-consumers.html",
      "arn": "arn:${Partition}:kinesis:${Region}:${Account}:${StreamType}/${StreamName}/consumer/${ConsumerName}:${ConsumerCreationTimpstamp}",
      "conditionKeys": []
    },
    "kmsKey": {
      "name": "kmsKey",
      "url": "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys",
      "arn": "arn:${Partition}:kms:${Region}:${Account}:key/${KeyId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [kinesis](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesis.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds or updates tags for the specified Amazon Kinesis stream. Each stream can have up to 10 tags.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_AddTagsToStream.html
   */
  public toAddTagsToStream() {
    this.add('kinesis:AddTagsToStream');
    return this;
  }

  /**
   * Creates a Amazon Kinesis stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_CreateStream.html
   */
  public toCreateStream() {
    this.add('kinesis:CreateStream');
    return this;
  }

  /**
   * Decreases the stream's retention period, which is the length of time data records are accessible after they are added to the stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DecreaseStreamRetentionPeriod.html
   */
  public toDecreaseStreamRetentionPeriod() {
    this.add('kinesis:DecreaseStreamRetentionPeriod');
    return this;
  }

  /**
   * Deletes a stream and all its shards and data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DeleteStream.html
   */
  public toDeleteStream() {
    this.add('kinesis:DeleteStream');
    return this;
  }

  /**
   * Deregisters a stream consumer with a Kinesis data stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DeregisterStreamConsumer.html
   */
  public toDeregisterStreamConsumer() {
    this.add('kinesis:DeregisterStreamConsumer');
    return this;
  }

  /**
   * Describes the shard limits and usage for the account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeLimits.html
   */
  public toDescribeLimits() {
    this.add('kinesis:DescribeLimits');
    return this;
  }

  /**
   * Describes the specified stream.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStream.html
   */
  public toDescribeStream() {
    this.add('kinesis:DescribeStream');
    return this;
  }

  /**
   * Gets the description of a registered stream consumer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStreamConsumer.html
   */
  public toDescribeStreamConsumer() {
    this.add('kinesis:DescribeStreamConsumer');
    return this;
  }

  /**
   * Provides a summarized description of the specified Kinesis data stream without the shard list.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStreamSummary.html
   */
  public toDescribeStreamSummary() {
    this.add('kinesis:DescribeStreamSummary');
    return this;
  }

  /**
   * Disables enhanced monitoring.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DisableEnhancedMonitoring.html
   */
  public toDisableEnhancedMonitoring() {
    this.add('kinesis:DisableEnhancedMonitoring');
    return this;
  }

  /**
   * API_EnableEnhancedMonitoring.html
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_EnableEnhancedMonitoring.html
   */
  public toEnableEnhancedMonitoring() {
    this.add('kinesis:EnableEnhancedMonitoring');
    return this;
  }

  /**
   * Gets data records from a shard.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html
   */
  public toGetRecords() {
    this.add('kinesis:GetRecords');
    return this;
  }

  /**
   * Gets a shard iterator. A shard iterator expires five minutes after it is returned to the requester.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html
   */
  public toGetShardIterator() {
    this.add('kinesis:GetShardIterator');
    return this;
  }

  /**
   * Increases the stream's retention period, which is the length of time data records are accessible after they are added to the stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_IncreaseStreamRetentionPeriod.html
   */
  public toIncreaseStreamRetentionPeriod() {
    this.add('kinesis:IncreaseStreamRetentionPeriod');
    return this;
  }

  /**
   * Lists the shards in a stream and provides information about each shard.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListShards.html
   */
  public toListShards() {
    this.add('kinesis:ListShards');
    return this;
  }

  /**
   * Lists the stream consumers registered to receive data from a Kinesis stream using enhanced fan-out, and provides information about each consumer.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListStreamConsumers.html
   */
  public toListStreamConsumers() {
    this.add('kinesis:ListStreamConsumers');
    return this;
  }

  /**
   * Lists your streams.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListStreams.html
   */
  public toListStreams() {
    this.add('kinesis:ListStreams');
    return this;
  }

  /**
   * Lists the tags for the specified Amazon Kinesis stream.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListTagsForStream.html
   */
  public toListTagsForStream() {
    this.add('kinesis:ListTagsForStream');
    return this;
  }

  /**
   * Merges two adjacent shards in a stream and combines them into a single shard to reduce the stream's capacity to ingest and transport data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_MergeShards.html
   */
  public toMergeShards() {
    this.add('kinesis:MergeShards');
    return this;
  }

  /**
   * Writes a single data record from a producer into an Amazon Kinesis stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecord.html
   */
  public toPutRecord() {
    this.add('kinesis:PutRecord');
    return this;
  }

  /**
   * Writes multiple data records from a producer into an Amazon Kinesis stream in a single call (also referred to as a PutRecords request).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecords.html
   */
  public toPutRecords() {
    this.add('kinesis:PutRecords');
    return this;
  }

  /**
   * Registers a stream consumer with a Kinesis data stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_RegisterStreamConsumer.html
   */
  public toRegisterStreamConsumer() {
    this.add('kinesis:RegisterStreamConsumer');
    return this;
  }

  /**
   * Description for SplitShard
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_RemoveTagsFromStream.html
   */
  public toRemoveTagsFromStream() {
    this.add('kinesis:RemoveTagsFromStream');
    return this;
  }

  /**
   * Description for SplitShard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_SplitShard.html
   */
  public toSplitShard() {
    this.add('kinesis:SplitShard');
    return this;
  }

  /**
   * Grants permission to enable or update server-side encryption using an AWS KMS key for a specified stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_StartStreamEncryption.html
   */
  public toStartStreamEncryption() {
    this.add('kinesis:StartStreamEncryption');
    return this;
  }

  /**
   * Grants permission to disable server-side encryption for a specified stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_StopStreamEncryption.html
   */
  public toStopStreamEncryption() {
    this.add('kinesis:StopStreamEncryption');
    return this;
  }

  /**
   * Listening to a specific shard with enhanced fan-out.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_SubscribeToShard.html
   */
  public toSubscribeToShard() {
    this.add('kinesis:SubscribeToShard');
    return this;
  }

  /**
   * Updates the shard count of the specified stream to the specified number of shards.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kinesis/latest/APIReference/API_UpdateShardCount.html
   */
  public toUpdateShardCount() {
    this.add('kinesis:UpdateShardCount');
    return this;
  }

  /**
   * Adds a resource of type stream to the statement
   *
   * https://docs.aws.amazon.com/kinesis/latest/dev/amazon-kinesis-streams.html
   *
   * @param streamName - Identifier for the streamName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onStream(streamName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kinesis:${Region}:${Account}:stream/${StreamName}';
    arn = arn.replace('${StreamName}', streamName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type consumer to the statement
   *
   * https://docs.aws.amazon.com/kinesis/latest/dev/amazon-kinesis-consumers.html
   *
   * @param streamType - Identifier for the streamType.
   * @param streamName - Identifier for the streamName.
   * @param consumerName - Identifier for the consumerName.
   * @param consumerCreationTimpstamp - Identifier for the consumerCreationTimpstamp.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onConsumer(streamType: string, streamName: string, consumerName: string, consumerCreationTimpstamp: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kinesis:${Region}:${Account}:${StreamType}/${StreamName}/consumer/${ConsumerName}:${ConsumerCreationTimpstamp}';
    arn = arn.replace('${StreamType}', streamType);
    arn = arn.replace('${StreamName}', streamName);
    arn = arn.replace('${ConsumerName}', consumerName);
    arn = arn.replace('${ConsumerCreationTimpstamp}', consumerCreationTimpstamp);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type kmsKey to the statement
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys
   *
   * @param keyId - Identifier for the keyId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onKmsKey(keyId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kms:${Region}:${Account}:key/${KeyId}';
    arn = arn.replace('${KeyId}', keyId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
