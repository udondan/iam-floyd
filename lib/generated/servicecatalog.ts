import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
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
    return this.to('AcceptPortfolioShare');
  }

  /**
   * Grants permission to associate an attribute group with an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_AssociateAttributeGroup.html
   */
  public toAssociateAttributeGroup() {
    return this.to('AssociateAttributeGroup');
  }

  /**
   * Grants permission to associate a budget with a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateBudgetWithResource.html
   */
  public toAssociateBudgetWithResource() {
    return this.to('AssociateBudgetWithResource');
  }

  /**
   * Grants permission to associate an IAM principal with a portfolio, giving the specified principal access to any products associated with the specified portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociatePrincipalWithPortfolio.html
   */
  public toAssociatePrincipalWithPortfolio() {
    return this.to('AssociatePrincipalWithPortfolio');
  }

  /**
   * Grants permission to associate a product with a portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateProductWithPortfolio.html
   */
  public toAssociateProductWithPortfolio() {
    return this.to('AssociateProductWithPortfolio');
  }

  /**
   * Grants permission to associate a resource with an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifResourceType()
   * - .ifResource()
   *
   * Dependent actions:
   * - cloudformation:DescribeStacks
   * - resource-groups:CreateGroup
   * - resource-groups:GetGroup
   * - resource-groups:Tag
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_AssociateResource.html
   */
  public toAssociateResource() {
    return this.to('AssociateResource');
  }

  /**
   * Grants permission to associate an action with a provisioning artifact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateServiceActionWithProvisioningArtifact.html
   */
  public toAssociateServiceActionWithProvisioningArtifact() {
    return this.to('AssociateServiceActionWithProvisioningArtifact');
  }

  /**
   * Grants permission to associate the specified TagOption with the specified portfolio or product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_AssociateTagOptionWithResource.html
   */
  public toAssociateTagOptionWithResource() {
    return this.to('AssociateTagOptionWithResource');
  }

  /**
   * Grants permission to associate multiple self-service actions with provisioning artifacts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_BatchAssociateServiceActionWithProvisioningArtifact.html
   */
  public toBatchAssociateServiceActionWithProvisioningArtifact() {
    return this.to('BatchAssociateServiceActionWithProvisioningArtifact');
  }

  /**
   * Grants permission to disassociate a batch of self-service actions from the specified provisioning artifact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_BatchDisassociateServiceActionFromProvisioningArtifact.html
   */
  public toBatchDisassociateServiceActionFromProvisioningArtifact() {
    return this.to('BatchDisassociateServiceActionFromProvisioningArtifact');
  }

  /**
   * Grants permission to copy the specified source product to the specified target product or a new product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CopyProduct.html
   */
  public toCopyProduct() {
    return this.to('CopyProduct');
  }

  /**
   * Grants permission to create an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to create an attribute group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_CreateAttributeGroup.html
   */
  public toCreateAttributeGroup() {
    return this.to('CreateAttributeGroup');
  }

  /**
   * Grants permission to create a constraint on an associated product and portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateConstraint.html
   */
  public toCreateConstraint() {
    return this.to('CreateConstraint');
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
    return this.to('CreatePortfolio');
  }

  /**
   * Grants permission to share a portfolio you own with another AWS account
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreatePortfolioShare.html
   */
  public toCreatePortfolioShare() {
    return this.to('CreatePortfolioShare');
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
    return this.to('CreateProduct');
  }

  /**
   * Grants permission to add a new provisioned product plan
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAccountLevel()
   * - .ifRoleLevel()
   * - .ifUserLevel()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProvisionedProductPlan.html
   */
  public toCreateProvisionedProductPlan() {
    return this.to('CreateProvisionedProductPlan');
  }

  /**
   * Grants permission to add a new provisioning artifact to an existing product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateProvisioningArtifact.html
   */
  public toCreateProvisioningArtifact() {
    return this.to('CreateProvisioningArtifact');
  }

  /**
   * Grants permission to create a self-service action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateServiceAction.html
   */
  public toCreateServiceAction() {
    return this.to('CreateServiceAction');
  }

  /**
   * Grants permission to create a TagOption
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_CreateTagOption.html
   */
  public toCreateTagOption() {
    return this.to('CreateTagOption');
  }

  /**
   * Grants permission to delete an application if all associations have been removed from the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to delete an attribute group if all associations have been removed from the attribute group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_DeleteAttributeGroup.html
   */
  public toDeleteAttributeGroup() {
    return this.to('DeleteAttributeGroup');
  }

  /**
   * Grants permission to remove and delete an existing constraint from an associated product and portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteConstraint.html
   */
  public toDeleteConstraint() {
    return this.to('DeleteConstraint');
  }

  /**
   * Grants permission to delete a portfolio if all associations and shares have been removed from the portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeletePortfolio.html
   */
  public toDeletePortfolio() {
    return this.to('DeletePortfolio');
  }

  /**
   * Grants permission to unshare a portfolio you own from an AWS account you previously shared the portfolio with
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeletePortfolioShare.html
   */
  public toDeletePortfolioShare() {
    return this.to('DeletePortfolioShare');
  }

  /**
   * Grants permission to delete a product if all associations have been removed from the product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteProduct.html
   */
  public toDeleteProduct() {
    return this.to('DeleteProduct');
  }

  /**
   * Grants permission to delete a provisioned product plan
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAccountLevel()
   * - .ifRoleLevel()
   * - .ifUserLevel()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteProvisionedProductPlan.html
   */
  public toDeleteProvisionedProductPlan() {
    return this.to('DeleteProvisionedProductPlan');
  }

  /**
   * Grants permission to delete a provisioning artifact from a product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteProvisioningArtifact.html
   */
  public toDeleteProvisioningArtifact() {
    return this.to('DeleteProvisioningArtifact');
  }

  /**
   * Grants permission to delete a self-service action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteServiceAction.html
   */
  public toDeleteServiceAction() {
    return this.to('DeleteServiceAction');
  }

  /**
   * Grants permission to delete the specified TagOption
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DeleteTagOption.html
   */
  public toDeleteTagOption() {
    return this.to('DeleteTagOption');
  }

  /**
   * Grants permission to describe a constraint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeConstraint.html
   */
  public toDescribeConstraint() {
    return this.to('DescribeConstraint');
  }

  /**
   * Grants permission to get the status of the specified copy product operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeCopyProductStatus.html
   */
  public toDescribeCopyProductStatus() {
    return this.to('DescribeCopyProductStatus');
  }

  /**
   * Grants permission to describe a portfolio
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribePortfolio.html
   */
  public toDescribePortfolio() {
    return this.to('DescribePortfolio');
  }

  /**
   * Grants permission to get the status of the specified portfolio share operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribePortfolioShareStatus.html
   */
  public toDescribePortfolioShareStatus() {
    return this.to('DescribePortfolioShareStatus');
  }

  /**
   * Grants permission to view a summary of each of the portfolio shares that were created for the specified portfolio
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribePortfolioShares.html
   */
  public toDescribePortfolioShares() {
    return this.to('DescribePortfolioShares');
  }

  /**
   * Grants permission to describe a product as an end-user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProduct.html
   */
  public toDescribeProduct() {
    return this.to('DescribeProduct');
  }

  /**
   * Grants permission to describe a product as an admin
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProductAsAdmin.html
   */
  public toDescribeProductAsAdmin() {
    return this.to('DescribeProductAsAdmin');
  }

  /**
   * Grants permission to describe a product as an end-user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProductView.html
   */
  public toDescribeProductView() {
    return this.to('DescribeProductView');
  }

  /**
   * Grants permission to describe a provisioned product
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAccountLevel()
   * - .ifRoleLevel()
   * - .ifUserLevel()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisionedProduct.html
   */
  public toDescribeProvisionedProduct() {
    return this.to('DescribeProvisionedProduct');
  }

  /**
   * Grants permission to describe a provisioned product plan
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAccountLevel()
   * - .ifRoleLevel()
   * - .ifUserLevel()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisionedProductPlan.html
   */
  public toDescribeProvisionedProductPlan() {
    return this.to('DescribeProvisionedProductPlan');
  }

  /**
   * Grants permission to describe a provisioning artifact
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisioningArtifact.html
   */
  public toDescribeProvisioningArtifact() {
    return this.to('DescribeProvisioningArtifact');
  }

  /**
   * Grants permission to describe the parameters that you need to specify to successfully provision a specified provisioning artifact
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeProvisioningParameters.html
   */
  public toDescribeProvisioningParameters() {
    return this.to('DescribeProvisioningParameters');
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
    return this.to('DescribeRecord');
  }

  /**
   * Grants permission to describe a self-service action
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeServiceAction.html
   */
  public toDescribeServiceAction() {
    return this.to('DescribeServiceAction');
  }

  /**
   * Grants permission to get the default parameters if you executed the specified Service Action on the specified Provisioned Product
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAccountLevel()
   * - .ifRoleLevel()
   * - .ifUserLevel()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeServiceActionExecutionParameters.html
   */
  public toDescribeServiceActionExecutionParameters() {
    return this.to('DescribeServiceActionExecutionParameters');
  }

  /**
   * Grants permission to get information about the specified TagOption
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DescribeTagOption.html
   */
  public toDescribeTagOption() {
    return this.to('DescribeTagOption');
  }

  /**
   * Grants permission to disable portfolio sharing through AWS Organizations feature
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisableAWSOrganizationsAccess.html
   */
  public toDisableAWSOrganizationsAccess() {
    return this.to('DisableAWSOrganizationsAccess');
  }

  /**
   * Grants permission to disassociate an attribute group from an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_DisassociateAttributeGroup.html
   */
  public toDisassociateAttributeGroup() {
    return this.to('DisassociateAttributeGroup');
  }

  /**
   * Grants permission to disassociate a budget from a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateBudgetFromResource.html
   */
  public toDisassociateBudgetFromResource() {
    return this.to('DisassociateBudgetFromResource');
  }

  /**
   * Grants permission to disassociate an IAM principal from a portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociatePrincipalFromPortfolio.html
   */
  public toDisassociatePrincipalFromPortfolio() {
    return this.to('DisassociatePrincipalFromPortfolio');
  }

  /**
   * Grants permission to disassociate a product from a portfolio
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateProductFromPortfolio.html
   */
  public toDisassociateProductFromPortfolio() {
    return this.to('DisassociateProductFromPortfolio');
  }

  /**
   * Grants permission to disassociate a resource from an application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifResourceType()
   * - .ifResource()
   *
   * Dependent actions:
   * - resource-groups:DeleteGroup
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_DisassociateResource.html
   */
  public toDisassociateResource() {
    return this.to('DisassociateResource');
  }

  /**
   * Grants permission to disassociate the specified self-service action association from the specified provisioning artifact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateServiceActionFromProvisioningArtifact.html
   */
  public toDisassociateServiceActionFromProvisioningArtifact() {
    return this.to('DisassociateServiceActionFromProvisioningArtifact');
  }

  /**
   * Grants permission to disassociate the specified TagOption from the specified resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_DisassociateTagOptionFromResource.html
   */
  public toDisassociateTagOptionFromResource() {
    return this.to('DisassociateTagOptionFromResource');
  }

  /**
   * Grants permission to enable portfolio sharing feature through AWS Organizations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_EnableAWSOrganizationsAccess.html
   */
  public toEnableAWSOrganizationsAccess() {
    return this.to('EnableAWSOrganizationsAccess');
  }

  /**
   * Grants permission to execute a provisioned product plan
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAccountLevel()
   * - .ifRoleLevel()
   * - .ifUserLevel()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ExecuteProvisionedProductPlan.html
   */
  public toExecuteProvisionedProductPlan() {
    return this.to('ExecuteProvisionedProductPlan');
  }

  /**
   * Grants permission to executes a provisioned product plan
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAccountLevel()
   * - .ifRoleLevel()
   * - .ifUserLevel()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ExecuteProvisionedProductServiceAction.html
   */
  public toExecuteProvisionedProductServiceAction() {
    return this.to('ExecuteProvisionedProductServiceAction');
  }

  /**
   * Grants permission to get the access status of AWS Organization portfolio share feature
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_GetAWSOrganizationsAccessStatus.html
   */
  public toGetAWSOrganizationsAccessStatus() {
    return this.to('GetAWSOrganizationsAccessStatus');
  }

  /**
   * Grants permission to get an application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_GetApplication.html
   */
  public toGetApplication() {
    return this.to('GetApplication');
  }

  /**
   * Grants permission to get information about a resource associated to an application
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifResourceType()
   * - .ifResource()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_GetAssociatedResource.html
   */
  public toGetAssociatedResource() {
    return this.to('GetAssociatedResource');
  }

  /**
   * Grants permission to get an attribute group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_GetAttributeGroup.html
   */
  public toGetAttributeGroup() {
    return this.to('GetAttributeGroup');
  }

  /**
   * Grants permission to read AppRegistry configurations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_GetConfiguration.html
   */
  public toGetConfiguration() {
    return this.to('GetConfiguration');
  }

  /**
   * Grants permission to get the provisioned product output with either provisioned product id or name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_GetProvisionedProductOutputs.html
   */
  public toGetProvisionedProductOutputs() {
    return this.to('GetProvisionedProductOutputs');
  }

  /**
   * Grants permission to import a resource into a provisioned product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ImportAsProvisionedProduct.html
   */
  public toImportAsProvisionedProduct() {
    return this.to('ImportAsProvisionedProduct');
  }

  /**
   * Grants permission to list the portfolios that have been shared with you and you have accepted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListAcceptedPortfolioShares.html
   */
  public toListAcceptedPortfolioShares() {
    return this.to('ListAcceptedPortfolioShares');
  }

  /**
   * Grants permission to list your applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_ListApplications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to list the attribute groups associated with an application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_ListAssociatedAttributeGroups.html
   */
  public toListAssociatedAttributeGroups() {
    return this.to('ListAssociatedAttributeGroups');
  }

  /**
   * Grants permission to list the resources associated with an application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_ListAssociatedResources.html
   */
  public toListAssociatedResources() {
    return this.to('ListAssociatedResources');
  }

  /**
   * Grants permission to list your attribute groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_ListAttributeGroups.html
   */
  public toListAttributeGroups() {
    return this.to('ListAttributeGroups');
  }

  /**
   * Grants permission to list the associated attribute groups for a given application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_ListAttributeGroupsForApplication.html
   */
  public toListAttributeGroupsForApplication() {
    return this.to('ListAttributeGroupsForApplication');
  }

  /**
   * Grants permission to list all the budgets associated to a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListBudgetsForResource.html
   */
  public toListBudgetsForResource() {
    return this.to('ListBudgetsForResource');
  }

  /**
   * Grants permission to list constraints associated with a given portfolio
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListConstraintsForPortfolio.html
   */
  public toListConstraintsForPortfolio() {
    return this.to('ListConstraintsForPortfolio');
  }

  /**
   * Grants permission to list the different ways to launch a given product as an end-user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListLaunchPaths.html
   */
  public toListLaunchPaths() {
    return this.to('ListLaunchPaths');
  }

  /**
   * Grants permission to list the organization nodes that have access to the specified portfolio
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListOrganizationPortfolioAccess.html
   */
  public toListOrganizationPortfolioAccess() {
    return this.to('ListOrganizationPortfolioAccess');
  }

  /**
   * Grants permission to list the AWS accounts you have shared a given portfolio with
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPortfolioAccess.html
   */
  public toListPortfolioAccess() {
    return this.to('ListPortfolioAccess');
  }

  /**
   * Grants permission to list the portfolios in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPortfolios.html
   */
  public toListPortfolios() {
    return this.to('ListPortfolios');
  }

  /**
   * Grants permission to list the portfolios associated with a given product
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPortfoliosForProduct.html
   */
  public toListPortfoliosForProduct() {
    return this.to('ListPortfoliosForProduct');
  }

  /**
   * Grants permission to list the IAM principals associated with a given portfolio
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListPrincipalsForPortfolio.html
   */
  public toListPrincipalsForPortfolio() {
    return this.to('ListPrincipalsForPortfolio');
  }

  /**
   * Grants permission to list the provisioned product plans
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAccountLevel()
   * - .ifRoleLevel()
   * - .ifUserLevel()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListProvisionedProductPlans.html
   */
  public toListProvisionedProductPlans() {
    return this.to('ListProvisionedProductPlans');
  }

  /**
   * Grants permission to list the provisioning artifacts associated with a given product
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListProvisioningArtifacts.html
   */
  public toListProvisioningArtifacts() {
    return this.to('ListProvisioningArtifacts');
  }

  /**
   * Grants permission to list all provisioning artifacts for the specified self-service action
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListProvisioningArtifactsForServiceAction.html
   */
  public toListProvisioningArtifactsForServiceAction() {
    return this.to('ListProvisioningArtifactsForServiceAction');
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
    return this.to('ListRecordHistory');
  }

  /**
   * Grants permission to list the resources associated with the specified TagOption
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListResourcesForTagOption.html
   */
  public toListResourcesForTagOption() {
    return this.to('ListResourcesForTagOption');
  }

  /**
   * Grants permission to list all self-service actions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListServiceActions.html
   */
  public toListServiceActions() {
    return this.to('ListServiceActions');
  }

  /**
   * Grants permission to list all the service actions associated with the specified provisioning artifact in your account
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAccountLevel()
   * - .ifRoleLevel()
   * - .ifUserLevel()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListServiceActionsForProvisioningArtifact.html
   */
  public toListServiceActionsForProvisioningArtifact() {
    return this.to('ListServiceActionsForProvisioningArtifact');
  }

  /**
   * Grants permission to list account, region and status of each stack instances that are associated with a CFN_STACKSET type provisioned product
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAccountLevel()
   * - .ifRoleLevel()
   * - .ifUserLevel()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListStackInstancesForProvisionedProduct.html
   */
  public toListStackInstancesForProvisionedProduct() {
    return this.to('ListStackInstancesForProvisionedProduct');
  }

  /**
   * Grants permission to list the specified TagOptions or all TagOptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ListTagOptions.html
   */
  public toListTagOptions() {
    return this.to('ListTagOptions');
  }

  /**
   * Grants permission to list the tags for a service catalog appregistry resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to provision a product with a specified provisioning artifact and launch parameters
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ProvisionProduct.html
   */
  public toProvisionProduct() {
    return this.to('ProvisionProduct');
  }

  /**
   * Grants permission to assign AppRegistry configurations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_PutConfiguration.html
   */
  public toPutConfiguration() {
    return this.to('PutConfiguration');
  }

  /**
   * Grants permission to reject a portfolio that has been shared with you that you previously accepted
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_RejectPortfolioShare.html
   */
  public toRejectPortfolioShare() {
    return this.to('RejectPortfolioShare');
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
    return this.to('ScanProvisionedProducts');
  }

  /**
   * Grants permission to list the products available to you as an end-user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_SearchProducts.html
   */
  public toSearchProducts() {
    return this.to('SearchProducts');
  }

  /**
   * Grants permission to list all the products in your account or all the products associated with a given portfolio
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_SearchProductsAsAdmin.html
   */
  public toSearchProductsAsAdmin() {
    return this.to('SearchProductsAsAdmin');
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
    return this.to('SearchProvisionedProducts');
  }

  /**
   * Grants permission to sync a resource with its current state in AppRegistry
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - cloudformation:UpdateStack
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_SyncResource.html
   */
  public toSyncResource() {
    return this.to('SyncResource');
  }

  /**
   * Grants permission to tag a service catalog appregistry resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
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
    return this.to('TerminateProvisionedProduct');
  }

  /**
   * Grants permission to remove a tag from a service catalog appregistry resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the attributes of an existing application
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_UpdateApplication.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  /**
   * Grants permission to update the attributes of an existing attribute group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_UpdateAttributeGroup.html
   */
  public toUpdateAttributeGroup() {
    return this.to('UpdateAttributeGroup');
  }

  /**
   * Grants permission to update the metadata fields of an existing constraint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateConstraint.html
   */
  public toUpdateConstraint() {
    return this.to('UpdateConstraint');
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
    return this.to('UpdatePortfolio');
  }

  /**
   * Grants permission to enable or disable resource sharing for an existing portfolio share
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdatePortfolioShare.html
   */
  public toUpdatePortfolioShare() {
    return this.to('UpdatePortfolioShare');
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
    return this.to('UpdateProduct');
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
    return this.to('UpdateProvisionedProduct');
  }

  /**
   * Grants permission to update the properties of an existing provisioned product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProvisionedProductProperties.html
   */
  public toUpdateProvisionedProductProperties() {
    return this.to('UpdateProvisionedProductProperties');
  }

  /**
   * Grants permission to update the metadata fields of an existing provisioning artifact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateProvisioningArtifact.html
   */
  public toUpdateProvisioningArtifact() {
    return this.to('UpdateProvisioningArtifact');
  }

  /**
   * Grants permission to update a self-service action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateServiceAction.html
   */
  public toUpdateServiceAction() {
    return this.to('UpdateServiceAction');
  }

  /**
   * Grants permission to update the specified TagOption
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_UpdateTagOption.html
   */
  public toUpdateTagOption() {
    return this.to('UpdateTagOption');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptPortfolioShare',
      'AssociateAttributeGroup',
      'AssociateBudgetWithResource',
      'AssociatePrincipalWithPortfolio',
      'AssociateProductWithPortfolio',
      'AssociateResource',
      'AssociateServiceActionWithProvisioningArtifact',
      'AssociateTagOptionWithResource',
      'BatchAssociateServiceActionWithProvisioningArtifact',
      'BatchDisassociateServiceActionFromProvisioningArtifact',
      'CopyProduct',
      'CreateApplication',
      'CreateAttributeGroup',
      'CreateConstraint',
      'CreatePortfolio',
      'CreateProduct',
      'CreateProvisionedProductPlan',
      'CreateProvisioningArtifact',
      'CreateServiceAction',
      'CreateTagOption',
      'DeleteApplication',
      'DeleteAttributeGroup',
      'DeleteConstraint',
      'DeletePortfolio',
      'DeleteProduct',
      'DeleteProvisionedProductPlan',
      'DeleteProvisioningArtifact',
      'DeleteServiceAction',
      'DeleteTagOption',
      'DisableAWSOrganizationsAccess',
      'DisassociateAttributeGroup',
      'DisassociateBudgetFromResource',
      'DisassociatePrincipalFromPortfolio',
      'DisassociateProductFromPortfolio',
      'DisassociateResource',
      'DisassociateServiceActionFromProvisioningArtifact',
      'DisassociateTagOptionFromResource',
      'EnableAWSOrganizationsAccess',
      'ExecuteProvisionedProductPlan',
      'ExecuteProvisionedProductServiceAction',
      'ImportAsProvisionedProduct',
      'ProvisionProduct',
      'PutConfiguration',
      'RejectPortfolioShare',
      'SyncResource',
      'TerminateProvisionedProduct',
      'UpdateApplication',
      'UpdateAttributeGroup',
      'UpdateConstraint',
      'UpdatePortfolio',
      'UpdateProduct',
      'UpdateProvisionedProduct',
      'UpdateProvisionedProductProperties',
      'UpdateProvisioningArtifact',
      'UpdateServiceAction',
      'UpdateTagOption'
    ],
    'Permissions management': [
      'CreatePortfolioShare',
      'DeletePortfolioShare',
      'UpdatePortfolioShare'
    ],
    Read: [
      'DescribeConstraint',
      'DescribeCopyProductStatus',
      'DescribePortfolio',
      'DescribePortfolioShareStatus',
      'DescribeProduct',
      'DescribeProductAsAdmin',
      'DescribeProductView',
      'DescribeProvisionedProduct',
      'DescribeProvisionedProductPlan',
      'DescribeProvisioningArtifact',
      'DescribeProvisioningParameters',
      'DescribeRecord',
      'DescribeServiceAction',
      'DescribeServiceActionExecutionParameters',
      'DescribeTagOption',
      'GetAWSOrganizationsAccessStatus',
      'GetApplication',
      'GetAssociatedResource',
      'GetAttributeGroup',
      'GetConfiguration',
      'GetProvisionedProductOutputs',
      'ListTagsForResource'
    ],
    List: [
      'DescribePortfolioShares',
      'ListAcceptedPortfolioShares',
      'ListApplications',
      'ListAssociatedAttributeGroups',
      'ListAssociatedResources',
      'ListAttributeGroups',
      'ListAttributeGroupsForApplication',
      'ListBudgetsForResource',
      'ListConstraintsForPortfolio',
      'ListLaunchPaths',
      'ListOrganizationPortfolioAccess',
      'ListPortfolioAccess',
      'ListPortfolios',
      'ListPortfoliosForProduct',
      'ListPrincipalsForPortfolio',
      'ListProvisionedProductPlans',
      'ListProvisioningArtifacts',
      'ListProvisioningArtifactsForServiceAction',
      'ListRecordHistory',
      'ListResourcesForTagOption',
      'ListServiceActions',
      'ListServiceActionsForProvisioningArtifact',
      'ListStackInstancesForProvisionedProduct',
      'ListTagOptions',
      'ScanProvisionedProducts',
      'SearchProducts',
      'SearchProductsAsAdmin',
      'SearchProvisionedProducts'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Application to the statement
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_CreateApplication.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Servicecatalog.defaultPartition }:servicecatalog:${ region || '*' }:${ account || '*' }:/applications/${ applicationId }`);
  }

  /**
   * Adds a resource of type AttributeGroup to the statement
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_app-registry_CreateAttributeGroup.html
   *
   * @param attributeGroupId - Identifier for the attributeGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAttributeGroup(attributeGroupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Servicecatalog.defaultPartition }:servicecatalog:${ region || '*' }:${ account || '*' }:/attribute-groups/${ attributeGroupId }`);
  }

  /**
   * Adds a resource of type Portfolio to the statement
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_PortfolioDetail.html
   *
   * @param portfolioId - Identifier for the portfolioId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPortfolio(portfolioId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Servicecatalog.defaultPartition }:catalog:${ region || '*' }:${ account || '*' }:portfolio/${ portfolioId }`);
  }

  /**
   * Adds a resource of type Product to the statement
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/dg/API_ProductViewDetail.html
   *
   * @param productId - Identifier for the productId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProduct(productId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Servicecatalog.defaultPartition }:catalog:${ region || '*' }:${ account || '*' }:product/${ productId }`);
  }

  /**
   * Filters access by controlling what value can be specified as the Resource parameter in an AppRegistry associate resource API
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html
   *
   * Applies to actions:
   * - .toAssociateResource()
   * - .toDisassociateResource()
   * - .toGetAssociatedResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResource(value: string | string[], operator?: Operator | string) {
    return this.if(`Resource`, value, operator || 'StringLike');
  }

  /**
   * Filters access by controlling what value can be specified as the ResourceType parameter in an AppRegistry associate resource API
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html
   *
   * Applies to actions:
   * - .toAssociateResource()
   * - .toDisassociateResource()
   * - .toGetAssociatedResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceType(value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by user to see and perform actions on resources created by anyone in the account
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html
   *
   * Applies to actions:
   * - .toCreateProvisionedProductPlan()
   * - .toDeleteProvisionedProductPlan()
   * - .toDescribeProvisionedProduct()
   * - .toDescribeProvisionedProductPlan()
   * - .toDescribeRecord()
   * - .toDescribeServiceActionExecutionParameters()
   * - .toExecuteProvisionedProductPlan()
   * - .toExecuteProvisionedProductServiceAction()
   * - .toListProvisionedProductPlans()
   * - .toListRecordHistory()
   * - .toListServiceActionsForProvisioningArtifact()
   * - .toListStackInstancesForProvisionedProduct()
   * - .toScanProvisionedProducts()
   * - .toSearchProvisionedProducts()
   * - .toTerminateProvisionedProduct()
   * - .toUpdateProvisionedProduct()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAccountLevel(value: string | string[], operator?: Operator | string) {
    return this.if(`accountLevel`, value, operator || 'StringLike');
  }

  /**
   * Filters access by user to see and perform actions on resources created either by them or by anyone federating into the same role as them
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html
   *
   * Applies to actions:
   * - .toCreateProvisionedProductPlan()
   * - .toDeleteProvisionedProductPlan()
   * - .toDescribeProvisionedProduct()
   * - .toDescribeProvisionedProductPlan()
   * - .toDescribeRecord()
   * - .toDescribeServiceActionExecutionParameters()
   * - .toExecuteProvisionedProductPlan()
   * - .toExecuteProvisionedProductServiceAction()
   * - .toListProvisionedProductPlans()
   * - .toListRecordHistory()
   * - .toListServiceActionsForProvisioningArtifact()
   * - .toListStackInstancesForProvisionedProduct()
   * - .toScanProvisionedProducts()
   * - .toSearchProvisionedProducts()
   * - .toTerminateProvisionedProduct()
   * - .toUpdateProvisionedProduct()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRoleLevel(value: string | string[], operator?: Operator | string) {
    return this.if(`roleLevel`, value, operator || 'StringLike');
  }

  /**
   * Filters access by user to see and perform actions on only resources that they created
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/adminguide/permissions-examples.html
   *
   * Applies to actions:
   * - .toCreateProvisionedProductPlan()
   * - .toDeleteProvisionedProductPlan()
   * - .toDescribeProvisionedProduct()
   * - .toDescribeProvisionedProductPlan()
   * - .toDescribeRecord()
   * - .toDescribeServiceActionExecutionParameters()
   * - .toExecuteProvisionedProductPlan()
   * - .toExecuteProvisionedProductServiceAction()
   * - .toListProvisionedProductPlans()
   * - .toListRecordHistory()
   * - .toListServiceActionsForProvisioningArtifact()
   * - .toListStackInstancesForProvisionedProduct()
   * - .toScanProvisionedProducts()
   * - .toSearchProvisionedProducts()
   * - .toTerminateProvisionedProduct()
   * - .toUpdateProvisionedProduct()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUserLevel(value: string | string[], operator?: Operator | string) {
    return this.if(`userLevel`, value, operator || 'StringLike');
  }
}
