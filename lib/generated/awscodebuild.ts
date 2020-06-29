import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service codebuild
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodebuild.html
 */
export class Codebuild extends PolicyStatement {
  public servicePrefix = 'codebuild';
  public actions: Actions = {
    "BatchDeleteBuilds": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchDeleteBuilds.html",
      "description": "Deletes one or more builds.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "BatchGetBuilds": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetBuilds.html",
      "description": "Gets information about one or more builds.",
      "accessLevel": "Read",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "BatchGetProjects": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetProjects.html",
      "description": "Gets information about one or more build projects.",
      "accessLevel": "Read",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "BatchGetReportGroups": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetReportGroups.html",
      "description": "Returns an array of ReportGroup objects that are specified by the input reportGroupArns parameter.",
      "accessLevel": "Read",
      "resourceTypes": {
        "report-group": {
          "required": true
        }
      }
    },
    "BatchGetReports": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetReports.html",
      "description": "Returns an array of the Report objects specified by the input reportArns parameter.",
      "accessLevel": "Read",
      "resourceTypes": {
        "report-group": {
          "required": true
        }
      }
    },
    "BatchPutTestCases": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies",
      "description": "Adds or updates information about a report.",
      "accessLevel": "Write",
      "resourceTypes": {
        "report-group": {
          "required": true
        }
      }
    },
    "CreateProject": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateProject.html",
      "description": "Creates a build project.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateReport": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies",
      "description": "Creates a report. A report is created when tests specified in the buildspec file for a report groups run during the build of a project.",
      "accessLevel": "Write",
      "resourceTypes": {
        "report-group": {
          "required": true
        }
      }
    },
    "CreateReportGroup": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateReportGroup.html",
      "description": "Creates a report group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "report-group": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateWebhook": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateWebhook.html",
      "description": "For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables AWS CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "DeleteOAuthToken": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies",
      "description": "Deletes an OAuth token from a connected third-party OAuth provider. Only used in the AWS CodeBuild console.",
      "accessLevel": "Write"
    },
    "DeleteProject": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteProject.html",
      "description": "Deletes a build project.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "DeleteReport": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReport.html",
      "description": "Deletes a report.",
      "accessLevel": "Write",
      "resourceTypes": {
        "report-group": {
          "required": true
        }
      }
    },
    "DeleteReportGroup": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReportGroup.html",
      "description": "Deletes a report group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "report-group": {
          "required": true
        }
      }
    },
    "DeleteResourcePolicy": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteResourcePolicy.html",
      "description": "Deletes a resource policy for the associated project or report group.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "project": {
          "required": false
        },
        "report-group": {
          "required": false
        }
      }
    },
    "DeleteSourceCredentials": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteSourceCredentials.html",
      "description": "Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials.",
      "accessLevel": "Write"
    },
    "DeleteWebhook": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteWebhook.html",
      "description": "For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops AWS CodeBuild from rebuilding the source code every time a code change is pushed to the repository.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "DescribeTestCases": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DescribeTestCases.html",
      "description": "Returns an array of TestCase objects.",
      "accessLevel": "Read",
      "resourceTypes": {
        "report-group": {
          "required": true
        }
      }
    },
    "GetResourcePolicy": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_GetResourcePolicy.html",
      "description": "Returns a resource policy for the specified project or report group.",
      "accessLevel": "Read",
      "resourceTypes": {
        "project": {
          "required": false
        },
        "report-group": {
          "required": false
        }
      }
    },
    "ImportSourceCredentials": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ImportSourceCredentials.html",
      "description": "Imports the source repository credentials for an AWS CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository.",
      "accessLevel": "Write"
    },
    "InvalidateProjectCache": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_InvalidateProjectCache.html",
      "description": "Resets the cache for a project.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "ListBuilds": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuilds.html",
      "description": "Gets a list of build IDs, with each build ID representing a single build.",
      "accessLevel": "List"
    },
    "ListBuildsForProject": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuildsForProject.html",
      "description": "Gets a list of build IDs for the specified build project, with each build ID representing a single build.",
      "accessLevel": "List",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "ListConnectedOAuthAccounts": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies",
      "description": "Lists connected third-party OAuth providers. Only used in the AWS CodeBuild console.",
      "accessLevel": "List"
    },
    "ListCuratedEnvironmentImages": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListCuratedEnvironmentImages.html",
      "description": "Gets information about Docker images that are managed by AWS CodeBuild.",
      "accessLevel": "List"
    },
    "ListProjects": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListProjects.html",
      "description": "Gets a list of build project names, with each build project name representing a single build project.",
      "accessLevel": "List"
    },
    "ListReportGroups": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportGroups.html",
      "description": "Returns a list of report group ARNs. Each report group ARN represents one report group.",
      "accessLevel": "List"
    },
    "ListReports": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReports.html",
      "description": "Returns a list of report ARNs. Each report ARN representing one report.",
      "accessLevel": "List"
    },
    "ListReportsForReportGroup": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportsForReportGroup.html",
      "description": "Returns a list of report ARNs that belong to the specified report group. Each report ARN represents one report.",
      "accessLevel": "List",
      "resourceTypes": {
        "report-group": {
          "required": true
        }
      }
    },
    "ListRepositories": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies",
      "description": "Lists source code repositories from a connected third-party OAuth provider. Only used in the AWS CodeBuild console.",
      "accessLevel": "List"
    },
    "ListSharedProjects": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSharedProjects.html",
      "description": "Returns a list of project ARNs that have been shared with the requester. Each project ARN represents one project.",
      "accessLevel": "List"
    },
    "ListSharedReportGroups": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSharedReportGroups.html",
      "description": "Returns a list of report group ARNs that have been shared with the requester. Each report group ARN represents one report group.",
      "accessLevel": "List"
    },
    "ListSourceCredentials": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSourceCredentials.html",
      "description": "Returns a list of SourceCredentialsInfo objects.",
      "accessLevel": "List"
    },
    "PersistOAuthToken": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies",
      "description": "Saves an OAuth token from a connected third-party OAuth provider. Only used in the AWS CodeBuild console.",
      "accessLevel": "Write"
    },
    "PutResourcePolicy": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_PutResourcePolicy.html",
      "description": "Creates a resource policy for the associated project or report group.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "project": {
          "required": false
        },
        "report-group": {
          "required": false
        }
      }
    },
    "StartBuild": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartBuild.html",
      "description": "Starts running a build.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "StopBuild": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StopBuild.html",
      "description": "Attempts to stop running a build.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "UpdateProject": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateProject.html",
      "description": "Changes the settings of an existing build project.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateReport": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies",
      "description": "Updates information about a report.",
      "accessLevel": "Write",
      "resourceTypes": {
        "report-group": {
          "required": true
        }
      }
    },
    "UpdateReportGroup": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateReportGroup.html",
      "description": "Changes the settings of an existing report group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "report-group": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateWebhook": {
      "url": "https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateWebhook.html",
      "description": "Updates the webhook associated with an AWS CodeBuild build project.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "build": {
      "name": "build",
      "url": "https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats",
      "arn": "arn:${Partition}:codebuild:${Region}:${Account}:build/${BuildId}",
      "conditionKeys": []
    },
    "project": {
      "name": "project",
      "url": "https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats",
      "arn": "arn:${Partition}:codebuild:${Region}:${Account}:project/${ProjectName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "report-group": {
      "name": "report-group",
      "url": "https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats",
      "arn": "arn:${Partition}:codebuild:${Region}:${Account}:report-group/${ReportGroupName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "report": {
      "name": "report",
      "url": "https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats",
      "arn": "arn:${Partition}:codebuild:${Region}:${Account}:report/${ReportGroupName}:${ReportId}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service codebuild
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodebuild.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Deletes one or more builds.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchDeleteBuilds.html
   */
  public batchDeleteBuilds() {
    this.add('codebuild:BatchDeleteBuilds');
    return this;
  }

  /**
   * Gets information about one or more builds.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetBuilds.html
   */
  public batchGetBuilds() {
    this.add('codebuild:BatchGetBuilds');
    return this;
  }

  /**
   * Gets information about one or more build projects.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetProjects.html
   */
  public batchGetProjects() {
    this.add('codebuild:BatchGetProjects');
    return this;
  }

  /**
   * Returns an array of ReportGroup objects that are specified by the input reportGroupArns parameter.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetReportGroups.html
   */
  public batchGetReportGroups() {
    this.add('codebuild:BatchGetReportGroups');
    return this;
  }

  /**
   * Returns an array of the Report objects specified by the input reportArns parameter.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_BatchGetReports.html
   */
  public batchGetReports() {
    this.add('codebuild:BatchGetReports');
    return this;
  }

  /**
   * Adds or updates information about a report.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public batchPutTestCases() {
    this.add('codebuild:BatchPutTestCases');
    return this;
  }

  /**
   * Creates a build project.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateProject.html
   */
  public createProject() {
    this.add('codebuild:CreateProject');
    return this;
  }

  /**
   * Creates a report. A report is created when tests specified in the buildspec file for a report groups run during the build of a project.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public createReport() {
    this.add('codebuild:CreateReport');
    return this;
  }

  /**
   * Creates a report group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateReportGroup.html
   */
  public createReportGroup() {
    this.add('codebuild:CreateReportGroup');
    return this;
  }

  /**
   * For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables AWS CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_CreateWebhook.html
   */
  public createWebhook() {
    this.add('codebuild:CreateWebhook');
    return this;
  }

  /**
   * Deletes an OAuth token from a connected third-party OAuth provider. Only used in the AWS CodeBuild console.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public deleteOAuthToken() {
    this.add('codebuild:DeleteOAuthToken');
    return this;
  }

  /**
   * Deletes a build project.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteProject.html
   */
  public deleteProject() {
    this.add('codebuild:DeleteProject');
    return this;
  }

  /**
   * Deletes a report.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReport.html
   */
  public deleteReport() {
    this.add('codebuild:DeleteReport');
    return this;
  }

  /**
   * Deletes a report group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReportGroup.html
   */
  public deleteReportGroup() {
    this.add('codebuild:DeleteReportGroup');
    return this;
  }

  /**
   * Deletes a resource policy for the associated project or report group.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public deleteResourcePolicy() {
    this.add('codebuild:DeleteResourcePolicy');
    return this;
  }

  /**
   * Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteSourceCredentials.html
   */
  public deleteSourceCredentials() {
    this.add('codebuild:DeleteSourceCredentials');
    return this;
  }

  /**
   * For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops AWS CodeBuild from rebuilding the source code every time a code change is pushed to the repository.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteWebhook.html
   */
  public deleteWebhook() {
    this.add('codebuild:DeleteWebhook');
    return this;
  }

  /**
   * Returns an array of TestCase objects.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DescribeTestCases.html
   */
  public describeTestCases() {
    this.add('codebuild:DescribeTestCases');
    return this;
  }

  /**
   * Returns a resource policy for the specified project or report group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_GetResourcePolicy.html
   */
  public getResourcePolicy() {
    this.add('codebuild:GetResourcePolicy');
    return this;
  }

  /**
   * Imports the source repository credentials for an AWS CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ImportSourceCredentials.html
   */
  public importSourceCredentials() {
    this.add('codebuild:ImportSourceCredentials');
    return this;
  }

  /**
   * Resets the cache for a project.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_InvalidateProjectCache.html
   */
  public invalidateProjectCache() {
    this.add('codebuild:InvalidateProjectCache');
    return this;
  }

  /**
   * Gets a list of build IDs, with each build ID representing a single build.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuilds.html
   */
  public listBuilds() {
    this.add('codebuild:ListBuilds');
    return this;
  }

  /**
   * Gets a list of build IDs for the specified build project, with each build ID representing a single build.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListBuildsForProject.html
   */
  public listBuildsForProject() {
    this.add('codebuild:ListBuildsForProject');
    return this;
  }

  /**
   * Lists connected third-party OAuth providers. Only used in the AWS CodeBuild console.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public listConnectedOAuthAccounts() {
    this.add('codebuild:ListConnectedOAuthAccounts');
    return this;
  }

  /**
   * Gets information about Docker images that are managed by AWS CodeBuild.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListCuratedEnvironmentImages.html
   */
  public listCuratedEnvironmentImages() {
    this.add('codebuild:ListCuratedEnvironmentImages');
    return this;
  }

  /**
   * Gets a list of build project names, with each build project name representing a single build project.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListProjects.html
   */
  public listProjects() {
    this.add('codebuild:ListProjects');
    return this;
  }

  /**
   * Returns a list of report group ARNs. Each report group ARN represents one report group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportGroups.html
   */
  public listReportGroups() {
    this.add('codebuild:ListReportGroups');
    return this;
  }

  /**
   * Returns a list of report ARNs. Each report ARN representing one report.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReports.html
   */
  public listReports() {
    this.add('codebuild:ListReports');
    return this;
  }

  /**
   * Returns a list of report ARNs that belong to the specified report group. Each report ARN represents one report.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportsForReportGroup.html
   */
  public listReportsForReportGroup() {
    this.add('codebuild:ListReportsForReportGroup');
    return this;
  }

  /**
   * Lists source code repositories from a connected third-party OAuth provider. Only used in the AWS CodeBuild console.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public listRepositories() {
    this.add('codebuild:ListRepositories');
    return this;
  }

  /**
   * Returns a list of project ARNs that have been shared with the requester. Each project ARN represents one project.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSharedProjects.html
   */
  public listSharedProjects() {
    this.add('codebuild:ListSharedProjects');
    return this;
  }

  /**
   * Returns a list of report group ARNs that have been shared with the requester. Each report group ARN represents one report group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSharedReportGroups.html
   */
  public listSharedReportGroups() {
    this.add('codebuild:ListSharedReportGroups');
    return this;
  }

  /**
   * Returns a list of SourceCredentialsInfo objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListSourceCredentials.html
   */
  public listSourceCredentials() {
    this.add('codebuild:ListSourceCredentials');
    return this;
  }

  /**
   * Saves an OAuth token from a connected third-party OAuth provider. Only used in the AWS CodeBuild console.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public persistOAuthToken() {
    this.add('codebuild:PersistOAuthToken');
    return this;
  }

  /**
   * Creates a resource policy for the associated project or report group.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_PutResourcePolicy.html
   */
  public putResourcePolicy() {
    this.add('codebuild:PutResourcePolicy');
    return this;
  }

  /**
   * Starts running a build.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StartBuild.html
   */
  public startBuild() {
    this.add('codebuild:StartBuild');
    return this;
  }

  /**
   * Attempts to stop running a build.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_StopBuild.html
   */
  public stopBuild() {
    this.add('codebuild:StopBuild');
    return this;
  }

  /**
   * Changes the settings of an existing build project.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateProject.html
   */
  public updateProject() {
    this.add('codebuild:UpdateProject');
    return this;
  }

  /**
   * Updates information about a report.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#console-policies
   */
  public updateReport() {
    this.add('codebuild:UpdateReport');
    return this;
  }

  /**
   * Changes the settings of an existing report group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateReportGroup.html
   */
  public updateReportGroup() {
    this.add('codebuild:UpdateReportGroup');
    return this;
  }

  /**
   * Updates the webhook associated with an AWS CodeBuild build project.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codebuild/latest/APIReference/API_UpdateWebhook.html
   */
  public updateWebhook() {
    this.add('codebuild:UpdateWebhook');
    return this;
  }

  /**
   * Adds a resource of type build to the statement
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param buildId - Identifier for the buildId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onBuild(buildId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codebuild:${Region}:${Account}:build/${BuildId}';
    arn = arn.replace('${BuildId}', buildId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param projectName - Identifier for the projectName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onProject(projectName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codebuild:${Region}:${Account}:project/${ProjectName}';
    arn = arn.replace('${ProjectName}', projectName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type report-group to the statement
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param reportGroupName - Identifier for the reportGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onReportGroup(reportGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codebuild:${Region}:${Account}:report-group/${ReportGroupName}';
    arn = arn.replace('${ReportGroupName}', reportGroupName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type report to the statement
   *
   * https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param reportGroupName - Identifier for the reportGroupName.
   * @param reportId - Identifier for the reportId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onReport(reportGroupName: string, reportId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codebuild:${Region}:${Account}:report/${ReportGroupName}:${ReportId}';
    arn = arn.replace('${ReportGroupName}', reportGroupName);
    arn = arn.replace('${ReportId}', reportId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
