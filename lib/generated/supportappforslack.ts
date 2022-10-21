import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [supportapp](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupportappforslack.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Supportapp extends PolicyStatement {
  public servicePrefix = 'supportapp';

  /**
   * Statement provider for service [supportapp](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupportappforslack.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a Slack channel configuration for your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/supportapp/latest/APIReference/API_CreateSlackChannelConfiguration.html
   */
  public toCreateSlackChannelConfiguration() {
    return this.to('CreateSlackChannelConfiguration');
  }

  /**
   * Grants permission to delete an alias from your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/supportapp/latest/APIReference/API_DeleteAccountAlias.html
   */
  public toDeleteAccountAlias() {
    return this.to('DeleteAccountAlias');
  }

  /**
   * Grants permission to delete a Slack channel configuration from your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/supportapp/latest/APIReference/API_DeleteSlackChannelConfiguration.html
   */
  public toDeleteSlackChannelConfiguration() {
    return this.to('DeleteSlackChannelConfiguration');
  }

  /**
   * Grants permission to delete a Slack workspace configuration from your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/supportapp/latest/APIReference/API_DeleteSlackWorkspaceConfiguration.html
   */
  public toDeleteSlackWorkspaceConfiguration() {
    return this.to('DeleteSlackWorkspaceConfiguration');
  }

  /**
   * Grants permission to get the alias for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/supportapp/latest/APIReference/API_GetAccountAlias.html
   */
  public toGetAccountAlias() {
    return this.to('GetAccountAlias');
  }

  /**
   * Grants permission to list all Slack channel configurations for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/supportapp/latest/APIReference/API_ListSlackChannelConfigurations.html
   */
  public toListSlackChannelConfigurations() {
    return this.to('ListSlackChannelConfigurations');
  }

  /**
   * Grants permission to list all Slack workspace configurations for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/supportapp/latest/APIReference/API_ListSlackWorkspaceConfigurations.html
   */
  public toListSlackWorkspaceConfigurations() {
    return this.to('ListSlackWorkspaceConfigurations');
  }

  /**
   * Grants permission to create or update an alias for your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/supportapp/latest/APIReference/API_PutAccountAlias.html
   */
  public toPutAccountAlias() {
    return this.to('PutAccountAlias');
  }

  /**
   * Grants permission to register a Slack workspace for an AWS account that is part of an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/supportapp/latest/APIReference/API_RegisterSlackWorkspaceForOrganization.html
   */
  public toRegisterSlackWorkspaceForOrganization() {
    return this.to('RegisterSlackWorkspaceForOrganization');
  }

  /**
   * Grants permission to update a Slack channel configuration for your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/supportapp/latest/APIReference/API_UpdateSlackChannelConfiguration.html
   */
  public toUpdateSlackChannelConfiguration() {
    return this.to('UpdateSlackChannelConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateSlackChannelConfiguration',
      'DeleteAccountAlias',
      'DeleteSlackChannelConfiguration',
      'DeleteSlackWorkspaceConfiguration',
      'PutAccountAlias',
      'RegisterSlackWorkspaceForOrganization',
      'UpdateSlackChannelConfiguration'
    ],
    Read: [
      'GetAccountAlias',
      'ListSlackChannelConfigurations',
      'ListSlackWorkspaceConfigurations'
    ]
  };
}
