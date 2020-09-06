import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [iotevents](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotevents.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iotevents extends PolicyStatement {
  public servicePrefix = 'iotevents';
  protected actionList: Actions = {
    "BatchPutMessage": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchPutMessage.html",
      "description": "Sends a set of messages to the AWS IoT Events system.",
      "accessLevel": "Write",
      "resourceTypes": {
        "input": {
          "required": true
        }
      }
    },
    "BatchUpdateDetector": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchUpdateDetector.html",
      "description": "Update an detector within the AWS IoT Events system.",
      "accessLevel": "Write",
      "resourceTypes": {
        "input": {
          "required": true
        }
      }
    },
    "CreateDetectorModel": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateDetectorModel.html",
      "description": "Creates a detector model.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detectorModel": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateInput": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateInput.html",
      "description": "Creates an input.",
      "accessLevel": "Write",
      "resourceTypes": {
        "input": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteDetectorModel": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_DeleteDetectorModel.html",
      "description": "Deletes a detector model.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detectorModel": {
          "required": true
        }
      }
    },
    "DeleteInput": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_DeleteInput.html",
      "description": "Deletes an input.",
      "accessLevel": "Write",
      "resourceTypes": {
        "input": {
          "required": true
        }
      }
    },
    "DescribeDetector": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_DescribeDetector.html",
      "description": "Returns information about the specified detector (instance).",
      "accessLevel": "Read",
      "resourceTypes": {
        "detectorModel": {
          "required": true
        }
      }
    },
    "DescribeDetectorModel": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeDetectorModel.html",
      "description": "Describes a detector model.",
      "accessLevel": "Read",
      "resourceTypes": {
        "detectorModel": {
          "required": true
        }
      }
    },
    "DescribeInput": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeInput.html",
      "description": "Describes an input.",
      "accessLevel": "Read",
      "resourceTypes": {
        "input": {
          "required": true
        }
      }
    },
    "DescribeLoggingOptions": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeLoggingOptions.html",
      "description": "Retrieves the current settings of the AWS IoT Events logging options.",
      "accessLevel": "Read"
    },
    "ListDetectorModelVersions": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListDetectorModelVersions.html",
      "description": "Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.",
      "accessLevel": "List",
      "resourceTypes": {
        "detectorModel": {
          "required": true
        }
      }
    },
    "ListDetectorModels": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListDetectorModels.html",
      "description": "Lists the detector models you have created. Only the metadata associated with each detector model is returned.",
      "accessLevel": "List"
    },
    "ListDetectors": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html",
      "description": "Lists detectors (the instances of a detector model).",
      "accessLevel": "List",
      "resourceTypes": {
        "detectorModel": {
          "required": true
        }
      }
    },
    "ListInputs": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListInputs.html",
      "description": "Lists the inputs you have created.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListTagsForResource.html",
      "description": "Lists the tags (metadata) which you have assigned to the resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "detectorModel": {
          "required": false
        },
        "input": {
          "required": false
        }
      }
    },
    "PutLoggingOptions": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_PutLoggingOptions.html",
      "description": "Sets or updates the AWS IoT Events logging options.",
      "accessLevel": "Write"
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_TagResource.html",
      "description": "Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "detectorModel": {
          "required": false
        },
        "input": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_UntagResource.html",
      "description": "Removes the given tags (metadata) from the resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "detectorModel": {
          "required": false
        },
        "input": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateDetectorModel": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateDetectorModel.html",
      "description": "Updates a detector model.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detectorModel": {
          "required": true
        }
      }
    },
    "UpdateInput": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateInput.html",
      "description": "Updates an input.",
      "accessLevel": "Write",
      "resourceTypes": {
        "input": {
          "required": true
        }
      }
    },
    "UpdateInputRouting": {
      "url": "https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateInputRouting.html",
      "description": "Updates input routing.",
      "accessLevel": "Write",
      "resourceTypes": {
        "input": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "detectorModel": {
      "name": "detectorModel",
      "url": "https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-getting-started.html",
      "arn": "arn:${Partition}:iotevents:${Region}:${Account}:detectorModel/${DetectorModelName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "input": {
      "name": "input",
      "url": "https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-getting-started.html",
      "arn": "arn:${Partition}:iotevents:${Region}:${Account}:input/${InputName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [iotevents](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotevents.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Sends a set of messages to the AWS IoT Events system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchPutMessage.html
   */
  public toBatchPutMessage() {
    this.add('iotevents:BatchPutMessage');
    return this;
  }

  /**
   * Update an detector within the AWS IoT Events system.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchUpdateDetector.html
   */
  public toBatchUpdateDetector() {
    this.add('iotevents:BatchUpdateDetector');
    return this;
  }

  /**
   * Creates a detector model.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateDetectorModel.html
   */
  public toCreateDetectorModel() {
    this.add('iotevents:CreateDetectorModel');
    return this;
  }

  /**
   * Creates an input.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_CreateInput.html
   */
  public toCreateInput() {
    this.add('iotevents:CreateInput');
    return this;
  }

  /**
   * Deletes a detector model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DeleteDetectorModel.html
   */
  public toDeleteDetectorModel() {
    this.add('iotevents:DeleteDetectorModel');
    return this;
  }

  /**
   * Deletes an input.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DeleteInput.html
   */
  public toDeleteInput() {
    this.add('iotevents:DeleteInput');
    return this;
  }

  /**
   * Returns information about the specified detector (instance).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_DescribeDetector.html
   */
  public toDescribeDetector() {
    this.add('iotevents:DescribeDetector');
    return this;
  }

  /**
   * Describes a detector model.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeDetectorModel.html
   */
  public toDescribeDetectorModel() {
    this.add('iotevents:DescribeDetectorModel');
    return this;
  }

  /**
   * Describes an input.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeInput.html
   */
  public toDescribeInput() {
    this.add('iotevents:DescribeInput');
    return this;
  }

  /**
   * Retrieves the current settings of the AWS IoT Events logging options.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_DescribeLoggingOptions.html
   */
  public toDescribeLoggingOptions() {
    this.add('iotevents:DescribeLoggingOptions');
    return this;
  }

  /**
   * Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListDetectorModelVersions.html
   */
  public toListDetectorModelVersions() {
    this.add('iotevents:ListDetectorModelVersions');
    return this;
  }

  /**
   * Lists the detector models you have created. Only the metadata associated with each detector model is returned.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListDetectorModels.html
   */
  public toListDetectorModels() {
    this.add('iotevents:ListDetectorModels');
    return this;
  }

  /**
   * Lists detectors (the instances of a detector model).
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html
   */
  public toListDetectors() {
    this.add('iotevents:ListDetectors');
    return this;
  }

  /**
   * Lists the inputs you have created.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListInputs.html
   */
  public toListInputs() {
    this.add('iotevents:ListInputs');
    return this;
  }

  /**
   * Lists the tags (metadata) which you have assigned to the resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('iotevents:ListTagsForResource');
    return this;
  }

  /**
   * Sets or updates the AWS IoT Events logging options.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_PutLoggingOptions.html
   */
  public toPutLoggingOptions() {
    this.add('iotevents:PutLoggingOptions');
    return this;
  }

  /**
   * Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_TagResource.html
   */
  public toTagResource() {
    this.add('iotevents:TagResource');
    return this;
  }

  /**
   * Removes the given tags (metadata) from the resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('iotevents:UntagResource');
    return this;
  }

  /**
   * Updates a detector model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateDetectorModel.html
   */
  public toUpdateDetectorModel() {
    this.add('iotevents:UpdateDetectorModel');
    return this;
  }

  /**
   * Updates an input.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateInput.html
   */
  public toUpdateInput() {
    this.add('iotevents:UpdateInput');
    return this;
  }

  /**
   * Updates input routing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotevents/latest/apireference/API_UpdateInputRouting.html
   */
  public toUpdateInputRouting() {
    this.add('iotevents:UpdateInputRouting');
    return this;
  }

  /**
   * Adds a resource of type detectorModel to the statement
   *
   * https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-getting-started.html
   *
   * @param detectorModelName - Identifier for the detectorModelName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDetectorModel(detectorModelName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotevents:${Region}:${Account}:detectorModel/${DetectorModelName}';
    arn = arn.replace('${DetectorModelName}', detectorModelName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type input to the statement
   *
   * https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-getting-started.html
   *
   * @param inputName - Identifier for the inputName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInput(inputName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotevents:${Region}:${Account}:input/${InputName}';
    arn = arn.replace('${InputName}', inputName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
