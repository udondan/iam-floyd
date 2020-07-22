import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [personalize](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpersonalize.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Personalize extends PolicyStatement {
  public servicePrefix = 'personalize';
  protected actionList: Actions = {
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
   * Creates a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateCampaign.html
   */
  public createCampaign() {
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
  public createDataset() {
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
  public createDatasetGroup() {
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
  public createDatasetImportJob() {
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
  public createEventTracker() {
    this.add('personalize:CreateEventTracker');
    return this;
  }

  /**
   * Creates a schema
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_CreateSchema.html
   */
  public createSchema() {
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
  public createSolution() {
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
  public createSolutionVersion() {
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
  public deleteCampaign() {
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
  public deleteDataset() {
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
  public deleteDatasetGroup() {
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
  public deleteEventTracker() {
    this.add('personalize:DeleteEventTracker');
    return this;
  }

  /**
   * Deletes a schema
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DeleteSchema.html
   */
  public deleteSchema() {
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
  public deleteSolution() {
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
  public describeAlgorithm() {
    this.add('personalize:DescribeAlgorithm');
    return this;
  }

  /**
   * Describes a campaign
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeCampaign.html
   */
  public describeCampaign() {
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
  public describeDataset() {
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
  public describeDatasetGroup() {
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
  public describeDatasetImportJob() {
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
  public describeEventTracker() {
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
  public describeFeatureTransformation() {
    this.add('personalize:DescribeFeatureTransformation');
    return this;
  }

  /**
   * Describes a recipe
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_DescribeRecipe.html
   */
  public describeRecipe() {
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
  public describeSchema() {
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
  public describeSolution() {
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
  public describeSolutionVersion() {
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
  public getPersonalizedRanking() {
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
  public getRecommendations() {
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
  public getSolutionMetrics() {
    this.add('personalize:GetSolutionMetrics');
    return this;
  }

  /**
   * Lists campaigns
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListCampaigns.html
   */
  public listCampaigns() {
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
  public listDatasetGroups() {
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
  public listDatasetImportJobs() {
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
  public listDatasets() {
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
  public listEventTrackers() {
    this.add('personalize:ListEventTrackers');
    return this;
  }

  /**
   * Lists recipes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/personalize/latest/dg/API_Operations.htmlAPI_ListRecipes.html
   */
  public listRecipes() {
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
  public listSchemas() {
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
  public listSolutionVersions() {
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
  public listSolutions() {
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
  public putEvents() {
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
  public updateCampaign() {
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
}
