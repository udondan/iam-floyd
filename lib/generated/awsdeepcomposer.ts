import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [deepcomposer](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdeepcomposer.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Deepcomposer extends PolicyStatement {
  public servicePrefix = 'deepcomposer';
  protected actionList: Actions = {
    "AssociateCoupon": {
      "url": "",
      "description": "Associates a DeepComposer coupon (or DSN) with the account associated with the sender of the request.",
      "accessLevel": "Write"
    },
    "CreateAudio": {
      "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html",
      "description": "Creates an audio file by converting the midi composition into a wav or mp3 file.",
      "accessLevel": "Write",
      "resourceTypes": {
        "composition": {
          "required": true
        }
      }
    },
    "CreateComposition": {
      "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html",
      "description": "Creates a multi-track midi composition.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateModel": {
      "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html",
      "description": "Starts creating/training a generative-model that is able to perform inference against the user-provided piano-melody to create a multi-track midi composition.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteComposition": {
      "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html",
      "description": "Deletes the composition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "composition": {
          "required": true
        }
      }
    },
    "DeleteModel": {
      "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html",
      "description": "Deletes the model.",
      "accessLevel": "Write",
      "resourceTypes": {
        "model": {
          "required": true
        }
      }
    },
    "GetComposition": {
      "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html",
      "description": "Returns information about the composition.",
      "accessLevel": "Read",
      "resourceTypes": {
        "composition": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetModel": {
      "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html",
      "description": "Returns information about the model.",
      "accessLevel": "Read",
      "resourceTypes": {
        "model": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetSampleModel": {
      "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html",
      "description": "Returns information about the sample/pre-trained DeepComposer model.",
      "accessLevel": "Read"
    },
    "ListCompositions": {
      "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html",
      "description": "Returns a list of all the compositions owned by the sender of the request.",
      "accessLevel": "List"
    },
    "ListModels": {
      "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html",
      "description": "Returns a list of all the models owned by the sender of the request.",
      "accessLevel": "List"
    },
    "ListSampleModels": {
      "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html",
      "description": "Returns a list of all the sample/pre-trained models provided by the DeepComposer service.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "",
      "description": "Grants permission to lists tag for a resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "composition": {
          "required": false
        },
        "model": {
          "required": false
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "ListTrainingTopics": {
      "url": "",
      "description": "Returns a list of all the training options or topic for creating/training a model.",
      "accessLevel": "List"
    },
    "TagResource": {
      "url": "",
      "description": "Grants permission to tag a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "composition": {
          "required": false
        },
        "model": {
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
      "url": "",
      "description": "Grants permission to untag a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "composition": {
          "required": false
        },
        "model": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateComposition": {
      "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html",
      "description": "Modifies the mutable properties associated with a composition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "composition": {
          "required": true
        }
      }
    },
    "UpdateModel": {
      "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html",
      "description": "Modifies the mutable properties associated with a model.",
      "accessLevel": "Write",
      "resourceTypes": {
        "model": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "model": {
      "name": "model",
      "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html",
      "arn": "arn:${Partition}:deepcomposer:${Region}:${Account}:model/${ModelId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "composition": {
      "name": "composition",
      "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html",
      "arn": "arn:${Partition}:deepcomposer:${Region}:${Account}:composition/${CompositionId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "audio": {
      "name": "audio",
      "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html",
      "arn": "arn:${Partition}:deepcomposer:${Region}:${Account}:audio/${AudioId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [deepcomposer](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdeepcomposer.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Associates a DeepComposer coupon (or DSN) with the account associated with the sender of the request.
   *
   * Access Level: Write
   */
  public toAssociateCoupon() {
    this.add('deepcomposer:AssociateCoupon');
    return this;
  }

  /**
   * Creates an audio file by converting the midi composition into a wav or mp3 file.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   */
  public toCreateAudio() {
    this.add('deepcomposer:CreateAudio');
    return this;
  }

  /**
   * Creates a multi-track midi composition.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   */
  public toCreateComposition() {
    this.add('deepcomposer:CreateComposition');
    return this;
  }

  /**
   * Starts creating/training a generative-model that is able to perform inference against the user-provided piano-melody to create a multi-track midi composition.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html
   */
  public toCreateModel() {
    this.add('deepcomposer:CreateModel');
    return this;
  }

  /**
   * Deletes the composition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   */
  public toDeleteComposition() {
    this.add('deepcomposer:DeleteComposition');
    return this;
  }

  /**
   * Deletes the model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html
   */
  public toDeleteModel() {
    this.add('deepcomposer:DeleteModel');
    return this;
  }

  /**
   * Returns information about the composition.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   */
  public toGetComposition() {
    this.add('deepcomposer:GetComposition');
    return this;
  }

  /**
   * Returns information about the model.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html
   */
  public toGetModel() {
    this.add('deepcomposer:GetModel');
    return this;
  }

  /**
   * Returns information about the sample/pre-trained DeepComposer model.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   */
  public toGetSampleModel() {
    this.add('deepcomposer:GetSampleModel');
    return this;
  }

  /**
   * Returns a list of all the compositions owned by the sender of the request.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   */
  public toListCompositions() {
    this.add('deepcomposer:ListCompositions');
    return this;
  }

  /**
   * Returns a list of all the models owned by the sender of the request.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html
   */
  public toListModels() {
    this.add('deepcomposer:ListModels');
    return this;
  }

  /**
   * Returns a list of all the sample/pre-trained models provided by the DeepComposer service.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   */
  public toListSampleModels() {
    this.add('deepcomposer:ListSampleModels');
    return this;
  }

  /**
   * Grants permission to lists tag for a resource.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public toListTagsForResource() {
    this.add('deepcomposer:ListTagsForResource');
    return this;
  }

  /**
   * Returns a list of all the training options or topic for creating/training a model.
   *
   * Access Level: List
   */
  public toListTrainingTopics() {
    this.add('deepcomposer:ListTrainingTopics');
    return this;
  }

  /**
   * Grants permission to tag a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   */
  public toTagResource() {
    this.add('deepcomposer:TagResource');
    return this;
  }

  /**
   * Grants permission to untag a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   */
  public toUntagResource() {
    this.add('deepcomposer:UntagResource');
    return this;
  }

  /**
   * Modifies the mutable properties associated with a composition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   */
  public toUpdateComposition() {
    this.add('deepcomposer:UpdateComposition');
    return this;
  }

  /**
   * Modifies the mutable properties associated with a model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html
   */
  public toUpdateModel() {
    this.add('deepcomposer:UpdateModel');
    return this;
  }

  /**
   * Adds a resource of type model to the statement
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html
   *
   * @param modelId - Identifier for the modelId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModel(modelId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:deepcomposer:${Region}:${Account}:model/${ModelId}';
    arn = arn.replace('${ModelId}', modelId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type composition to the statement
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   *
   * @param compositionId - Identifier for the compositionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onComposition(compositionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:deepcomposer:${Region}:${Account}:composition/${CompositionId}';
    arn = arn.replace('${CompositionId}', compositionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type audio to the statement
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   *
   * @param audioId - Identifier for the audioId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAudio(audioId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:deepcomposer:${Region}:${Account}:audio/${AudioId}';
    arn = arn.replace('${AudioId}', audioId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateComposition()
   * - .toCreateModel()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toGetComposition()
   * - .toGetModel()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - model
   * - composition
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateComposition()
   * - .toCreateModel()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
