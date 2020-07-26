import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [mq](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmq.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mq extends PolicyStatement {
  public servicePrefix = 'mq';
  protected actionList: Actions = {
    "CreateBroker": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-brokers.html#rest-api-brokers-methods-post",
      "description": "Grants permission to create a broker.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateConfiguration": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configurations.html#rest-api-configurations-methods-post",
      "description": "Grants permission to create a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and engine version).",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateTags": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-post",
      "description": "Grants permission to create tags.",
      "accessLevel": "Write",
      "resourceTypes": {
        "brokers": {
          "required": false
        },
        "configurations": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateUser": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-post",
      "description": "Grants permission to create an ActiveMQ user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "brokers": {
          "required": true
        }
      }
    },
    "DeleteBroker": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-delete",
      "description": "Grants permission to delete a broker.",
      "accessLevel": "Write",
      "resourceTypes": {
        "brokers": {
          "required": true
        }
      }
    },
    "DeleteTags": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-delete",
      "description": "Grants permission to delete tags.",
      "accessLevel": "Write",
      "resourceTypes": {
        "brokers": {
          "required": false
        },
        "configurations": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "DeleteUser": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-delete",
      "description": "Grants permission to delete an ActiveMQ user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "brokers": {
          "required": true
        }
      }
    },
    "DescribeBroker": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-get",
      "description": "Grants permission to return information about the specified broker.",
      "accessLevel": "Read",
      "resourceTypes": {
        "brokers": {
          "required": true
        }
      }
    },
    "DescribeBrokerEngineTypes": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/broker-engine-types.html#broker-engine-types-http-methods",
      "description": "Grants permission to return information about broker engines.",
      "accessLevel": "Read"
    },
    "DescribeBrokerInstanceOptions": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/broker-instance-options.html#broker-engine-types-http-methods",
      "description": "Grants permission to return information about the broker instance options",
      "accessLevel": "Read"
    },
    "DescribeConfiguration": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration.html#rest-api-configuration-methods-get",
      "description": "Grants permission to return information about the specified configuration.",
      "accessLevel": "Read",
      "resourceTypes": {
        "configurations": {
          "required": true
        }
      }
    },
    "DescribeConfigurationRevision": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration-revision.html#rest-api-configuration-revision-methods-get",
      "description": "Grants permission to return the specified configuration revision for the specified configuration.",
      "accessLevel": "Read",
      "resourceTypes": {
        "configurations": {
          "required": true
        }
      }
    },
    "DescribeUser": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-get",
      "description": "Grants permission to return information about an ActiveMQ user.",
      "accessLevel": "Read",
      "resourceTypes": {
        "brokers": {
          "required": true
        }
      }
    },
    "ListBrokers": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-brokers.html#rest-api-brokers-methods-get",
      "description": "Grants permission to return a list of all brokers.",
      "accessLevel": "List"
    },
    "ListConfigurationRevisions": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-revisions.html#rest-api-revisions-methods-get",
      "description": "Grants permission to return a list of all existing revisions for the specified configuration.",
      "accessLevel": "List",
      "resourceTypes": {
        "configurations": {
          "required": true
        }
      }
    },
    "ListConfigurations": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configurations.html#rest-api-configurations-methods-get",
      "description": "Grants permission to return a list of all configurations.",
      "accessLevel": "List"
    },
    "ListTags": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-get",
      "description": "Grants permission to return a list of tags.",
      "accessLevel": "List",
      "resourceTypes": {
        "brokers": {
          "required": false
        },
        "configurations": {
          "required": false
        }
      }
    },
    "ListUsers": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-users.html#rest-api-users-methods-get",
      "description": "Grants permission to return a list of all ActiveMQ users.",
      "accessLevel": "List",
      "resourceTypes": {
        "brokers": {
          "required": true
        }
      }
    },
    "RebootBroker": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-restart.html#rest-api-reboot-methods-post",
      "description": "Grants permission to reboot a broker.",
      "accessLevel": "Write",
      "resourceTypes": {
        "brokers": {
          "required": true
        }
      }
    },
    "UpdateBroker": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-get",
      "description": "Grants permission to add a pending configuration change to a broker.",
      "accessLevel": "Write",
      "resourceTypes": {
        "brokers": {
          "required": true
        }
      }
    },
    "UpdateConfiguration": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration.html#rest-api-configuration-methods-put",
      "description": "Grants permission to update the specified configuration.",
      "accessLevel": "Write",
      "resourceTypes": {
        "configurations": {
          "required": true
        }
      }
    },
    "UpdateUser": {
      "url": "https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-put",
      "description": "Grants permission to update the information for an ActiveMQ user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "brokers": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "brokers": {
      "name": "brokers",
      "url": "",
      "arn": "arn:${Partition}:mq:${Region}:${Account}:broker:${Broker-id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "configurations": {
      "name": "configurations",
      "url": "",
      "arn": "arn:${Partition}:mq:${Region}:${Account}:configuration:${Configuration-id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [mq](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmq.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a broker.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-brokers.html#rest-api-brokers-methods-post
   */
  public createBroker() {
    this.add('mq:CreateBroker');
    return this;
  }

  /**
   * Grants permission to create a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and engine version).
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configurations.html#rest-api-configurations-methods-post
   */
  public createConfiguration() {
    this.add('mq:CreateConfiguration');
    return this;
  }

  /**
   * Grants permission to create tags.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-post
   */
  public createTags() {
    this.add('mq:CreateTags');
    return this;
  }

  /**
   * Grants permission to create an ActiveMQ user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-post
   */
  public createUser() {
    this.add('mq:CreateUser');
    return this;
  }

  /**
   * Grants permission to delete a broker.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-delete
   */
  public deleteBroker() {
    this.add('mq:DeleteBroker');
    return this;
  }

  /**
   * Grants permission to delete tags.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-delete
   */
  public deleteTags() {
    this.add('mq:DeleteTags');
    return this;
  }

  /**
   * Grants permission to delete an ActiveMQ user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-delete
   */
  public deleteUser() {
    this.add('mq:DeleteUser');
    return this;
  }

  /**
   * Grants permission to return information about the specified broker.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-get
   */
  public describeBroker() {
    this.add('mq:DescribeBroker');
    return this;
  }

  /**
   * Grants permission to return information about broker engines.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/broker-engine-types.html#broker-engine-types-http-methods
   */
  public describeBrokerEngineTypes() {
    this.add('mq:DescribeBrokerEngineTypes');
    return this;
  }

  /**
   * Grants permission to return information about the broker instance options
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/broker-instance-options.html#broker-engine-types-http-methods
   */
  public describeBrokerInstanceOptions() {
    this.add('mq:DescribeBrokerInstanceOptions');
    return this;
  }

  /**
   * Grants permission to return information about the specified configuration.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration.html#rest-api-configuration-methods-get
   */
  public describeConfiguration() {
    this.add('mq:DescribeConfiguration');
    return this;
  }

  /**
   * Grants permission to return the specified configuration revision for the specified configuration.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration-revision.html#rest-api-configuration-revision-methods-get
   */
  public describeConfigurationRevision() {
    this.add('mq:DescribeConfigurationRevision');
    return this;
  }

  /**
   * Grants permission to return information about an ActiveMQ user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-get
   */
  public describeUser() {
    this.add('mq:DescribeUser');
    return this;
  }

  /**
   * Grants permission to return a list of all brokers.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-brokers.html#rest-api-brokers-methods-get
   */
  public listBrokers() {
    this.add('mq:ListBrokers');
    return this;
  }

  /**
   * Grants permission to return a list of all existing revisions for the specified configuration.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-revisions.html#rest-api-revisions-methods-get
   */
  public listConfigurationRevisions() {
    this.add('mq:ListConfigurationRevisions');
    return this;
  }

  /**
   * Grants permission to return a list of all configurations.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configurations.html#rest-api-configurations-methods-get
   */
  public listConfigurations() {
    this.add('mq:ListConfigurations');
    return this;
  }

  /**
   * Grants permission to return a list of tags.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-tags.html#rest-api-tags-methods-get
   */
  public listTags() {
    this.add('mq:ListTags');
    return this;
  }

  /**
   * Grants permission to return a list of all ActiveMQ users.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-users.html#rest-api-users-methods-get
   */
  public listUsers() {
    this.add('mq:ListUsers');
    return this;
  }

  /**
   * Grants permission to reboot a broker.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-restart.html#rest-api-reboot-methods-post
   */
  public rebootBroker() {
    this.add('mq:RebootBroker');
    return this;
  }

  /**
   * Grants permission to add a pending configuration change to a broker.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-broker.html#rest-api-broker-methods-get
   */
  public updateBroker() {
    this.add('mq:UpdateBroker');
    return this;
  }

  /**
   * Grants permission to update the specified configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-configuration.html#rest-api-configuration-methods-put
   */
  public updateConfiguration() {
    this.add('mq:UpdateConfiguration');
    return this;
  }

  /**
   * Grants permission to update the information for an ActiveMQ user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazon-mq/latest/api-reference/rest-api-username.html#rest-api-username-methods-put
   */
  public updateUser() {
    this.add('mq:UpdateUser');
    return this;
  }

  /**
   * Adds a resource of type brokers to the statement
   *
   * @param brokerId - Identifier for the brokerId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onBrokers(brokerId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mq:${Region}:${Account}:broker:${Broker-id}';
    arn = arn.replace('${Broker-id}', brokerId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type configurations to the statement
   *
   * @param configurationId - Identifier for the configurationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onConfigurations(configurationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mq:${Region}:${Account}:configuration:${Configuration-id}';
    arn = arn.replace('${Configuration-id}', configurationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
