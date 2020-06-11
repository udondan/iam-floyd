import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service ecr
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticcontainerregistry.html
 */
export class Ecr extends PolicyStatement {
  public servicePrefix = 'ecr';
  public actions : Actions = {
    "BatchCheckLayerAvailability": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchCheckLayerAvailability.html",
      "description": "Grants permission to check the availability of multiple image layers in a specified registry and repository",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "BatchDeleteImage": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchDeleteImage.html",
      "description": "Grants permission to delete a list of specified images within a specified repository",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "BatchGetImage": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchGetImage.html",
      "description": "Grants permission to get detailed information for specified images within a specified repository",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "CompleteLayerUpload": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_CompleteLayerUpload.html",
      "description": "Grants permission to inform Amazon ECR that the image layer upload for a specified registry, repository name, and upload ID, has completed",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "CreateRepository": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_CreateRepository.html",
      "description": "Grants permission to create an image repository",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteLifecyclePolicy": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteLifecyclePolicy.html",
      "description": "Grants permission to delete the specified lifecycle policy",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "DeleteRepository": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteRepository.html",
      "description": "Grants permission to delete an existing image repository",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "DeleteRepositoryPolicy": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteRepositoryPolicy.html",
      "description": "Grants permission to delete the repository policy from a specified repository",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "DescribeImageScanFindings": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeImageScanFindings.html",
      "description": "Grants permission to describe the image scan findings for the specified image",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "DescribeImages": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeImages.html",
      "description": "Grants permission to get metadata about the images in a repository, including image size, image tags, and creation date",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "DescribeRepositories": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeRepositories.html",
      "description": "Grants permission to describe image repositories in a registry",
      "accessLevel": "List",
      "resourceTypes": {
        "repository": {
          "required": false
        }
      }
    },
    "GetAuthorizationToken": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetAuthorizationToken.html",
      "description": "Grants permission to retrieve a token that is valid for a specified registry for 12 hours",
      "accessLevel": "Read"
    },
    "GetDownloadUrlForLayer": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetDownloadUrlForLayer.html",
      "description": "Grants permission to retrieve the download URL corresponding to an image layer",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetLifecyclePolicy": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetLifecyclePolicy.html",
      "description": "Grants permission to retrieve the specified lifecycle policy",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetLifecyclePolicyPreview": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetLifecyclePolicyPreview.html",
      "description": "Grants permission to retrieve the results of the specified lifecycle policy preview request",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "GetRepositoryPolicy": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetRepositoryPolicy.html",
      "description": "Grants permission to retrieve the repository policy for a specified repository",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "InitiateLayerUpload": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_InitiateLayerUpload.html",
      "description": "Grants permission to notify Amazon ECR that you intend to upload an image layer",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "ListImages": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_ListImages.html",
      "description": "Grants permission to list all the image IDs for a given repository",
      "accessLevel": "List",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to list the tags for an Amazon ECR resource",
      "accessLevel": "Read",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "PutImage": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutImage.html",
      "description": "Grants permission to create or update the image manifest associated with an image",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "PutImageScanningConfiguration": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutImageScanningConfiguration.html",
      "description": "Grants permission to update the image scanning configuration for a repository",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "PutImageTagMutability": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutImageTagMutability.html",
      "description": "Grants permission to update the image tag mutability settings for a repository",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "PutLifecyclePolicy": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutLifecyclePolicy.html",
      "description": "Grants permission to create or update a lifecycle policy",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "SetRepositoryPolicy": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_SetRepositoryPolicy.html",
      "description": "Grants permission to apply a repository policy on a specified repository to control access permissions",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "StartImageScan": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_StartImageScan.html",
      "description": "Grants permission to start an image scan",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "StartLifecyclePolicyPreview": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_StartLifecyclePolicyPreview.html",
      "description": "Grants permission to start a preview of the specified lifecycle policy",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to tag an Amazon ECR resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to untag an Amazon ECR resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    },
    "UploadLayerPart": {
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_UploadLayerPart.html",
      "description": "Grants permission to upload an image layer part to Amazon ECR",
      "accessLevel": "Write",
      "resourceTypes": {
        "repository": {
          "required": true
        }
      }
    }
  };

  /**
   * Grants permission to check the availability of multiple image layers in a specified registry and repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchCheckLayerAvailability.html
   */
  public batchCheckLayerAvailability () {
    this.add('ecr:BatchCheckLayerAvailability');
    return this;
  }

  /**
   * Grants permission to delete a list of specified images within a specified repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchDeleteImage.html
   */
  public batchDeleteImage () {
    this.add('ecr:BatchDeleteImage');
    return this;
  }

  /**
   * Grants permission to get detailed information for specified images within a specified repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchGetImage.html
   */
  public batchGetImage () {
    this.add('ecr:BatchGetImage');
    return this;
  }

  /**
   * Grants permission to inform Amazon ECR that the image layer upload for a specified registry, repository name, and upload ID, has completed
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_CompleteLayerUpload.html
   */
  public completeLayerUpload () {
    this.add('ecr:CompleteLayerUpload');
    return this;
  }

  /**
   * Grants permission to create an image repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_CreateRepository.html
   */
  public createRepository () {
    this.add('ecr:CreateRepository');
    return this;
  }

  /**
   * Grants permission to delete the specified lifecycle policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteLifecyclePolicy.html
   */
  public deleteLifecyclePolicy () {
    this.add('ecr:DeleteLifecyclePolicy');
    return this;
  }

  /**
   * Grants permission to delete an existing image repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteRepository.html
   */
  public deleteRepository () {
    this.add('ecr:DeleteRepository');
    return this;
  }

  /**
   * Grants permission to delete the repository policy from a specified repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteRepositoryPolicy.html
   */
  public deleteRepositoryPolicy () {
    this.add('ecr:DeleteRepositoryPolicy');
    return this;
  }

  /**
   * Grants permission to describe the image scan findings for the specified image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeImageScanFindings.html
   */
  public describeImageScanFindings () {
    this.add('ecr:DescribeImageScanFindings');
    return this;
  }

  /**
   * Grants permission to get metadata about the images in a repository, including image size, image tags, and creation date
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeImages.html
   */
  public describeImages () {
    this.add('ecr:DescribeImages');
    return this;
  }

  /**
   * Grants permission to describe image repositories in a registry
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeRepositories.html
   */
  public describeRepositories () {
    this.add('ecr:DescribeRepositories');
    return this;
  }

  /**
   * Grants permission to retrieve a token that is valid for a specified registry for 12 hours
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetAuthorizationToken.html
   */
  public getAuthorizationToken () {
    this.add('ecr:GetAuthorizationToken');
    return this;
  }

  /**
   * Grants permission to retrieve the download URL corresponding to an image layer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetDownloadUrlForLayer.html
   */
  public getDownloadUrlForLayer () {
    this.add('ecr:GetDownloadUrlForLayer');
    return this;
  }

  /**
   * Grants permission to retrieve the specified lifecycle policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetLifecyclePolicy.html
   */
  public getLifecyclePolicy () {
    this.add('ecr:GetLifecyclePolicy');
    return this;
  }

  /**
   * Grants permission to retrieve the results of the specified lifecycle policy preview request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetLifecyclePolicyPreview.html
   */
  public getLifecyclePolicyPreview () {
    this.add('ecr:GetLifecyclePolicyPreview');
    return this;
  }

  /**
   * Grants permission to retrieve the repository policy for a specified repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetRepositoryPolicy.html
   */
  public getRepositoryPolicy () {
    this.add('ecr:GetRepositoryPolicy');
    return this;
  }

  /**
   * Grants permission to notify Amazon ECR that you intend to upload an image layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_InitiateLayerUpload.html
   */
  public initiateLayerUpload () {
    this.add('ecr:InitiateLayerUpload');
    return this;
  }

  /**
   * Grants permission to list all the image IDs for a given repository
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_ListImages.html
   */
  public listImages () {
    this.add('ecr:ListImages');
    return this;
  }

  /**
   * Grants permission to list the tags for an Amazon ECR resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource () {
    this.add('ecr:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to create or update the image manifest associated with an image
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutImage.html
   */
  public putImage () {
    this.add('ecr:PutImage');
    return this;
  }

  /**
   * Grants permission to update the image scanning configuration for a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutImageScanningConfiguration.html
   */
  public putImageScanningConfiguration () {
    this.add('ecr:PutImageScanningConfiguration');
    return this;
  }

  /**
   * Grants permission to update the image tag mutability settings for a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutImageTagMutability.html
   */
  public putImageTagMutability () {
    this.add('ecr:PutImageTagMutability');
    return this;
  }

  /**
   * Grants permission to create or update a lifecycle policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutLifecyclePolicy.html
   */
  public putLifecyclePolicy () {
    this.add('ecr:PutLifecyclePolicy');
    return this;
  }

  /**
   * Grants permission to apply a repository policy on a specified repository to control access permissions
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_SetRepositoryPolicy.html
   */
  public setRepositoryPolicy () {
    this.add('ecr:SetRepositoryPolicy');
    return this;
  }

  /**
   * Grants permission to start an image scan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_StartImageScan.html
   */
  public startImageScan () {
    this.add('ecr:StartImageScan');
    return this;
  }

  /**
   * Grants permission to start a preview of the specified lifecycle policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_StartLifecyclePolicyPreview.html
   */
  public startLifecyclePolicyPreview () {
    this.add('ecr:StartLifecyclePolicyPreview');
    return this;
  }

  /**
   * Grants permission to tag an Amazon ECR resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_TagResource.html
   */
  public tagResource () {
    this.add('ecr:TagResource');
    return this;
  }

  /**
   * Grants permission to untag an Amazon ECR resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_UntagResource.html
   */
  public untagResource () {
    this.add('ecr:UntagResource');
    return this;
  }

  /**
   * Grants permission to upload an image layer part to Amazon ECR
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_UploadLayerPart.html
   */
  public uploadLayerPart () {
    this.add('ecr:UploadLayerPart');
    return this;
  }
}
