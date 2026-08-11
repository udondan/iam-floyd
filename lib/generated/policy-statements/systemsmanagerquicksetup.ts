import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [ssm-quicksetup](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerquicksetup.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SsmQuicksetup extends PolicyStatement {
  public servicePrefix = 'ssm-quicksetup';

  /**
   * Statement provider for service [ssm-quicksetup](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerquicksetup.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a Quick Setup configuration manager resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quick-setup/latest/APIReference/API_CreateConfigurationManager.html
   */
  public toCreateConfigurationManager() {
    return this.to('CreateConfigurationManager');
  }

  /**
   * Grants permission to delete a configuration manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quick-setup/latest/APIReference/API_DeleteConfigurationManager.html
   */
  public toDeleteConfigurationManager() {
    return this.to('DeleteConfigurationManager');
  }

  /**
   * Grants permission to get Quick Setup configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quick-setup/latest/APIReference/API_GetConfiguration.html
   */
  public toGetConfiguration() {
    return this.to('GetConfiguration');
  }

  /**
   * Grants permission to get a configuration manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quick-setup/latest/APIReference/API_GetConfigurationManager.html
   */
  public toGetConfigurationManager() {
    return this.to('GetConfigurationManager');
  }

  /**
   * Grants permission to get settings configured for Quick Setup in the requesting AWS account and AWS Region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quick-setup/latest/APIReference/API_GetServiceSettings.html
   */
  public toGetServiceSettings() {
    return this.to('GetServiceSettings');
  }

  /**
   * Grants permission to list Quick Setup configuration managers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quick-setup/latest/APIReference/API_ListConfigurationManagers.html
   */
  public toListConfigurationManagers() {
    return this.to('ListConfigurationManagers');
  }

  /**
   * Grants permission to list Quick Setup configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/quick-setup/latest/APIReference/API_ListConfigurations.html
   */
  public toListConfigurations() {
    return this.to('ListConfigurations');
  }

  /**
   * Grants permission to list the available Quick Setup types
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quick-setup/latest/APIReference/API_ListQuickSetupTypes.html
   */
  public toListQuickSetupTypes() {
    return this.to('ListQuickSetupTypes');
  }

  /**
   * Grants permission to list tags assigned to the resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/quick-setup/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to Assign key-value pairs of metadata to AWS resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/quick-setup/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/quick-setup/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a Quick Setup configuration definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quick-setup/latest/APIReference/API_UpdateConfigurationDefinition.html
   */
  public toUpdateConfigurationDefinition() {
    return this.to('UpdateConfigurationDefinition');
  }

  /**
   * Grants permission to update a Quick Setup configuration manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quick-setup/latest/APIReference/API_UpdateConfigurationManager.html
   */
  public toUpdateConfigurationManager() {
    return this.to('UpdateConfigurationManager');
  }

  /**
   * Grants permission to update settings configured for Quick Setup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/quick-setup/latest/APIReference/API_UpdateServiceSettings.html
   */
  public toUpdateServiceSettings() {
    return this.to('UpdateServiceSettings');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateConfigurationManager',
      'DeleteConfigurationManager',
      'UpdateConfigurationDefinition',
      'UpdateConfigurationManager',
      'UpdateServiceSettings'
    ],
    Read: [
      'GetConfiguration',
      'GetConfigurationManager',
      'GetServiceSettings',
      'ListQuickSetupTypes',
      'ListTagsForResource'
    ],
    List: [
      'ListConfigurationManagers',
      'ListConfigurations'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type configuration-manager to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-quick-setup.html
   *
   * @param configurationManagerId - Identifier for the configurationManagerId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfigurationManager(configurationManagerId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ssm-quicksetup:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:configuration-manager/${ configurationManagerId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateConfigurationManager()
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
   * - .toCreateConfigurationManager()
   *
   * Applies to resource types:
   * - configuration-manager
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
   * - .toCreateConfigurationManager()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
