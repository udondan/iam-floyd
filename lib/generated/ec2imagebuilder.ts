import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Cancel an image creation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CancelImageCreation.html
   */
  public toCancelImageCreation() {
    return this.to('CancelImageCreation');
  }

  /**
   * Create a new component
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html
   */
  public toCreateComponent() {
    return this.to('CreateComponent');
  }

  /**
   * Create a new Container Recipe
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - imagebuilder:GetComponent
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateContainerRecipe.html
   */
  public toCreateContainerRecipe() {
    return this.to('CreateContainerRecipe');
  }

  /**
   * Create a new distribution configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateDistributionConfiguration.html
   */
  public toCreateDistributionConfiguration() {
    return this.to('CreateDistributionConfiguration');
  }

  /**
   * Create a new image
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - imagebuilder:GetImageRecipe
   * - imagebuilder:GetInfrastructureConfiguration
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImage.html
   */
  public toCreateImage() {
    return this.to('CreateImage');
  }

  /**
   * Create a new image pipeline
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - imagebuilder:GetImageRecipe
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImagePipeline.html
   */
  public toCreateImagePipeline() {
    return this.to('CreateImagePipeline');
  }

  /**
   * Create a new Image Recipe
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - imagebuilder:GetComponent
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateImageRecipe.html
   */
  public toCreateImageRecipe() {
    return this.to('CreateImageRecipe');
  }

  /**
   * Create a new infrastructure configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifCreatedResourceTagKeys()
   * - .ifCreatedResourceTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateInfrastructureConfiguration.html
   */
  public toCreateInfrastructureConfiguration() {
    return this.to('CreateInfrastructureConfiguration');
  }

  /**
   * Delete a component
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
   * Delete a distribution configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteDistributionConfiguration.html
   */
  public toDeleteDistributionConfiguration() {
    return this.to('DeleteDistributionConfiguration');
  }

  /**
   * Delete an image
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteImage.html
   */
  public toDeleteImage() {
    return this.to('DeleteImage');
  }

  /**
   * Delete an image pipeline
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
   * Delete an infrastructure configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DeleteInfrastructureConfiguration.html
   */
  public toDeleteInfrastructureConfiguration() {
    return this.to('DeleteInfrastructureConfiguration');
  }

  /**
   * View details about a component
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetComponent.html
   */
  public toGetComponent() {
    return this.to('GetComponent');
  }

  /**
   * View the resource policy associated with a component
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetComponentPolicy.html
   */
  public toGetComponentPolicy() {
    return this.to('GetComponentPolicy');
  }

  /**
   * View details about a container recipe
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetContainerRecipe.html
   */
  public toGetContainerRecipe() {
    return this.to('GetContainerRecipe');
  }

  /**
   * View the resource policy associated with a container recipe
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetContainerRecipePolicy.html
   */
  public toGetContainerRecipePolicy() {
    return this.to('GetContainerRecipePolicy');
  }

  /**
   * View details about a distribution configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetDistributionConfiguration.html
   */
  public toGetDistributionConfiguration() {
    return this.to('GetDistributionConfiguration');
  }

  /**
   * View details about an image
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImage.html
   */
  public toGetImage() {
    return this.to('GetImage');
  }

  /**
   * View details about an image pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImagePipeline.html
   */
  public toGetImagePipeline() {
    return this.to('GetImagePipeline');
  }

  /**
   * View the resource policy associated with an image
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImagePolicy.html
   */
  public toGetImagePolicy() {
    return this.to('GetImagePolicy');
  }

  /**
   * View details about an image recipe
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImageRecipe.html
   */
  public toGetImageRecipe() {
    return this.to('GetImageRecipe');
  }

  /**
   * View the resource policy associated with an image recipe
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImageRecipePolicy.html
   */
  public toGetImageRecipePolicy() {
    return this.to('GetImageRecipePolicy');
  }

  /**
   * View details about an infrastructure configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetInfrastructureConfiguration.html
   */
  public toGetInfrastructureConfiguration() {
    return this.to('GetInfrastructureConfiguration');
  }

  /**
   * List the component build versions in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListComponentBuildVersions.html
   */
  public toListComponentBuildVersions() {
    return this.to('ListComponentBuildVersions');
  }

  /**
   * List the component versions owned by or shared with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListComponents.html
   */
  public toListComponents() {
    return this.to('ListComponents');
  }

  /**
   * List the container recipes owned by or shared with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListContainerRecipes.html
   */
  public toListContainerRecipes() {
    return this.to('ListContainerRecipes');
  }

  /**
   * List the distribution configurations in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListDistributionConfigurations.html
   */
  public toListDistributionConfigurations() {
    return this.to('ListDistributionConfigurations');
  }

  /**
   * List the image build versions in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageBuildVersions.html
   */
  public toListImageBuildVersions() {
    return this.to('ListImageBuildVersions');
  }

  /**
   * Returns a list of images created by the specified pipeline
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImagePipelineImages.html
   */
  public toListImagePipelineImages() {
    return this.to('ListImagePipelineImages');
  }

  /**
   * List the image pipelines in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImagePipelines.html
   */
  public toListImagePipelines() {
    return this.to('ListImagePipelines');
  }

  /**
   * List the image recipes owned by or shared with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImageRecipes.html
   */
  public toListImageRecipes() {
    return this.to('ListImageRecipes');
  }

  /**
   * List the image versions owned by or shared with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImages.html
   */
  public toListImages() {
    return this.to('ListImages');
  }

  /**
   * List the infrastructure configurations in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListInfrastructureConfigurations.html
   */
  public toListInfrastructureConfigurations() {
    return this.to('ListInfrastructureConfigurations');
  }

  /**
   * List tag for an Image Builder resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Set the resource policy associated with a component
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutComponentPolicy.html
   */
  public toPutComponentPolicy() {
    return this.to('PutComponentPolicy');
  }

  /**
   * Set the resource policy associated with a container recipe
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutContainerRecipePolicy.html
   */
  public toPutContainerRecipePolicy() {
    return this.to('PutContainerRecipePolicy');
  }

  /**
   * Set the resource policy associated with an image
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutImagePolicy.html
   */
  public toPutImagePolicy() {
    return this.to('PutImagePolicy');
  }

  /**
   * Set the resource policy associated with an image recipe
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_PutImageRecipePolicy.html
   */
  public toPutImageRecipePolicy() {
    return this.to('PutImageRecipePolicy');
  }

  /**
   * Create a new image from a pipeline
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - imagebuilder:GetImagePipeline
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_StartImagePipelineExecution.html
   */
  public toStartImagePipelineExecution() {
    return this.to('StartImagePipelineExecution');
  }

  /**
   * Tag an Image Builder resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Untag an Image Builder resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Update an existing distribution configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateDistributionConfiguration.html
   */
  public toUpdateDistributionConfiguration() {
    return this.to('UpdateDistributionConfiguration');
  }

  /**
   * Update an existing image pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateImagePipeline.html
   */
  public toUpdateImagePipeline() {
    return this.to('UpdateImagePipeline');
  }

  /**
   * Update an existing infrastructure configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCreatedResourceTagKeys()
   * - .ifCreatedResourceTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_UpdateInfrastructureConfiguration.html
   */
  public toUpdateInfrastructureConfiguration() {
    return this.to('UpdateInfrastructureConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelImageCreation",
      "CreateComponent",
      "CreateContainerRecipe",
      "CreateDistributionConfiguration",
      "CreateImage",
      "CreateImagePipeline",
      "CreateImageRecipe",
      "CreateInfrastructureConfiguration",
      "DeleteComponent",
      "DeleteContainerRecipe",
      "DeleteDistributionConfiguration",
      "DeleteImage",
      "DeleteImagePipeline",
      "DeleteImageRecipe",
      "DeleteInfrastructureConfiguration",
      "StartImagePipelineExecution",
      "UpdateDistributionConfiguration",
      "UpdateImagePipeline",
      "UpdateInfrastructureConfiguration"
    ],
    "Read": [
      "GetComponent",
      "GetContainerRecipe",
      "GetDistributionConfiguration",
      "GetImage",
      "GetImagePipeline",
      "GetImageRecipe",
      "GetInfrastructureConfiguration",
      "ListTagsForResource"
    ],
    "Permissions management": [
      "GetComponentPolicy",
      "GetContainerRecipePolicy",
      "GetImagePolicy",
      "GetImageRecipePolicy",
      "PutComponentPolicy",
      "PutContainerRecipePolicy",
      "PutImagePolicy",
      "PutImageRecipePolicy"
    ],
    "List": [
      "ListComponentBuildVersions",
      "ListComponents",
      "ListContainerRecipes",
      "ListDistributionConfigurations",
      "ListImageBuildVersions",
      "ListImagePipelineImages",
      "ListImagePipelines",
      "ListImageRecipes",
      "ListImages",
      "ListInfrastructureConfigurations"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onComponent(componentName: string, componentVersion: string, componentBuildVersion: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:imagebuilder:${Region}:${Account}:component/${ComponentName}/${ComponentVersion}/${ComponentBuildVersion}';
    arn = arn.replace('${ComponentName}', componentName);
    arn = arn.replace('${ComponentVersion}', componentVersion);
    arn = arn.replace('${ComponentBuildVersion}', componentBuildVersion);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type componentVersion to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ComponentVersion
   *
   * @param componentName - Identifier for the componentName.
   * @param componentVersion - Identifier for the componentVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onComponentVersion(componentName: string, componentVersion: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:imagebuilder:${Region}:${Account}:component/${ComponentName}/${ComponentVersion}';
    arn = arn.replace('${ComponentName}', componentName);
    arn = arn.replace('${ComponentVersion}', componentVersion);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type distributionConfiguration to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_DistributionConfiguration.html
   *
   * @param distributionConfigurationName - Identifier for the distributionConfigurationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDistributionConfiguration(distributionConfigurationName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:imagebuilder:${Region}:${Account}:distribution-configuration/${DistributionConfigurationName}';
    arn = arn.replace('${DistributionConfigurationName}', distributionConfigurationName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type image to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_Image.html
   *
   * @param imageName - Identifier for the imageName.
   * @param imageVersion - Identifier for the imageVersion.
   * @param imageBuildVersion - Identifier for the imageBuildVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onImage(imageName: string, imageVersion: string, imageBuildVersion: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:imagebuilder:${Region}:${Account}:image/${ImageName}/${ImageVersion}/${ImageBuildVersion}';
    arn = arn.replace('${ImageName}', imageName);
    arn = arn.replace('${ImageVersion}', imageVersion);
    arn = arn.replace('${ImageBuildVersion}', imageBuildVersion);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type imageVersion to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImageVersion.html
   *
   * @param imageName - Identifier for the imageName.
   * @param imageVersion - Identifier for the imageVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onImageVersion(imageName: string, imageVersion: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:imagebuilder:${Region}:${Account}:image/${ImageName}/${ImageVersion}';
    arn = arn.replace('${ImageName}', imageName);
    arn = arn.replace('${ImageVersion}', imageVersion);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type imageRecipe to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImageRecipe.html
   *
   * @param imageRecipeName - Identifier for the imageRecipeName.
   * @param imageRecipeVersion - Identifier for the imageRecipeVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onImageRecipe(imageRecipeName: string, imageRecipeVersion: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:imagebuilder:${Region}:${Account}:image-recipe/${ImageRecipeName}/${ImageRecipeVersion}';
    arn = arn.replace('${ImageRecipeName}', imageRecipeName);
    arn = arn.replace('${ImageRecipeVersion}', imageRecipeVersion);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type containerRecipe to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ContainerRecipe.html
   *
   * @param containerRecipeName - Identifier for the containerRecipeName.
   * @param containerRecipeVersion - Identifier for the containerRecipeVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onContainerRecipe(containerRecipeName: string, containerRecipeVersion: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:imagebuilder:${Region}:${Account}:container-recipe/${ContainerRecipeName}/${ContainerRecipeVersion}';
    arn = arn.replace('${ContainerRecipeName}', containerRecipeName);
    arn = arn.replace('${ContainerRecipeVersion}', containerRecipeVersion);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type imagePipeline to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ImagePipeline.html
   *
   * @param imagePipelineName - Identifier for the imagePipelineName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onImagePipeline(imagePipelineName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:imagebuilder:${Region}:${Account}:image-pipeline/${ImagePipelineName}';
    arn = arn.replace('${ImagePipelineName}', imagePipelineName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type infrastructureConfiguration to the statement
   *
   * https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_InfrastructureConfiguration.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInfrastructureConfiguration(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:imagebuilder:${Region}:${Account}:infrastructure-configuration/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type kmsKey to the statement
   *
   * https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys
   *
   * @param keyId - Identifier for the keyId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onKmsKey(keyId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:kms:${Region}:${Account}:key/${KeyId}';
    arn = arn.replace('${KeyId}', keyId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    return this.if(`CreatedResourceTag/${ key }`, value, operator || 'StringLike');
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
    return this.if(`CreatedResourceTagKeys`, value, operator || 'StringLike');
  }
}
