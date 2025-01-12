import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [imagebuilder](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2imagebuilder.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Imagebuilder extends PolicyStatement {
  public servicePrefix = 'imagebuilder';

  /**
   * Statement provider for service [imagebuilder](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2imagebuilder.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel an image creation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CancelImageCreation.html
   */
  public toCancelImageCreation() {
    return this.to('CancelImageCreation');
  }

  /**
   * Grants permission to cancel a lifecycle execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CancelLifecycleExecution.html
   */
  public toCancelLifecycleExecution() {
    return this.to('CancelLifecycleExecution');
  }

  /**
   * Grants permission to create a new component
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - imagebuilder:TagResource
   * - kms:Encrypt
   * - kms:GenerateDataKey
   * - kms:GenerateDataKeyWithoutPlaintext
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html
   */
  public toCreateComponent() {
    return this.to('CreateComponent');
  }

  /**
   * Grants permission to create a new Container Recipe
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ecr:DescribeImages
   * - ecr:DescribeRepositories
   * - iam:CreateServiceLinkedRole
   * - imagebuilder:GetComponent
   * - imagebuilder:GetImage
   * - imagebuilder:TagResource
   * - kms:Encrypt
   * - kms:GenerateDataKey
   * - kms:GenerateDataKeyWithoutPlaintext
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateContainerRecipe.html
   */
  public toCreateContainerRecipe() {
    return this.to('CreateContainerRecipe');
  }

  /**
   * Grants permission to create a new distribution configuration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - imagebuilder:TagResource
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateDistributionConfiguration.html
   */
  public toCreateDistributionConfiguration() {
    return this.to('CreateDistributionConfiguration');
  }

  /**
   * Grants permission to create a new image
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:PassRole
   * - imagebuilder:GetContainerRecipe
   * - imagebuilder:GetDistributionConfiguration
   * - imagebuilder:GetImageRecipe
   * - imagebuilder:GetInfrastructureConfiguration
   * - imagebuilder:GetWorkflow
   * - imagebuilder:TagResource
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImage.html
   */
  public toCreateImage() {
    return this.to('CreateImage');
  }

  /**
   * Grants permission to create a new image pipeline
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:PassRole
   * - imagebuilder:GetContainerRecipe
   * - imagebuilder:GetDistributionConfiguration
   * - imagebuilder:GetImageRecipe
   * - imagebuilder:GetInfrastructureConfiguration
   * - imagebuilder:GetWorkflow
   * - imagebuilder:TagResource
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImagePipeline.html
   */
  public toCreateImagePipeline() {
    return this.to('CreateImagePipeline');
  }

  /**
   * Grants permission to create a new Image Recipe
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DescribeImages
   * - iam:CreateServiceLinkedRole
   * - imagebuilder:GetComponent
   * - imagebuilder:GetImage
   * - imagebuilder:TagResource
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImageRecipe.html
   */
  public toCreateImageRecipe() {
    return this.to('CreateImageRecipe');
  }

  /**
   * Grants permission to create a new infrastructure configuration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:PassRole
   * - imagebuilder:TagResource
   * - sns:Publish
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateInfrastructureConfiguration.html
   */
  public toCreateInfrastructureConfiguration() {
    return this.to('CreateInfrastructureConfiguration');
  }

  /**
   * Grants permission to create a new lifecycle policy
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   * - imagebuilder:TagResource
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateLifecyclePolicy.html
   */
  public toCreateLifecyclePolicy() {
    return this.to('CreateLifecyclePolicy');
  }

  /**
   * Grants permission to create a new workflow
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - imagebuilder:TagResource
   * - kms:Encrypt
   * - kms:GenerateDataKey
   * - kms:GenerateDataKeyWithoutPlaintext
   * - s3:GetObject
   * - s3:ListBucket
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateWorkflow.html
   */
  public toCreateWorkflow() {
    return this.to('CreateWorkflow');
  }

  /**
   * Grants permission to delete a component
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteComponent.html
   */
  public toDeleteComponent() {
    return this.to('DeleteComponent');
  }

  /**
   * Grants permission to delete a container recipe
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteContainerRecipe.html
   */
  public toDeleteContainerRecipe() {
    return this.to('DeleteContainerRecipe');
  }

  /**
   * Grants permission to delete a distribution configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteDistributionConfiguration.html
   */
  public toDeleteDistributionConfiguration() {
    return this.to('DeleteDistributionConfiguration');
  }

  /**
   * Grants permission to delete an image
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteImage.html
   */
  public toDeleteImage() {
    return this.to('DeleteImage');
  }

  /**
   * Grants permission to delete an image pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteImagePipeline.html
   */
  public toDeleteImagePipeline() {
    return this.to('DeleteImagePipeline');
  }

  /**
   * Grants permission to delete an image recipe
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteImageRecipe.html
   */
  public toDeleteImageRecipe() {
    return this.to('DeleteImageRecipe');
  }

  /**
   * Grants permission to delete an infrastructure configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteInfrastructureConfiguration.html
   */
  public toDeleteInfrastructureConfiguration() {
    return this.to('DeleteInfrastructureConfiguration');
  }

  /**
   * Grants permission to delete a lifecycle policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteLifecyclePolicy.html
   */
  public toDeleteLifecyclePolicy() {
    return this.to('DeleteLifecyclePolicy');
  }

  /**
   * Grants permission to delete a workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteWorkflow.html
   */
  public toDeleteWorkflow() {
    return this.to('DeleteWorkflow');
  }

  /**
   * Grants permission to view details about a component
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetComponent.html
   */
  public toGetComponent() {
    return this.to('GetComponent');
  }

  /**
   * Grants permission to view the resource policy associated with a component
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetComponentPolicy.html
   */
  public toGetComponentPolicy() {
    return this.to('GetComponentPolicy');
  }

  /**
   * Grants permission to view details about a container recipe
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetContainerRecipe.html
   */
  public toGetContainerRecipe() {
    return this.to('GetContainerRecipe');
  }

  /**
   * Grants permission to view the resource policy associated with a container recipe
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetContainerRecipePolicy.html
   */
  public toGetContainerRecipePolicy() {
    return this.to('GetContainerRecipePolicy');
  }

  /**
   * Grants permission to view details about a distribution configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetDistributionConfiguration.html
   */
  public toGetDistributionConfiguration() {
    return this.to('GetDistributionConfiguration');
  }

  /**
   * Grants permission to view details about an image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImage.html
   */
  public toGetImage() {
    return this.to('GetImage');
  }

  /**
   * Grants permission to view details about an image pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImagePipeline.html
   */
  public toGetImagePipeline() {
    return this.to('GetImagePipeline');
  }

  /**
   * Grants permission to view the resource policy associated with an image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImagePolicy.html
   */
  public toGetImagePolicy() {
    return this.to('GetImagePolicy');
  }

  /**
   * Grants permission to view details about an image recipe
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImageRecipe.html
   */
  public toGetImageRecipe() {
    return this.to('GetImageRecipe');
  }

  /**
   * Grants permission to view the resource policy associated with an image recipe
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImageRecipePolicy.html
   */
  public toGetImageRecipePolicy() {
    return this.to('GetImageRecipePolicy');
  }

  /**
   * Grants permission to view details about an infrastructure configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetInfrastructureConfiguration.html
   */
  public toGetInfrastructureConfiguration() {
    return this.to('GetInfrastructureConfiguration');
  }

  /**
   * Grants permission to view details about a lifecycle execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetLifecycleExecution.html
   */
  public toGetLifecycleExecution() {
    return this.to('GetLifecycleExecution');
  }

  /**
   * Grants permission to view details about a lifecycle policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetLifecyclePolicy.html
   */
  public toGetLifecyclePolicy() {
    return this.to('GetLifecyclePolicy');
  }

  /**
   * Grants permission to retrieve Marketplace provided resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetMarketplaceResource.html
   */
  public toGetMarketplaceResource() {
    return this.to('GetMarketplaceResource');
  }

  /**
   * Grants permission to view details about a workflow
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetWorkflow.html
   */
  public toGetWorkflow() {
    return this.to('GetWorkflow');
  }

  /**
   * Grants permission to view details about a workflow execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetWorkflowExecution.html
   */
  public toGetWorkflowExecution() {
    return this.to('GetWorkflowExecution');
  }

  /**
   * Grants permission to view details about a workflow step execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetWorkflowStepExecution.html
   */
  public toGetWorkflowStepExecution() {
    return this.to('GetWorkflowStepExecution');
  }

  /**
   * Grants permission to import a new component
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - imagebuilder:TagResource
   * - kms:Encrypt
   * - kms:GenerateDataKey
   * - kms:GenerateDataKeyWithoutPlaintext
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImportComponent.html
   */
  public toImportComponent() {
    return this.to('ImportComponent');
  }

  /**
   * Grants permission to import a disk image
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:PassRole
   * - imagebuilder:GetInfrastructureConfiguration
   * - imagebuilder:GetWorkflow
   * - imagebuilder:TagResource
   * - s3:GetObject
   * - s3:ListBucket
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImportDiskImage.html
   */
  public toImportDiskImage() {
    return this.to('ImportDiskImage');
  }

  /**
   * Grants permission to import an image
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DescribeImages
   * - ec2:DescribeImportImageTasks
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImportVmImage.html
   */
  public toImportVmImage() {
    return this.to('ImportVmImage');
  }

  /**
   * Grants permission to list the component build versions in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListComponentBuildVersions.html
   */
  public toListComponentBuildVersions() {
    return this.to('ListComponentBuildVersions');
  }

  /**
   * Grants permission to list the component versions owned by or shared with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListComponents.html
   */
  public toListComponents() {
    return this.to('ListComponents');
  }

  /**
   * Grants permission to list the container recipes owned by or shared with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListContainerRecipes.html
   */
  public toListContainerRecipes() {
    return this.to('ListContainerRecipes');
  }

  /**
   * Grants permission to list the distribution configurations in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListDistributionConfigurations.html
   */
  public toListDistributionConfigurations() {
    return this.to('ListDistributionConfigurations');
  }

  /**
   * Grants permission to list the image build versions in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageBuildVersions.html
   */
  public toListImageBuildVersions() {
    return this.to('ListImageBuildVersions');
  }

  /**
   * Grants permission to return a list of packages installed on the specified image
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImagePackages.html
   */
  public toListImagePackages() {
    return this.to('ListImagePackages');
  }

  /**
   * Grants permission to return a list of images created by the specified pipeline
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImagePipelineImages.html
   */
  public toListImagePipelineImages() {
    return this.to('ListImagePipelineImages');
  }

  /**
   * Grants permission to list the image pipelines in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImagePipelines.html
   */
  public toListImagePipelines() {
    return this.to('ListImagePipelines');
  }

  /**
   * Grants permission to list the image recipes owned by or shared with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageRecipes.html
   */
  public toListImageRecipes() {
    return this.to('ListImageRecipes');
  }

  /**
   * Grants permission to list aggregations on the image scan findings in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageScanFindingAggregations.html
   */
  public toListImageScanFindingAggregations() {
    return this.to('ListImageScanFindingAggregations');
  }

  /**
   * Grants permission to list the image scan findings for the images in your account
   *
   * Access Level: List
   *
   * Dependent actions:
   * - inspector2:ListFindings
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageScanFindings.html
   */
  public toListImageScanFindings() {
    return this.to('ListImageScanFindings');
  }

  /**
   * Grants permission to list the image versions owned by or shared with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImages.html
   */
  public toListImages() {
    return this.to('ListImages');
  }

  /**
   * Grants permission to list the infrastructure configurations in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListInfrastructureConfigurations.html
   */
  public toListInfrastructureConfigurations() {
    return this.to('ListInfrastructureConfigurations');
  }

  /**
   * Grants permission to list resources for the specified lifecycle execution
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListLifecycleExecutionResources.html
   */
  public toListLifecycleExecutionResources() {
    return this.to('ListLifecycleExecutionResources');
  }

  /**
   * Grants permission to list lifecycle executions for the specified resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListLifecycleExecutions.html
   */
  public toListLifecycleExecutions() {
    return this.to('ListLifecycleExecutions');
  }

  /**
   * Grants permission to list the lifecycle policies in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListLifecyclePolicies.html
   */
  public toListLifecyclePolicies() {
    return this.to('ListLifecyclePolicies');
  }

  /**
   * Grants permission to list tags for an Image Builder resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list waiting workflow steps for the caller account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListWaitingWorkflowSteps.html
   */
  public toListWaitingWorkflowSteps() {
    return this.to('ListWaitingWorkflowSteps');
  }

  /**
   * Grants permission to list the workflow build versions in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListWorkflowBuildVersions.html
   */
  public toListWorkflowBuildVersions() {
    return this.to('ListWorkflowBuildVersions');
  }

  /**
   * Grants permission to list workflow executions for the specified image
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListWorkflowExecutions.html
   */
  public toListWorkflowExecutions() {
    return this.to('ListWorkflowExecutions');
  }

  /**
   * Grants permission to list workflow step executions for the specified workflow
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListWorkflowStepExecutions.html
   */
  public toListWorkflowStepExecutions() {
    return this.to('ListWorkflowStepExecutions');
  }

  /**
   * Grants permission to list the workflow versions owned by or shared with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListWorkflows.html
   */
  public toListWorkflows() {
    return this.to('ListWorkflows');
  }

  /**
   * Grants permission to set the resource policy associated with a component
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutComponentPolicy.html
   */
  public toPutComponentPolicy() {
    return this.to('PutComponentPolicy');
  }

  /**
   * Grants permission to set the resource policy associated with a container recipe
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutContainerRecipePolicy.html
   */
  public toPutContainerRecipePolicy() {
    return this.to('PutContainerRecipePolicy');
  }

  /**
   * Grants permission to set the resource policy associated with an image
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutImagePolicy.html
   */
  public toPutImagePolicy() {
    return this.to('PutImagePolicy');
  }

  /**
   * Grants permission to set the resource policy associated with an image recipe
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutImageRecipePolicy.html
   */
  public toPutImageRecipePolicy() {
    return this.to('PutImageRecipePolicy');
  }

  /**
   * Grants permission to send an action to a workflow step
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_SendWorkflowStepAction.html
   */
  public toSendWorkflowStepAction() {
    return this.to('SendWorkflowStepAction');
  }

  /**
   * Grants permission to create a new image from a pipeline
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - imagebuilder:GetImagePipeline
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_StartImagePipelineExecution.html
   */
  public toStartImagePipelineExecution() {
    return this.to('StartImagePipelineExecution');
  }

  /**
   * Grants permission to start a state update for the specified resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_StartResourceStateUpdate.html
   */
  public toStartResourceStateUpdate() {
    return this.to('StartResourceStateUpdate');
  }

  /**
   * Grants permission to tag an Image Builder resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag an Image Builder resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an existing distribution configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateDistributionConfiguration.html
   */
  public toUpdateDistributionConfiguration() {
    return this.to('UpdateDistributionConfiguration');
  }

  /**
   * Grants permission to update an existing image pipeline
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:PassRole
   * - imagebuilder:GetContainerRecipe
   * - imagebuilder:GetDistributionConfiguration
   * - imagebuilder:GetImageRecipe
   * - imagebuilder:GetInfrastructureConfiguration
   * - imagebuilder:GetWorkflow
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateImagePipeline.html
   */
  public toUpdateImagePipeline() {
    return this.to('UpdateImagePipeline');
  }

  /**
   * Grants permission to update an existing infrastructure configuration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   * - sns:Publish
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateInfrastructureConfiguration.html
   */
  public toUpdateInfrastructureConfiguration() {
    return this.to('UpdateInfrastructureConfiguration');
  }

  /**
   * Grants permission to update an existing lifecycle policy
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateLifecyclePolicy.html
   */
  public toUpdateLifecyclePolicy() {
    return this.to('UpdateLifecyclePolicy');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelImageCreation',
      'CancelLifecycleExecution',
      'CreateComponent',
      'CreateContainerRecipe',
      'CreateDistributionConfiguration',
      'CreateImage',
      'CreateImagePipeline',
      'CreateImageRecipe',
      'CreateInfrastructureConfiguration',
      'CreateLifecyclePolicy',
      'CreateWorkflow',
      'DeleteComponent',
      'DeleteContainerRecipe',
      'DeleteDistributionConfiguration',
      'DeleteImage',
      'DeleteImagePipeline',
      'DeleteImageRecipe',
      'DeleteInfrastructureConfiguration',
      'DeleteLifecyclePolicy',
      'DeleteWorkflow',
      'ImportComponent',
      'ImportDiskImage',
      'ImportVmImage',
      'SendWorkflowStepAction',
      'StartImagePipelineExecution',
      'StartResourceStateUpdate',
      'UpdateDistributionConfiguration',
      'UpdateImagePipeline',
      'UpdateInfrastructureConfiguration',
      'UpdateLifecyclePolicy'
    ],
    Read: [
      'GetComponent',
      'GetComponentPolicy',
      'GetContainerRecipe',
      'GetContainerRecipePolicy',
      'GetDistributionConfiguration',
      'GetImage',
      'GetImagePipeline',
      'GetImagePolicy',
      'GetImageRecipe',
      'GetImageRecipePolicy',
      'GetInfrastructureConfiguration',
      'GetLifecycleExecution',
      'GetLifecyclePolicy',
      'GetMarketplaceResource',
      'GetWorkflow',
      'GetWorkflowExecution',
      'GetWorkflowStepExecution',
      'ListTagsForResource'
    ],
    List: [
      'ListComponentBuildVersions',
      'ListComponents',
      'ListContainerRecipes',
      'ListDistributionConfigurations',
      'ListImageBuildVersions',
      'ListImagePackages',
      'ListImagePipelineImages',
      'ListImagePipelines',
      'ListImageRecipes',
      'ListImageScanFindingAggregations',
      'ListImageScanFindings',
      'ListImages',
      'ListInfrastructureConfigurations',
      'ListLifecycleExecutionResources',
      'ListLifecycleExecutions',
      'ListLifecyclePolicies',
      'ListWaitingWorkflowSteps',
      'ListWorkflowBuildVersions',
      'ListWorkflowExecutions',
      'ListWorkflowStepExecutions',
      'ListWorkflows'
    ],
    'Permissions management': [
      'PutComponentPolicy',
      'PutContainerRecipePolicy',
      'PutImagePolicy',
      'PutImageRecipePolicy'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type component to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_Component.html
   *
   * @param componentName - Identifier for the componentName.
   * @param componentVersion - Identifier for the componentVersion.
   * @param componentBuildVersion - Identifier for the componentBuildVersion.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onComponent(componentName: string, componentVersion: string, componentBuildVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:imagebuilder:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:component/${ componentName }/${ componentVersion }/${ componentBuildVersion }`);
  }

  /**
   * Adds a resource of type componentVersion to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ComponentVersion.html
   *
   * @param componentName - Identifier for the componentName.
   * @param componentVersion - Identifier for the componentVersion.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onComponentVersion(componentName: string, componentVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:imagebuilder:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:component/${ componentName }/${ componentVersion }`);
  }

  /**
   * Adds a resource of type distributionConfiguration to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DistributionConfiguration.html
   *
   * @param distributionConfigurationName - Identifier for the distributionConfigurationName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDistributionConfiguration(distributionConfigurationName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:imagebuilder:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:distribution-configuration/${ distributionConfigurationName }`);
  }

  /**
   * Adds a resource of type image to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_Image.html
   *
   * @param imageName - Identifier for the imageName.
   * @param imageVersion - Identifier for the imageVersion.
   * @param imageBuildVersion - Identifier for the imageBuildVersion.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onImage(imageName: string, imageVersion: string, imageBuildVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:imagebuilder:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:image/${ imageName }/${ imageVersion }/${ imageBuildVersion }`);
  }

  /**
   * Adds a resource of type imageVersion to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImageVersion.html
   *
   * @param imageName - Identifier for the imageName.
   * @param imageVersion - Identifier for the imageVersion.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onImageVersion(imageName: string, imageVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:imagebuilder:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:image/${ imageName }/${ imageVersion }`);
  }

  /**
   * Adds a resource of type imageRecipe to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImageRecipe.html
   *
   * @param imageRecipeName - Identifier for the imageRecipeName.
   * @param imageRecipeVersion - Identifier for the imageRecipeVersion.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onImageRecipe(imageRecipeName: string, imageRecipeVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:imagebuilder:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:image-recipe/${ imageRecipeName }/${ imageRecipeVersion }`);
  }

  /**
   * Adds a resource of type containerRecipe to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ContainerRecipe.html
   *
   * @param containerRecipeName - Identifier for the containerRecipeName.
   * @param containerRecipeVersion - Identifier for the containerRecipeVersion.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onContainerRecipe(containerRecipeName: string, containerRecipeVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:imagebuilder:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:container-recipe/${ containerRecipeName }/${ containerRecipeVersion }`);
  }

  /**
   * Adds a resource of type imagePipeline to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImagePipeline.html
   *
   * @param imagePipelineName - Identifier for the imagePipelineName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onImagePipeline(imagePipelineName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:imagebuilder:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:image-pipeline/${ imagePipelineName }`);
  }

  /**
   * Adds a resource of type infrastructureConfiguration to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_InfrastructureConfiguration.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInfrastructureConfiguration(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:imagebuilder:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:infrastructure-configuration/${ resourceId }`);
  }

  /**
   * Adds a resource of type kmsKey to the statement
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys
   *
   * @param keyId - Identifier for the keyId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onKmsKey(keyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:kms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:key/${ keyId }`);
  }

  /**
   * Adds a resource of type lifecycleExecution to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_LifecycleExecution.html
   *
   * @param lifecycleExecutionId - Identifier for the lifecycleExecutionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onLifecycleExecution(lifecycleExecutionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:imagebuilder:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:lifecycle-execution/${ lifecycleExecutionId }`);
  }

  /**
   * Adds a resource of type lifecyclePolicy to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_LifecyclePolicy.html
   *
   * @param lifecyclePolicyName - Identifier for the lifecyclePolicyName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLifecyclePolicy(lifecyclePolicyName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:imagebuilder:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:lifecycle-policy/${ lifecyclePolicyName }`);
  }

  /**
   * Adds a resource of type workflow to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_Workflow.html
   *
   * @param workflowType - Identifier for the workflowType.
   * @param workflowName - Identifier for the workflowName.
   * @param workflowVersion - Identifier for the workflowVersion.
   * @param workflowBuildVersion - Identifier for the workflowBuildVersion.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkflow(workflowType: string, workflowName: string, workflowVersion: string, workflowBuildVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:imagebuilder:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workflow/${ workflowType }/${ workflowName }/${ workflowVersion }/${ workflowBuildVersion }`);
  }

  /**
   * Adds a resource of type workflowVersion to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_WorkflowVersion.html
   *
   * @param workflowType - Identifier for the workflowType.
   * @param workflowName - Identifier for the workflowName.
   * @param workflowVersion - Identifier for the workflowVersion.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkflowVersion(workflowType: string, workflowName: string, workflowVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:imagebuilder:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workflow/${ workflowType }/${ workflowName }/${ workflowVersion }`);
  }

  /**
   * Adds a resource of type workflowExecution to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_WorkflowExecutionMetadata.html
   *
   * @param workflowExecutionId - Identifier for the workflowExecutionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onWorkflowExecution(workflowExecutionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:imagebuilder:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workflow-execution/${ workflowExecutionId }`);
  }

  /**
   * Adds a resource of type workflowStepExecution to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_WorkflowStepMetadata.html
   *
   * @param workflowStepExecutionId - Identifier for the workflowStepExecutionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onWorkflowStepExecution(workflowStepExecutionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:imagebuilder:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workflow-step-execution/${ workflowStepExecutionId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateComponent()
   * - .toCreateContainerRecipe()
   * - .toCreateDistributionConfiguration()
   * - .toCreateImage()
   * - .toCreateImagePipeline()
   * - .toCreateImageRecipe()
   * - .toCreateInfrastructureConfiguration()
   * - .toCreateLifecyclePolicy()
   * - .toCreateWorkflow()
   * - .toImportComponent()
   * - .toImportDiskImage()
   * - .toImportVmImage()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toGetImage()
   * - .toListImagePackages()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateInfrastructureConfiguration()
   *
   * Applies to resource types:
   * - component
   * - componentVersion
   * - distributionConfiguration
   * - image
   * - imageVersion
   * - imageRecipe
   * - containerRecipe
   * - imagePipeline
   * - infrastructureConfiguration
   * - lifecyclePolicy
   * - workflow
   * - workflowVersion
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateComponent()
   * - .toCreateContainerRecipe()
   * - .toCreateDistributionConfiguration()
   * - .toCreateImage()
   * - .toCreateImagePipeline()
   * - .toCreateImageRecipe()
   * - .toCreateInfrastructureConfiguration()
   * - .toCreateLifecyclePolicy()
   * - .toCreateWorkflow()
   * - .toImportComponent()
   * - .toImportDiskImage()
   * - .toImportVmImage()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag key-value pairs attached to the resource created by Image Builder
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html#image-builder-security-createdresourcetag
   *
   * Applies to actions:
   * - .toCreateInfrastructureConfiguration()
   * - .toUpdateInfrastructureConfiguration()
   *
   * @param key The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCreatedResourceTag(key: string, value: string | string[], operator?: Operator | string) {
    return this.if(`CreatedResourceTag/${ key }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html#image-builder-security-createdresourcetagkeys
   *
   * Applies to actions:
   * - .toCreateInfrastructureConfiguration()
   * - .toUpdateInfrastructureConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCreatedResourceTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`CreatedResourceTagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the EC2 Instance Metadata HTTP Token Requirement specified in the request
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html#image-builder-security-ec2metadatahttptokens
   *
   * Applies to actions:
   * - .toCreateInfrastructureConfiguration()
   * - .toUpdateInfrastructureConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEc2MetadataHttpTokens(value: string | string[], operator?: Operator | string) {
    return this.if(`Ec2MetadataHttpTokens`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Lifecycle Policy Resource Type specified in the request
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html#image-builder-security-ec2metadatahttptokens
   *
   * Applies to actions:
   * - .toCreateLifecyclePolicy()
   * - .toUpdateLifecyclePolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLifecyclePolicyResourceType(value: string | string[], operator?: Operator | string) {
    return this.if(`LifecyclePolicyResourceType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the SNS Topic Arn in the request to which terminal state notifications will be published
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/userguide/security_iam_service-with-iam.html#image-builder-security-statustopicarn
   *
   * Applies to actions:
   * - .toCreateInfrastructureConfiguration()
   * - .toUpdateInfrastructureConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifStatusTopicArn(value: string | string[], operator?: Operator | string) {
    return this.if(`StatusTopicArn`, value, operator ?? 'ArnLike');
  }
}
