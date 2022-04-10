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
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_CreateComponent.html
   */
  public toCreateComponent() {
    return this.to('CreateComponent');
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
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_DeleteComponent.html
   */
  public toDeleteComponent() {
    return this.to('DeleteComponent');
  }

  /**
   * Grants permission to delete a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_DeleteTheme.html
   */
  public toDeleteTheme() {
    return this.to('DeleteTheme');
  }

  /**
   * Grants permission to exchange a code for a token
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ExchangeCodeForToken.html
   */
  public toExchangeCodeForToken() {
    return this.to('ExchangeCodeForToken');
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
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_GetComponent.html
   */
  public toGetComponent() {
    return this.to('GetComponent');
  }

  /**
   * Grants permission to get an existing theme
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_GetTheme.html
   */
  public toGetTheme() {
    return this.to('GetTheme');
  }

  /**
   * Grants permission to list the components for an app
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ListComponents.html
   */
  public toListComponents() {
    return this.to('ListComponents');
  }

  /**
   * Grants permission to list the tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/welcome.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list the themes for an app
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_ListThemes.html
   */
  public toListThemes() {
    return this.to('ListThemes');
  }

  /**
   * Grants permission to refresh an access token
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_RefreshToken.html
   */
  public toRefreshToken() {
    return this.to('RefreshToken');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/welcome.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/welcome.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a component
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_UpdateComponent.html
   */
  public toUpdateComponent() {
    return this.to('UpdateComponent');
  }

  /**
   * Grants permission to update a theme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplifyuibuilder/latest/APIReference/API_UpdateTheme.html
   */
  public toUpdateTheme() {
    return this.to('UpdateTheme');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateComponent',
      'CreateTheme',
      'DeleteComponent',
      'DeleteTheme',
      'ExchangeCodeForToken',
      'RefreshToken',
      'UpdateComponent',
      'UpdateTheme'
    ],
    Read: [
      'ExportComponents',
      'ExportThemes',
      'GetComponent',
      'GetTheme',
      'ListTagsForResource'
    ],
    List: [
      'ListComponents',
      'ListThemes'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAppId()
   * - .ifComponentsId()
   * - .ifEnvironmentName()
   * - .ifAwsResourceTag()
   */
  public onComponentResource(appId: string, environmentName: string, id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:amplifyuibuilder:${ region || '*' }:${ account || '*' }:app/${ appId }/environment/${ environmentName }/components/${ id }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAppId()
   * - .ifEnvironmentName()
   * - .ifThemesId()
   * - .ifAwsResourceTag()
   */
  public onThemeResource(appId: string, environmentName: string, id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:amplifyuibuilder:${ region || '*' }:${ account || '*' }:app/${ appId }/environment/${ environmentName }/themes/${ id }`);
  }

  /**
   * Filters access by the app ID
   *
   * https://docs.aws.amazon.com/amplify/latest/APIReference/API_App.html
   *
   * Applies to resource types:
   * - ComponentResource
   * - ThemeResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAppId(value: string | string[], operator?: Operator | string) {
    return this.if(`AppId`, value, operator || 'StringLike');
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
  public ifComponentsId(value: string | string[], operator?: Operator | string) {
    return this.if(`ComponentsId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the backend environment name
   *
   * https://docs.aws.amazon.com/amplify/latest/APIReference/API_BackendEnvironment.html
   *
   * Applies to resource types:
   * - ComponentResource
   * - ThemeResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnvironmentName(value: string | string[], operator?: Operator | string) {
    return this.if(`EnvironmentName`, value, operator || 'StringLike');
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
  public ifThemesId(value: string | string[], operator?: Operator | string) {
    return this.if(`ThemesId`, value, operator || 'StringLike');
  }
}
