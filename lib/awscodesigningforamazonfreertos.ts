import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service signer
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodesigningforamazonfreertos.html
 */
export class Signer extends PolicyStatement {
  public servicePrefix = 'signer';
  public actions : Actions = {
    "CancelSigningProfile": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_CancelSigningProfile.html",
      "description": "Cancels a signing profile.",
      "accessLevel": "Write",
      "resourceTypes": {
        "signing-profile": {
          "required": true
        }
      }
    },
    "DescribeSigningJob": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_DescribeSigningJob.html",
      "description": "Describe a signing job.",
      "accessLevel": "Read",
      "resourceTypes": {
        "signing-job": {
          "required": true
        }
      }
    },
    "GetSigningPlatform": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_GetSigningPlatform.html",
      "description": "Retrieves a signing platform.",
      "accessLevel": "Read"
    },
    "GetSigningProfile": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_GetSigningProfile.html",
      "description": "Retrieves a signing profile.",
      "accessLevel": "Read",
      "resourceTypes": {
        "signing-profile": {
          "required": true
        }
      }
    },
    "ListSigningJobs": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_ListSigningJobs.html",
      "description": "List signing jobs.",
      "accessLevel": "List"
    },
    "ListSigningPlatforms": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_ListSigningPlatforms.html",
      "description": "List all signing platforms.",
      "accessLevel": "List"
    },
    "ListSigningProfiles": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_ListSigningProfiles.html",
      "description": "List all signing profile associated with the account.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_ListTagsForResource.html",
      "description": "Lists the tags associated with the Signing Profile resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "signing-profile": {
          "required": true
        }
      }
    },
    "PutSigningProfile": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_PutSigningProfile.html",
      "description": "Creates a new signing profile if not exists.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "StartSigningJob": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_StartSigningJob.html",
      "description": "Starts a code signing request.",
      "accessLevel": "Write",
      "resourceTypes": {
        "signing-profile": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_TagResource.html",
      "description": "Adds one or more tags to an Signing Profile resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "signing-profile": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/signer/latest/api/API_UntagResource.html",
      "description": "Removes one or more tags from an Signing Profile resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "signing-profile": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    }
  };
  public resourceTypes : ResourceTypes = {
    "signing-profile": {
      "name": "signing-profile",
      "arn": "arn:${Partition}:signer:${Region}:${Account}:/signing-profiles/${profileName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "signing-job": {
      "name": "signing-job",
      "arn": "arn:${Partition}:signer:${Region}:${Account}:/signing-jobs/${jobId}",
      "conditionKeys": []
    }
  };

  /**
   * Cancels a signing profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_CancelSigningProfile.html
   */
  public cancelSigningProfile () {
    this.add('signer:CancelSigningProfile');
    return this;
  }

  /**
   * Describe a signing job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_DescribeSigningJob.html
   */
  public describeSigningJob () {
    this.add('signer:DescribeSigningJob');
    return this;
  }

  /**
   * Retrieves a signing platform.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_GetSigningPlatform.html
   */
  public getSigningPlatform () {
    this.add('signer:GetSigningPlatform');
    return this;
  }

  /**
   * Retrieves a signing profile.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_GetSigningProfile.html
   */
  public getSigningProfile () {
    this.add('signer:GetSigningProfile');
    return this;
  }

  /**
   * List signing jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListSigningJobs.html
   */
  public listSigningJobs () {
    this.add('signer:ListSigningJobs');
    return this;
  }

  /**
   * List all signing platforms.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListSigningPlatforms.html
   */
  public listSigningPlatforms () {
    this.add('signer:ListSigningPlatforms');
    return this;
  }

  /**
   * List all signing profile associated with the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListSigningProfiles.html
   */
  public listSigningProfiles () {
    this.add('signer:ListSigningProfiles');
    return this;
  }

  /**
   * Lists the tags associated with the Signing Profile resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListTagsForResource.html
   */
  public listTagsForResource () {
    this.add('signer:ListTagsForResource');
    return this;
  }

  /**
   * Creates a new signing profile if not exists.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_PutSigningProfile.html
   */
  public putSigningProfile () {
    this.add('signer:PutSigningProfile');
    return this;
  }

  /**
   * Starts a code signing request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_StartSigningJob.html
   */
  public startSigningJob () {
    this.add('signer:StartSigningJob');
    return this;
  }

  /**
   * Adds one or more tags to an Signing Profile resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_TagResource.html
   */
  public tagResource () {
    this.add('signer:TagResource');
    return this;
  }

  /**
   * Removes one or more tags from an Signing Profile resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_UntagResource.html
   */
  public untagResource () {
    this.add('signer:UntagResource');
    return this;
  }
}
