import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service qldb
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonqldb.html
 */
export class Qldb extends PolicyStatement {
  public servicePrefix = 'qldb';
  public actions: Actions = {
    "CancelJournalKinesisStream": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/API_CancelJournalKinesisStream.html",
      "description": "Grants permission to cancel a journal kinesis stream",
      "accessLevel": "Write",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "CreateLedger": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/API_CreateLedger.html",
      "description": "Grants permission to create a ledger",
      "accessLevel": "Write",
      "resourceTypes": {
        "ledger": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteLedger": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/API_DeleteLedger.html",
      "description": "Grants permission to delete a ledger",
      "accessLevel": "Write",
      "resourceTypes": {
        "ledger": {
          "required": true
        }
      }
    },
    "DescribeJournalKinesisStream": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeJournalKinesisStream.html",
      "description": "Grants permission to describe information about a journal kinesis stream",
      "accessLevel": "Read",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "DescribeJournalS3Export": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeJournalS3Export.html",
      "description": "Grants permission to describe information about a journal export job",
      "accessLevel": "Read",
      "resourceTypes": {
        "ledger": {
          "required": true
        }
      }
    },
    "DescribeLedger": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeLedger.html",
      "description": "Grants permission to describe a ledger",
      "accessLevel": "Read",
      "resourceTypes": {
        "ledger": {
          "required": true
        }
      }
    },
    "ExecuteStatement": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html",
      "description": "Grants permission to send commands to a ledger via the console",
      "accessLevel": "Write",
      "resourceTypes": {
        "ledger": {
          "required": true
        }
      }
    },
    "ExportJournalToS3": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/API_ExportJournalToS3.html",
      "description": "Grants permission to export journal contents to an Amazon S3 bucket",
      "accessLevel": "Write",
      "resourceTypes": {
        "ledger": {
          "required": true
        }
      }
    },
    "GetBlock": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetBlock.html",
      "description": "Grants permission to retrieve a block from a ledger for a given BlockAddress",
      "accessLevel": "Read",
      "resourceTypes": {
        "ledger": {
          "required": true
        }
      }
    },
    "GetDigest": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetDigest.html",
      "description": "Grants permission to retrieve a digest from a ledger for a given BlockAddress",
      "accessLevel": "Read",
      "resourceTypes": {
        "ledger": {
          "required": true
        }
      }
    },
    "GetRevision": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetRevision.html",
      "description": "Grants permission to retrieve a revision for a given document ID and a given BlockAddress",
      "accessLevel": "Read",
      "resourceTypes": {
        "ledger": {
          "required": true
        }
      }
    },
    "InsertSampleData": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html",
      "description": "Grants permission to insert sample application data via the console",
      "accessLevel": "Write",
      "resourceTypes": {
        "ledger": {
          "required": true
        }
      }
    },
    "ListJournalKinesisStreamsForLedger": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalKinesisStreamsForLedger.html",
      "description": "Grants permission to list journal kinesis streams for a specified ledger",
      "accessLevel": "List",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "ListJournalS3Exports": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalS3Exports.html",
      "description": "Grants permission to list journal export jobs for all ledgers",
      "accessLevel": "List"
    },
    "ListJournalS3ExportsForLedger": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalS3ExportsForLedger.html",
      "description": "Grants permission to list journal export jobs for a specified ledger",
      "accessLevel": "List",
      "resourceTypes": {
        "ledger": {
          "required": true
        }
      }
    },
    "ListLedgers": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListLedgers.html",
      "description": "Grants permission to list existing ledgers",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListTagsForResource.html",
      "description": "Grants permission to list tags for a resource",
      "accessLevel": "Read",
      "resourceTypes": {
        "ledger": {
          "required": false
        }
      }
    },
    "SendCommand": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/Using.API.html",
      "description": "Grants permission to send commands to a ledger",
      "accessLevel": "Write",
      "resourceTypes": {
        "ledger": {
          "required": true
        }
      }
    },
    "ShowCatalog": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html",
      "description": "Grants permission to view a ledger's catalog via the console",
      "accessLevel": "Write",
      "resourceTypes": {
        "ledger": {
          "required": true
        }
      }
    },
    "StreamJournalToKinesis": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/API_StreamJournalToKinesis.html",
      "description": "Grants permission to stream journal contents to a Kinesis Data Stream",
      "accessLevel": "Write",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/API_TagResource.html",
      "description": "Grants permission to add one or more tags to a resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "ledger": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/API_UntagResource.html",
      "description": "Grants permission to remove one or more tags to a resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "ledger": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateLedger": {
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/API_UpdateLedger.html",
      "description": "Grants permission to update properties on a ledger",
      "accessLevel": "Write",
      "resourceTypes": {
        "ledger": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "ledger": {
      "name": "ledger",
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/what-is.html",
      "arn": "arn:${Partition}:qldb:${Region}:${Account}:ledger/${LedgerName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "stream": {
      "name": "stream",
      "url": "https://docs.aws.amazon.com/qldb/latest/developerguide/what-is.html",
      "arn": "arn:${Partition}:qldb:${Region}:${Account}:stream/${LedgerName}/${StreamId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Grants permission to cancel a journal kinesis stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_CancelJournalKinesisStream.html
   */
  public cancelJournalKinesisStream() {
    this.add('qldb:CancelJournalKinesisStream');
    return this;
  }

  /**
   * Grants permission to create a ledger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_CreateLedger.html
   */
  public createLedger() {
    this.add('qldb:CreateLedger');
    return this;
  }

  /**
   * Grants permission to delete a ledger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_DeleteLedger.html
   */
  public deleteLedger() {
    this.add('qldb:DeleteLedger');
    return this;
  }

  /**
   * Grants permission to describe information about a journal kinesis stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeJournalKinesisStream.html
   */
  public describeJournalKinesisStream() {
    this.add('qldb:DescribeJournalKinesisStream');
    return this;
  }

  /**
   * Grants permission to describe information about a journal export job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeJournalS3Export.html
   */
  public describeJournalS3Export() {
    this.add('qldb:DescribeJournalS3Export');
    return this;
  }

  /**
   * Grants permission to describe a ledger
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeLedger.html
   */
  public describeLedger() {
    this.add('qldb:DescribeLedger');
    return this;
  }

  /**
   * Grants permission to send commands to a ledger via the console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html
   */
  public executeStatement() {
    this.add('qldb:ExecuteStatement');
    return this;
  }

  /**
   * Grants permission to export journal contents to an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_ExportJournalToS3.html
   */
  public exportJournalToS3() {
    this.add('qldb:ExportJournalToS3');
    return this;
  }

  /**
   * Grants permission to retrieve a block from a ledger for a given BlockAddress
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetBlock.html
   */
  public getBlock() {
    this.add('qldb:GetBlock');
    return this;
  }

  /**
   * Grants permission to retrieve a digest from a ledger for a given BlockAddress
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetDigest.html
   */
  public getDigest() {
    this.add('qldb:GetDigest');
    return this;
  }

  /**
   * Grants permission to retrieve a revision for a given document ID and a given BlockAddress
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetRevision.html
   */
  public getRevision() {
    this.add('qldb:GetRevision');
    return this;
  }

  /**
   * Grants permission to insert sample application data via the console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html
   */
  public insertSampleData() {
    this.add('qldb:InsertSampleData');
    return this;
  }

  /**
   * Grants permission to list journal kinesis streams for a specified ledger
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalKinesisStreamsForLedger.html
   */
  public listJournalKinesisStreamsForLedger() {
    this.add('qldb:ListJournalKinesisStreamsForLedger');
    return this;
  }

  /**
   * Grants permission to list journal export jobs for all ledgers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalS3Exports.html
   */
  public listJournalS3Exports() {
    this.add('qldb:ListJournalS3Exports');
    return this;
  }

  /**
   * Grants permission to list journal export jobs for a specified ledger
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalS3ExportsForLedger.html
   */
  public listJournalS3ExportsForLedger() {
    this.add('qldb:ListJournalS3ExportsForLedger');
    return this;
  }

  /**
   * Grants permission to list existing ledgers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListLedgers.html
   */
  public listLedgers() {
    this.add('qldb:ListLedgers');
    return this;
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('qldb:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to send commands to a ledger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/Using.API.html
   */
  public sendCommand() {
    this.add('qldb:SendCommand');
    return this;
  }

  /**
   * Grants permission to view a ledger's catalog via the console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html
   */
  public showCatalog() {
    this.add('qldb:ShowCatalog');
    return this;
  }

  /**
   * Grants permission to stream journal contents to a Kinesis Data Stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_StreamJournalToKinesis.html
   */
  public streamJournalToKinesis() {
    this.add('qldb:StreamJournalToKinesis');
    return this;
  }

  /**
   * Grants permission to add one or more tags to a resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_TagResource.html
   */
  public tagResource() {
    this.add('qldb:TagResource');
    return this;
  }

  /**
   * Grants permission to remove one or more tags to a resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_UntagResource.html
   */
  public untagResource() {
    this.add('qldb:UntagResource');
    return this;
  }

  /**
   * Grants permission to update properties on a ledger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_UpdateLedger.html
   */
  public updateLedger() {
    this.add('qldb:UpdateLedger');
    return this;
  }

  /**
   * Adds a resource of type ledger to the statement
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/what-is.html
   *
   * @param ledgerName - Identifier for the ledgerName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onLedger(ledgerName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:qldb:${Region}:${Account}:ledger/${LedgerName}';
    arn = arn.replace('${LedgerName}', ledgerName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type stream to the statement
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/what-is.html
   *
   * @param ledgerName - Identifier for the ledgerName.
   * @param streamId - Identifier for the streamId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onStream(ledgerName: string, streamId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:qldb:${Region}:${Account}:stream/${LedgerName}/${StreamId}';
    arn = arn.replace('${LedgerName}', ledgerName);
    arn = arn.replace('${StreamId}', streamId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
