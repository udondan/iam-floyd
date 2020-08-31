import { Actions, PolicyStatement, PolicyStatementWithCondition, ResourceTypes } from "../shared";

/**
 * Statement provider for service [groundstation](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsgroundstation.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Groundstation extends PolicyStatement {
  public servicePrefix = 'groundstation';
  protected actionList: Actions = {
    "CancelContact": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CancelContact.html",
      "description": "Grants permission to cancel a contact",
      "accessLevel": "Write",
      "resourceTypes": {
        "Contact": {
          "required": true
        }
      }
    },
    "CreateConfig": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateConfig.html",
      "description": "Grants permission to create a configuration",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDataflowEndpointGroup": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateDataflowEndpointGroup.html",
      "description": "Grants permission to create a data flow endpoint group",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateMissionProfile": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateMissionProfile.html",
      "description": "Grants permission to create a mission profile",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteConfig": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DeleteConfig.html",
      "description": "Grants permission to delete a config",
      "accessLevel": "Write",
      "resourceTypes": {
        "Config": {
          "required": true
        }
      }
    },
    "DeleteDataflowEndpointGroup": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DeleteDataflowEndpointGroup.html",
      "description": "Grants permission to delete a data flow endpoint group",
      "accessLevel": "Write",
      "resourceTypes": {
        "DataflowEndpointGroup": {
          "required": true
        }
      }
    },
    "DeleteMissionProfile": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DeleteMissionProfile.html",
      "description": "Grants permission to delete a mission profile",
      "accessLevel": "Write",
      "resourceTypes": {
        "MissionProfile": {
          "required": true
        }
      }
    },
    "DescribeContact": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DescribeContact.html",
      "description": "Grants permission to describe a contact",
      "accessLevel": "Read",
      "resourceTypes": {
        "Contact": {
          "required": true
        }
      }
    },
    "GetConfig": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetConfig.html",
      "description": "Grants permission to return a configuration",
      "accessLevel": "Read",
      "resourceTypes": {
        "Config": {
          "required": true
        }
      }
    },
    "GetDataflowEndpointGroup": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetDataflowEndpointGroup.html",
      "description": "Grants permission to return a data flow endpoint group",
      "accessLevel": "Read",
      "resourceTypes": {
        "DataflowEndpointGroup": {
          "required": true
        }
      }
    },
    "GetMinuteUsage": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetMinuteUsage.html",
      "description": "Grants permission to return minutes usage",
      "accessLevel": "Read"
    },
    "GetMissionProfile": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetMissionProfile.html",
      "description": "Grants permission to retrieve a mission profile",
      "accessLevel": "Read",
      "resourceTypes": {
        "MissionProfile": {
          "required": true
        }
      }
    },
    "GetSatellite": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetSatellite.html",
      "description": "Grants permission to return information about a satellite",
      "accessLevel": "Read",
      "resourceTypes": {
        "Satellite": {
          "required": true
        }
      }
    },
    "ListConfigs": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListConfigs.html",
      "description": "Grants permisson to return a list of past configurations",
      "accessLevel": "List"
    },
    "ListContacts": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListContacts.html",
      "description": "Grants permission to return a list of contacts",
      "accessLevel": "List"
    },
    "ListDataflowEndpointGroups": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListDataflowEndpointGroups.html",
      "description": "Grants permission to list data flow endpoint groups",
      "accessLevel": "List"
    },
    "ListGroundStations": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListGroundStations.html",
      "description": "Grants permission to list ground stations",
      "accessLevel": "List"
    },
    "ListMissionProfiles": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListMissionProfiles.html",
      "description": "Grants permission to return a list of mission profiles",
      "accessLevel": "List"
    },
    "ListSatellites": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListSatellites.html",
      "description": "Grants permission to list satellites",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to list tags for a resource",
      "accessLevel": "Read",
      "resourceTypes": {
        "Config": {
          "required": false
        },
        "Contact": {
          "required": false
        },
        "DataflowEndpointGroup": {
          "required": false
        },
        "MissionProfile": {
          "required": false
        }
      }
    },
    "ReserveContact": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ReserveContact.html",
      "description": "Grants permission to reserve a contact",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to assign a resource tag",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "Config": {
          "required": false
        },
        "Contact": {
          "required": false
        },
        "DataflowEndpointGroup": {
          "required": false
        },
        "MissionProfile": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to deassign a resource tag",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "Config": {
          "required": false
        },
        "Contact": {
          "required": false
        },
        "DataflowEndpointGroup": {
          "required": false
        },
        "MissionProfile": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateConfig": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UpdateConfig.html",
      "description": "Grants permission to update a configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "Config": {
          "required": true
        }
      }
    },
    "UpdateMissionProfile": {
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UpdateMissionProfile.html",
      "description": "Grants permission to update a mission profile",
      "accessLevel": "Write",
      "resourceTypes": {
        "MissionProfile": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "Config": {
      "name": "Config",
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ConfigListItem.html",
      "arn": "arn:${Partition}:groundstation:${Region}:${Account}:config/${ConfigType}/${ConfigId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "groundstation:configId",
        "groundstation:configType"
      ]
    },
    "Contact": {
      "name": "Contact",
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ContactData.html",
      "arn": "arn:${Partition}:groundstation:${Region}:${Account}:contact/${ContactId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "groundstation:contactId"
      ]
    },
    "DataflowEndpointGroup": {
      "name": "DataflowEndpointGroup",
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DataflowEndpoint.html",
      "arn": "arn:${Partition}:groundstation:${Region}:${Account}:dataflow-endpoint-group/${DataflowEndpointGroupId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "groundstation:dataflowEndpointGroupId"
      ]
    },
    "GroundStationResource": {
      "name": "GroundStationResource",
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GroundStationData.html",
      "arn": "arn:${Partition}:groundstation:${Region}:${Account}:groundstation:${GroundStationId}",
      "conditionKeys": [
        "groundstation:groundStationId"
      ]
    },
    "MissionProfile": {
      "name": "MissionProfile",
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_MissionProfileListItem.html",
      "arn": "arn:${Partition}:groundstation:${Region}:${Account}:mission-profile/${MissionProfileId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}",
        "groundstation:missionProfileId"
      ]
    },
    "Satellite": {
      "name": "Satellite",
      "url": "https://docs.aws.amazon.com/ground-station/latest/APIReference/API_SatelliteListItem.html",
      "arn": "arn:${Partition}:groundstation:${Region}:${Account}:satellite/${SatelliteId}",
      "conditionKeys": [
        "groundstation:satelliteId"
      ]
    }
  };

  /**
   * Statement provider for service [groundstation](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsgroundstation.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel a contact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CancelContact.html
   */
  public toCancelContact() {
    this.add('groundstation:CancelContact');
    return this;
  }

  /**
   * Grants permission to create a configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateConfig.html
   */
  public toCreateConfig() {
    this.add('groundstation:CreateConfig');
    return this;
  }

  /**
   * Grants permission to create a data flow endpoint group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateDataflowEndpointGroup.html
   */
  public toCreateDataflowEndpointGroup() {
    this.add('groundstation:CreateDataflowEndpointGroup');
    return this;
  }

  /**
   * Grants permission to create a mission profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateMissionProfile.html
   */
  public toCreateMissionProfile() {
    this.add('groundstation:CreateMissionProfile');
    return this;
  }

  /**
   * Grants permission to delete a config
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DeleteConfig.html
   */
  public toDeleteConfig() {
    this.add('groundstation:DeleteConfig');
    return this;
  }

  /**
   * Grants permission to delete a data flow endpoint group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DeleteDataflowEndpointGroup.html
   */
  public toDeleteDataflowEndpointGroup() {
    this.add('groundstation:DeleteDataflowEndpointGroup');
    return this;
  }

  /**
   * Grants permission to delete a mission profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DeleteMissionProfile.html
   */
  public toDeleteMissionProfile() {
    this.add('groundstation:DeleteMissionProfile');
    return this;
  }

  /**
   * Grants permission to describe a contact
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DescribeContact.html
   */
  public toDescribeContact() {
    this.add('groundstation:DescribeContact');
    return this;
  }

  /**
   * Grants permission to return a configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetConfig.html
   */
  public toGetConfig() {
    this.add('groundstation:GetConfig');
    return this;
  }

  /**
   * Grants permission to return a data flow endpoint group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetDataflowEndpointGroup.html
   */
  public toGetDataflowEndpointGroup() {
    this.add('groundstation:GetDataflowEndpointGroup');
    return this;
  }

  /**
   * Grants permission to return minutes usage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetMinuteUsage.html
   */
  public toGetMinuteUsage() {
    this.add('groundstation:GetMinuteUsage');
    return this;
  }

  /**
   * Grants permission to retrieve a mission profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetMissionProfile.html
   */
  public toGetMissionProfile() {
    this.add('groundstation:GetMissionProfile');
    return this;
  }

  /**
   * Grants permission to return information about a satellite
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GetSatellite.html
   */
  public toGetSatellite() {
    this.add('groundstation:GetSatellite');
    return this;
  }

  /**
   * Grants permisson to return a list of past configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListConfigs.html
   */
  public toListConfigs() {
    this.add('groundstation:ListConfigs');
    return this;
  }

  /**
   * Grants permission to return a list of contacts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListContacts.html
   */
  public toListContacts() {
    this.add('groundstation:ListContacts');
    return this;
  }

  /**
   * Grants permission to list data flow endpoint groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListDataflowEndpointGroups.html
   */
  public toListDataflowEndpointGroups() {
    this.add('groundstation:ListDataflowEndpointGroups');
    return this;
  }

  /**
   * Grants permission to list ground stations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListGroundStations.html
   */
  public toListGroundStations() {
    this.add('groundstation:ListGroundStations');
    return this;
  }

  /**
   * Grants permission to return a list of mission profiles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListMissionProfiles.html
   */
  public toListMissionProfiles() {
    this.add('groundstation:ListMissionProfiles');
    return this;
  }

  /**
   * Grants permission to list satellites
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListSatellites.html
   */
  public toListSatellites() {
    this.add('groundstation:ListSatellites');
    return this;
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('groundstation:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to reserve a contact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ReserveContact.html
   */
  public toReserveContact() {
    this.add('groundstation:ReserveContact');
    return this;
  }

  /**
   * Grants permission to assign a resource tag
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.add('groundstation:TagResource');
    return this;
  }

  /**
   * Grants permission to deassign a resource tag
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('groundstation:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UpdateConfig.html
   */
  public toUpdateConfig() {
    this.add('groundstation:UpdateConfig');
    return this;
  }

  /**
   * Grants permission to update a mission profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UpdateMissionProfile.html
   */
  public toUpdateMissionProfile() {
    this.add('groundstation:UpdateMissionProfile');
    return this;
  }

  /**
   * Adds a resource of type Config to the statement
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ConfigListItem.html
   *
   * @param configType - Identifier for the configType.
   * @param configId - Identifier for the configId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifConfigId()
   * - .ifConfigType()
   */
  public onConfig(configType: string, configId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:groundstation:${Region}:${Account}:config/${ConfigType}/${ConfigId}';
    arn = arn.replace('${ConfigType}', configType);
    arn = arn.replace('${ConfigId}', configId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Contact to the statement
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ContactData.html
   *
   * @param contactId - Identifier for the contactId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifContactId()
   */
  public onContact(contactId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:groundstation:${Region}:${Account}:contact/${ContactId}';
    arn = arn.replace('${ContactId}', contactId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type DataflowEndpointGroup to the statement
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DataflowEndpoint.html
   *
   * @param dataflowEndpointGroupId - Identifier for the dataflowEndpointGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifDataflowEndpointGroupId()
   */
  public onDataflowEndpointGroup(dataflowEndpointGroupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:groundstation:${Region}:${Account}:dataflow-endpoint-group/${DataflowEndpointGroupId}';
    arn = arn.replace('${DataflowEndpointGroupId}', dataflowEndpointGroupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type GroundStationResource to the statement
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_GroundStationData.html
   *
   * @param groundStationId - Identifier for the groundStationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifGroundStationId()
   */
  public onGroundStationResource(groundStationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:groundstation:${Region}:${Account}:groundstation:${GroundStationId}';
    arn = arn.replace('${GroundStationId}', groundStationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type MissionProfile to the statement
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_MissionProfileListItem.html
   *
   * @param missionProfileId - Identifier for the missionProfileId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifMissionProfileId()
   */
  public onMissionProfile(missionProfileId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:groundstation:${Region}:${Account}:mission-profile/${MissionProfileId}';
    arn = arn.replace('${MissionProfileId}', missionProfileId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Satellite to the statement
   *
   * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_SatelliteListItem.html
   *
   * @param satelliteId - Identifier for the satelliteId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifSatelliteId()
   */
  public onSatellite(satelliteId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:groundstation:${Region}:${Account}:satellite/${SatelliteId}';
    arn = arn.replace('${SatelliteId}', satelliteId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by a key that is present in the request the user makes to the Ground Station service.
   *
   * Applies to actions:
   * - .toCreateConfig()
   * - .toCreateDataflowEndpointGroup()
   * - .toCreateMissionProfile()
   * - .toReserveContact()
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
   * Filters access by a tag key and value pair.
   *
   * Applies to resource types:
   * - Config
   * - Contact
   * - DataflowEndpointGroup
   * - MissionProfile
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the list of all the tag key names present in the request the user makes to the Ground Station service.
   *
   * Applies to actions:
   * - .toCreateConfig()
   * - .toCreateDataflowEndpointGroup()
   * - .toCreateMissionProfile()
   * - .toReserveContact()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a config
   *
   * Applies to resource types:
   * - Config
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifConfigId(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`groundstation:configId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the type of a config
   *
   * Applies to resource types:
   * - Config
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifConfigType(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`groundstation:configType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a contact
   *
   * Applies to resource types:
   * - Contact
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifContactId(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`groundstation:contactId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a dataflow endpoint group
   *
   * Applies to resource types:
   * - DataflowEndpointGroup
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDataflowEndpointGroupId(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`groundstation:dataflowEndpointGroupId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a ground station
   *
   * Applies to resource types:
   * - GroundStationResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGroundStationId(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`groundstation:groundStationId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a mission profile
   *
   * Applies to resource types:
   * - MissionProfile
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMissionProfileId(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`groundstation:missionProfileId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a satellite
   *
   * Applies to resource types:
   * - Satellite
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSatelliteId(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`groundstation:satelliteId`, value, operator || 'StringLike');
  }
}
