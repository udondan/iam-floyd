import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service deepracer
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdeepracer.html
 */
export class Deepracer extends PolicyStatement {
  public servicePrefix = 'deepracer';
  public actions : Actions = {
    "CloneReinforcementLearningModel": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html#deepracer-clone-trained-model",
      "description": "Grants permission to clone existing DeepRacer models",
      "accessLevel": "Write",
      "resourceTypes": {
        "reinforcement_learning_model": {
          "required": true
        },
        "track": {
          "required": true
        }
      }
    },
    "CreateAccountResources": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html",
      "description": "Grants permission to create resources needed by DeepRacer on behalf of the user",
      "accessLevel": "Write"
    },
    "CreateLeaderboardSubmission": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html",
      "description": "Grants permission to submit DeepRacer models to be evaluated for leaderboards",
      "accessLevel": "Write",
      "resourceTypes": {
        "leaderboard": {
          "required": true
        },
        "reinforcement_learning_model": {
          "required": true
        }
      }
    },
    "CreateReinforcementLearningModel": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html",
      "description": "Grants permission to create reinforcement learning models for DeepRacer",
      "accessLevel": "Write",
      "resourceTypes": {
        "track": {
          "required": true
        }
      }
    },
    "DeleteAccountResources": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html",
      "description": "Grants permission to delete resources created by DeepRacer on behalf of the user",
      "accessLevel": "Write"
    },
    "DeleteModel": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html",
      "description": "Grants permission to delete DeepRacer models",
      "accessLevel": "Write",
      "resourceTypes": {
        "reinforcement_learning_model": {
          "required": true
        }
      }
    },
    "GetAccountResources": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html",
      "description": "Grants permission to retrieve the resources created by DeepRacer on behalf of the user",
      "accessLevel": "Read"
    },
    "GetAlias": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html",
      "description": "Grants permission to retrieve the user's alias for submitting DeepRacer models to leaderboards",
      "accessLevel": "Read"
    },
    "GetEvaluation": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html",
      "description": "Grants permission to retrieve information about existing DeepRacer models' evaluation jobs",
      "accessLevel": "Read",
      "resourceTypes": {
        "evaluation_job": {
          "required": true
        }
      }
    },
    "GetLatestUserSubmission": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html",
      "description": "Grants permission to retrieve information about how the latest submitted DeepRacer model for a user performed on a leaderboard",
      "accessLevel": "Read",
      "resourceTypes": {
        "leaderboard": {
          "required": true
        }
      }
    },
    "GetLeaderboard": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html",
      "description": "Grants permission to retrieve information about leaderboards",
      "accessLevel": "Read",
      "resourceTypes": {
        "leaderboard": {
          "required": true
        }
      }
    },
    "GetModel": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html",
      "description": "Grants permission to retrieve information about existing DeepRacer models",
      "accessLevel": "Read",
      "resourceTypes": {
        "reinforcement_learning_model": {
          "required": true
        }
      }
    },
    "GetRankedUserSubmission": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html",
      "description": "Grants permission to retrieve information about the performance of a user's DeepRacer model that got placed on a leaderboard",
      "accessLevel": "Read",
      "resourceTypes": {
        "leaderboard": {
          "required": true
        }
      }
    },
    "GetTrack": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html",
      "description": "Grants permission to retrieve information about DeepRacer tracks",
      "accessLevel": "Read",
      "resourceTypes": {
        "track": {
          "required": true
        }
      }
    },
    "GetTrainingJob": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html",
      "description": "Grants permission to retrieve information about existing DeepRacer models' training job",
      "accessLevel": "Read",
      "resourceTypes": {
        "training_job": {
          "required": true
        }
      }
    },
    "ListEvaluations": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html",
      "description": "Grants permission to list DeepRacer models' evaluation jobs",
      "accessLevel": "List",
      "resourceTypes": {
        "reinforcement_learning_model": {
          "required": true
        }
      }
    },
    "ListLeaderboardSubmissions": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html",
      "description": "Grants permission to list all the submissions of DeepRacer models of a user on a leaderboard",
      "accessLevel": "List",
      "resourceTypes": {
        "leaderboard": {
          "required": true
        }
      }
    },
    "ListLeaderboards": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html",
      "description": "Grants permission to list all the available leaderboards",
      "accessLevel": "List"
    },
    "ListModels": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html",
      "description": "Grants permission to list all existing DeepRacer models",
      "accessLevel": "List"
    },
    "ListTracks": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html",
      "description": "Grants permission to list all DeepRacer tracks",
      "accessLevel": "List"
    },
    "ListTrainingJobs": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html",
      "description": "Grants permission to list DeepRacer models' training jobs",
      "accessLevel": "List",
      "resourceTypes": {
        "reinforcement_learning_model": {
          "required": true
        }
      }
    },
    "SetAlias": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html",
      "description": "Grants permission to set the user's alias for submitting DeepRacer models to leaderboards",
      "accessLevel": "Write"
    },
    "StartEvaluation": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html",
      "description": "Grants permission to evaluate DeepRacer models in a simulated environment",
      "accessLevel": "Write",
      "resourceTypes": {
        "reinforcement_learning_model": {
          "required": true
        },
        "track": {
          "required": true
        }
      }
    },
    "StopEvaluation": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html",
      "description": "Grants permission to stop DeepRacer model evaluations",
      "accessLevel": "Write",
      "resourceTypes": {
        "evaluation_job": {
          "required": true
        }
      }
    },
    "StopTrainingReinforcementLearningModel": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html",
      "description": "Grants permission to stop training DeepRacer models",
      "accessLevel": "Write",
      "resourceTypes": {
        "reinforcement_learning_model": {
          "required": true
        }
      }
    },
    "TestRewardFunction": {
      "url": "https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html#deepracer-train-models-define-reward-function",
      "description": "Grants permission to test reward functions for correctness",
      "accessLevel": "Write"
    }
  };
  public resourceTypes : ResourceTypes = {
    "reinforcement_learning_model": {
      "name": "reinforcement_learning_model",
      "arn": "arn:${Partition}:deepracer:${Region}:${Account}:model/reinforcement_learning/${ResourceId}",
      "conditionKeys": []
    },
    "training_job": {
      "name": "training_job",
      "arn": "arn:${Partition}:deepracer:${Region}:${Account}:training_job/${ResourceId}",
      "conditionKeys": []
    },
    "evaluation_job": {
      "name": "evaluation_job",
      "arn": "arn:${Partition}:deepracer:${Region}:${Account}: evaluation_job/${ResourceId}",
      "conditionKeys": []
    },
    "leaderboard_evaluation_job": {
      "name": "leaderboard_evaluation_job",
      "arn": "arn:${Partition}:deepracer:${Region}:${Account}:leaderboard_evaluation_job/${ResourceId}",
      "conditionKeys": []
    },
    "track": {
      "name": "track",
      "arn": "arn:${Partition}:deepracer:${Region}:${Account}:track/${ResourceId}",
      "conditionKeys": []
    },
    "leaderboard": {
      "name": "leaderboard",
      "arn": "arn:${Partition}:deepracer:${Region}:${Account}:leaderboard/${ResourceId}",
      "conditionKeys": []
    }
  };

  /**
   * Grants permission to clone existing DeepRacer models
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html#deepracer-clone-trained-model
   */
  public cloneReinforcementLearningModel () {
    this.add('deepracer:CloneReinforcementLearningModel');
    return this;
  }

  /**
   * Grants permission to create resources needed by DeepRacer on behalf of the user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public createAccountResources () {
    this.add('deepracer:CreateAccountResources');
    return this;
  }

  /**
   * Grants permission to submit DeepRacer models to be evaluated for leaderboards
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public createLeaderboardSubmission () {
    this.add('deepracer:CreateLeaderboardSubmission');
    return this;
  }

  /**
   * Grants permission to create reinforcement learning models for DeepRacer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public createReinforcementLearningModel () {
    this.add('deepracer:CreateReinforcementLearningModel');
    return this;
  }

  /**
   * Grants permission to delete resources created by DeepRacer on behalf of the user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public deleteAccountResources () {
    this.add('deepracer:DeleteAccountResources');
    return this;
  }

  /**
   * Grants permission to delete DeepRacer models
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public deleteModel () {
    this.add('deepracer:DeleteModel');
    return this;
  }

  /**
   * Grants permission to retrieve the resources created by DeepRacer on behalf of the user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public getAccountResources () {
    this.add('deepracer:GetAccountResources');
    return this;
  }

  /**
   * Grants permission to retrieve the user's alias for submitting DeepRacer models to leaderboards
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public getAlias () {
    this.add('deepracer:GetAlias');
    return this;
  }

  /**
   * Grants permission to retrieve information about existing DeepRacer models' evaluation jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html
   */
  public getEvaluation () {
    this.add('deepracer:GetEvaluation');
    return this;
  }

  /**
   * Grants permission to retrieve information about how the latest submitted DeepRacer model for a user performed on a leaderboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public getLatestUserSubmission () {
    this.add('deepracer:GetLatestUserSubmission');
    return this;
  }

  /**
   * Grants permission to retrieve information about leaderboards
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public getLeaderboard () {
    this.add('deepracer:GetLeaderboard');
    return this;
  }

  /**
   * Grants permission to retrieve information about existing DeepRacer models
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public getModel () {
    this.add('deepracer:GetModel');
    return this;
  }

  /**
   * Grants permission to retrieve information about the performance of a user's DeepRacer model that got placed on a leaderboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public getRankedUserSubmission () {
    this.add('deepracer:GetRankedUserSubmission');
    return this;
  }

  /**
   * Grants permission to retrieve information about DeepRacer tracks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html
   */
  public getTrack () {
    this.add('deepracer:GetTrack');
    return this;
  }

  /**
   * Grants permission to retrieve information about existing DeepRacer models' training job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public getTrainingJob () {
    this.add('deepracer:GetTrainingJob');
    return this;
  }

  /**
   * Grants permission to list DeepRacer models' evaluation jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html
   */
  public listEvaluations () {
    this.add('deepracer:ListEvaluations');
    return this;
  }

  /**
   * Grants permission to list all the submissions of DeepRacer models of a user on a leaderboard
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public listLeaderboardSubmissions () {
    this.add('deepracer:ListLeaderboardSubmissions');
    return this;
  }

  /**
   * Grants permission to list all the available leaderboards
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public listLeaderboards () {
    this.add('deepracer:ListLeaderboards');
    return this;
  }

  /**
   * Grants permission to list all existing DeepRacer models
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public listModels () {
    this.add('deepracer:ListModels');
    return this;
  }

  /**
   * Grants permission to list all DeepRacer tracks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html
   */
  public listTracks () {
    this.add('deepracer:ListTracks');
    return this;
  }

  /**
   * Grants permission to list DeepRacer models' training jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public listTrainingJobs () {
    this.add('deepracer:ListTrainingJobs');
    return this;
  }

  /**
   * Grants permission to set the user's alias for submitting DeepRacer models to leaderboards
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public setAlias () {
    this.add('deepracer:SetAlias');
    return this;
  }

  /**
   * Grants permission to evaluate DeepRacer models in a simulated environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html
   */
  public startEvaluation () {
    this.add('deepracer:StartEvaluation');
    return this;
  }

  /**
   * Grants permission to stop DeepRacer model evaluations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html
   */
  public stopEvaluation () {
    this.add('deepracer:StopEvaluation');
    return this;
  }

  /**
   * Grants permission to stop training DeepRacer models
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public stopTrainingReinforcementLearningModel () {
    this.add('deepracer:StopTrainingReinforcementLearningModel');
    return this;
  }

  /**
   * Grants permission to test reward functions for correctness
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html#deepracer-train-models-define-reward-function
   */
  public testRewardFunction () {
    this.add('deepracer:TestRewardFunction');
    return this;
  }
}
