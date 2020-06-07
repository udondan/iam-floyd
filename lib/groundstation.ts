import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service groundstation
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsgroundstation.html
 */
export class Groundstation extends PolicyStatement {
    public servicePrefix = 'groundstation';
    public actions : Actions = {
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

    /**
     * Grants permission to cancel a contact
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CancelContact.html
     */
    public cancelContact () {
        this.add('groundstation:CancelContact');
        return this;
    }

    /**
     * Grants permission to create a configuration
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateConfig.html
     */
    public createConfig () {
        this.add('groundstation:CreateConfig');
        return this;
    }

    /**
     * Grants permission to create a data flow endpoint group
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateDataflowEndpointGroup.html
     */
    public createDataflowEndpointGroup () {
        this.add('groundstation:CreateDataflowEndpointGroup');
        return this;
    }

    /**
     * Grants permission to create a mission profile
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_CreateMissionProfile.html
     */
    public createMissionProfile () {
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
    public deleteConfig () {
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
    public deleteDataflowEndpointGroup () {
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
    public deleteMissionProfile () {
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
    public describeContact () {
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
    public getConfig () {
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
    public getDataflowEndpointGroup () {
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
    public getMinuteUsage () {
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
    public getMissionProfile () {
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
    public getSatellite () {
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
    public listConfigs () {
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
    public listContacts () {
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
    public listDataflowEndpointGroups () {
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
    public listGroundStations () {
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
    public listMissionProfiles () {
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
    public listSatellites () {
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
    public listTagsForResource () {
        this.add('groundstation:ListTagsForResource');
        return this;
    }

    /**
     * Grants permission to reserve a contact
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_ReserveContact.html
     */
    public reserveContact () {
        this.add('groundstation:ReserveContact');
        return this;
    }

    /**
     * Grants permission to assign a resource tag
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_TagResource.html
     */
    public tagResource () {
        this.add('groundstation:TagResource');
        return this;
    }

    /**
     * Grants permission to deassign a resource tag
     *
     * Access Level: Tagging
     *
     * https://docs.aws.amazon.com/ground-station/latest/APIReference/API_UntagResource.html
     */
    public untagResource () {
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
    public updateConfig () {
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
    public updateMissionProfile () {
        this.add('groundstation:UpdateMissionProfile');
        return this;
    }
}
