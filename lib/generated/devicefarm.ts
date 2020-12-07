import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
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
    this.to('devicefarm:CreateDevicePool');
    return this;
  }

  /**
   * Grants permission to create a device instance profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateInstanceProfile.html
   */
  public toCreateInstanceProfile() {
    this.to('devicefarm:CreateInstanceProfile');
    return this;
  }

  /**
   * Grants permission to create a network profile within a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateNetworkProfile.html
   */
  public toCreateNetworkProfile() {
    this.to('devicefarm:CreateNetworkProfile');
    return this;
  }

  /**
   * Grants permission to create a project for mobile testing
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateProject.html
   */
  public toCreateProject() {
    this.to('devicefarm:CreateProject');
    return this;
  }

  /**
   * Grants permission to start a remote access session to a device instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateRemoteAccessSession.html
   */
  public toCreateRemoteAccessSession() {
    this.to('devicefarm:CreateRemoteAccessSession');
    return this;
  }

  /**
   * Grants permission to create a project for desktop testing
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateTestGridProject.html
   */
  public toCreateTestGridProject() {
    this.to('devicefarm:CreateTestGridProject');
    return this;
  }

  /**
   * Grants permission to generate a new pre-signed url used to access our test grid service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateTestGridUrl.html
   */
  public toCreateTestGridUrl() {
    this.to('devicefarm:CreateTestGridUrl');
    return this;
  }

  /**
   * Grants permission to upload a new file or app within a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateUpload.html
   */
  public toCreateUpload() {
    this.to('devicefarm:CreateUpload');
    return this;
  }

  /**
   * Grants permission to create an Amazon Virtual Private Cloud (VPC) endpoint configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateVPCEConfiguration.html
   */
  public toCreateVPCEConfiguration() {
    this.to('devicefarm:CreateVPCEConfiguration');
    return this;
  }

  /**
   * Grants permission to delete a user-generated device pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteDevicePool.html
   */
  public toDeleteDevicePool() {
    this.to('devicefarm:DeleteDevicePool');
    return this;
  }

  /**
   * Grants permission to delete a user-generated instance profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteInstanceProfile.html
   */
  public toDeleteInstanceProfile() {
    this.to('devicefarm:DeleteInstanceProfile');
    return this;
  }

  /**
   * Grants permission to delete a user-generated network profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/DeleteNetworkProfile.html
   */
  public toDeleteNetworkProfile() {
    this.to('devicefarm:DeleteNetworkProfile');
    return this;
  }

  /**
   * Grants permission to delete a mobile testing project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteProject.html
   */
  public toDeleteProject() {
    this.to('devicefarm:DeleteProject');
    return this;
  }

  /**
   * Grants permission to delete a completed remote access session and its results
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteRemoteAccessSession.html
   */
  public toDeleteRemoteAccessSession() {
    this.to('devicefarm:DeleteRemoteAccessSession');
    return this;
  }

  /**
   * Grants permission to delete a run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteRun.html
   */
  public toDeleteRun() {
    this.to('devicefarm:DeleteRun');
    return this;
  }

  /**
   * Grants permission to delete a desktop testing project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteTestGridProject.html
   */
  public toDeleteTestGridProject() {
    this.to('devicefarm:DeleteTestGridProject');
    return this;
  }

  /**
   * Grants permission to delete a user-uploaded file
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteUpload.html
   */
  public toDeleteUpload() {
    this.to('devicefarm:DeleteUpload');
    return this;
  }

  /**
   * Grants permission to delete an Amazon Virtual Private Cloud (VPC) endpoint configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteVPCEConfiguration.html
   */
  public toDeleteVPCEConfiguration() {
    this.to('devicefarm:DeleteVPCEConfiguration');
    return this;
  }

  /**
   * Grants permission to retrieve the number of unmetered iOS and/or unmetered Android devices purchased by the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetAccountSettings.html
   */
  public toGetAccountSettings() {
    this.to('devicefarm:GetAccountSettings');
    return this;
  }

  /**
   * Grants permission to retrieve the information of a unique device type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDevice.html
   */
  public toGetDevice() {
    this.to('devicefarm:GetDevice');
    return this;
  }

  /**
   * Grants permission to retireve the information of a device instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDeviceInstance.html
   */
  public toGetDeviceInstance() {
    this.to('devicefarm:GetDeviceInstance');
    return this;
  }

  /**
   * Grants permission to retireve the information of a device pool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDevicePool.html
   */
  public toGetDevicePool() {
    this.to('devicefarm:GetDevicePool');
    return this;
  }

  /**
   * Grants permission to retrieve information about the compatibility of a test and/or app with a device pool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDevicePoolCompatibility.html
   */
  public toGetDevicePoolCompatibility() {
    this.to('devicefarm:GetDevicePoolCompatibility');
    return this;
  }

  /**
   * Grants permission to retireve the information of an instance profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetInstanceProfile.html
   */
  public toGetInstanceProfile() {
    this.to('devicefarm:GetInstanceProfile');
    return this;
  }

  /**
   * Grants permission to retireve the information of a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetJob.html
   */
  public toGetJob() {
    this.to('devicefarm:GetJob');
    return this;
  }

  /**
   * Grants permission to retireve the information of a network profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetNetworkProfile.html
   */
  public toGetNetworkProfile() {
    this.to('devicefarm:GetNetworkProfile');
    return this;
  }

  /**
   * Grants permission to retrieve the current status and future status of all offerings purchased by an AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetOfferingStatus.html
   */
  public toGetOfferingStatus() {
    this.to('devicefarm:GetOfferingStatus');
    return this;
  }

  /**
   * Grants permission to retrieve information about a mobile testing project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetProject.html
   */
  public toGetProject() {
    this.to('devicefarm:GetProject');
    return this;
  }

  /**
   * Grants permission to retireve the link to a currently running remote access session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetRemoteAccessSession.html
   */
  public toGetRemoteAccessSession() {
    this.to('devicefarm:GetRemoteAccessSession');
    return this;
  }

  /**
   * Grants permission to retireve the information of a run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetRun.html
   */
  public toGetRun() {
    this.to('devicefarm:GetRun');
    return this;
  }

  /**
   * Grants permission to retireve the information of a testing suite
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetSuite.html
   */
  public toGetSuite() {
    this.to('devicefarm:GetSuite');
    return this;
  }

  /**
   * Grants permission to retireve the information of a test case
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetTest.html
   */
  public toGetTest() {
    this.to('devicefarm:GetTest');
    return this;
  }

  /**
   * Grants permission to retrieve information about a desktop testing project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetTestGridProject.html
   */
  public toGetTestGridProject() {
    this.to('devicefarm:GetTestGridProject');
    return this;
  }

  /**
   * Grants permission to retireve the information of a test grid session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetTestGridSession.html
   */
  public toGetTestGridSession() {
    this.to('devicefarm:GetTestGridSession');
    return this;
  }

  /**
   * Grants permission to retireve the information of an uploaded file
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetUpload.html
   */
  public toGetUpload() {
    this.to('devicefarm:GetUpload');
    return this;
  }

  /**
   * Grants permission to retireve the information of an Amazon Virtual Private Cloud (VPC) endpoint configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetVPCEConfiguration.html
   */
  public toGetVPCEConfiguration() {
    this.to('devicefarm:GetVPCEConfiguration');
    return this;
  }

  /**
   * Grants permission to install an application to a device in a remote access session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_InstallToRemoteAccessSession.html
   */
  public toInstallToRemoteAccessSession() {
    this.to('devicefarm:InstallToRemoteAccessSession');
    return this;
  }

  /**
   * Grants permission to list the artifacts in a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListArtifacts.html
   */
  public toListArtifacts() {
    this.to('devicefarm:ListArtifacts');
    return this;
  }

  /**
   * Grants permission to list the information of device instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListDeviceInstances.html
   */
  public toListDeviceInstances() {
    this.to('devicefarm:ListDeviceInstances');
    return this;
  }

  /**
   * Grants permission to list the information of device pools
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListDevicePools.html
   */
  public toListDevicePools() {
    this.to('devicefarm:ListDevicePools');
    return this;
  }

  /**
   * Grants permission to list the information of unique device types
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListDevices.html
   */
  public toListDevices() {
    this.to('devicefarm:ListDevices');
    return this;
  }

  /**
   * Grants permission to list the information of device instance profiles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListInstanceProfiles.html
   */
  public toListInstanceProfiles() {
    this.to('devicefarm:ListInstanceProfiles');
    return this;
  }

  /**
   * Grants permission to list the information of jobs within a run
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListJobs.html
   */
  public toListJobs() {
    this.to('devicefarm:ListJobs');
    return this;
  }

  /**
   * Grants permission to list the information of network profiles within a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListNetworkProfiles.html
   */
  public toListNetworkProfiles() {
    this.to('devicefarm:ListNetworkProfiles');
    return this;
  }

  /**
   * Grants permission to list the offering promotions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListOfferingPromotions.html
   */
  public toListOfferingPromotions() {
    this.to('devicefarm:ListOfferingPromotions');
    return this;
  }

  /**
   * Grants permission to list all of the historical purchases, renewals, and system renewal transactions for an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListOfferingTransactions.html
   */
  public toListOfferingTransactions() {
    this.to('devicefarm:ListOfferingTransactions');
    return this;
  }

  /**
   * Grants permission to list the products or offerings that the user can manage through the API
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListOfferings.html
   */
  public toListOfferings() {
    this.to('devicefarm:ListOfferings');
    return this;
  }

  /**
   * Grants permission to list the information of mobile testing projects for an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListProjects.html
   */
  public toListProjects() {
    this.to('devicefarm:ListProjects');
    return this;
  }

  /**
   * Grants permission to list the information of currently running remote access sessions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListRemoteAccessSessions.html
   */
  public toListRemoteAccessSessions() {
    this.to('devicefarm:ListRemoteAccessSessions');
    return this;
  }

  /**
   * Grants permission to list the information of runs within a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListRuns.html
   */
  public toListRuns() {
    this.to('devicefarm:ListRuns');
    return this;
  }

  /**
   * Grants permission to list the information of samples within a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListSamples.html
   */
  public toListSamples() {
    this.to('devicefarm:ListSamples');
    return this;
  }

  /**
   * Grants permission to list the information of testing suites within a job
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListSuites.html
   */
  public toListSuites() {
    this.to('devicefarm:ListSuites');
    return this;
  }

  /**
   * Grants permission to list the tags of a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('devicefarm:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to list the information of desktop testing projects for an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridProjects.html
   */
  public toListTestGridProjects() {
    this.to('devicefarm:ListTestGridProjects');
    return this;
  }

  /**
   * Grants permission to list the session actions performed during a test grid session
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridSessionActions.html
   */
  public toListTestGridSessionActions() {
    this.to('devicefarm:ListTestGridSessionActions');
    return this;
  }

  /**
   * Grants permission to list the artifacts generated by a test grid session
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridSessionArtifacts.html
   */
  public toListTestGridSessionArtifacts() {
    this.to('devicefarm:ListTestGridSessionArtifacts');
    return this;
  }

  /**
   * Grants permission to list the sessions within a test grid project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridSessions.html
   */
  public toListTestGridSessions() {
    this.to('devicefarm:ListTestGridSessions');
    return this;
  }

  /**
   * Grants permission to list the information of tests within a testing suite
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTests.html
   */
  public toListTests() {
    this.to('devicefarm:ListTests');
    return this;
  }

  /**
   * Grants permission to list the information of unique problems within a run
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListUniqueProblems.html
   */
  public toListUniqueProblems() {
    this.to('devicefarm:ListUniqueProblems');
    return this;
  }

  /**
   * Grants permission to list the information of uploads within a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListUploads.html
   */
  public toListUploads() {
    this.to('devicefarm:ListUploads');
    return this;
  }

  /**
   * Grants permission to list the information of Amazon Virtual Private Cloud (VPC) endpoint configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListVPCEConfigurations.html
   */
  public toListVPCEConfigurations() {
    this.to('devicefarm:ListVPCEConfigurations');
    return this;
  }

  /**
   * Grants permission to purchase offerings for an AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_PurchaseOffering.html
   */
  public toPurchaseOffering() {
    this.to('devicefarm:PurchaseOffering');
    return this;
  }

  /**
   * Grants permission to set the quantity of devices to renew for an offering
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_RenewOffering.html
   */
  public toRenewOffering() {
    this.to('devicefarm:RenewOffering');
    return this;
  }

  /**
   * Grants permission to schedule a run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ScheduleRun.html
   */
  public toScheduleRun() {
    this.to('devicefarm:ScheduleRun');
    return this;
  }

  /**
   * Grants permission to terminate a running job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_StopJob.html
   */
  public toStopJob() {
    this.to('devicefarm:StopJob');
    return this;
  }

  /**
   * Grants permission to terminate a running remote access session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_StopRemoteAccessSession.html
   */
  public toStopRemoteAccessSession() {
    this.to('devicefarm:StopRemoteAccessSession');
    return this;
  }

  /**
   * Grants permission to terminate a running test run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_StopRun.html
   */
  public toStopRun() {
    this.to('devicefarm:StopRun');
    return this;
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
    this.to('devicefarm:TagResource');
    return this;
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
    this.to('devicefarm:UntagResource');
    return this;
  }

  /**
   * Grants permission to modify an existing device instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateDeviceInstance.html
   */
  public toUpdateDeviceInstance() {
    this.to('devicefarm:UpdateDeviceInstance');
    return this;
  }

  /**
   * Grants permission to modify an existing device pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateDevicePool.html
   */
  public toUpdateDevicePool() {
    this.to('devicefarm:UpdateDevicePool');
    return this;
  }

  /**
   * Grants permission to modify an existing instance profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateInstanceProfile.html
   */
  public toUpdateInstanceProfile() {
    this.to('devicefarm:UpdateInstanceProfile');
    return this;
  }

  /**
   * Grants permission to modify an existing network profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateNetworkProfile.html
   */
  public toUpdateNetworkProfile() {
    this.to('devicefarm:UpdateNetworkProfile');
    return this;
  }

  /**
   * Grants permission to modify an existing mobile testing project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateProject.html
   */
  public toUpdateProject() {
    this.to('devicefarm:UpdateProject');
    return this;
  }

  /**
   * Grants permission to modify an existing desktop testing project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateTestGridProject.html
   */
  public toUpdateTestGridProject() {
    this.to('devicefarm:UpdateTestGridProject');
    return this;
  }

  /**
   * Grants permission to modify an existing upload
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateUpload.html
   */
  public toUpdateUpload() {
    this.to('devicefarm:UpdateUpload');
    return this;
  }

  /**
   * Grants permission to modify an existing Amazon Virtual Private Cloud (VPC) endpoint configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateVPCEConfiguration.html
   */
  public toUpdateVPCEConfiguration() {
    this.to('devicefarm:UpdateVPCEConfiguration');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateDevicePool",
      "CreateInstanceProfile",
      "CreateNetworkProfile",
      "CreateRemoteAccessSession",
      "CreateTestGridProject",
      "CreateTestGridUrl",
      "CreateUpload",
      "CreateVPCEConfiguration",
      "DeleteDevicePool",
      "DeleteInstanceProfile",
      "DeleteNetworkProfile",
      "DeleteProject",
      "DeleteRemoteAccessSession",
      "DeleteRun",
      "DeleteTestGridProject",
      "DeleteUpload",
      "DeleteVPCEConfiguration",
      "InstallToRemoteAccessSession",
      "PurchaseOffering",
      "RenewOffering",
      "ScheduleRun",
      "StopJob",
      "StopRemoteAccessSession",
      "StopRun",
      "UpdateDeviceInstance",
      "UpdateDevicePool",
      "UpdateInstanceProfile",
      "UpdateNetworkProfile",
      "UpdateProject",
      "UpdateTestGridProject",
      "UpdateUpload",
      "UpdateVPCEConfiguration"
    ],
    "Tagging": [
      "CreateProject",
      "TagResource",
      "UntagResource"
    ],
    "Read": [
      "GetAccountSettings",
      "GetDevice",
      "GetDeviceInstance",
      "GetDevicePool",
      "GetDevicePoolCompatibility",
      "GetInstanceProfile",
      "GetJob",
      "GetNetworkProfile",
      "GetOfferingStatus",
      "GetProject",
      "GetRemoteAccessSession",
      "GetRun",
      "GetSuite",
      "GetTest",
      "GetTestGridProject",
      "GetTestGridSession",
      "GetUpload",
      "GetVPCEConfiguration"
    ],
    "List": [
      "ListArtifacts",
      "ListDeviceInstances",
      "ListDevicePools",
      "ListDevices",
      "ListInstanceProfiles",
      "ListJobs",
      "ListNetworkProfiles",
      "ListOfferingPromotions",
      "ListOfferingTransactions",
      "ListOfferings",
      "ListProjects",
      "ListRemoteAccessSessions",
      "ListRuns",
      "ListSamples",
      "ListSuites",
      "ListTagsForResource",
      "ListTestGridProjects",
      "ListTestGridSessionActions",
      "ListTestGridSessionArtifacts",
      "ListTestGridSessions",
      "ListTests",
      "ListUniqueProblems",
      "ListUploads",
      "ListVPCEConfigurations"
    ]
  };

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Project.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:project:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type run to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Run.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRun(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:run:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type job to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Job.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onJob(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:job:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type suite to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Suite.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSuite(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:suite:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type test to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Test.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTest(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:test:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type upload to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Upload.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onUpload(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:upload:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type artifact to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Artifact.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onArtifact(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:artifact:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type sample to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Sample.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSample(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:sample:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type networkprofile to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_NetworkProfile.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNetworkprofile(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:networkprofile:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deviceinstance to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeviceInstance.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeviceinstance(resourceId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}::deviceinstance:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type session to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_RemoteAccessSession.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSession(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:session:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type devicepool to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DevicePool.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDevicepool(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:devicepool:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type device to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Device.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDevice(resourceId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}::device:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type instanceprofile to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_InstanceProfile.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInstanceprofile(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:instanceprofile:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type vpceconfiguration to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_VPCEConfiguration.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVpceconfiguration(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:vpceconfiguration:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type testgrid-project to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_TestGridProject.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTestgridProject(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:testgrid-project:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type testgrid-session to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_TestGridSession.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTestgridSession(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:testgrid-session:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type DevicefarmActionsWrite = 'CreateDevicePool' | 'CreateInstanceProfile' | 'CreateNetworkProfile' | 'CreateRemoteAccessSession' | 'CreateTestGridProject' | 'CreateTestGridUrl' | 'CreateUpload' | 'CreateVPCEConfiguration' | 'DeleteDevicePool' | 'DeleteInstanceProfile' | 'DeleteNetworkProfile' | 'DeleteProject' | 'DeleteRemoteAccessSession' | 'DeleteRun' | 'DeleteTestGridProject' | 'DeleteUpload' | 'DeleteVPCEConfiguration' | 'InstallToRemoteAccessSession' | 'PurchaseOffering' | 'RenewOffering' | 'ScheduleRun' | 'StopJob' | 'StopRemoteAccessSession' | 'StopRun' | 'UpdateDeviceInstance' | 'UpdateDevicePool' | 'UpdateInstanceProfile' | 'UpdateNetworkProfile' | 'UpdateProject' | 'UpdateTestGridProject' | 'UpdateUpload' | 'UpdateVPCEConfiguration';
export type DevicefarmActionsTagging = 'CreateProject' | 'TagResource' | 'UntagResource';
export type DevicefarmActionsRead = 'GetAccountSettings' | 'GetDevice' | 'GetDeviceInstance' | 'GetDevicePool' | 'GetDevicePoolCompatibility' | 'GetInstanceProfile' | 'GetJob' | 'GetNetworkProfile' | 'GetOfferingStatus' | 'GetProject' | 'GetRemoteAccessSession' | 'GetRun' | 'GetSuite' | 'GetTest' | 'GetTestGridProject' | 'GetTestGridSession' | 'GetUpload' | 'GetVPCEConfiguration';
export type DevicefarmActionsList = 'ListArtifacts' | 'ListDeviceInstances' | 'ListDevicePools' | 'ListDevices' | 'ListInstanceProfiles' | 'ListJobs' | 'ListNetworkProfiles' | 'ListOfferingPromotions' | 'ListOfferingTransactions' | 'ListOfferings' | 'ListProjects' | 'ListRemoteAccessSessions' | 'ListRuns' | 'ListSamples' | 'ListSuites' | 'ListTagsForResource' | 'ListTestGridProjects' | 'ListTestGridSessionActions' | 'ListTestGridSessionArtifacts' | 'ListTestGridSessions' | 'ListTests' | 'ListUniqueProblems' | 'ListUploads' | 'ListVPCEConfigurations';
export type DevicefarmActions = DevicefarmActionsWrite | DevicefarmActionsTagging | DevicefarmActionsRead | DevicefarmActionsList;
