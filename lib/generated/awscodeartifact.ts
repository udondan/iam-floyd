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
  constructor (sid?: string) {
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
    this.to('codeartifact:AssociateExternalConnection');
    return this;
  }

  /**
   * Grants permission to associate an existing repository as an upstream repository to another repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/userguide/repos-upstream.html
   */
  public toAssociateWithDownstreamRepository() {
    this.to('codeartifact:AssociateWithDownstreamRepository');
    return this;
  }

  /**
   * Grants permission to copy package versions from one repository to another repository in the same domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CopyPackageVersions.html
   */
  public toCopyPackageVersions() {
    this.to('codeartifact:CopyPackageVersions');
    return this;
  }

  /**
   * Grants permission to create a new domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateDomain.html
   */
  public toCreateDomain() {
    this.to('codeartifact:CreateDomain');
    return this;
  }

  /**
   * Grants permission to create a new repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateRepository.html
   */
  public toCreateRepository() {
    this.to('codeartifact:CreateRepository');
    return this;
  }

  /**
   * Grants permission to delete a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    this.to('codeartifact:DeleteDomain');
    return this;
  }

  /**
   * Grants permission to delete the resource policy set on a domain
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeleteDomainPermissionsPolicy.html
   */
  public toDeleteDomainPermissionsPolicy() {
    this.to('codeartifact:DeleteDomainPermissionsPolicy');
    return this;
  }

  /**
   * Grants permission to delete package versions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeletePackageVersions.html
   */
  public toDeletePackageVersions() {
    this.to('codeartifact:DeletePackageVersions');
    return this;
  }

  /**
   * Grants permission to delete a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeleteRepository.html
   */
  public toDeleteRepository() {
    this.to('codeartifact:DeleteRepository');
    return this;
  }

  /**
   * Grants permission to delete the resource policy set on a repository
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DeleteRepositoryPermissionsPolicy.html
   */
  public toDeleteRepositoryPermissionsPolicy() {
    this.to('codeartifact:DeleteRepositoryPermissionsPolicy');
    return this;
  }

  /**
   * Grants permission to return information about a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribeDomain.html
   */
  public toDescribeDomain() {
    this.to('codeartifact:DescribeDomain');
    return this;
  }

  /**
   * Grants permission to return information about a package version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribePackageVersion.html
   */
  public toDescribePackageVersion() {
    this.to('codeartifact:DescribePackageVersion');
    return this;
  }

  /**
   * Grants permission to return detailed information about a repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DescribeRepository.html
   */
  public toDescribeRepository() {
    this.to('codeartifact:DescribeRepository');
    return this;
  }

  /**
   * Grants permission to disassociate an external connection from a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DisassociateExternalConnection.html
   */
  public toDisassociateExternalConnection() {
    this.to('codeartifact:DisassociateExternalConnection');
    return this;
  }

  /**
   * Grants permission to set the status of package versions to Disposed and delete their assets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_DisposePackageVersions.html
   */
  public toDisposePackageVersions() {
    this.to('codeartifact:DisposePackageVersions');
    return this;
  }

  /**
   * Grants permission to generate a temporary authentication token for accessing repositories in a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetAuthorizationToken.html
   */
  public toGetAuthorizationToken() {
    this.to('codeartifact:GetAuthorizationToken');
    return this;
  }

  /**
   * Grants permission to return a domain's resource policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetDomainPermissionsPolicy.html
   */
  public toGetDomainPermissionsPolicy() {
    this.to('codeartifact:GetDomainPermissionsPolicy');
    return this;
  }

  /**
   * Grants permission to return an asset (or file) that is part of a package version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetPackageVersionAsset.html
   */
  public toGetPackageVersionAsset() {
    this.to('codeartifact:GetPackageVersionAsset');
    return this;
  }

  /**
   * Grants permission to return a package version's readme file
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetPackageVersionReadme.html
   */
  public toGetPackageVersionReadme() {
    this.to('codeartifact:GetPackageVersionReadme');
    return this;
  }

  /**
   * Grants permission to return an endpoint for a repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetRepositoryEndpoint.html
   */
  public toGetRepositoryEndpoint() {
    this.to('codeartifact:GetRepositoryEndpoint');
    return this;
  }

  /**
   * Grants permission to return a repository's resource policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_GetRepositoryPermissionsPolicy.html
   */
  public toGetRepositoryPermissionsPolicy() {
    this.to('codeartifact:GetRepositoryPermissionsPolicy');
    return this;
  }

  /**
   * Grants permission to list the domains in the current user's AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListDomains.html
   */
  public toListDomains() {
    this.to('codeartifact:ListDomains');
    return this;
  }

  /**
   * Grants permission to list a package version's assets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersionAssets.html
   */
  public toListPackageVersionAssets() {
    this.to('codeartifact:ListPackageVersionAssets');
    return this;
  }

  /**
   * Grants permission to list the direct dependencies of a package version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersionDependencies.html
   */
  public toListPackageVersionDependencies() {
    this.to('codeartifact:ListPackageVersionDependencies');
    return this;
  }

  /**
   * Grants permission to list a package's versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html
   */
  public toListPackageVersions() {
    this.to('codeartifact:ListPackageVersions');
    return this;
  }

  /**
   * Grants permission to list the packages in a repository
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackages.html
   */
  public toListPackages() {
    this.to('codeartifact:ListPackages');
    return this;
  }

  /**
   * Grants permission to list the repositories administered by the calling account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListRepositories.html
   */
  public toListRepositories() {
    this.to('codeartifact:ListRepositories');
    return this;
  }

  /**
   * Grants permission to list the repositories in a domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListRepositoriesInDomain.html
   */
  public toListRepositoriesInDomain() {
    this.to('codeartifact:ListRepositoriesInDomain');
    return this;
  }

  /**
   * Grants permission to publish assets and metadata to a repository endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/userguide/repo-policies.html
   */
  public toPublishPackageVersion() {
    this.to('codeartifact:PublishPackageVersion');
    return this;
  }

  /**
   * Grants permission to attach a resource policy to a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PutDomainPermissionsPolicy.html
   */
  public toPutDomainPermissionsPolicy() {
    this.to('codeartifact:PutDomainPermissionsPolicy');
    return this;
  }

  /**
   * Grants permission to add, modify or remove package metadata using a repository endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/userguide/repo-policies.html
   */
  public toPutPackageMetadata() {
    this.to('codeartifact:PutPackageMetadata');
    return this;
  }

  /**
   * Grants permission to attach a resource policy to a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PutRepositoryPermissionsPolicy.html
   */
  public toPutRepositoryPermissionsPolicy() {
    this.to('codeartifact:PutRepositoryPermissionsPolicy');
    return this;
  }

  /**
   * Grants permission to return package assets and metadata from a repository endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeartifact/latest/userguide/repo-policies.html
   */
  public toReadFromRepository() {
    this.to('codeartifact:ReadFromRepository');
    return this;
  }

  /**
   * Grants permission to modify the status of one or more versions of a package
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html
   */
  public toUpdatePackageVersionsStatus() {
    this.to('codeartifact:UpdatePackageVersionsStatus');
    return this;
  }

  /**
   * Grants permission to modify the properties of a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdateRepository.html
   */
  public toUpdateRepository() {
    this.to('codeartifact:UpdateRepository');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateExternalConnection",
      "AssociateWithDownstreamRepository",
      "CopyPackageVersions",
      "CreateDomain",
      "CreateRepository",
      "DeleteDomain",
      "DeletePackageVersions",
      "DeleteRepository",
      "DisassociateExternalConnection",
      "DisposePackageVersions",
      "PublishPackageVersion",
      "PutDomainPermissionsPolicy",
      "PutPackageMetadata",
      "PutRepositoryPermissionsPolicy",
      "UpdatePackageVersionsStatus",
      "UpdateRepository"
    ],
    "Permissions management": [
      "DeleteDomainPermissionsPolicy",
      "DeleteRepositoryPermissionsPolicy"
    ],
    "Read": [
      "DescribeDomain",
      "DescribePackageVersion",
      "DescribeRepository",
      "GetAuthorizationToken",
      "GetDomainPermissionsPolicy",
      "GetPackageVersionAsset",
      "GetPackageVersionReadme",
      "GetRepositoryEndpoint",
      "GetRepositoryPermissionsPolicy",
      "ReadFromRepository"
    ],
    "List": [
      "ListDomains",
      "ListPackageVersionAssets",
      "ListPackageVersionDependencies",
      "ListPackageVersions",
      "ListPackages",
      "ListRepositories",
      "ListRepositoriesInDomain"
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
   */
  public onDomain(domainName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codeartifact:${Region}:${Account}:domain/${DomainName}';
    arn = arn.replace('${DomainName}', domainName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   */
  public onRepository(domainName: string, repositoryName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codeartifact:${Region}:${Account}:repository/${DomainName}/${RepositoryName}';
    arn = arn.replace('${DomainName}', domainName);
    arn = arn.replace('${RepositoryName}', repositoryName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:codeartifact:${Region}:${Account}:package/${DomainName}/${RepositoryName}/${PackageFormat}/${PackageNamespace}/${PackageName}';
    arn = arn.replace('${DomainName}', domainName);
    arn = arn.replace('${RepositoryName}', repositoryName);
    arn = arn.replace('${PackageFormat}', packageFormat);
    arn = arn.replace('${PackageNamespace}', packageNamespace);
    arn = arn.replace('${PackageName}', packageName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
