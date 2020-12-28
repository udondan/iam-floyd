import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [eks](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerserviceforkubernetes.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Eks extends PolicyStatement {
  public servicePrefix = 'eks';

  /**
   * Statement provider for service [eks](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticcontainerserviceforkubernetes.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Permission to view Kubernetes objects via AWS EKS console
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/view-workloads.html
   */
  public toAccessKubernetesApi() {
    return this.to('AccessKubernetesApi');
  }

  /**
   * Creates an Amazon EKS add-on.
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
   * Creates an Amazon EKS cluster.
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
   * Creates an AWS Fargate profile.
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
   * Creates an Amazon EKS Nodegroup.
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
   * Deletes an Amazon EKS add-on.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteAddon.html
   */
  public toDeleteAddon() {
    return this.to('DeleteAddon');
  }

  /**
   * Deletes an Amazon EKS cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteCluster.html
   */
  public toDeleteCluster() {
    return this.to('DeleteCluster');
  }

  /**
   * Deletes an AWS Fargate profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteFargateProfile.html
   */
  public toDeleteFargateProfile() {
    return this.to('DeleteFargateProfile');
  }

  /**
   * Deletes an Amazon EKS Nodegroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DeleteNodegroup.html
   */
  public toDeleteNodegroup() {
    return this.to('DeleteNodegroup');
  }

  /**
   * Returns descriptive information about an Amazon EKS add-on.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddon.html
   */
  public toDescribeAddon() {
    return this.to('DescribeAddon');
  }

  /**
   * Returns descriptive version information about the add-ons that Amazon EKS Add-ons supports.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html
   */
  public toDescribeAddonVersions() {
    return this.to('DescribeAddonVersions');
  }

  /**
   * Returns descriptive information about an Amazon EKS cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeCluster.html
   */
  public toDescribeCluster() {
    return this.to('DescribeCluster');
  }

  /**
   * Returns descriptive information about an AWS Fargate profile associated with a cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeFargateProfile.html
   */
  public toDescribeFargateProfile() {
    return this.to('DescribeFargateProfile');
  }

  /**
   * Returns descriptive information about an Amazon EKS nodegroup.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeNodegroup.html
   */
  public toDescribeNodegroup() {
    return this.to('DescribeNodegroup');
  }

  /**
   * Describes a given update for a given Amazon EKS cluster/nodegroup/add-on (in the specified or default region).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeUpdate.html
   */
  public toDescribeUpdate() {
    return this.to('DescribeUpdate');
  }

  /**
   * Lists the Amazon EKS add-ons in your AWS account (in the specified or default region) for a given cluster.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html
   */
  public toListAddons() {
    return this.to('ListAddons');
  }

  /**
   * Lists the Amazon EKS clusters in your AWS account (in the specified or default region).
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListClusters.html
   */
  public toListClusters() {
    return this.to('ListClusters');
  }

  /**
   * Lists the AWS Fargate profiles in your AWS account (in the specified or default region) associated with a given cluster.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListFargateProfiles.html
   */
  public toListFargateProfiles() {
    return this.to('ListFargateProfiles');
  }

  /**
   * Lists the Amazon EKS nodegroups in your AWS account (in the specified or default region) attached to given cluster.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListNodegroups.html
   */
  public toListNodegroups() {
    return this.to('ListNodegroups');
  }

  /**
   * List tags for the specified resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Lists the updates for a given Amazon EKS cluster/nodegroup/add-on (in the specified or default region).
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_ListUpdates.html
   */
  public toListUpdates() {
    return this.to('ListUpdates');
  }

  /**
   * Tags the specified resource.
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
   * Untags the specified resource.
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
   * Update Amazon EKS add-on configurations, such as the VPC-CNI version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html
   */
  public toUpdateAddon() {
    return this.to('UpdateAddon');
  }

  /**
   * Update Amazon EKS cluster configurations (eg: API server endpoint access).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateClusterConfig.html
   */
  public toUpdateClusterConfig() {
    return this.to('UpdateClusterConfig');
  }

  /**
   * Update the Kubernetes version of an Amazon EKS cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateClusterVersion.html
   */
  public toUpdateClusterVersion() {
    return this.to('UpdateClusterVersion');
  }

  /**
   * Update Amazon EKS nodegroup configurations (eg: min/max/desired capacity or labels).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateNodegroupConfig.html
   */
  public toUpdateNodegroupConfig() {
    return this.to('UpdateNodegroupConfig');
  }

  /**
   * Update the Kubernetes version of an Amazon EKS nodegroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateNodegroupVersion.html
   */
  public toUpdateNodegroupVersion() {
    return this.to('UpdateNodegroupVersion');
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "AccessKubernetesApi",
      "DescribeAddon",
      "DescribeAddonVersions",
      "DescribeCluster",
      "DescribeFargateProfile",
      "DescribeNodegroup",
      "DescribeUpdate"
    ],
    "Write": [
      "CreateAddon",
      "CreateCluster",
      "CreateFargateProfile",
      "CreateNodegroup",
      "DeleteAddon",
      "DeleteCluster",
      "DeleteFargateProfile",
      "DeleteNodegroup",
      "UpdateAddon",
      "UpdateClusterConfig",
      "UpdateClusterVersion",
      "UpdateNodegroupConfig",
      "UpdateNodegroupVersion"
    ],
    "List": [
      "ListAddons",
      "ListClusters",
      "ListFargateProfiles",
      "ListNodegroups",
      "ListTagsForResource",
      "ListUpdates"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCluster(clusterName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:eks:${Region}:${Account}:cluster/${ClusterName}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNodegroup(clusterName: string, nodegroupName: string, uUID: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:eks:${Region}:${Account}:nodegroup/${ClusterName}/${NodegroupName}/${UUID}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${NodegroupName}', nodegroupName);
    arn = arn.replace('${UUID}', uUID);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAddon(clusterName: string, addonName: string, uUID: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:eks:${Region}:${Account}:addon/${ClusterName}/${AddonName}/${UUID}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${AddonName}', addonName);
    arn = arn.replace('${UUID}', uUID);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFargateprofile(clusterName: string, fargateProfileName: string, uUID: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:eks:${Region}:${Account}:fargateprofile/${ClusterName}/${FargateProfileName}/${UUID}';
    arn = arn.replace('${ClusterName}', clusterName);
    arn = arn.replace('${FargateProfileName}', fargateProfileName);
    arn = arn.replace('${UUID}', uUID);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
