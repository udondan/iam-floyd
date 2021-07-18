import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [a4b](https://docs.aws.amazon.com/service-authorization/latest/reference/list_alexaforbusiness.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class A4b extends PolicyStatement {
  public servicePrefix = 'a4b';

  /**
   * Statement provider for service [a4b](https://docs.aws.amazon.com/service-authorization/latest/reference/list_alexaforbusiness.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a skill with the organization under the customer's AWSaccount
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ApproveSkill.html
   */
  public toApproveSkill() {
    return this.to('ApproveSkill');
  }

  /**
   * Grants permission to associate a contact with a given address book
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateContactWithAddressBook.html
   */
  public toAssociateContactWithAddressBook() {
    return this.to('AssociateContactWithAddressBook');
  }

  /**
   * Grants permission to associate a device with the specified network profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateDeviceWithNetworkProfile.html
   */
  public toAssociateDeviceWithNetworkProfile() {
    return this.to('AssociateDeviceWithNetworkProfile');
  }

  /**
   * Grants permission to associate device with given room
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateDeviceWithRoom.html
   */
  public toAssociateDeviceWithRoom() {
    return this.to('AssociateDeviceWithRoom');
  }

  /**
   * Grants permission to associate the skill group with given room
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateSkillGroupWithRoom.html
   */
  public toAssociateSkillGroupWithRoom() {
    return this.to('AssociateSkillGroupWithRoom');
  }

  /**
   * Grants permission to associate a skill with a skill group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateSkillWithSkillGroup.html
   */
  public toAssociateSkillWithSkillGroup() {
    return this.to('AssociateSkillWithSkillGroup');
  }

  /**
   * Grants permission to make a private skill available for enrolled users to enable on their devices
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateSkillWithUsers.html
   */
  public toAssociateSkillWithUsers() {
    return this.to('AssociateSkillWithUsers');
  }

  /**
   * Grants permission to complete the operation of registering an Alexa device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/ag/manage-devices.html
   */
  public toCompleteRegistration() {
    return this.to('CompleteRegistration');
  }

  /**
   * Grants permission to create an address book with the specified details
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateAddressBook.html
   */
  public toCreateAddressBook() {
    return this.to('CreateAddressBook');
  }

  /**
   * Grants permission to create a recurring schedule for usage reports to deliver to the specified S3 location with a specified daily or weekly interval
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateBusinessReportSchedule.html
   */
  public toCreateBusinessReportSchedule() {
    return this.to('CreateBusinessReportSchedule');
  }

  /**
   * Grants permission to add a new conference provider under the user's AWSaccount
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateConferenceProvider.html
   */
  public toCreateConferenceProvider() {
    return this.to('CreateConferenceProvider');
  }

  /**
   * Grants permission to create a contact with the specified details
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateContact.html
   */
  public toCreateContact() {
    return this.to('CreateContact');
  }

  /**
   * Grants permission to create a gateway group with the specified details
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateGatewayGroup.html
   */
  public toCreateGatewayGroup() {
    return this.to('CreateGatewayGroup');
  }

  /**
   * Grants permission to create a network profile with the specified details
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateNetworkProfile.html
   */
  public toCreateNetworkProfile() {
    return this.to('CreateNetworkProfile');
  }

  /**
   * Grants permission to create a new profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateProfile.html
   */
  public toCreateProfile() {
    return this.to('CreateProfile');
  }

  /**
   * Grants permission to create room with the specified details
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateRoom.html
   */
  public toCreateRoom() {
    return this.to('CreateRoom');
  }

  /**
   * Grants permission to create a skill group with given name and description
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateSkillGroup.html
   */
  public toCreateSkillGroup() {
    return this.to('CreateSkillGroup');
  }

  /**
   * Grants permission to create a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permission to delete an address book by the address book ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteAddressBook.html
   */
  public toDeleteAddressBook() {
    return this.to('DeleteAddressBook');
  }

  /**
   * Grants permission to delete the recurring report delivery schedule with the specified schedule ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteBusinessReportSchedule.html
   */
  public toDeleteBusinessReportSchedule() {
    return this.to('DeleteBusinessReportSchedule');
  }

  /**
   * Grants permission to delete a conference provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteConferenceProvider.html
   */
  public toDeleteConferenceProvider() {
    return this.to('DeleteConferenceProvider');
  }

  /**
   * Grants permission to delete a contact by the contact ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteContact.html
   */
  public toDeleteContact() {
    return this.to('DeleteContact');
  }

  /**
   * Grants permission to remove a device from Alexa For Business
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteDevice.html
   */
  public toDeleteDevice() {
    return this.to('DeleteDevice');
  }

  /**
   * Grants permission to delete the device's entire previous history of voice input data and associated response data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteDeviceUsageData.html
   */
  public toDeleteDeviceUsageData() {
    return this.to('DeleteDeviceUsageData');
  }

  /**
   * Grants permission to delete a gateway group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteGatewayGroup.html
   */
  public toDeleteGatewayGroup() {
    return this.to('DeleteGatewayGroup');
  }

  /**
   * Grants permission to delete a network profile by the network profile ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteNetworkProfile.html
   */
  public toDeleteNetworkProfile() {
    return this.to('DeleteNetworkProfile');
  }

  /**
   * Grants permission to delete profile by profile ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteProfile.html
   */
  public toDeleteProfile() {
    return this.to('DeleteProfile');
  }

  /**
   * Grants permission to delete room
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteRoom.html
   */
  public toDeleteRoom() {
    return this.to('DeleteRoom');
  }

  /**
   * Grants permission to delete a parameter from a skill and room
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteRoomSkillParameter.html
   */
  public toDeleteRoomSkillParameter() {
    return this.to('DeleteRoomSkillParameter');
  }

  /**
   * Grants permission to unlink a third-party account from a skill
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteSkillAuthorization.html
   */
  public toDeleteSkillAuthorization() {
    return this.to('DeleteSkillAuthorization');
  }

  /**
   * Grants permission to delete skill group with skill group ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteSkillGroup.html
   */
  public toDeleteSkillGroup() {
    return this.to('DeleteSkillGroup');
  }

  /**
   * Grants permission to delete a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permission to disassociate a contact from a given address book
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateContactFromAddressBook.html
   */
  public toDisassociateContactFromAddressBook() {
    return this.to('DisassociateContactFromAddressBook');
  }

  /**
   * Grants permission to disassociate device from its current room
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateDeviceFromRoom.html
   */
  public toDisassociateDeviceFromRoom() {
    return this.to('DisassociateDeviceFromRoom');
  }

  /**
   * Grants permission to disassociate a skill from a skill group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateSkillFromSkillGroup.html
   */
  public toDisassociateSkillFromSkillGroup() {
    return this.to('DisassociateSkillFromSkillGroup');
  }

  /**
   * Grants permission to make a private skill unavailable for enrolled users and prevent them from enabling it on their devices
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateSkillFromUsers.html
   */
  public toDisassociateSkillFromUsers() {
    return this.to('DisassociateSkillFromUsers');
  }

  /**
   * Grants permission to disassociate the skill group from given room
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateSkillGroupFromRoom.html
   */
  public toDisassociateSkillGroupFromRoom() {
    return this.to('DisassociateSkillGroupFromRoom');
  }

  /**
   * Grants permission to forget smart home appliances associated to a room
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ForgetSmartHomeAppliances.html
   */
  public toForgetSmartHomeAppliances() {
    return this.to('ForgetSmartHomeAppliances');
  }

  /**
   * Grants permission to get the address book details by the address book ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetAddressBook.html
   */
  public toGetAddressBook() {
    return this.to('GetAddressBook');
  }

  /**
   * Grants permission to retrieve the existing conference preferences
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetConferencePreference.html
   */
  public toGetConferencePreference() {
    return this.to('GetConferencePreference');
  }

  /**
   * Grants permission to get details about a specific conference provider
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetConferenceProvider.html
   */
  public toGetConferenceProvider() {
    return this.to('GetConferenceProvider');
  }

  /**
   * Grants permission to get the contact details by the contact ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetContact.html
   */
  public toGetContact() {
    return this.to('GetContact');
  }

  /**
   * Grants permission to get device details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetDevice.html
   */
  public toGetDevice() {
    return this.to('GetDevice');
  }

  /**
   * Grants permission to retrieve the details of a gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetGateway.html
   */
  public toGetGateway() {
    return this.to('GetGateway');
  }

  /**
   * Grants permission to retrieve the details of a gateway group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetGatewayGroup.html
   */
  public toGetGatewayGroup() {
    return this.to('GetGatewayGroup');
  }

  /**
   * Grants permission to retrieve the configured values for the user enrollment invitation email template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetInvitationConfiguration.html
   */
  public toGetInvitationConfiguration() {
    return this.to('GetInvitationConfiguration');
  }

  /**
   * Grants permission to get the network profile details by the network profile ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetNetworkProfile.html
   */
  public toGetNetworkProfile() {
    return this.to('GetNetworkProfile');
  }

  /**
   * Grants permission to get profile when provided with Profile ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetProfile.html
   */
  public toGetProfile() {
    return this.to('GetProfile');
  }

  /**
   * Grants permission to get room details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetRoom.html
   */
  public toGetRoom() {
    return this.to('GetRoom');
  }

  /**
   * Grants permission to get an existing parameter that has been set for a skill and room
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetRoomSkillParameter.html
   */
  public toGetRoomSkillParameter() {
    return this.to('GetRoomSkillParameter');
  }

  /**
   * Grants permission to get skill group details with skill group ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetSkillGroup.html
   */
  public toGetSkillGroup() {
    return this.to('GetSkillGroup');
  }

  /**
   * Grants permission to list the details of the schedules that a user configured
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListBusinessReportSchedules.html
   */
  public toListBusinessReportSchedules() {
    return this.to('ListBusinessReportSchedules');
  }

  /**
   * Grants permission to list conference providers under a specific AWSaccount
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListConferenceProviders.html
   */
  public toListConferenceProviders() {
    return this.to('ListConferenceProviders');
  }

  /**
   * Grants permission to list the device event history, including device connection status, for up to 30 days
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListDeviceEvents.html
   */
  public toListDeviceEvents() {
    return this.to('ListDeviceEvents');
  }

  /**
   * Grants permission to list gateway group summaries
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListGatewayGroups.html
   */
  public toListGatewayGroups() {
    return this.to('ListGatewayGroups');
  }

  /**
   * Grants permission to list gateway summaries
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListGateways.html
   */
  public toListGateways() {
    return this.to('ListGateways');
  }

  /**
   * Grants permission to list skills
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListSkills.html
   */
  public toListSkills() {
    return this.to('ListSkills');
  }

  /**
   * Grants permission to list all categories in the Alexa skill store
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListSkillsStoreCategories.html
   */
  public toListSkillsStoreCategories() {
    return this.to('ListSkillsStoreCategories');
  }

  /**
   * Grants permission to list all skills in the Alexa skill store by category
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListSkillsStoreSkillsByCategory.html
   */
  public toListSkillsStoreSkillsByCategory() {
    return this.to('ListSkillsStoreSkillsByCategory');
  }

  /**
   * Grants permission to list all of the smart home appliances associated with a room
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListSmartHomeAppliances.html
   */
  public toListSmartHomeAppliances() {
    return this.to('ListSmartHomeAppliances');
  }

  /**
   * Grants permission to list all tags on a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListTags.html
   */
  public toListTags() {
    return this.to('ListTags');
  }

  /**
   * Grants permission to set the conference preferences on a specific conference provider at the account level
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_PutConferencePreference.html
   */
  public toPutConferencePreference() {
    return this.to('PutConferencePreference');
  }

  /**
   * Grants permission to publish Alexa device setup events
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/ag/manage-devices.html
   */
  public toPutDeviceSetupEvents() {
    return this.to('PutDeviceSetupEvents');
  }

  /**
   * Grants permission to configure the email template for the user enrollment invitation with the specified attributes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_PutInvitationConfiguration.html
   */
  public toPutInvitationConfiguration() {
    return this.to('PutInvitationConfiguration');
  }

  /**
   * Grants permission to put a room specific parameter for a skill
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_PutRoomSkillParameter.html
   */
  public toPutRoomSkillParameter() {
    return this.to('PutRoomSkillParameter');
  }

  /**
   * Grants permission to link a user's account to a third-party skill provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_PutSkillAuthorization.html
   */
  public toPutSkillAuthorization() {
    return this.to('PutSkillAuthorization');
  }

  /**
   * Grants permission to register an Alexa-enabled device built by an Original Equipment Manufacturer (OEM) using Alexa Voice Service (AVS)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_RegisterAVSDevice.html
   */
  public toRegisterAVSDevice() {
    return this.to('RegisterAVSDevice');
  }

  /**
   * Grants permission to register an Alexa device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/ag/manage-devices.html
   */
  public toRegisterDevice() {
    return this.to('RegisterDevice');
  }

  /**
   * Grants permission to disassociate a skill from the organization under a user's AWSaccount
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_RejectSkill.html
   */
  public toRejectSkill() {
    return this.to('RejectSkill');
  }

  /**
   * Grants permission to resolve room information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ResolveRoom.html
   */
  public toResolveRoom() {
    return this.to('ResolveRoom');
  }

  /**
   * Grants permission to revoke an invitation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_RevokeInvitation.html
   */
  public toRevokeInvitation() {
    return this.to('RevokeInvitation');
  }

  /**
   * Grants permission to search address books and list the ones that meet a set of filter and sort criteria
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchAddressBooks.html
   */
  public toSearchAddressBooks() {
    return this.to('SearchAddressBooks');
  }

  /**
   * Grants permission to search contacts and list the ones that meet a set of filter and sort criteria
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchContacts.html
   */
  public toSearchContacts() {
    return this.to('SearchContacts');
  }

  /**
   * Grants permission to search for devices
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchDevices.html
   */
  public toSearchDevices() {
    return this.to('SearchDevices');
  }

  /**
   * Grants permission to search network profiles and list the ones that meet a set of filter and sort criteria
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchNetworkProfiles.html
   */
  public toSearchNetworkProfiles() {
    return this.to('SearchNetworkProfiles');
  }

  /**
   * Grants permission to search for profiles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchProfiles.html
   */
  public toSearchProfiles() {
    return this.to('SearchProfiles');
  }

  /**
   * Grants permission to search for rooms
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchRooms.html
   */
  public toSearchRooms() {
    return this.to('SearchRooms');
  }

  /**
   * Grants permission to search for skill groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchSkillGroups.html
   */
  public toSearchSkillGroups() {
    return this.to('SearchSkillGroups');
  }

  /**
   * Grants permission to search for users
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchUsers.html
   */
  public toSearchUsers() {
    return this.to('SearchUsers');
  }

  /**
   * Grants permission to trigger an asynchronous flow to send text, SSML, or audio announcements to rooms that are identified by a search or filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SendAnnouncement.html
   */
  public toSendAnnouncement() {
    return this.to('SendAnnouncement');
  }

  /**
   * Grants permission to send an invitation to a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SendInvitation.html
   */
  public toSendInvitation() {
    return this.to('SendInvitation');
  }

  /**
   * Grants permission to restore the device and its account to its known, default settings by clearing all information and settings set by its previous users
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_StartDeviceSync.html
   */
  public toStartDeviceSync() {
    return this.to('StartDeviceSync');
  }

  /**
   * Grants permission to initiate the discovery of any smart home appliances associated with the room
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_StartSmartHomeApplianceDiscovery.html
   */
  public toStartSmartHomeApplianceDiscovery() {
    return this.to('StartSmartHomeApplianceDiscovery');
  }

  /**
   * Grants permission to add metadata tags to a resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove metadata tags from a resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update address book details by the address book ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateAddressBook.html
   */
  public toUpdateAddressBook() {
    return this.to('UpdateAddressBook');
  }

  /**
   * Grants permission to update the configuration of the report delivery schedule with the specified schedule ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateBusinessReportSchedule.html
   */
  public toUpdateBusinessReportSchedule() {
    return this.to('UpdateBusinessReportSchedule');
  }

  /**
   * Grants permission to update an existing conference provider's settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateConferenceProvider.html
   */
  public toUpdateConferenceProvider() {
    return this.to('UpdateConferenceProvider');
  }

  /**
   * Grants permission to update the contact details by the contact ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateContact.html
   */
  public toUpdateContact() {
    return this.to('UpdateContact');
  }

  /**
   * Grants permission to update device name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateDevice.html
   */
  public toUpdateDevice() {
    return this.to('UpdateDevice');
  }

  /**
   * Grants permission to update the details of a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateGateway.html
   */
  public toUpdateGateway() {
    return this.to('UpdateGateway');
  }

  /**
   * Grants permission to update the details of a gateway group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateGatewayGroup.html
   */
  public toUpdateGatewayGroup() {
    return this.to('UpdateGatewayGroup');
  }

  /**
   * Grants permission to update a network profile by the network profile ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateNetworkProfile.html
   */
  public toUpdateNetworkProfile() {
    return this.to('UpdateNetworkProfile');
  }

  /**
   * Grants permission to update an existing profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateProfile.html
   */
  public toUpdateProfile() {
    return this.to('UpdateProfile');
  }

  /**
   * Grants permission to update room details
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateRoom.html
   */
  public toUpdateRoom() {
    return this.to('UpdateRoom');
  }

  /**
   * Grants permission to update skill group details with skill group ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateSkillGroup.html
   */
  public toUpdateSkillGroup() {
    return this.to('UpdateSkillGroup');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "ApproveSkill",
      "AssociateContactWithAddressBook",
      "AssociateDeviceWithNetworkProfile",
      "AssociateDeviceWithRoom",
      "AssociateSkillGroupWithRoom",
      "AssociateSkillWithSkillGroup",
      "AssociateSkillWithUsers",
      "CompleteRegistration",
      "CreateAddressBook",
      "CreateBusinessReportSchedule",
      "CreateConferenceProvider",
      "CreateContact",
      "CreateGatewayGroup",
      "CreateNetworkProfile",
      "CreateProfile",
      "CreateRoom",
      "CreateSkillGroup",
      "CreateUser",
      "DeleteAddressBook",
      "DeleteBusinessReportSchedule",
      "DeleteConferenceProvider",
      "DeleteContact",
      "DeleteDevice",
      "DeleteDeviceUsageData",
      "DeleteGatewayGroup",
      "DeleteNetworkProfile",
      "DeleteProfile",
      "DeleteRoom",
      "DeleteRoomSkillParameter",
      "DeleteSkillAuthorization",
      "DeleteSkillGroup",
      "DeleteUser",
      "DisassociateContactFromAddressBook",
      "DisassociateDeviceFromRoom",
      "DisassociateSkillFromSkillGroup",
      "DisassociateSkillFromUsers",
      "DisassociateSkillGroupFromRoom",
      "ForgetSmartHomeAppliances",
      "PutConferencePreference",
      "PutDeviceSetupEvents",
      "PutInvitationConfiguration",
      "PutRoomSkillParameter",
      "PutSkillAuthorization",
      "RegisterAVSDevice",
      "RegisterDevice",
      "RejectSkill",
      "RevokeInvitation",
      "SendAnnouncement",
      "SendInvitation",
      "StartDeviceSync",
      "UpdateAddressBook",
      "UpdateBusinessReportSchedule",
      "UpdateConferenceProvider",
      "UpdateContact",
      "UpdateDevice",
      "UpdateGateway",
      "UpdateGatewayGroup",
      "UpdateNetworkProfile",
      "UpdateProfile",
      "UpdateRoom",
      "UpdateSkillGroup"
    ],
    "Read": [
      "GetAddressBook",
      "GetConferencePreference",
      "GetConferenceProvider",
      "GetContact",
      "GetDevice",
      "GetGateway",
      "GetGatewayGroup",
      "GetInvitationConfiguration",
      "GetNetworkProfile",
      "GetProfile",
      "GetRoom",
      "GetRoomSkillParameter",
      "GetSkillGroup",
      "ListTags",
      "ResolveRoom",
      "StartSmartHomeApplianceDiscovery"
    ],
    "List": [
      "ListBusinessReportSchedules",
      "ListConferenceProviders",
      "ListDeviceEvents",
      "ListGatewayGroups",
      "ListGateways",
      "ListSkills",
      "ListSkillsStoreCategories",
      "ListSkillsStoreSkillsByCategory",
      "ListSmartHomeAppliances",
      "SearchAddressBooks",
      "SearchContacts",
      "SearchDevices",
      "SearchNetworkProfiles",
      "SearchProfiles",
      "SearchRooms",
      "SearchSkillGroups",
      "SearchUsers"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type profile to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_Profile.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProfile(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:profile/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type room to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_Room.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRoom(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:room/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type device to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_Device.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDevice(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:device/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type skillgroup to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SkillGroup.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSkillgroup(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:skill-group/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UserData.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUser(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:user/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type addressbook to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_AddressBook.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAddressbook(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:address-book/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type conferenceprovider to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ConferenceProvider.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onConferenceprovider(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:conference-provider/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type contact to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_Contact.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onContact(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:contact/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type schedule to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_BusinessReportSchedule.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSchedule(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:schedule/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type networkprofile to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_NetworkProfile.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onNetworkprofile(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:network-profile/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type gateway to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_Gateway.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGateway(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:gateway/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type gatewaygroup to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GatewayGroup.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGatewaygroup(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:gateway-group/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the Amazon Id in the request
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_RegisterAVSDevice.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAmazonId(value: string | string[], operator?: Operator | string) {
    return this.if(`amazonId`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the device type in the request
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchDevices.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFiltersDeviceType(value: string | string[], operator?: Operator | string) {
    return this.if(`filters_deviceType`, value, operator || 'StringLike');
  }
}
