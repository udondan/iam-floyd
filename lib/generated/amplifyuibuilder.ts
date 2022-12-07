import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [amplifyuibuilder](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplifyuibuilder.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Amplifyuibuilder extends PolicyStatement {
  public servicePrefix = 'amplifyuibuilder';

  /**
   * Statement provider for service [amplifyuibuilder](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplifyuibuilder.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a component
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - amplify:GetApp
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_CreateComponent.html
   */
  public toCreateComponent() {
    return this.to('CreateComponent');
  }

  /**
   * Grants permission to create a form
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - amplify:GetApp
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_CreateForm.html
   */
  public toCreateForm() {
    return this.to('CreateForm');
  }

  /**
   * Grants permission to create a theme
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - amplify:GetApp
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_CreateTheme.html
   */
  public toCreateTheme() {
    return this.to('CreateTheme');
  }

  /**
   * Grants permission to delete a component
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - amplify:GetApp
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_DeleteComponent.html
   */
  public toDeleteComponent() {
    return this.to('DeleteComponent');
  }

  /**
   * Grants permission to delete a form
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - amplify:GetApp
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_DeleteForm.html
   */
  public toDeleteForm() {
    return this.to('DeleteForm');
  }

  /**
   * Grants permission to delete a theme
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - amplify:GetApp
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_DeleteTheme.html
   */
  public toDeleteTheme() {
    return this.to('DeleteTheme');
  }

  /**
   * Grants permission to export components
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ExportComponents.html
   */
  public toExportComponents() {
    return this.to('ExportComponents');
  }

  /**
   * Grants permission to export forms
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ExportForms.html
   */
  public toExportForms() {
    return this.to('ExportForms');
  }

  /**
   * Grants permission to export themes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ExportThemes.html
   */
  public toExportThemes() {
    return this.to('ExportThemes');
  }

  /**
   * Grants permission to get an existing component
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - amplify:GetApp
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_GetComponent.html
   */
  public toGetComponent() {
    return this.to('GetComponent');
  }

  /**
   * Grants permission to get an existing form
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - amplify:GetApp
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_GetForm.html
   */
  public toGetForm() {
    return this.to('GetForm');
  }

  /**
   * Grants permission to get an existing metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_GetMetadata.html
   */
  public toGetMetadata() {
    return this.to('GetMetadata');
  }

  /**
   * Grants permission to get an existing theme
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - amplify:GetApp
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_GetTheme.html
   */
  public toGetTheme() {
    return this.to('GetTheme');
  }

  /**
   * Grants permission to list components
   *
   * Access Level: List
   *
   * Dependent actions:
   * - amplify:GetApp
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ListComponents.html
   */
  public toListComponents() {
    return this.to('ListComponents');
  }

  /**
   * Grants permission to list forms
   *
   * Access Level: List
   *
   * Dependent actions:
   * - amplify:GetApp
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ListForms.html
   */
  public toListForms() {
    return this.to('ListForms');
  }

  /**
   * Grants permission to list themes
   *
   * Access Level: List
   *
   * Dependent actions:
   * - amplify:GetApp
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ListThemes.html
   */
  public toListThemes() {
    return this.to('ListThemes');
  }

  /**
   * Grants permission to put an existing metadata
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_PutMetadataFlag.html
   */
  public toPutMetadataFlag() {
    return this.to('PutMetadataFlag');
  }

  /**
   * Grants permission to reset an existing metadata
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ResetMetadataFlag.html
   */
  public toResetMetadataFlag() {
    return this.to('ResetMetadataFlag');
  }

  /**
   * Grants permission to update a component
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - amplify:GetApp
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_UpdateComponent.html
   */
  public toUpdateComponent() {
    return this.to('UpdateComponent');
  }

  /**
   * Grants permission to update a form
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - amplify:GetApp
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_UpdateForm.html
   */
  public toUpdateForm() {
    return this.to('UpdateForm');
  }

  /**
   * Grants permission to update a theme
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - amplify:GetApp
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_UpdateTheme.html
   */
  public toUpdateTheme() {
    return this.to('UpdateTheme');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateComponent',
      'CreateForm',
      'CreateTheme',
      'DeleteComponent',
      'DeleteForm',
      'DeleteTheme',
      'PutMetadataFlag',
      'ResetMetadataFlag',
      'UpdateComponent',
      'UpdateForm',
      'UpdateTheme'
    ],
    Read: [
      'ExportComponents',
      'ExportForms',
      'ExportThemes',
      'GetComponent',
      'GetForm',
      'GetMetadata',
      'GetTheme'
    ],
    List: [
      'ListComponents',
      'ListForms',
      'ListThemes'
    ]
  };

  /**
   * Adds a resource of type ComponentResource to the statement
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_Component.html
   *
   * @param appId - Identifier for the appId.
   * @param environmentName - Identifier for the environmentName.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifComponentResourceAppId()
   * - .ifComponentResourceEnvironmentName()
   * - .ifComponentResourceId()
   * - .ifAwsResourceTag()
   */
  public onComponentResource(appId: string, environmentName: string, id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Amplifyuibuilder.defaultPartition }:amplifyuibuilder:${ region || '*' }:${ account || '*' }:app/${ appId }/environment/${ environmentName }/components/${ id }`);
  }

  /**
   * Adds a resource of type FormResource to the statement
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_Form.html
   *
   * @param appId - Identifier for the appId.
   * @param environmentName - Identifier for the environmentName.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifFormResourceAppId()
   * - .ifFormResourceEnvironmentName()
   * - .ifFormResourceId()
   * - .ifAwsResourceTag()
   */
  public onFormResource(appId: string, environmentName: string, id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Amplifyuibuilder.defaultPartition }:amplifyuibuilder:${ region || '*' }:${ account || '*' }:app/${ appId }/environment/${ environmentName }/forms/${ id }`);
  }

  /**
   * Adds a resource of type ThemeResource to the statement
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_Theme.html
   *
   * @param appId - Identifier for the appId.
   * @param environmentName - Identifier for the environmentName.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifThemeResourceAppId()
   * - .ifThemeResourceEnvironmentName()
   * - .ifThemeResourceId()
   * - .ifAwsResourceTag()
   */
  public onThemeResource(appId: string, environmentName: string, id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Amplifyuibuilder.defaultPartition }:amplifyuibuilder:${ region || '*' }:${ account || '*' }:app/${ appId }/environment/${ environmentName }/themes/${ id }`);
  }

  /**
   * Filters access by the app ID
   *
   * https://docs.aws.amazon.com/amplify/latest/APIReference/API_App.html
   *
   * Applies to resource types:
   * - ComponentResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifComponentResourceAppId(value: string | string[], operator?: Operator | string) {
    return this.if(`ComponentResourceAppId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the backend environment name
   *
   * https://docs.aws.amazon.com/amplify/latest/APIReference/API_BackendEnvironment.html
   *
   * Applies to resource types:
   * - ComponentResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifComponentResourceEnvironmentName(value: string | string[], operator?: Operator | string) {
    return this.if(`ComponentResourceEnvironmentName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the component ID
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_Component.html
   *
   * Applies to resource types:
   * - ComponentResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifComponentResourceId(value: string | string[], operator?: Operator | string) {
    return this.if(`ComponentResourceId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the app ID
   *
   * https://docs.aws.amazon.com/amplify/latest/APIReference/API_App.html
   *
   * Applies to resource types:
   * - FormResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFormResourceAppId(value: string | string[], operator?: Operator | string) {
    return this.if(`FormResourceAppId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the backend environment name
   *
   * https://docs.aws.amazon.com/amplify/latest/APIReference/API_BackendEnvironment.html
   *
   * Applies to resource types:
   * - FormResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFormResourceEnvironmentName(value: string | string[], operator?: Operator | string) {
    return this.if(`FormResourceEnvironmentName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the form ID
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_Form.html
   *
   * Applies to resource types:
   * - FormResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFormResourceId(value: string | string[], operator?: Operator | string) {
    return this.if(`FormResourceId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the app ID
   *
   * https://docs.aws.amazon.com/amplify/latest/APIReference/API_App.html
   *
   * Applies to resource types:
   * - ThemeResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifThemeResourceAppId(value: string | string[], operator?: Operator | string) {
    return this.if(`ThemeResourceAppId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the backend environment name
   *
   * https://docs.aws.amazon.com/amplify/latest/APIReference/API_BackendEnvironment.html
   *
   * Applies to resource types:
   * - ThemeResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifThemeResourceEnvironmentName(value: string | string[], operator?: Operator | string) {
    return this.if(`ThemeResourceEnvironmentName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the theme ID
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_Theme.html
   *
   * Applies to resource types:
   * - ThemeResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifThemeResourceId(value: string | string[], operator?: Operator | string) {
    return this.if(`ThemeResourceId`, value, operator || 'StringLike');
  }
}
