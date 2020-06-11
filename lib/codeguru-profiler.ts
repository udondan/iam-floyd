import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service codeguru-profiler
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncodeguruprofiler.html
 */
export class CodeguruProfiler extends PolicyStatement {
  public servicePrefix = 'codeguru-profiler';
  public actions : Actions = {
    "ConfigureAgent": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html",
      "description": "Grants permission for an agent to register with the orchestration service and retrieve profiling configuration information",
      "accessLevel": "Write",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "CreateProfilingGroup": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_CreateProfilingGroup.html",
      "description": "Grants permission to create a profiling group",
      "accessLevel": "Write",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "DeleteProfilingGroup": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_DeleteProfilingGroup.html",
      "description": "Grants permission to delete a profiling group",
      "accessLevel": "Write",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "DescribeProfilingGroup": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_DescribeProfilingGroup.html",
      "description": "Grants permission to describe a profiling group",
      "accessLevel": "Read",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "GetFindingsReport": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetFindingsReport.html",
      "description": "Grants permission to get a recommendations report",
      "accessLevel": "Read",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "GetFindingsReportAccountSummary": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetFindingsReportAccountSummary.html",
      "description": "Grants permission to get a summary of recent recommendations for each profiling group in the account",
      "accessLevel": "Read"
    },
    "GetPolicy": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetPolicy.html",
      "description": "Grants permission to get the resource policy associated with the specified Profiling Group.",
      "accessLevel": "Read",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "GetProfile": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html",
      "description": "Grants permission to get aggregated profiles for a specific profiling group",
      "accessLevel": "Read",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "GetRecommendations": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetRecommendations.html",
      "description": "Grants permission to get recommendations",
      "accessLevel": "Read",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "ListFindingsReports": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListFindingsReports.html",
      "description": "Grants permissions to list the available recommendations reports for a specific profiling group",
      "accessLevel": "List",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "ListProfileTimes": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html",
      "description": "Grants permissions to list the start times of the available aggregated profiles for a specific profiling group",
      "accessLevel": "List",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "ListProfilingGroups": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfilingGroups.html",
      "description": "Grants permissions to list profiling groups in the account",
      "accessLevel": "List"
    },
    "PostAgentProfile": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html",
      "description": "Grants permissions to submit a profile collected by an agent belonging to a specific profiling group for aggregation",
      "accessLevel": "Write",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "PutPermission": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PutPermission.html",
      "description": "Grants permissions to update the list of principals allowed for an action group in the resource policy associated with the specified Profiling Group.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "RemovePermission": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_RemovePermission.html",
      "description": "Grants permission to remove the permission of specified Action Group from the resource policy associated with the specified Profiling Group.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    },
    "UpdateProfilingGroup": {
      "url": "https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_UpdateProfilingGroup.html",
      "description": "Grants permissions to update a specific profiling group",
      "accessLevel": "Write",
      "resourceTypes": {
        "ProfilingGroup": {
          "required": true
        }
      }
    }
  };

  /**
   * Grants permission for an agent to register with the orchestration service and retrieve profiling configuration information
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html
   */
  public configureAgent () {
    this.add('codeguru-profiler:ConfigureAgent');
    return this;
  }

  /**
   * Grants permission to create a profiling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_CreateProfilingGroup.html
   */
  public createProfilingGroup () {
    this.add('codeguru-profiler:CreateProfilingGroup');
    return this;
  }

  /**
   * Grants permission to delete a profiling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_DeleteProfilingGroup.html
   */
  public deleteProfilingGroup () {
    this.add('codeguru-profiler:DeleteProfilingGroup');
    return this;
  }

  /**
   * Grants permission to describe a profiling group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_DescribeProfilingGroup.html
   */
  public describeProfilingGroup () {
    this.add('codeguru-profiler:DescribeProfilingGroup');
    return this;
  }

  /**
   * Grants permission to get a recommendations report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetFindingsReport.html
   */
  public getFindingsReport () {
    this.add('codeguru-profiler:GetFindingsReport');
    return this;
  }

  /**
   * Grants permission to get a summary of recent recommendations for each profiling group in the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetFindingsReportAccountSummary.html
   */
  public getFindingsReportAccountSummary () {
    this.add('codeguru-profiler:GetFindingsReportAccountSummary');
    return this;
  }

  /**
   * Grants permission to get the resource policy associated with the specified Profiling Group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetPolicy.html
   */
  public getPolicy () {
    this.add('codeguru-profiler:GetPolicy');
    return this;
  }

  /**
   * Grants permission to get aggregated profiles for a specific profiling group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html
   */
  public getProfile () {
    this.add('codeguru-profiler:GetProfile');
    return this;
  }

  /**
   * Grants permission to get recommendations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetRecommendations.html
   */
  public getRecommendations () {
    this.add('codeguru-profiler:GetRecommendations');
    return this;
  }

  /**
   * Grants permissions to list the available recommendations reports for a specific profiling group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListFindingsReports.html
   */
  public listFindingsReports () {
    this.add('codeguru-profiler:ListFindingsReports');
    return this;
  }

  /**
   * Grants permissions to list the start times of the available aggregated profiles for a specific profiling group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfileTimes.html
   */
  public listProfileTimes () {
    this.add('codeguru-profiler:ListProfileTimes');
    return this;
  }

  /**
   * Grants permissions to list profiling groups in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ListProfilingGroups.html
   */
  public listProfilingGroups () {
    this.add('codeguru-profiler:ListProfilingGroups');
    return this;
  }

  /**
   * Grants permissions to submit a profile collected by an agent belonging to a specific profiling group for aggregation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html
   */
  public postAgentProfile () {
    this.add('codeguru-profiler:PostAgentProfile');
    return this;
  }

  /**
   * Grants permissions to update the list of principals allowed for an action group in the resource policy associated with the specified Profiling Group.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PutPermission.html
   */
  public putPermission () {
    this.add('codeguru-profiler:PutPermission');
    return this;
  }

  /**
   * Grants permission to remove the permission of specified Action Group from the resource policy associated with the specified Profiling Group.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_RemovePermission.html
   */
  public removePermission () {
    this.add('codeguru-profiler:RemovePermission');
    return this;
  }

  /**
   * Grants permissions to update a specific profiling group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_UpdateProfilingGroup.html
   */
  public updateProfilingGroup () {
    this.add('codeguru-profiler:UpdateProfilingGroup');
    return this;
  }
}
