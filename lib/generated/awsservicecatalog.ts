import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service servicecatalog
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsservicecatalog.html
 */
export class Servicecatalog extends PolicyStatement {
  public servicePrefix = 'servicecatalog';
  public actions: Actions = {
    "AcceptPortfolioShare": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AcceptPortfolioShare.html",
      "description": "Accepts a portfolio that has been shared with you",
      "accessLevel": "Write",
      "resourceTypes": {
        "Portfolio": {
          "required": true
        }
      }
    },
    "AssociateBudgetWithResource": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateBudgetWithResource.html",
      "description": "Associates a budget with a resource.",
      "accessLevel": "Write"
    },
    "AssociatePrincipalWithPortfolio": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociatePrincipalWithPortfolio.html",
      "description": "Associates an IAM principal with a portfolio, giving the specified principal access to any products associated with the specified portfolio",
      "accessLevel": "Write",
      "resourceTypes": {
        "Portfolio": {
          "required": true
        }
      }
    },
    "AssociateProductWithPortfolio": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateProductWithPortfolio.html",
      "description": "Associates a product with a portfolio",
      "accessLevel": "Write"
    },
    "AssociateServiceActionWithProvisioningArtifact": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateServiceActionWithProvisioningArtifact.html",
      "description": "Associates an action with a provisioning artifact",
      "accessLevel": "Write",
      "resourceTypes": {
        "Product": {
          "required": true
        }
      }
    },
    "AssociateTagOptionWithResource": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateTagOptionWithResource.html",
      "description": "Associate the specified TagOption with the specified portfolio or product",
      "accessLevel": "Write",
      "resourceTypes": {
        "Portfolio": {
          "required": false
        },
        "Product": {
          "required": false
        }
      }
    },
    "BatchAssociateServiceActionWithProvisioningArtifact": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_BatchAssociateServiceActionWithProvisioningArtifact.html",
      "description": "Associates multiple self-service actions with provisioning artifacts.",
      "accessLevel": "Write"
    },
    "BatchDisassociateServiceActionFromProvisioningArtifact": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_BatchDisassociateServiceActionFromProvisioningArtifact.html",
      "description": "Disassociates a batch of self-service actions from the specified provisioning artifact.",
      "accessLevel": "Write"
    },
    "CopyProduct": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CopyProduct.html",
      "description": "Copies the specified source product to the specified target product or a new product.",
      "accessLevel": "Write"
    },
    "CreateConstraint": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateConstraint.html",
      "description": "Creates a constraint on an associated product and portfolio",
      "accessLevel": "Write",
      "resourceTypes": {
        "Product": {
          "required": true
        }
      }
    },
    "CreatePortfolio": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreatePortfolio.html",
      "description": "Creates a portfolio",
      "accessLevel": "Write",
      "resourceTypes": {
        "Portfolio": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreatePortfolioShare": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreatePortfolioShare.html",
      "description": "Shares a portfolio you own with another AWS account",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "Portfolio": {
          "required": true
        }
      }
    },
    "CreateProduct": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProduct.html",
      "description": "Creates a product and that product's first provisioning artifact",
      "accessLevel": "Write",
      "resourceTypes": {
        "Product": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateProvisionedProductPlan": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProvisionedProductPlan.html",
      "description": "Adds a new provisioned product plan",
      "accessLevel": "Write"
    },
    "CreateProvisioningArtifact": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProvisioningArtifact.html",
      "description": "Adds a new provisioning artifact to an existing product",
      "accessLevel": "Write",
      "resourceTypes": {
        "Product": {
          "required": true
        }
      }
    },
    "CreateServiceAction": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateServiceAction.html",
      "description": "Creates a self-service action.",
      "accessLevel": "Write"
    },
    "CreateTagOption": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateTagOption.html",
      "description": "Creates a TagOption.",
      "accessLevel": "Write"
    },
    "DeleteConstraint": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteConstraint.html",
      "description": "Removes and deletes an existing constraint from an associated product and portfolio",
      "accessLevel": "Write"
    },
    "DeletePortfolio": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeletePortfolio.html",
      "description": "Deletes a portfolio if all associations and shares have been removed from the portfolio",
      "accessLevel": "Write",
      "resourceTypes": {
        "Portfolio": {
          "required": true
        }
      }
    },
    "DeletePortfolioShare": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeletePortfolioShare.html",
      "description": "Unshares a portfolio you own from an AWS account you previously shared the portfolio with",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "Portfolio": {
          "required": true
        }
      }
    },
    "DeleteProduct": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteProduct.html",
      "description": "Deletes a product if all associations have been removed from the product",
      "accessLevel": "Write",
      "resourceTypes": {
        "Product": {
          "required": true
        }
      }
    },
    "DeleteProvisionedProductPlan": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteProvisionedProductPlan.html",
      "description": "Deletes a provisioned product plan",
      "accessLevel": "Write"
    },
    "DeleteProvisioningArtifact": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteProvisioningArtifact.html",
      "description": "Deletes a provisioning artifact from a product",
      "accessLevel": "Write",
      "resourceTypes": {
        "Product": {
          "required": true
        }
      }
    },
    "DeleteServiceAction": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteServiceAction.html",
      "description": "Deletes a self-service action.",
      "accessLevel": "Write"
    },
    "DeleteTagOption": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteTagOption.html",
      "description": "Deletes the specified TagOption.",
      "accessLevel": "Write"
    },
    "DescribeConstraint": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeConstraint.html",
      "description": "Describes a constraint",
      "accessLevel": "Read"
    },
    "DescribeCopyProductStatus": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeCopyProductStatus.html",
      "description": "Gets the status of the specified copy product operation.",
      "accessLevel": "Read"
    },
    "DescribePortfolio": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribePortfolio.html",
      "description": "Describes a portfolio",
      "accessLevel": "Read",
      "resourceTypes": {
        "Portfolio": {
          "required": true
        }
      }
    },
    "DescribePortfolioShareStatus": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribePortfolioShareStatus.html",
      "description": "Gets the status of the specified portfolio share operation.",
      "accessLevel": "Read"
    },
    "DescribeProduct": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProduct.html",
      "description": "Describes a product as an end-user",
      "accessLevel": "Read",
      "resourceTypes": {
        "Product": {
          "required": true
        }
      }
    },
    "DescribeProductAsAdmin": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProductAsAdmin.html",
      "description": "Describes a product as an admin",
      "accessLevel": "Read",
      "resourceTypes": {
        "Product": {
          "required": true
        }
      }
    },
    "DescribeProductView": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProductView.html",
      "description": "Describes a product as an end-user",
      "accessLevel": "Read"
    },
    "DescribeProvisionedProduct": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisionedProduct.html",
      "description": "Describes a provisioned product",
      "accessLevel": "Read"
    },
    "DescribeProvisionedProductPlan": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisionedProductPlan.html",
      "description": "Describes a provisioned product plan",
      "accessLevel": "Read"
    },
    "DescribeProvisioningArtifact": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisioningArtifact.html",
      "description": "Describes a provisioning artifact",
      "accessLevel": "Read",
      "resourceTypes": {
        "Product": {
          "required": true
        }
      }
    },
    "DescribeProvisioningParameters": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisioningParameters.html",
      "description": "Describes the parameters that you need to specify to successfully provision a specified provisioning artifact",
      "accessLevel": "Read",
      "resourceTypes": {
        "Product": {
          "required": true
        }
      }
    },
    "DescribeRecord": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeRecord.html",
      "description": "Describes a record and lists any outputs",
      "accessLevel": "Read",
      "conditions": [
        "servicecatalog:accountLevel",
        "servicecatalog:roleLevel",
        "servicecatalog:userLevel"
      ]
    },
    "DescribeServiceAction": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeServiceAction.html",
      "description": "Describes a self-service action.",
      "accessLevel": "Read"
    },
    "DescribeServiceActionExecutionParameters": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeServiceActionExecutionParameters.html",
      "description": "Gets the default parameters if you executed the specified Service Action on the specified Provisioned Product.",
      "accessLevel": "Read"
    },
    "DescribeTagOption": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeTagOption.html",
      "description": "Gets information about the specified TagOption.",
      "accessLevel": "Read"
    },
    "DisableAWSOrganizationsAccess": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisableAWSOrganizationsAccess.html",
      "description": "Disable portfolio sharing through AWS Organizations feature.",
      "accessLevel": "Write"
    },
    "DisassociateBudgetFromResource": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateBudgetFromResource.html",
      "description": "Disassociates a budget from a resource.",
      "accessLevel": "Write"
    },
    "DisassociatePrincipalFromPortfolio": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociatePrincipalFromPortfolio.html",
      "description": "Disassociates an IAM principal from a portfolio.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Portfolio": {
          "required": true
        }
      }
    },
    "DisassociateProductFromPortfolio": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateProductFromPortfolio.html",
      "description": "Disassociates a product from a portfolio",
      "accessLevel": "Write"
    },
    "DisassociateServiceActionFromProvisioningArtifact": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateServiceActionFromProvisioningArtifact.html",
      "description": "Disassociates the specified self-service action association from the specified provisioning artifact.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Product": {
          "required": true
        }
      }
    },
    "DisassociateTagOptionFromResource": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateTagOptionFromResource.html",
      "description": "Disassociates the specified TagOption from the specified resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Portfolio": {
          "required": false
        },
        "Product": {
          "required": false
        }
      }
    },
    "EnableAWSOrganizationsAccess": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_EnableAWSOrganizationsAccess.html",
      "description": "Enable portfolio sharing feature through AWS Organizations.",
      "accessLevel": "Write"
    },
    "ExecuteProvisionedProductPlan": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ExecuteProvisionedProductPlan.html",
      "description": "Executes a provisioned product plan",
      "accessLevel": "Write"
    },
    "ExecuteProvisionedProductServiceAction": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ExecuteProvisionedProductServiceAction.html",
      "description": "Executes a provisioned product plan",
      "accessLevel": "Write"
    },
    "GetAWSOrganizationsAccessStatus": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_GetAWSOrganizationsAccessStatus.html",
      "description": "Get the Access Status for AWS Organization portfolio share feature.",
      "accessLevel": "Read"
    },
    "ListAcceptedPortfolioShares": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListAcceptedPortfolioShares.html",
      "description": "Lists the portfolios that have been shared with you and you have accepted",
      "accessLevel": "List"
    },
    "ListBudgetsForResource": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListBudgetsForResource.html",
      "description": "Lists all the budgets associated to a resource.",
      "accessLevel": "List"
    },
    "ListConstraintsForPortfolio": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListConstraintsForPortfolio.html",
      "description": "Lists constraints associated with a given portfolio",
      "accessLevel": "List"
    },
    "ListLaunchPaths": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListLaunchPaths.html",
      "description": "Lists the different ways to launch a given product as an end-user",
      "accessLevel": "List",
      "resourceTypes": {
        "Product": {
          "required": true
        }
      }
    },
    "ListOrganizationPortfolioAccess": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListOrganizationPortfolioAccess.html",
      "description": "Lists the organization nodes that have access to the specified portfolio.",
      "accessLevel": "List"
    },
    "ListPortfolioAccess": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPortfolioAccess.html",
      "description": "Lists the AWS accounts you have shared a given portfolio with",
      "accessLevel": "List",
      "resourceTypes": {
        "Portfolio": {
          "required": true
        }
      }
    },
    "ListPortfolios": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPortfolios.html",
      "description": "Lists the portfolios in your account",
      "accessLevel": "List"
    },
    "ListPortfoliosForProduct": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPortfoliosForProduct.html",
      "description": "Lists the portfolios associated with a given product",
      "accessLevel": "List",
      "resourceTypes": {
        "Product": {
          "required": true
        }
      }
    },
    "ListPrincipalsForPortfolio": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPrincipalsForPortfolio.html",
      "description": "Lists the IAM principals associated with a given portfolio",
      "accessLevel": "List",
      "resourceTypes": {
        "Portfolio": {
          "required": true
        }
      }
    },
    "ListProvisionedProductPlans": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListProvisionedProductPlans.html",
      "description": "Lists the provisioned product plans",
      "accessLevel": "List"
    },
    "ListProvisioningArtifacts": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListProvisioningArtifacts.html",
      "description": "Lists the provisioning artifacts associated with a given product",
      "accessLevel": "List",
      "resourceTypes": {
        "Product": {
          "required": true
        }
      }
    },
    "ListProvisioningArtifactsForServiceAction": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListProvisioningArtifactsForServiceAction.html",
      "description": "Lists all provisioning artifacts for the specified self-service action.",
      "accessLevel": "List"
    },
    "ListRecordHistory": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListRecordHistory.html",
      "description": "Lists all the records in your account or all the records related to a given provisioned product",
      "accessLevel": "List",
      "conditions": [
        "servicecatalog:accountLevel",
        "servicecatalog:roleLevel",
        "servicecatalog:userLevel"
      ]
    },
    "ListResourcesForTagOption": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListResourcesForTagOption.html",
      "description": "Lists the resources associated with the specified TagOption.",
      "accessLevel": "List"
    },
    "ListServiceActions": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListServiceActions.html",
      "description": "Lists all self-service actions.",
      "accessLevel": "List"
    },
    "ListServiceActionsForProvisioningArtifact": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListServiceActionsForProvisioningArtifact.html",
      "description": "Lists all the service actions associated with the specified provisioning artifact in your account",
      "accessLevel": "List",
      "resourceTypes": {
        "Product": {
          "required": true
        }
      }
    },
    "ListStackInstancesForProvisionedProduct": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListStackInstancesForProvisionedProduct.html",
      "description": "Lists account, region and status of each stack instances that are associated with a CFN_STACKSET type provisioned product",
      "accessLevel": "List"
    },
    "ListTagOptions": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListTagOptions.html",
      "description": "Lists the specified TagOptions or all TagOptions.",
      "accessLevel": "List"
    },
    "ProvisionProduct": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ProvisionProduct.html",
      "description": "Provisions a product with a specified provisioning artifact and launch parameters",
      "accessLevel": "Write",
      "resourceTypes": {
        "Product": {
          "required": true
        }
      }
    },
    "RejectPortfolioShare": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_RejectPortfolioShare.html",
      "description": "Rejects a portfolio that has been shared with you that you previously accepted",
      "accessLevel": "Write",
      "resourceTypes": {
        "Portfolio": {
          "required": true
        }
      }
    },
    "ScanProvisionedProducts": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ScanProvisionedProducts.html",
      "description": "Lists all the provisioned products in your account",
      "accessLevel": "List",
      "conditions": [
        "servicecatalog:accountLevel",
        "servicecatalog:roleLevel",
        "servicecatalog:userLevel"
      ]
    },
    "SearchProducts": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_SearchProducts.html",
      "description": "Lists the products available to you as an end-user",
      "accessLevel": "List"
    },
    "SearchProductsAsAdmin": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_SearchProductsAsAdmin.html",
      "description": "Lists all the products in your account or all the products associated with a given portfolio",
      "accessLevel": "List"
    },
    "SearchProvisionedProducts": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_SearchProvisionedProducts.html",
      "description": "Lists all the provisioned products in your account",
      "accessLevel": "List",
      "conditions": [
        "servicecatalog:accountLevel",
        "servicecatalog:roleLevel",
        "servicecatalog:userLevel"
      ]
    },
    "TerminateProvisionedProduct": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_TerminateProvisionedProduct.html",
      "description": "Terminates an existing provisioned product",
      "accessLevel": "Write",
      "conditions": [
        "servicecatalog:accountLevel",
        "servicecatalog:roleLevel",
        "servicecatalog:userLevel"
      ]
    },
    "UpdateConstraint": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateConstraint.html",
      "description": "Updates the metadata fields of an existing constraint",
      "accessLevel": "Write"
    },
    "UpdatePortfolio": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdatePortfolio.html",
      "description": "Updates the metadata fields and/or tags of an existing portfolio",
      "accessLevel": "Write",
      "resourceTypes": {
        "Portfolio": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateProduct": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProduct.html",
      "description": "Updates the metadata fields and/or tags of an existing product",
      "accessLevel": "Write",
      "resourceTypes": {
        "Product": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateProvisionedProduct": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProvisionedProduct.html",
      "description": "Updates an existing provisioned product",
      "accessLevel": "Write",
      "conditions": [
        "servicecatalog:accountLevel",
        "servicecatalog:roleLevel",
        "servicecatalog:userLevel"
      ]
    },
    "UpdateProvisionedProductProperties": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProvisionedProductProperties.html",
      "description": "Updates the properties of an existing provisioned product",
      "accessLevel": "Write"
    },
    "UpdateProvisioningArtifact": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProvisioningArtifact.html",
      "description": "Updates the metadata fields of an existing provisioning artifact",
      "accessLevel": "Write",
      "resourceTypes": {
        "Product": {
          "required": true
        }
      }
    },
    "UpdateServiceAction": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateServiceAction.html",
      "description": "Updates a self-service action.",
      "accessLevel": "Write"
    },
    "UpdateTagOption": {
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateTagOption.html",
      "description": "Updates the specified TagOption.",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {
    "Portfolio": {
      "name": "Portfolio",
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_PortfolioDetail.html",
      "arn": "arn:${Partition}:catalog:${Region}:${Account}:portfolio/${PortfolioId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "Product": {
      "name": "Product",
      "url": "https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ProductViewDetail.html",
      "arn": "arn:${Partition}:catalog:${Region}:${Account}:product/${ProductId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Action provider for service servicecatalog
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsservicecatalog.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Accepts a portfolio that has been shared with you
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AcceptPortfolioShare.html
   */
  public acceptPortfolioShare() {
    this.add('servicecatalog:AcceptPortfolioShare');
    return this;
  }

  /**
   * Associates a budget with a resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateBudgetWithResource.html
   */
  public associateBudgetWithResource() {
    this.add('servicecatalog:AssociateBudgetWithResource');
    return this;
  }

  /**
   * Associates an IAM principal with a portfolio, giving the specified principal access to any products associated with the specified portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociatePrincipalWithPortfolio.html
   */
  public associatePrincipalWithPortfolio() {
    this.add('servicecatalog:AssociatePrincipalWithPortfolio');
    return this;
  }

  /**
   * Associates a product with a portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateProductWithPortfolio.html
   */
  public associateProductWithPortfolio() {
    this.add('servicecatalog:AssociateProductWithPortfolio');
    return this;
  }

  /**
   * Associates an action with a provisioning artifact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateServiceActionWithProvisioningArtifact.html
   */
  public associateServiceActionWithProvisioningArtifact() {
    this.add('servicecatalog:AssociateServiceActionWithProvisioningArtifact');
    return this;
  }

  /**
   * Associate the specified TagOption with the specified portfolio or product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateTagOptionWithResource.html
   */
  public associateTagOptionWithResource() {
    this.add('servicecatalog:AssociateTagOptionWithResource');
    return this;
  }

  /**
   * Associates multiple self-service actions with provisioning artifacts.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_BatchAssociateServiceActionWithProvisioningArtifact.html
   */
  public batchAssociateServiceActionWithProvisioningArtifact() {
    this.add('servicecatalog:BatchAssociateServiceActionWithProvisioningArtifact');
    return this;
  }

  /**
   * Disassociates a batch of self-service actions from the specified provisioning artifact.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_BatchDisassociateServiceActionFromProvisioningArtifact.html
   */
  public batchDisassociateServiceActionFromProvisioningArtifact() {
    this.add('servicecatalog:BatchDisassociateServiceActionFromProvisioningArtifact');
    return this;
  }

  /**
   * Copies the specified source product to the specified target product or a new product.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CopyProduct.html
   */
  public copyProduct() {
    this.add('servicecatalog:CopyProduct');
    return this;
  }

  /**
   * Creates a constraint on an associated product and portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateConstraint.html
   */
  public createConstraint() {
    this.add('servicecatalog:CreateConstraint');
    return this;
  }

  /**
   * Creates a portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreatePortfolio.html
   */
  public createPortfolio() {
    this.add('servicecatalog:CreatePortfolio');
    return this;
  }

  /**
   * Shares a portfolio you own with another AWS account
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreatePortfolioShare.html
   */
  public createPortfolioShare() {
    this.add('servicecatalog:CreatePortfolioShare');
    return this;
  }

  /**
   * Creates a product and that product's first provisioning artifact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProduct.html
   */
  public createProduct() {
    this.add('servicecatalog:CreateProduct');
    return this;
  }

  /**
   * Adds a new provisioned product plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProvisionedProductPlan.html
   */
  public createProvisionedProductPlan() {
    this.add('servicecatalog:CreateProvisionedProductPlan');
    return this;
  }

  /**
   * Adds a new provisioning artifact to an existing product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProvisioningArtifact.html
   */
  public createProvisioningArtifact() {
    this.add('servicecatalog:CreateProvisioningArtifact');
    return this;
  }

  /**
   * Creates a self-service action.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateServiceAction.html
   */
  public createServiceAction() {
    this.add('servicecatalog:CreateServiceAction');
    return this;
  }

  /**
   * Creates a TagOption.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateTagOption.html
   */
  public createTagOption() {
    this.add('servicecatalog:CreateTagOption');
    return this;
  }

  /**
   * Removes and deletes an existing constraint from an associated product and portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteConstraint.html
   */
  public deleteConstraint() {
    this.add('servicecatalog:DeleteConstraint');
    return this;
  }

  /**
   * Deletes a portfolio if all associations and shares have been removed from the portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeletePortfolio.html
   */
  public deletePortfolio() {
    this.add('servicecatalog:DeletePortfolio');
    return this;
  }

  /**
   * Unshares a portfolio you own from an AWS account you previously shared the portfolio with
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeletePortfolioShare.html
   */
  public deletePortfolioShare() {
    this.add('servicecatalog:DeletePortfolioShare');
    return this;
  }

  /**
   * Deletes a product if all associations have been removed from the product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteProduct.html
   */
  public deleteProduct() {
    this.add('servicecatalog:DeleteProduct');
    return this;
  }

  /**
   * Deletes a provisioned product plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteProvisionedProductPlan.html
   */
  public deleteProvisionedProductPlan() {
    this.add('servicecatalog:DeleteProvisionedProductPlan');
    return this;
  }

  /**
   * Deletes a provisioning artifact from a product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteProvisioningArtifact.html
   */
  public deleteProvisioningArtifact() {
    this.add('servicecatalog:DeleteProvisioningArtifact');
    return this;
  }

  /**
   * Deletes a self-service action.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteServiceAction.html
   */
  public deleteServiceAction() {
    this.add('servicecatalog:DeleteServiceAction');
    return this;
  }

  /**
   * Deletes the specified TagOption.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteTagOption.html
   */
  public deleteTagOption() {
    this.add('servicecatalog:DeleteTagOption');
    return this;
  }

  /**
   * Describes a constraint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeConstraint.html
   */
  public describeConstraint() {
    this.add('servicecatalog:DescribeConstraint');
    return this;
  }

  /**
   * Gets the status of the specified copy product operation.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeCopyProductStatus.html
   */
  public describeCopyProductStatus() {
    this.add('servicecatalog:DescribeCopyProductStatus');
    return this;
  }

  /**
   * Describes a portfolio
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribePortfolio.html
   */
  public describePortfolio() {
    this.add('servicecatalog:DescribePortfolio');
    return this;
  }

  /**
   * Gets the status of the specified portfolio share operation.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribePortfolioShareStatus.html
   */
  public describePortfolioShareStatus() {
    this.add('servicecatalog:DescribePortfolioShareStatus');
    return this;
  }

  /**
   * Describes a product as an end-user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProduct.html
   */
  public describeProduct() {
    this.add('servicecatalog:DescribeProduct');
    return this;
  }

  /**
   * Describes a product as an admin
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProductAsAdmin.html
   */
  public describeProductAsAdmin() {
    this.add('servicecatalog:DescribeProductAsAdmin');
    return this;
  }

  /**
   * Describes a product as an end-user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProductView.html
   */
  public describeProductView() {
    this.add('servicecatalog:DescribeProductView');
    return this;
  }

  /**
   * Describes a provisioned product
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisionedProduct.html
   */
  public describeProvisionedProduct() {
    this.add('servicecatalog:DescribeProvisionedProduct');
    return this;
  }

  /**
   * Describes a provisioned product plan
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisionedProductPlan.html
   */
  public describeProvisionedProductPlan() {
    this.add('servicecatalog:DescribeProvisionedProductPlan');
    return this;
  }

  /**
   * Describes a provisioning artifact
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisioningArtifact.html
   */
  public describeProvisioningArtifact() {
    this.add('servicecatalog:DescribeProvisioningArtifact');
    return this;
  }

  /**
   * Describes the parameters that you need to specify to successfully provision a specified provisioning artifact
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisioningParameters.html
   */
  public describeProvisioningParameters() {
    this.add('servicecatalog:DescribeProvisioningParameters');
    return this;
  }

  /**
   * Describes a record and lists any outputs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeRecord.html
   */
  public describeRecord() {
    this.add('servicecatalog:DescribeRecord');
    return this;
  }

  /**
   * Describes a self-service action.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeServiceAction.html
   */
  public describeServiceAction() {
    this.add('servicecatalog:DescribeServiceAction');
    return this;
  }

  /**
   * Gets the default parameters if you executed the specified Service Action on the specified Provisioned Product.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeServiceActionExecutionParameters.html
   */
  public describeServiceActionExecutionParameters() {
    this.add('servicecatalog:DescribeServiceActionExecutionParameters');
    return this;
  }

  /**
   * Gets information about the specified TagOption.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeTagOption.html
   */
  public describeTagOption() {
    this.add('servicecatalog:DescribeTagOption');
    return this;
  }

  /**
   * Disable portfolio sharing through AWS Organizations feature.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisableAWSOrganizationsAccess.html
   */
  public disableAWSOrganizationsAccess() {
    this.add('servicecatalog:DisableAWSOrganizationsAccess');
    return this;
  }

  /**
   * Disassociates a budget from a resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateBudgetFromResource.html
   */
  public disassociateBudgetFromResource() {
    this.add('servicecatalog:DisassociateBudgetFromResource');
    return this;
  }

  /**
   * Disassociates an IAM principal from a portfolio.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociatePrincipalFromPortfolio.html
   */
  public disassociatePrincipalFromPortfolio() {
    this.add('servicecatalog:DisassociatePrincipalFromPortfolio');
    return this;
  }

  /**
   * Disassociates a product from a portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateProductFromPortfolio.html
   */
  public disassociateProductFromPortfolio() {
    this.add('servicecatalog:DisassociateProductFromPortfolio');
    return this;
  }

  /**
   * Disassociates the specified self-service action association from the specified provisioning artifact.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateServiceActionFromProvisioningArtifact.html
   */
  public disassociateServiceActionFromProvisioningArtifact() {
    this.add('servicecatalog:DisassociateServiceActionFromProvisioningArtifact');
    return this;
  }

  /**
   * Disassociates the specified TagOption from the specified resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateTagOptionFromResource.html
   */
  public disassociateTagOptionFromResource() {
    this.add('servicecatalog:DisassociateTagOptionFromResource');
    return this;
  }

  /**
   * Enable portfolio sharing feature through AWS Organizations.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_EnableAWSOrganizationsAccess.html
   */
  public enableAWSOrganizationsAccess() {
    this.add('servicecatalog:EnableAWSOrganizationsAccess');
    return this;
  }

  /**
   * Executes a provisioned product plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ExecuteProvisionedProductPlan.html
   */
  public executeProvisionedProductPlan() {
    this.add('servicecatalog:ExecuteProvisionedProductPlan');
    return this;
  }

  /**
   * Executes a provisioned product plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ExecuteProvisionedProductServiceAction.html
   */
  public executeProvisionedProductServiceAction() {
    this.add('servicecatalog:ExecuteProvisionedProductServiceAction');
    return this;
  }

  /**
   * Get the Access Status for AWS Organization portfolio share feature.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_GetAWSOrganizationsAccessStatus.html
   */
  public getAWSOrganizationsAccessStatus() {
    this.add('servicecatalog:GetAWSOrganizationsAccessStatus');
    return this;
  }

  /**
   * Lists the portfolios that have been shared with you and you have accepted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListAcceptedPortfolioShares.html
   */
  public listAcceptedPortfolioShares() {
    this.add('servicecatalog:ListAcceptedPortfolioShares');
    return this;
  }

  /**
   * Lists all the budgets associated to a resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListBudgetsForResource.html
   */
  public listBudgetsForResource() {
    this.add('servicecatalog:ListBudgetsForResource');
    return this;
  }

  /**
   * Lists constraints associated with a given portfolio
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListConstraintsForPortfolio.html
   */
  public listConstraintsForPortfolio() {
    this.add('servicecatalog:ListConstraintsForPortfolio');
    return this;
  }

  /**
   * Lists the different ways to launch a given product as an end-user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListLaunchPaths.html
   */
  public listLaunchPaths() {
    this.add('servicecatalog:ListLaunchPaths');
    return this;
  }

  /**
   * Lists the organization nodes that have access to the specified portfolio.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListOrganizationPortfolioAccess.html
   */
  public listOrganizationPortfolioAccess() {
    this.add('servicecatalog:ListOrganizationPortfolioAccess');
    return this;
  }

  /**
   * Lists the AWS accounts you have shared a given portfolio with
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPortfolioAccess.html
   */
  public listPortfolioAccess() {
    this.add('servicecatalog:ListPortfolioAccess');
    return this;
  }

  /**
   * Lists the portfolios in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPortfolios.html
   */
  public listPortfolios() {
    this.add('servicecatalog:ListPortfolios');
    return this;
  }

  /**
   * Lists the portfolios associated with a given product
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPortfoliosForProduct.html
   */
  public listPortfoliosForProduct() {
    this.add('servicecatalog:ListPortfoliosForProduct');
    return this;
  }

  /**
   * Lists the IAM principals associated with a given portfolio
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPrincipalsForPortfolio.html
   */
  public listPrincipalsForPortfolio() {
    this.add('servicecatalog:ListPrincipalsForPortfolio');
    return this;
  }

  /**
   * Lists the provisioned product plans
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListProvisionedProductPlans.html
   */
  public listProvisionedProductPlans() {
    this.add('servicecatalog:ListProvisionedProductPlans');
    return this;
  }

  /**
   * Lists the provisioning artifacts associated with a given product
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListProvisioningArtifacts.html
   */
  public listProvisioningArtifacts() {
    this.add('servicecatalog:ListProvisioningArtifacts');
    return this;
  }

  /**
   * Lists all provisioning artifacts for the specified self-service action.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListProvisioningArtifactsForServiceAction.html
   */
  public listProvisioningArtifactsForServiceAction() {
    this.add('servicecatalog:ListProvisioningArtifactsForServiceAction');
    return this;
  }

  /**
   * Lists all the records in your account or all the records related to a given provisioned product
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListRecordHistory.html
   */
  public listRecordHistory() {
    this.add('servicecatalog:ListRecordHistory');
    return this;
  }

  /**
   * Lists the resources associated with the specified TagOption.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListResourcesForTagOption.html
   */
  public listResourcesForTagOption() {
    this.add('servicecatalog:ListResourcesForTagOption');
    return this;
  }

  /**
   * Lists all self-service actions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListServiceActions.html
   */
  public listServiceActions() {
    this.add('servicecatalog:ListServiceActions');
    return this;
  }

  /**
   * Lists all the service actions associated with the specified provisioning artifact in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListServiceActionsForProvisioningArtifact.html
   */
  public listServiceActionsForProvisioningArtifact() {
    this.add('servicecatalog:ListServiceActionsForProvisioningArtifact');
    return this;
  }

  /**
   * Lists account, region and status of each stack instances that are associated with a CFN_STACKSET type provisioned product
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListStackInstancesForProvisionedProduct.html
   */
  public listStackInstancesForProvisionedProduct() {
    this.add('servicecatalog:ListStackInstancesForProvisionedProduct');
    return this;
  }

  /**
   * Lists the specified TagOptions or all TagOptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListTagOptions.html
   */
  public listTagOptions() {
    this.add('servicecatalog:ListTagOptions');
    return this;
  }

  /**
   * Provisions a product with a specified provisioning artifact and launch parameters
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ProvisionProduct.html
   */
  public provisionProduct() {
    this.add('servicecatalog:ProvisionProduct');
    return this;
  }

  /**
   * Rejects a portfolio that has been shared with you that you previously accepted
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_RejectPortfolioShare.html
   */
  public rejectPortfolioShare() {
    this.add('servicecatalog:RejectPortfolioShare');
    return this;
  }

  /**
   * Lists all the provisioned products in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ScanProvisionedProducts.html
   */
  public scanProvisionedProducts() {
    this.add('servicecatalog:ScanProvisionedProducts');
    return this;
  }

  /**
   * Lists the products available to you as an end-user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_SearchProducts.html
   */
  public searchProducts() {
    this.add('servicecatalog:SearchProducts');
    return this;
  }

  /**
   * Lists all the products in your account or all the products associated with a given portfolio
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_SearchProductsAsAdmin.html
   */
  public searchProductsAsAdmin() {
    this.add('servicecatalog:SearchProductsAsAdmin');
    return this;
  }

  /**
   * Lists all the provisioned products in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_SearchProvisionedProducts.html
   */
  public searchProvisionedProducts() {
    this.add('servicecatalog:SearchProvisionedProducts');
    return this;
  }

  /**
   * Terminates an existing provisioned product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_TerminateProvisionedProduct.html
   */
  public terminateProvisionedProduct() {
    this.add('servicecatalog:TerminateProvisionedProduct');
    return this;
  }

  /**
   * Updates the metadata fields of an existing constraint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateConstraint.html
   */
  public updateConstraint() {
    this.add('servicecatalog:UpdateConstraint');
    return this;
  }

  /**
   * Updates the metadata fields and/or tags of an existing portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdatePortfolio.html
   */
  public updatePortfolio() {
    this.add('servicecatalog:UpdatePortfolio');
    return this;
  }

  /**
   * Updates the metadata fields and/or tags of an existing product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProduct.html
   */
  public updateProduct() {
    this.add('servicecatalog:UpdateProduct');
    return this;
  }

  /**
   * Updates an existing provisioned product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProvisionedProduct.html
   */
  public updateProvisionedProduct() {
    this.add('servicecatalog:UpdateProvisionedProduct');
    return this;
  }

  /**
   * Updates the properties of an existing provisioned product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProvisionedProductProperties.html
   */
  public updateProvisionedProductProperties() {
    this.add('servicecatalog:UpdateProvisionedProductProperties');
    return this;
  }

  /**
   * Updates the metadata fields of an existing provisioning artifact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProvisioningArtifact.html
   */
  public updateProvisioningArtifact() {
    this.add('servicecatalog:UpdateProvisioningArtifact');
    return this;
  }

  /**
   * Updates a self-service action.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateServiceAction.html
   */
  public updateServiceAction() {
    this.add('servicecatalog:UpdateServiceAction');
    return this;
  }

  /**
   * Updates the specified TagOption.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateTagOption.html
   */
  public updateTagOption() {
    this.add('servicecatalog:UpdateTagOption');
    return this;
  }

  /**
   * Adds a resource of type Portfolio to the statement
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_PortfolioDetail.html
   *
   * @param portfolioId - Identifier for the portfolioId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onPortfolio(portfolioId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:catalog:${Region}:${Account}:portfolio/${PortfolioId}';
    arn = arn.replace('${PortfolioId}', portfolioId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Product to the statement
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ProductViewDetail.html
   *
   * @param productId - Identifier for the productId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onProduct(productId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:catalog:${Region}:${Account}:product/${ProductId}';
    arn = arn.replace('${ProductId}', productId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Allows users to see and perform actions on resources created by anyone in the account.
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAccountLevel(value: string | string[], operator?: string) {
    return this.if(`servicecatalog:accountLevel`, value, operator || 'StringLike');
  }

  /**
   * Allows users to see and perform actions on resources created either by them or by anyone federating into the same role as them.
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRoleLevel(value: string | string[], operator?: string) {
    return this.if(`servicecatalog:roleLevel`, value, operator || 'StringLike');
  }

  /**
   * Allows users to see and perform actions on only resources that they created.
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUserLevel(value: string | string[], operator?: string) {
    return this.if(`servicecatalog:userLevel`, value, operator || 'StringLike');
  }
}
