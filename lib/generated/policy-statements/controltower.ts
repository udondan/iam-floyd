import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
   * Grants permission to create a landing zone
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - controltower:TagResource
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_CreateLandingZone.html
   */
  public toCreateLandingZone() {
    return this.to('CreateLandingZone');
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
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_DeleteLandingZone.html
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
   * Grants permission to describe the current AWS Control Tower IAM Identity Center configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/userguide/sso.html
   */
  public toDescribeSingleSignOn() {
    return this.to('DescribeSingleSignOn');
  }

  /**
   * Grants permission to disable a Baseline on a target
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_DisableBaseline.html
   */
  public toDisableBaseline() {
    return this.to('DisableBaseline');
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
   * Grants permission to enable a Baseline on a target
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - controltower:TagResource
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_EnableBaseline.html
   */
  public toEnableBaseline() {
    return this.to('EnableBaseline');
  }

  /**
   * Grants permission to activate a control for an organizational unit
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - controltower:TagResource
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
   * Grants permission to get Baseline details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetBaseline.html
   */
  public toGetBaseline() {
    return this.to('GetBaseline');
  }

  /**
   * Grants permission to get the current status of a particular Baseline operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetBaselineOperation.html
   */
  public toGetBaselineOperation() {
    return this.to('GetBaselineOperation');
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
   * Grants permission to get an enabled Baseline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetEnabledBaseline.html
   */
  public toGetEnabledBaseline() {
    return this.to('GetEnabledBaseline');
  }

  /**
   * Grants permission to get an enabled control from an organizational unit
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetEnabledControl.html
   */
  public toGetEnabledControl() {
    return this.to('GetEnabledControl');
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
   * Grants permission to get the current status of the landing zone setup
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetLandingZone.html
   */
  public toGetLandingZone() {
    return this.to('GetLandingZone');
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
   * Grants permission to get the current status of a particular landing zone operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetLandingZoneOperation.html
   */
  public toGetLandingZoneOperation() {
    return this.to('GetLandingZoneOperation');
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
   * Grants permission to list Baselines
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListBaselines.html
   */
  public toListBaselines() {
    return this.to('ListBaselines');
  }

  /**
   * Grants permission to list the current directory groups available through IAM Identity Center
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
   * Grants permission to list enabled Baselines
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListEnabledBaselines.html
   */
  public toListEnabledBaselines() {
    return this.to('ListEnabledBaselines');
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
   * Grants permission to list all landing zones
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListLandingZones.html
   */
  public toListLandingZones() {
    return this.to('ListLandingZones');
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
   * Grants permission to list the tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
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
   * Grants permission to reset an enabled Baseline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_ResetEnabledBaseline.html
   */
  public toResetEnabledBaseline() {
    return this.to('ResetEnabledBaseline');
  }

  /**
   * Grants permission to reset a landing zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_ResetLandingZone.html
   */
  public toResetLandingZone() {
    return this.to('ResetLandingZone');
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
   * Grants permission to add tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
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

  /**
   * Grants permission to update an enabled Baseline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateEnabledBaseline.html
   */
  public toUpdateEnabledBaseline() {
    return this.to('UpdateEnabledBaseline');
  }

  /**
   * Grants permission to update an enabled control for an organizational unit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateEnabledControl.html
   */
  public toUpdateEnabledControl() {
    return this.to('UpdateEnabledControl');
  }

  /**
   * Grants permission to update a landing zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateLandingZone.html
   */
  public toUpdateLandingZone() {
    return this.to('UpdateLandingZone');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateLandingZone',
      'CreateManagedAccount',
      'DeleteLandingZone',
      'DeregisterManagedAccount',
      'DeregisterOrganizationalUnit',
      'DisableBaseline',
      'DisableControl',
      'DisableGuardrail',
      'EnableBaseline',
      'EnableControl',
      'EnableGuardrail',
      'ManageOrganizationalUnit',
      'ResetEnabledBaseline',
      'ResetLandingZone',
      'SetupLandingZone',
      'UpdateAccountFactoryConfig',
      'UpdateEnabledBaseline',
      'UpdateEnabledControl',
      'UpdateLandingZone'
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
      'GetBaseline',
      'GetBaselineOperation',
      'GetControlOperation',
      'GetEnabledBaseline',
      'GetEnabledControl',
      'GetGuardrailComplianceStatus',
      'GetHomeRegion',
      'GetLandingZone',
      'GetLandingZoneDriftStatus',
      'GetLandingZoneOperation',
      'GetLandingZoneStatus',
      'ListDriftDetails',
      'ListExternalConfigRuleCompliance',
      'ListTagsForResource',
      'PerformPreLaunchChecks'
    ],
    List: [
      'ListBaselines',
      'ListDirectoryGroups',
      'ListEnabledBaselines',
      'ListEnabledControls',
      'ListEnabledGuardrails',
      'ListExtendGovernancePrecheckDetails',
      'ListGuardrailViolations',
      'ListGuardrails',
      'ListGuardrailsForTarget',
      'ListLandingZones',
      'ListManagedAccounts',
      'ListManagedAccountsForGuardrail',
      'ListManagedAccountsForParent',
      'ListManagedOrganizationalUnits',
      'ListManagedOrganizationalUnitsForGuardrail'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type EnabledControl to the statement
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_EnableControl.html
   *
   * @param enabledControlId - Identifier for the enabledControlId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnabledControl(enabledControlId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:controltower:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:enabledcontrol/${ enabledControlId }`);
  }

  /**
   * Adds a resource of type Baseline to the statement
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_GetBaseline.html
   *
   * @param baselineId - Identifier for the baselineId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBaseline(baselineId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:controltower:${ region ?? this.defaultRegion }::baseline/${ baselineId }`);
  }

  /**
   * Adds a resource of type EnabledBaseline to the statement
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_EnableBaseline.html
   *
   * @param enabledBaselineId - Identifier for the enabledBaselineId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnabledBaseline(enabledBaselineId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:controltower:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:enabledbaseline/${ enabledBaselineId }`);
  }

  /**
   * Adds a resource of type LandingZone to the statement
   *
   * https://docs.aws.amazon.com/controltower/latest/APIReference/API_CreateLandingZone.html
   *
   * @param landingZoneId - Identifier for the landingZoneId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLandingZone(landingZoneId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:controltower:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:landingzone/${ landingZoneId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateLandingZone()
   * - .toEnableBaseline()
   * - .toEnableControl()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - EnabledControl
   * - EnabledBaseline
   * - LandingZone
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateLandingZone()
   * - .toEnableBaseline()
   * - .toEnableControl()
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
