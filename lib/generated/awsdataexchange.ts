import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [dataexchange](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdataexchange.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Dataexchange extends PolicyStatement {
  public servicePrefix = 'dataexchange';
  protected actionList: Actions = {
    "CancelJob": {
      "url": "",
      "description": "Grants permissions to cancel a job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "jobs": {
          "required": true
        }
      }
    },
    "CreateAsset": {
      "url": "",
      "description": "Grants permission to create an asset (for example, in a Job).",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDataSet": {
      "url": "",
      "description": "Grants permission to create a data set.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateJob": {
      "url": "",
      "description": "Grants permissions to create a job to import or export assets.",
      "accessLevel": "Write",
      "resourceTypes": {
        "jobs": {
          "required": true
        }
      }
    },
    "CreateRevision": {
      "url": "",
      "description": "Grants permission to create a revision.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteAsset": {
      "url": "",
      "description": "Grants permissions to delete an asset.",
      "accessLevel": "Write",
      "resourceTypes": {
        "assets": {
          "required": true
        }
      }
    },
    "DeleteDataSet": {
      "url": "",
      "description": "Grants permissions to delete a data set.",
      "accessLevel": "Write",
      "resourceTypes": {
        "data-sets": {
          "required": true
        }
      }
    },
    "DeleteRevision": {
      "url": "",
      "description": "Grants permissions to delete a revision.",
      "accessLevel": "Write",
      "resourceTypes": {
        "revisions": {
          "required": true
        }
      }
    },
    "GetAsset": {
      "url": "",
      "description": "Grants permissions to get information about an asset and to export it (for example, in a Job).",
      "accessLevel": "Read",
      "resourceTypes": {
        "assets": {
          "required": true
        }
      }
    },
    "GetDataSet": {
      "url": "",
      "description": "Grants permission to get information about a data set.",
      "accessLevel": "Read",
      "resourceTypes": {
        "data-sets": {
          "required": true
        }
      }
    },
    "GetJob": {
      "url": "",
      "description": "Grants permissions to get information about a job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "jobs": {
          "required": true
        }
      }
    },
    "GetRevision": {
      "url": "",
      "description": "Grants permission to get information about a revision.",
      "accessLevel": "Read",
      "resourceTypes": {
        "revisions": {
          "required": true
        }
      }
    },
    "ListDataSetRevisions": {
      "url": "",
      "description": "Grants permissions to list the revisions of a data set.",
      "accessLevel": "List",
      "resourceTypes": {
        "revisions": {
          "required": true
        }
      }
    },
    "ListDataSets": {
      "url": "",
      "description": "Grants permission to list data sets for the account.",
      "accessLevel": "List",
      "resourceTypes": {
        "data-sets": {
          "required": true
        }
      }
    },
    "ListJobs": {
      "url": "",
      "description": "Grants permissions to list jobs for the account.",
      "accessLevel": "List",
      "resourceTypes": {
        "jobs": {
          "required": true
        }
      }
    },
    "ListRevisionAssets": {
      "url": "",
      "description": "Grants permissions to get list the assets of a revision.",
      "accessLevel": "List",
      "resourceTypes": {
        "assets": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "",
      "description": "Grants permission to list the tags that you associated with the specified resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "data-sets": {
          "required": false
        },
        "revisions": {
          "required": false
        }
      }
    },
    "StartJob": {
      "url": "",
      "description": "Grants permissions to start a job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "jobs": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "",
      "description": "Grants permission to add one or more tags to a specified resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "data-sets": {
          "required": false
        },
        "revisions": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "",
      "description": "Grants permission to remove one or more tags from a specified resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "data-sets": {
          "required": false
        },
        "revisions": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateAsset": {
      "url": "",
      "description": "Grants permissions to get update information about an asset.",
      "accessLevel": "Write",
      "resourceTypes": {
        "assets": {
          "required": true
        }
      }
    },
    "UpdateDataSet": {
      "url": "",
      "description": "Grants permissions to update information about a data set.",
      "accessLevel": "Write",
      "resourceTypes": {
        "data-sets": {
          "required": true
        }
      }
    },
    "UpdateRevision": {
      "url": "",
      "description": "Grants permissions to update information about a revision.",
      "accessLevel": "Write",
      "resourceTypes": {
        "revisions": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "jobs": {
      "name": "jobs",
      "url": "https://docs.aws.amazon.com/data-exchange/latest/userguide/jobs.html",
      "arn": "arn:${Partition}:dataexchange:${Region}:${Account}:jobs/${JobId}",
      "conditionKeys": [
        "dataexchange:JobType"
      ]
    },
    "data-sets": {
      "name": "data-sets",
      "url": "https://docs.aws.amazon.com/data-exchange/latest/userguide/data-sets.html",
      "arn": "arn:${Partition}:dataexchange:${Region}:${Account}:data-sets/${DataSetId}",
      "conditionKeys": []
    },
    "revisions": {
      "name": "revisions",
      "url": "https://docs.aws.amazon.com/data-exchange/latest/userguide/data-sets.html#revisions",
      "arn": "arn:${Partition}:dataexchange:${Region}:${Account}:data-sets/${DataSetId}/revisions/${RevisionId}",
      "conditionKeys": []
    },
    "assets": {
      "name": "assets",
      "url": "https://docs.aws.amazon.com/data-exchange/latest/userguide/data-sets.html#assets",
      "arn": "arn:${Partition}:dataexchange:${Region}:${Account}:data-sets/${DataSetId}/revisions/${RevisionId}/assets/${AssetId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [dataexchange](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdataexchange.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permissions to cancel a job.
   *
   * Access Level: Write
   */
  public cancelJob() {
    this.add('dataexchange:CancelJob');
    return this;
  }

  /**
   * Grants permission to create an asset (for example, in a Job).
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:ResourceTag/${TagKey}
   * - aws:TagKeys
   */
  public createAsset() {
    this.add('dataexchange:CreateAsset');
    return this;
  }

  /**
   * Grants permission to create a data set.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:ResourceTag/${TagKey}
   * - aws:TagKeys
   */
  public createDataSet() {
    this.add('dataexchange:CreateDataSet');
    return this;
  }

  /**
   * Grants permissions to create a job to import or export assets.
   *
   * Access Level: Write
   */
  public createJob() {
    this.add('dataexchange:CreateJob');
    return this;
  }

  /**
   * Grants permission to create a revision.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:ResourceTag/${TagKey}
   * - aws:TagKeys
   */
  public createRevision() {
    this.add('dataexchange:CreateRevision');
    return this;
  }

  /**
   * Grants permissions to delete an asset.
   *
   * Access Level: Write
   */
  public deleteAsset() {
    this.add('dataexchange:DeleteAsset');
    return this;
  }

  /**
   * Grants permissions to delete a data set.
   *
   * Access Level: Write
   */
  public deleteDataSet() {
    this.add('dataexchange:DeleteDataSet');
    return this;
  }

  /**
   * Grants permissions to delete a revision.
   *
   * Access Level: Write
   */
  public deleteRevision() {
    this.add('dataexchange:DeleteRevision');
    return this;
  }

  /**
   * Grants permissions to get information about an asset and to export it (for example, in a Job).
   *
   * Access Level: Read
   */
  public getAsset() {
    this.add('dataexchange:GetAsset');
    return this;
  }

  /**
   * Grants permission to get information about a data set.
   *
   * Access Level: Read
   */
  public getDataSet() {
    this.add('dataexchange:GetDataSet');
    return this;
  }

  /**
   * Grants permissions to get information about a job.
   *
   * Access Level: Write
   */
  public getJob() {
    this.add('dataexchange:GetJob');
    return this;
  }

  /**
   * Grants permission to get information about a revision.
   *
   * Access Level: Read
   */
  public getRevision() {
    this.add('dataexchange:GetRevision');
    return this;
  }

  /**
   * Grants permissions to list the revisions of a data set.
   *
   * Access Level: List
   */
  public listDataSetRevisions() {
    this.add('dataexchange:ListDataSetRevisions');
    return this;
  }

  /**
   * Grants permission to list data sets for the account.
   *
   * Access Level: List
   */
  public listDataSets() {
    this.add('dataexchange:ListDataSets');
    return this;
  }

  /**
   * Grants permissions to list jobs for the account.
   *
   * Access Level: List
   */
  public listJobs() {
    this.add('dataexchange:ListJobs');
    return this;
  }

  /**
   * Grants permissions to get list the assets of a revision.
   *
   * Access Level: List
   */
  public listRevisionAssets() {
    this.add('dataexchange:ListRevisionAssets');
    return this;
  }

  /**
   * Grants permission to list the tags that you associated with the specified resource.
   *
   * Access Level: Read
   */
  public listTagsForResource() {
    this.add('dataexchange:ListTagsForResource');
    return this;
  }

  /**
   * Grants permissions to start a job.
   *
   * Access Level: Write
   */
  public startJob() {
    this.add('dataexchange:StartJob');
    return this;
  }

  /**
   * Grants permission to add one or more tags to a specified resource.
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   */
  public tagResource() {
    this.add('dataexchange:TagResource');
    return this;
  }

  /**
   * Grants permission to remove one or more tags from a specified resource.
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:TagKeys
   */
  public untagResource() {
    this.add('dataexchange:UntagResource');
    return this;
  }

  /**
   * Grants permissions to get update information about an asset.
   *
   * Access Level: Write
   */
  public updateAsset() {
    this.add('dataexchange:UpdateAsset');
    return this;
  }

  /**
   * Grants permissions to update information about a data set.
   *
   * Access Level: Write
   */
  public updateDataSet() {
    this.add('dataexchange:UpdateDataSet');
    return this;
  }

  /**
   * Grants permissions to update information about a revision.
   *
   * Access Level: Write
   */
  public updateRevision() {
    this.add('dataexchange:UpdateRevision');
    return this;
  }

  /**
   * Adds a resource of type jobs to the statement
   *
   * https://docs.aws.amazon.com/data-exchange/latest/userguide/jobs.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - dataexchange:JobType
   */
  public onJobs(jobId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dataexchange:${Region}:${Account}:jobs/${JobId}';
    arn = arn.replace('${JobId}', jobId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type data-sets to the statement
   *
   * https://docs.aws.amazon.com/data-exchange/latest/userguide/data-sets.html
   *
   * @param dataSetId - Identifier for the dataSetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDataSets(dataSetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dataexchange:${Region}:${Account}:data-sets/${DataSetId}';
    arn = arn.replace('${DataSetId}', dataSetId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type revisions to the statement
   *
   * https://docs.aws.amazon.com/data-exchange/latest/userguide/data-sets.html#revisions
   *
   * @param dataSetId - Identifier for the dataSetId.
   * @param revisionId - Identifier for the revisionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRevisions(dataSetId: string, revisionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dataexchange:${Region}:${Account}:data-sets/${DataSetId}/revisions/${RevisionId}';
    arn = arn.replace('${DataSetId}', dataSetId);
    arn = arn.replace('${RevisionId}', revisionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type assets to the statement
   *
   * https://docs.aws.amazon.com/data-exchange/latest/userguide/data-sets.html#assets
   *
   * @param dataSetId - Identifier for the dataSetId.
   * @param revisionId - Identifier for the revisionId.
   * @param assetId - Identifier for the assetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAssets(dataSetId: string, revisionId: string, assetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:dataexchange:${Region}:${Account}:data-sets/${DataSetId}/revisions/${RevisionId}/assets/${AssetId}';
    arn = arn.replace('${DataSetId}', dataSetId);
    arn = arn.replace('${RevisionId}', revisionId);
    arn = arn.replace('${AssetId}', assetId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Indicates that the action can only be performed on the specified job type.
   *
   * https://docs.aws.amazon.com/data-exchange/latest/userguide/access-control.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifJobType(value: string | string[], operator?: string) {
    return this.if(`dataexchange:JobType`, value, operator || 'StringLike');
  }
}
