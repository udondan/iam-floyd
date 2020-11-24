import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [servicecatalog](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsservicecatalog.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Servicecatalog extends PolicyStatement {
  public servicePrefix = 'servicecatalog';

  /**
   * Statement provider for service [servicecatalog](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsservicecatalog.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept a portfolio that has been shared with you
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AcceptPortfolioShare.html
   */
  public toAcceptPortfolioShare() {
    this.to('servicecatalog:AcceptPortfolioShare');
    return this;
  }

  /**
   * Grants permission to associate an attribute group with an application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateAttributeGroup.html
   */
  public toAssociateAttributeGroup() {
    this.to('servicecatalog:AssociateAttributeGroup');
    return this;
  }

  /**
   * Grants permission to associate a budget with a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateBudgetWithResource.html
   */
  public toAssociateBudgetWithResource() {
    this.to('servicecatalog:AssociateBudgetWithResource');
    return this;
  }

  /**
   * Grants permission to associate an IAM principal with a portfolio, giving the specified principal access to any products associated with the specified portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociatePrincipalWithPortfolio.html
   */
  public toAssociatePrincipalWithPortfolio() {
    this.to('servicecatalog:AssociatePrincipalWithPortfolio');
    return this;
  }

  /**
   * Grants permission to associate a product with a portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateProductWithPortfolio.html
   */
  public toAssociateProductWithPortfolio() {
    this.to('servicecatalog:AssociateProductWithPortfolio');
    return this;
  }

  /**
   * Grants permission to associate a resource with an application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateResource.html
   */
  public toAssociateResource() {
    this.to('servicecatalog:AssociateResource');
    return this;
  }

  /**
   * Grants permission to associate an action with a provisioning artifact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateServiceActionWithProvisioningArtifact.html
   */
  public toAssociateServiceActionWithProvisioningArtifact() {
    this.to('servicecatalog:AssociateServiceActionWithProvisioningArtifact');
    return this;
  }

  /**
   * Grants permission to associate the specified TagOption with the specified portfolio or product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateTagOptionWithResource.html
   */
  public toAssociateTagOptionWithResource() {
    this.to('servicecatalog:AssociateTagOptionWithResource');
    return this;
  }

  /**
   * Grants permission to associate multiple self-service actions with provisioning artifacts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_BatchAssociateServiceActionWithProvisioningArtifact.html
   */
  public toBatchAssociateServiceActionWithProvisioningArtifact() {
    this.to('servicecatalog:BatchAssociateServiceActionWithProvisioningArtifact');
    return this;
  }

  /**
   * Grants permission to disassociate a batch of self-service actions from the specified provisioning artifact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_BatchDisassociateServiceActionFromProvisioningArtifact.html
   */
  public toBatchDisassociateServiceActionFromProvisioningArtifact() {
    this.to('servicecatalog:BatchDisassociateServiceActionFromProvisioningArtifact');
    return this;
  }

  /**
   * Grants permission to copy the specified source product to the specified target product or a new product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CopyProduct.html
   */
  public toCopyProduct() {
    this.to('servicecatalog:CopyProduct');
    return this;
  }

  /**
   * Grants permission to create an application.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateApplication.html
   */
  public toCreateApplication() {
    this.to('servicecatalog:CreateApplication');
    return this;
  }

  /**
   * Grants permission to create an attribute group.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateAttributeGroup.html
   */
  public toCreateAttributeGroup() {
    this.to('servicecatalog:CreateAttributeGroup');
    return this;
  }

  /**
   * Grants permission to create a constraint on an associated product and portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateConstraint.html
   */
  public toCreateConstraint() {
    this.to('servicecatalog:CreateConstraint');
    return this;
  }

  /**
   * Grants permission to create a portfolio
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreatePortfolio.html
   */
  public toCreatePortfolio() {
    this.to('servicecatalog:CreatePortfolio');
    return this;
  }

  /**
   * Grants permission to share a portfolio you own with another AWS account
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreatePortfolioShare.html
   */
  public toCreatePortfolioShare() {
    this.to('servicecatalog:CreatePortfolioShare');
    return this;
  }

  /**
   * Grants permission to create a product and that product's first provisioning artifact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProduct.html
   */
  public toCreateProduct() {
    this.to('servicecatalog:CreateProduct');
    return this;
  }

  /**
   * Grants permission to add a new provisioned product plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProvisionedProductPlan.html
   */
  public toCreateProvisionedProductPlan() {
    this.to('servicecatalog:CreateProvisionedProductPlan');
    return this;
  }

  /**
   * Grants permission to add a new provisioning artifact to an existing product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProvisioningArtifact.html
   */
  public toCreateProvisioningArtifact() {
    this.to('servicecatalog:CreateProvisioningArtifact');
    return this;
  }

  /**
   * Grants permission to create a self-service action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateServiceAction.html
   */
  public toCreateServiceAction() {
    this.to('servicecatalog:CreateServiceAction');
    return this;
  }

  /**
   * Grants permission to create a TagOption
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateTagOption.html
   */
  public toCreateTagOption() {
    this.to('servicecatalog:CreateTagOption');
    return this;
  }

  /**
   * Grants permission to delete an application if all associations have been removed from the application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    this.to('servicecatalog:DeleteApplication');
    return this;
  }

  /**
   * Grants permission to delete an attribute group if all associations have been removed from the attribute group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteAttributeGroup.html
   */
  public toDeleteAttributeGroup() {
    this.to('servicecatalog:DeleteAttributeGroup');
    return this;
  }

  /**
   * Grants permission to remove and delete an existing constraint from an associated product and portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteConstraint.html
   */
  public toDeleteConstraint() {
    this.to('servicecatalog:DeleteConstraint');
    return this;
  }

  /**
   * Grants permission to delete a portfolio if all associations and shares have been removed from the portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeletePortfolio.html
   */
  public toDeletePortfolio() {
    this.to('servicecatalog:DeletePortfolio');
    return this;
  }

  /**
   * Grants permission to unshare a portfolio you own from an AWS account you previously shared the portfolio with
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeletePortfolioShare.html
   */
  public toDeletePortfolioShare() {
    this.to('servicecatalog:DeletePortfolioShare');
    return this;
  }

  /**
   * Grants permission to delete a product if all associations have been removed from the product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteProduct.html
   */
  public toDeleteProduct() {
    this.to('servicecatalog:DeleteProduct');
    return this;
  }

  /**
   * Grants permission to delete a provisioned product plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteProvisionedProductPlan.html
   */
  public toDeleteProvisionedProductPlan() {
    this.to('servicecatalog:DeleteProvisionedProductPlan');
    return this;
  }

  /**
   * Grants permission to delete a provisioning artifact from a product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteProvisioningArtifact.html
   */
  public toDeleteProvisioningArtifact() {
    this.to('servicecatalog:DeleteProvisioningArtifact');
    return this;
  }

  /**
   * Grants permission to delete a self-service action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteServiceAction.html
   */
  public toDeleteServiceAction() {
    this.to('servicecatalog:DeleteServiceAction');
    return this;
  }

  /**
   * Grants permission to delete the specified TagOption
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteTagOption.html
   */
  public toDeleteTagOption() {
    this.to('servicecatalog:DeleteTagOption');
    return this;
  }

  /**
   * Grants permission to describe a constraint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeConstraint.html
   */
  public toDescribeConstraint() {
    this.to('servicecatalog:DescribeConstraint');
    return this;
  }

  /**
   * Grants permission to get the status of the specified copy product operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeCopyProductStatus.html
   */
  public toDescribeCopyProductStatus() {
    this.to('servicecatalog:DescribeCopyProductStatus');
    return this;
  }

  /**
   * Grants permission to describe a portfolio
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribePortfolio.html
   */
  public toDescribePortfolio() {
    this.to('servicecatalog:DescribePortfolio');
    return this;
  }

  /**
   * Grants permission to get the status of the specified portfolio share operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribePortfolioShareStatus.html
   */
  public toDescribePortfolioShareStatus() {
    this.to('servicecatalog:DescribePortfolioShareStatus');
    return this;
  }

  /**
   * Grants permission to describe a product as an end-user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProduct.html
   */
  public toDescribeProduct() {
    this.to('servicecatalog:DescribeProduct');
    return this;
  }

  /**
   * Grants permission to describe a product as an admin
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProductAsAdmin.html
   */
  public toDescribeProductAsAdmin() {
    this.to('servicecatalog:DescribeProductAsAdmin');
    return this;
  }

  /**
   * Grants permission to describe a product as an end-user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProductView.html
   */
  public toDescribeProductView() {
    this.to('servicecatalog:DescribeProductView');
    return this;
  }

  /**
   * Grants permission to describe a provisioned product
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisionedProduct.html
   */
  public toDescribeProvisionedProduct() {
    this.to('servicecatalog:DescribeProvisionedProduct');
    return this;
  }

  /**
   * Grants permission to describe a provisioned product plan
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisionedProductPlan.html
   */
  public toDescribeProvisionedProductPlan() {
    this.to('servicecatalog:DescribeProvisionedProductPlan');
    return this;
  }

  /**
   * Grants permission to describe a provisioning artifact
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisioningArtifact.html
   */
  public toDescribeProvisioningArtifact() {
    this.to('servicecatalog:DescribeProvisioningArtifact');
    return this;
  }

  /**
   * Grants permission to describe the parameters that you need to specify to successfully provision a specified provisioning artifact
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisioningParameters.html
   */
  public toDescribeProvisioningParameters() {
    this.to('servicecatalog:DescribeProvisioningParameters');
    return this;
  }

  /**
   * Grants permission to describe a record and lists any outputs
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAccountLevel()
   * - .ifRoleLevel()
   * - .ifUserLevel()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeRecord.html
   */
  public toDescribeRecord() {
    this.to('servicecatalog:DescribeRecord');
    return this;
  }

  /**
   * Grants permission to describe a self-service action
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeServiceAction.html
   */
  public toDescribeServiceAction() {
    this.to('servicecatalog:DescribeServiceAction');
    return this;
  }

  /**
   * Grants permission to get the default parameters if you executed the specified Service Action on the specified Provisioned Product
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeServiceActionExecutionParameters.html
   */
  public toDescribeServiceActionExecutionParameters() {
    this.to('servicecatalog:DescribeServiceActionExecutionParameters');
    return this;
  }

  /**
   * Grants permission to get information about the specified TagOption
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeTagOption.html
   */
  public toDescribeTagOption() {
    this.to('servicecatalog:DescribeTagOption');
    return this;
  }

  /**
   * Grants permission to disable portfolio sharing through AWS Organizations feature
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisableAWSOrganizationsAccess.html
   */
  public toDisableAWSOrganizationsAccess() {
    this.to('servicecatalog:DisableAWSOrganizationsAccess');
    return this;
  }

  /**
   * Grants permission to disassociate an attribute group from an application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateAttributeGroup.html
   */
  public toDisassociateAttributeGroup() {
    this.to('servicecatalog:DisassociateAttributeGroup');
    return this;
  }

  /**
   * Grants permission to disassociate a budget from a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateBudgetFromResource.html
   */
  public toDisassociateBudgetFromResource() {
    this.to('servicecatalog:DisassociateBudgetFromResource');
    return this;
  }

  /**
   * Grants permission to disassociate an IAM principal from a portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociatePrincipalFromPortfolio.html
   */
  public toDisassociatePrincipalFromPortfolio() {
    this.to('servicecatalog:DisassociatePrincipalFromPortfolio');
    return this;
  }

  /**
   * Grants permission to disassociate a product from a portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateProductFromPortfolio.html
   */
  public toDisassociateProductFromPortfolio() {
    this.to('servicecatalog:DisassociateProductFromPortfolio');
    return this;
  }

  /**
   * Grants permission to disassociate a resource from an application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateResource.html
   */
  public toDisassociateResource() {
    this.to('servicecatalog:DisassociateResource');
    return this;
  }

  /**
   * Grants permission to disassociate the specified self-service action association from the specified provisioning artifact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateServiceActionFromProvisioningArtifact.html
   */
  public toDisassociateServiceActionFromProvisioningArtifact() {
    this.to('servicecatalog:DisassociateServiceActionFromProvisioningArtifact');
    return this;
  }

  /**
   * Grants permission to disassociate the specified TagOption from the specified resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateTagOptionFromResource.html
   */
  public toDisassociateTagOptionFromResource() {
    this.to('servicecatalog:DisassociateTagOptionFromResource');
    return this;
  }

  /**
   * Grants permission to enable portfolio sharing feature through AWS Organizations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_EnableAWSOrganizationsAccess.html
   */
  public toEnableAWSOrganizationsAccess() {
    this.to('servicecatalog:EnableAWSOrganizationsAccess');
    return this;
  }

  /**
   * Grants permission to execute a provisioned product plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ExecuteProvisionedProductPlan.html
   */
  public toExecuteProvisionedProductPlan() {
    this.to('servicecatalog:ExecuteProvisionedProductPlan');
    return this;
  }

  /**
   * Grants permission to executes a provisioned product plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ExecuteProvisionedProductServiceAction.html
   */
  public toExecuteProvisionedProductServiceAction() {
    this.to('servicecatalog:ExecuteProvisionedProductServiceAction');
    return this;
  }

  /**
   * Grants permission to get the access status of AWS Organization portfolio share feature
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_GetAWSOrganizationsAccessStatus.html
   */
  public toGetAWSOrganizationsAccessStatus() {
    this.to('servicecatalog:GetAWSOrganizationsAccessStatus');
    return this;
  }

  /**
   * Grants permission to get an application.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_GetApplication.html
   */
  public toGetApplication() {
    this.to('servicecatalog:GetApplication');
    return this;
  }

  /**
   * Grants permission to get an attribute group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_GetAttributeGroup.html
   */
  public toGetAttributeGroup() {
    this.to('servicecatalog:GetAttributeGroup');
    return this;
  }

  /**
   * Grants permission to import a resource into a provisioned product.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ImportAsProvisionedProduct.html
   */
  public toImportAsProvisionedProduct() {
    this.to('servicecatalog:ImportAsProvisionedProduct');
    return this;
  }

  /**
   * Grants permission to list the portfolios that have been shared with you and you have accepted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListAcceptedPortfolioShares.html
   */
  public toListAcceptedPortfolioShares() {
    this.to('servicecatalog:ListAcceptedPortfolioShares');
    return this;
  }

  /**
   * Grants permission to list the applications in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListApplications.html
   */
  public toListApplications() {
    this.to('servicecatalog:ListApplications');
    return this;
  }

  /**
   * Grants permission to list the attribute groups associated with an application.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListAssociatedAttributeGroups.html
   */
  public toListAssociatedAttributeGroups() {
    this.to('servicecatalog:ListAssociatedAttributeGroups');
    return this;
  }

  /**
   * Grants permission to list the resources associated with an application.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListAssociatedResources.html
   */
  public toListAssociatedResources() {
    this.to('servicecatalog:ListAssociatedResources');
    return this;
  }

  /**
   * Grants permission to list the attribute groups in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListAttributeGroups.html
   */
  public toListAttributeGroups() {
    this.to('servicecatalog:ListAttributeGroups');
    return this;
  }

  /**
   * Grants permission to list all the budgets associated to a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListBudgetsForResource.html
   */
  public toListBudgetsForResource() {
    this.to('servicecatalog:ListBudgetsForResource');
    return this;
  }

  /**
   * Grants permission to list constraints associated with a given portfolio
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListConstraintsForPortfolio.html
   */
  public toListConstraintsForPortfolio() {
    this.to('servicecatalog:ListConstraintsForPortfolio');
    return this;
  }

  /**
   * Grants permission to list the different ways to launch a given product as an end-user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListLaunchPaths.html
   */
  public toListLaunchPaths() {
    this.to('servicecatalog:ListLaunchPaths');
    return this;
  }

  /**
   * Grants permission to list the organization nodes that have access to the specified portfolio
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListOrganizationPortfolioAccess.html
   */
  public toListOrganizationPortfolioAccess() {
    this.to('servicecatalog:ListOrganizationPortfolioAccess');
    return this;
  }

  /**
   * Grants permission to list the AWS accounts you have shared a given portfolio with
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPortfolioAccess.html
   */
  public toListPortfolioAccess() {
    this.to('servicecatalog:ListPortfolioAccess');
    return this;
  }

  /**
   * Grants permission to list the portfolios in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPortfolios.html
   */
  public toListPortfolios() {
    this.to('servicecatalog:ListPortfolios');
    return this;
  }

  /**
   * Grants permission to list the portfolios associated with a given product
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPortfoliosForProduct.html
   */
  public toListPortfoliosForProduct() {
    this.to('servicecatalog:ListPortfoliosForProduct');
    return this;
  }

  /**
   * Grants permission to list the IAM principals associated with a given portfolio
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPrincipalsForPortfolio.html
   */
  public toListPrincipalsForPortfolio() {
    this.to('servicecatalog:ListPrincipalsForPortfolio');
    return this;
  }

  /**
   * Grants permission to list the provisioned product plans
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListProvisionedProductPlans.html
   */
  public toListProvisionedProductPlans() {
    this.to('servicecatalog:ListProvisionedProductPlans');
    return this;
  }

  /**
   * Grants permission to list the provisioning artifacts associated with a given product
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListProvisioningArtifacts.html
   */
  public toListProvisioningArtifacts() {
    this.to('servicecatalog:ListProvisioningArtifacts');
    return this;
  }

  /**
   * Grants permission to list all provisioning artifacts for the specified self-service action
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListProvisioningArtifactsForServiceAction.html
   */
  public toListProvisioningArtifactsForServiceAction() {
    this.to('servicecatalog:ListProvisioningArtifactsForServiceAction');
    return this;
  }

  /**
   * Grants permission to list all the records in your account or all the records related to a given provisioned product
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAccountLevel()
   * - .ifRoleLevel()
   * - .ifUserLevel()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListRecordHistory.html
   */
  public toListRecordHistory() {
    this.to('servicecatalog:ListRecordHistory');
    return this;
  }

  /**
   * Grants permission to list the resources associated with the specified TagOption
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListResourcesForTagOption.html
   */
  public toListResourcesForTagOption() {
    this.to('servicecatalog:ListResourcesForTagOption');
    return this;
  }

  /**
   * Grants permission to list all self-service actions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListServiceActions.html
   */
  public toListServiceActions() {
    this.to('servicecatalog:ListServiceActions');
    return this;
  }

  /**
   * Grants permission to list all the service actions associated with the specified provisioning artifact in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListServiceActionsForProvisioningArtifact.html
   */
  public toListServiceActionsForProvisioningArtifact() {
    this.to('servicecatalog:ListServiceActionsForProvisioningArtifact');
    return this;
  }

  /**
   * Grants permission to list account, region and status of each stack instances that are associated with a CFN_STACKSET type provisioned product
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListStackInstancesForProvisionedProduct.html
   */
  public toListStackInstancesForProvisionedProduct() {
    this.to('servicecatalog:ListStackInstancesForProvisionedProduct');
    return this;
  }

  /**
   * Grants permission to list the specified TagOptions or all TagOptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListTagOptions.html
   */
  public toListTagOptions() {
    this.to('servicecatalog:ListTagOptions');
    return this;
  }

  /**
   * Grants permission to provision a product with a specified provisioning artifact and launch parameters
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ProvisionProduct.html
   */
  public toProvisionProduct() {
    this.to('servicecatalog:ProvisionProduct');
    return this;
  }

  /**
   * Grants permission to reject a portfolio that has been shared with you that you previously accepted
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_RejectPortfolioShare.html
   */
  public toRejectPortfolioShare() {
    this.to('servicecatalog:RejectPortfolioShare');
    return this;
  }

  /**
   * Grants permission to list all the provisioned products in your account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAccountLevel()
   * - .ifRoleLevel()
   * - .ifUserLevel()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ScanProvisionedProducts.html
   */
  public toScanProvisionedProducts() {
    this.to('servicecatalog:ScanProvisionedProducts');
    return this;
  }

  /**
   * Grants permission to list the products available to you as an end-user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_SearchProducts.html
   */
  public toSearchProducts() {
    this.to('servicecatalog:SearchProducts');
    return this;
  }

  /**
   * Grants permission to list all the products in your account or all the products associated with a given portfolio
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_SearchProductsAsAdmin.html
   */
  public toSearchProductsAsAdmin() {
    this.to('servicecatalog:SearchProductsAsAdmin');
    return this;
  }

  /**
   * Grants permission to list all the provisioned products in your account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAccountLevel()
   * - .ifRoleLevel()
   * - .ifUserLevel()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_SearchProvisionedProducts.html
   */
  public toSearchProvisionedProducts() {
    this.to('servicecatalog:SearchProvisionedProducts');
    return this;
  }

  /**
   * Grants permission to terminate an existing provisioned product
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAccountLevel()
   * - .ifRoleLevel()
   * - .ifUserLevel()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_TerminateProvisionedProduct.html
   */
  public toTerminateProvisionedProduct() {
    this.to('servicecatalog:TerminateProvisionedProduct');
    return this;
  }

  /**
   * Grants permission to update the attributes of an existing application.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    this.to('servicecatalog:UpdateApplication');
    return this;
  }

  /**
   * Grants permission to update the attributes of an existing attribute group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateAttributeGroup.html
   */
  public toUpdateAttributeGroup() {
    this.to('servicecatalog:UpdateAttributeGroup');
    return this;
  }

  /**
   * Grants permission to update the metadata fields of an existing constraint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateConstraint.html
   */
  public toUpdateConstraint() {
    this.to('servicecatalog:UpdateConstraint');
    return this;
  }

  /**
   * Grants permission to update the metadata fields and/or tags of an existing portfolio
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdatePortfolio.html
   */
  public toUpdatePortfolio() {
    this.to('servicecatalog:UpdatePortfolio');
    return this;
  }

  /**
   * Grants permission to update the metadata fields and/or tags of an existing product
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProduct.html
   */
  public toUpdateProduct() {
    this.to('servicecatalog:UpdateProduct');
    return this;
  }

  /**
   * Grants permission to update an existing provisioned product
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAccountLevel()
   * - .ifRoleLevel()
   * - .ifUserLevel()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProvisionedProduct.html
   */
  public toUpdateProvisionedProduct() {
    this.to('servicecatalog:UpdateProvisionedProduct');
    return this;
  }

  /**
   * Grants permission to update the properties of an existing provisioned product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProvisionedProductProperties.html
   */
  public toUpdateProvisionedProductProperties() {
    this.to('servicecatalog:UpdateProvisionedProductProperties');
    return this;
  }

  /**
   * Grants permission to update the metadata fields of an existing provisioning artifact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProvisioningArtifact.html
   */
  public toUpdateProvisioningArtifact() {
    this.to('servicecatalog:UpdateProvisioningArtifact');
    return this;
  }

  /**
   * Grants permission to update a self-service action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateServiceAction.html
   */
  public toUpdateServiceAction() {
    this.to('servicecatalog:UpdateServiceAction');
    return this;
  }

  /**
   * Grants permission to update the specified TagOption
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateTagOption.html
   */
  public toUpdateTagOption() {
    this.to('servicecatalog:UpdateTagOption');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptPortfolioShare",
      "AssociateAttributeGroup",
      "AssociateBudgetWithResource",
      "AssociatePrincipalWithPortfolio",
      "AssociateProductWithPortfolio",
      "AssociateResource",
      "AssociateServiceActionWithProvisioningArtifact",
      "AssociateTagOptionWithResource",
      "BatchAssociateServiceActionWithProvisioningArtifact",
      "BatchDisassociateServiceActionFromProvisioningArtifact",
      "CopyProduct",
      "CreateApplication",
      "CreateAttributeGroup",
      "CreateConstraint",
      "CreatePortfolio",
      "CreateProduct",
      "CreateProvisionedProductPlan",
      "CreateProvisioningArtifact",
      "CreateServiceAction",
      "CreateTagOption",
      "DeleteApplication",
      "DeleteAttributeGroup",
      "DeleteConstraint",
      "DeletePortfolio",
      "DeleteProduct",
      "DeleteProvisionedProductPlan",
      "DeleteProvisioningArtifact",
      "DeleteServiceAction",
      "DeleteTagOption",
      "DisableAWSOrganizationsAccess",
      "DisassociateAttributeGroup",
      "DisassociateBudgetFromResource",
      "DisassociatePrincipalFromPortfolio",
      "DisassociateProductFromPortfolio",
      "DisassociateResource",
      "DisassociateServiceActionFromProvisioningArtifact",
      "DisassociateTagOptionFromResource",
      "EnableAWSOrganizationsAccess",
      "ExecuteProvisionedProductPlan",
      "ExecuteProvisionedProductServiceAction",
      "ImportAsProvisionedProduct",
      "ProvisionProduct",
      "RejectPortfolioShare",
      "TerminateProvisionedProduct",
      "UpdateApplication",
      "UpdateAttributeGroup",
      "UpdateConstraint",
      "UpdatePortfolio",
      "UpdateProduct",
      "UpdateProvisionedProduct",
      "UpdateProvisionedProductProperties",
      "UpdateProvisioningArtifact",
      "UpdateServiceAction",
      "UpdateTagOption"
    ],
    "Permissions management": [
      "CreatePortfolioShare",
      "DeletePortfolioShare"
    ],
    "Read": [
      "DescribeConstraint",
      "DescribeCopyProductStatus",
      "DescribePortfolio",
      "DescribePortfolioShareStatus",
      "DescribeProduct",
      "DescribeProductAsAdmin",
      "DescribeProductView",
      "DescribeProvisionedProduct",
      "DescribeProvisionedProductPlan",
      "DescribeProvisioningArtifact",
      "DescribeProvisioningParameters",
      "DescribeRecord",
      "DescribeServiceAction",
      "DescribeServiceActionExecutionParameters",
      "DescribeTagOption",
      "GetAWSOrganizationsAccessStatus",
      "GetApplication",
      "GetAttributeGroup"
    ],
    "List": [
      "ListAcceptedPortfolioShares",
      "ListApplications",
      "ListAssociatedAttributeGroups",
      "ListAssociatedResources",
      "ListAttributeGroups",
      "ListBudgetsForResource",
      "ListConstraintsForPortfolio",
      "ListLaunchPaths",
      "ListOrganizationPortfolioAccess",
      "ListPortfolioAccess",
      "ListPortfolios",
      "ListPortfoliosForProduct",
      "ListPrincipalsForPortfolio",
      "ListProvisionedProductPlans",
      "ListProvisioningArtifacts",
      "ListProvisioningArtifactsForServiceAction",
      "ListRecordHistory",
      "ListResourcesForTagOption",
      "ListServiceActions",
      "ListServiceActionsForProvisioningArtifact",
      "ListStackInstancesForProvisionedProduct",
      "ListTagOptions",
      "ScanProvisionedProducts",
      "SearchProducts",
      "SearchProductsAsAdmin",
      "SearchProvisionedProducts"
    ]
  };

  /**
   * Adds a resource of type Application to the statement
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateApplication.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:servicecatalog:${Region}:${Account}:/applications/${ApplicationId}';
    arn = arn.replace('${ApplicationId}', applicationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type AttributeGroup to the statement
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateAttributeGroup.html
   *
   * @param attributeGroupId - Identifier for the attributeGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAttributeGroup(attributeGroupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:servicecatalog:${Region}:${Account}:/attribute-groups/${AttributeGroupId}';
    arn = arn.replace('${AttributeGroupId}', attributeGroupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPortfolio(portfolioId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:catalog:${Region}:${Account}:portfolio/${PortfolioId}';
    arn = arn.replace('${PortfolioId}', portfolioId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
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
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProduct(productId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:catalog:${Region}:${Account}:product/${ProductId}';
    arn = arn.replace('${ProductId}', productId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters users to see and perform actions on resources created by anyone in the account
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html
   *
   * Applies to actions:
   * - .toDescribeRecord()
   * - .toListRecordHistory()
   * - .toScanProvisionedProducts()
   * - .toSearchProvisionedProducts()
   * - .toTerminateProvisionedProduct()
   * - .toUpdateProvisionedProduct()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAccountLevel(value: string | string[], operator?: Operator | string) {
    return this.if(`servicecatalog:accountLevel`, value, operator || 'StringLike');
  }

  /**
   * Filters users to see and perform actions on resources created either by them or by anyone federating into the same role as them
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html
   *
   * Applies to actions:
   * - .toDescribeRecord()
   * - .toListRecordHistory()
   * - .toScanProvisionedProducts()
   * - .toSearchProvisionedProducts()
   * - .toTerminateProvisionedProduct()
   * - .toUpdateProvisionedProduct()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRoleLevel(value: string | string[], operator?: Operator | string) {
    return this.if(`servicecatalog:roleLevel`, value, operator || 'StringLike');
  }

  /**
   * Filters users to see and perform actions on only resources that they created
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html
   *
   * Applies to actions:
   * - .toDescribeRecord()
   * - .toListRecordHistory()
   * - .toScanProvisionedProducts()
   * - .toSearchProvisionedProducts()
   * - .toTerminateProvisionedProduct()
   * - .toUpdateProvisionedProduct()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUserLevel(value: string | string[], operator?: Operator | string) {
    return this.if(`servicecatalog:userLevel`, value, operator || 'StringLike');
  }
}
