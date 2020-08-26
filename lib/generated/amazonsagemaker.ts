import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [sagemaker](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sagemaker extends PolicyStatement {
  public servicePrefix = 'sagemaker';
  protected actionList: Actions = {
    "AddTags": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_AddTags.html",
      "description": "Adds or overwrites one or more tags for the specified Amazon SageMaker resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "app": {
          "required": false
        },
        "automl-job": {
          "required": false
        },
        "domain": {
          "required": false
        },
        "endpoint": {
          "required": false
        },
        "endpoint-config": {
          "required": false
        },
        "experiment": {
          "required": false
        },
        "experiment-trial": {
          "required": false
        },
        "experiment-trial-component": {
          "required": false
        },
        "flow-definition": {
          "required": false
        },
        "human-task-ui": {
          "required": false
        },
        "hyper-parameter-tuning-job": {
          "required": false
        },
        "labeling-job": {
          "required": false
        },
        "model": {
          "required": false
        },
        "monitoring-schedule": {
          "required": false
        },
        "notebook-instance": {
          "required": false
        },
        "processing-job": {
          "required": false
        },
        "training-job": {
          "required": false
        },
        "transform-job": {
          "required": false
        },
        "user-profile": {
          "required": false
        },
        "workteam": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "AssociateTrialComponent": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_AssociateTrialComponent.html",
      "description": "Associate a trial component with a trial.",
      "accessLevel": "Write",
      "resourceTypes": {
        "experiment-trial": {
          "required": true
        },
        "experiment-trial-component": {
          "required": true
        }
      }
    },
    "BatchGetMetrics": {
      "url": "",
      "description": "Retrieve metrics associated with SageMaker Resources such as Training Jobs. This API is not publicly exposed at this point, however admins can control this action",
      "accessLevel": "Read",
      "resourceTypes": {
        "training-job": {
          "required": true
        }
      }
    },
    "BatchPutMetrics": {
      "url": "",
      "description": "Publish metrics associated with a SageMaker Resource such as a Training Job. This API is not publicly exposed at this point, however admins can control this action",
      "accessLevel": "Write",
      "resourceTypes": {
        "training-job": {
          "required": true
        }
      }
    },
    "CreateAlgorithm": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateAlgorithm.html",
      "description": "Create an algorithm.",
      "accessLevel": "Write",
      "resourceTypes": {
        "algorithm": {
          "required": true
        }
      }
    },
    "CreateApp": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateApp.html",
      "description": "Grants permission to create an App for a SageMaker Studio UserProfile",
      "accessLevel": "Write",
      "resourceTypes": {
        "app": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "sagemaker:InstanceTypes"
      ]
    },
    "CreateAutoMLJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateAutoMLJob.html",
      "description": "Creates automl job.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "automl-job": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "sagemaker:InterContainerTrafficEncryption",
        "sagemaker:OutputKmsKey",
        "sagemaker:VolumeKmsKey",
        "sagemaker:VpcSecurityGroupIds",
        "sagemaker:VpcSubnets"
      ]
    },
    "CreateCodeRepository": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateCodeRepository.html",
      "description": "Create a code repository.",
      "accessLevel": "Write",
      "resourceTypes": {
        "code-repository": {
          "required": true
        }
      }
    },
    "CreateCompilationJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateCompilationJob.html",
      "description": "Create a compilation job.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "compilation-job": {
          "required": true
        }
      }
    },
    "CreateDomain": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateDomain.html",
      "description": "Grants permission to create a Domain for SageMaker Studio",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:CreateServiceLinkedRole",
        "iam:PassRole"
      ],
      "resourceTypes": {
        "domain": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "sagemaker:AppNetworkAccess",
        "sagemaker:InstanceTypes",
        "sagemaker:VpcSecurityGroupIds",
        "sagemaker:VpcSubnets",
        "sagemaker:DomainSharingOutputKmsKey",
        "sagemaker:HomeEfsFileSystemKmsKey"
      ]
    },
    "CreateEndpoint": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html",
      "description": "Creates an endpoint using the endpoint configuration specified in the request.",
      "accessLevel": "Write",
      "resourceTypes": {
        "endpoint": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateEndpointConfig": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpointConfig.html",
      "description": "Creates an endpoint configuration that can be deployed using Amazon SageMaker hosting services.",
      "accessLevel": "Write",
      "resourceTypes": {
        "endpoint-config": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "sagemaker:AcceleratorTypes",
        "sagemaker:InstanceTypes",
        "sagemaker:ModelArn",
        "sagemaker:VolumeKmsKey"
      ]
    },
    "CreateExperiment": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateExperiment.html",
      "description": "Create an experiment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "experiment": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateFlowDefinition": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateFlowDefinition.html",
      "description": "Creates a flow definition, which defines settings for a human workflow.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "flow-definition": {
          "required": true
        }
      },
      "conditions": [
        "sagemaker:WorkteamArn",
        "sagemaker:WorkteamType",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateHumanTaskUi": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateHumanTaskUi.html",
      "description": "Defines the settings you will use for the human review workflow user interface.",
      "accessLevel": "Write",
      "resourceTypes": {
        "human-task-ui": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateHyperParameterTuningJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateHyperParameterTuningJob.html",
      "description": "Creates hyper parameter tuning job that can be deployed using Amazon SageMaker.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "hyper-parameter-tuning-job": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "sagemaker:FileSystemAccessMode",
        "sagemaker:FileSystemDirectoryPath",
        "sagemaker:FileSystemId",
        "sagemaker:FileSystemType",
        "sagemaker:InstanceTypes",
        "sagemaker:InterContainerTrafficEncryption",
        "sagemaker:MaxRuntimeInSeconds",
        "sagemaker:NetworkIsolation",
        "sagemaker:OutputKmsKey",
        "sagemaker:VolumeKmsKey",
        "sagemaker:VpcSecurityGroupIds",
        "sagemaker:VpcSubnets"
      ]
    },
    "CreateLabelingJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateLabelingJob.html",
      "description": "Starts a labeling job. A labeling job takes unlabeled data in and produces labeled data as output, which can be used for training SageMaker models.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "labeling-job": {
          "required": true
        }
      },
      "conditions": [
        "sagemaker:WorkteamArn",
        "sagemaker:WorkteamType",
        "sagemaker:VolumeKmsKey",
        "sagemaker:OutputKmsKey",
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateModel": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModel.html",
      "description": "Creates a model in Amazon SageMaker. In the request, you specify a name for the model and describe one or more containers.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "model": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "sagemaker:NetworkIsolation",
        "sagemaker:VpcSecurityGroupIds",
        "sagemaker:VpcSubnets"
      ]
    },
    "CreateModelPackage": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModelPackage.html",
      "description": "Create a model package.",
      "accessLevel": "Write",
      "resourceTypes": {
        "model-package": {
          "required": true
        }
      }
    },
    "CreateMonitoringSchedule": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateMonitoringSchedule.html",
      "description": "Creates a monitoring schedule.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "monitoring-schedule": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "sagemaker:InstanceTypes",
        "sagemaker:MaxRuntimeInSeconds",
        "sagemaker:NetworkIsolation",
        "sagemaker:OutputKmsKey",
        "sagemaker:VolumeKmsKey",
        "sagemaker:VpcSecurityGroupIds",
        "sagemaker:VpcSubnets"
      ]
    },
    "CreateNotebookInstance": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateNotebookInstance.html",
      "description": "Creates an Amazon SageMaker notebook instance. A notebook instance is an Amazon EC2 instance running on a Jupyter Notebook.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "notebook-instance": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "sagemaker:AcceleratorTypes",
        "sagemaker:DirectInternetAccess",
        "sagemaker:InstanceTypes",
        "sagemaker:RootAccess",
        "sagemaker:VolumeKmsKey",
        "sagemaker:VpcSecurityGroupIds",
        "sagemaker:VpcSubnets"
      ]
    },
    "CreateNotebookInstanceLifecycleConfig": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateNotebookInstanceLifecycleConfig.html",
      "description": "Creates an notebook instance lifecycle configuration that can be deployed using Amazon SageMaker.",
      "accessLevel": "Write",
      "resourceTypes": {
        "notebook-instance-lifecycle-config": {
          "required": true
        }
      }
    },
    "CreatePresignedDomainUrl": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreatePresignedDomainUrl.html",
      "description": "Grants permission to return a URL that you can use from your browser to connect to the Domain as a specified UserProfile when AuthMode is 'IAM'",
      "accessLevel": "Write",
      "resourceTypes": {
        "user-profile": {
          "required": true
        }
      }
    },
    "CreatePresignedNotebookInstanceUrl": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreatePresignedNotebookInstanceUrl.html",
      "description": "Returns a URL that you can use from your browser to connect to the Notebook Instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "notebook-instance": {
          "required": true
        }
      }
    },
    "CreateProcessingJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateProcessingJob.html",
      "description": "Starts a processing job. After processing completes, Amazon SageMaker saves the resulting artifacts and other optional output to an Amazon S3 location that you specify.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "processing-job": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "sagemaker:InstanceTypes",
        "sagemaker:MaxRuntimeInSeconds",
        "sagemaker:NetworkIsolation",
        "sagemaker:OutputKmsKey",
        "sagemaker:VolumeKmsKey",
        "sagemaker:VpcSecurityGroupIds",
        "sagemaker:VpcSubnets",
        "sagemaker:InterContainerTrafficEncryption"
      ]
    },
    "CreateTrainingJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrainingJob.html",
      "description": "Starts a model training job. After training completes, Amazon SageMaker saves the resulting model artifacts and other optional output to an Amazon S3 location that you specify.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "training-job": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "sagemaker:FileSystemAccessMode",
        "sagemaker:FileSystemDirectoryPath",
        "sagemaker:FileSystemId",
        "sagemaker:FileSystemType",
        "sagemaker:InstanceTypes",
        "sagemaker:InterContainerTrafficEncryption",
        "sagemaker:MaxRuntimeInSeconds",
        "sagemaker:NetworkIsolation",
        "sagemaker:OutputKmsKey",
        "sagemaker:VolumeKmsKey",
        "sagemaker:VpcSecurityGroupIds",
        "sagemaker:VpcSubnets"
      ]
    },
    "CreateTransformJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTransformJob.html",
      "description": "Starts a transform job. After the results are obtained, Amazon SageMaker saves them to an Amazon S3 location that you specify.",
      "accessLevel": "Write",
      "resourceTypes": {
        "transform-job": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "sagemaker:InstanceTypes",
        "sagemaker:ModelArn",
        "sagemaker:OutputKmsKey",
        "sagemaker:VolumeKmsKey"
      ]
    },
    "CreateTrial": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrial.html",
      "description": "Create a trial.",
      "accessLevel": "Write",
      "resourceTypes": {
        "experiment-trial": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateTrialComponent": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrialComponent.html",
      "description": "Create a trial component.",
      "accessLevel": "Write",
      "resourceTypes": {
        "experiment-trial-component": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateUserProfile": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateUserProfile.html",
      "description": "Grants permission to create a UserProfile for a SageMaker Studio Domain",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "user-profile": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "sagemaker:VpcSecurityGroupIds",
        "sagemaker:InstanceTypes",
        "sagemaker:DomainSharingOutputKmsKey"
      ]
    },
    "CreateWorkforce": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateWorkforce.html",
      "description": "Create a workforce.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workforce": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateWorkteam": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateWorkteam.html",
      "description": "Create a workteam.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workteam": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteAlgorithm": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteAlgorithm.html",
      "description": "Deletes an algorithm.",
      "accessLevel": "Write",
      "resourceTypes": {
        "algorithm": {
          "required": true
        }
      }
    },
    "DeleteApp": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteApp.html",
      "description": "Grants permission to delete an App",
      "accessLevel": "Write",
      "resourceTypes": {
        "app": {
          "required": true
        }
      }
    },
    "DeleteCodeRepository": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteCodeRepository.html",
      "description": "Deletes a code repository.",
      "accessLevel": "Write",
      "resourceTypes": {
        "code-repository": {
          "required": true
        }
      }
    },
    "DeleteDomain": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteDomain.html",
      "description": "Grants permission to delete a Domain",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DeleteEndpoint": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteEndpoint.html",
      "description": "Deletes an endpoint. Amazon SageMaker frees up all the resources that were deployed when the endpoint was created.",
      "accessLevel": "Write",
      "resourceTypes": {
        "endpoint": {
          "required": true
        }
      }
    },
    "DeleteEndpointConfig": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteEndpointConfig.html",
      "description": "Deletes the endpoint configuration created using the CreateEndpointConfig API. The DeleteEndpointConfig API deletes only the specified configuration. It does not delete any endpoints created using the configuration.",
      "accessLevel": "Write",
      "resourceTypes": {
        "endpoint-config": {
          "required": true
        }
      }
    },
    "DeleteExperiment": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteExperiment.html",
      "description": "Deletes an experiment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "experiment": {
          "required": true
        }
      }
    },
    "DeleteFlowDefinition": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteFlowDefinition.html",
      "description": "Deltes the specified flow definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "flow-definition": {
          "required": true
        }
      }
    },
    "DeleteHumanLoop": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteHumanLoop.html",
      "description": "Deletes the specified human loop.",
      "accessLevel": "Write",
      "resourceTypes": {
        "human-loop": {
          "required": true
        }
      }
    },
    "DeleteModel": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModel.html",
      "description": "Deletes a model created using the CreateModel API. The DeleteModel API deletes only the model entry in Amazon SageMaker that you created by calling the CreateModel API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model.",
      "accessLevel": "Write",
      "resourceTypes": {
        "model": {
          "required": true
        }
      }
    },
    "DeleteModelPackage": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModelPackage.html",
      "description": "Deletes a model package.",
      "accessLevel": "Write",
      "resourceTypes": {
        "model-package": {
          "required": true
        }
      }
    },
    "DeleteMonitoringSchedule": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteMonitoringSchedule.html",
      "description": "Deletes a monitoring schedule. Amazon SageMaker will no longer run the scheduled monitoring.",
      "accessLevel": "Write",
      "resourceTypes": {
        "monitoring-schedule": {
          "required": true
        }
      }
    },
    "DeleteNotebookInstance": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteNotebookInstance.html",
      "description": "Deletes an Amazon SageMaker notebook instance. Before you can delete a notebook instance, you must call the StopNotebookInstance API.",
      "accessLevel": "Write",
      "resourceTypes": {
        "notebook-instance": {
          "required": true
        }
      }
    },
    "DeleteNotebookInstanceLifecycleConfig": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteNotebookInstanceLifecycleConfig.html",
      "description": "Deletes an notebook instance lifecycle configuration that can be deployed using Amazon SageMaker.",
      "accessLevel": "Write",
      "resourceTypes": {
        "notebook-instance-lifecycle-config": {
          "required": true
        }
      }
    },
    "DeleteTags": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteTags.html",
      "description": "Deletes the specified set of tags from an Amazon SageMaker resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "app": {
          "required": false
        },
        "automl-job": {
          "required": false
        },
        "compilation-job": {
          "required": false
        },
        "domain": {
          "required": false
        },
        "endpoint": {
          "required": false
        },
        "endpoint-config": {
          "required": false
        },
        "experiment": {
          "required": false
        },
        "experiment-trial": {
          "required": false
        },
        "experiment-trial-component": {
          "required": false
        },
        "flow-definition": {
          "required": false
        },
        "human-task-ui": {
          "required": false
        },
        "hyper-parameter-tuning-job": {
          "required": false
        },
        "labeling-job": {
          "required": false
        },
        "model": {
          "required": false
        },
        "monitoring-schedule": {
          "required": false
        },
        "notebook-instance": {
          "required": false
        },
        "processing-job": {
          "required": false
        },
        "training-job": {
          "required": false
        },
        "transform-job": {
          "required": false
        },
        "user-profile": {
          "required": false
        },
        "workteam": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "DeleteTrial": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteTrial.html",
      "description": "Deletes a trial.",
      "accessLevel": "Write",
      "resourceTypes": {
        "experiment-trial": {
          "required": true
        }
      }
    },
    "DeleteTrialComponent": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteTrialComponent.html",
      "description": "Deletes a trial component.",
      "accessLevel": "Write",
      "resourceTypes": {
        "experiment-trial-component": {
          "required": true
        }
      }
    },
    "DeleteUserProfile": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteUserProfile.html",
      "description": "Grants permission to delete a UserProfile",
      "accessLevel": "Write",
      "resourceTypes": {
        "user-profile": {
          "required": true
        }
      }
    },
    "DeleteWorkforce": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteWorkforce.html",
      "description": "Deletes a workforce.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workforce": {
          "required": true
        }
      }
    },
    "DeleteWorkteam": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteWorkteam.html",
      "description": "Deletes a workteam.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workteam": {
          "required": true
        }
      }
    },
    "DescribeAlgorithm": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeAlgorithm.html",
      "description": "Returns information about an algorithm.",
      "accessLevel": "Read",
      "resourceTypes": {
        "algorithm": {
          "required": true
        }
      }
    },
    "DescribeApp": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeApp.html",
      "description": "Grants permission to describe an App",
      "accessLevel": "Read",
      "resourceTypes": {
        "app": {
          "required": true
        }
      }
    },
    "DescribeAutoMLJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeAutoMLJob.html",
      "description": "Describes an automl job that was created via CreateAutoMLJob API.",
      "accessLevel": "Read",
      "resourceTypes": {
        "automl-job": {
          "required": true
        }
      }
    },
    "DescribeCodeRepository": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeCodeRepository.html",
      "description": "Returns information about a code repository.",
      "accessLevel": "Read",
      "resourceTypes": {
        "code-repository": {
          "required": true
        }
      }
    },
    "DescribeCompilationJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeCompilationJob.html",
      "description": "Returns information about a compilation job.",
      "accessLevel": "Read",
      "resourceTypes": {
        "compilation-job": {
          "required": true
        }
      }
    },
    "DescribeDomain": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeDomain.html",
      "description": "Grants permission to describe a Domain",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DescribeEndpoint": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpoint.html",
      "description": "Returns the description of an endpoint.",
      "accessLevel": "Read",
      "resourceTypes": {
        "endpoint": {
          "required": true
        }
      }
    },
    "DescribeEndpointConfig": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpointConfig.html",
      "description": "Returns the description of an endpoint configuration, which was created using the CreateEndpointConfig API.",
      "accessLevel": "Read",
      "resourceTypes": {
        "endpoint-config": {
          "required": true
        }
      }
    },
    "DescribeExperiment": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeExperiment.html",
      "description": "Returns information about an experiment.",
      "accessLevel": "Read",
      "resourceTypes": {
        "experiment": {
          "required": true
        }
      }
    },
    "DescribeFlowDefinition": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeFlowDefinition.html",
      "description": "Returns detailed information about the specified flow definition.",
      "accessLevel": "Read",
      "resourceTypes": {
        "flow-definition": {
          "required": true
        }
      }
    },
    "DescribeHumanLoop": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeHumanLoop.html",
      "description": "Returns detailed information about the specified human loop.",
      "accessLevel": "Read",
      "resourceTypes": {
        "human-loop": {
          "required": true
        }
      }
    },
    "DescribeHumanTaskUi": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeHumanTaskUi.html",
      "description": "Returns detailed information about the specified human review workflow user interface.",
      "accessLevel": "Read",
      "resourceTypes": {
        "human-task-ui": {
          "required": true
        }
      }
    },
    "DescribeHyperParameterTuningJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeHyperParameterTuningJob.html",
      "description": "Describes a hyper parameter tuning job that was created via CreateHyperParameterTuningJob API.",
      "accessLevel": "Read",
      "resourceTypes": {
        "hyper-parameter-tuning-job": {
          "required": true
        }
      }
    },
    "DescribeLabelingJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeLabelingJob.html",
      "description": "Returns information about a labeling job.",
      "accessLevel": "Read",
      "resourceTypes": {
        "labeling-job": {
          "required": true
        }
      }
    },
    "DescribeModel": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeModel.html",
      "description": "Describes a model that you created using the CreateModel API.",
      "accessLevel": "Read",
      "resourceTypes": {
        "model": {
          "required": true
        }
      }
    },
    "DescribeModelPackage": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeModelPackage.html",
      "description": "Returns information about a model package.",
      "accessLevel": "Read",
      "resourceTypes": {
        "model-package": {
          "required": true
        }
      }
    },
    "DescribeMonitoringSchedule": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeMonitoringSchedule.html",
      "description": "Returns information about a monitoring schedule.",
      "accessLevel": "Read",
      "resourceTypes": {
        "monitoring-schedule": {
          "required": true
        }
      }
    },
    "DescribeNotebookInstance": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeNotebookInstance.html",
      "description": "Returns information about a notebook instance.",
      "accessLevel": "Read",
      "resourceTypes": {
        "notebook-instance": {
          "required": true
        }
      }
    },
    "DescribeNotebookInstanceLifecycleConfig": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeNotebookInstanceLifecycleConfig.html",
      "description": "Describes an notebook instance lifecycle configuration that was created via CreateNotebookInstanceLifecycleConfig API.",
      "accessLevel": "Read",
      "resourceTypes": {
        "notebook-instance-lifecycle-config": {
          "required": true
        }
      }
    },
    "DescribeProcessingJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeProcessingJob.html",
      "description": "Returns information about a processing job.",
      "accessLevel": "Read",
      "resourceTypes": {
        "processing-job": {
          "required": true
        }
      }
    },
    "DescribeSubscribedWorkteam": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeSubscribedWorkteam.html",
      "description": "Returns information about a subscribed workteam.",
      "accessLevel": "Read",
      "resourceTypes": {
        "workteam": {
          "required": true
        }
      }
    },
    "DescribeTrainingJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTrainingJob.html",
      "description": "Returns information about a training job.",
      "accessLevel": "Read",
      "resourceTypes": {
        "training-job": {
          "required": true
        }
      }
    },
    "DescribeTransformJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTransformJob.html",
      "description": "Returns information about a transform job.",
      "accessLevel": "Read",
      "resourceTypes": {
        "transform-job": {
          "required": true
        }
      }
    },
    "DescribeTrial": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTrial.html",
      "description": "Returns information about a trial.",
      "accessLevel": "Read",
      "resourceTypes": {
        "experiment-trial": {
          "required": true
        }
      }
    },
    "DescribeTrialComponent": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTrialComponent.html",
      "description": "Returns information about a trial component.",
      "accessLevel": "Read",
      "resourceTypes": {
        "experiment-trial-component": {
          "required": true
        }
      }
    },
    "DescribeUserProfile": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeUserProfile.html",
      "description": "Grants permission to describe a UserProfile",
      "accessLevel": "Read",
      "resourceTypes": {
        "user-profile": {
          "required": true
        }
      }
    },
    "DescribeWorkforce": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeWorkforce.html",
      "description": "Returns information about a workforce.",
      "accessLevel": "Read",
      "resourceTypes": {
        "workforce": {
          "required": true
        }
      }
    },
    "DescribeWorkteam": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeWorkteam.html",
      "description": "Returns information about a workteam.",
      "accessLevel": "Read",
      "resourceTypes": {
        "workteam": {
          "required": true
        }
      }
    },
    "DisassociateTrialComponent": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_DisassociateTrialComponent.html",
      "description": "Disassociate a trial component with a trial.",
      "accessLevel": "Write",
      "resourceTypes": {
        "experiment-trial": {
          "required": true
        },
        "experiment-trial-component": {
          "required": true
        },
        "processing-job": {
          "required": true
        }
      }
    },
    "GetSearchSuggestions": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_GetSearchSuggestions.html",
      "description": "Get search suggestions when provided with keyword.",
      "accessLevel": "Read",
      "resourceTypes": {
        "training-job": {
          "required": true
        }
      }
    },
    "InvokeEndpoint": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_InvokeEndpoint.html",
      "description": "After you deploy a model into production using Amazon SageMaker hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint.",
      "accessLevel": "Read",
      "resourceTypes": {
        "endpoint": {
          "required": true
        }
      },
      "conditions": [
        "sagemaker:TargetModel"
      ]
    },
    "ListAlgorithms": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListAlgorithms.html",
      "description": "Lists algorithms.",
      "accessLevel": "List"
    },
    "ListApps": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListApps.html",
      "description": "Grants permission to list the Apps in your account",
      "accessLevel": "List"
    },
    "ListAutoMLJobs": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListAutoMLJobs.html",
      "description": "Lists automl jobs created via the CreateAutoMLJob.",
      "accessLevel": "List"
    },
    "ListCandidatesForAutoMLJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListCandidatesForAutoMLJob.html",
      "description": "Lists candidates for automl job created via the CreateAutoMLJob.",
      "accessLevel": "List"
    },
    "ListCodeRepositories": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListCodeRepositories.html",
      "description": "Lists code repositories.",
      "accessLevel": "List"
    },
    "ListCompilationJobs": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListCompilationJobs.html",
      "description": "Lists compilation jobs.",
      "accessLevel": "List"
    },
    "ListDomains": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListDomains.html",
      "description": "Grants permission to list the Domains in your account",
      "accessLevel": "List"
    },
    "ListEndpointConfigs": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListEndpointConfigs.html",
      "description": "Lists endpoint configurations.",
      "accessLevel": "List"
    },
    "ListEndpoints": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListEndpoints.html",
      "description": "Lists endpoints.",
      "accessLevel": "List"
    },
    "ListExperiments": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListExperiments.html",
      "description": "Lists experiments.",
      "accessLevel": "List"
    },
    "ListFlowDefinitions": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListFlowDefinitions.html",
      "description": "Returns summary information about flow definitions, given the specified parameters.",
      "accessLevel": "List"
    },
    "ListHumanLoops": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListHumanLoops.html",
      "description": "Returns summary information about human loops, given the specified parameters.",
      "accessLevel": "List"
    },
    "ListHumanTaskUis": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListHumanTaskUis.html",
      "description": "Returns summary information about human review workflow user interfaces, given the specified parameters.",
      "accessLevel": "List"
    },
    "ListHyperParameterTuningJobs": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListHyperParameterTuningJobs.html",
      "description": "Lists hyper parameter tuning jobs that was created using Amazon SageMaker.",
      "accessLevel": "List"
    },
    "ListLabelingJobs": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListLabelingJobs.html",
      "description": "Lists labeling jobs.",
      "accessLevel": "List"
    },
    "ListLabelingJobsForWorkteam": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListLabelingJobs.html",
      "description": "Lists labeling jobs for workteam.",
      "accessLevel": "List",
      "resourceTypes": {
        "workteam": {
          "required": true
        }
      }
    },
    "ListModelPackages": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModelPackages.html",
      "description": "Lists model packages.",
      "accessLevel": "List"
    },
    "ListModels": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModels.html",
      "description": "Lists the models created with the CreateModel API.",
      "accessLevel": "List"
    },
    "ListMonitoringExecutions": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListMonitoringExecutions.html",
      "description": "Lists monitoring executions.",
      "accessLevel": "List"
    },
    "ListMonitoringSchedules": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListMonitoringSchedules.html",
      "description": "Lists monitoring schedules.",
      "accessLevel": "List"
    },
    "ListNotebookInstanceLifecycleConfigs": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListNotebookInstanceLifecycleConfigs.html",
      "description": "Lists notebook instance lifecycle configurations that can be deployed using Amazon SageMaker.",
      "accessLevel": "List"
    },
    "ListNotebookInstances": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListNotebookInstances.html",
      "description": "Returns a list of the Amazon SageMaker notebook instances in the requester's account in an AWS Region.",
      "accessLevel": "List"
    },
    "ListProcessingJobs": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListProcessingJobs.html",
      "description": "Lists processing jobs.",
      "accessLevel": "List"
    },
    "ListSubscribedWorkteams": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListSubscribedWorkteams.html",
      "description": "Lists subscribed workteams.",
      "accessLevel": "List"
    },
    "ListTags": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTags.html",
      "description": "Returns the tag set associated with the specified resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "app": {
          "required": false
        },
        "automl-job": {
          "required": false
        },
        "domain": {
          "required": false
        },
        "endpoint": {
          "required": false
        },
        "endpoint-config": {
          "required": false
        },
        "experiment": {
          "required": false
        },
        "experiment-trial": {
          "required": false
        },
        "experiment-trial-component": {
          "required": false
        },
        "flow-definition": {
          "required": false
        },
        "human-task-ui": {
          "required": false
        },
        "hyper-parameter-tuning-job": {
          "required": false
        },
        "labeling-job": {
          "required": false
        },
        "model": {
          "required": false
        },
        "monitoring-schedule": {
          "required": false
        },
        "notebook-instance": {
          "required": false
        },
        "training-job": {
          "required": false
        },
        "transform-job": {
          "required": false
        },
        "user-profile": {
          "required": false
        },
        "workteam": {
          "required": false
        }
      }
    },
    "ListTrainingJobs": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTrainingJobs.html",
      "description": "Lists training jobs.",
      "accessLevel": "List"
    },
    "ListTrainingJobsForHyperParameterTuningJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ ListTrainingJobsForHyperParameterTuningJob.html",
      "description": "Lists training jobs for a hyper parameter tuning job that was created using Amazon SageMaker.",
      "accessLevel": "List",
      "resourceTypes": {
        "hyper-parameter-tuning-job": {
          "required": true
        }
      }
    },
    "ListTransformJobs": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTransformJobs.html",
      "description": "Lists transform jobs.",
      "accessLevel": "List"
    },
    "ListTrialComponents": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTrialComponents.html",
      "description": "Lists trial components.",
      "accessLevel": "List"
    },
    "ListTrials": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTrials.html",
      "description": "Lists trials.",
      "accessLevel": "List"
    },
    "ListUserProfiles": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListUserProfiles.html",
      "description": "Grants permission to list the UserProfiles in your account",
      "accessLevel": "List"
    },
    "ListWorkforces": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListWorkforces.html",
      "description": "Lists workforces.",
      "accessLevel": "List"
    },
    "ListWorkteams": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListWorkteams.html",
      "description": "Lists workteams.",
      "accessLevel": "List"
    },
    "RenderUiTemplate": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_RenderUiTemplate.html",
      "description": "Render a UI template used for a human annotation task.",
      "accessLevel": "Read",
      "dependentActions": [
        "iam:PassRole"
      ]
    },
    "Search": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_Search.html",
      "description": "Search for a training job.",
      "accessLevel": "Read",
      "resourceTypes": {
        "training-job": {
          "required": true
        }
      }
    },
    "StartHumanLoop": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_StartHumanLoop.html",
      "description": "Starts a human loop.",
      "accessLevel": "Write",
      "resourceTypes": {
        "flow-definition": {
          "required": true
        }
      }
    },
    "StartMonitoringSchedule": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_StartMonitoringSchedule.html",
      "description": "Starts a monitoring schedule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "monitoring-schedule": {
          "required": true
        }
      }
    },
    "StartNotebookInstance": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_StartNotebookInstance.html",
      "description": "Launches an EC2 instance with the latest version of the libraries and attaches your EBS volume.",
      "accessLevel": "Write",
      "resourceTypes": {
        "notebook-instance": {
          "required": true
        }
      }
    },
    "StopAutoMLJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopAutoMLJob.html",
      "description": "Stops a running automl job created via the CreateAutoMLJob.",
      "accessLevel": "Write",
      "resourceTypes": {
        "automl-job": {
          "required": true
        }
      }
    },
    "StopCompilationJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopCompilationJob.html",
      "description": "Stops a compilation job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "compilation-job": {
          "required": true
        }
      }
    },
    "StopHumanLoop": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopHumanLoop.html",
      "description": "Stops the specified human loop.",
      "accessLevel": "Write",
      "resourceTypes": {
        "human-loop": {
          "required": true
        }
      }
    },
    "StopHyperParameterTuningJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopHyperParameterTuningJob.html",
      "description": "Stops a running hyper parameter tuning job create via the CreateHyperParameterTuningJob.",
      "accessLevel": "Write",
      "resourceTypes": {
        "hyper-parameter-tuning-job": {
          "required": true
        }
      }
    },
    "StopLabelingJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopLabelingJob.html",
      "description": "Stops a labeling job. Any labels already generated will be exported before stopping.",
      "accessLevel": "Write",
      "resourceTypes": {
        "labeling-job": {
          "required": true
        }
      }
    },
    "StopMonitoringSchedule": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopMonitoringSchedule.html",
      "description": "Stops a monitoring schedule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "monitoring-schedule": {
          "required": true
        }
      }
    },
    "StopNotebookInstance": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopNotebookInstance.html",
      "description": "Terminates the EC2 instance. Before terminating the instance, Amazon SageMaker disconnects the EBS volume from it. Amazon SageMaker preserves the EBS volume.",
      "accessLevel": "Write",
      "resourceTypes": {
        "notebook-instance": {
          "required": true
        }
      }
    },
    "StopProcessingJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopProcessingJob.html",
      "description": "Stops a processing job. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds.",
      "accessLevel": "Write",
      "resourceTypes": {
        "processing-job": {
          "required": true
        }
      }
    },
    "StopTrainingJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopTrainingJob.html",
      "description": "Stops a training job. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds.",
      "accessLevel": "Write",
      "resourceTypes": {
        "training-job": {
          "required": true
        }
      }
    },
    "StopTransformJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopTransformJob.html",
      "description": "Stops a transform job. When Amazon SageMaker receives a StopTransformJob request, the status of the job changes to Stopping. After Amazon SageMaker stops the job, the status is set to Stopped",
      "accessLevel": "Write",
      "resourceTypes": {
        "transform-job": {
          "required": true
        }
      }
    },
    "UpdateCodeRepository": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateCodeRepository.html",
      "description": "Updates a code repository.",
      "accessLevel": "Write",
      "resourceTypes": {
        "code-repository": {
          "required": true
        }
      }
    },
    "UpdateDomain": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateDomain.html",
      "description": "Grants permission to update a Domain",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      },
      "conditions": [
        "sagemaker:VpcSecurityGroupIds",
        "sagemaker:InstanceTypes",
        "sagemaker:DomainSharingOutputKmsKey"
      ]
    },
    "UpdateEndpoint": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateEndpoint.html",
      "description": "Updates an endpoint to use the endpoint configuration specified in the request.",
      "accessLevel": "Write",
      "resourceTypes": {
        "endpoint": {
          "required": true
        }
      }
    },
    "UpdateEndpointWeightsAndCapacities": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateEndpointWeightsAndCapacities.html",
      "description": "Updates variant weight, capacity, or both of one or more variants associated with an endpoint.",
      "accessLevel": "Write",
      "resourceTypes": {
        "endpoint": {
          "required": true
        }
      }
    },
    "UpdateExperiment": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateExperiment.html",
      "description": "Updates an experiment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "experiment": {
          "required": true
        }
      }
    },
    "UpdateMonitoringSchedule": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateMonitoringSchedule.html",
      "description": "Updates a monitoring schedule.",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "monitoring-schedule": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "sagemaker:InstanceTypes",
        "sagemaker:MaxRuntimeInSeconds",
        "sagemaker:NetworkIsolation",
        "sagemaker:OutputKmsKey",
        "sagemaker:VolumeKmsKey",
        "sagemaker:VpcSecurityGroupIds",
        "sagemaker:VpcSubnets"
      ]
    },
    "UpdateNotebookInstance": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateNotebookInstance.html",
      "description": "Updates a notebook instance. Notebook instance updates include upgrading or downgrading the EC2 instance used for your notebook instance to accommodate changes in your workload requirements. You can also update the VPC security groups.",
      "accessLevel": "Write",
      "resourceTypes": {
        "notebook-instance": {
          "required": true
        }
      },
      "conditions": [
        "sagemaker:AcceleratorTypes",
        "sagemaker:InstanceTypes",
        "sagemaker:RootAccess"
      ]
    },
    "UpdateNotebookInstanceLifecycleConfig": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_ UpdateNotebookInstanceLifecycleConfig.html",
      "description": "Updates a notebook instance lifecycle configuration created with the CreateNotebookInstanceLifecycleConfig API.",
      "accessLevel": "Write",
      "resourceTypes": {
        "notebook-instance-lifecycle-config": {
          "required": true
        }
      }
    },
    "UpdateTrial": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateTrial.html",
      "description": "Updates a trial.",
      "accessLevel": "Write",
      "resourceTypes": {
        "experiment-trial": {
          "required": true
        }
      }
    },
    "UpdateTrialComponent": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateTrialComponent.html",
      "description": "Updates a trial component.",
      "accessLevel": "Write",
      "resourceTypes": {
        "experiment-trial-component": {
          "required": true
        }
      }
    },
    "UpdateUserProfile": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateUserProfile.html",
      "description": "Grants permission to update a UserProfile",
      "accessLevel": "Write",
      "resourceTypes": {
        "user-profile": {
          "required": true
        }
      },
      "conditions": [
        "sagemaker:InstanceTypes",
        "sagemaker:VpcSecurityGroupIds",
        "sagemaker:InstanceTypes",
        "sagemaker:DomainSharingOutputKmsKey"
      ]
    },
    "UpdateWorkforce": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateWorkforce.html",
      "description": "Updates a workforce.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workforce": {
          "required": true
        }
      }
    },
    "UpdateWorkteam": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateWorkteam.html",
      "description": "Updates a workteam.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workteam": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "human-loop": {
      "name": "human-loop",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:human-loop/${HumanLoopName}",
      "conditionKeys": []
    },
    "flow-definition": {
      "name": "flow-definition",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:flow-definition/${FlowDefinitionName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "human-task-ui": {
      "name": "human-task-ui",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:human-task-ui/${HumanTaskUiName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "labeling-job": {
      "name": "labeling-job",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:labeling-job/${LabelingJobName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "workteam": {
      "name": "workteam",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:workteam/${WorkteamName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "workforce": {
      "name": "workforce",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:workforce/${WorkforceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "domain": {
      "name": "domain",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:domain/${DomainId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "user-profile": {
      "name": "user-profile",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:user-profile/${DomainId}/${UserProfileName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "app": {
      "name": "app",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:app/${DomainId}/${UserProfileName}/${AppType}/${AppName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "notebook-instance": {
      "name": "notebook-instance",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:notebook-instance/${NotebookInstanceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "notebook-instance-lifecycle-config": {
      "name": "notebook-instance-lifecycle-config",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:notebook-instance-lifecycle-config/${NotebookInstanceLifecycleConfigName}",
      "conditionKeys": []
    },
    "code-repository": {
      "name": "code-repository",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:code-repository/${CodeRepositoryName}",
      "conditionKeys": []
    },
    "algorithm": {
      "name": "algorithm",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:algorithm/${AlgorithmName}",
      "conditionKeys": []
    },
    "training-job": {
      "name": "training-job",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:training-job/${TrainingJobName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "processing-job": {
      "name": "processing-job",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:processing-job/${ProcessingJobName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "hyper-parameter-tuning-job": {
      "name": "hyper-parameter-tuning-job",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:hyper-parameter-tuning-job/${HyperParameterTuningJobName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "model-package": {
      "name": "model-package",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:model-package/${ModelPackageName}",
      "conditionKeys": []
    },
    "model": {
      "name": "model",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:model/${ModelName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "endpoint-config": {
      "name": "endpoint-config",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:endpoint-config/${EndpointConfigName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "endpoint": {
      "name": "endpoint",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:endpoint/${EndpointName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "transform-job": {
      "name": "transform-job",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:transform-job/${TransformJobName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "compilation-job": {
      "name": "compilation-job",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:compilation-job/${CompilationJobName}",
      "conditionKeys": []
    },
    "automl-job": {
      "name": "automl-job",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:automl-job/${AutoMLJobJobName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "monitoring-schedule": {
      "name": "monitoring-schedule",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:monitoring-schedule/${MonitoringScheduleName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "experiment": {
      "name": "experiment",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:experiment/${ExperimentName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "experiment-trial": {
      "name": "experiment-trial",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:experiment-trial/${TrialName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    },
    "experiment-trial-component": {
      "name": "experiment-trial-component",
      "url": "",
      "arn": "arn:${Partition}:sagemaker:${Region}:${Account}:experiment-trial-component/${TrialComponentName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "sagemaker:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [sagemaker](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds or overwrites one or more tags for the specified Amazon SageMaker resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_AddTags.html
   */
  public toAddTags() {
    this.add('sagemaker:AddTags');
    return this;
  }

  /**
   * Associate a trial component with a trial.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_AssociateTrialComponent.html
   */
  public toAssociateTrialComponent() {
    this.add('sagemaker:AssociateTrialComponent');
    return this;
  }

  /**
   * Retrieve metrics associated with SageMaker Resources such as Training Jobs. This API is not publicly exposed at this point, however admins can control this action
   *
   * Access Level: Read
   */
  public toBatchGetMetrics() {
    this.add('sagemaker:BatchGetMetrics');
    return this;
  }

  /**
   * Publish metrics associated with a SageMaker Resource such as a Training Job. This API is not publicly exposed at this point, however admins can control this action
   *
   * Access Level: Write
   */
  public toBatchPutMetrics() {
    this.add('sagemaker:BatchPutMetrics');
    return this;
  }

  /**
   * Create an algorithm.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateAlgorithm.html
   */
  public toCreateAlgorithm() {
    this.add('sagemaker:CreateAlgorithm');
    return this;
  }

  /**
   * Grants permission to create an App for a SageMaker Studio UserProfile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceTypes()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateApp.html
   */
  public toCreateApp() {
    this.add('sagemaker:CreateApp');
    return this;
  }

  /**
   * Creates automl job.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInterContainerTrafficEncryption()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateAutoMLJob.html
   */
  public toCreateAutoMLJob() {
    this.add('sagemaker:CreateAutoMLJob');
    return this;
  }

  /**
   * Create a code repository.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateCodeRepository.html
   */
  public toCreateCodeRepository() {
    this.add('sagemaker:CreateCodeRepository');
    return this;
  }

  /**
   * Create a compilation job.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateCompilationJob.html
   */
  public toCreateCompilationJob() {
    this.add('sagemaker:CreateCompilationJob');
    return this;
  }

  /**
   * Grants permission to create a Domain for SageMaker Studio
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAppNetworkAccess()
   * - .ifInstanceTypes()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   * - .ifDomainSharingOutputKmsKey()
   * - .ifHomeEfsFileSystemKmsKey()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateDomain.html
   */
  public toCreateDomain() {
    this.add('sagemaker:CreateDomain');
    return this;
  }

  /**
   * Creates an endpoint using the endpoint configuration specified in the request.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html
   */
  public toCreateEndpoint() {
    this.add('sagemaker:CreateEndpoint');
    return this;
  }

  /**
   * Creates an endpoint configuration that can be deployed using Amazon SageMaker hosting services.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAcceleratorTypes()
   * - .ifInstanceTypes()
   * - .ifModelArn()
   * - .ifVolumeKmsKey()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpointConfig.html
   */
  public toCreateEndpointConfig() {
    this.add('sagemaker:CreateEndpointConfig');
    return this;
  }

  /**
   * Create an experiment.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateExperiment.html
   */
  public toCreateExperiment() {
    this.add('sagemaker:CreateExperiment');
    return this;
  }

  /**
   * Creates a flow definition, which defines settings for a human workflow.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifWorkteamArn()
   * - .ifWorkteamType()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateFlowDefinition.html
   */
  public toCreateFlowDefinition() {
    this.add('sagemaker:CreateFlowDefinition');
    return this;
  }

  /**
   * Defines the settings you will use for the human review workflow user interface.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateHumanTaskUi.html
   */
  public toCreateHumanTaskUi() {
    this.add('sagemaker:CreateHumanTaskUi');
    return this;
  }

  /**
   * Creates hyper parameter tuning job that can be deployed using Amazon SageMaker.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifFileSystemAccessMode()
   * - .ifFileSystemDirectoryPath()
   * - .ifFileSystemId()
   * - .ifFileSystemType()
   * - .ifInstanceTypes()
   * - .ifInterContainerTrafficEncryption()
   * - .ifMaxRuntimeInSeconds()
   * - .ifNetworkIsolation()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateHyperParameterTuningJob.html
   */
  public toCreateHyperParameterTuningJob() {
    this.add('sagemaker:CreateHyperParameterTuningJob');
    return this;
  }

  /**
   * Starts a labeling job. A labeling job takes unlabeled data in and produces labeled data as output, which can be used for training SageMaker models.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifWorkteamArn()
   * - .ifWorkteamType()
   * - .ifVolumeKmsKey()
   * - .ifOutputKmsKey()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateLabelingJob.html
   */
  public toCreateLabelingJob() {
    this.add('sagemaker:CreateLabelingJob');
    return this;
  }

  /**
   * Creates a model in Amazon SageMaker. In the request, you specify a name for the model and describe one or more containers.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifNetworkIsolation()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModel.html
   */
  public toCreateModel() {
    this.add('sagemaker:CreateModel');
    return this;
  }

  /**
   * Create a model package.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModelPackage.html
   */
  public toCreateModelPackage() {
    this.add('sagemaker:CreateModelPackage');
    return this;
  }

  /**
   * Creates a monitoring schedule.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceTypes()
   * - .ifMaxRuntimeInSeconds()
   * - .ifNetworkIsolation()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateMonitoringSchedule.html
   */
  public toCreateMonitoringSchedule() {
    this.add('sagemaker:CreateMonitoringSchedule');
    return this;
  }

  /**
   * Creates an Amazon SageMaker notebook instance. A notebook instance is an Amazon EC2 instance running on a Jupyter Notebook.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAcceleratorTypes()
   * - .ifDirectInternetAccess()
   * - .ifInstanceTypes()
   * - .ifRootAccess()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateNotebookInstance.html
   */
  public toCreateNotebookInstance() {
    this.add('sagemaker:CreateNotebookInstance');
    return this;
  }

  /**
   * Creates an notebook instance lifecycle configuration that can be deployed using Amazon SageMaker.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateNotebookInstanceLifecycleConfig.html
   */
  public toCreateNotebookInstanceLifecycleConfig() {
    this.add('sagemaker:CreateNotebookInstanceLifecycleConfig');
    return this;
  }

  /**
   * Grants permission to return a URL that you can use from your browser to connect to the Domain as a specified UserProfile when AuthMode is 'IAM'
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreatePresignedDomainUrl.html
   */
  public toCreatePresignedDomainUrl() {
    this.add('sagemaker:CreatePresignedDomainUrl');
    return this;
  }

  /**
   * Returns a URL that you can use from your browser to connect to the Notebook Instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreatePresignedNotebookInstanceUrl.html
   */
  public toCreatePresignedNotebookInstanceUrl() {
    this.add('sagemaker:CreatePresignedNotebookInstanceUrl');
    return this;
  }

  /**
   * Starts a processing job. After processing completes, Amazon SageMaker saves the resulting artifacts and other optional output to an Amazon S3 location that you specify.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceTypes()
   * - .ifMaxRuntimeInSeconds()
   * - .ifNetworkIsolation()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   * - .ifInterContainerTrafficEncryption()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateProcessingJob.html
   */
  public toCreateProcessingJob() {
    this.add('sagemaker:CreateProcessingJob');
    return this;
  }

  /**
   * Starts a model training job. After training completes, Amazon SageMaker saves the resulting model artifacts and other optional output to an Amazon S3 location that you specify.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifFileSystemAccessMode()
   * - .ifFileSystemDirectoryPath()
   * - .ifFileSystemId()
   * - .ifFileSystemType()
   * - .ifInstanceTypes()
   * - .ifInterContainerTrafficEncryption()
   * - .ifMaxRuntimeInSeconds()
   * - .ifNetworkIsolation()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrainingJob.html
   */
  public toCreateTrainingJob() {
    this.add('sagemaker:CreateTrainingJob');
    return this;
  }

  /**
   * Starts a transform job. After the results are obtained, Amazon SageMaker saves them to an Amazon S3 location that you specify.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceTypes()
   * - .ifModelArn()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTransformJob.html
   */
  public toCreateTransformJob() {
    this.add('sagemaker:CreateTransformJob');
    return this;
  }

  /**
   * Create a trial.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrial.html
   */
  public toCreateTrial() {
    this.add('sagemaker:CreateTrial');
    return this;
  }

  /**
   * Create a trial component.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrialComponent.html
   */
  public toCreateTrialComponent() {
    this.add('sagemaker:CreateTrialComponent');
    return this;
  }

  /**
   * Grants permission to create a UserProfile for a SageMaker Studio Domain
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifVpcSecurityGroupIds()
   * - .ifInstanceTypes()
   * - .ifDomainSharingOutputKmsKey()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateUserProfile.html
   */
  public toCreateUserProfile() {
    this.add('sagemaker:CreateUserProfile');
    return this;
  }

  /**
   * Create a workforce.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateWorkforce.html
   */
  public toCreateWorkforce() {
    this.add('sagemaker:CreateWorkforce');
    return this;
  }

  /**
   * Create a workteam.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateWorkteam.html
   */
  public toCreateWorkteam() {
    this.add('sagemaker:CreateWorkteam');
    return this;
  }

  /**
   * Deletes an algorithm.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteAlgorithm.html
   */
  public toDeleteAlgorithm() {
    this.add('sagemaker:DeleteAlgorithm');
    return this;
  }

  /**
   * Grants permission to delete an App
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteApp.html
   */
  public toDeleteApp() {
    this.add('sagemaker:DeleteApp');
    return this;
  }

  /**
   * Deletes a code repository.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteCodeRepository.html
   */
  public toDeleteCodeRepository() {
    this.add('sagemaker:DeleteCodeRepository');
    return this;
  }

  /**
   * Grants permission to delete a Domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    this.add('sagemaker:DeleteDomain');
    return this;
  }

  /**
   * Deletes an endpoint. Amazon SageMaker frees up all the resources that were deployed when the endpoint was created.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteEndpoint.html
   */
  public toDeleteEndpoint() {
    this.add('sagemaker:DeleteEndpoint');
    return this;
  }

  /**
   * Deletes the endpoint configuration created using the CreateEndpointConfig API. The DeleteEndpointConfig API deletes only the specified configuration. It does not delete any endpoints created using the configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteEndpointConfig.html
   */
  public toDeleteEndpointConfig() {
    this.add('sagemaker:DeleteEndpointConfig');
    return this;
  }

  /**
   * Deletes an experiment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteExperiment.html
   */
  public toDeleteExperiment() {
    this.add('sagemaker:DeleteExperiment');
    return this;
  }

  /**
   * Deltes the specified flow definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteFlowDefinition.html
   */
  public toDeleteFlowDefinition() {
    this.add('sagemaker:DeleteFlowDefinition');
    return this;
  }

  /**
   * Deletes the specified human loop.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteHumanLoop.html
   */
  public toDeleteHumanLoop() {
    this.add('sagemaker:DeleteHumanLoop');
    return this;
  }

  /**
   * Deletes a model created using the CreateModel API. The DeleteModel API deletes only the model entry in Amazon SageMaker that you created by calling the CreateModel API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModel.html
   */
  public toDeleteModel() {
    this.add('sagemaker:DeleteModel');
    return this;
  }

  /**
   * Deletes a model package.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModelPackage.html
   */
  public toDeleteModelPackage() {
    this.add('sagemaker:DeleteModelPackage');
    return this;
  }

  /**
   * Deletes a monitoring schedule. Amazon SageMaker will no longer run the scheduled monitoring.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteMonitoringSchedule.html
   */
  public toDeleteMonitoringSchedule() {
    this.add('sagemaker:DeleteMonitoringSchedule');
    return this;
  }

  /**
   * Deletes an Amazon SageMaker notebook instance. Before you can delete a notebook instance, you must call the StopNotebookInstance API.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteNotebookInstance.html
   */
  public toDeleteNotebookInstance() {
    this.add('sagemaker:DeleteNotebookInstance');
    return this;
  }

  /**
   * Deletes an notebook instance lifecycle configuration that can be deployed using Amazon SageMaker.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteNotebookInstanceLifecycleConfig.html
   */
  public toDeleteNotebookInstanceLifecycleConfig() {
    this.add('sagemaker:DeleteNotebookInstanceLifecycleConfig');
    return this;
  }

  /**
   * Deletes the specified set of tags from an Amazon SageMaker resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteTags.html
   */
  public toDeleteTags() {
    this.add('sagemaker:DeleteTags');
    return this;
  }

  /**
   * Deletes a trial.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteTrial.html
   */
  public toDeleteTrial() {
    this.add('sagemaker:DeleteTrial');
    return this;
  }

  /**
   * Deletes a trial component.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteTrialComponent.html
   */
  public toDeleteTrialComponent() {
    this.add('sagemaker:DeleteTrialComponent');
    return this;
  }

  /**
   * Grants permission to delete a UserProfile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteUserProfile.html
   */
  public toDeleteUserProfile() {
    this.add('sagemaker:DeleteUserProfile');
    return this;
  }

  /**
   * Deletes a workforce.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteWorkforce.html
   */
  public toDeleteWorkforce() {
    this.add('sagemaker:DeleteWorkforce');
    return this;
  }

  /**
   * Deletes a workteam.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteWorkteam.html
   */
  public toDeleteWorkteam() {
    this.add('sagemaker:DeleteWorkteam');
    return this;
  }

  /**
   * Returns information about an algorithm.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeAlgorithm.html
   */
  public toDescribeAlgorithm() {
    this.add('sagemaker:DescribeAlgorithm');
    return this;
  }

  /**
   * Grants permission to describe an App
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeApp.html
   */
  public toDescribeApp() {
    this.add('sagemaker:DescribeApp');
    return this;
  }

  /**
   * Describes an automl job that was created via CreateAutoMLJob API.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeAutoMLJob.html
   */
  public toDescribeAutoMLJob() {
    this.add('sagemaker:DescribeAutoMLJob');
    return this;
  }

  /**
   * Returns information about a code repository.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeCodeRepository.html
   */
  public toDescribeCodeRepository() {
    this.add('sagemaker:DescribeCodeRepository');
    return this;
  }

  /**
   * Returns information about a compilation job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeCompilationJob.html
   */
  public toDescribeCompilationJob() {
    this.add('sagemaker:DescribeCompilationJob');
    return this;
  }

  /**
   * Grants permission to describe a Domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeDomain.html
   */
  public toDescribeDomain() {
    this.add('sagemaker:DescribeDomain');
    return this;
  }

  /**
   * Returns the description of an endpoint.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpoint.html
   */
  public toDescribeEndpoint() {
    this.add('sagemaker:DescribeEndpoint');
    return this;
  }

  /**
   * Returns the description of an endpoint configuration, which was created using the CreateEndpointConfig API.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpointConfig.html
   */
  public toDescribeEndpointConfig() {
    this.add('sagemaker:DescribeEndpointConfig');
    return this;
  }

  /**
   * Returns information about an experiment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeExperiment.html
   */
  public toDescribeExperiment() {
    this.add('sagemaker:DescribeExperiment');
    return this;
  }

  /**
   * Returns detailed information about the specified flow definition.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeFlowDefinition.html
   */
  public toDescribeFlowDefinition() {
    this.add('sagemaker:DescribeFlowDefinition');
    return this;
  }

  /**
   * Returns detailed information about the specified human loop.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeHumanLoop.html
   */
  public toDescribeHumanLoop() {
    this.add('sagemaker:DescribeHumanLoop');
    return this;
  }

  /**
   * Returns detailed information about the specified human review workflow user interface.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeHumanTaskUi.html
   */
  public toDescribeHumanTaskUi() {
    this.add('sagemaker:DescribeHumanTaskUi');
    return this;
  }

  /**
   * Describes a hyper parameter tuning job that was created via CreateHyperParameterTuningJob API.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeHyperParameterTuningJob.html
   */
  public toDescribeHyperParameterTuningJob() {
    this.add('sagemaker:DescribeHyperParameterTuningJob');
    return this;
  }

  /**
   * Returns information about a labeling job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeLabelingJob.html
   */
  public toDescribeLabelingJob() {
    this.add('sagemaker:DescribeLabelingJob');
    return this;
  }

  /**
   * Describes a model that you created using the CreateModel API.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeModel.html
   */
  public toDescribeModel() {
    this.add('sagemaker:DescribeModel');
    return this;
  }

  /**
   * Returns information about a model package.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeModelPackage.html
   */
  public toDescribeModelPackage() {
    this.add('sagemaker:DescribeModelPackage');
    return this;
  }

  /**
   * Returns information about a monitoring schedule.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeMonitoringSchedule.html
   */
  public toDescribeMonitoringSchedule() {
    this.add('sagemaker:DescribeMonitoringSchedule');
    return this;
  }

  /**
   * Returns information about a notebook instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeNotebookInstance.html
   */
  public toDescribeNotebookInstance() {
    this.add('sagemaker:DescribeNotebookInstance');
    return this;
  }

  /**
   * Describes an notebook instance lifecycle configuration that was created via CreateNotebookInstanceLifecycleConfig API.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeNotebookInstanceLifecycleConfig.html
   */
  public toDescribeNotebookInstanceLifecycleConfig() {
    this.add('sagemaker:DescribeNotebookInstanceLifecycleConfig');
    return this;
  }

  /**
   * Returns information about a processing job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeProcessingJob.html
   */
  public toDescribeProcessingJob() {
    this.add('sagemaker:DescribeProcessingJob');
    return this;
  }

  /**
   * Returns information about a subscribed workteam.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeSubscribedWorkteam.html
   */
  public toDescribeSubscribedWorkteam() {
    this.add('sagemaker:DescribeSubscribedWorkteam');
    return this;
  }

  /**
   * Returns information about a training job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTrainingJob.html
   */
  public toDescribeTrainingJob() {
    this.add('sagemaker:DescribeTrainingJob');
    return this;
  }

  /**
   * Returns information about a transform job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTransformJob.html
   */
  public toDescribeTransformJob() {
    this.add('sagemaker:DescribeTransformJob');
    return this;
  }

  /**
   * Returns information about a trial.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTrial.html
   */
  public toDescribeTrial() {
    this.add('sagemaker:DescribeTrial');
    return this;
  }

  /**
   * Returns information about a trial component.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTrialComponent.html
   */
  public toDescribeTrialComponent() {
    this.add('sagemaker:DescribeTrialComponent');
    return this;
  }

  /**
   * Grants permission to describe a UserProfile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeUserProfile.html
   */
  public toDescribeUserProfile() {
    this.add('sagemaker:DescribeUserProfile');
    return this;
  }

  /**
   * Returns information about a workforce.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeWorkforce.html
   */
  public toDescribeWorkforce() {
    this.add('sagemaker:DescribeWorkforce');
    return this;
  }

  /**
   * Returns information about a workteam.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeWorkteam.html
   */
  public toDescribeWorkteam() {
    this.add('sagemaker:DescribeWorkteam');
    return this;
  }

  /**
   * Disassociate a trial component with a trial.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DisassociateTrialComponent.html
   */
  public toDisassociateTrialComponent() {
    this.add('sagemaker:DisassociateTrialComponent');
    return this;
  }

  /**
   * Get search suggestions when provided with keyword.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_GetSearchSuggestions.html
   */
  public toGetSearchSuggestions() {
    this.add('sagemaker:GetSearchSuggestions');
    return this;
  }

  /**
   * After you deploy a model into production using Amazon SageMaker hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifTargetModel()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_InvokeEndpoint.html
   */
  public toInvokeEndpoint() {
    this.add('sagemaker:InvokeEndpoint');
    return this;
  }

  /**
   * Lists algorithms.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListAlgorithms.html
   */
  public toListAlgorithms() {
    this.add('sagemaker:ListAlgorithms');
    return this;
  }

  /**
   * Grants permission to list the Apps in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListApps.html
   */
  public toListApps() {
    this.add('sagemaker:ListApps');
    return this;
  }

  /**
   * Lists automl jobs created via the CreateAutoMLJob.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListAutoMLJobs.html
   */
  public toListAutoMLJobs() {
    this.add('sagemaker:ListAutoMLJobs');
    return this;
  }

  /**
   * Lists candidates for automl job created via the CreateAutoMLJob.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListCandidatesForAutoMLJob.html
   */
  public toListCandidatesForAutoMLJob() {
    this.add('sagemaker:ListCandidatesForAutoMLJob');
    return this;
  }

  /**
   * Lists code repositories.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListCodeRepositories.html
   */
  public toListCodeRepositories() {
    this.add('sagemaker:ListCodeRepositories');
    return this;
  }

  /**
   * Lists compilation jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListCompilationJobs.html
   */
  public toListCompilationJobs() {
    this.add('sagemaker:ListCompilationJobs');
    return this;
  }

  /**
   * Grants permission to list the Domains in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListDomains.html
   */
  public toListDomains() {
    this.add('sagemaker:ListDomains');
    return this;
  }

  /**
   * Lists endpoint configurations.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListEndpointConfigs.html
   */
  public toListEndpointConfigs() {
    this.add('sagemaker:ListEndpointConfigs');
    return this;
  }

  /**
   * Lists endpoints.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListEndpoints.html
   */
  public toListEndpoints() {
    this.add('sagemaker:ListEndpoints');
    return this;
  }

  /**
   * Lists experiments.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListExperiments.html
   */
  public toListExperiments() {
    this.add('sagemaker:ListExperiments');
    return this;
  }

  /**
   * Returns summary information about flow definitions, given the specified parameters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListFlowDefinitions.html
   */
  public toListFlowDefinitions() {
    this.add('sagemaker:ListFlowDefinitions');
    return this;
  }

  /**
   * Returns summary information about human loops, given the specified parameters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListHumanLoops.html
   */
  public toListHumanLoops() {
    this.add('sagemaker:ListHumanLoops');
    return this;
  }

  /**
   * Returns summary information about human review workflow user interfaces, given the specified parameters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListHumanTaskUis.html
   */
  public toListHumanTaskUis() {
    this.add('sagemaker:ListHumanTaskUis');
    return this;
  }

  /**
   * Lists hyper parameter tuning jobs that was created using Amazon SageMaker.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListHyperParameterTuningJobs.html
   */
  public toListHyperParameterTuningJobs() {
    this.add('sagemaker:ListHyperParameterTuningJobs');
    return this;
  }

  /**
   * Lists labeling jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListLabelingJobs.html
   */
  public toListLabelingJobs() {
    this.add('sagemaker:ListLabelingJobs');
    return this;
  }

  /**
   * Lists labeling jobs for workteam.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListLabelingJobs.html
   */
  public toListLabelingJobsForWorkteam() {
    this.add('sagemaker:ListLabelingJobsForWorkteam');
    return this;
  }

  /**
   * Lists model packages.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModelPackages.html
   */
  public toListModelPackages() {
    this.add('sagemaker:ListModelPackages');
    return this;
  }

  /**
   * Lists the models created with the CreateModel API.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModels.html
   */
  public toListModels() {
    this.add('sagemaker:ListModels');
    return this;
  }

  /**
   * Lists monitoring executions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListMonitoringExecutions.html
   */
  public toListMonitoringExecutions() {
    this.add('sagemaker:ListMonitoringExecutions');
    return this;
  }

  /**
   * Lists monitoring schedules.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListMonitoringSchedules.html
   */
  public toListMonitoringSchedules() {
    this.add('sagemaker:ListMonitoringSchedules');
    return this;
  }

  /**
   * Lists notebook instance lifecycle configurations that can be deployed using Amazon SageMaker.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListNotebookInstanceLifecycleConfigs.html
   */
  public toListNotebookInstanceLifecycleConfigs() {
    this.add('sagemaker:ListNotebookInstanceLifecycleConfigs');
    return this;
  }

  /**
   * Returns a list of the Amazon SageMaker notebook instances in the requester's account in an AWS Region.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListNotebookInstances.html
   */
  public toListNotebookInstances() {
    this.add('sagemaker:ListNotebookInstances');
    return this;
  }

  /**
   * Lists processing jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListProcessingJobs.html
   */
  public toListProcessingJobs() {
    this.add('sagemaker:ListProcessingJobs');
    return this;
  }

  /**
   * Lists subscribed workteams.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListSubscribedWorkteams.html
   */
  public toListSubscribedWorkteams() {
    this.add('sagemaker:ListSubscribedWorkteams');
    return this;
  }

  /**
   * Returns the tag set associated with the specified resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTags.html
   */
  public toListTags() {
    this.add('sagemaker:ListTags');
    return this;
  }

  /**
   * Lists training jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTrainingJobs.html
   */
  public toListTrainingJobs() {
    this.add('sagemaker:ListTrainingJobs');
    return this;
  }

  /**
   * Lists training jobs for a hyper parameter tuning job that was created using Amazon SageMaker.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ ListTrainingJobsForHyperParameterTuningJob.html
   */
  public toListTrainingJobsForHyperParameterTuningJob() {
    this.add('sagemaker:ListTrainingJobsForHyperParameterTuningJob');
    return this;
  }

  /**
   * Lists transform jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTransformJobs.html
   */
  public toListTransformJobs() {
    this.add('sagemaker:ListTransformJobs');
    return this;
  }

  /**
   * Lists trial components.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTrialComponents.html
   */
  public toListTrialComponents() {
    this.add('sagemaker:ListTrialComponents');
    return this;
  }

  /**
   * Lists trials.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTrials.html
   */
  public toListTrials() {
    this.add('sagemaker:ListTrials');
    return this;
  }

  /**
   * Grants permission to list the UserProfiles in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListUserProfiles.html
   */
  public toListUserProfiles() {
    this.add('sagemaker:ListUserProfiles');
    return this;
  }

  /**
   * Lists workforces.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListWorkforces.html
   */
  public toListWorkforces() {
    this.add('sagemaker:ListWorkforces');
    return this;
  }

  /**
   * Lists workteams.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListWorkteams.html
   */
  public toListWorkteams() {
    this.add('sagemaker:ListWorkteams');
    return this;
  }

  /**
   * Render a UI template used for a human annotation task.
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_RenderUiTemplate.html
   */
  public toRenderUiTemplate() {
    this.add('sagemaker:RenderUiTemplate');
    return this;
  }

  /**
   * Search for a training job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_Search.html
   */
  public toSearch() {
    this.add('sagemaker:Search');
    return this;
  }

  /**
   * Starts a human loop.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StartHumanLoop.html
   */
  public toStartHumanLoop() {
    this.add('sagemaker:StartHumanLoop');
    return this;
  }

  /**
   * Starts a monitoring schedule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StartMonitoringSchedule.html
   */
  public toStartMonitoringSchedule() {
    this.add('sagemaker:StartMonitoringSchedule');
    return this;
  }

  /**
   * Launches an EC2 instance with the latest version of the libraries and attaches your EBS volume.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StartNotebookInstance.html
   */
  public toStartNotebookInstance() {
    this.add('sagemaker:StartNotebookInstance');
    return this;
  }

  /**
   * Stops a running automl job created via the CreateAutoMLJob.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopAutoMLJob.html
   */
  public toStopAutoMLJob() {
    this.add('sagemaker:StopAutoMLJob');
    return this;
  }

  /**
   * Stops a compilation job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopCompilationJob.html
   */
  public toStopCompilationJob() {
    this.add('sagemaker:StopCompilationJob');
    return this;
  }

  /**
   * Stops the specified human loop.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopHumanLoop.html
   */
  public toStopHumanLoop() {
    this.add('sagemaker:StopHumanLoop');
    return this;
  }

  /**
   * Stops a running hyper parameter tuning job create via the CreateHyperParameterTuningJob.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopHyperParameterTuningJob.html
   */
  public toStopHyperParameterTuningJob() {
    this.add('sagemaker:StopHyperParameterTuningJob');
    return this;
  }

  /**
   * Stops a labeling job. Any labels already generated will be exported before stopping.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopLabelingJob.html
   */
  public toStopLabelingJob() {
    this.add('sagemaker:StopLabelingJob');
    return this;
  }

  /**
   * Stops a monitoring schedule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopMonitoringSchedule.html
   */
  public toStopMonitoringSchedule() {
    this.add('sagemaker:StopMonitoringSchedule');
    return this;
  }

  /**
   * Terminates the EC2 instance. Before terminating the instance, Amazon SageMaker disconnects the EBS volume from it. Amazon SageMaker preserves the EBS volume.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopNotebookInstance.html
   */
  public toStopNotebookInstance() {
    this.add('sagemaker:StopNotebookInstance');
    return this;
  }

  /**
   * Stops a processing job. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopProcessingJob.html
   */
  public toStopProcessingJob() {
    this.add('sagemaker:StopProcessingJob');
    return this;
  }

  /**
   * Stops a training job. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopTrainingJob.html
   */
  public toStopTrainingJob() {
    this.add('sagemaker:StopTrainingJob');
    return this;
  }

  /**
   * Stops a transform job. When Amazon SageMaker receives a StopTransformJob request, the status of the job changes to Stopping. After Amazon SageMaker stops the job, the status is set to Stopped
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopTransformJob.html
   */
  public toStopTransformJob() {
    this.add('sagemaker:StopTransformJob');
    return this;
  }

  /**
   * Updates a code repository.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateCodeRepository.html
   */
  public toUpdateCodeRepository() {
    this.add('sagemaker:UpdateCodeRepository');
    return this;
  }

  /**
   * Grants permission to update a Domain
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifVpcSecurityGroupIds()
   * - .ifInstanceTypes()
   * - .ifDomainSharingOutputKmsKey()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateDomain.html
   */
  public toUpdateDomain() {
    this.add('sagemaker:UpdateDomain');
    return this;
  }

  /**
   * Updates an endpoint to use the endpoint configuration specified in the request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateEndpoint.html
   */
  public toUpdateEndpoint() {
    this.add('sagemaker:UpdateEndpoint');
    return this;
  }

  /**
   * Updates variant weight, capacity, or both of one or more variants associated with an endpoint.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateEndpointWeightsAndCapacities.html
   */
  public toUpdateEndpointWeightsAndCapacities() {
    this.add('sagemaker:UpdateEndpointWeightsAndCapacities');
    return this;
  }

  /**
   * Updates an experiment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateExperiment.html
   */
  public toUpdateExperiment() {
    this.add('sagemaker:UpdateExperiment');
    return this;
  }

  /**
   * Updates a monitoring schedule.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceTypes()
   * - .ifMaxRuntimeInSeconds()
   * - .ifNetworkIsolation()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateMonitoringSchedule.html
   */
  public toUpdateMonitoringSchedule() {
    this.add('sagemaker:UpdateMonitoringSchedule');
    return this;
  }

  /**
   * Updates a notebook instance. Notebook instance updates include upgrading or downgrading the EC2 instance used for your notebook instance to accommodate changes in your workload requirements. You can also update the VPC security groups.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAcceleratorTypes()
   * - .ifInstanceTypes()
   * - .ifRootAccess()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateNotebookInstance.html
   */
  public toUpdateNotebookInstance() {
    this.add('sagemaker:UpdateNotebookInstance');
    return this;
  }

  /**
   * Updates a notebook instance lifecycle configuration created with the CreateNotebookInstanceLifecycleConfig API.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ UpdateNotebookInstanceLifecycleConfig.html
   */
  public toUpdateNotebookInstanceLifecycleConfig() {
    this.add('sagemaker:UpdateNotebookInstanceLifecycleConfig');
    return this;
  }

  /**
   * Updates a trial.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateTrial.html
   */
  public toUpdateTrial() {
    this.add('sagemaker:UpdateTrial');
    return this;
  }

  /**
   * Updates a trial component.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateTrialComponent.html
   */
  public toUpdateTrialComponent() {
    this.add('sagemaker:UpdateTrialComponent');
    return this;
  }

  /**
   * Grants permission to update a UserProfile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceTypes()
   * - .ifVpcSecurityGroupIds()
   * - .ifInstanceTypes()
   * - .ifDomainSharingOutputKmsKey()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateUserProfile.html
   */
  public toUpdateUserProfile() {
    this.add('sagemaker:UpdateUserProfile');
    return this;
  }

  /**
   * Updates a workforce.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateWorkforce.html
   */
  public toUpdateWorkforce() {
    this.add('sagemaker:UpdateWorkforce');
    return this;
  }

  /**
   * Updates a workteam.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateWorkteam.html
   */
  public toUpdateWorkteam() {
    this.add('sagemaker:UpdateWorkteam');
    return this;
  }

  /**
   * Adds a resource of type human-loop to the statement
   *
   * @param humanLoopName - Identifier for the humanLoopName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onHumanLoop(humanLoopName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:human-loop/${HumanLoopName}';
    arn = arn.replace('${HumanLoopName}', humanLoopName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type flow-definition to the statement
   *
   * @param flowDefinitionName - Identifier for the flowDefinitionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onFlowDefinition(flowDefinitionName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:flow-definition/${FlowDefinitionName}';
    arn = arn.replace('${FlowDefinitionName}', flowDefinitionName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type human-task-ui to the statement
   *
   * @param humanTaskUiName - Identifier for the humanTaskUiName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onHumanTaskUi(humanTaskUiName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:human-task-ui/${HumanTaskUiName}';
    arn = arn.replace('${HumanTaskUiName}', humanTaskUiName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type labeling-job to the statement
   *
   * @param labelingJobName - Identifier for the labelingJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onLabelingJob(labelingJobName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:labeling-job/${LabelingJobName}';
    arn = arn.replace('${LabelingJobName}', labelingJobName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type workteam to the statement
   *
   * @param workteamName - Identifier for the workteamName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onWorkteam(workteamName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:workteam/${WorkteamName}';
    arn = arn.replace('${WorkteamName}', workteamName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type workforce to the statement
   *
   * @param workforceName - Identifier for the workforceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onWorkforce(workforceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:workforce/${WorkforceName}';
    arn = arn.replace('${WorkforceName}', workforceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type domain to the statement
   *
   * @param domainId - Identifier for the domainId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onDomain(domainId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:domain/${DomainId}';
    arn = arn.replace('${DomainId}', domainId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type user-profile to the statement
   *
   * @param domainId - Identifier for the domainId.
   * @param userProfileName - Identifier for the userProfileName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onUserProfile(domainId: string, userProfileName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:user-profile/${DomainId}/${UserProfileName}';
    arn = arn.replace('${DomainId}', domainId);
    arn = arn.replace('${UserProfileName}', userProfileName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type app to the statement
   *
   * @param domainId - Identifier for the domainId.
   * @param userProfileName - Identifier for the userProfileName.
   * @param appType - Identifier for the appType.
   * @param appName - Identifier for the appName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onApp(domainId: string, userProfileName: string, appType: string, appName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:app/${DomainId}/${UserProfileName}/${AppType}/${AppName}';
    arn = arn.replace('${DomainId}', domainId);
    arn = arn.replace('${UserProfileName}', userProfileName);
    arn = arn.replace('${AppType}', appType);
    arn = arn.replace('${AppName}', appName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type notebook-instance to the statement
   *
   * @param notebookInstanceName - Identifier for the notebookInstanceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onNotebookInstance(notebookInstanceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:notebook-instance/${NotebookInstanceName}';
    arn = arn.replace('${NotebookInstanceName}', notebookInstanceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type notebook-instance-lifecycle-config to the statement
   *
   * @param notebookInstanceLifecycleConfigName - Identifier for the notebookInstanceLifecycleConfigName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onNotebookInstanceLifecycleConfig(notebookInstanceLifecycleConfigName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:notebook-instance-lifecycle-config/${NotebookInstanceLifecycleConfigName}';
    arn = arn.replace('${NotebookInstanceLifecycleConfigName}', notebookInstanceLifecycleConfigName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type code-repository to the statement
   *
   * @param codeRepositoryName - Identifier for the codeRepositoryName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCodeRepository(codeRepositoryName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:code-repository/${CodeRepositoryName}';
    arn = arn.replace('${CodeRepositoryName}', codeRepositoryName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type algorithm to the statement
   *
   * @param algorithmName - Identifier for the algorithmName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAlgorithm(algorithmName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:algorithm/${AlgorithmName}';
    arn = arn.replace('${AlgorithmName}', algorithmName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type training-job to the statement
   *
   * @param trainingJobName - Identifier for the trainingJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onTrainingJob(trainingJobName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:training-job/${TrainingJobName}';
    arn = arn.replace('${TrainingJobName}', trainingJobName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type processing-job to the statement
   *
   * @param processingJobName - Identifier for the processingJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onProcessingJob(processingJobName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:processing-job/${ProcessingJobName}';
    arn = arn.replace('${ProcessingJobName}', processingJobName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type hyper-parameter-tuning-job to the statement
   *
   * @param hyperParameterTuningJobName - Identifier for the hyperParameterTuningJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onHyperParameterTuningJob(hyperParameterTuningJobName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:hyper-parameter-tuning-job/${HyperParameterTuningJobName}';
    arn = arn.replace('${HyperParameterTuningJobName}', hyperParameterTuningJobName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type model-package to the statement
   *
   * @param modelPackageName - Identifier for the modelPackageName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onModelPackage(modelPackageName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:model-package/${ModelPackageName}';
    arn = arn.replace('${ModelPackageName}', modelPackageName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type model to the statement
   *
   * @param modelName - Identifier for the modelName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onModel(modelName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:model/${ModelName}';
    arn = arn.replace('${ModelName}', modelName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type endpoint-config to the statement
   *
   * @param endpointConfigName - Identifier for the endpointConfigName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onEndpointConfig(endpointConfigName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:endpoint-config/${EndpointConfigName}';
    arn = arn.replace('${EndpointConfigName}', endpointConfigName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type endpoint to the statement
   *
   * @param endpointName - Identifier for the endpointName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onEndpoint(endpointName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:endpoint/${EndpointName}';
    arn = arn.replace('${EndpointName}', endpointName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type transform-job to the statement
   *
   * @param transformJobName - Identifier for the transformJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onTransformJob(transformJobName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:transform-job/${TransformJobName}';
    arn = arn.replace('${TransformJobName}', transformJobName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type compilation-job to the statement
   *
   * @param compilationJobName - Identifier for the compilationJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCompilationJob(compilationJobName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:compilation-job/${CompilationJobName}';
    arn = arn.replace('${CompilationJobName}', compilationJobName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type automl-job to the statement
   *
   * @param autoMLJobJobName - Identifier for the autoMLJobJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onAutomlJob(autoMLJobJobName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:automl-job/${AutoMLJobJobName}';
    arn = arn.replace('${AutoMLJobJobName}', autoMLJobJobName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type monitoring-schedule to the statement
   *
   * @param monitoringScheduleName - Identifier for the monitoringScheduleName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onMonitoringSchedule(monitoringScheduleName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:monitoring-schedule/${MonitoringScheduleName}';
    arn = arn.replace('${MonitoringScheduleName}', monitoringScheduleName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type experiment to the statement
   *
   * @param experimentName - Identifier for the experimentName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onExperiment(experimentName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:experiment/${ExperimentName}';
    arn = arn.replace('${ExperimentName}', experimentName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type experiment-trial to the statement
   *
   * @param trialName - Identifier for the trialName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onExperimentTrial(trialName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:experiment-trial/${TrialName}';
    arn = arn.replace('${TrialName}', trialName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type experiment-trial-component to the statement
   *
   * @param trialComponentName - Identifier for the trialComponentName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onExperimentTrialComponent(trialComponentName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:experiment-trial-component/${TrialComponentName}';
    arn = arn.replace('${TrialComponentName}', trialComponentName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * A key that is present in the request the user makes to the SageMaker service.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toAddTags()
   * - .toCreateApp()
   * - .toCreateAutoMLJob()
   * - .toCreateDomain()
   * - .toCreateEndpoint()
   * - .toCreateEndpointConfig()
   * - .toCreateExperiment()
   * - .toCreateFlowDefinition()
   * - .toCreateHumanTaskUi()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateLabelingJob()
   * - .toCreateModel()
   * - .toCreateMonitoringSchedule()
   * - .toCreateNotebookInstance()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toCreateTransformJob()
   * - .toCreateTrial()
   * - .toCreateTrialComponent()
   * - .toCreateUserProfile()
   * - .toCreateWorkforce()
   * - .toCreateWorkteam()
   * - .toUpdateMonitoringSchedule()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * A tag key and value pair.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to resource types:
   * - flow-definition
   * - human-task-ui
   * - labeling-job
   * - workteam
   * - workforce
   * - domain
   * - user-profile
   * - app
   * - notebook-instance
   * - training-job
   * - processing-job
   * - hyper-parameter-tuning-job
   * - model
   * - endpoint-config
   * - endpoint
   * - transform-job
   * - automl-job
   * - monitoring-schedule
   * - experiment
   * - experiment-trial
   * - experiment-trial-component
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * The list of all the tag key names associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toAddTags()
   * - .toCreateApp()
   * - .toCreateAutoMLJob()
   * - .toCreateDomain()
   * - .toCreateEndpoint()
   * - .toCreateEndpointConfig()
   * - .toCreateExperiment()
   * - .toCreateFlowDefinition()
   * - .toCreateHumanTaskUi()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateLabelingJob()
   * - .toCreateModel()
   * - .toCreateMonitoringSchedule()
   * - .toCreateNotebookInstance()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toCreateTransformJob()
   * - .toCreateTrial()
   * - .toCreateTrialComponent()
   * - .toCreateUserProfile()
   * - .toCreateWorkforce()
   * - .toCreateWorkteam()
   * - .toDeleteTags()
   * - .toUpdateMonitoringSchedule()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * The list of all accelerator types associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateEndpointConfig()
   * - .toCreateNotebookInstance()
   * - .toUpdateNotebookInstance()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAcceleratorTypes(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:AcceleratorTypes`, value, operator || 'StringLike');
  }

  /**
   * App network access associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateDomain()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAppNetworkAccess(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:AppNetworkAccess`, value, operator || 'StringLike');
  }

  /**
   * The direct internet access associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateNotebookInstance()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDirectInternetAccess(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:DirectInternetAccess`, value, operator || 'StringLike');
  }

  /**
   * The Domain sharing output KMS key associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateDomain()
   * - .toCreateUserProfile()
   * - .toUpdateDomain()
   * - .toUpdateUserProfile()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifDomainSharingOutputKmsKey(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:DomainSharingOutputKmsKey`, value, operator || 'ArnEquals');
  }

  /**
   * File system access mode associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateTrainingJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFileSystemAccessMode(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:FileSystemAccessMode`, value, operator || 'StringLike');
  }

  /**
   * File system directory path associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateTrainingJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFileSystemDirectoryPath(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:FileSystemDirectoryPath`, value, operator || 'StringLike');
  }

  /**
   * A file system ID associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateTrainingJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFileSystemId(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:FileSystemId`, value, operator || 'StringLike');
  }

  /**
   * File system type associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateTrainingJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFileSystemType(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:FileSystemType`, value, operator || 'StringLike');
  }

  /**
   * The KMS Key Id of the EFS File System used for UserProfile home directories, which is associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateDomain()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifHomeEfsFileSystemKmsKey(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:HomeEfsFileSystemKmsKey`, value, operator || 'ArnEquals');
  }

  /**
   * The list of all instance types associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateApp()
   * - .toCreateDomain()
   * - .toCreateEndpointConfig()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateMonitoringSchedule()
   * - .toCreateNotebookInstance()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toCreateTransformJob()
   * - .toCreateUserProfile()
   * - .toUpdateDomain()
   * - .toUpdateMonitoringSchedule()
   * - .toUpdateNotebookInstance()
   * - .toUpdateUserProfile()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInstanceTypes(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:InstanceTypes`, value, operator || 'StringLike');
  }

  /**
   * The inter container traffic encryption associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateAutoMLJob()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifInterContainerTrafficEncryption(value?: boolean): PolicyStatementWithCondition {
    return this.if(`sagemaker:InterContainerTrafficEncryption`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * The max runtime in seconds associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateMonitoringSchedule()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toUpdateMonitoringSchedule()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifMaxRuntimeInSeconds(value: number | number[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:MaxRuntimeInSeconds`, value, operator || 'NumericEquals');
  }

  /**
   * The model arn associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateEndpointConfig()
   * - .toCreateTransformJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifModelArn(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:ModelArn`, value, operator || 'ArnEquals');
  }

  /**
   * The network isolation associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateModel()
   * - .toCreateMonitoringSchedule()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toUpdateMonitoringSchedule()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifNetworkIsolation(value?: boolean): PolicyStatementWithCondition {
    return this.if(`sagemaker:NetworkIsolation`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * The output kms key associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateAutoMLJob()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateLabelingJob()
   * - .toCreateMonitoringSchedule()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toCreateTransformJob()
   * - .toUpdateMonitoringSchedule()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifOutputKmsKey(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:OutputKmsKey`, value, operator || 'ArnEquals');
  }

  /**
   * The preface string for a tag key and value pair attached to a resource.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTagExists(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:ResourceTag/`, value, operator || 'StringLike');
  }

  /**
   * A tag key and value pair.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to resource types:
   * - flow-definition
   * - human-task-ui
   * - labeling-job
   * - workteam
   * - workforce
   * - domain
   * - user-profile
   * - app
   * - notebook-instance
   * - training-job
   * - processing-job
   * - hyper-parameter-tuning-job
   * - model
   * - endpoint-config
   * - endpoint
   * - transform-job
   * - automl-job
   * - monitoring-schedule
   * - experiment
   * - experiment-trial
   * - experiment-trial-component
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * The root access associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateNotebookInstance()
   * - .toUpdateNotebookInstance()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRootAccess(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:RootAccess`, value, operator || 'StringLike');
  }

  /**
   * The target model associated with the Multi-Model Endpoint in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toInvokeEndpoint()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTargetModel(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:TargetModel`, value, operator || 'StringLike');
  }

  /**
   * The volume kms key associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateAutoMLJob()
   * - .toCreateEndpointConfig()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateLabelingJob()
   * - .toCreateMonitoringSchedule()
   * - .toCreateNotebookInstance()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toCreateTransformJob()
   * - .toUpdateMonitoringSchedule()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifVolumeKmsKey(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:VolumeKmsKey`, value, operator || 'ArnEquals');
  }

  /**
   * The list of all vpc security group ids associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateAutoMLJob()
   * - .toCreateDomain()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateModel()
   * - .toCreateMonitoringSchedule()
   * - .toCreateNotebookInstance()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toCreateUserProfile()
   * - .toUpdateDomain()
   * - .toUpdateMonitoringSchedule()
   * - .toUpdateUserProfile()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcSecurityGroupIds(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:VpcSecurityGroupIds`, value, operator || 'StringLike');
  }

  /**
   * The list of all vpc subnets associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateAutoMLJob()
   * - .toCreateDomain()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateModel()
   * - .toCreateMonitoringSchedule()
   * - .toCreateNotebookInstance()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toUpdateMonitoringSchedule()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcSubnets(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:VpcSubnets`, value, operator || 'StringLike');
  }

  /**
   * The workteam arn associated to the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateFlowDefinition()
   * - .toCreateLabelingJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifWorkteamArn(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:WorkteamArn`, value, operator || 'ArnEquals');
  }

  /**
   * The workteam type associated to the request. This can be public-crowd, private-crowd or vendor-crowd.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateFlowDefinition()
   * - .toCreateLabelingJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWorkteamType(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`sagemaker:WorkteamType`, value, operator || 'StringLike');
  }
}
