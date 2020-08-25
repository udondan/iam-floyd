import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [medialive](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmedialive.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Medialive extends PolicyStatement {
  public servicePrefix = 'medialive';
  protected actionList: Actions = {
    "BatchUpdateSchedule": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/batching-actions.html",
      "description": "Grants permission to add and remove actions from a channel's schedule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "CreateChannel": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/creating-channel-scratch.html",
      "description": "Grants permission to create a channel",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "channel": {
          "required": true
        },
        "input": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateInput": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/creating-input.html",
      "description": "Grants permission to create an input",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "input": {
          "required": true
        },
        "input-security-group": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateInputSecurityGroup": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/working-with-input-security-groups.html",
      "description": "Grants permission to create an input security group",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "input-security-group": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateMultiplex": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/creating-multiplex.html",
      "description": "Grants permission to create a multiplex",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "multiplex": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateTags": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/tagging.html",
      "description": "Grants permission to create tags for channels, inputs, input security groups, multiplexes, and reservations.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "channel": {
          "required": false
        },
        "input": {
          "required": false
        },
        "input-security-group": {
          "required": false
        },
        "multiplex": {
          "required": false
        },
        "reservation": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "DeleteChannel": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html",
      "description": "Grants permission to delete a channel",
      "accessLevel": "Write",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "DeleteInput": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/delete-input.html",
      "description": "Grants permission to delete an input",
      "accessLevel": "Write",
      "resourceTypes": {
        "input": {
          "required": true
        }
      }
    },
    "DeleteInputSecurityGroup": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/delete-input-security-group.html",
      "description": "Grants permission to delete an input security group",
      "accessLevel": "Write",
      "resourceTypes": {
        "input-security-group": {
          "required": true
        }
      }
    },
    "DeleteMultiplex": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/delete-multiplex.html",
      "description": "Grants permission to delete a multiplex",
      "accessLevel": "Write",
      "resourceTypes": {
        "multiplex": {
          "required": true
        }
      }
    },
    "DeleteReservation": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/deleting-reservations.html",
      "description": "Grants permission to delete an expired reservation",
      "accessLevel": "Write",
      "resourceTypes": {
        "reservation": {
          "required": true
        }
      }
    },
    "DeleteTags": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/tagging.html",
      "description": "Grants permission to delete tags from channels, inputs, input security groups, multiplexes, and reservations.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "channel": {
          "required": false
        },
        "input": {
          "required": false
        },
        "input-security-group": {
          "required": false
        },
        "multiplex": {
          "required": false
        },
        "reservation": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "DescribeChannel": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/viewing-channel-configuration.html",
      "description": "Grants permission to get details about a channel",
      "accessLevel": "Read",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "DescribeInput": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html",
      "description": "Grants permission to describe an input",
      "accessLevel": "Read",
      "resourceTypes": {
        "input": {
          "required": true
        }
      }
    },
    "DescribeInputDevice": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/edit-input-device.html",
      "description": "Grants permission to describe an input device",
      "accessLevel": "Read",
      "resourceTypes": {
        "input-device": {
          "required": true
        }
      }
    },
    "DescribeInputDeviceThumbnail": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/edit-input-device.html",
      "description": "Grants permission to describe an input device thumbnail",
      "accessLevel": "Read",
      "resourceTypes": {
        "input-device": {
          "required": true
        }
      }
    },
    "DescribeInputSecurityGroup": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html",
      "description": "Grants permission to describe an input security group",
      "accessLevel": "Read",
      "resourceTypes": {
        "input-security-group": {
          "required": true
        }
      }
    },
    "DescribeMultiplex": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/viewing-multiplex-configuration.html",
      "description": "Grants permission to describe a multiplex",
      "accessLevel": "Read",
      "resourceTypes": {
        "multiplex": {
          "required": true
        }
      }
    },
    "DescribeOffering": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html",
      "description": "Grants permission to get details about a reservation offering",
      "accessLevel": "Read",
      "resourceTypes": {
        "offering": {
          "required": true
        }
      }
    },
    "DescribeReservation": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/view-reservations.html",
      "description": "Grants permission to get details about a reservation",
      "accessLevel": "Read",
      "resourceTypes": {
        "reservation": {
          "required": true
        }
      }
    },
    "DescribeSchedule": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/viewing-actions-schedule.html",
      "description": "Grants permission to view a list of actions scheduled on a channel.",
      "accessLevel": "Read",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "ListChannels": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/viewing-channel-configuration.html",
      "description": "Grants permission to list channels",
      "accessLevel": "List"
    },
    "ListInputDevices": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/edit-input-device.html",
      "description": "Grants permission to list input devices",
      "accessLevel": "List"
    },
    "ListInputSecurityGroups": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html",
      "description": "Grants permission to list input security groups",
      "accessLevel": "List"
    },
    "ListInputs": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html",
      "description": "Grants permission to list inputs",
      "accessLevel": "List"
    },
    "ListMultiplexes": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/viewing-multiplex-configuration.html",
      "description": "Grants permission to list multiplexes",
      "accessLevel": "List"
    },
    "ListOfferings": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html",
      "description": "Grants permission to list reservation offerings",
      "accessLevel": "List"
    },
    "ListReservations": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/view-reservations.html",
      "description": "Grants permission to list reservations",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/tagging.html",
      "description": "Grants permission to list tags for channels, inputs, input security groups, multiplexes, and reservations.",
      "accessLevel": "List",
      "resourceTypes": {
        "channel": {
          "required": false
        },
        "input": {
          "required": false
        },
        "input-security-group": {
          "required": false
        },
        "multiplex": {
          "required": false
        },
        "reservation": {
          "required": false
        }
      }
    },
    "PurchaseOffering": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html",
      "description": "Grants permission to purchase a reservation offering",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "offering": {
          "required": true
        },
        "reservation": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "StartChannel": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html",
      "description": "Grants permission to start a channel",
      "accessLevel": "Write",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "StartMultiplex": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-a-multiplex.html",
      "description": "Grants permission to start a multiplex",
      "accessLevel": "Write",
      "resourceTypes": {
        "multiplex": {
          "required": true
        }
      }
    },
    "StopChannel": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html",
      "description": "Grants permission to stop a channel",
      "accessLevel": "Write",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "StopMultiplex": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-a-multiplex.html",
      "description": "Grants permission to stop a multiplex",
      "accessLevel": "Write",
      "resourceTypes": {
        "multiplex": {
          "required": true
        }
      }
    },
    "UpdateChannel": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html",
      "description": "Grants permission to update a channel",
      "accessLevel": "Write",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "UpdateChannelClass": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html",
      "description": "Grants permission to update the class of a channel",
      "accessLevel": "Write",
      "resourceTypes": {
        "channel": {
          "required": true
        }
      }
    },
    "UpdateInput": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html",
      "description": "Grants permission to update an input",
      "accessLevel": "Write",
      "resourceTypes": {
        "input": {
          "required": true
        }
      }
    },
    "UpdateInputDevice": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/edit-input-device.html",
      "description": "Grants permission to update an input device",
      "accessLevel": "Write",
      "resourceTypes": {
        "input-device": {
          "required": true
        }
      }
    },
    "UpdateInputSecurityGroup": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html",
      "description": "Grants permission to update an input security group",
      "accessLevel": "Write",
      "resourceTypes": {
        "input-security-group": {
          "required": true
        }
      }
    },
    "UpdateMultiplex": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex.html",
      "description": "Grants permission to update a multiplex",
      "accessLevel": "Write",
      "resourceTypes": {
        "multiplex": {
          "required": true
        }
      }
    },
    "UpdateReservation": {
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/reservations.html",
      "description": "Grants permission to update a reservation",
      "accessLevel": "Write",
      "resourceTypes": {
        "reservation": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "channel": {
      "name": "channel",
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/channels.html",
      "arn": "arn:${Partition}:medialive:${Region}:${Account}:channel:${ResourceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "input": {
      "name": "input",
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/inputs.html",
      "arn": "arn:${Partition}:medialive:${Region}:${Account}:input:${ResourceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "input-device": {
      "name": "input-device",
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/inputdevices.html",
      "arn": "arn:${Partition}:medialive:${Region}:${Account}:inputDevice:${ResourceName}",
      "conditionKeys": []
    },
    "input-security-group": {
      "name": "input-security-group",
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/inputsecuritygroups.html",
      "arn": "arn:${Partition}:medialive:${Region}:${Account}:inputSecurityGroup:${ResourceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "multiplex": {
      "name": "multiplex",
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/multiplexes.html",
      "arn": "arn:${Partition}:medialive:${Region}:${Account}:multiplex:${ResourceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "reservation": {
      "name": "reservation",
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/reservations.html",
      "arn": "arn:${Partition}:medialive:${Region}:${Account}:reservation:${ResourceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "offering": {
      "name": "offering",
      "url": "https://docs.aws.amazon.com/medialive/latest/ug/input-output-reservations.html",
      "arn": "arn:${Partition}:medialive:${Region}:${Account}:offering:${ResourceName}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [medialive](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmedialive.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add and remove actions from a channel's schedule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/batching-actions.html
   */
  public batchUpdateSchedule() {
    this.add('medialive:BatchUpdateSchedule');
    return this;
  }

  /**
   * Grants permission to create a channel
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/creating-channel-scratch.html
   */
  public createChannel() {
    this.add('medialive:CreateChannel');
    return this;
  }

  /**
   * Grants permission to create an input
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/creating-input.html
   */
  public createInput() {
    this.add('medialive:CreateInput');
    return this;
  }

  /**
   * Grants permission to create an input security group
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/working-with-input-security-groups.html
   */
  public createInputSecurityGroup() {
    this.add('medialive:CreateInputSecurityGroup');
    return this;
  }

  /**
   * Grants permission to create a multiplex
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/creating-multiplex.html
   */
  public createMultiplex() {
    this.add('medialive:CreateMultiplex');
    return this;
  }

  /**
   * Grants permission to create tags for channels, inputs, input security groups, multiplexes, and reservations.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/tagging.html
   */
  public createTags() {
    this.add('medialive:CreateTags');
    return this;
  }

  /**
   * Grants permission to delete a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html
   */
  public deleteChannel() {
    this.add('medialive:DeleteChannel');
    return this;
  }

  /**
   * Grants permission to delete an input
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/delete-input.html
   */
  public deleteInput() {
    this.add('medialive:DeleteInput');
    return this;
  }

  /**
   * Grants permission to delete an input security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/delete-input-security-group.html
   */
  public deleteInputSecurityGroup() {
    this.add('medialive:DeleteInputSecurityGroup');
    return this;
  }

  /**
   * Grants permission to delete a multiplex
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/delete-multiplex.html
   */
  public deleteMultiplex() {
    this.add('medialive:DeleteMultiplex');
    return this;
  }

  /**
   * Grants permission to delete an expired reservation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/deleting-reservations.html
   */
  public deleteReservation() {
    this.add('medialive:DeleteReservation');
    return this;
  }

  /**
   * Grants permission to delete tags from channels, inputs, input security groups, multiplexes, and reservations.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/tagging.html
   */
  public deleteTags() {
    this.add('medialive:DeleteTags');
    return this;
  }

  /**
   * Grants permission to get details about a channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/viewing-channel-configuration.html
   */
  public describeChannel() {
    this.add('medialive:DescribeChannel');
    return this;
  }

  /**
   * Grants permission to describe an input
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html
   */
  public describeInput() {
    this.add('medialive:DescribeInput');
    return this;
  }

  /**
   * Grants permission to describe an input device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input-device.html
   */
  public describeInputDevice() {
    this.add('medialive:DescribeInputDevice');
    return this;
  }

  /**
   * Grants permission to describe an input device thumbnail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input-device.html
   */
  public describeInputDeviceThumbnail() {
    this.add('medialive:DescribeInputDeviceThumbnail');
    return this;
  }

  /**
   * Grants permission to describe an input security group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html
   */
  public describeInputSecurityGroup() {
    this.add('medialive:DescribeInputSecurityGroup');
    return this;
  }

  /**
   * Grants permission to describe a multiplex
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/viewing-multiplex-configuration.html
   */
  public describeMultiplex() {
    this.add('medialive:DescribeMultiplex');
    return this;
  }

  /**
   * Grants permission to get details about a reservation offering
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html
   */
  public describeOffering() {
    this.add('medialive:DescribeOffering');
    return this;
  }

  /**
   * Grants permission to get details about a reservation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/view-reservations.html
   */
  public describeReservation() {
    this.add('medialive:DescribeReservation');
    return this;
  }

  /**
   * Grants permission to view a list of actions scheduled on a channel.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/viewing-actions-schedule.html
   */
  public describeSchedule() {
    this.add('medialive:DescribeSchedule');
    return this;
  }

  /**
   * Grants permission to list channels
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/viewing-channel-configuration.html
   */
  public listChannels() {
    this.add('medialive:ListChannels');
    return this;
  }

  /**
   * Grants permission to list input devices
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input-device.html
   */
  public listInputDevices() {
    this.add('medialive:ListInputDevices');
    return this;
  }

  /**
   * Grants permission to list input security groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html
   */
  public listInputSecurityGroups() {
    this.add('medialive:ListInputSecurityGroups');
    return this;
  }

  /**
   * Grants permission to list inputs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html
   */
  public listInputs() {
    this.add('medialive:ListInputs');
    return this;
  }

  /**
   * Grants permission to list multiplexes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/viewing-multiplex-configuration.html
   */
  public listMultiplexes() {
    this.add('medialive:ListMultiplexes');
    return this;
  }

  /**
   * Grants permission to list reservation offerings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html
   */
  public listOfferings() {
    this.add('medialive:ListOfferings');
    return this;
  }

  /**
   * Grants permission to list reservations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/view-reservations.html
   */
  public listReservations() {
    this.add('medialive:ListReservations');
    return this;
  }

  /**
   * Grants permission to list tags for channels, inputs, input security groups, multiplexes, and reservations.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/tagging.html
   */
  public listTagsForResource() {
    this.add('medialive:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to purchase a reservation offering
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html
   */
  public purchaseOffering() {
    this.add('medialive:PurchaseOffering');
    return this;
  }

  /**
   * Grants permission to start a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  public startChannel() {
    this.add('medialive:StartChannel');
    return this;
  }

  /**
   * Grants permission to start a multiplex
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-a-multiplex.html
   */
  public startMultiplex() {
    this.add('medialive:StartMultiplex');
    return this;
  }

  /**
   * Grants permission to stop a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  public stopChannel() {
    this.add('medialive:StopChannel');
    return this;
  }

  /**
   * Grants permission to stop a multiplex
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-a-multiplex.html
   */
  public stopMultiplex() {
    this.add('medialive:StopMultiplex');
    return this;
  }

  /**
   * Grants permission to update a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html
   */
  public updateChannel() {
    this.add('medialive:UpdateChannel');
    return this;
  }

  /**
   * Grants permission to update the class of a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html
   */
  public updateChannelClass() {
    this.add('medialive:UpdateChannelClass');
    return this;
  }

  /**
   * Grants permission to update an input
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html
   */
  public updateInput() {
    this.add('medialive:UpdateInput');
    return this;
  }

  /**
   * Grants permission to update an input device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input-device.html
   */
  public updateInputDevice() {
    this.add('medialive:UpdateInputDevice');
    return this;
  }

  /**
   * Grants permission to update an input security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html
   */
  public updateInputSecurityGroup() {
    this.add('medialive:UpdateInputSecurityGroup');
    return this;
  }

  /**
   * Grants permission to update a multiplex
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex.html
   */
  public updateMultiplex() {
    this.add('medialive:UpdateMultiplex');
    return this;
  }

  /**
   * Grants permission to update a reservation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/reservations.html
   */
  public updateReservation() {
    this.add('medialive:UpdateReservation');
    return this;
  }

  /**
   * Adds a resource of type channel to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/channels.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChannel(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:medialive:${Region}:${Account}:channel:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type input to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/inputs.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInput(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:medialive:${Region}:${Account}:input:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type input-device to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/inputdevices.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onInputDevice(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:medialive:${Region}:${Account}:inputDevice:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type input-security-group to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/inputsecuritygroups.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInputSecurityGroup(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:medialive:${Region}:${Account}:inputSecurityGroup:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type multiplex to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/multiplexes.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMultiplex(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:medialive:${Region}:${Account}:multiplex:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type reservation to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/reservations.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onReservation(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:medialive:${Region}:${Account}:reservation:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type offering to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/input-output-reservations.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onOffering(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:medialive:${Region}:${Account}:offering:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * The tag for a MediaLive request.
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/tagging.html
   *
   * Applies to actions:
   * - .createChannel()
   * - .createInput()
   * - .createInputSecurityGroup()
   * - .createMultiplex()
   * - .createTags()
   * - .purchaseOffering()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * The tag for a MediaLive resource.
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/tagging.html
   *
   * Applies to resource types:
   * - channel
   * - input
   * - input-security-group
   * - multiplex
   * - reservation
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * The tag keys for a MediaLive resource or request.
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/tagging.html
   *
   * Applies to actions:
   * - .createChannel()
   * - .createInput()
   * - .createInputSecurityGroup()
   * - .createMultiplex()
   * - .createTags()
   * - .deleteTags()
   * - .purchaseOffering()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
