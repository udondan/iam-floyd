import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [personalize](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpersonalize.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Personalize extends PolicyStatement {
  public servicePrefix = 'personalize';
  protected actionList: Actions = {
    "CreateBatchInferenceJob": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateBatchInferenceJob.html",
      "description": "Creates a batch inference job",
      "accessLevel": "Write",
      "resourceTypes": {
        "batchInferenceJob": {
          "required": true
        }
      }
    },
    "CreateCampaign": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateCampaign.html",
      "description": "Creates a campaign",
      "accessLevel": "Write",
      "resourceTypes": {
        "campaign": {
          "required": true
        }
      }
    },
    "CreateDataset": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateDataset.html",
      "description": "Creates a dataset",
      "accessLevel": "Write",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      }
    },
    "CreateDatasetGroup": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateDatasetGroup.html",
      "description": "Creates a dataset group",
      "accessLevel": "Write",
      "resourceTypes": {
        "datasetGroup": {
          "required": true
        }
      }
    },
    "CreateDatasetImportJob": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateDatasetImportJob.html",
      "description": "Creates a dataset import job",
      "accessLevel": "Write",
      "resourceTypes": {
        "datasetImportJob": {
          "required": true
        }
      }
    },
    "CreateEventTracker": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateEventTracker.html",
      "description": "Creates an event tracker",
      "accessLevel": "Write",
      "resourceTypes": {
        "eventTracker": {
          "required": true
        }
      }
    },
    "CreateFilter": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateFilter.html",
      "description": "Creates a filter",
      "accessLevel": "Write",
      "resourceTypes": {
        "filter": {
          "required": true
        }
      }
    },
    "CreateSchema": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateSchema.html",
      "description": "Creates a schema",
      "accessLevel": "Write",
      "resourceTypes": {
        "schema": {
          "required": true
        }
      }
    },
    "CreateSolution": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateSolution.html",
      "description": "Creates a solution",
      "accessLevel": "Write",
      "resourceTypes": {
        "solution": {
          "required": true
        }
      }
    },
    "CreateSolutionVersion": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateSolutionVersion.html",
      "description": "Creates a solution version",
      "accessLevel": "Write",
      "resourceTypes": {
        "solution": {
          "required": true
        }
      }
    },
    "DeleteCampaign": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteCampaign.html",
      "description": "Deletes a campaign",
      "accessLevel": "Write",
      "resourceTypes": {
        "campaign": {
          "required": true
        }
      }
    },
    "DeleteDataset": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteDataset.html",
      "description": "Deletes a dataset",
      "accessLevel": "Write",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      }
    },
    "DeleteDatasetGroup": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteDatasetGroup.html",
      "description": "Deletes a dataset group",
      "accessLevel": "Write",
      "resourceTypes": {
        "datasetGroup": {
          "required": true
        }
      }
    },
    "DeleteEventTracker": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteEventTracker.html",
      "description": "Deletes an event tracker",
      "accessLevel": "Write",
      "resourceTypes": {
        "eventTracker": {
          "required": true
        }
      }
    },
    "DeleteFilter": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteFilter.html",
      "description": "Deletes a filter",
      "accessLevel": "Write",
      "resourceTypes": {
        "filter": {
          "required": true
        }
      }
    },
    "DeleteSchema": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteSchema.html",
      "description": "Deletes a schema",
      "accessLevel": "Write",
      "resourceTypes": {
        "schema": {
          "required": true
        }
      }
    },
    "DeleteSolution": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteSolution.html",
      "description": "Deletes a solution including all versions of the solution",
      "accessLevel": "Write",
      "resourceTypes": {
        "solution": {
          "required": true
        }
      }
    },
    "DescribeAlgorithm": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeAlgorithm.html",
      "description": "Describes an algorithm",
      "accessLevel": "Read",
      "resourceTypes": {
        "algorithm": {
          "required": true
        }
      }
    },
    "DescribeBatchInferenceJob": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeBatchInferenceJob.html",
      "description": "Describes a batch inference job",
      "accessLevel": "Read",
      "resourceTypes": {
        "batchInferenceJob": {
          "required": true
        }
      }
    },
    "DescribeCampaign": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeCampaign.html",
      "description": "Describes a campaign",
      "accessLevel": "Read",
      "resourceTypes": {
        "campaign": {
          "required": true
        }
      }
    },
    "DescribeDataset": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeDataset.html",
      "description": "Describes a dataset",
      "accessLevel": "Read",
      "resourceTypes": {
        "dataset": {
          "required": true
        }
      }
    },
    "DescribeDatasetGroup": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeDatasetGroup.html",
      "description": "Describes a dataset group",
      "accessLevel": "Read",
      "resourceTypes": {
        "datasetGroup": {
          "required": true
        }
      }
    },
    "DescribeDatasetImportJob": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeDatasetImportJob.html",
      "description": "Describes a dataset import job",
      "accessLevel": "Read",
      "resourceTypes": {
        "datasetImportJob": {
          "required": true
        }
      }
    },
    "DescribeEventTracker": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeEventTracker.html",
      "description": "Describes an event tracker",
      "accessLevel": "Read",
      "resourceTypes": {
        "eventTracker": {
          "required": true
        }
      }
    },
    "DescribeFeatureTransformation": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeFeatureTransformation.html",
      "description": "Describes a feature transformation",
      "accessLevel": "Read",
      "resourceTypes": {
        "featureTransformation": {
          "required": true
        }
      }
    },
    "DescribeFilter": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeFilter.html",
      "description": "Describes a filter",
      "accessLevel": "Read",
      "resourceTypes": {
        "filter": {
          "required": true
        }
      }
    },
    "DescribeRecipe": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeRecipe.html",
      "description": "Describes a recipe",
      "accessLevel": "Read",
      "resourceTypes": {
        "recipe": {
          "required": true
        }
      }
    },
    "DescribeSchema": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeSchema.html",
      "description": "Describes a schema",
      "accessLevel": "Read",
      "resourceTypes": {
        "schema": {
          "required": true
        }
      }
    },
    "DescribeSolution": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeSolution.html",
      "description": "Describes a solution",
      "accessLevel": "Read",
      "resourceTypes": {
        "solution": {
          "required": true
        }
      }
    },
    "DescribeSolutionVersion": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeSolutionVersion.html",
      "description": "Describes a version of a solution",
      "accessLevel": "Read",
      "resourceTypes": {
        "solution": {
          "required": true
        }
      }
    },
    "GetPersonalizedRanking": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_RS_GetPersonalizedRanking.html",
      "description": "Gets a re-ranked list of recommendations",
      "accessLevel": "Write",
      "resourceTypes": {
        "campaign": {
          "required": true
        }
      }
    },
    "GetRecommendations": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_RS_GetRecommendations.html",
      "description": "Gets a list of recommendations from a campaign",
      "accessLevel": "Read",
      "resourceTypes": {
        "campaign": {
          "required": true
        }
      }
    },
    "GetSolutionMetrics": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_GetSolutionMetrics.html",
      "description": "Gets metrics for a solution version",
      "accessLevel": "Read",
      "resourceTypes": {
        "solution": {
          "required": true
        }
      }
    },
    "ListBatchInferenceJobs": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListBatchInferenceJobs.html",
      "description": "Lists batch inference jobs",
      "accessLevel": "List"
    },
    "ListCampaigns": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListCampaigns.html",
      "description": "Lists campaigns",
      "accessLevel": "List"
    },
    "ListDatasetGroups": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListDatasetGroups.html",
      "description": "Lists dataset groups",
      "accessLevel": "List"
    },
    "ListDatasetImportJobs": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListDatasetImportJobs.html",
      "description": "Lists dataset import jobs",
      "accessLevel": "List"
    },
    "ListDatasets": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListDatasets.html",
      "description": "Lists datasets",
      "accessLevel": "List"
    },
    "ListEventTrackers": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListEventTrackers.html",
      "description": "Lists event trackers",
      "accessLevel": "List"
    },
    "ListFilters": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListFilters.html",
      "description": "Lists filters",
      "accessLevel": "List"
    },
    "ListRecipes": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListRecipes.html",
      "description": "Lists recipes",
      "accessLevel": "List"
    },
    "ListSchemas": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListSchemas.html",
      "description": "Lists schemas",
      "accessLevel": "List"
    },
    "ListSolutionVersions": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListSolutionVersions.html",
      "description": "Lists versions of a solution",
      "accessLevel": "List"
    },
    "ListSolutions": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListSolutions.html",
      "description": "Lists solutions",
      "accessLevel": "List"
    },
    "PutEvents": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_UBS_PutEvents.html",
      "description": "Records real time event data",
      "accessLevel": "Write",
      "resourceTypes": {
        "eventTracker": {
          "required": true
        }
      }
    },
    "UpdateCampaign": {
      "url": "https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_UpdateCampaign.html",
      "description": "Updates a campaign",
      "accessLevel": "Write",
      "resourceTypes": {
        "campaign": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "schema": {
      "name": "schema",
      "url": "",
      "arn": "arn:${Partition}:personalize:${Region}:${Account}:schema/${ResourceId}",
      "conditionKeys": []
    },
    "featureTransformation": {
      "name": "featureTransformation",
      "url": "",
      "arn": "arn:${Partition}:personalize:${Region}:${Account}:feature-transformation/${ResourceId}",
      "conditionKeys": []
    },
    "dataset": {
      "name": "dataset",
      "url": "",
      "arn": "arn:${Partition}:personalize:${Region}:${Account}:dataset/${ResourceId}",
      "conditionKeys": []
    },
    "datasetGroup": {
      "name": "datasetGroup",
      "url": "",
      "arn": "arn:${Partition}:personalize:${Region}:${Account}:dataset-group/${ResourceId}",
      "conditionKeys": []
    },
    "datasetImportJob": {
      "name": "datasetImportJob",
      "url": "",
      "arn": "arn:${Partition}:personalize:${Region}:${Account}:dataset-import-job/${ResourceId}",
      "conditionKeys": []
    },
    "solution": {
      "name": "solution",
      "url": "",
      "arn": "arn:${Partition}:personalize:${Region}:${Account}:solution/${ResourceId}",
      "conditionKeys": []
    },
    "campaign": {
      "name": "campaign",
      "url": "",
      "arn": "arn:${Partition}:personalize:${Region}:${Account}:campaign/${ResourceId}",
      "conditionKeys": []
    },
    "eventTracker": {
      "name": "eventTracker",
      "url": "",
      "arn": "arn:${Partition}:personalize:${Region}:${Account}:event-tracker/${ResourceId}",
      "conditionKeys": []
    },
    "recipe": {
      "name": "recipe",
      "url": "",
      "arn": "arn:${Partition}:personalize:${Region}:${Account}:recipe/${ResourceId}",
      "conditionKeys": []
    },
    "algorithm": {
      "name": "algorithm",
      "url": "",
      "arn": "arn:${Partition}:personalize:${Region}:${Account}:algorithm/${ResourceId}",
      "conditionKeys": []
    },
    "batchInferenceJob": {
      "name": "batchInferenceJob",
      "url": "",
      "arn": "arn:${Partition}:personalize:${Region}:${Account}:batch-inference-job/${ResourceId}",
      "conditionKeys": []
    },
    "filter": {
      "name": "filter",
      "url": "",
      "arn": "arn:${Partition}:personalize:${Region}:${Account}:filter/${ResourceId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [personalize](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpersonalize.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a batch inference job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateBatchInferenceJob.html
   */
  public toCreateBatchInferenceJob() {
    this.add('personalize:CreateBatchInferenceJob');
    return this;
  }

  /**
   * Creates a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateCampaign.html
   */
  public toCreateCampaign() {
    this.add('personalize:CreateCampaign');
    return this;
  }

  /**
   * Creates a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateDataset.html
   */
  public toCreateDataset() {
    this.add('personalize:CreateDataset');
    return this;
  }

  /**
   * Creates a dataset group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateDatasetGroup.html
   */
  public toCreateDatasetGroup() {
    this.add('personalize:CreateDatasetGroup');
    return this;
  }

  /**
   * Creates a dataset import job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateDatasetImportJob.html
   */
  public toCreateDatasetImportJob() {
    this.add('personalize:CreateDatasetImportJob');
    return this;
  }

  /**
   * Creates an event tracker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateEventTracker.html
   */
  public toCreateEventTracker() {
    this.add('personalize:CreateEventTracker');
    return this;
  }

  /**
   * Creates a filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateFilter.html
   */
  public toCreateFilter() {
    this.add('personalize:CreateFilter');
    return this;
  }

  /**
   * Creates a schema
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateSchema.html
   */
  public toCreateSchema() {
    this.add('personalize:CreateSchema');
    return this;
  }

  /**
   * Creates a solution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateSolution.html
   */
  public toCreateSolution() {
    this.add('personalize:CreateSolution');
    return this;
  }

  /**
   * Creates a solution version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateSolutionVersion.html
   */
  public toCreateSolutionVersion() {
    this.add('personalize:CreateSolutionVersion');
    return this;
  }

  /**
   * Deletes a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteCampaign.html
   */
  public toDeleteCampaign() {
    this.add('personalize:DeleteCampaign');
    return this;
  }

  /**
   * Deletes a dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteDataset.html
   */
  public toDeleteDataset() {
    this.add('personalize:DeleteDataset');
    return this;
  }

  /**
   * Deletes a dataset group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteDatasetGroup.html
   */
  public toDeleteDatasetGroup() {
    this.add('personalize:DeleteDatasetGroup');
    return this;
  }

  /**
   * Deletes an event tracker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteEventTracker.html
   */
  public toDeleteEventTracker() {
    this.add('personalize:DeleteEventTracker');
    return this;
  }

  /**
   * Deletes a filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteFilter.html
   */
  public toDeleteFilter() {
    this.add('personalize:DeleteFilter');
    return this;
  }

  /**
   * Deletes a schema
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteSchema.html
   */
  public toDeleteSchema() {
    this.add('personalize:DeleteSchema');
    return this;
  }

  /**
   * Deletes a solution including all versions of the solution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteSolution.html
   */
  public toDeleteSolution() {
    this.add('personalize:DeleteSolution');
    return this;
  }

  /**
   * Describes an algorithm
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeAlgorithm.html
   */
  public toDescribeAlgorithm() {
    this.add('personalize:DescribeAlgorithm');
    return this;
  }

  /**
   * Describes a batch inference job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeBatchInferenceJob.html
   */
  public toDescribeBatchInferenceJob() {
    this.add('personalize:DescribeBatchInferenceJob');
    return this;
  }

  /**
   * Describes a campaign
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeCampaign.html
   */
  public toDescribeCampaign() {
    this.add('personalize:DescribeCampaign');
    return this;
  }

  /**
   * Describes a dataset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeDataset.html
   */
  public toDescribeDataset() {
    this.add('personalize:DescribeDataset');
    return this;
  }

  /**
   * Describes a dataset group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeDatasetGroup.html
   */
  public toDescribeDatasetGroup() {
    this.add('personalize:DescribeDatasetGroup');
    return this;
  }

  /**
   * Describes a dataset import job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeDatasetImportJob.html
   */
  public toDescribeDatasetImportJob() {
    this.add('personalize:DescribeDatasetImportJob');
    return this;
  }

  /**
   * Describes an event tracker
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeEventTracker.html
   */
  public toDescribeEventTracker() {
    this.add('personalize:DescribeEventTracker');
    return this;
  }

  /**
   * Describes a feature transformation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeFeatureTransformation.html
   */
  public toDescribeFeatureTransformation() {
    this.add('personalize:DescribeFeatureTransformation');
    return this;
  }

  /**
   * Describes a filter
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeFilter.html
   */
  public toDescribeFilter() {
    this.add('personalize:DescribeFilter');
    return this;
  }

  /**
   * Describes a recipe
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeRecipe.html
   */
  public toDescribeRecipe() {
    this.add('personalize:DescribeRecipe');
    return this;
  }

  /**
   * Describes a schema
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeSchema.html
   */
  public toDescribeSchema() {
    this.add('personalize:DescribeSchema');
    return this;
  }

  /**
   * Describes a solution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeSolution.html
   */
  public toDescribeSolution() {
    this.add('personalize:DescribeSolution');
    return this;
  }

  /**
   * Describes a version of a solution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeSolutionVersion.html
   */
  public toDescribeSolutionVersion() {
    this.add('personalize:DescribeSolutionVersion');
    return this;
  }

  /**
   * Gets a re-ranked list of recommendations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_RS_GetPersonalizedRanking.html
   */
  public toGetPersonalizedRanking() {
    this.add('personalize:GetPersonalizedRanking');
    return this;
  }

  /**
   * Gets a list of recommendations from a campaign
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_RS_GetRecommendations.html
   */
  public toGetRecommendations() {
    this.add('personalize:GetRecommendations');
    return this;
  }

  /**
   * Gets metrics for a solution version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_GetSolutionMetrics.html
   */
  public toGetSolutionMetrics() {
    this.add('personalize:GetSolutionMetrics');
    return this;
  }

  /**
   * Lists batch inference jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListBatchInferenceJobs.html
   */
  public toListBatchInferenceJobs() {
    this.add('personalize:ListBatchInferenceJobs');
    return this;
  }

  /**
   * Lists campaigns
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListCampaigns.html
   */
  public toListCampaigns() {
    this.add('personalize:ListCampaigns');
    return this;
  }

  /**
   * Lists dataset groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListDatasetGroups.html
   */
  public toListDatasetGroups() {
    this.add('personalize:ListDatasetGroups');
    return this;
  }

  /**
   * Lists dataset import jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListDatasetImportJobs.html
   */
  public toListDatasetImportJobs() {
    this.add('personalize:ListDatasetImportJobs');
    return this;
  }

  /**
   * Lists datasets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListDatasets.html
   */
  public toListDatasets() {
    this.add('personalize:ListDatasets');
    return this;
  }

  /**
   * Lists event trackers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListEventTrackers.html
   */
  public toListEventTrackers() {
    this.add('personalize:ListEventTrackers');
    return this;
  }

  /**
   * Lists filters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListFilters.html
   */
  public toListFilters() {
    this.add('personalize:ListFilters');
    return this;
  }

  /**
   * Lists recipes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListRecipes.html
   */
  public toListRecipes() {
    this.add('personalize:ListRecipes');
    return this;
  }

  /**
   * Lists schemas
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListSchemas.html
   */
  public toListSchemas() {
    this.add('personalize:ListSchemas');
    return this;
  }

  /**
   * Lists versions of a solution
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListSolutionVersions.html
   */
  public toListSolutionVersions() {
    this.add('personalize:ListSolutionVersions');
    return this;
  }

  /**
   * Lists solutions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListSolutions.html
   */
  public toListSolutions() {
    this.add('personalize:ListSolutions');
    return this;
  }

  /**
   * Records real time event data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_UBS_PutEvents.html
   */
  public toPutEvents() {
    this.add('personalize:PutEvents');
    return this;
  }

  /**
   * Updates a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_UpdateCampaign.html
   */
  public toUpdateCampaign() {
    this.add('personalize:UpdateCampaign');
    return this;
  }

  /**
   * Adds a resource of type schema to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSchema(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:schema/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type featureTransformation to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFeatureTransformation(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:feature-transformation/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dataset to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDataset(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:dataset/${ResourceId}';
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
   */
  public onDatasetGroup(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:dataset-group/${ResourceId}';
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
   */
  public onDatasetImportJob(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:dataset-import-job/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type solution to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSolution(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:solution/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type campaign to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCampaign(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:campaign/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type eventTracker to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEventTracker(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:event-tracker/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type recipe to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRecipe(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:recipe/${ResourceId}';
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
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAlgorithm(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:algorithm/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type batchInferenceJob to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onBatchInferenceJob(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:batch-inference-job/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type filter to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFilter(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:personalize:${Region}:${Account}:filter/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
