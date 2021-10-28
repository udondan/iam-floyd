import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [ecr](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerregistry.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ecr extends PolicyStatement {
  public servicePrefix = 'ecr';

  /**
   * Statement provider for service [ecr](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerregistry.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to check the availability of multiple image layers in a specified registry and repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchCheckLayerAvailability.html
   */
  public toBatchCheckLayerAvailability() {
    return this.to('BatchCheckLayerAvailability');
  }

  /**
   * Grants permission to delete a list of specified images within a specified repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchDeleteImage.html
   */
  public toBatchDeleteImage() {
    return this.to('BatchDeleteImage');
  }

  /**
   * Grants permission to get detailed information for specified images within a specified repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_BatchGetImage.html
   */
  public toBatchGetImage() {
    return this.to('BatchGetImage');
  }

  /**
   * Grants permission to inform Amazon ECR that the image layer upload for a specified registry, repository name, and upload ID, has completed
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_CompleteLayerUpload.html
   */
  public toCompleteLayerUpload() {
    return this.to('CompleteLayerUpload');
  }

  /**
   * Grants permission to create an image repository
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_CreateRepository.html
   */
  public toCreateRepository() {
    return this.to('CreateRepository');
  }

  /**
   * Grants permission to delete the specified lifecycle policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteLifecyclePolicy.html
   */
  public toDeleteLifecyclePolicy() {
    return this.to('DeleteLifecyclePolicy');
  }

  /**
   * Grants permission to delete the registry policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteRegistryPolicy.html
   */
  public toDeleteRegistryPolicy() {
    return this.to('DeleteRegistryPolicy');
  }

  /**
   * Grants permission to delete an existing image repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteRepository.html
   */
  public toDeleteRepository() {
    return this.to('DeleteRepository');
  }

  /**
   * Grants permission to delete the repository policy from a specified repository
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DeleteRepositoryPolicy.html
   */
  public toDeleteRepositoryPolicy() {
    return this.to('DeleteRepositoryPolicy');
  }

  /**
   * Grants permission to retrieve replication status about an image in a registry, including failure reason if replication fails
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeImageReplicationStatus.html
   */
  public toDescribeImageReplicationStatus() {
    return this.to('DescribeImageReplicationStatus');
  }

  /**
   * Grants permission to describe the image scan findings for the specified image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeImageScanFindings.html
   */
  public toDescribeImageScanFindings() {
    return this.to('DescribeImageScanFindings');
  }

  /**
   * Grants permission to get metadata about the images in a repository, including image size, image tags, and creation date
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeImages.html
   */
  public toDescribeImages() {
    return this.to('DescribeImages');
  }

  /**
   * Grants permission to describe the registry settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeRegistry.html
   */
  public toDescribeRegistry() {
    return this.to('DescribeRegistry');
  }

  /**
   * Grants permission to describe image repositories in a registry
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_DescribeRepositories.html
   */
  public toDescribeRepositories() {
    return this.to('DescribeRepositories');
  }

  /**
   * Grants permission to retrieve a token that is valid for a specified registry for 12 hours
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetAuthorizationToken.html
   */
  public toGetAuthorizationToken() {
    return this.to('GetAuthorizationToken');
  }

  /**
   * Grants permission to retrieve the download URL corresponding to an image layer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetDownloadUrlForLayer.html
   */
  public toGetDownloadUrlForLayer() {
    return this.to('GetDownloadUrlForLayer');
  }

  /**
   * Grants permission to retrieve the specified lifecycle policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetLifecyclePolicy.html
   */
  public toGetLifecyclePolicy() {
    return this.to('GetLifecyclePolicy');
  }

  /**
   * Grants permission to retrieve the results of the specified lifecycle policy preview request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetLifecyclePolicyPreview.html
   */
  public toGetLifecyclePolicyPreview() {
    return this.to('GetLifecyclePolicyPreview');
  }

  /**
   * Grants permission to retrieve the registry policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetRegistryPolicy.html
   */
  public toGetRegistryPolicy() {
    return this.to('GetRegistryPolicy');
  }

  /**
   * Grants permission to retrieve the repository policy for a specified repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_GetRepositoryPolicy.html
   */
  public toGetRepositoryPolicy() {
    return this.to('GetRepositoryPolicy');
  }

  /**
   * Grants permission to notify Amazon ECR that you intend to upload an image layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_InitiateLayerUpload.html
   */
  public toInitiateLayerUpload() {
    return this.to('InitiateLayerUpload');
  }

  /**
   * Grants permission to list all the image IDs for a given repository
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_ListImages.html
   */
  public toListImages() {
    return this.to('ListImages');
  }

  /**
   * Grants permission to list the tags for an Amazon ECR resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create or update the image manifest associated with an image
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutImage.html
   */
  public toPutImage() {
    return this.to('PutImage');
  }

  /**
   * Grants permission to update the image scanning configuration for a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutImageScanningConfiguration.html
   */
  public toPutImageScanningConfiguration() {
    return this.to('PutImageScanningConfiguration');
  }

  /**
   * Grants permission to update the image tag mutability settings for a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutImageTagMutability.html
   */
  public toPutImageTagMutability() {
    return this.to('PutImageTagMutability');
  }

  /**
   * Grants permission to create or update a lifecycle policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutLifecyclePolicy.html
   */
  public toPutLifecyclePolicy() {
    return this.to('PutLifecyclePolicy');
  }

  /**
   * Grants permission to update the registry policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutRegistryPolicy.html
   */
  public toPutRegistryPolicy() {
    return this.to('PutRegistryPolicy');
  }

  /**
   * Grants permission to update the replication configuration for the registry
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_PutReplicationConfiguration.html
   */
  public toPutReplicationConfiguration() {
    return this.to('PutReplicationConfiguration');
  }

  /**
   * Grants permission to replicate images to the destination registry
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html
   */
  public toReplicateImage() {
    return this.to('ReplicateImage');
  }

  /**
   * Grants permission to apply a repository policy on a specified repository to control access permissions
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_SetRepositoryPolicy.html
   */
  public toSetRepositoryPolicy() {
    return this.to('SetRepositoryPolicy');
  }

  /**
   * Grants permission to start an image scan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_StartImageScan.html
   */
  public toStartImageScan() {
    return this.to('StartImageScan');
  }

  /**
   * Grants permission to start a preview of the specified lifecycle policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_StartLifecyclePolicyPreview.html
   */
  public toStartLifecyclePolicyPreview() {
    return this.to('StartLifecyclePolicyPreview');
  }

  /**
   * Grants permission to tag an Amazon ECR resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag an Amazon ECR resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to upload an image layer part to Amazon ECR
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/APIReference/API_UploadLayerPart.html
   */
  public toUploadLayerPart() {
    return this.to('UploadLayerPart');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'BatchCheckLayerAvailability',
      'BatchGetImage',
      'DescribeImageReplicationStatus',
      'DescribeImageScanFindings',
      'DescribeRegistry',
      'DescribeRepositories',
      'GetAuthorizationToken',
      'GetDownloadUrlForLayer',
      'GetLifecyclePolicy',
      'GetLifecyclePolicyPreview',
      'GetRegistryPolicy',
      'GetRepositoryPolicy',
      'ListTagsForResource'
    ],
    Write: [
      'BatchDeleteImage',
      'CompleteLayerUpload',
      'CreateRepository',
      'DeleteLifecyclePolicy',
      'DeleteRepository',
      'InitiateLayerUpload',
      'PutImage',
      'PutImageScanningConfiguration',
      'PutImageTagMutability',
      'PutLifecyclePolicy',
      'PutReplicationConfiguration',
      'ReplicateImage',
      'StartImageScan',
      'StartLifecyclePolicyPreview',
      'UploadLayerPart'
    ],
    'Permissions management': [
      'DeleteRegistryPolicy',
      'DeleteRepositoryPolicy',
      'PutRegistryPolicy',
      'SetRepositoryPolicy'
    ],
    List: [
      'DescribeImages',
      'ListImages'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type repository to the statement
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html
   *
   * @param repositoryName - Identifier for the repositoryName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onRepository(repositoryName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ecr:${ region || '*' }:${ account || '*' }:repository/${ repositoryName }`);
  }

  /**
   * Filters actions based on tag-value associated with the resource
   *
   * https://docs.aws.amazon.com/AmazonECR/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-conditionkeys
   *
   * Applies to resource types:
   * - repository
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}
