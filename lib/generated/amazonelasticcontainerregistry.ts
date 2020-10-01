import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [ecr](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticcontainerregistry.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ecr extends PolicyStatement {
  public servicePrefix = 'ecr';
  protected actionList: Actions = {
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
  protected resourceTypes: ResourceTypes = {
    "repository": {
      "name": "repository",
      "url": "https://docs.aws.amazon.com/AmazonECR/latest/userguide/iam-policy-structure.html#ECR_ARN_Format",
      "arn": "arn:${Partition}:ecr:${Region}:${Account}:repository/${RepositoryName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "ecr:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [ecr](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticcontainerregistry.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to check the availability of multiple image layers in a specified registry and repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchCheckLayerAvailability.html
   */
  public toBatchCheckLayerAvailability() {
    this.to('ecr:BatchCheckLayerAvailability');
    return this;
  }

  /**
   * Grants permission to delete a list of specified images within a specified repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchDeleteImage.html
   */
  public toBatchDeleteImage() {
    this.to('ecr:BatchDeleteImage');
    return this;
  }

  /**
   * Grants permission to get detailed information for specified images within a specified repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchGetImage.html
   */
  public toBatchGetImage() {
    this.to('ecr:BatchGetImage');
    return this;
  }

  /**
   * Grants permission to inform Amazon ECR that the image layer upload for a specified registry, repository name, and upload ID, has completed
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_CompleteLayerUpload.html
   */
  public toCompleteLayerUpload() {
    this.to('ecr:CompleteLayerUpload');
    return this;
  }

  /**
   * Grants permission to create an image repository
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_CreateRepository.html
   */
  public toCreateRepository() {
    this.to('ecr:CreateRepository');
    return this;
  }

  /**
   * Grants permission to delete the specified lifecycle policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteLifecyclePolicy.html
   */
  public toDeleteLifecyclePolicy() {
    this.to('ecr:DeleteLifecyclePolicy');
    return this;
  }

  /**
   * Grants permission to delete an existing image repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteRepository.html
   */
  public toDeleteRepository() {
    this.to('ecr:DeleteRepository');
    return this;
  }

  /**
   * Grants permission to delete the repository policy from a specified repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteRepositoryPolicy.html
   */
  public toDeleteRepositoryPolicy() {
    this.to('ecr:DeleteRepositoryPolicy');
    return this;
  }

  /**
   * Grants permission to describe the image scan findings for the specified image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeImageScanFindings.html
   */
  public toDescribeImageScanFindings() {
    this.to('ecr:DescribeImageScanFindings');
    return this;
  }

  /**
   * Grants permission to get metadata about the images in a repository, including image size, image tags, and creation date
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeImages.html
   */
  public toDescribeImages() {
    this.to('ecr:DescribeImages');
    return this;
  }

  /**
   * Grants permission to describe image repositories in a registry
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeRepositories.html
   */
  public toDescribeRepositories() {
    this.to('ecr:DescribeRepositories');
    return this;
  }

  /**
   * Grants permission to retrieve a token that is valid for a specified registry for 12 hours
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetAuthorizationToken.html
   */
  public toGetAuthorizationToken() {
    this.to('ecr:GetAuthorizationToken');
    return this;
  }

  /**
   * Grants permission to retrieve the download URL corresponding to an image layer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetDownloadUrlForLayer.html
   */
  public toGetDownloadUrlForLayer() {
    this.to('ecr:GetDownloadUrlForLayer');
    return this;
  }

  /**
   * Grants permission to retrieve the specified lifecycle policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetLifecyclePolicy.html
   */
  public toGetLifecyclePolicy() {
    this.to('ecr:GetLifecyclePolicy');
    return this;
  }

  /**
   * Grants permission to retrieve the results of the specified lifecycle policy preview request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetLifecyclePolicyPreview.html
   */
  public toGetLifecyclePolicyPreview() {
    this.to('ecr:GetLifecyclePolicyPreview');
    return this;
  }

  /**
   * Grants permission to retrieve the repository policy for a specified repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetRepositoryPolicy.html
   */
  public toGetRepositoryPolicy() {
    this.to('ecr:GetRepositoryPolicy');
    return this;
  }

  /**
   * Grants permission to notify Amazon ECR that you intend to upload an image layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_InitiateLayerUpload.html
   */
  public toInitiateLayerUpload() {
    this.to('ecr:InitiateLayerUpload');
    return this;
  }

  /**
   * Grants permission to list all the image IDs for a given repository
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_ListImages.html
   */
  public toListImages() {
    this.to('ecr:ListImages');
    return this;
  }

  /**
   * Grants permission to list the tags for an Amazon ECR resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ecr:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to create or update the image manifest associated with an image
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutImage.html
   */
  public toPutImage() {
    this.to('ecr:PutImage');
    return this;
  }

  /**
   * Grants permission to update the image scanning configuration for a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutImageScanningConfiguration.html
   */
  public toPutImageScanningConfiguration() {
    this.to('ecr:PutImageScanningConfiguration');
    return this;
  }

  /**
   * Grants permission to update the image tag mutability settings for a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutImageTagMutability.html
   */
  public toPutImageTagMutability() {
    this.to('ecr:PutImageTagMutability');
    return this;
  }

  /**
   * Grants permission to create or update a lifecycle policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutLifecyclePolicy.html
   */
  public toPutLifecyclePolicy() {
    this.to('ecr:PutLifecyclePolicy');
    return this;
  }

  /**
   * Grants permission to apply a repository policy on a specified repository to control access permissions
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_SetRepositoryPolicy.html
   */
  public toSetRepositoryPolicy() {
    this.to('ecr:SetRepositoryPolicy');
    return this;
  }

  /**
   * Grants permission to start an image scan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_StartImageScan.html
   */
  public toStartImageScan() {
    this.to('ecr:StartImageScan');
    return this;
  }

  /**
   * Grants permission to start a preview of the specified lifecycle policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_StartLifecyclePolicyPreview.html
   */
  public toStartLifecyclePolicyPreview() {
    this.to('ecr:StartLifecyclePolicyPreview');
    return this;
  }

  /**
   * Grants permission to tag an Amazon ECR resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('ecr:TagResource');
    return this;
  }

  /**
   * Grants permission to untag an Amazon ECR resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('ecr:UntagResource');
    return this;
  }

  /**
   * Grants permission to upload an image layer part to Amazon ECR
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_UploadLayerPart.html
   */
  public toUploadLayerPart() {
    this.to('ecr:UploadLayerPart');
    return this;
  }

  /**
   * Adds a resource of type repository to the statement
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/userguide/iam-policy-structure.html#ECR_ARN_Format
   *
   * @param repositoryName - Identifier for the repositoryName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onRepository(repositoryName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ecr:${Region}:${Account}:repository/${RepositoryName}';
    arn = arn.replace('${RepositoryName}', repositoryName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on tag-value associated with the resource.
   *
   * Applies to resource types:
   * - repository
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`ecr:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}
