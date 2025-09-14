import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
   * Grants permission to associate an Amazon EKS access policy to an Amazon EKS access entry
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyArn()
   * - .ifNamespaces()
   * - .ifAccessScope()
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_AssociateAccessPolicy.html
   */
  public toAssociateAccessPolicy() {
    return this.to('AssociateAccessPolicy');
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
   * Grants permission to create an Amazon EKS access entry
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifPrincipalArn()
   * - .ifKubernetesGroups()
   * - .ifUsername()
   * - .ifAccessEntryType()
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateAccessEntry.html
   */
  public toCreateAccessEntry() {
    return this.to('CreateAccessEntry');
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
   * - .ifBootstrapClusterCreatorAdminPermissions()
   * - .ifBootstrapSelfManagedAddons()
   * - .ifAuthenticationMode()
   * - .ifSupportType()
   * - .ifComputeConfigEnabled()
   * - .ifElasticLoadBalancingEnabled()
   * - .ifBlockStorageEnabled()
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateCluster.html
   */
  public toCreateCluster() {
    return this.to('CreateCluster');
  }

  /**
   * Grants permission to create an EKS Anywhere subscription
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateEksAnywhereSubscription.html
   */
  public toCreateEksAnywhereSubscription() {
    return this.to('CreateEksAnywhereSubscription');
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
   * Grants permission to create an EKS Pod Identity association
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_CreatePodIdentityAssociation.html
   */
  public toCreatePodIdentityAssociation() {
    return this.to('CreatePodIdentityAssociation');
  }

  /**
   * Grants permission to delete an Amazon EKS access entry
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteAccessEntry.html
   */
  public toDeleteAccessEntry() {
    return this.to('DeleteAccessEntry');
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
   * Grants permission to describe an EKS Anywhere subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteEksAnywhereSubscription.html
   */
  public toDeleteEksAnywhereSubscription() {
    return this.to('DeleteEksAnywhereSubscription');
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
   * Grants permission to delete an EKS Pod Identity association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DeletePodIdentityAssociation.html
   */
  public toDeletePodIdentityAssociation() {
    return this.to('DeletePodIdentityAssociation');
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
   * Grants permission to describe an Amazon EKS access entry
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAccessEntry.html
   */
  public toDescribeAccessEntry() {
    return this.to('DescribeAccessEntry');
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
   * Grants permission to list configuration options about an Amazon EKS add-on
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonConfiguration.html
   */
  public toDescribeAddonConfiguration() {
    return this.to('DescribeAddonConfiguration');
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
   * Grants permission to retrieve descriptive information about Kubernetes versions that Amazon EKS clusters support
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeClusterVersions.html
   */
  public toDescribeClusterVersions() {
    return this.to('DescribeClusterVersions');
  }

  /**
   * Grants permission to describe an EKS Anywhere subscription
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeEksAnywhereSubscription.html
   */
  public toDescribeEksAnywhereSubscription() {
    return this.to('DescribeEksAnywhereSubscription');
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
   * Grants permission to retrieve descriptive information of a detected insight for a specified cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeInsight.html
   */
  public toDescribeInsight() {
    return this.to('DescribeInsight');
  }

  /**
   * Grants permission to retrieve the status of the latest on-demand cluster insights refresh operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeInsightsRefresh.html
   */
  public toDescribeInsightsRefresh() {
    return this.to('DescribeInsightsRefresh');
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
   * Grants permission to describe an EKS Pod Identity association
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribePodIdentityAssociation.html
   */
  public toDescribePodIdentityAssociation() {
    return this.to('DescribePodIdentityAssociation');
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
   * Grants permission to disassociate an Amazon EKS access policy from an Amazon EKS acces entry
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPolicyArn()
   * - .ifNamespaces()
   * - .ifAccessScope()
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DisassociateAccessPolicy.html
   */
  public toDisassociateAccessPolicy() {
    return this.to('DisassociateAccessPolicy');
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
   * Grants permission to list all Amazon EKS access entries
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAccessEntries.html
   */
  public toListAccessEntries() {
    return this.to('ListAccessEntries');
  }

  /**
   * Grants permission to list Amazon EKS access policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAccessPolicies.html
   */
  public toListAccessPolicies() {
    return this.to('ListAccessPolicies');
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
   * Grants permission to list associated access policy on and Amazon EKS access entry
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAssociatedAccessPolicies.html
   */
  public toListAssociatedAccessPolicies() {
    return this.to('ListAssociatedAccessPolicies');
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
   * Grants permission to list dashboard data. The Amazon EKS Dashboard aggregates information about cluster resources across multiple accounts and regions. The dashboard includes information about EC2 Instances and EKS Cluster versions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListDashboardData.html
   */
  public toListDashboardData() {
    return this.to('ListDashboardData');
  }

  /**
   * Grants permission to list dashboard resources. The Amazon EKS Dashboard aggregates information about cluster resources across multiple accounts and regions. The dashboard includes information about EC2 Instances and EKS Cluster versions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListDashboardResources.html
   */
  public toListDashboardResources() {
    return this.to('ListDashboardResources');
  }

  /**
   * Grants permission to list EKS Anywhere subscriptions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListEksAnywhereSubscriptions.html
   */
  public toListEksAnywhereSubscriptions() {
    return this.to('ListEksAnywhereSubscriptions');
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
   * Grants permission to list all detected insights for a specified cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListInsights.html
   */
  public toListInsights() {
    return this.to('ListInsights');
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
   * Grants permission to list EKS Pod Identity associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListPodIdentityAssociations.html
   */
  public toListPodIdentityAssociations() {
    return this.to('ListPodIdentityAssociations');
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
   * Grants permission to initiate an on-demand refresh operation for cluster insights, getting the latest analysis outside of the standard refresh schedule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_StartInsightsRefresh.html
   */
  public toStartInsightsRefresh() {
    return this.to('StartInsightsRefresh');
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
   * Grants permission to update an Amazon EKS access entry
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAccessEntry.html
   */
  public toUpdateAccessEntry() {
    return this.to('UpdateAccessEntry');
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
   * Possible conditions:
   * - .ifAuthenticationMode()
   * - .ifSupportType()
   * - .ifComputeConfigEnabled()
   * - .ifElasticLoadBalancingEnabled()
   * - .ifBlockStorageEnabled()
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
   * Grants permission to update an EKS Anywhere subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateEksAnywhereSubscription.html
   */
  public toUpdateEksAnywhereSubscription() {
    return this.to('UpdateEksAnywhereSubscription');
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

  /**
   * Grants permission to update an EKS Pod Identity association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdatePodIdentityAssociation.html
   */
  public toUpdatePodIdentityAssociation() {
    return this.to('UpdatePodIdentityAssociation');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'AccessKubernetesApi',
      'DescribeAccessEntry',
      'DescribeAddon',
      'DescribeAddonConfiguration',
      'DescribeAddonVersions',
      'DescribeCluster',
      'DescribeClusterVersions',
      'DescribeEksAnywhereSubscription',
      'DescribeFargateProfile',
      'DescribeIdentityProviderConfig',
      'DescribeInsight',
      'DescribeInsightsRefresh',
      'DescribeNodegroup',
      'DescribePodIdentityAssociation',
      'DescribeUpdate',
      'ListDashboardData',
      'ListDashboardResources',
      'ListTagsForResource'
    ],
    Write: [
      'AssociateAccessPolicy',
      'AssociateEncryptionConfig',
      'AssociateIdentityProviderConfig',
      'CreateAccessEntry',
      'CreateAddon',
      'CreateCluster',
      'CreateEksAnywhereSubscription',
      'CreateFargateProfile',
      'CreateNodegroup',
      'CreatePodIdentityAssociation',
      'DeleteAccessEntry',
      'DeleteAddon',
      'DeleteCluster',
      'DeleteEksAnywhereSubscription',
      'DeleteFargateProfile',
      'DeleteNodegroup',
      'DeletePodIdentityAssociation',
      'DeregisterCluster',
      'DisassociateAccessPolicy',
      'DisassociateIdentityProviderConfig',
      'RegisterCluster',
      'StartInsightsRefresh',
      'UpdateAccessEntry',
      'UpdateAddon',
      'UpdateClusterConfig',
      'UpdateClusterVersion',
      'UpdateEksAnywhereSubscription',
      'UpdateNodegroupConfig',
      'UpdateNodegroupVersion',
      'UpdatePodIdentityAssociation'
    ],
    List: [
      'ListAccessEntries',
      'ListAccessPolicies',
      'ListAddons',
      'ListAssociatedAccessPolicies',
      'ListClusters',
      'ListEksAnywhereSubscriptions',
      'ListFargateProfiles',
      'ListIdentityProviderConfigs',
      'ListInsights',
      'ListNodegroups',
      'ListPodIdentityAssociations',
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
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCluster(clusterName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:eks:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:cluster/${ clusterName }`);
  }

  /**
   * Adds a resource of type nodegroup to the statement
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param nodegroupName - Identifier for the nodegroupName.
   * @param uUID - Identifier for the uUID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNodegroup(clusterName: string, nodegroupName: string, uUID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:eks:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:nodegroup/${ clusterName }/${ nodegroupName }/${ uUID }`);
  }

  /**
   * Adds a resource of type addon to the statement
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param addonName - Identifier for the addonName.
   * @param uUID - Identifier for the uUID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAddon(clusterName: string, addonName: string, uUID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:eks:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:addon/${ clusterName }/${ addonName }/${ uUID }`);
  }

  /**
   * Adds a resource of type fargateprofile to the statement
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param fargateProfileName - Identifier for the fargateProfileName.
   * @param uUID - Identifier for the uUID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFargateprofile(clusterName: string, fargateProfileName: string, uUID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:eks:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:fargateprofile/${ clusterName }/${ fargateProfileName }/${ uUID }`);
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
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIdentityproviderconfig(clusterName: string, identityProviderType: string, identityProviderConfigName: string, uUID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:eks:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:identityproviderconfig/${ clusterName }/${ identityProviderType }/${ identityProviderConfigName }/${ uUID }`);
  }

  /**
   * Adds a resource of type eks-anywhere-subscription to the statement
   *
   * https://anywhere.eks.amazonaws.com/docs/clustermgmt/support/cluster-license/
   *
   * @param uUID - Identifier for the uUID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEksAnywhereSubscription(uUID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:eks:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:eks-anywhere-subscription/${ uUID }`);
  }

  /**
   * Adds a resource of type podidentityassociation to the statement
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/pod-identities.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param uUID - Identifier for the uUID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPodidentityassociation(clusterName: string, uUID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:eks:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:podidentityassociation/${ clusterName }/${ uUID }`);
  }

  /**
   * Adds a resource of type access-entry to the statement
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param iamIdentityType - Identifier for the iamIdentityType.
   * @param iamIdentityAccountID - Identifier for the iamIdentityAccountID.
   * @param iamIdentityName - Identifier for the iamIdentityName.
   * @param uUID - Identifier for the uUID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAccessEntryType()
   * - .ifClusterName()
   * - .ifKubernetesGroups()
   * - .ifPrincipalArn()
   * - .ifUsername()
   */
  public onAccessEntry(clusterName: string, iamIdentityType: string, iamIdentityAccountID: string, iamIdentityName: string, uUID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:eks:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:access-entry/${ clusterName }/${ iamIdentityType }/${ iamIdentityAccountID }/${ iamIdentityName }/${ uUID }`);
  }

  /**
   * Adds a resource of type access-policy to the statement
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/access-policies.html
   *
   * @param accessPolicyName - Identifier for the accessPolicyName.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAccessPolicy(accessPolicyName: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:eks::aws:cluster-access-policy/${ accessPolicyName }`);
  }

  /**
   * Adds a resource of type dashboard to the statement
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/cluster-dashboard.html
   *
   * @param dashboardName - Identifier for the dashboardName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDashboard(dashboardName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:eks:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:dashboard/${ dashboardName }`);
  }

  /**
   * Filters access by a key that is present in the request the user makes to the EKS service
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags
   *
   * Applies to actions:
   * - .toAssociateIdentityProviderConfig()
   * - .toCreateAccessEntry()
   * - .toCreateAddon()
   * - .toCreateCluster()
   * - .toCreateEksAnywhereSubscription()
   * - .toCreateFargateProfile()
   * - .toCreateNodegroup()
   * - .toCreatePodIdentityAssociation()
   * - .toRegisterCluster()
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
   * Filters access by a tag key and value pair
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags
   *
   * Applies to resource types:
   * - cluster
   * - nodegroup
   * - addon
   * - fargateprofile
   * - identityproviderconfig
   * - eks-anywhere-subscription
   * - podidentityassociation
   * - access-entry
   * - dashboard
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the list of all the tag key names present in the request the user makes to the EKS service
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags
   *
   * Applies to actions:
   * - .toAssociateIdentityProviderConfig()
   * - .toCreateAccessEntry()
   * - .toCreateAddon()
   * - .toCreateCluster()
   * - .toCreateEksAnywhereSubscription()
   * - .toCreateFargateProfile()
   * - .toCreateNodegroup()
   * - .toCreatePodIdentityAssociation()
   * - .toRegisterCluster()
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
   * Filters access by the access entry type present in the access entry requests the user makes to the EKS service
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to actions:
   * - .toCreateAccessEntry()
   *
   * Applies to resource types:
   * - access-entry
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAccessEntryType(value: string | string[], operator?: Operator | string) {
    return this.if(`accessEntryType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the accessScope present in the associate / disassociate access policy requests the user makes to the EKS service
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to actions:
   * - .toAssociateAccessPolicy()
   * - .toDisassociateAccessPolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAccessScope(value: string | string[], operator?: Operator | string) {
    return this.if(`accessScope`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the authenticationMode present in the create / update cluster request
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toUpdateClusterConfig()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAuthenticationMode(value: string | string[], operator?: Operator | string) {
    return this.if(`authenticationMode`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the block storage enabled parameter in the create / update cluster request
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toUpdateClusterConfig()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifBlockStorageEnabled(value?: boolean) {
    return this.if(`blockStorageEnabled`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the bootstrapClusterCreatorAdminPermissions present in the create cluster request
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to actions:
   * - .toCreateCluster()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifBootstrapClusterCreatorAdminPermissions(value?: boolean) {
    return this.if(`bootstrapClusterCreatorAdminPermissions`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the bootstrapSelfManagedAddons present in the create cluster request
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to actions:
   * - .toCreateCluster()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifBootstrapSelfManagedAddons(value?: boolean) {
    return this.if(`bootstrapSelfManagedAddons`, (typeof value !== 'undefined' ? value : true), 'Bool');
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
    return this.if(`clientId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the clusterName present in the access entry requests the user makes to the EKS service
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to resource types:
   * - access-entry
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifClusterName(value: string | string[], operator?: Operator | string) {
    return this.if(`clusterName`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the compute config enabled parameter in the create / update cluster request
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toUpdateClusterConfig()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifComputeConfigEnabled(value?: boolean) {
    return this.if(`computeConfigEnabled`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the elastic load balancing enabled parameter in the create / update cluster request
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toUpdateClusterConfig()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifElasticLoadBalancingEnabled(value?: boolean) {
    return this.if(`elasticLoadBalancingEnabled`, (typeof value !== 'undefined' ? value : true), 'Bool');
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
    return this.if(`issuerUrl`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the kubernetesGroups present in the access entry requests the user makes to the EKS service
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to actions:
   * - .toCreateAccessEntry()
   *
   * Applies to resource types:
   * - access-entry
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifKubernetesGroups(value: string | string[], operator?: Operator | string) {
    return this.if(`kubernetesGroups`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the namespaces present in the associate / disassociate access policy requests the user makes to the EKS service
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to actions:
   * - .toAssociateAccessPolicy()
   * - .toDisassociateAccessPolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifNamespaces(value: string | string[], operator?: Operator | string) {
    return this.if(`namespaces`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the policyArn present in the access entry requests the user makes to the EKS service
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to actions:
   * - .toAssociateAccessPolicy()
   * - .toDisassociateAccessPolicy()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifPolicyArn(value: string | string[], operator?: Operator | string) {
    return this.if(`policyArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the principalArn present in the access entry requests requests the user makes to the EKS service
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to actions:
   * - .toCreateAccessEntry()
   *
   * Applies to resource types:
   * - access-entry
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifPrincipalArn(value: string | string[], operator?: Operator | string) {
    return this.if(`principalArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the supportType present in the create / update cluster request
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toUpdateClusterConfig()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSupportType(value: string | string[], operator?: Operator | string) {
    return this.if(`supportType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Kubernetes username present in the access entry requests the user makes to the EKS service
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to actions:
   * - .toCreateAccessEntry()
   *
   * Applies to resource types:
   * - access-entry
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUsername(value: string | string[], operator?: Operator | string) {
    return this.if(`username`, value, operator ?? 'StringLike');
  }
}
