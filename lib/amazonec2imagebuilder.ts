import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service imagebuilder
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2imagebuilder.html
 */
export class Imagebuilder extends PolicyStatement {
  public servicePrefix = 'imagebuilder';
  public actions : Actions = {
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
      "resourceTypes": {
        "infrastructureConfiguration": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
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
      "resourceTypes": {
        "infrastructureConfiguration": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Cancel an image creation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CancelImageCreation.html
   */
  public cancelImageCreation () {
    this.add('imagebuilder:CancelImageCreation');
    return this;
  }

  /**
   * Create a new component
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html
   */
  public createComponent () {
    this.add('imagebuilder:CreateComponent');
    return this;
  }

  /**
   * Create a new distribution configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateDistributionConfiguration.html
   */
  public createDistributionConfiguration () {
    this.add('imagebuilder:CreateDistributionConfiguration');
    return this;
  }

  /**
   * Create a new image
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImage.html
   */
  public createImage () {
    this.add('imagebuilder:CreateImage');
    return this;
  }

  /**
   * Create a new image pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImagePipeline.html
   */
  public createImagePipeline () {
    this.add('imagebuilder:CreateImagePipeline');
    return this;
  }

  /**
   * Create a new Image Recipe
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImageRecipe.html
   */
  public createImageRecipe () {
    this.add('imagebuilder:CreateImageRecipe');
    return this;
  }

  /**
   * Create a new infrastructure configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateInfrastructureConfiguration.html
   */
  public createInfrastructureConfiguration () {
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
  public deleteComponent () {
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
  public deleteDistributionConfiguration () {
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
  public deleteImage () {
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
  public deleteImagePipeline () {
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
  public deleteImageRecipe () {
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
  public deleteInfrastructureConfiguration () {
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
  public getComponent () {
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
  public getComponentPolicy () {
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
  public getDistributionConfiguration () {
    this.add('imagebuilder:GetDistributionConfiguration');
    return this;
  }

  /**
   * View details about an image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImage.html
   */
  public getImage () {
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
  public getImagePipeline () {
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
  public getImagePolicy () {
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
  public getImageRecipe () {
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
  public getImageRecipePolicy () {
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
  public getInfrastructureConfiguration () {
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
  public listComponentBuildVersions () {
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
  public listComponents () {
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
  public listDistributionConfigurations () {
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
  public listImageBuildVersions () {
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
  public listImagePipelines () {
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
  public listImageRecipes () {
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
  public listImages () {
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
  public listInfrastructureConfigurations () {
    this.add('imagebuilder:ListInfrastructureConfigurations');
    return this;
  }

  /**
   * List tag for an Image Builder resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource () {
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
  public putComponentPolicy () {
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
  public putImagePolicy () {
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
  public putImageRecipePolicy () {
    this.add('imagebuilder:PutImageRecipePolicy');
    return this;
  }

  /**
   * Create a new image from a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_StartImagePipelineExecution.html
   */
  public startImagePipelineExecution () {
    this.add('imagebuilder:StartImagePipelineExecution');
    return this;
  }

  /**
   * Tag an Image Builder resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_TagResource.html
   */
  public tagResource () {
    this.add('imagebuilder:TagResource');
    return this;
  }

  /**
   * Untag an Image Builder resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UntagResource.html
   */
  public untagResource () {
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
  public updateDistributionConfiguration () {
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
  public updateImagePipeline () {
    this.add('imagebuilder:UpdateImagePipeline');
    return this;
  }

  /**
   * Update an existing infrastructure configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateInfrastructureConfiguration.html
   */
  public updateInfrastructureConfiguration () {
    this.add('imagebuilder:UpdateInfrastructureConfiguration');
    return this;
  }
}
