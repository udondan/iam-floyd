import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service elastictranscoder
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelastictranscoder.html
 */
export class Elastictranscoder extends PolicyStatement {
  public servicePrefix = 'elastictranscoder';
  public actions : Actions = {
    "CancelJob": {
      "url": "https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/cancel-job.html",
      "description": "Cancel a job that Elastic Transcoder has not begun to process",
      "accessLevel": "Write",
      "resourceTypes": {
        "job": {
          "required": true
        }
      }
    },
    "CreateJob": {
      "url": "https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-job.html",
      "description": "Create a job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "pipeline": {
          "required": true
        },
        "preset": {
          "required": true
        }
      }
    },
    "CreatePipeline": {
      "url": "https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-pipeline.html",
      "description": "Create a pipeline",
      "accessLevel": "Write",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    },
    "CreatePreset": {
      "url": "https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-preset.html",
      "description": "Create a preset.",
      "accessLevel": "Write",
      "resourceTypes": {
        "preset": {
          "required": true
        }
      }
    },
    "DeletePipeline": {
      "url": "https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/delete-pipeline.html",
      "description": "Delete a pipeline",
      "accessLevel": "Write",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    },
    "DeletePreset": {
      "url": "https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/delete-preset.html",
      "description": "Delete a preset",
      "accessLevel": "Write",
      "resourceTypes": {
        "preset": {
          "required": true
        }
      }
    },
    "ListJobsByPipeline": {
      "url": "https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-jobs-by-pipeline.html",
      "description": "Get a list of the jobs that you assigned to a pipeline",
      "accessLevel": "List",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    },
    "ListJobsByStatus": {
      "url": "https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-jobs-by-status.html",
      "description": "Get information about all of the jobs associated with the current AWS account that have a specified status",
      "accessLevel": "List"
    },
    "ListPipelines": {
      "url": "https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-pipelines.html",
      "description": "Get a list of the pipelines associated with the current AWS account",
      "accessLevel": "List"
    },
    "ListPresets": {
      "url": "https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-presets.html",
      "description": "Get a list of all presets associated with the current AWS account.",
      "accessLevel": "List"
    },
    "ReadJob": {
      "url": "https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-job.html",
      "description": "Get detailed information about a job",
      "accessLevel": "Read",
      "resourceTypes": {
        "job": {
          "required": true
        }
      }
    },
    "ReadPipeline": {
      "url": "https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-pipeline.html",
      "description": "Get detailed information about a pipeline",
      "accessLevel": "Read",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    },
    "ReadPreset": {
      "url": "https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-preset.html",
      "description": "Get detailed information about a preset.",
      "accessLevel": "Read",
      "resourceTypes": {
        "preset": {
          "required": true
        }
      }
    },
    "TestRole": {
      "url": "https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/test-pipeline-role.html",
      "description": "Test the settings for a pipeline to ensure that Elastic Transcoder can create and process jobs",
      "accessLevel": "Write"
    },
    "UpdatePipeline": {
      "url": "https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline.html",
      "description": "Update settings for a pipeline",
      "accessLevel": "Write",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    },
    "UpdatePipelineNotifications": {
      "url": "https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline-notifications.html",
      "description": "Update only Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline",
      "accessLevel": "Write",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    },
    "UpdatePipelineStatus": {
      "url": "https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline-status.html",
      "description": "Pause or reactivate a pipeline, so the pipeline stops or restarts processing jobs, update the status for the pipeline.",
      "accessLevel": "Write",
      "resourceTypes": {
        "pipeline": {
          "required": true
        }
      }
    }
  };

  /**
   * Cancel a job that Elastic Transcoder has not begun to process
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/cancel-job.html
   */
  public cancelJob () {
    this.add('elastictranscoder:CancelJob');
    return this;
  }

  /**
   * Create a job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-job.html
   */
  public createJob () {
    this.add('elastictranscoder:CreateJob');
    return this;
  }

  /**
   * Create a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-pipeline.html
   */
  public createPipeline () {
    this.add('elastictranscoder:CreatePipeline');
    return this;
  }

  /**
   * Create a preset.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-preset.html
   */
  public createPreset () {
    this.add('elastictranscoder:CreatePreset');
    return this;
  }

  /**
   * Delete a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/delete-pipeline.html
   */
  public deletePipeline () {
    this.add('elastictranscoder:DeletePipeline');
    return this;
  }

  /**
   * Delete a preset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/delete-preset.html
   */
  public deletePreset () {
    this.add('elastictranscoder:DeletePreset');
    return this;
  }

  /**
   * Get a list of the jobs that you assigned to a pipeline
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-jobs-by-pipeline.html
   */
  public listJobsByPipeline () {
    this.add('elastictranscoder:ListJobsByPipeline');
    return this;
  }

  /**
   * Get information about all of the jobs associated with the current AWS account that have a specified status
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-jobs-by-status.html
   */
  public listJobsByStatus () {
    this.add('elastictranscoder:ListJobsByStatus');
    return this;
  }

  /**
   * Get a list of the pipelines associated with the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-pipelines.html
   */
  public listPipelines () {
    this.add('elastictranscoder:ListPipelines');
    return this;
  }

  /**
   * Get a list of all presets associated with the current AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-presets.html
   */
  public listPresets () {
    this.add('elastictranscoder:ListPresets');
    return this;
  }

  /**
   * Get detailed information about a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-job.html
   */
  public readJob () {
    this.add('elastictranscoder:ReadJob');
    return this;
  }

  /**
   * Get detailed information about a pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-pipeline.html
   */
  public readPipeline () {
    this.add('elastictranscoder:ReadPipeline');
    return this;
  }

  /**
   * Get detailed information about a preset.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-preset.html
   */
  public readPreset () {
    this.add('elastictranscoder:ReadPreset');
    return this;
  }

  /**
   * Test the settings for a pipeline to ensure that Elastic Transcoder can create and process jobs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/test-pipeline-role.html
   */
  public testRole () {
    this.add('elastictranscoder:TestRole');
    return this;
  }

  /**
   * Update settings for a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline.html
   */
  public updatePipeline () {
    this.add('elastictranscoder:UpdatePipeline');
    return this;
  }

  /**
   * Update only Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline-notifications.html
   */
  public updatePipelineNotifications () {
    this.add('elastictranscoder:UpdatePipelineNotifications');
    return this;
  }

  /**
   * Pause or reactivate a pipeline, so the pipeline stops or restarts processing jobs, update the status for the pipeline.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline-status.html
   */
  public updatePipelineStatus () {
    this.add('elastictranscoder:UpdatePipelineStatus');
    return this;
  }
}
