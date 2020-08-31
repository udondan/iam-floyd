import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

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
   */
  public toCreateDataSet() {
    this.add('dataexchange:CreateDataSet');
    return this;
  }

  /**
   * Grants permissions to create a job to import or export assets.
   *
   * Access Level: Write
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
   */
  public toCreateRevision() {
    this.add('dataexchange:CreateRevision');
    return this;
  }

  /**
   * Grants permissions to delete an asset.
   *
   * Access Level: Write
   */
  public toDeleteAsset() {
    this.add('dataexchange:DeleteAsset');
    return this;
  }

  /**
   * Grants permissions to delete a data set.
   *
   * Access Level: Write
   */
  public toDeleteDataSet() {
    this.add('dataexchange:DeleteDataSet');
    return this;
  }

  /**
   * Grants permissions to delete a revision.
   *
   * Access Level: Write
   */
  public toDeleteRevision() {
    this.add('dataexchange:DeleteRevision');
    return this;
  }

  /**
   * Grants permissions to get information about an asset and to export it (for example, in a Job).
   *
   * Access Level: Read
   */
  public toGetAsset() {
    this.add('dataexchange:GetAsset');
    return this;
  }

  /**
   * Grants permission to get information about a data set.
   *
   * Access Level: Read
   */
  public toGetDataSet() {
    this.add('dataexchange:GetDataSet');
    return this;
  }

  /**
   * Grants permissions to get information about a job.
   *
   * Access Level: Write
   */
  public toGetJob() {
    this.add('dataexchange:GetJob');
    return this;
  }

  /**
   * Grants permission to get information about a revision.
   *
   * Access Level: Read
   */
  public toGetRevision() {
    this.add('dataexchange:GetRevision');
    return this;
  }

  /**
   * Grants permissions to list the revisions of a data set.
   *
   * Access Level: List
   */
  public toListDataSetRevisions() {
    this.add('dataexchange:ListDataSetRevisions');
    return this;
  }

  /**
   * Grants permission to list data sets for the account.
   *
   * Access Level: List
   */
  public toListDataSets() {
    this.add('dataexchange:ListDataSets');
    return this;
  }

  /**
   * Grants permissions to list jobs for the account.
   *
   * Access Level: List
   */
  public toListJobs() {
    this.add('dataexchange:ListJobs');
    return this;
  }

  /**
   * Grants permissions to get list the assets of a revision.
   *
   * Access Level: List
   */
  public toListRevisionAssets() {
    this.add('dataexchange:ListRevisionAssets');
    return this;
  }

  /**
   * Grants permission to list the tags that you associated with the specified resource.
   *
   * Access Level: Read
   */
  public toListTagsForResource() {
    this.add('dataexchange:ListTagsForResource');
    return this;
  }

  /**
   * Grants permissions to start a job.
   *
   * Access Level: Write
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
   */
  public toUntagResource() {
    this.add('dataexchange:UntagResource');
    return this;
  }

  /**
   * Grants permissions to get update information about an asset.
   *
   * Access Level: Write
   */
  public toUpdateAsset() {
    this.add('dataexchange:UpdateAsset');
    return this;
  }

  /**
   * Grants permissions to update information about a data set.
   *
   * Access Level: Write
   */
  public toUpdateDataSet() {
    this.add('dataexchange:UpdateDataSet');
    return this;
  }

  /**
   * Grants permissions to update information about a revision.
   *
   * Access Level: Write
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
   * Filters create requests based on the allowed set of values for each of the mandatory tags.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * Applies to actions:
   * - .toCreateAsset()
   * - .toCreateDataSet()
   * - .toCreateRevision()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tag value associated with the resource.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * Applies to actions:
   * - .toCreateAsset()
   * - .toCreateDataSet()
   * - .toCreateRevision()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters create requests based on the presence of mandatory tags in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * Applies to actions:
   * - .toCreateAsset()
   * - .toCreateDataSet()
   * - .toCreateRevision()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
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
