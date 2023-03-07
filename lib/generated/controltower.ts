import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [controltower](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscontroltower.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Controltower extends PolicyStatement {
  public servicePrefix = 'controltower';

  /**
   * Statement provider for service [controltower](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscontroltower.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an account managed by AWS Control Tower
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  public toCreateManagedAccount() {
    return this.to('CreateManagedAccount');
  }

  /**
   * Grants permission to delete AWS Control Tower landing zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/decommission-landing-zone.html
   */
  public toDeleteLandingZone() {
    return this.to('DeleteLandingZone');
  }

  /**
   * Grants permission to deregister an account created through the account factory from AWS Control Tower
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  public toDeregisterManagedAccount() {
    return this.to('DeregisterManagedAccount');
  }

  /**
   * Grants permission to deregister an organizational unit from AWS Control Tower management
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html
   */
  public toDeregisterOrganizationalUnit() {
    return this.to('DeregisterOrganizationalUnit');
  }

  /**
   * Grants permission to describe the current account factory configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  public toDescribeAccountFactoryConfig() {
    return this.to('DescribeAccountFactoryConfig');
  }

  /**
   * Grants permission to describe resources managed by core accounts in AWS Control Tower
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/how-control-tower-works.html#what-shared
   */
  public toDescribeCoreService() {
    return this.to('DescribeCoreService');
  }

  /**
   * Grants permission to describe a guardrail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/controls.html
   */
  public toDescribeGuardrail() {
    return this.to('DescribeGuardrail');
  }

  /**
   * Grants permission to describe a guardrail for a organizational unit
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/controls.html
   */
  public toDescribeGuardrailForTarget() {
    return this.to('DescribeGuardrailForTarget');
  }

  /**
   * Grants permission to describe the current Landing Zone configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/step-two.html
   */
  public toDescribeLandingZoneConfiguration() {
    return this.to('DescribeLandingZoneConfiguration');
  }

  /**
   * Grants permission to describe an account created through account factory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  public toDescribeManagedAccount() {
    return this.to('DescribeManagedAccount');
  }

  /**
   * Grants permission to describe an AWS Organizations organizational unit managed by AWS Control Tower
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html
   */
  public toDescribeManagedOrganizationalUnit() {
    return this.to('DescribeManagedOrganizationalUnit');
  }

  /**
   * Grants permission to describe a Register Organizational Unit Operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/about-extending-governance.html
   */
  public toDescribeRegisterOrganizationalUnitOperation() {
    return this.to('DescribeRegisterOrganizationalUnitOperation');
  }

  /**
   * Grants permission to describe the current AWS Control Tower SSO configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/sso.html
   */
  public toDescribeSingleSignOn() {
    return this.to('DescribeSingleSignOn');
  }

  /**
   * Grants permission to remove a control from an organizational unit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_DisableControl.html
   */
  public toDisableControl() {
    return this.to('DisableControl');
  }

  /**
   * Grants permission to disable a guardrail from an organizational unit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/enable-controls-on-ou.html
   */
  public toDisableGuardrail() {
    return this.to('DisableGuardrail');
  }

  /**
   * Grants permission to activate a control for an organizational unit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_EnableControl.html
   */
  public toEnableControl() {
    return this.to('EnableControl');
  }

  /**
   * Grants permission to enable a guardrail to an organizational unit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/enable-controls-on-ou.html
   */
  public toEnableGuardrail() {
    return this.to('EnableGuardrail');
  }

  /**
   * Grants permission to describe an account email and validate that it exists
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/accounts.html
   */
  public toGetAccountInfo() {
    return this.to('GetAccountInfo');
  }

  /**
   * Grants permission to list available updates for the current AWS Control Tower deployment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/configuration-updates.html
   */
  public toGetAvailableUpdates() {
    return this.to('GetAvailableUpdates');
  }

  /**
   * Grants permission to get the current status of a particular EnabledControl or DisableControl operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetControlOperation.html
   */
  public toGetControlOperation() {
    return this.to('GetControlOperation');
  }

  /**
   * Grants permission to get the current compliance status of a guardrail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/controls.html
   */
  public toGetGuardrailComplianceStatus() {
    return this.to('GetGuardrailComplianceStatus');
  }

  /**
   * Grants permission to get the home region of the AWS Control Tower setup
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/how-control-tower-works.html#region-how
   */
  public toGetHomeRegion() {
    return this.to('GetHomeRegion');
  }

  /**
   * Grants permission to get the current landing zone drift status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/drift.html
   */
  public toGetLandingZoneDriftStatus() {
    return this.to('GetLandingZoneDriftStatus');
  }

  /**
   * Grants permission to get the current status of the landing zone setup
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/getting-started-with-control-tower.html#step-two
   */
  public toGetLandingZoneStatus() {
    return this.to('GetLandingZoneStatus');
  }

  /**
   * Grants permission to list the current directory groups available through SSO
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/sso.html
   */
  public toListDirectoryGroups() {
    return this.to('ListDirectoryGroups');
  }

  /**
   * Grants permission to list occurrences of drift in AWS Control Tower
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/drift.html
   */
  public toListDriftDetails() {
    return this.to('ListDriftDetails');
  }

  /**
   * Grants permission to list all enabled controls in a specified organizational unit
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListEnabledControls.html
   */
  public toListEnabledControls() {
    return this.to('ListEnabledControls');
  }

  /**
   * Grants permission to list currently enabled guardrails
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/controls.html
   */
  public toListEnabledGuardrails() {
    return this.to('ListEnabledGuardrails');
  }

  /**
   * Grants permission to list Precheck details for an Organizational Unit
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/about-extending-governance.html
   */
  public toListExtendGovernancePrecheckDetails() {
    return this.to('ListExtendGovernancePrecheckDetails');
  }

  /**
   * Grants permission to list the compliance of external AWS Config rules
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/review-compliance.html
   */
  public toListExternalConfigRuleCompliance() {
    return this.to('ListExternalConfigRuleCompliance');
  }

  /**
   * Grants permission to list existing guardrail violations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/controls.html
   */
  public toListGuardrailViolations() {
    return this.to('ListGuardrailViolations');
  }

  /**
   * Grants permission to list all available guardrails
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/controls.html
   */
  public toListGuardrails() {
    return this.to('ListGuardrails');
  }

  /**
   * Grants permission to list guardrails and their current state for a organizational unit
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/controls.html
   */
  public toListGuardrailsForTarget() {
    return this.to('ListGuardrailsForTarget');
  }

  /**
   * Grants permission to list accounts managed through AWS Control Tower
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  public toListManagedAccounts() {
    return this.to('ListManagedAccounts');
  }

  /**
   * Grants permission to list managed accounts with a specified guardrail applied
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  public toListManagedAccountsForGuardrail() {
    return this.to('ListManagedAccountsForGuardrail');
  }

  /**
   * Grants permission to list managed accounts under an organizational unit
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  public toListManagedAccountsForParent() {
    return this.to('ListManagedAccountsForParent');
  }

  /**
   * Grants permission to list organizational units managed by AWS Control Tower
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html
   */
  public toListManagedOrganizationalUnits() {
    return this.to('ListManagedOrganizationalUnits');
  }

  /**
   * Grants permission to list managed organizational units that have a specified guardrail applied
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html
   */
  public toListManagedOrganizationalUnitsForGuardrail() {
    return this.to('ListManagedOrganizationalUnitsForGuardrail');
  }

  /**
   * Grants permission to set up an organizational unit to be managed by AWS Control Tower
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/organizations.html
   */
  public toManageOrganizationalUnit() {
    return this.to('ManageOrganizationalUnit');
  }

  /**
   * Grants permission to perform validations in an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/getting-started-prereqs.html
   */
  public toPerformPreLaunchChecks() {
    return this.to('PerformPreLaunchChecks');
  }

  /**
   * Grants permission to set up or update AWS Control Tower landing zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/getting-started-with-control-tower.html#step-two
   */
  public toSetupLandingZone() {
    return this.to('SetupLandingZone');
  }

  /**
   * Grants permission to update the account factory configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html
   */
  public toUpdateAccountFactoryConfig() {
    return this.to('UpdateAccountFactoryConfig');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateManagedAccount',
      'DeleteLandingZone',
      'DeregisterManagedAccount',
      'DeregisterOrganizationalUnit',
      'DisableControl',
      'DisableGuardrail',
      'EnableControl',
      'EnableGuardrail',
      'ManageOrganizationalUnit',
      'SetupLandingZone',
      'UpdateAccountFactoryConfig'
    ],
    Read: [
      'DescribeAccountFactoryConfig',
      'DescribeCoreService',
      'DescribeGuardrail',
      'DescribeGuardrailForTarget',
      'DescribeLandingZoneConfiguration',
      'DescribeManagedAccount',
      'DescribeManagedOrganizationalUnit',
      'DescribeRegisterOrganizationalUnitOperation',
      'DescribeSingleSignOn',
      'GetAccountInfo',
      'GetAvailableUpdates',
      'GetControlOperation',
      'GetGuardrailComplianceStatus',
      'GetHomeRegion',
      'GetLandingZoneDriftStatus',
      'GetLandingZoneStatus',
      'ListDriftDetails',
      'ListExternalConfigRuleCompliance',
      'PerformPreLaunchChecks'
    ],
    List: [
      'ListDirectoryGroups',
      'ListEnabledControls',
      'ListEnabledGuardrails',
      'ListExtendGovernancePrecheckDetails',
      'ListGuardrailViolations',
      'ListGuardrails',
      'ListGuardrailsForTarget',
      'ListManagedAccounts',
      'ListManagedAccountsForGuardrail',
      'ListManagedAccountsForParent',
      'ListManagedOrganizationalUnits',
      'ListManagedOrganizationalUnitsForGuardrail'
    ]
  };
}
