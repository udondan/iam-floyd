import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [ecr-public](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerregistrypublic.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class EcrPublic extends PolicyStatement {
  public servicePrefix = 'ecr-public';

  /**
   * Statement provider for service [ecr-public](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerregistrypublic.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to check the availability of multiple image layers in a specified registry and repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_BatchCheckLayerAvailability.html
   */
  public toBatchCheckLayerAvailability() {
    return this.to('BatchCheckLayerAvailability');
  }

  /**
   * Grants permission to delete a list of specified images within a specified repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_BatchDeleteImage.html
   */
  public toBatchDeleteImage() {
    return this.to('BatchDeleteImage');
  }

  /**
   * Grants permission to inform Amazon ECR that the image layer upload for a specified registry, repository name, and upload ID, has completed
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_CompleteLayerUpload.html
   */
  public toCompleteLayerUpload() {
    return this.to('CompleteLayerUpload');
  }

  /**
   * Grants permission to create an image repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_CreateRepository.html
   */
  public toCreateRepository() {
    return this.to('CreateRepository');
  }

  /**
   * Grants permission to delete an existing image repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DeleteRepository.html
   */
  public toDeleteRepository() {
    return this.to('DeleteRepository');
  }

  /**
   * Grants permission to delete the repository policy from a specified repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DeleteRepositoryPolicy.html
   */
  public toDeleteRepositoryPolicy() {
    return this.to('DeleteRepositoryPolicy');
  }

  /**
   * Grants permission to describe all the image tags for a given repository
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DescribeImageTags.html
   */
  public toDescribeImageTags() {
    return this.to('DescribeImageTags');
  }

  /**
   * Grants permission to get metadata about the images in a repository, including image size, image tags, and creation date
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DescribeImages.html
   */
  public toDescribeImages() {
    return this.to('DescribeImages');
  }

  /**
   * Grants permission to retrieve the catalog data associated with a registry
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DescribeRegistries.html
   */
  public toDescribeRegistries() {
    return this.to('DescribeRegistries');
  }

  /**
   * Grants permission to describe image repositories in a registry
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_DescribeRepositories.html
   */
  public toDescribeRepositories() {
    return this.to('DescribeRepositories');
  }

  /**
   * Grants permission to retrieve a token that is valid for a specified registry for 12 hours
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_GetAuthorizationToken.html
   */
  public toGetAuthorizationToken() {
    return this.to('GetAuthorizationToken');
  }

  /**
   * Grants permission to retrieve the catalog data associated with a registry
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_GetRegistryCatalogData.html
   */
  public toGetRegistryCatalogData() {
    return this.to('GetRegistryCatalogData');
  }

  /**
   * Grants permission to retrieve the catalog data associated with a repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_GetRepositoryCatalogData.html
   */
  public toGetRepositoryCatalogData() {
    return this.to('GetRepositoryCatalogData');
  }

  /**
   * Grants permission to retrieve the repository policy for a specified repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_GetRepositoryPolicy.html
   */
  public toGetRepositoryPolicy() {
    return this.to('GetRepositoryPolicy');
  }

  /**
   * Grants permission to notify Amazon ECR that you intend to upload an image layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_InitiateLayerUpload.html
   */
  public toInitiateLayerUpload() {
    return this.to('InitiateLayerUpload');
  }

  /**
   * Grants permission to create or update the image manifest associated with an image
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_PutImage.html
   */
  public toPutImage() {
    return this.to('PutImage');
  }

  /**
   * Grants permission to create and update the catalog data associated with a registry
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_PutRegistryCatalogData.html
   */
  public toPutRegistryCatalogData() {
    return this.to('PutRegistryCatalogData');
  }

  /**
   * Grants permission to update the catalog data associated with a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_PutRepositoryCatalogData.html
   */
  public toPutRepositoryCatalogData() {
    return this.to('PutRepositoryCatalogData');
  }

  /**
   * Grants permission to apply a repository policy on a specified repository to control access permissions
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_SetRepositoryPolicy.html
   */
  public toSetRepositoryPolicy() {
    return this.to('SetRepositoryPolicy');
  }

  /**
   * Grants permission to upload an image layer part to Amazon ECR Public
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECRPublic/latest/APIReference/API_UploadLayerPart.html
   */
  public toUploadLayerPart() {
    return this.to('UploadLayerPart');
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "BatchCheckLayerAvailability",
      "DescribeImages",
      "GetAuthorizationToken",
      "GetRegistryCatalogData",
      "GetRepositoryCatalogData",
      "GetRepositoryPolicy"
    ],
    "Write": [
      "BatchDeleteImage",
      "CompleteLayerUpload",
      "CreateRepository",
      "DeleteRepository",
      "DeleteRepositoryPolicy",
      "InitiateLayerUpload",
      "PutImage",
      "PutRegistryCatalogData",
      "PutRepositoryCatalogData",
      "UploadLayerPart"
    ],
    "List": [
      "DescribeImageTags",
      "DescribeRegistries",
      "DescribeRepositories"
    ],
    "Permissions management": [
      "SetRepositoryPolicy"
    ]
  };

  /**
   * Adds a resource of type repository to the statement
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/userguide/iam-policy-structure.html#ECR-Public_ARN_Format
   *
   * @param repositoryName - Identifier for the repositoryName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRepository(repositoryName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:ecr-public::${Account}:repository/${RepositoryName}';
    arn = arn.replace('${RepositoryName}', repositoryName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type registry to the statement
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/userguide/iam-policy-structure.html#ECR-Public_ARN_Format
   *
   * @param registryId - Identifier for the registryId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRegistry(registryId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:ecr-public::${Account}:registry/${RegistryId}';
    arn = arn.replace('${RegistryId}', registryId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
