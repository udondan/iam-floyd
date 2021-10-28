import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [mediapackage-vod](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediapackagevod.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class MediapackageVod extends PolicyStatement {
  public servicePrefix = 'mediapackage-vod';

  /**
   * Statement provider for service [mediapackage-vod](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediapackagevod.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to configure egress access logs for a PackagingGroup
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups-id-configure_logs.html#packaging_groups-id-configure_logsput
   */
  public toConfigureLogs() {
    return this.to('ConfigureLogs');
  }

  /**
   * Grants permission to create an asset in AWS Elemental MediaPackage
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets.html#assetspost
   */
  public toCreateAsset() {
    return this.to('CreateAsset');
  }

  /**
   * Grants permission to create a packaging configuration in AWS Elemental MediaPackage
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations.html#packaging_configurationspost
   */
  public toCreatePackagingConfiguration() {
    return this.to('CreatePackagingConfiguration');
  }

  /**
   * Grants permission to create a packaging group in AWS Elemental MediaPackage
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups.html#packaging_groupspost
   */
  public toCreatePackagingGroup() {
    return this.to('CreatePackagingGroup');
  }

  /**
   * Grants permission to delete an asset in AWS Elemental MediaPackage
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets-id.html#assets-iddelete
   */
  public toDeleteAsset() {
    return this.to('DeleteAsset');
  }

  /**
   * Grants permission to delete a packaging configuration in AWS Elemental MediaPackage
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations-id.html#packaging_configurations-iddelete
   */
  public toDeletePackagingConfiguration() {
    return this.to('DeletePackagingConfiguration');
  }

  /**
   * Grants permission to delete a packaging group in AWS Elemental MediaPackage
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups-id.html#packaging_groups-iddelete
   */
  public toDeletePackagingGroup() {
    return this.to('DeletePackagingGroup');
  }

  /**
   * Grants permission to view the details of an asset in AWS Elemental MediaPackage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets-id.html#assets-idget
   */
  public toDescribeAsset() {
    return this.to('DescribeAsset');
  }

  /**
   * Grants permission to view the details of a packaging configuration in AWS Elemental MediaPackage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations-id.html#packaging_configurations-idget
   */
  public toDescribePackagingConfiguration() {
    return this.to('DescribePackagingConfiguration');
  }

  /**
   * Grants permission to view the details of a packaging group in AWS Elemental MediaPackage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups-id.html#packaging_groups-idget
   */
  public toDescribePackagingGroup() {
    return this.to('DescribePackagingGroup');
  }

  /**
   * Grants permission to view a list of assets in AWS Elemental MediaPackage
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/assets.html#assetsget
   */
  public toListAssets() {
    return this.to('ListAssets');
  }

  /**
   * Grants permission to view a list of packaging configurations in AWS Elemental MediaPackage
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_configurations.html#packaging_configurationsget
   */
  public toListPackagingConfigurations() {
    return this.to('ListPackagingConfigurations');
  }

  /**
   * Grants permission to view a list of packaging groups in AWS Elemental MediaPackage
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups.html#packaging_groupsget
   */
  public toListPackagingGroups() {
    return this.to('ListPackagingGroups');
  }

  /**
   * Grants permission to list the tags assigned to a PackagingGroup, PackagingConfiguration, or Asset.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/tags-resource-arn.html#tags-resource-arnget
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to assign tags to a PackagingGroup, PackagingConfiguration, or Asset.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/tags-resource-arn.html#tags-resource-arnpost
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to delete tags from a PackagingGroup, PackagingConfiguration, or Asset.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/tags-resource-arn.html#tags-resource-arndelete
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a packaging group in AWS Elemental MediaPackage
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediapackage-vod/latest/apireference/packaging_groups-id.html#packaging_groups-idput
   */
  public toUpdatePackagingGroup() {
    return this.to('UpdatePackagingGroup');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ConfigureLogs',
      'CreateAsset',
      'CreatePackagingConfiguration',
      'CreatePackagingGroup',
      'DeleteAsset',
      'DeletePackagingConfiguration',
      'DeletePackagingGroup',
      'UpdatePackagingGroup'
    ],
    Read: [
      'DescribeAsset',
      'DescribePackagingConfiguration',
      'DescribePackagingGroup',
      'ListTagsForResource'
    ],
    List: [
      'ListAssets',
      'ListPackagingConfigurations',
      'ListPackagingGroups'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type assets to the statement
   *
   * https://docs.aws.amazon.com/mediapackage/latest/ug/asset.html
   *
   * @param assetIdentifier - Identifier for the assetIdentifier.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAssets(assetIdentifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:mediapackage-vod:${ region || '*' }:${ account || '*' }:assets/${ assetIdentifier }`);
  }

  /**
   * Adds a resource of type packaging-configurations to the statement
   *
   * https://docs.aws.amazon.com/mediapackage/latest/ug/pkg-cfig.html
   *
   * @param packagingConfigurationIdentifier - Identifier for the packagingConfigurationIdentifier.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPackagingConfigurations(packagingConfigurationIdentifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:mediapackage-vod:${ region || '*' }:${ account || '*' }:packaging-configurations/${ packagingConfigurationIdentifier }`);
  }

  /**
   * Adds a resource of type packaging-groups to the statement
   *
   * https://docs.aws.amazon.com/mediapackage/latest/ug/pkg-group.html
   *
   * @param packagingGroupIdentifier - Identifier for the packagingGroupIdentifier.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPackagingGroups(packagingGroupIdentifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:mediapackage-vod:${ region || '*' }:${ account || '*' }:packaging-groups/${ packagingGroupIdentifier }`);
  }
}
