import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [imagebuilder](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2imagebuilder.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Imagebuilder extends PolicyStatement {
  public servicePrefix = 'imagebuilder';
  protected actionList: Actions = {
    "CancelImageCreation": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CancelImageCreation.html",
      "description": "Cancel an image creation",
      "accessLevel": "Write",
      "resourceTypes": {
        "image": {
          "required": true
        }
      }
    },
    "CreateComponent": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html",
      "description": "Create a new component",
      "accessLevel": "Write",
      "resourceTypes": {
        "component": {
          "required": true
        },
        "kmsKey": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDistributionConfiguration": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateDistributionConfiguration.html",
      "description": "Create a new distribution configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "distributionConfiguration": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateImage": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImage.html",
      "description": "Create a new image",
      "accessLevel": "Write",
      "dependentActions": [
        "imagebuilder:GetImageRecipe",
        "imagebuilder:GetInfrastructureConfiguration"
      ],
      "resourceTypes": {
        "image": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateImagePipeline": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImagePipeline.html",
      "description": "Create a new image pipeline",
      "accessLevel": "Write",
      "dependentActions": [
        "imagebuilder:GetImageRecipe"
      ],
      "resourceTypes": {
        "imagePipeline": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateImageRecipe": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImageRecipe.html",
      "description": "Create a new Image Recipe",
      "accessLevel": "Write",
      "dependentActions": [
        "imagebuilder:GetComponent"
      ],
      "resourceTypes": {
        "imageRecipe": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateInfrastructureConfiguration": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateInfrastructureConfiguration.html",
      "description": "Create a new infrastructure configuration",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "infrastructureConfiguration": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "imagebuilder:CreatedResourceTagKeys",
        "imagebuilder:CreatedResourceTag/<key>"
      ]
    },
    "DeleteComponent": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteComponent.html",
      "description": "Delete a component",
      "accessLevel": "Write",
      "resourceTypes": {
        "component": {
          "required": true
        }
      }
    },
    "DeleteDistributionConfiguration": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteDistributionConfiguration.html",
      "description": "Delete a distribution configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "distributionConfiguration": {
          "required": true
        }
      }
    },
    "DeleteImage": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteImage.html",
      "description": "Delete an image",
      "accessLevel": "Write",
      "resourceTypes": {
        "image": {
          "required": true
        }
      }
    },
    "DeleteImagePipeline": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteImagePipeline.html",
      "description": "Delete an image pipeline",
      "accessLevel": "Write",
      "resourceTypes": {
        "imagePipeline": {
          "required": true
        }
      }
    },
    "DeleteImageRecipe": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteImageRecipe.html",
      "description": "Grants permission to delete an image recipe",
      "accessLevel": "Write",
      "resourceTypes": {
        "imageRecipe": {
          "required": true
        }
      }
    },
    "DeleteInfrastructureConfiguration": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteInfrastructureConfiguration.html",
      "description": "Delete an infrastructure configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "infrastructureConfiguration": {
          "required": true
        }
      }
    },
    "GetComponent": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetComponent.html",
      "description": "View details about a component",
      "accessLevel": "Read",
      "resourceTypes": {
        "component": {
          "required": true
        }
      }
    },
    "GetComponentPolicy": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetComponentPolicy.html",
      "description": "View the resource policy associated with a component",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "component": {
          "required": true
        }
      }
    },
    "GetDistributionConfiguration": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetDistributionConfiguration.html",
      "description": "View details about a distribution configuration",
      "accessLevel": "Read",
      "resourceTypes": {
        "distributionConfiguration": {
          "required": true
        }
      }
    },
    "GetImage": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImage.html",
      "description": "View details about an image",
      "accessLevel": "Read",
      "resourceTypes": {
        "image": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetImagePipeline": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImagePipeline.html",
      "description": "View details about an image pipeline",
      "accessLevel": "Read",
      "resourceTypes": {
        "imagePipeline": {
          "required": true
        }
      }
    },
    "GetImagePolicy": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImagePolicy.html",
      "description": "View the resource policy associated with an image",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "image": {
          "required": true
        }
      }
    },
    "GetImageRecipe": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImageRecipe.html",
      "description": "View details about an image recipe",
      "accessLevel": "Read",
      "resourceTypes": {
        "imageRecipe": {
          "required": true
        }
      }
    },
    "GetImageRecipePolicy": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImageRecipePolicy.html",
      "description": "View the resource policy associated with an image recipe",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "imageRecipe": {
          "required": true
        }
      }
    },
    "GetInfrastructureConfiguration": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetInfrastructureConfiguration.html",
      "description": "View details about an infrastructure configuration",
      "accessLevel": "Read",
      "resourceTypes": {
        "infrastructureConfiguration": {
          "required": true
        }
      }
    },
    "ListComponentBuildVersions": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListComponentBuildVersions.html",
      "description": "List the component build versions in your account",
      "accessLevel": "List",
      "resourceTypes": {
        "componentVersion": {
          "required": true
        }
      }
    },
    "ListComponents": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListComponents.html",
      "description": "List the component versions owned by or shared with your account",
      "accessLevel": "List"
    },
    "ListDistributionConfigurations": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListDistributionConfigurations.html",
      "description": "List the distribution configurations in your account",
      "accessLevel": "List"
    },
    "ListImageBuildVersions": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageBuildVersions.html",
      "description": "List the image build versions in your account",
      "accessLevel": "List",
      "resourceTypes": {
        "imageVersion": {
          "required": true
        }
      }
    },
    "ListImagePipelines": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImagePipelines.html",
      "description": "List the image pipelines in your account",
      "accessLevel": "List"
    },
    "ListImageRecipes": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageRecipes.html",
      "description": "List the image recipes owned by or shared with your account",
      "accessLevel": "List"
    },
    "ListImages": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImages.html",
      "description": "List the image versions owned by or shared with your account",
      "accessLevel": "List"
    },
    "ListInfrastructureConfigurations": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListInfrastructureConfigurations.html",
      "description": "List the infrastructure configurations in your account",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListTagsForResource.html",
      "description": "List tag for an Image Builder resource",
      "accessLevel": "Read",
      "resourceTypes": {
        "component": {
          "required": false
        },
        "distributionConfiguration": {
          "required": false
        },
        "image": {
          "required": false
        },
        "imagePipeline": {
          "required": false
        },
        "imageRecipe": {
          "required": false
        },
        "infrastructureConfiguration": {
          "required": false
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "PutComponentPolicy": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutComponentPolicy.html",
      "description": "Set the resource policy associated with a component",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "component": {
          "required": true
        }
      }
    },
    "PutImagePolicy": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutImagePolicy.html",
      "description": "Set the resource policy associated with an image",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "image": {
          "required": true
        }
      }
    },
    "PutImageRecipePolicy": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutImageRecipePolicy.html",
      "description": "Set the resource policy associated with an image recipe",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "imageRecipe": {
          "required": true
        }
      }
    },
    "StartImagePipelineExecution": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_StartImagePipelineExecution.html",
      "description": "Create a new image from a pipeline",
      "accessLevel": "Write",
      "dependentActions": [
        "imagebuilder:GetImagePipeline"
      ],
      "resourceTypes": {
        "imagePipeline": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_TagResource.html",
      "description": "Tag an Image Builder resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "component": {
          "required": false
        },
        "distributionConfiguration": {
          "required": false
        },
        "image": {
          "required": false
        },
        "imagePipeline": {
          "required": false
        },
        "imageRecipe": {
          "required": false
        },
        "infrastructureConfiguration": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UntagResource.html",
      "description": "Untag an Image Builder resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "component": {
          "required": false
        },
        "distributionConfiguration": {
          "required": false
        },
        "image": {
          "required": false
        },
        "imagePipeline": {
          "required": false
        },
        "imageRecipe": {
          "required": false
        },
        "infrastructureConfiguration": {
          "required": false
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateDistributionConfiguration": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateDistributionConfiguration.html",
      "description": "Update an existing distribution configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "distributionConfiguration": {
          "required": true
        }
      }
    },
    "UpdateImagePipeline": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateImagePipeline.html",
      "description": "Update an existing image pipeline",
      "accessLevel": "Write",
      "resourceTypes": {
        "imagePipeline": {
          "required": true
        }
      }
    },
    "UpdateInfrastructureConfiguration": {
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateInfrastructureConfiguration.html",
      "description": "Update an existing infrastructure configuration",
      "accessLevel": "Write",
      "dependentActions": [
        "iam:PassRole"
      ],
      "resourceTypes": {
        "infrastructureConfiguration": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}",
        "imagebuilder:CreatedResourceTagKeys",
        "imagebuilder:CreatedResourceTag/<key>"
      ]
    }
  };
  public resourceTypes: ResourceTypes = {
    "component": {
      "name": "component",
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_Component.html",
      "arn": "arn:${Partition}:imagebuilder:${Region}:${Account}:component/${ComponentName}/${ComponentVersion}/${ComponentBuildVersion}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "componentVersion": {
      "name": "componentVersion",
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ComponentVersion",
      "arn": "arn:${Partition}:imagebuilder:${Region}:${Account}:component/${ComponentName}/${ComponentVersion}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "distributionConfiguration": {
      "name": "distributionConfiguration",
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DistributionConfiguration.html",
      "arn": "arn:${Partition}:imagebuilder:${Region}:${Account}:distribution-configuration/${DistributionConfigurationName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "image": {
      "name": "image",
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_Image.html",
      "arn": "arn:${Partition}:imagebuilder:${Region}:${Account}:image/${ImageName}/${ImageVersion}/${ImageBuildVersion}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "imageVersion": {
      "name": "imageVersion",
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImageVersion.html",
      "arn": "arn:${Partition}:imagebuilder:${Region}:${Account}:image/${ImageName}/${ImageVersion}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "imageRecipe": {
      "name": "imageRecipe",
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImageRecipe.html",
      "arn": "arn:${Partition}:imagebuilder:${Region}:${Account}:image-recipe/${ImageRecipeName}/${ImageRecipeVersion}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "imagePipeline": {
      "name": "imagePipeline",
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImagePipeline.html",
      "arn": "arn:${Partition}:imagebuilder:${Region}:${Account}:image-pipeline/${ImagePipelineName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "infrastructureConfiguration": {
      "name": "infrastructureConfiguration",
      "url": "https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_InfrastructureConfiguration.html",
      "arn": "arn:${Partition}:imagebuilder:${Region}:${Account}:infrastructure-configuration/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "kmsKey": {
      "name": "kmsKey",
      "url": "https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys",
      "arn": "arn:${Partition}:kms:${Region}:${Account}:key/${KeyId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [imagebuilder](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2imagebuilder.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Cancel an image creation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CancelImageCreation.html
   */
  public cancelImageCreation() {
    this.add('imagebuilder:CancelImageCreation');
    return this;
  }

  /**
   * Create a new component
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html
   */
  public createComponent() {
    this.add('imagebuilder:CreateComponent');
    return this;
  }

  /**
   * Create a new distribution configuration
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateDistributionConfiguration.html
   */
  public createDistributionConfiguration() {
    this.add('imagebuilder:CreateDistributionConfiguration');
    return this;
  }

  /**
   * Create a new image
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * Dependent actions:
   * - imagebuilder:GetImageRecipe
   * - imagebuilder:GetInfrastructureConfiguration
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImage.html
   */
  public createImage() {
    this.add('imagebuilder:CreateImage');
    return this;
  }

  /**
   * Create a new image pipeline
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * Dependent actions:
   * - imagebuilder:GetImageRecipe
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImagePipeline.html
   */
  public createImagePipeline() {
    this.add('imagebuilder:CreateImagePipeline');
    return this;
  }

  /**
   * Create a new Image Recipe
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * Dependent actions:
   * - imagebuilder:GetComponent
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImageRecipe.html
   */
  public createImageRecipe() {
    this.add('imagebuilder:CreateImageRecipe');
    return this;
  }

  /**
   * Create a new infrastructure configuration
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   * - imagebuilder:CreatedResourceTagKeys
   * - imagebuilder:CreatedResourceTag/<key>
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateInfrastructureConfiguration.html
   */
  public createInfrastructureConfiguration() {
    this.add('imagebuilder:CreateInfrastructureConfiguration');
    return this;
  }

  /**
   * Delete a component
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteComponent.html
   */
  public deleteComponent() {
    this.add('imagebuilder:DeleteComponent');
    return this;
  }

  /**
   * Delete a distribution configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteDistributionConfiguration.html
   */
  public deleteDistributionConfiguration() {
    this.add('imagebuilder:DeleteDistributionConfiguration');
    return this;
  }

  /**
   * Delete an image
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteImage.html
   */
  public deleteImage() {
    this.add('imagebuilder:DeleteImage');
    return this;
  }

  /**
   * Delete an image pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteImagePipeline.html
   */
  public deleteImagePipeline() {
    this.add('imagebuilder:DeleteImagePipeline');
    return this;
  }

  /**
   * Grants permission to delete an image recipe
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteImageRecipe.html
   */
  public deleteImageRecipe() {
    this.add('imagebuilder:DeleteImageRecipe');
    return this;
  }

  /**
   * Delete an infrastructure configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteInfrastructureConfiguration.html
   */
  public deleteInfrastructureConfiguration() {
    this.add('imagebuilder:DeleteInfrastructureConfiguration');
    return this;
  }

  /**
   * View details about a component
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetComponent.html
   */
  public getComponent() {
    this.add('imagebuilder:GetComponent');
    return this;
  }

  /**
   * View the resource policy associated with a component
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetComponentPolicy.html
   */
  public getComponentPolicy() {
    this.add('imagebuilder:GetComponentPolicy');
    return this;
  }

  /**
   * View details about a distribution configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetDistributionConfiguration.html
   */
  public getDistributionConfiguration() {
    this.add('imagebuilder:GetDistributionConfiguration');
    return this;
  }

  /**
   * View details about an image
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImage.html
   */
  public getImage() {
    this.add('imagebuilder:GetImage');
    return this;
  }

  /**
   * View details about an image pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImagePipeline.html
   */
  public getImagePipeline() {
    this.add('imagebuilder:GetImagePipeline');
    return this;
  }

  /**
   * View the resource policy associated with an image
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImagePolicy.html
   */
  public getImagePolicy() {
    this.add('imagebuilder:GetImagePolicy');
    return this;
  }

  /**
   * View details about an image recipe
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImageRecipe.html
   */
  public getImageRecipe() {
    this.add('imagebuilder:GetImageRecipe');
    return this;
  }

  /**
   * View the resource policy associated with an image recipe
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImageRecipePolicy.html
   */
  public getImageRecipePolicy() {
    this.add('imagebuilder:GetImageRecipePolicy');
    return this;
  }

  /**
   * View details about an infrastructure configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetInfrastructureConfiguration.html
   */
  public getInfrastructureConfiguration() {
    this.add('imagebuilder:GetInfrastructureConfiguration');
    return this;
  }

  /**
   * List the component build versions in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListComponentBuildVersions.html
   */
  public listComponentBuildVersions() {
    this.add('imagebuilder:ListComponentBuildVersions');
    return this;
  }

  /**
   * List the component versions owned by or shared with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListComponents.html
   */
  public listComponents() {
    this.add('imagebuilder:ListComponents');
    return this;
  }

  /**
   * List the distribution configurations in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListDistributionConfigurations.html
   */
  public listDistributionConfigurations() {
    this.add('imagebuilder:ListDistributionConfigurations');
    return this;
  }

  /**
   * List the image build versions in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageBuildVersions.html
   */
  public listImageBuildVersions() {
    this.add('imagebuilder:ListImageBuildVersions');
    return this;
  }

  /**
   * List the image pipelines in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImagePipelines.html
   */
  public listImagePipelines() {
    this.add('imagebuilder:ListImagePipelines');
    return this;
  }

  /**
   * List the image recipes owned by or shared with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageRecipes.html
   */
  public listImageRecipes() {
    this.add('imagebuilder:ListImageRecipes');
    return this;
  }

  /**
   * List the image versions owned by or shared with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImages.html
   */
  public listImages() {
    this.add('imagebuilder:ListImages');
    return this;
  }

  /**
   * List the infrastructure configurations in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListInfrastructureConfigurations.html
   */
  public listInfrastructureConfigurations() {
    this.add('imagebuilder:ListInfrastructureConfigurations');
    return this;
  }

  /**
   * List tag for an Image Builder resource
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('imagebuilder:ListTagsForResource');
    return this;
  }

  /**
   * Set the resource policy associated with a component
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutComponentPolicy.html
   */
  public putComponentPolicy() {
    this.add('imagebuilder:PutComponentPolicy');
    return this;
  }

  /**
   * Set the resource policy associated with an image
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutImagePolicy.html
   */
  public putImagePolicy() {
    this.add('imagebuilder:PutImagePolicy');
    return this;
  }

  /**
   * Set the resource policy associated with an image recipe
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutImageRecipePolicy.html
   */
  public putImageRecipePolicy() {
    this.add('imagebuilder:PutImageRecipePolicy');
    return this;
  }

  /**
   * Create a new image from a pipeline
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - imagebuilder:GetImagePipeline
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_StartImagePipelineExecution.html
   */
  public startImagePipelineExecution() {
    this.add('imagebuilder:StartImagePipelineExecution');
    return this;
  }

  /**
   * Tag an Image Builder resource
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:TagKeys
   * - aws:RequestTag/${TagKey}
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('imagebuilder:TagResource');
    return this;
  }

  /**
   * Untag an Image Builder resource
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('imagebuilder:UntagResource');
    return this;
  }

  /**
   * Update an existing distribution configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateDistributionConfiguration.html
   */
  public updateDistributionConfiguration() {
    this.add('imagebuilder:UpdateDistributionConfiguration');
    return this;
  }

  /**
   * Update an existing image pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateImagePipeline.html
   */
  public updateImagePipeline() {
    this.add('imagebuilder:UpdateImagePipeline');
    return this;
  }

  /**
   * Update an existing infrastructure configuration
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   * - imagebuilder:CreatedResourceTagKeys
   * - imagebuilder:CreatedResourceTag/<key>
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateInfrastructureConfiguration.html
   */
  public updateInfrastructureConfiguration() {
    this.add('imagebuilder:UpdateInfrastructureConfiguration');
    return this;
  }

  /**
   * Adds a resource of type component to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_Component.html
   *
   * @param componentName - Identifier for the componentName.
   * @param componentVersion - Identifier for the componentVersion.
   * @param componentBuildVersion - Identifier for the componentBuildVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onComponent(componentName: string, componentVersion: string, componentBuildVersion: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:imagebuilder:${Region}:${Account}:component/${ComponentName}/${ComponentVersion}/${ComponentBuildVersion}';
    arn = arn.replace('${ComponentName}', componentName);
    arn = arn.replace('${ComponentVersion}', componentVersion);
    arn = arn.replace('${ComponentBuildVersion}', componentBuildVersion);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type componentVersion to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ComponentVersion
   *
   * @param componentName - Identifier for the componentName.
   * @param componentVersion - Identifier for the componentVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onComponentVersion(componentName: string, componentVersion: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:imagebuilder:${Region}:${Account}:component/${ComponentName}/${ComponentVersion}';
    arn = arn.replace('${ComponentName}', componentName);
    arn = arn.replace('${ComponentVersion}', componentVersion);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type distributionConfiguration to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DistributionConfiguration.html
   *
   * @param distributionConfigurationName - Identifier for the distributionConfigurationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onDistributionConfiguration(distributionConfigurationName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:imagebuilder:${Region}:${Account}:distribution-configuration/${DistributionConfigurationName}';
    arn = arn.replace('${DistributionConfigurationName}', distributionConfigurationName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type image to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_Image.html
   *
   * @param imageName - Identifier for the imageName.
   * @param imageVersion - Identifier for the imageVersion.
   * @param imageBuildVersion - Identifier for the imageBuildVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onImage(imageName: string, imageVersion: string, imageBuildVersion: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:imagebuilder:${Region}:${Account}:image/${ImageName}/${ImageVersion}/${ImageBuildVersion}';
    arn = arn.replace('${ImageName}', imageName);
    arn = arn.replace('${ImageVersion}', imageVersion);
    arn = arn.replace('${ImageBuildVersion}', imageBuildVersion);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type imageVersion to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImageVersion.html
   *
   * @param imageName - Identifier for the imageName.
   * @param imageVersion - Identifier for the imageVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onImageVersion(imageName: string, imageVersion: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:imagebuilder:${Region}:${Account}:image/${ImageName}/${ImageVersion}';
    arn = arn.replace('${ImageName}', imageName);
    arn = arn.replace('${ImageVersion}', imageVersion);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type imageRecipe to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImageRecipe.html
   *
   * @param imageRecipeName - Identifier for the imageRecipeName.
   * @param imageRecipeVersion - Identifier for the imageRecipeVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onImageRecipe(imageRecipeName: string, imageRecipeVersion: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:imagebuilder:${Region}:${Account}:image-recipe/${ImageRecipeName}/${ImageRecipeVersion}';
    arn = arn.replace('${ImageRecipeName}', imageRecipeName);
    arn = arn.replace('${ImageRecipeVersion}', imageRecipeVersion);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type imagePipeline to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImagePipeline.html
   *
   * @param imagePipelineName - Identifier for the imagePipelineName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onImagePipeline(imagePipelineName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:imagebuilder:${Region}:${Account}:image-pipeline/${ImagePipelineName}';
    arn = arn.replace('${ImagePipelineName}', imagePipelineName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type infrastructureConfiguration to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_InfrastructureConfiguration.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onInfrastructureConfiguration(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:imagebuilder:${Region}:${Account}:infrastructure-configuration/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type kmsKey to the statement
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys
   *
   * @param keyId - Identifier for the keyId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onKmsKey(keyId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kms:${Region}:${Account}:key/${KeyId}';
    arn = arn.replace('${KeyId}', keyId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the tag key-value pairs attached to the resource created by Image Builder
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html#image-builder-security-createdresourcetag
   *
   * @param key The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCreatedResourceTag(key: string, value: string | string[], operator?: string) {
    return this.if(`imagebuilder:CreatedResourceTag/${ key }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html#image-builder-security-createdresourcetagkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCreatedResourceTagKeys(value: string | string[], operator?: string) {
    return this.if(`imagebuilder:CreatedResourceTagKeys`, value, operator || 'StringLike');
  }
}
