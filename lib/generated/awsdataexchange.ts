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
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#CancelJob",
      "description": "Grants permissions to cancel a job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "jobs": {
          "required": true
        }
      }
    },
    "CreateAsset": {
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions.html#CreateAsset",
      "description": "Grants permission to create an asset (for example, in a Job).",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDataSet": {
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets.html#CreateDataSet",
      "description": "Grants permission to create a data set.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateJob": {
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#CreateJob",
      "description": "Grants permissions to create a job to import or export assets.",
      "accessLevel": "Write",
      "resourceTypes": {
        "jobs": {
          "required": true
        }
      }
    },
    "CreateRevision": {
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions.html#CreateRevision",
      "description": "Grants permission to create a revision.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteAsset": {
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid-assets-assetid.html#DeleteAsset",
      "description": "Grants permissions to delete an asset.",
      "accessLevel": "Write",
      "resourceTypes": {
        "assets": {
          "required": true
        }
      }
    },
    "DeleteDataSet": {
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid.html#DeleteDataSet",
      "description": "Grants permissions to delete a data set.",
      "accessLevel": "Write",
      "resourceTypes": {
        "data-sets": {
          "required": true
        }
      }
    },
    "DeleteRevision": {
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid.html#DeleteRevision",
      "description": "Grants permissions to delete a revision.",
      "accessLevel": "Write",
      "resourceTypes": {
        "revisions": {
          "required": true
        }
      }
    },
    "GetAsset": {
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid-assets-assetid.html#GetAsset",
      "description": "Grants permissions to get information about an asset and to export it (for example, in a Job).",
      "accessLevel": "Read",
      "resourceTypes": {
        "assets": {
          "required": true
        }
      }
    },
    "GetDataSet": {
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid.html#GetDataSet",
      "description": "Grants permission to get information about a data set.",
      "accessLevel": "Read",
      "resourceTypes": {
        "data-sets": {
          "required": true
        }
      }
    },
    "GetJob": {
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#GetJob",
      "description": "Grants permissions to get information about a job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "jobs": {
          "required": true
        }
      }
    },
    "GetRevision": {
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid.html#GetRevision",
      "description": "Grants permission to get information about a revision.",
      "accessLevel": "Read",
      "resourceTypes": {
        "revisions": {
          "required": true
        }
      }
    },
    "ListDataSetRevisions": {
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions.html#ListDataSetRevisions",
      "description": "Grants permissions to list the revisions of a data set.",
      "accessLevel": "List",
      "resourceTypes": {
        "revisions": {
          "required": true
        }
      }
    },
    "ListDataSets": {
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets.html#ListDataSets",
      "description": "Grants permission to list data sets for the account.",
      "accessLevel": "List",
      "resourceTypes": {
        "data-sets": {
          "required": true
        }
      }
    },
    "ListJobs": {
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#ListJobs",
      "description": "Grants permissions to list jobs for the account.",
      "accessLevel": "List",
      "resourceTypes": {
        "jobs": {
          "required": true
        }
      }
    },
    "ListRevisionAssets": {
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid-assets.html#ListRevisionAssets",
      "description": "Grants permissions to get list the assets of a revision.",
      "accessLevel": "List",
      "resourceTypes": {
        "assets": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/tags-resource-arn.html#ListTagsForResource",
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
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#StartJob",
      "description": "Grants permissions to start a job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "jobs": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/tags-resource-arn.html#TagResource",
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
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/tags-resource-arn.html#UntagResource",
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
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid-assets-assetid.html#UpdateAsset",
      "description": "Grants permissions to get update information about an asset.",
      "accessLevel": "Write",
      "resourceTypes": {
        "assets": {
          "required": true
        }
      }
    },
    "UpdateDataSet": {
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid.html#UpdateDataSet",
      "description": "Grants permissions to update information about a data set.",
      "accessLevel": "Write",
      "resourceTypes": {
        "data-sets": {
          "required": true
        }
      }
    },
    "UpdateRevision": {
      "url": "https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid.html#UpdateRevision",
      "description": "Grants permissions to update information about a revision.",
      "accessLevel": "Write",
      "resourceTypes": {
        "revisions": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
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
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#CancelJob
   */
  public toCancelJob() {
    this.add('dataexchange:CancelJob');
    return this;
  }

  /**
   * Grants permission to create an asset (for example, in a Job).
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions.html#CreateAsset
   */
  public toCreateAsset() {
    this.add('dataexchange:CreateAsset');
    return this;
  }

  /**
   * Grants permission to create a data set.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets.html#CreateDataSet
   */
  public toCreateDataSet() {
    this.add('dataexchange:CreateDataSet');
    return this;
  }

  /**
   * Grants permissions to create a job to import or export assets.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#CreateJob
   */
  public toCreateJob() {
    this.add('dataexchange:CreateJob');
    return this;
  }

  /**
   * Grants permission to create a revision.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions.html#CreateRevision
   */
  public toCreateRevision() {
    this.add('dataexchange:CreateRevision');
    return this;
  }

  /**
   * Grants permissions to delete an asset.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid-assets-assetid.html#DeleteAsset
   */
  public toDeleteAsset() {
    this.add('dataexchange:DeleteAsset');
    return this;
  }

  /**
   * Grants permissions to delete a data set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid.html#DeleteDataSet
   */
  public toDeleteDataSet() {
    this.add('dataexchange:DeleteDataSet');
    return this;
  }

  /**
   * Grants permissions to delete a revision.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid.html#DeleteRevision
   */
  public toDeleteRevision() {
    this.add('dataexchange:DeleteRevision');
    return this;
  }

  /**
   * Grants permissions to get information about an asset and to export it (for example, in a Job).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid-assets-assetid.html#GetAsset
   */
  public toGetAsset() {
    this.add('dataexchange:GetAsset');
    return this;
  }

  /**
   * Grants permission to get information about a data set.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid.html#GetDataSet
   */
  public toGetDataSet() {
    this.add('dataexchange:GetDataSet');
    return this;
  }

  /**
   * Grants permissions to get information about a job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#GetJob
   */
  public toGetJob() {
    this.add('dataexchange:GetJob');
    return this;
  }

  /**
   * Grants permission to get information about a revision.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid.html#GetRevision
   */
  public toGetRevision() {
    this.add('dataexchange:GetRevision');
    return this;
  }

  /**
   * Grants permissions to list the revisions of a data set.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions.html#ListDataSetRevisions
   */
  public toListDataSetRevisions() {
    this.add('dataexchange:ListDataSetRevisions');
    return this;
  }

  /**
   * Grants permission to list data sets for the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets.html#ListDataSets
   */
  public toListDataSets() {
    this.add('dataexchange:ListDataSets');
    return this;
  }

  /**
   * Grants permissions to list jobs for the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#ListJobs
   */
  public toListJobs() {
    this.add('dataexchange:ListJobs');
    return this;
  }

  /**
   * Grants permissions to get list the assets of a revision.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid-assets.html#ListRevisionAssets
   */
  public toListRevisionAssets() {
    this.add('dataexchange:ListRevisionAssets');
    return this;
  }

  /**
   * Grants permission to list the tags that you associated with the specified resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/tags-resource-arn.html#ListTagsForResource
   */
  public toListTagsForResource() {
    this.add('dataexchange:ListTagsForResource');
    return this;
  }

  /**
   * Grants permissions to start a job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-jobs.html#StartJob
   */
  public toStartJob() {
    this.add('dataexchange:StartJob');
    return this;
  }

  /**
   * Grants permission to add one or more tags to a specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/tags-resource-arn.html#TagResource
   */
  public toTagResource() {
    this.add('dataexchange:TagResource');
    return this;
  }

  /**
   * Grants permission to remove one or more tags from a specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/tags-resource-arn.html#UntagResource
   */
  public toUntagResource() {
    this.add('dataexchange:UntagResource');
    return this;
  }

  /**
   * Grants permissions to get update information about an asset.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid-assets-assetid.html#UpdateAsset
   */
  public toUpdateAsset() {
    this.add('dataexchange:UpdateAsset');
    return this;
  }

  /**
   * Grants permissions to update information about a data set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid.html#UpdateDataSet
   */
  public toUpdateDataSet() {
    this.add('dataexchange:UpdateDataSet');
    return this;
  }

  /**
   * Grants permissions to update information about a revision.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/data-exchange/latest/apireference/v1-data-sets-datasetid-revisions-revisionid.html#UpdateRevision
   */
  public toUpdateRevision() {
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
   * Possible conditions:
   * - .ifJobType()
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
   * Applies to resource types:
   * - jobs
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifJobType(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`dataexchange:JobType`, value, operator || 'StringLike');
  }
}
