import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [codeartifact](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodeartifact.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Codeartifact extends PolicyStatement {
  public servicePrefix = 'codeartifact';

  /**
   * Statement provider for service [codeartifact](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodeartifact.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add an external connection to a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssociateExternalConnection.html
   */
  public toAssociateExternalConnection() {
    return this.to('AssociateExternalConnection');
  }

  /**
   * Grants permission to associate an existing repository as an upstream repository to another repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/userguide/repos-upstream.html
   */
  public toAssociateWithDownstreamRepository() {
    return this.to('AssociateWithDownstreamRepository');
  }

  /**
   * Grants permission to copy package versions from one repository to another repository in the same domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CopyPackageVersions.html
   */
  public toCopyPackageVersions() {
    return this.to('CopyPackageVersions');
  }

  /**
   * Grants permission to create a new domain
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateDomain.html
   */
  public toCreateDomain() {
    return this.to('CreateDomain');
  }

  /**
   * Grants permission to create a new repository
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateRepository.html
   */
  public toCreateRepository() {
    return this.to('CreateRepository');
  }

  /**
   * Grants permission to delete a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    return this.to('DeleteDomain');
  }

  /**
   * Grants permission to delete the resource policy set on a domain
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeleteDomainPermissionsPolicy.html
   */
  public toDeleteDomainPermissionsPolicy() {
    return this.to('DeleteDomainPermissionsPolicy');
  }

  /**
   * Grants permission to delete package versions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeletePackageVersions.html
   */
  public toDeletePackageVersions() {
    return this.to('DeletePackageVersions');
  }

  /**
   * Grants permission to delete a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeleteRepository.html
   */
  public toDeleteRepository() {
    return this.to('DeleteRepository');
  }

  /**
   * Grants permission to delete the resource policy set on a repository
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeleteRepositoryPermissionsPolicy.html
   */
  public toDeleteRepositoryPermissionsPolicy() {
    return this.to('DeleteRepositoryPermissionsPolicy');
  }

  /**
   * Grants permission to return information about a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribeDomain.html
   */
  public toDescribeDomain() {
    return this.to('DescribeDomain');
  }

  /**
   * Grants permission to return information about a package version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribePackageVersion.html
   */
  public toDescribePackageVersion() {
    return this.to('DescribePackageVersion');
  }

  /**
   * Grants permission to return detailed information about a repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribeRepository.html
   */
  public toDescribeRepository() {
    return this.to('DescribeRepository');
  }

  /**
   * Grants permission to disassociate an external connection from a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DisassociateExternalConnection.html
   */
  public toDisassociateExternalConnection() {
    return this.to('DisassociateExternalConnection');
  }

  /**
   * Grants permission to set the status of package versions to Disposed and delete their assets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DisposePackageVersions.html
   */
  public toDisposePackageVersions() {
    return this.to('DisposePackageVersions');
  }

  /**
   * Grants permission to generate a temporary authentication token for accessing repositories in a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetAuthorizationToken.html
   */
  public toGetAuthorizationToken() {
    return this.to('GetAuthorizationToken');
  }

  /**
   * Grants permission to return a domain's resource policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetDomainPermissionsPolicy.html
   */
  public toGetDomainPermissionsPolicy() {
    return this.to('GetDomainPermissionsPolicy');
  }

  /**
   * Grants permission to return an asset (or file) that is part of a package version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetPackageVersionAsset.html
   */
  public toGetPackageVersionAsset() {
    return this.to('GetPackageVersionAsset');
  }

  /**
   * Grants permission to return a package version's readme file
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetPackageVersionReadme.html
   */
  public toGetPackageVersionReadme() {
    return this.to('GetPackageVersionReadme');
  }

  /**
   * Grants permission to return an endpoint for a repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetRepositoryEndpoint.html
   */
  public toGetRepositoryEndpoint() {
    return this.to('GetRepositoryEndpoint');
  }

  /**
   * Grants permission to return a repository's resource policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetRepositoryPermissionsPolicy.html
   */
  public toGetRepositoryPermissionsPolicy() {
    return this.to('GetRepositoryPermissionsPolicy');
  }

  /**
   * Grants permission to list the domains in the current user's AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListDomains.html
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * Grants permission to list a package version's assets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersionAssets.html
   */
  public toListPackageVersionAssets() {
    return this.to('ListPackageVersionAssets');
  }

  /**
   * Grants permission to list the direct dependencies of a package version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersionDependencies.html
   */
  public toListPackageVersionDependencies() {
    return this.to('ListPackageVersionDependencies');
  }

  /**
   * Grants permission to list a package's versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html
   */
  public toListPackageVersions() {
    return this.to('ListPackageVersions');
  }

  /**
   * Grants permission to list the packages in a repository
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackages.html
   */
  public toListPackages() {
    return this.to('ListPackages');
  }

  /**
   * Grants permission to list the repositories administered by the calling account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListRepositories.html
   */
  public toListRepositories() {
    return this.to('ListRepositories');
  }

  /**
   * Grants permission to list the repositories in a domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListRepositoriesInDomain.html
   */
  public toListRepositoriesInDomain() {
    return this.to('ListRepositoriesInDomain');
  }

  /**
   * Grants permission to list tags for a CodeArtifact resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to publish assets and metadata to a repository endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/userguide/repo-policies.html
   */
  public toPublishPackageVersion() {
    return this.to('PublishPackageVersion');
  }

  /**
   * Grants permission to attach a resource policy to a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PutDomainPermissionsPolicy.html
   */
  public toPutDomainPermissionsPolicy() {
    return this.to('PutDomainPermissionsPolicy');
  }

  /**
   * Grants permission to add, modify or remove package metadata using a repository endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/userguide/repo-policies.html
   */
  public toPutPackageMetadata() {
    return this.to('PutPackageMetadata');
  }

  /**
   * Grants permission to attach a resource policy to a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PutRepositoryPermissionsPolicy.html
   */
  public toPutRepositoryPermissionsPolicy() {
    return this.to('PutRepositoryPermissionsPolicy');
  }

  /**
   * Grants permission to return package assets and metadata from a repository endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/userguide/repo-policies.html
   */
  public toReadFromRepository() {
    return this.to('ReadFromRepository');
  }

  /**
   * Grants permission to tag a CodeArtifact resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a tag from a CodeArtifact resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to modify the status of one or more versions of a package
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html
   */
  public toUpdatePackageVersionsStatus() {
    return this.to('UpdatePackageVersionsStatus');
  }

  /**
   * Grants permission to modify the properties of a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdateRepository.html
   */
  public toUpdateRepository() {
    return this.to('UpdateRepository');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateExternalConnection',
      'AssociateWithDownstreamRepository',
      'CopyPackageVersions',
      'CreateDomain',
      'CreateRepository',
      'DeleteDomain',
      'DeletePackageVersions',
      'DeleteRepository',
      'DisassociateExternalConnection',
      'DisposePackageVersions',
      'PublishPackageVersion',
      'PutDomainPermissionsPolicy',
      'PutPackageMetadata',
      'PutRepositoryPermissionsPolicy',
      'UpdatePackageVersionsStatus',
      'UpdateRepository'
    ],
    'Permissions management': [
      'DeleteDomainPermissionsPolicy',
      'DeleteRepositoryPermissionsPolicy'
    ],
    Read: [
      'DescribeDomain',
      'DescribePackageVersion',
      'DescribeRepository',
      'GetAuthorizationToken',
      'GetDomainPermissionsPolicy',
      'GetPackageVersionAsset',
      'GetPackageVersionReadme',
      'GetRepositoryEndpoint',
      'GetRepositoryPermissionsPolicy',
      'ReadFromRepository'
    ],
    List: [
      'ListDomains',
      'ListPackageVersionAssets',
      'ListPackageVersionDependencies',
      'ListPackageVersions',
      'ListPackages',
      'ListRepositories',
      'ListRepositoriesInDomain',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type domain to the statement
   *
   * https://docs.aws.amazon.com/codeartifact/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param domainName - Identifier for the domainName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDomain(domainName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:codeartifact:${ region || '*' }:${ account || '*' }:domain/${ domainName }`);
  }

  /**
   * Adds a resource of type repository to the statement
   *
   * https://docs.aws.amazon.com/codeartifact/latest/userguide/repo-policies.html
   *
   * @param domainName - Identifier for the domainName.
   * @param repositoryName - Identifier for the repositoryName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRepository(domainName: string, repositoryName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:codeartifact:${ region || '*' }:${ account || '*' }:repository/${ domainName }/${ repositoryName }`);
  }

  /**
   * Adds a resource of type package to the statement
   *
   * https://docs.aws.amazon.com/codeartifact/latest/userguide/repo-policies.html
   *
   * @param domainName - Identifier for the domainName.
   * @param repositoryName - Identifier for the repositoryName.
   * @param packageFormat - Identifier for the packageFormat.
   * @param packageNamespace - Identifier for the packageNamespace.
   * @param packageName - Identifier for the packageName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPackage(domainName: string, repositoryName: string, packageFormat: string, packageNamespace: string, packageName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:codeartifact:${ region || '*' }:${ account || '*' }:package/${ domainName }/${ repositoryName }/${ packageFormat }/${ packageNamespace }/${ packageName }`);
  }
}
