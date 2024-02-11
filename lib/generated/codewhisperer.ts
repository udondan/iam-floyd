import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [codewhisperer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodewhisperer.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Codewhisperer extends PolicyStatement {
  public servicePrefix = 'codewhisperer';

  /**
   * Statement provider for service [codewhisperer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodewhisperer.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to configure vended log delivery for CodeWhisperer customization resource
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/monitoring-overview.html
   */
  public toAllowVendedLogDeliveryForResource() {
    return this.to('AllowVendedLogDeliveryForResource');
  }

  /**
   * Grants permission to invoke AssociateCustomizationPermission on CodeWhisperer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/security_iam_service-with-iam.html
   */
  public toAssociateCustomizationPermission() {
    return this.to('AssociateCustomizationPermission');
  }

  /**
   * Grants permission to invoke CreateCustomization on CodeWhisperer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/security_iam_service-with-iam.html
   */
  public toCreateCustomization() {
    return this.to('CreateCustomization');
  }

  /**
   * Grants permission to invoke CreateProfile on CodeWhisperer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/security_iam_service-with-iam.html
   */
  public toCreateProfile() {
    return this.to('CreateProfile');
  }

  /**
   * Grants permission to invoke DeleteCustomization on CodeWhisperer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/security_iam_service-with-iam.html
   */
  public toDeleteCustomization() {
    return this.to('DeleteCustomization');
  }

  /**
   * Grants permission to invoke DeleteProfile on CodeWhisperer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/security_iam_service-with-iam.html
   */
  public toDeleteProfile() {
    return this.to('DeleteProfile');
  }

  /**
   * Grants permission to invoke DisassociateCustomizationPermission on CodeWhisperer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/security_iam_service-with-iam.html
   */
  public toDisassociateCustomizationPermission() {
    return this.to('DisassociateCustomizationPermission');
  }

  /**
   * Grants permission to invoke GenerateRecommendations on CodeWhisperer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/security_iam_service-with-iam.html
   */
  public toGenerateRecommendations() {
    return this.to('GenerateRecommendations');
  }

  /**
   * Grants permission to invoke GetCustomization on CodeWhisperer
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/security_iam_service-with-iam.html
   */
  public toGetCustomization() {
    return this.to('GetCustomization');
  }

  /**
   * Grants permission to invoke ListCustomizationPermissions on CodeWhisperer
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/security_iam_service-with-iam.html
   */
  public toListCustomizationPermissions() {
    return this.to('ListCustomizationPermissions');
  }

  /**
   * Grants permission to invoke ListCustomizationVersions on CodeWhisperer
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/security_iam_service-with-iam.html
   */
  public toListCustomizationVersions() {
    return this.to('ListCustomizationVersions');
  }

  /**
   * Grants permission to invoke ListCustomizations on CodeWhisperer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/security_iam_service-with-iam.html
   */
  public toListCustomizations() {
    return this.to('ListCustomizations');
  }

  /**
   * Grants permission to invoke ListProfiles on CodeWhisperer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/security_iam_service-with-iam.html
   */
  public toListProfiles() {
    return this.to('ListProfiles');
  }

  /**
   * Grants permission to invoke ListTagsForResource on CodeWhisperer
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/security_iam_service-with-iam.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to invoke TagResource on CodeWhisperer
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/security_iam_service-with-iam.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to invoke UntagResource on CodeWhisperer
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/security_iam_service-with-iam.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to invoke UpdateCustomization on CodeWhisperer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/security_iam_service-with-iam.html
   */
  public toUpdateCustomization() {
    return this.to('UpdateCustomization');
  }

  /**
   * Grants permission to invoke UpdateProfile on CodeWhisperer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/security_iam_service-with-iam.html
   */
  public toUpdateProfile() {
    return this.to('UpdateProfile');
  }

  protected accessLevelList: AccessLevelList = {
    'Permissions management': [
      'AllowVendedLogDeliveryForResource'
    ],
    Write: [
      'AssociateCustomizationPermission',
      'CreateCustomization',
      'CreateProfile',
      'DeleteCustomization',
      'DeleteProfile',
      'DisassociateCustomizationPermission',
      'UpdateCustomization',
      'UpdateProfile'
    ],
    Read: [
      'GenerateRecommendations',
      'GetCustomization'
    ],
    List: [
      'ListCustomizationPermissions',
      'ListCustomizationVersions',
      'ListCustomizations',
      'ListProfiles',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type profile to the statement
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/as-whisper-admin.html#about-profiles
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProfile(identifier: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || Codewhisperer.defaultPartition }:codewhisperer::${ account || '*' }:profile/${ identifier }`);
  }

  /**
   * Adds a resource of type customization to the statement
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/as-whisper-admin.html#about-customizations
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCustomization(identifier: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || Codewhisperer.defaultPartition }:codewhisperer::${ account || '*' }:customization/${ identifier }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/codewhisperer-setup-enterprise-admin.html
   *
   * Applies to actions:
   * - .toCreateCustomization()
   * - .toCreateProfile()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tags associated with CodeWhisperer resource
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/codewhisperer-setup-enterprise-admin.html
   *
   * Applies to actions:
   * - .toAllowVendedLogDeliveryForResource()
   * - .toAssociateCustomizationPermission()
   * - .toDeleteCustomization()
   * - .toDeleteProfile()
   * - .toDisassociateCustomizationPermission()
   * - .toGetCustomization()
   * - .toListCustomizationPermissions()
   * - .toListCustomizationVersions()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateCustomization()
   * - .toUpdateProfile()
   *
   * Applies to resource types:
   * - profile
   * - customization
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/userguide/codewhisperer-setup-enterprise-admin.html
   *
   * Applies to actions:
   * - .toCreateCustomization()
   * - .toCreateProfile()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
