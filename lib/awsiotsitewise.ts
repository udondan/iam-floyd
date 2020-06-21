import { Actions, PolicyStatement, ResourceTypes } from "./shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service iotsitewise
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotsitewise.html
 */
export class Iotsitewise extends PolicyStatement {
  public servicePrefix = 'iotsitewise';
  public actions: Actions = {
    "AssociateAssets": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssociateAssets.html",
      "description": "Associate child assets to the parent via specified model hiearchy.",
      "accessLevel": "Write",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "BatchAssociateProjectAssets": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchAssociateProjectAssets.html",
      "description": "Grants permission to associate assets to a specified project.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "BatchDisassociateProjectAssets": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchDisassociateProjectAssets.html",
      "description": "Grants permission to disassociate assets from a specified project.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "BatchPutAssetPropertyValue": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html",
      "description": "Puts batch of property values for the specified properties.",
      "accessLevel": "Write",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "CreateAccessPolicy": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAccessPolicy.html",
      "description": "Grants permission to create access policy for a specified portal or a project.",
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
      "description": "Creates an asset.",
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
      "description": "Creates an asset model.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDashboard": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateDashboard.html",
      "description": "Grants permission to create a dashboard within a specified project.",
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
      "description": "Creates a gateway.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreatePortal": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreatePortal.html",
      "description": "Grants permission to create a portal.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateProject": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateProject.html",
      "description": "Grants permission to create a project within a specified portal.",
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
      "description": "Grants permission to delete a specified access policy.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "access-policy": {
          "required": true
        }
      }
    },
    "DeleteAsset": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAsset.html",
      "description": "Deletes the specified asset.",
      "accessLevel": "Write",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "DeleteAssetModel": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteAssetModel.html",
      "description": "Deletes the specified asset model.",
      "accessLevel": "Write",
      "resourceTypes": {
        "asset-model": {
          "required": true
        }
      }
    },
    "DeleteDashboard": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteDashboard.html",
      "description": "Grants permission to delete a specified dashboard.",
      "accessLevel": "Write",
      "resourceTypes": {
        "dashboard": {
          "required": true
        }
      }
    },
    "DeleteGateway": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteGateway.html",
      "description": "Deletes the specified gateway.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "DeletePortal": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeletePortal.html",
      "description": "Grants permission to delete a specified portal.",
      "accessLevel": "Write",
      "resourceTypes": {
        "portal": {
          "required": true
        }
      }
    },
    "DeleteProject": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeleteProject.html",
      "description": "Grants permission to delete a specified project.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "DescribeAccessPolicy": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAccessPolicy.html",
      "description": "Grants permission to describe a specified access policy.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "access-policy": {
          "required": true
        }
      }
    },
    "DescribeAsset": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAsset.html",
      "description": "Describes the specified asset.",
      "accessLevel": "Read",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "DescribeAssetModel": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html",
      "description": "Describes the specified asset model.",
      "accessLevel": "Read",
      "resourceTypes": {
        "asset-model": {
          "required": true
        }
      }
    },
    "DescribeAssetProperty": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html",
      "description": "Describes the specified asset property.",
      "accessLevel": "Read",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "DescribeDashboard": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeDashboard.html",
      "description": "Grants permission to describe a specified dashboard.",
      "accessLevel": "Read",
      "resourceTypes": {
        "dashboard": {
          "required": true
        }
      }
    },
    "DescribeGateway": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html",
      "description": "Describes the gateway for the account.",
      "accessLevel": "Read",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "DescribeGatewayCapabilityConfiguration": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html",
      "description": "Describes the specified gateway capability configuration.",
      "accessLevel": "Read",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "DescribeLoggingOptions": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeLoggingOptions.html",
      "description": "Describes the logging options for the account.",
      "accessLevel": "Read"
    },
    "DescribePortal": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribePortal.html",
      "description": "Grants permission to describe a specified portal.",
      "accessLevel": "Read",
      "resourceTypes": {
        "portal": {
          "required": true
        }
      }
    },
    "DescribeProject": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeProject.html",
      "description": "Grants permission to describe a specified project.",
      "accessLevel": "Read",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "DisassociateAssets": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html",
      "description": "Disassociate child assets from the parent for specified model hiearchy.",
      "accessLevel": "Write",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "GetAssetPropertyAggregates": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyAggregates.html",
      "description": "Fetches the aggregated property values for the specified property.",
      "accessLevel": "Read",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "GetAssetPropertyValue": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html",
      "description": "Fetches the latest property value for the specified property.",
      "accessLevel": "Read",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "GetAssetPropertyValueHistory": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValueHistory.html",
      "description": "Fetches the property value history for the specified property.",
      "accessLevel": "Read",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "ListAccessPolicies": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAccessPolicies.html",
      "description": "Grants permission to list access policies for a specified portal or a project.",
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
      "description": "Lists the asset models for the account.",
      "accessLevel": "List"
    },
    "ListAssets": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssets.html",
      "description": "Lists the assets for the account.",
      "accessLevel": "List",
      "resourceTypes": {
        "asset-model": {
          "required": false
        }
      }
    },
    "ListAssociatedAssets": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssociatedAssets.html",
      "description": "Lists the assets associated to the parent via specified model hiearchy.",
      "accessLevel": "List",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "ListDashboards": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListDashboards.html",
      "description": "Grants permission to list dashboards within a specified project.",
      "accessLevel": "List",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "ListGateways": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListGateways.html",
      "description": "Lists the gateways for the account.",
      "accessLevel": "List"
    },
    "ListPortals": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListPortals.html",
      "description": "Grants permission to list portals in the account.",
      "accessLevel": "List"
    },
    "ListProjectAssets": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListProjectAssets.html",
      "description": "Grants permission to list assets associated with a specified project.",
      "accessLevel": "List",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "ListProjects": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListProjects.html",
      "description": "Grants permission to list projects within a specified portal.",
      "accessLevel": "List",
      "resourceTypes": {
        "portal": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to lists tag for a resource.",
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
      "description": "Sets the logging options.",
      "accessLevel": "Write"
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to tag a resource.",
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
      "description": "Grants permission to untag a resource.",
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
      "description": "Grants permission to update a specified access policy.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "access-policy": {
          "required": true
        }
      }
    },
    "UpdateAsset": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAsset.html",
      "description": "Updates the specified asset.",
      "accessLevel": "Write",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "UpdateAssetModel": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html",
      "description": "Updates the specified asset model.",
      "accessLevel": "Write",
      "resourceTypes": {
        "asset-model": {
          "required": true
        }
      }
    },
    "UpdateAssetProperty": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html",
      "description": "Updates the specified asset property.",
      "accessLevel": "Write",
      "resourceTypes": {
        "asset": {
          "required": true
        }
      }
    },
    "UpdateDashboard": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateDashboard.html",
      "description": "Grants permission to update a specified dashboard.",
      "accessLevel": "Write",
      "resourceTypes": {
        "dashboard": {
          "required": true
        }
      }
    },
    "UpdateGateway": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateGateway.html",
      "description": "Updates the specified gateway.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "UpdateGatewayCapabilityConfiguration": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateGatewayCapabilityConfiguration.html",
      "description": "Updates the specified gateway capability configuration.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "UpdatePortal": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdatePortal.html",
      "description": "Grants permission to update a specified portal.",
      "accessLevel": "Write",
      "resourceTypes": {
        "portal": {
          "required": true
        }
      }
    },
    "UpdateProject": {
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateProject.html",
      "description": "Grants permission to update a specified project.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "asset": {
      "name": "asset",
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Asset.html",
      "arn": "arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "asset-model": {
      "name": "asset-model",
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetModel.html",
      "arn": "arn:${Partition}:iotsitewise:${Region}:${Account}:asset-model/${AssetModelId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "gateway": {
      "name": "gateway",
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Gateway.html",
      "arn": "arn:${Partition}:iotsitewise:${Region}:${Account}:gateway/${GatewayId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "portal": {
      "name": "portal",
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Portal.html",
      "arn": "arn:${Partition}:iotsitewise:${Region}:${Account}:portal/${PortalId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "project": {
      "name": "project",
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Project.html",
      "arn": "arn:${Partition}:iotsitewise:${Region}:${Account}:project/${ProjectId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "dashboard": {
      "name": "dashboard",
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Dashboard.html",
      "arn": "arn:${Partition}:iotsitewise:${Region}:${Account}:dashboard/${DashboardId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "access-policy": {
      "name": "access-policy",
      "url": "https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AccessPolicy.html",
      "arn": "arn:${Partition}:iotsitewise:${Region}:${Account}:access-policy/${AccessPolicyId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Action provider for service iotsitewise
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotsitewise.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Associate child assets to the parent via specified model hiearchy.
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
   * Grants permission to associate assets to a specified project.
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
   * Grants permission to disassociate assets from a specified project.
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
   * Puts batch of property values for the specified properties.
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
   * Grants permission to create access policy for a specified portal or a project.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAccessPolicy.html
   */
  public createAccessPolicy() {
    this.add('iotsitewise:CreateAccessPolicy');
    return this;
  }

  /**
   * Creates an asset.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAsset.html
   */
  public createAsset() {
    this.add('iotsitewise:CreateAsset');
    return this;
  }

  /**
   * Creates an asset model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html
   */
  public createAssetModel() {
    this.add('iotsitewise:CreateAssetModel');
    return this;
  }

  /**
   * Grants permission to create a dashboard within a specified project.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateDashboard.html
   */
  public createDashboard() {
    this.add('iotsitewise:CreateDashboard');
    return this;
  }

  /**
   * Creates a gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateGateway.html
   */
  public createGateway() {
    this.add('iotsitewise:CreateGateway');
    return this;
  }

  /**
   * Grants permission to create a portal.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreatePortal.html
   */
  public createPortal() {
    this.add('iotsitewise:CreatePortal');
    return this;
  }

  /**
   * Grants permission to create a project within a specified portal.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateProject.html
   */
  public createProject() {
    this.add('iotsitewise:CreateProject');
    return this;
  }

  /**
   * Grants permission to delete a specified access policy.
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
   * Deletes the specified asset.
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
   * Deletes the specified asset model.
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
   * Grants permission to delete a specified dashboard.
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
   * Deletes the specified gateway.
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
   * Grants permission to delete a specified portal.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DeletePortal.html
   */
  public deletePortal() {
    this.add('iotsitewise:DeletePortal');
    return this;
  }

  /**
   * Grants permission to delete a specified project.
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
   * Grants permission to describe a specified access policy.
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
   * Describes the specified asset.
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
   * Describes the specified asset model.
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
   * Describes the specified asset property.
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
   * Grants permission to describe a specified dashboard.
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
   * Describes the gateway for the account.
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
   * Describes the specified gateway capability configuration.
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
   * Describes the logging options for the account.
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
   * Grants permission to describe a specified portal.
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
   * Grants permission to describe a specified project.
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
   * Disassociate child assets from the parent for specified model hiearchy.
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
   * Fetches the aggregated property values for the specified property.
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
   * Fetches the latest property value for the specified property.
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
   * Fetches the property value history for the specified property.
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
   * Grants permission to list access policies for a specified portal or a project.
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
   * Lists the asset models for the account.
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
   * Lists the assets for the account.
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
   * Lists the assets associated to the parent via specified model hiearchy.
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
   * Grants permission to list dashboards within a specified project.
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
   * Lists the gateways for the account.
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
   * Grants permission to list portals in the account.
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
   * Grants permission to list assets associated with a specified project.
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
   * Grants permission to list projects within a specified portal.
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
   * Grants permission to lists tag for a resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('iotsitewise:ListTagsForResource');
    return this;
  }

  /**
   * Sets the logging options.
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
   * Grants permission to tag a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('iotsitewise:TagResource');
    return this;
  }

  /**
   * Grants permission to untag a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('iotsitewise:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a specified access policy.
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
   * Updates the specified asset.
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
   * Updates the specified asset model.
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
   * Updates the specified asset property.
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
   * Grants permission to update a specified dashboard.
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
   * Updates the specified gateway.
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
   * Updates the specified gateway capability configuration.
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
   * Grants permission to update a specified portal.
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
   * Grants permission to update a specified project.
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
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Asset.html
   *
   * @param assetId - Identifier for the assetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onAsset(assetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId}';
    arn = arn.replace('${AssetId}', assetId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type asset-model to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetModel.html
   *
   * @param assetModelId - Identifier for the assetModelId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onAssetModel(assetModelId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:asset-model/${AssetModelId}';
    arn = arn.replace('${AssetModelId}', assetModelId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type gateway to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Gateway.html
   *
   * @param gatewayId - Identifier for the gatewayId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onGateway(gatewayId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:gateway/${GatewayId}';
    arn = arn.replace('${GatewayId}', gatewayId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type portal to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Portal.html
   *
   * @param portalId - Identifier for the portalId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onPortal(portalId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:portal/${PortalId}';
    arn = arn.replace('${PortalId}', portalId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Project.html
   *
   * @param projectId - Identifier for the projectId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onProject(projectId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:project/${ProjectId}';
    arn = arn.replace('${ProjectId}', projectId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dashboard to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Dashboard.html
   *
   * @param dashboardId - Identifier for the dashboardId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onDashboard(dashboardId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:dashboard/${DashboardId}';
    arn = arn.replace('${DashboardId}', dashboardId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type access-policy to the statement
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AccessPolicy.html
   *
   * @param accessPolicyId - Identifier for the accessPolicyId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onAccessPolicy(accessPolicyId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iotsitewise:${Region}:${Account}:access-policy/${AccessPolicyId}';
    arn = arn.replace('${AccessPolicyId}', accessPolicyId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * String of asset IDs in the asset hierarchy separated by forward slash.
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_assetHierarchyPath.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifAssetHierarchyPath(value: string | string[], operator?: string) {
    const props: any = {};
    props[`iotsitewise:assetHierarchyPath`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * ID of an asset being associated as a child to another asset.
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_childAssetId.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifChildAssetId(value: string | string[], operator?: string) {
    const props: any = {};
    props[`iotsitewise:childAssetId`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Group ID.
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GroupId.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifGroup(value: string | string[], operator?: string) {
    const props: any = {};
    props[`iotsitewise:group`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Portal ID.
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PortalId.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifPortal(value: string | string[], operator?: string) {
    const props: any = {};
    props[`iotsitewise:portal`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Project ID.
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ProjectId.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifProject(value: string | string[], operator?: string) {
    const props: any = {};
    props[`iotsitewise:project`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Property ID.
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PropertyId.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifPropertyId(value: string | string[], operator?: string) {
    const props: any = {};
    props[`iotsitewise:propertyId`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * User ID.
   *
   * https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UserId.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifUser(value: string | string[], operator?: string) {
    const props: any = {};
    props[`iotsitewise:user`] = value;
    return this.if(operator || 'StringEquals', props);
  }
}
