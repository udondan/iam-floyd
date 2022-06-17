import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [eks](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelastickubernetesservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Eks extends PolicyStatement {
  public servicePrefix = 'eks';

  /**
   * Statement provider for service [eks](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelastickubernetesservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to view Kubernetes objects via AWS EKS console
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/view-workloads.html
   */
  public toAccessKubernetesApi() {
    return this.to('AccessKubernetesApi');
  }

  /**
   * Grants permission to associate encryption configuration to a cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_AssociateEncryptionConfig.html
   */
  public toAssociateEncryptionConfig() {
    return this.to('AssociateEncryptionConfig');
  }

  /**
   * Grants permission to associate an identity provider configuration to a cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifClientId()
   * - .ifIssuerUrl()
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_AssociateIdentityProviderConfig.html
   */
  public toAssociateIdentityProviderConfig() {
    return this.to('AssociateIdentityProviderConfig');
  }

  /**
   * Grants permission to create an Amazon EKS add-on
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateAddon.html
   */
  public toCreateAddon() {
    return this.to('CreateAddon');
  }

  /**
   * Grants permission to create an Amazon EKS cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateCluster.html
   */
  public toCreateCluster() {
    return this.to('CreateCluster');
  }

  /**
   * Grants permission to create an AWS Fargate profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateFargateProfile.html
   */
  public toCreateFargateProfile() {
    return this.to('CreateFargateProfile');
  }

  /**
   * Grants permission to create an Amazon EKS Nodegroup
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateNodegroup.html
   */
  public toCreateNodegroup() {
    return this.to('CreateNodegroup');
  }

  /**
   * Grants permission to delete an Amazon EKS add-on
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteAddon.html
   */
  public toDeleteAddon() {
    return this.to('DeleteAddon');
  }

  /**
   * Grants permission to delete an Amazon EKS cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteCluster.html
   */
  public toDeleteCluster() {
    return this.to('DeleteCluster');
  }

  /**
   * Grants permission to delete an AWS Fargate profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteFargateProfile.html
   */
  public toDeleteFargateProfile() {
    return this.to('DeleteFargateProfile');
  }

  /**
   * Grants permission to delete an Amazon EKS Nodegroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteNodegroup.html
   */
  public toDeleteNodegroup() {
    return this.to('DeleteNodegroup');
  }

  /**
   * Grants permission to deregister an External cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DeregisterCluster.html
   */
  public toDeregisterCluster() {
    return this.to('DeregisterCluster');
  }

  /**
   * Grants permission to retrieve descriptive information about an Amazon EKS add-on
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddon.html
   */
  public toDescribeAddon() {
    return this.to('DescribeAddon');
  }

  /**
   * Grants permission to retrieve descriptive version information about the add-ons that Amazon EKS Add-ons supports
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html
   */
  public toDescribeAddonVersions() {
    return this.to('DescribeAddonVersions');
  }

  /**
   * Grants permission to retrieve descriptive information about an Amazon EKS cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeCluster.html
   */
  public toDescribeCluster() {
    return this.to('DescribeCluster');
  }

  /**
   * Grants permission to retrieve descriptive information about an AWS Fargate profile associated with a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeFargateProfile.html
   */
  public toDescribeFargateProfile() {
    return this.to('DescribeFargateProfile');
  }

  /**
   * Grants permission to retrieve descriptive information about an Idp config associated with a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeIdentityProviderConfig.html
   */
  public toDescribeIdentityProviderConfig() {
    return this.to('DescribeIdentityProviderConfig');
  }

  /**
   * Grants permission to retrieve descriptive information about an Amazon EKS nodegroup
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeNodegroup.html
   */
  public toDescribeNodegroup() {
    return this.to('DescribeNodegroup');
  }

  /**
   * Grants permission to retrieve a given update for a given Amazon EKS cluster/nodegroup/add-on (in the specified or default region)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeUpdate.html
   */
  public toDescribeUpdate() {
    return this.to('DescribeUpdate');
  }

  /**
   * Grants permission to delete an asssociated Idp config
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DisassociateIdentityProviderConfig.html
   */
  public toDisassociateIdentityProviderConfig() {
    return this.to('DisassociateIdentityProviderConfig');
  }

  /**
   * Grants permission to list the Amazon EKS add-ons in your AWS account (in the specified or default region) for a given cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html
   */
  public toListAddons() {
    return this.to('ListAddons');
  }

  /**
   * Grants permission to list the Amazon EKS clusters in your AWS account (in the specified or default region)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListClusters.html
   */
  public toListClusters() {
    return this.to('ListClusters');
  }

  /**
   * Grants permission to list the AWS Fargate profiles in your AWS account (in the specified or default region) associated with a given cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListFargateProfiles.html
   */
  public toListFargateProfiles() {
    return this.to('ListFargateProfiles');
  }

  /**
   * Grants permission to list the Idp configs in your AWS account (in the specified or default region) associated with a given cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListIdentityProviderConfigs.html
   */
  public toListIdentityProviderConfigs() {
    return this.to('ListIdentityProviderConfigs');
  }

  /**
   * Grants permission to list the Amazon EKS nodegroups in your AWS account (in the specified or default region) attached to given cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListNodegroups.html
   */
  public toListNodegroups() {
    return this.to('ListNodegroups');
  }

  /**
   * Grants permission to list tags for the specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list the updates for a given Amazon EKS cluster/nodegroup/add-on (in the specified or default region)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListUpdates.html
   */
  public toListUpdates() {
    return this.to('ListUpdates');
  }

  /**
   * Grants permission to register an External cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_RegisterCluster.html
   */
  public toRegisterCluster() {
    return this.to('RegisterCluster');
  }

  /**
   * Grants permission to tag the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update Amazon EKS add-on configurations, such as the VPC-CNI version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html
   */
  public toUpdateAddon() {
    return this.to('UpdateAddon');
  }

  /**
   * Grants permission to update Amazon EKS cluster configurations (eg: API server endpoint access)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateClusterConfig.html
   */
  public toUpdateClusterConfig() {
    return this.to('UpdateClusterConfig');
  }

  /**
   * Grants permission to update the Kubernetes version of an Amazon EKS cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateClusterVersion.html
   */
  public toUpdateClusterVersion() {
    return this.to('UpdateClusterVersion');
  }

  /**
   * Grants permission to update Amazon EKS nodegroup configurations (eg: min/max/desired capacity or labels)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateNodegroupConfig.html
   */
  public toUpdateNodegroupConfig() {
    return this.to('UpdateNodegroupConfig');
  }

  /**
   * Grants permission to update the Kubernetes version of an Amazon EKS nodegroup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateNodegroupVersion.html
   */
  public toUpdateNodegroupVersion() {
    return this.to('UpdateNodegroupVersion');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'AccessKubernetesApi',
      'DescribeAddon',
      'DescribeAddonVersions',
      'DescribeCluster',
      'DescribeFargateProfile',
      'DescribeIdentityProviderConfig',
      'DescribeNodegroup',
      'DescribeUpdate',
      'ListTagsForResource'
    ],
    Write: [
      'AssociateEncryptionConfig',
      'AssociateIdentityProviderConfig',
      'CreateAddon',
      'CreateCluster',
      'CreateFargateProfile',
      'CreateNodegroup',
      'DeleteAddon',
      'DeleteCluster',
      'DeleteFargateProfile',
      'DeleteNodegroup',
      'DeregisterCluster',
      'DisassociateIdentityProviderConfig',
      'RegisterCluster',
      'UpdateAddon',
      'UpdateClusterConfig',
      'UpdateClusterVersion',
      'UpdateNodegroupConfig',
      'UpdateNodegroupVersion'
    ],
    List: [
      'ListAddons',
      'ListClusters',
      'ListFargateProfiles',
      'ListIdentityProviderConfigs',
      'ListNodegroups',
      'ListUpdates'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/clusters.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCluster(clusterName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Eks.defaultPartition }:eks:${ region || '*' }:${ account || '*' }:cluster/${ clusterName }`);
  }

  /**
   * Adds a resource of type nodegroup to the statement
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param nodegroupName - Identifier for the nodegroupName.
   * @param uUID - Identifier for the uUID.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNodegroup(clusterName: string, nodegroupName: string, uUID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Eks.defaultPartition }:eks:${ region || '*' }:${ account || '*' }:nodegroup/${ clusterName }/${ nodegroupName }/${ uUID }`);
  }

  /**
   * Adds a resource of type addon to the statement
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/managed-addons.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param addonName - Identifier for the addonName.
   * @param uUID - Identifier for the uUID.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAddon(clusterName: string, addonName: string, uUID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Eks.defaultPartition }:eks:${ region || '*' }:${ account || '*' }:addon/${ clusterName }/${ addonName }/${ uUID }`);
  }

  /**
   * Adds a resource of type fargateprofile to the statement
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param fargateProfileName - Identifier for the fargateProfileName.
   * @param uUID - Identifier for the uUID.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFargateprofile(clusterName: string, fargateProfileName: string, uUID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Eks.defaultPartition }:eks:${ region || '*' }:${ account || '*' }:fargateprofile/${ clusterName }/${ fargateProfileName }/${ uUID }`);
  }

  /**
   * Adds a resource of type identityproviderconfig to the statement
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param identityProviderType - Identifier for the identityProviderType.
   * @param identityProviderConfigName - Identifier for the identityProviderConfigName.
   * @param uUID - Identifier for the uUID.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIdentityproviderconfig(clusterName: string, identityProviderType: string, identityProviderConfigName: string, uUID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Eks.defaultPartition }:eks:${ region || '*' }:${ account || '*' }:identityproviderconfig/${ clusterName }/${ identityProviderType }/${ identityProviderConfigName }/${ uUID }`);
  }

  /**
   * Filters access by the clientId present in the associateIdentityProviderConfig request the user makes to the EKS service
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to actions:
   * - .toAssociateIdentityProviderConfig()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifClientId(value: string | string[], operator?: Operator | string) {
    return this.if(`clientId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the issuerUrl present in the associateIdentityProviderConfig request the user makes to the EKS service
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to actions:
   * - .toAssociateIdentityProviderConfig()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIssuerUrl(value: string | string[], operator?: Operator | string) {
    return this.if(`issuerUrl`, value, operator || 'StringLike');
  }
}
