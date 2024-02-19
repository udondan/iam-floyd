import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [devicefarm](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdevicefarm.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Devicefarm extends PolicyStatement {
  public servicePrefix = 'devicefarm';

  /**
   * Statement provider for service [devicefarm](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdevicefarm.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a device pool within a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateDevicePool.html
   */
  public toCreateDevicePool() {
    return this.to('CreateDevicePool');
  }

  /**
   * Grants permission to create a device instance profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateInstanceProfile.html
   */
  public toCreateInstanceProfile() {
    return this.to('CreateInstanceProfile');
  }

  /**
   * Grants permission to create a network profile within a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateNetworkProfile.html
   */
  public toCreateNetworkProfile() {
    return this.to('CreateNetworkProfile');
  }

  /**
   * Grants permission to create a project for mobile testing
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateProject.html
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Grants permission to start a remote access session to a device instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateRemoteAccessSession.html
   */
  public toCreateRemoteAccessSession() {
    return this.to('CreateRemoteAccessSession');
  }

  /**
   * Grants permission to create a project for desktop testing
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateTestGridProject.html
   */
  public toCreateTestGridProject() {
    return this.to('CreateTestGridProject');
  }

  /**
   * Grants permission to generate a new pre-signed url used to access our test grid service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateTestGridUrl.html
   */
  public toCreateTestGridUrl() {
    return this.to('CreateTestGridUrl');
  }

  /**
   * Grants permission to upload a new file or app within a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateUpload.html
   */
  public toCreateUpload() {
    return this.to('CreateUpload');
  }

  /**
   * Grants permission to create an Amazon Virtual Private Cloud (VPC) endpoint configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateVPCEConfiguration.html
   */
  public toCreateVPCEConfiguration() {
    return this.to('CreateVPCEConfiguration');
  }

  /**
   * Grants permission to delete a user-generated device pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteDevicePool.html
   */
  public toDeleteDevicePool() {
    return this.to('DeleteDevicePool');
  }

  /**
   * Grants permission to delete a user-generated instance profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteInstanceProfile.html
   */
  public toDeleteInstanceProfile() {
    return this.to('DeleteInstanceProfile');
  }

  /**
   * Grants permission to delete a user-generated network profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/DeleteNetworkProfile.html
   */
  public toDeleteNetworkProfile() {
    return this.to('DeleteNetworkProfile');
  }

  /**
   * Grants permission to delete a mobile testing project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteProject.html
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Grants permission to delete a completed remote access session and its results
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteRemoteAccessSession.html
   */
  public toDeleteRemoteAccessSession() {
    return this.to('DeleteRemoteAccessSession');
  }

  /**
   * Grants permission to delete a run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteRun.html
   */
  public toDeleteRun() {
    return this.to('DeleteRun');
  }

  /**
   * Grants permission to delete a desktop testing project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteTestGridProject.html
   */
  public toDeleteTestGridProject() {
    return this.to('DeleteTestGridProject');
  }

  /**
   * Grants permission to delete a user-uploaded file
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteUpload.html
   */
  public toDeleteUpload() {
    return this.to('DeleteUpload');
  }

  /**
   * Grants permission to delete an Amazon Virtual Private Cloud (VPC) endpoint configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteVPCEConfiguration.html
   */
  public toDeleteVPCEConfiguration() {
    return this.to('DeleteVPCEConfiguration');
  }

  /**
   * Grants permission to retrieve the number of unmetered iOS and/or unmetered Android devices purchased by the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetAccountSettings.html
   */
  public toGetAccountSettings() {
    return this.to('GetAccountSettings');
  }

  /**
   * Grants permission to retrieve the information of a unique device type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDevice.html
   */
  public toGetDevice() {
    return this.to('GetDevice');
  }

  /**
   * Grants permission to retireve the information of a device instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDeviceInstance.html
   */
  public toGetDeviceInstance() {
    return this.to('GetDeviceInstance');
  }

  /**
   * Grants permission to retireve the information of a device pool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDevicePool.html
   */
  public toGetDevicePool() {
    return this.to('GetDevicePool');
  }

  /**
   * Grants permission to retrieve information about the compatibility of a test and/or app with a device pool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDevicePoolCompatibility.html
   */
  public toGetDevicePoolCompatibility() {
    return this.to('GetDevicePoolCompatibility');
  }

  /**
   * Grants permission to retireve the information of an instance profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetInstanceProfile.html
   */
  public toGetInstanceProfile() {
    return this.to('GetInstanceProfile');
  }

  /**
   * Grants permission to retireve the information of a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetJob.html
   */
  public toGetJob() {
    return this.to('GetJob');
  }

  /**
   * Grants permission to retireve the information of a network profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetNetworkProfile.html
   */
  public toGetNetworkProfile() {
    return this.to('GetNetworkProfile');
  }

  /**
   * Grants permission to retrieve the current status and future status of all offerings purchased by an AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetOfferingStatus.html
   */
  public toGetOfferingStatus() {
    return this.to('GetOfferingStatus');
  }

  /**
   * Grants permission to retrieve information about a mobile testing project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetProject.html
   */
  public toGetProject() {
    return this.to('GetProject');
  }

  /**
   * Grants permission to retireve the link to a currently running remote access session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetRemoteAccessSession.html
   */
  public toGetRemoteAccessSession() {
    return this.to('GetRemoteAccessSession');
  }

  /**
   * Grants permission to retireve the information of a run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetRun.html
   */
  public toGetRun() {
    return this.to('GetRun');
  }

  /**
   * Grants permission to retireve the information of a testing suite
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetSuite.html
   */
  public toGetSuite() {
    return this.to('GetSuite');
  }

  /**
   * Grants permission to retireve the information of a test case
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetTest.html
   */
  public toGetTest() {
    return this.to('GetTest');
  }

  /**
   * Grants permission to retrieve information about a desktop testing project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetTestGridProject.html
   */
  public toGetTestGridProject() {
    return this.to('GetTestGridProject');
  }

  /**
   * Grants permission to retireve the information of a test grid session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetTestGridSession.html
   */
  public toGetTestGridSession() {
    return this.to('GetTestGridSession');
  }

  /**
   * Grants permission to retireve the information of an uploaded file
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetUpload.html
   */
  public toGetUpload() {
    return this.to('GetUpload');
  }

  /**
   * Grants permission to retireve the information of an Amazon Virtual Private Cloud (VPC) endpoint configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetVPCEConfiguration.html
   */
  public toGetVPCEConfiguration() {
    return this.to('GetVPCEConfiguration');
  }

  /**
   * Grants permission to install an application to a device in a remote access session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_InstallToRemoteAccessSession.html
   */
  public toInstallToRemoteAccessSession() {
    return this.to('InstallToRemoteAccessSession');
  }

  /**
   * Grants permission to list the artifacts in a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListArtifacts.html
   */
  public toListArtifacts() {
    return this.to('ListArtifacts');
  }

  /**
   * Grants permission to list the information of device instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListDeviceInstances.html
   */
  public toListDeviceInstances() {
    return this.to('ListDeviceInstances');
  }

  /**
   * Grants permission to list the information of device pools
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListDevicePools.html
   */
  public toListDevicePools() {
    return this.to('ListDevicePools');
  }

  /**
   * Grants permission to list the information of unique device types
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListDevices.html
   */
  public toListDevices() {
    return this.to('ListDevices');
  }

  /**
   * Grants permission to list the information of device instance profiles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListInstanceProfiles.html
   */
  public toListInstanceProfiles() {
    return this.to('ListInstanceProfiles');
  }

  /**
   * Grants permission to list the information of jobs within a run
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListJobs.html
   */
  public toListJobs() {
    return this.to('ListJobs');
  }

  /**
   * Grants permission to list the information of network profiles within a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListNetworkProfiles.html
   */
  public toListNetworkProfiles() {
    return this.to('ListNetworkProfiles');
  }

  /**
   * Grants permission to list the offering promotions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListOfferingPromotions.html
   */
  public toListOfferingPromotions() {
    return this.to('ListOfferingPromotions');
  }

  /**
   * Grants permission to list all of the historical purchases, renewals, and system renewal transactions for an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListOfferingTransactions.html
   */
  public toListOfferingTransactions() {
    return this.to('ListOfferingTransactions');
  }

  /**
   * Grants permission to list the products or offerings that the user can manage through the API
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListOfferings.html
   */
  public toListOfferings() {
    return this.to('ListOfferings');
  }

  /**
   * Grants permission to list the information of mobile testing projects for an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListProjects.html
   */
  public toListProjects() {
    return this.to('ListProjects');
  }

  /**
   * Grants permission to list the information of currently running remote access sessions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListRemoteAccessSessions.html
   */
  public toListRemoteAccessSessions() {
    return this.to('ListRemoteAccessSessions');
  }

  /**
   * Grants permission to list the information of runs within a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListRuns.html
   */
  public toListRuns() {
    return this.to('ListRuns');
  }

  /**
   * Grants permission to list the information of samples within a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListSamples.html
   */
  public toListSamples() {
    return this.to('ListSamples');
  }

  /**
   * Grants permission to list the information of testing suites within a job
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListSuites.html
   */
  public toListSuites() {
    return this.to('ListSuites');
  }

  /**
   * Grants permission to list the tags of a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list the information of desktop testing projects for an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridProjects.html
   */
  public toListTestGridProjects() {
    return this.to('ListTestGridProjects');
  }

  /**
   * Grants permission to list the session actions performed during a test grid session
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridSessionActions.html
   */
  public toListTestGridSessionActions() {
    return this.to('ListTestGridSessionActions');
  }

  /**
   * Grants permission to list the artifacts generated by a test grid session
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridSessionArtifacts.html
   */
  public toListTestGridSessionArtifacts() {
    return this.to('ListTestGridSessionArtifacts');
  }

  /**
   * Grants permission to list the sessions within a test grid project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridSessions.html
   */
  public toListTestGridSessions() {
    return this.to('ListTestGridSessions');
  }

  /**
   * Grants permission to list the information of tests within a testing suite
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTests.html
   */
  public toListTests() {
    return this.to('ListTests');
  }

  /**
   * Grants permission to list the information of unique problems within a run
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListUniqueProblems.html
   */
  public toListUniqueProblems() {
    return this.to('ListUniqueProblems');
  }

  /**
   * Grants permission to list the information of uploads within a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListUploads.html
   */
  public toListUploads() {
    return this.to('ListUploads');
  }

  /**
   * Grants permission to list the information of Amazon Virtual Private Cloud (VPC) endpoint configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListVPCEConfigurations.html
   */
  public toListVPCEConfigurations() {
    return this.to('ListVPCEConfigurations');
  }

  /**
   * Grants permission to purchase offerings for an AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_PurchaseOffering.html
   */
  public toPurchaseOffering() {
    return this.to('PurchaseOffering');
  }

  /**
   * Grants permission to set the quantity of devices to renew for an offering
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_RenewOffering.html
   */
  public toRenewOffering() {
    return this.to('RenewOffering');
  }

  /**
   * Grants permission to schedule a run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ScheduleRun.html
   */
  public toScheduleRun() {
    return this.to('ScheduleRun');
  }

  /**
   * Grants permission to terminate a running job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_StopJob.html
   */
  public toStopJob() {
    return this.to('StopJob');
  }

  /**
   * Grants permission to terminate a running remote access session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_StopRemoteAccessSession.html
   */
  public toStopRemoteAccessSession() {
    return this.to('StopRemoteAccessSession');
  }

  /**
   * Grants permission to terminate a running test run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_StopRun.html
   */
  public toStopRun() {
    return this.to('StopRun');
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
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_TagResource.html
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
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to modify an existing device instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateDeviceInstance.html
   */
  public toUpdateDeviceInstance() {
    return this.to('UpdateDeviceInstance');
  }

  /**
   * Grants permission to modify an existing device pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateDevicePool.html
   */
  public toUpdateDevicePool() {
    return this.to('UpdateDevicePool');
  }

  /**
   * Grants permission to modify an existing instance profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateInstanceProfile.html
   */
  public toUpdateInstanceProfile() {
    return this.to('UpdateInstanceProfile');
  }

  /**
   * Grants permission to modify an existing network profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateNetworkProfile.html
   */
  public toUpdateNetworkProfile() {
    return this.to('UpdateNetworkProfile');
  }

  /**
   * Grants permission to modify an existing mobile testing project
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateProject.html
   */
  public toUpdateProject() {
    return this.to('UpdateProject');
  }

  /**
   * Grants permission to modify an existing desktop testing project
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateTestGridProject.html
   */
  public toUpdateTestGridProject() {
    return this.to('UpdateTestGridProject');
  }

  /**
   * Grants permission to modify an existing upload
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateUpload.html
   */
  public toUpdateUpload() {
    return this.to('UpdateUpload');
  }

  /**
   * Grants permission to modify an existing Amazon Virtual Private Cloud (VPC) endpoint configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateVPCEConfiguration.html
   */
  public toUpdateVPCEConfiguration() {
    return this.to('UpdateVPCEConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateDevicePool',
      'CreateInstanceProfile',
      'CreateNetworkProfile',
      'CreateProject',
      'CreateRemoteAccessSession',
      'CreateTestGridProject',
      'CreateTestGridUrl',
      'CreateUpload',
      'CreateVPCEConfiguration',
      'DeleteDevicePool',
      'DeleteInstanceProfile',
      'DeleteNetworkProfile',
      'DeleteProject',
      'DeleteRemoteAccessSession',
      'DeleteRun',
      'DeleteTestGridProject',
      'DeleteUpload',
      'DeleteVPCEConfiguration',
      'InstallToRemoteAccessSession',
      'PurchaseOffering',
      'RenewOffering',
      'ScheduleRun',
      'StopJob',
      'StopRemoteAccessSession',
      'StopRun',
      'UpdateDeviceInstance',
      'UpdateDevicePool',
      'UpdateInstanceProfile',
      'UpdateNetworkProfile',
      'UpdateProject',
      'UpdateTestGridProject',
      'UpdateUpload',
      'UpdateVPCEConfiguration'
    ],
    Read: [
      'GetAccountSettings',
      'GetDevice',
      'GetDeviceInstance',
      'GetDevicePool',
      'GetDevicePoolCompatibility',
      'GetInstanceProfile',
      'GetJob',
      'GetNetworkProfile',
      'GetOfferingStatus',
      'GetProject',
      'GetRemoteAccessSession',
      'GetRun',
      'GetSuite',
      'GetTest',
      'GetTestGridProject',
      'GetTestGridSession',
      'GetUpload',
      'GetVPCEConfiguration'
    ],
    List: [
      'ListArtifacts',
      'ListDeviceInstances',
      'ListDevicePools',
      'ListDevices',
      'ListInstanceProfiles',
      'ListJobs',
      'ListNetworkProfiles',
      'ListOfferingPromotions',
      'ListOfferingTransactions',
      'ListOfferings',
      'ListProjects',
      'ListRemoteAccessSessions',
      'ListRuns',
      'ListSamples',
      'ListSuites',
      'ListTagsForResource',
      'ListTestGridProjects',
      'ListTestGridSessionActions',
      'ListTestGridSessionArtifacts',
      'ListTestGridSessions',
      'ListTests',
      'ListUniqueProblems',
      'ListUploads',
      'ListVPCEConfigurations'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Project.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:devicefarm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:project:${ resourceId }`);
  }

  /**
   * Adds a resource of type run to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Run.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRun(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:devicefarm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:run:${ resourceId }`);
  }

  /**
   * Adds a resource of type job to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Job.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onJob(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:devicefarm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:job:${ resourceId }`);
  }

  /**
   * Adds a resource of type suite to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Suite.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSuite(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:devicefarm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:suite:${ resourceId }`);
  }

  /**
   * Adds a resource of type test to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Test.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTest(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:devicefarm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:test:${ resourceId }`);
  }

  /**
   * Adds a resource of type upload to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Upload.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onUpload(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:devicefarm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:upload:${ resourceId }`);
  }

  /**
   * Adds a resource of type artifact to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Artifact.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onArtifact(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:devicefarm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:artifact:${ resourceId }`);
  }

  /**
   * Adds a resource of type sample to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Sample.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSample(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:devicefarm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:sample:${ resourceId }`);
  }

  /**
   * Adds a resource of type networkprofile to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_NetworkProfile.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNetworkprofile(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:devicefarm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:networkprofile:${ resourceId }`);
  }

  /**
   * Adds a resource of type deviceinstance to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeviceInstance.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeviceinstance(resourceId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:devicefarm:${ region ?? this.defaultRegion }::deviceinstance:${ resourceId }`);
  }

  /**
   * Adds a resource of type session to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_RemoteAccessSession.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSession(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:devicefarm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:session:${ resourceId }`);
  }

  /**
   * Adds a resource of type devicepool to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DevicePool.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDevicepool(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:devicefarm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:devicepool:${ resourceId }`);
  }

  /**
   * Adds a resource of type device to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Device.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDevice(resourceId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:devicefarm:${ region ?? this.defaultRegion }::device:${ resourceId }`);
  }

  /**
   * Adds a resource of type instanceprofile to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_InstanceProfile.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInstanceprofile(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:devicefarm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instanceprofile:${ resourceId }`);
  }

  /**
   * Adds a resource of type vpceconfiguration to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_VPCEConfiguration.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVpceconfiguration(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:devicefarm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:vpceconfiguration:${ resourceId }`);
  }

  /**
   * Adds a resource of type testgrid-project to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_TestGridProject.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTestgridProject(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:devicefarm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:testgrid-project:${ resourceId }`);
  }

  /**
   * Adds a resource of type testgrid-session to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_TestGridSession.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTestgridSession(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:devicefarm:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:testgrid-session:${ resourceId }`);
  }

  /**
   * Filters actions based on the allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
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
   * Filters actions based on tag-value assoicated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - project
   * - run
   * - networkprofile
   * - deviceinstance
   * - session
   * - devicepool
   * - device
   * - instanceprofile
   * - vpceconfiguration
   * - testgrid-project
   * - testgrid-session
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters actions based on the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
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
