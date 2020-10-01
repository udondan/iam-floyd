import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [kendra](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkendra.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Kendra extends PolicyStatement {
  public servicePrefix = 'kendra';
  protected actionList: Actions = {
    "BatchDeleteDocument": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html",
      "description": "Batch Delete document",
      "accessLevel": "Write",
      "resourceTypes": {
        "index": {
          "required": true
        }
      }
    },
    "BatchPutDocument": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html",
      "description": "Batch put document",
      "accessLevel": "Write",
      "resourceTypes": {
        "index": {
          "required": true
        }
      }
    },
    "CreateDataSource": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_CreateDataSource.html",
      "description": "Create a data source",
      "accessLevel": "Write",
      "resourceTypes": {
        "index": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateFaq": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_CreateFaq.html",
      "description": "Create an Faq",
      "accessLevel": "Write",
      "resourceTypes": {
        "index": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateIndex": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_CreateIndex.html",
      "description": "Create an Index",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteDataSource": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteDataSource.html",
      "description": "Delete a data source",
      "accessLevel": "Write",
      "resourceTypes": {
        "data-source": {
          "required": true
        },
        "index": {
          "required": true
        }
      }
    },
    "DeleteFaq": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteFaq.html",
      "description": "Delete an Faq",
      "accessLevel": "Write",
      "resourceTypes": {
        "faq": {
          "required": true
        },
        "index": {
          "required": true
        }
      }
    },
    "DeleteIndex": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteIndex.html",
      "description": "Delete an Index",
      "accessLevel": "Write",
      "resourceTypes": {
        "index": {
          "required": true
        }
      }
    },
    "DescribeDataSource": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeDataSource.html",
      "description": "Describe a data source",
      "accessLevel": "Read",
      "resourceTypes": {
        "data-source": {
          "required": true
        },
        "index": {
          "required": true
        }
      }
    },
    "DescribeFaq": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeFaq.html",
      "description": "Describe an Faq",
      "accessLevel": "Read",
      "resourceTypes": {
        "faq": {
          "required": true
        },
        "index": {
          "required": true
        }
      }
    },
    "DescribeIndex": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeIndex.html",
      "description": "Describe an Index",
      "accessLevel": "Read",
      "resourceTypes": {
        "index": {
          "required": true
        }
      }
    },
    "ListDataSourceSyncJobs": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSourceSyncJobs.html",
      "description": "Get Data Source sync job history",
      "accessLevel": "List",
      "resourceTypes": {
        "data-source": {
          "required": true
        },
        "index": {
          "required": true
        }
      }
    },
    "ListDataSources": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSources.html",
      "description": "List the data sources",
      "accessLevel": "List",
      "resourceTypes": {
        "index": {
          "required": true
        }
      }
    },
    "ListFaqs": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_ListFaqs.html",
      "description": "List the Faqs",
      "accessLevel": "List",
      "resourceTypes": {
        "index": {
          "required": true
        }
      }
    },
    "ListIndices": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_ListIndices.html",
      "description": "List the indexes",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_ListTagsForResource.html",
      "description": "Lists tags for a resource",
      "accessLevel": "List",
      "resourceTypes": {
        "data-source": {
          "required": false
        },
        "faq": {
          "required": false
        },
        "index": {
          "required": false
        }
      }
    },
    "Query": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_Query.html",
      "description": "Query documents and Faqs",
      "accessLevel": "Read",
      "resourceTypes": {
        "index": {
          "required": true
        }
      }
    },
    "StartDataSourceSyncJob": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_StartDataSourceSyncJob.html",
      "description": "Start Data Source sync job",
      "accessLevel": "Write",
      "resourceTypes": {
        "data-source": {
          "required": true
        },
        "index": {
          "required": true
        }
      }
    },
    "StopDataSourceSyncJob": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_StopDataSourceSyncJob.html",
      "description": "Stop Data Source sync job",
      "accessLevel": "Write",
      "resourceTypes": {
        "data-source": {
          "required": true
        },
        "index": {
          "required": true
        }
      }
    },
    "SubmitFeedback": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_SubmitFeedback.html",
      "description": "Send feedback about a query results",
      "accessLevel": "Write",
      "resourceTypes": {
        "index": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_TagResource.html",
      "description": "Tags a resource with given key value pairs",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "data-source": {
          "required": false
        },
        "faq": {
          "required": false
        },
        "index": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_UntagResource.html",
      "description": "Removes the tag with the given key from a resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "data-source": {
          "required": false
        },
        "faq": {
          "required": false
        },
        "index": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateDataSource": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateDataSource.html",
      "description": "Update a data source",
      "accessLevel": "Write",
      "resourceTypes": {
        "data-source": {
          "required": true
        },
        "index": {
          "required": true
        }
      }
    },
    "UpdateIndex": {
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html",
      "description": "Update an Index",
      "accessLevel": "Write",
      "resourceTypes": {
        "index": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "index": {
      "name": "index",
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/index.html",
      "arn": "arn:${Partition}:kendra:${Region}:${Account}:index/${IndexId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "data-source": {
      "name": "data-source",
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/data-source.html",
      "arn": "arn:${Partition}:kendra:${Region}:${Account}:index/${IndexId}/data-source/${DataSourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "faq": {
      "name": "faq",
      "url": "https://docs.aws.amazon.com/kendra/latest/dg/faq.html",
      "arn": "arn:${Partition}:kendra:${Region}:${Account}:index/${IndexId}/faq/${FaqId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [kendra](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkendra.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Batch Delete document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html
   */
  public toBatchDeleteDocument() {
    this.to('kendra:BatchDeleteDocument');
    return this;
  }

  /**
   * Batch put document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html
   */
  public toBatchPutDocument() {
    this.to('kendra:BatchPutDocument');
    return this;
  }

  /**
   * Create a data source
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_CreateDataSource.html
   */
  public toCreateDataSource() {
    this.to('kendra:CreateDataSource');
    return this;
  }

  /**
   * Create an Faq
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_CreateFaq.html
   */
  public toCreateFaq() {
    this.to('kendra:CreateFaq');
    return this;
  }

  /**
   * Create an Index
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_CreateIndex.html
   */
  public toCreateIndex() {
    this.to('kendra:CreateIndex');
    return this;
  }

  /**
   * Delete a data source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteDataSource.html
   */
  public toDeleteDataSource() {
    this.to('kendra:DeleteDataSource');
    return this;
  }

  /**
   * Delete an Faq
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteFaq.html
   */
  public toDeleteFaq() {
    this.to('kendra:DeleteFaq');
    return this;
  }

  /**
   * Delete an Index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DeleteIndex.html
   */
  public toDeleteIndex() {
    this.to('kendra:DeleteIndex');
    return this;
  }

  /**
   * Describe a data source
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeDataSource.html
   */
  public toDescribeDataSource() {
    this.to('kendra:DescribeDataSource');
    return this;
  }

  /**
   * Describe an Faq
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeFaq.html
   */
  public toDescribeFaq() {
    this.to('kendra:DescribeFaq');
    return this;
  }

  /**
   * Describe an Index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_DescribeIndex.html
   */
  public toDescribeIndex() {
    this.to('kendra:DescribeIndex');
    return this;
  }

  /**
   * Get Data Source sync job history
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSourceSyncJobs.html
   */
  public toListDataSourceSyncJobs() {
    this.to('kendra:ListDataSourceSyncJobs');
    return this;
  }

  /**
   * List the data sources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListDataSources.html
   */
  public toListDataSources() {
    this.to('kendra:ListDataSources');
    return this;
  }

  /**
   * List the Faqs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListFaqs.html
   */
  public toListFaqs() {
    this.to('kendra:ListFaqs');
    return this;
  }

  /**
   * List the indexes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListIndices.html
   */
  public toListIndices() {
    this.to('kendra:ListIndices');
    return this;
  }

  /**
   * Lists tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('kendra:ListTagsForResource');
    return this;
  }

  /**
   * Query documents and Faqs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_Query.html
   */
  public toQuery() {
    this.to('kendra:Query');
    return this;
  }

  /**
   * Start Data Source sync job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_StartDataSourceSyncJob.html
   */
  public toStartDataSourceSyncJob() {
    this.to('kendra:StartDataSourceSyncJob');
    return this;
  }

  /**
   * Stop Data Source sync job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_StopDataSourceSyncJob.html
   */
  public toStopDataSourceSyncJob() {
    this.to('kendra:StopDataSourceSyncJob');
    return this;
  }

  /**
   * Send feedback about a query results
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_SubmitFeedback.html
   */
  public toSubmitFeedback() {
    this.to('kendra:SubmitFeedback');
    return this;
  }

  /**
   * Tags a resource with given key value pairs
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_TagResource.html
   */
  public toTagResource() {
    this.to('kendra:TagResource');
    return this;
  }

  /**
   * Removes the tag with the given key from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('kendra:UntagResource');
    return this;
  }

  /**
   * Update a data source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateDataSource.html
   */
  public toUpdateDataSource() {
    this.to('kendra:UpdateDataSource');
    return this;
  }

  /**
   * Update an Index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html
   */
  public toUpdateIndex() {
    this.to('kendra:UpdateIndex');
    return this;
  }

  /**
   * Adds a resource of type index to the statement
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/index.html
   *
   * @param indexId - Identifier for the indexId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIndex(indexId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kendra:${Region}:${Account}:index/${IndexId}';
    arn = arn.replace('${IndexId}', indexId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type data-source to the statement
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/data-source.html
   *
   * @param indexId - Identifier for the indexId.
   * @param dataSourceId - Identifier for the dataSourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataSource(indexId: string, dataSourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kendra:${Region}:${Account}:index/${IndexId}/data-source/${DataSourceId}';
    arn = arn.replace('${IndexId}', indexId);
    arn = arn.replace('${DataSourceId}', dataSourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type faq to the statement
   *
   * https://docs.aws.amazon.com/kendra/latest/dg/faq.html
   *
   * @param indexId - Identifier for the indexId.
   * @param faqId - Identifier for the faqId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFaq(indexId: string, faqId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kendra:${Region}:${Account}:index/${IndexId}/faq/${FaqId}';
    arn = arn.replace('${IndexId}', indexId);
    arn = arn.replace('${FaqId}', faqId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
