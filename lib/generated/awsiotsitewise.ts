import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [iotsitewise](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotsitewise.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iotsitewise extends PolicyStatement {
  public servicePrefix = 'iotsitewise';
  protected actionList: Actions = {
    "AssociateAssets": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssociateAssets.html",
      "description": "Grants permission to associate a child asset to a parent asset by a hierarchy",
      "accessLevel": "Write",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "BatchAssociateProjectAssets": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchAssociateProjectAssets.html",
      "description": "Grants permission to associate assets to a project",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "BatchDisassociateProjectAssets": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchDisassociateProjectAssets.html",
      "description": "Grants permission to disassociate assets from a project",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "BatchPutAssetPropertyValue": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html",
      "description": "Grants permission to put property values for asset properties",
      "accessLevel": "Write",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "CreateAccessPolicy": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAccessPolicy.html",
      "description": "Grants permission to create an access policy for a portal or a project",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "portal": {
          "required": false
        },
        "project": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateAsset": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAsset.html",
      "description": "Grants permission to create an asset from an asset model",
      "accessLevel": "Write",
      "resourceTypes": {
        "asset-model": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateAssetModel": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html",
      "description": "Grants permission to create an asset model",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDashboard": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateDashboard.html",
      "description": "Grants permission to create a dashboard in a project",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateGateway": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateGateway.html",
      "description": "Grants permission to create a gateway",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreatePortal": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreatePortal.html",
      "description": "Grants permission to create a portal",
      "accessLevel": "Write",
      "dependentActions": [
        "sso:CreateManagedApplicationInstance",
        "sso:DescribeRegisteredRegions"
      ],
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateProject": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateProject.html",
      "description": "Grants permission to create a project in a portal",
      "accessLevel": "Write",
      "resourceTypes": {
        "portal": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteAccessPolicy": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAccessPolicy.html",
      "description": "Grants permission to delete an access policy",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "access-policy": {
          "required": true
        }
      }
    },
    "DeleteAsset": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAsset.html",
      "description": "Grants permission to delete an asset",
      "accessLevel": "Write",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "DeleteAssetModel": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAssetModel.html",
      "description": "Grants permission to delete an asset model",
      "accessLevel": "Write",
      "resourceTypes": {
        "asset-model": {
          "required": true
        }
      }
    },
    "DeleteDashboard": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteDashboard.html",
      "description": "Grants permission to delete a dashboard",
      "accessLevel": "Write",
      "resourceTypes": {
        "dashboard": {
          "required": true
        }
      }
    },
    "DeleteGateway": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteGateway.html",
      "description": "Grants permission to delete a gateway",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "DeletePortal": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeletePortal.html",
      "description": "Grants permission to delete a portal",
      "accessLevel": "Write",
      "dependentActions": [
        "sso:DeleteManagedApplicationInstance"
      ],
      "resourceTypes": {
        "portal": {
          "required": true
        }
      }
    },
    "DeleteProject": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteProject.html",
      "description": "Grants permission to delete a project",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "DescribeAccessPolicy": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAccessPolicy.html",
      "description": "Grants permission to describe an access policy",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "access-policy": {
          "required": true
        }
      }
    },
    "DescribeAsset": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAsset.html",
      "description": "Grants permission to describe an asset",
      "accessLevel": "Read",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "DescribeAssetModel": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html",
      "description": "Grants permission to describe an asset model",
      "accessLevel": "Read",
      "resourceTypes": {
        "asset-model": {
          "required": true
        }
      }
    },
    "DescribeAssetProperty": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html",
      "description": "Grants permission to describe an asset property",
      "accessLevel": "Read",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "DescribeDashboard": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeDashboard.html",
      "description": "Grants permission to describe a dashboard",
      "accessLevel": "Read",
      "resourceTypes": {
        "dashboard": {
          "required": true
        }
      }
    },
    "DescribeGateway": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html",
      "description": "Grants permission to describe a gateway",
      "accessLevel": "Read",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "DescribeGatewayCapabilityConfiguration": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html",
      "description": "Grants permission to describe a capability configuration for a gateway",
      "accessLevel": "Read",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "DescribeLoggingOptions": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeLoggingOptions.html",
      "description": "Grants permission to describe logging options for the AWS account",
      "accessLevel": "Read"
    },
    "DescribePortal": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribePortal.html",
      "description": "Grants permission to describe a portal",
      "accessLevel": "Read",
      "resourceTypes": {
        "portal": {
          "required": true
        }
      }
    },
    "DescribeProject": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeProject.html",
      "description": "Grants permission to describe a project",
      "accessLevel": "Read",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "DisassociateAssets": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html",
      "description": "Grants permission to disassociate a child asset from a parent asset by a hierarchy",
      "accessLevel": "Write",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "GetAssetPropertyAggregates": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyAggregates.html",
      "description": "Grants permission to retrieve computed aggregates for an asset property",
      "accessLevel": "Read",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "GetAssetPropertyValue": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html",
      "description": "Grants permission to retrieve the latest value for an asset property",
      "accessLevel": "Read",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "GetAssetPropertyValueHistory": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValueHistory.html",
      "description": "Grants permission to retrieve the value history for an asset property",
      "accessLevel": "Read",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "ListAccessPolicies": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAccessPolicies.html",
      "description": "Grants permission to list all access policies for an identity or a resource",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "portal": {
          "required": false
        },
        "project": {
          "required": false
        }
      }
    },
    "ListAssetModels": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html",
      "description": "Grants permission to list all asset models",
      "accessLevel": "List"
    },
    "ListAssets": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssets.html",
      "description": "Grants permission to list all assets",
      "accessLevel": "List",
      "resourceTypes": {
        "asset-model": {
          "required": false
        }
      }
    },
    "ListAssociatedAssets": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssociatedAssets.html",
      "description": "Grants permission to list all assets associated to an asset by a hierarchy",
      "accessLevel": "List",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "ListDashboards": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListDashboards.html",
      "description": "Grants permission to list all dashboards in a project",
      "accessLevel": "List",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "ListGateways": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListGateways.html",
      "description": "Grants permission to list all gateways",
      "accessLevel": "List"
    },
    "ListPortals": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListPortals.html",
      "description": "Grants permission to list all portals",
      "accessLevel": "List"
    },
    "ListProjectAssets": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListProjectAssets.html",
      "description": "Grants permission to list all assets associated with a project",
      "accessLevel": "List",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "ListProjects": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListProjects.html",
      "description": "Grants permission to list all projects in a portal",
      "accessLevel": "List",
      "resourceTypes": {
        "portal": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to list all tags for a resource",
      "accessLevel": "Read",
      "resourceTypes": {
        "access-policy": {
          "required": false
        },
        "asset": {
          "required": false
        },
        "asset-model": {
          "required": false
        },
        "dashboard": {
          "required": false
        },
        "gateway": {
          "required": false
        },
        "portal": {
          "required": false
        },
        "project": {
          "required": false
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "PutLoggingOptions": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutLoggingOptions.html",
      "description": "Grants permission to set logging options for the AWS account",
      "accessLevel": "Write"
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to tag a resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "access-policy": {
          "required": false
        },
        "asset": {
          "required": false
        },
        "asset-model": {
          "required": false
        },
        "dashboard": {
          "required": false
        },
        "gateway": {
          "required": false
        },
        "portal": {
          "required": false
        },
        "project": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to untag a resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "access-policy": {
          "required": false
        },
        "asset": {
          "required": false
        },
        "asset-model": {
          "required": false
        },
        "dashboard": {
          "required": false
        },
        "gateway": {
          "required": false
        },
        "portal": {
          "required": false
        },
        "project": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateAccessPolicy": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAccessPolicy.html",
      "description": "Grants permission to update an access policy",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "access-policy": {
          "required": true
        }
      }
    },
    "UpdateAsset": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAsset.html",
      "description": "Grants permission to update an asset",
      "accessLevel": "Write",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "UpdateAssetModel": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html",
      "description": "Grants permission to update an asset model",
      "accessLevel": "Write",
      "resourceTypes": {
        "asset-model": {
          "required": true
        }
      }
    },
    "UpdateAssetProperty": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html",
      "description": "Grants permission to update an asset property",
      "accessLevel": "Write",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "UpdateDashboard": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateDashboard.html",
      "description": "Grants permission to update a dashboard",
      "accessLevel": "Write",
      "resourceTypes": {
        "dashboard": {
          "required": true
        }
      }
    },
    "UpdateGateway": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateGateway.html",
      "description": "Grants permission to update a gateway",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "UpdateGatewayCapabilityConfiguration": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateGatewayCapabilityConfiguration.html",
      "description": "Grants permission to update a capability configuration for a gateway",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "UpdatePortal": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdatePortal.html",
      "description": "Grants permission to update a portal",
      "accessLevel": "Write",
      "resourceTypes": {
        "portal": {
          "required": true
        }
      }
    },
    "UpdateProject": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateProject.html",
      "description": "Grants permission to update a project",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "asset": {
      "name": "asset",
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAsset.html",
      "arn": "arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "asset-model": {
      "name": "asset-model",
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html",
      "arn": "arn:${Partition}:iotsitewise:${Region}:${Account}:asset-model/${AssetModelId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "gateway": {
      "name": "gateway",
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateGateway.html",
      "arn": "arn:${Partition}:iotsitewise:${Region}:${Account}:gateway/${GatewayId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "portal": {
      "name": "portal",
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreatePortal.html",
      "arn": "arn:${Partition}:iotsitewise:${Region}:${Account}:portal/${PortalId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "project": {
      "name": "project",
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateProject.html",
      "arn": "arn:${Partition}:iotsitewise:${Region}:${Account}:project/${ProjectId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "dashboard": {
      "name": "dashboard",
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateDashboard.html",
      "arn": "arn:${Partition}:iotsitewise:${Region}:${Account}:dashboard/${DashboardId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "access-policy": {
      "name": "access-policy",
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAccessPolicy.html",
      "arn": "arn:${Partition}:iotsitewise:${Region}:${Account}:access-policy/${AccessPolicyId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [iotsitewise](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotsitewise.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a child asset to a parent asset by a hierarchy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssociateAssets.html
   */
  public associateAssets() {
    this.add('iotsitewise:AssociateAssets');
    return this;
  }

  /**
   * Grants permission to associate assets to a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchAssociateProjectAssets.html
   */
  public batchAssociateProjectAssets() {
    this.add('iotsitewise:BatchAssociateProjectAssets');
    return this;
  }

  /**
   * Grants permission to disassociate assets from a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchDisassociateProjectAssets.html
   */
  public batchDisassociateProjectAssets() {
    this.add('iotsitewise:BatchDisassociateProjectAssets');
    return this;
  }

  /**
   * Grants permission to put property values for asset properties
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html
   */
  public batchPutAssetPropertyValue() {
    this.add('iotsitewise:BatchPutAssetPropertyValue');
    return this;
  }

  /**
   * Grants permission to create an access policy for a portal or a project
   *
   * Access Level: Permissions management
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAccessPolicy.html
   */
  public createAccessPolicy() {
    this.add('iotsitewise:CreateAccessPolicy');
    return this;
  }

  /**
   * Grants permission to create an asset from an asset model
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAsset.html
   */
  public createAsset() {
    this.add('iotsitewise:CreateAsset');
    return this;
  }

  /**
   * Grants permission to create an asset model
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html
   */
  public createAssetModel() {
    this.add('iotsitewise:CreateAssetModel');
    return this;
  }

  /**
   * Grants permission to create a dashboard in a project
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateDashboard.html
   */
  public createDashboard() {
    this.add('iotsitewise:CreateDashboard');
    return this;
  }

  /**
   * Grants permission to create a gateway
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateGateway.html
   */
  public createGateway() {
    this.add('iotsitewise:CreateGateway');
    return this;
  }

  /**
   * Grants permission to create a portal
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * Dependent actions:
   * - sso:CreateManagedApplicationInstance
   * - sso:DescribeRegisteredRegions
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreatePortal.html
   */
  public createPortal() {
    this.add('iotsitewise:CreatePortal');
    return this;
  }

  /**
   * Grants permission to create a project in a portal
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateProject.html
   */
  public createProject() {
    this.add('iotsitewise:CreateProject');
    return this;
  }

  /**
   * Grants permission to delete an access policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAccessPolicy.html
   */
  public deleteAccessPolicy() {
    this.add('iotsitewise:DeleteAccessPolicy');
    return this;
  }

  /**
   * Grants permission to delete an asset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAsset.html
   */
  public deleteAsset() {
    this.add('iotsitewise:DeleteAsset');
    return this;
  }

  /**
   * Grants permission to delete an asset model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAssetModel.html
   */
  public deleteAssetModel() {
    this.add('iotsitewise:DeleteAssetModel');
    return this;
  }

  /**
   * Grants permission to delete a dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteDashboard.html
   */
  public deleteDashboard() {
    this.add('iotsitewise:DeleteDashboard');
    return this;
  }

  /**
   * Grants permission to delete a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteGateway.html
   */
  public deleteGateway() {
    this.add('iotsitewise:DeleteGateway');
    return this;
  }

  /**
   * Grants permission to delete a portal
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sso:DeleteManagedApplicationInstance
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeletePortal.html
   */
  public deletePortal() {
    this.add('iotsitewise:DeletePortal');
    return this;
  }

  /**
   * Grants permission to delete a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteProject.html
   */
  public deleteProject() {
    this.add('iotsitewise:DeleteProject');
    return this;
  }

  /**
   * Grants permission to describe an access policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAccessPolicy.html
   */
  public describeAccessPolicy() {
    this.add('iotsitewise:DescribeAccessPolicy');
    return this;
  }

  /**
   * Grants permission to describe an asset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAsset.html
   */
  public describeAsset() {
    this.add('iotsitewise:DescribeAsset');
    return this;
  }

  /**
   * Grants permission to describe an asset model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html
   */
  public describeAssetModel() {
    this.add('iotsitewise:DescribeAssetModel');
    return this;
  }

  /**
   * Grants permission to describe an asset property
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html
   */
  public describeAssetProperty() {
    this.add('iotsitewise:DescribeAssetProperty');
    return this;
  }

  /**
   * Grants permission to describe a dashboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeDashboard.html
   */
  public describeDashboard() {
    this.add('iotsitewise:DescribeDashboard');
    return this;
  }

  /**
   * Grants permission to describe a gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html
   */
  public describeGateway() {
    this.add('iotsitewise:DescribeGateway');
    return this;
  }

  /**
   * Grants permission to describe a capability configuration for a gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html
   */
  public describeGatewayCapabilityConfiguration() {
    this.add('iotsitewise:DescribeGatewayCapabilityConfiguration');
    return this;
  }

  /**
   * Grants permission to describe logging options for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeLoggingOptions.html
   */
  public describeLoggingOptions() {
    this.add('iotsitewise:DescribeLoggingOptions');
    return this;
  }

  /**
   * Grants permission to describe a portal
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribePortal.html
   */
  public describePortal() {
    this.add('iotsitewise:DescribePortal');
    return this;
  }

  /**
   * Grants permission to describe a project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeProject.html
   */
  public describeProject() {
    this.add('iotsitewise:DescribeProject');
    return this;
  }

  /**
   * Grants permission to disassociate a child asset from a parent asset by a hierarchy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html
   */
  public disassociateAssets() {
    this.add('iotsitewise:DisassociateAssets');
    return this;
  }

  /**
   * Grants permission to retrieve computed aggregates for an asset property
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyAggregates.html
   */
  public getAssetPropertyAggregates() {
    this.add('iotsitewise:GetAssetPropertyAggregates');
    return this;
  }

  /**
   * Grants permission to retrieve the latest value for an asset property
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html
   */
  public getAssetPropertyValue() {
    this.add('iotsitewise:GetAssetPropertyValue');
    return this;
  }

  /**
   * Grants permission to retrieve the value history for an asset property
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValueHistory.html
   */
  public getAssetPropertyValueHistory() {
    this.add('iotsitewise:GetAssetPropertyValueHistory');
    return this;
  }

  /**
   * Grants permission to list all access policies for an identity or a resource
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAccessPolicies.html
   */
  public listAccessPolicies() {
    this.add('iotsitewise:ListAccessPolicies');
    return this;
  }

  /**
   * Grants permission to list all asset models
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html
   */
  public listAssetModels() {
    this.add('iotsitewise:ListAssetModels');
    return this;
  }

  /**
   * Grants permission to list all assets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssets.html
   */
  public listAssets() {
    this.add('iotsitewise:ListAssets');
    return this;
  }

  /**
   * Grants permission to list all assets associated to an asset by a hierarchy
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssociatedAssets.html
   */
  public listAssociatedAssets() {
    this.add('iotsitewise:ListAssociatedAssets');
    return this;
  }

  /**
   * Grants permission to list all dashboards in a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListDashboards.html
   */
  public listDashboards() {
    this.add('iotsitewise:ListDashboards');
    return this;
  }

  /**
   * Grants permission to list all gateways
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListGateways.html
   */
  public listGateways() {
    this.add('iotsitewise:ListGateways');
    return this;
  }

  /**
   * Grants permission to list all portals
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListPortals.html
   */
  public listPortals() {
    this.add('iotsitewise:ListPortals');
    return this;
  }

  /**
   * Grants permission to list all assets associated with a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListProjectAssets.html
   */
  public listProjectAssets() {
    this.add('iotsitewise:ListProjectAssets');
    return this;
  }

  /**
   * Grants permission to list all projects in a portal
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListProjects.html
   */
  public listProjects() {
    this.add('iotsitewise:ListProjects');
    return this;
  }

  /**
   * Grants permission to list all tags for a resource
   *
   * Access Level: Read
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('iotsitewise:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to set logging options for the AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutLoggingOptions.html
   */
  public putLoggingOptions() {
    this.add('iotsitewise:PutLoggingOptions');
    return this;
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:TagKeys
   * - aws:RequestTag/${TagKey}
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('iotsitewise:TagResource');
    return this;
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('iotsitewise:UntagResource');
    return this;
  }

  /**
   * Grants permission to update an access policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAccessPolicy.html
   */
  public updateAccessPolicy() {
    this.add('iotsitewise:UpdateAccessPolicy');
    return this;
  }

  /**
   * Grants permission to update an asset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAsset.html
   */
  public updateAsset() {
    this.add('iotsitewise:UpdateAsset');
    return this;
  }

  /**
   * Grants permission to update an asset model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html
   */
  public updateAssetModel() {
    this.add('iotsitewise:UpdateAssetModel');
    return this;
  }

  /**
   * Grants permission to update an asset property
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html
   */
  public updateAssetProperty() {
    this.add('iotsitewise:UpdateAssetProperty');
    return this;
  }

  /**
   * Grants permission to update a dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateDashboard.html
   */
  public updateDashboard() {
    this.add('iotsitewise:UpdateDashboard');
    return this;
  }

  /**
   * Grants permission to update a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateGateway.html
   */
  public updateGateway() {
    this.add('iotsitewise:UpdateGateway');
    return this;
  }

  /**
   * Grants permission to update a capability configuration for a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateGatewayCapabilityConfiguration.html
   */
  public updateGatewayCapabilityConfiguration() {
    this.add('iotsitewise:UpdateGatewayCapabilityConfiguration');
    return this;
  }

  /**
   * Grants permission to update a portal
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdatePortal.html
   */
  public updatePortal() {
    this.add('iotsitewise:UpdatePortal');
    return this;
  }

  /**
   * Grants permission to update a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateProject.html
   */
  public updateProject() {
    this.add('iotsitewise:UpdateProject');
    return this;
  }

  /**
   * Adds a resource of type asset to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAsset.html
   *
   * @param assetId - Identifier for the assetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onAsset(assetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId}';
    arn = arn.replace('${AssetId}', assetId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type asset-model to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html
   *
   * @param assetModelId - Identifier for the assetModelId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onAssetModel(assetModelId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:asset-model/${AssetModelId}';
    arn = arn.replace('${AssetModelId}', assetModelId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type gateway to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateGateway.html
   *
   * @param gatewayId - Identifier for the gatewayId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onGateway(gatewayId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:gateway/${GatewayId}';
    arn = arn.replace('${GatewayId}', gatewayId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type portal to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreatePortal.html
   *
   * @param portalId - Identifier for the portalId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onPortal(portalId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:portal/${PortalId}';
    arn = arn.replace('${PortalId}', portalId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateProject.html
   *
   * @param projectId - Identifier for the projectId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onProject(projectId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:project/${ProjectId}';
    arn = arn.replace('${ProjectId}', projectId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dashboard to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateDashboard.html
   *
   * @param dashboardId - Identifier for the dashboardId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onDashboard(dashboardId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:dashboard/${DashboardId}';
    arn = arn.replace('${DashboardId}', dashboardId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type access-policy to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAccessPolicy.html
   *
   * @param accessPolicyId - Identifier for the accessPolicyId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onAccessPolicy(accessPolicyId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:access-policy/${AccessPolicyId}';
    arn = arn.replace('${AccessPolicyId}', accessPolicyId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by an asset hierarchy path, which is the string of asset IDs in the asset's hierarchy, each separated by a forward slash
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAssetHierarchyPath(value: string | string[], operator?: string) {
    return this.if(`iotsitewise:assetHierarchyPath`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a child asset being associated to a parent asset
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifChildAssetId(value: string | string[], operator?: string) {
    return this.if(`iotsitewise:childAssetId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of an AWS Single Sign-On group
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGroup(value: string | string[], operator?: string) {
    return this.if(`iotsitewise:group`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a portal
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPortal(value: string | string[], operator?: string) {
    return this.if(`iotsitewise:portal`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of a project
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProject(value: string | string[], operator?: string) {
    return this.if(`iotsitewise:project`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of an asset property
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPropertyId(value: string | string[], operator?: string) {
    return this.if(`iotsitewise:propertyId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of an AWS Single Sign-On user
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUser(value: string | string[], operator?: string) {
    return this.if(`iotsitewise:user`, value, operator || 'StringLike');
  }
}
