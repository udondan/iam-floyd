import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [mediaconvert](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediaconvert.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mediaconvert extends PolicyStatement {
  public servicePrefix = 'mediaconvert';
  protected actionList: Actions = {
    "AssociateCertificate": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/certificates.html",
      "description": "Grants permission to associate an AWS Certificate Manager (ACM) Amazon Resource Name (ARN) with AWS Elemental MediaConvert.",
      "accessLevel": "Write"
    },
    "CancelJob": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html",
      "description": "Grants permission to cancel an AWS Elemental MediaConvert job that is waiting in queue",
      "accessLevel": "Write",
      "resourceTypes": {
        "Job": {
          "required": true
        }
      }
    },
    "CreateJob": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html",
      "description": "Grants permission to create and submit an AWS Elemental MediaConvert job",
      "accessLevel": "Write",
      "resourceTypes": {
        "JobTemplate": {
          "required": false
        },
        "Preset": {
          "required": false
        },
        "Queue": {
          "required": false
        }
      }
    },
    "CreateJobTemplate": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html",
      "description": "Grants permission to create an AWS Elemental MediaConvert custom job template",
      "accessLevel": "Write",
      "resourceTypes": {
        "Preset": {
          "required": false
        },
        "Queue": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreatePreset": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets.html",
      "description": "Grants permission to create an AWS Elemental MediaConvert custom output preset",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateQueue": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues.html",
      "description": "Grants permission to create an AWS Elemental MediaConvert job queue",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteJobTemplate": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html",
      "description": "Grants permission to delete an AWS Elemental MediaConvert custom job template",
      "accessLevel": "Write",
      "resourceTypes": {
        "JobTemplate": {
          "required": true
        }
      }
    },
    "DeletePreset": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html",
      "description": "Grants permission to delete an AWS Elemental MediaConvert custom output preset",
      "accessLevel": "Write",
      "resourceTypes": {
        "Preset": {
          "required": true
        }
      }
    },
    "DeleteQueue": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html",
      "description": "Grants permission to delete an AWS Elemental MediaConvert job queue",
      "accessLevel": "Write",
      "resourceTypes": {
        "Queue": {
          "required": true
        }
      }
    },
    "DescribeEndpoints": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/endpoints.html",
      "description": "Grants permission to subscribe to the AWS Elemental MediaConvert service, by sending a request for an account-specific endpoint. All transcoding requests must be sent to the endpoint that the service returns.",
      "accessLevel": "List"
    },
    "DisassociateCertificate": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/certificates-arn.html",
      "description": "Grants permission to remove an association between the Amazon Resource Name (ARN) of an AWS Certificate Manager (ACM) certificate and an AWS Elemental MediaConvert resource.",
      "accessLevel": "Write"
    },
    "GetJob": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html",
      "description": "Grants permission to get an AWS Elemental MediaConvert job",
      "accessLevel": "Read",
      "resourceTypes": {
        "Job": {
          "required": true
        }
      }
    },
    "GetJobTemplate": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html",
      "description": "Grants permission to get an AWS Elemental MediaConvert job template",
      "accessLevel": "Read",
      "resourceTypes": {
        "JobTemplate": {
          "required": true
        }
      }
    },
    "GetPreset": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html",
      "description": "Grants permission to get an AWS Elemental MediaConvert output preset",
      "accessLevel": "Read",
      "resourceTypes": {
        "Preset": {
          "required": true
        }
      }
    },
    "GetQueue": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html",
      "description": "Grants permission to get an AWS Elemental MediaConvert job queue",
      "accessLevel": "Read",
      "resourceTypes": {
        "Queue": {
          "required": true
        }
      }
    },
    "ListJobTemplates": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates.html",
      "description": "Grants permission to list AWS Elemental MediaConvert job templates",
      "accessLevel": "List"
    },
    "ListJobs": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html",
      "description": "Grants permission to list AWS Elemental MediaConvert jobs",
      "accessLevel": "List",
      "resourceTypes": {
        "Queue": {
          "required": false
        }
      }
    },
    "ListPresets": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets.html",
      "description": "Grants permission to list AWS Elemental MediaConvert output presets",
      "accessLevel": "List"
    },
    "ListQueues": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues.html",
      "description": "Grants permission to list AWS Elemental MediaConvert job queues",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags-arn.html",
      "description": "Grants permission to retrieve the tags for a MediaConvert queue, preset, or job template",
      "accessLevel": "Read",
      "resourceTypes": {
        "JobTemplate": {
          "required": false
        },
        "Preset": {
          "required": false
        },
        "Queue": {
          "required": false
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html",
      "description": "Grants permission to add tags to a MediaConvert queue, preset, or job template",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "JobTemplate": {
          "required": false
        },
        "Preset": {
          "required": false
        },
        "Queue": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags-arn.html",
      "description": "Grants permission to remove tags from a MediaConvert queue, preset, or job template",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "JobTemplate": {
          "required": false
        },
        "Preset": {
          "required": false
        },
        "Queue": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateJobTemplate": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html",
      "description": "Grants permission to update an AWS Elemental MediaConvert custom job template",
      "accessLevel": "Write",
      "resourceTypes": {
        "JobTemplate": {
          "required": true
        },
        "Preset": {
          "required": false
        },
        "Queue": {
          "required": false
        }
      }
    },
    "UpdatePreset": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html",
      "description": "Grants permission to update an AWS Elemental MediaConvert custom output preset",
      "accessLevel": "Write",
      "resourceTypes": {
        "Preset": {
          "required": true
        }
      }
    },
    "UpdateQueue": {
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html",
      "description": "Grants permission to update an AWS Elemental MediaConvert job queue",
      "accessLevel": "Write",
      "resourceTypes": {
        "Queue": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "Job": {
      "name": "Job",
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html",
      "arn": "arn:${Partition}:mediaconvert:${Region}:${Account}:jobs/${JobId}",
      "conditionKeys": []
    },
    "Queue": {
      "name": "Queue",
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues.html",
      "arn": "arn:${Partition}:mediaconvert:${Region}:${Account}:queues/${QueueName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "Preset": {
      "name": "Preset",
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets.html",
      "arn": "arn:${Partition}:mediaconvert:${Region}:${Account}:presets/${PresetName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "JobTemplate": {
      "name": "JobTemplate",
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates.html",
      "arn": "arn:${Partition}:mediaconvert:${Region}:${Account}:jobTemplates/${JobTemplateName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "CertificateAssociation": {
      "name": "CertificateAssociation",
      "url": "https://docs.aws.amazon.com/mediaconvert/latest/apireference/certificates.html",
      "arn": "arn:${Partition}:mediaconvert:${Region}:${Account}:certificates/${CertificateArn}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [mediaconvert](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediaconvert.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate an AWS Certificate Manager (ACM) Amazon Resource Name (ARN) with AWS Elemental MediaConvert.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/certificates.html
   */
  public toAssociateCertificate() {
    this.add('mediaconvert:AssociateCertificate');
    return this;
  }

  /**
   * Grants permission to cancel an AWS Elemental MediaConvert job that is waiting in queue
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html
   */
  public toCancelJob() {
    this.add('mediaconvert:CancelJob');
    return this;
  }

  /**
   * Grants permission to create and submit an AWS Elemental MediaConvert job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html
   */
  public toCreateJob() {
    this.add('mediaconvert:CreateJob');
    return this;
  }

  /**
   * Grants permission to create an AWS Elemental MediaConvert custom job template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html
   */
  public toCreateJobTemplate() {
    this.add('mediaconvert:CreateJobTemplate');
    return this;
  }

  /**
   * Grants permission to create an AWS Elemental MediaConvert custom output preset
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets.html
   */
  public toCreatePreset() {
    this.add('mediaconvert:CreatePreset');
    return this;
  }

  /**
   * Grants permission to create an AWS Elemental MediaConvert job queue
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues.html
   */
  public toCreateQueue() {
    this.add('mediaconvert:CreateQueue');
    return this;
  }

  /**
   * Grants permission to delete an AWS Elemental MediaConvert custom job template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html
   */
  public toDeleteJobTemplate() {
    this.add('mediaconvert:DeleteJobTemplate');
    return this;
  }

  /**
   * Grants permission to delete an AWS Elemental MediaConvert custom output preset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html
   */
  public toDeletePreset() {
    this.add('mediaconvert:DeletePreset');
    return this;
  }

  /**
   * Grants permission to delete an AWS Elemental MediaConvert job queue
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html
   */
  public toDeleteQueue() {
    this.add('mediaconvert:DeleteQueue');
    return this;
  }

  /**
   * Grants permission to subscribe to the AWS Elemental MediaConvert service, by sending a request for an account-specific endpoint. All transcoding requests must be sent to the endpoint that the service returns.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/endpoints.html
   */
  public toDescribeEndpoints() {
    this.add('mediaconvert:DescribeEndpoints');
    return this;
  }

  /**
   * Grants permission to remove an association between the Amazon Resource Name (ARN) of an AWS Certificate Manager (ACM) certificate and an AWS Elemental MediaConvert resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/certificates-arn.html
   */
  public toDisassociateCertificate() {
    this.add('mediaconvert:DisassociateCertificate');
    return this;
  }

  /**
   * Grants permission to get an AWS Elemental MediaConvert job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html
   */
  public toGetJob() {
    this.add('mediaconvert:GetJob');
    return this;
  }

  /**
   * Grants permission to get an AWS Elemental MediaConvert job template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html
   */
  public toGetJobTemplate() {
    this.add('mediaconvert:GetJobTemplate');
    return this;
  }

  /**
   * Grants permission to get an AWS Elemental MediaConvert output preset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html
   */
  public toGetPreset() {
    this.add('mediaconvert:GetPreset');
    return this;
  }

  /**
   * Grants permission to get an AWS Elemental MediaConvert job queue
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html
   */
  public toGetQueue() {
    this.add('mediaconvert:GetQueue');
    return this;
  }

  /**
   * Grants permission to list AWS Elemental MediaConvert job templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates.html
   */
  public toListJobTemplates() {
    this.add('mediaconvert:ListJobTemplates');
    return this;
  }

  /**
   * Grants permission to list AWS Elemental MediaConvert jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html
   */
  public toListJobs() {
    this.add('mediaconvert:ListJobs');
    return this;
  }

  /**
   * Grants permission to list AWS Elemental MediaConvert output presets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets.html
   */
  public toListPresets() {
    this.add('mediaconvert:ListPresets');
    return this;
  }

  /**
   * Grants permission to list AWS Elemental MediaConvert job queues
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues.html
   */
  public toListQueues() {
    this.add('mediaconvert:ListQueues');
    return this;
  }

  /**
   * Grants permission to retrieve the tags for a MediaConvert queue, preset, or job template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags-arn.html
   */
  public toListTagsForResource() {
    this.add('mediaconvert:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to add tags to a MediaConvert queue, preset, or job template
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html
   */
  public toTagResource() {
    this.add('mediaconvert:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags from a MediaConvert queue, preset, or job template
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags-arn.html
   */
  public toUntagResource() {
    this.add('mediaconvert:UntagResource');
    return this;
  }

  /**
   * Grants permission to update an AWS Elemental MediaConvert custom job template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html
   */
  public toUpdateJobTemplate() {
    this.add('mediaconvert:UpdateJobTemplate');
    return this;
  }

  /**
   * Grants permission to update an AWS Elemental MediaConvert custom output preset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html
   */
  public toUpdatePreset() {
    this.add('mediaconvert:UpdatePreset');
    return this;
  }

  /**
   * Grants permission to update an AWS Elemental MediaConvert job queue
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html
   */
  public toUpdateQueue() {
    this.add('mediaconvert:UpdateQueue');
    return this;
  }

  /**
   * Adds a resource of type Job to the statement
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onJob(jobId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mediaconvert:${Region}:${Account}:jobs/${JobId}';
    arn = arn.replace('${JobId}', jobId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Queue to the statement
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues.html
   *
   * @param queueName - Identifier for the queueName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onQueue(queueName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mediaconvert:${Region}:${Account}:queues/${QueueName}';
    arn = arn.replace('${QueueName}', queueName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Preset to the statement
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets.html
   *
   * @param presetName - Identifier for the presetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPreset(presetName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mediaconvert:${Region}:${Account}:presets/${PresetName}';
    arn = arn.replace('${PresetName}', presetName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type JobTemplate to the statement
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates.html
   *
   * @param jobTemplateName - Identifier for the jobTemplateName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJobTemplate(jobTemplateName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mediaconvert:${Region}:${Account}:jobTemplates/${JobTemplateName}';
    arn = arn.replace('${JobTemplateName}', jobTemplateName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type CertificateAssociation to the statement
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/certificates.html
   *
   * @param certificateArn - Identifier for the certificateArn.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCertificateAssociation(certificateArn: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mediaconvert:${Region}:${Account}:certificates/${CertificateArn}';
    arn = arn.replace('${CertificateArn}', certificateArn);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html
   *
   * Applies to actions:
   * - .toCreateJobTemplate()
   * - .toCreatePreset()
   * - .toCreateQueue()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html
   *
   * Applies to resource types:
   * - Queue
   * - Preset
   * - JobTemplate
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html
   *
   * Applies to actions:
   * - .toCreateJobTemplate()
   * - .toCreatePreset()
   * - .toCreateQueue()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
