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
   * Associates a skill with the organization under the customer's AWS account. If a skill is private, the user implicitly accepts access to this skill during enablement.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ApproveSkill.html
   */
  public toApproveSkill() {
    return this.to('ApproveSkill');
  }

  /**
   * Associates a contact with a given address book.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateContactWithAddressBook.html
   */
  public toAssociateContactWithAddressBook() {
    return this.to('AssociateContactWithAddressBook');
  }

  /**
   * Associates device with given room.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateDeviceWithRoom.html
   */
  public toAssociateDeviceWithRoom() {
    return this.to('AssociateDeviceWithRoom');
  }

  /**
   * Associates the skill group with given room. SkillGroup ARN and Room ARN must be specified.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateSkillGroupWithRoom.html
   */
  public toAssociateSkillGroupWithRoom() {
    return this.to('AssociateSkillGroupWithRoom');
  }

  /**
   * Associates a skill with a skill group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateSkillWithSkillGroup.html
   */
  public toAssociateSkillWithSkillGroup() {
    return this.to('AssociateSkillWithSkillGroup');
  }

  /**
   * Makes a private skill available for enrolled users to enable on their devices.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateSkillWithUsers.html
   */
  public toAssociateSkillWithUsers() {
    return this.to('AssociateSkillWithUsers');
  }

  /**
   * Completes the operation of registering an Alexa device.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/ag/manage-devices.html
   */
  public toCompleteRegistration() {
    return this.to('CompleteRegistration');
  }

  /**
   * Creates an address book with the specified details.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateAddressBook.html
   */
  public toCreateAddressBook() {
    return this.to('CreateAddressBook');
  }

  /**
   * Creates a recurring schedule for usage reports to deliver to the specified S3 location with a specified daily or weekly interval.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateBusinessReportSchedule.html
   */
  public toCreateBusinessReportSchedule() {
    return this.to('CreateBusinessReportSchedule');
  }

  /**
   * Adds a new conference provider under the user's AWS account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateConferenceProvider.html
   */
  public toCreateConferenceProvider() {
    return this.to('CreateConferenceProvider');
  }

  /**
   * Creates a contact with the specified details.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateContact.html
   */
  public toCreateContact() {
    return this.to('CreateContact');
  }

  /**
   * Creates a new profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateProfile.html
   */
  public toCreateProfile() {
    return this.to('CreateProfile');
  }

  /**
   * Create room with the specified details.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateRoom.html
   */
  public toCreateRoom() {
    return this.to('CreateRoom');
  }

  /**
   * Creates a skill group with given name and description.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateSkillGroup.html
   */
  public toCreateSkillGroup() {
    return this.to('CreateSkillGroup');
  }

  /**
   * Creates a user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Deletes an address book by the address book ARN.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteAddressBook.html
   */
  public toDeleteAddressBook() {
    return this.to('DeleteAddressBook');
  }

  /**
   * Deletes the recurring report delivery schedule with the specified schedule ARN.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteBusinessReportSchedule.html
   */
  public toDeleteBusinessReportSchedule() {
    return this.to('DeleteBusinessReportSchedule');
  }

  /**
   * Deletes a conference provider.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteConferenceProvider.html
   */
  public toDeleteConferenceProvider() {
    return this.to('DeleteConferenceProvider');
  }

  /**
   * Deletes a contact by the contact ARN.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteContact.html
   */
  public toDeleteContact() {
    return this.to('DeleteContact');
  }

  /**
   * Removes a device from Alexa For Business.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteDevice.html
   */
  public toDeleteDevice() {
    return this.to('DeleteDevice');
  }

  /**
   * Delete profile by profile ARN.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteProfile.html
   */
  public toDeleteProfile() {
    return this.to('DeleteProfile');
  }

  /**
   * Delete room.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteRoom.html
   */
  public toDeleteRoom() {
    return this.to('DeleteRoom');
  }

  /**
   * Delete a parameter from a skill and room.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteRoomSkillParameter.html
   */
  public toDeleteRoomSkillParameter() {
    return this.to('DeleteRoomSkillParameter');
  }

  /**
   * Unlinks a third-party account from a skill.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteSkillAuthorization.html
   */
  public toDeleteSkillAuthorization() {
    return this.to('DeleteSkillAuthorization');
  }

  /**
   * Deletes skill group with skill group ARN. Skillgroup ARN must be specified.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteSkillGroup.html
   */
  public toDeleteSkillGroup() {
    return this.to('DeleteSkillGroup');
  }

  /**
   * Delete a user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Disassociates a contact from a given address book.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateContactFromAddressBook.html
   */
  public toDisassociateContactFromAddressBook() {
    return this.to('DisassociateContactFromAddressBook');
  }

  /**
   * Disassociates device from its current room.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateDeviceFromRoom.html
   */
  public toDisassociateDeviceFromRoom() {
    return this.to('DisassociateDeviceFromRoom');
  }

  /**
   * Disassociates a skill from a skill group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateSkillFromSkillGroup.html
   */
  public toDisassociateSkillFromSkillGroup() {
    return this.to('DisassociateSkillFromSkillGroup');
  }

  /**
   * Makes a private skill unavailable for enrolled users and prevents them from enabling it on their devices.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateSkillFromUsers.html
   */
  public toDisassociateSkillFromUsers() {
    return this.to('DisassociateSkillFromUsers');
  }

  /**
   * Disassociates the skill group from given room. SkillGroup ARN and Room ARN must be specified.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateSkillGroupFromRoom.html
   */
  public toDisassociateSkillGroupFromRoom() {
    return this.to('DisassociateSkillGroupFromRoom');
  }

  /**
   * Forgets smart home appliances associated to a room.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ForgetSmartHomeAppliances.html
   */
  public toForgetSmartHomeAppliances() {
    return this.to('ForgetSmartHomeAppliances');
  }

  /**
   * Gets the address book details by the address book ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetAddressBook.html
   */
  public toGetAddressBook() {
    return this.to('GetAddressBook');
  }

  /**
   * Retrieves the existing conference preferences.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetConferencePreference.html
   */
  public toGetConferencePreference() {
    return this.to('GetConferencePreference');
  }

  /**
   * Gets details about a specific conference provider.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetConferenceProvider.html
   */
  public toGetConferenceProvider() {
    return this.to('GetConferenceProvider');
  }

  /**
   * Gets the contact details by the contact ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetContact.html
   */
  public toGetContact() {
    return this.to('GetContact');
  }

  /**
   * Get device details.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetDevice.html
   */
  public toGetDevice() {
    return this.to('GetDevice');
  }

  /**
   * Gets the network profile details by the network profile ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetNetworkProfile.html
   */
  public toGetNetworkProfile() {
    return this.to('GetNetworkProfile');
  }

  /**
   * Gets profile when provided with Profile ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetProfile.html
   */
  public toGetProfile() {
    return this.to('GetProfile');
  }

  /**
   * Get room details.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetRoom.html
   */
  public toGetRoom() {
    return this.to('GetRoom');
  }

  /**
   * Get an existing parameter that has been set for a skill and room.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetRoomSkillParameter.html
   */
  public toGetRoomSkillParameter() {
    return this.to('GetRoomSkillParameter');
  }

  /**
   * Gets skill group details with skill group ARN. Skillgroup ARN must be specified.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetSkillGroup.html
   */
  public toGetSkillGroup() {
    return this.to('GetSkillGroup');
  }

  /**
   * Lists the details of the schedules that a user configured.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListBusinessReportSchedules.html
   */
  public toListBusinessReportSchedules() {
    return this.to('ListBusinessReportSchedules');
  }

  /**
   * Lists conference providers under a specific AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListConferenceProviders.html
   */
  public toListConferenceProviders() {
    return this.to('ListConferenceProviders');
  }

  /**
   * Lists the device event history, including device connection status, for up to 30 days.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListDeviceEvents.html
   */
  public toListDeviceEvents() {
    return this.to('ListDeviceEvents');
  }

  /**
   * Lists skills.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListSkills.html
   */
  public toListSkills() {
    return this.to('ListSkills');
  }

  /**
   * Lists all categories in the Alexa skill store.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListSkillsStoreCategories.html
   */
  public toListSkillsStoreCategories() {
    return this.to('ListSkillsStoreCategories');
  }

  /**
   * Lists all skills in the Alexa skill store by category.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListSkillsStoreSkillsByCategory.html
   */
  public toListSkillsStoreSkillsByCategory() {
    return this.to('ListSkillsStoreSkillsByCategory');
  }

  /**
   * Lists all of the smart home appliances associated with a room.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListSmartHomeAppliances.html
   */
  public toListSmartHomeAppliances() {
    return this.to('ListSmartHomeAppliances');
  }

  /**
   * Lists all tags on a resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListTags.html
   */
  public toListTags() {
    return this.to('ListTags');
  }

  /**
   * Sets the conference preferences on a specific conference provider at the account level.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_PutConferencePreference.html
   */
  public toPutConferencePreference() {
    return this.to('PutConferencePreference');
  }

  /**
   * Publishes Alexa device setup events.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/ag/manage-devices.html
   */
  public toPutDeviceSetupEvents() {
    return this.to('PutDeviceSetupEvents');
  }

  /**
   * Put a room specific parameter for a skill.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_PutRoomSkillParameter.html
   */
  public toPutRoomSkillParameter() {
    return this.to('PutRoomSkillParameter');
  }

  /**
   * Links a user's account to a third-party skill provider. If this API operation is called by an assumed IAM role, the skill being linked must be a private skill. Also, the skill must be owned by the AWS account that assumed the IAM role.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_PutSkillAuthorization.html
   */
  public toPutSkillAuthorization() {
    return this.to('PutSkillAuthorization');
  }

  /**
   * Registers an Alexa-enabled device built by an Original Equipment Manufacturer (OEM) using Alexa Voice Service (AVS).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_RegisterAVSDevice.html
   */
  public toRegisterAVSDevice() {
    return this.to('RegisterAVSDevice');
  }

  /**
   * Registers an Alexa device.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/ag/manage-devices.html
   */
  public toRegisterDevice() {
    return this.to('RegisterDevice');
  }

  /**
   * Disassociates a skill from the organization under a user's AWS account. If the skill is a private skill, it moves to an AcceptStatus of PENDING.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_RejectSkill.html
   */
  public toRejectSkill() {
    return this.to('RejectSkill');
  }

  /**
   * Returns resolved room information.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ResolveRoom.html
   */
  public toResolveRoom() {
    return this.to('ResolveRoom');
  }

  /**
   * Revoke an invitation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_RevokeInvitation.html
   */
  public toRevokeInvitation() {
    return this.to('RevokeInvitation');
  }

  /**
   * Searches address books and lists the ones that meet a set of filter and sort criteria.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchAddressBooks.html
   */
  public toSearchAddressBooks() {
    return this.to('SearchAddressBooks');
  }

  /**
   * Searches contacts and lists the ones that meet a set of filter and sort criteria.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchContacts.html
   */
  public toSearchContacts() {
    return this.to('SearchContacts');
  }

  /**
   * Search for devices.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchDevices.html
   */
  public toSearchDevices() {
    return this.to('SearchDevices');
  }

  /**
   * Searches network profiles and lists the ones that meet a set of filter and sort criteria.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchNetworkProfiles.html
   */
  public toSearchNetworkProfiles() {
    return this.to('SearchNetworkProfiles');
  }

  /**
   * Search for profiles.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchProfiles.html
   */
  public toSearchProfiles() {
    return this.to('SearchProfiles');
  }

  /**
   * Search for rooms.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchRooms.html
   */
  public toSearchRooms() {
    return this.to('SearchRooms');
  }

  /**
   * Search for skill groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchSkillGroups.html
   */
  public toSearchSkillGroups() {
    return this.to('SearchSkillGroups');
  }

  /**
   * Search for users.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchUsers.html
   */
  public toSearchUsers() {
    return this.to('SearchUsers');
  }

  /**
   * Send an invitation to a user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SendInvitation.html
   */
  public toSendInvitation() {
    return this.to('SendInvitation');
  }

  /**
   * Restore the device and its account to its known, default settings by clearing all information and settings set by its previous users.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_StartDeviceSync.html
   */
  public toStartDeviceSync() {
    return this.to('StartDeviceSync');
  }

  /**
   * Initiates the discovery of any smart home appliances associated with the room.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_StartSmartHomeApplianceDiscovery.html
   */
  public toStartSmartHomeApplianceDiscovery() {
    return this.to('StartSmartHomeApplianceDiscovery');
  }

  /**
   * Adds metadata tags to a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Removes metadata tags from a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Updates address book details by the address book ARN.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateAddressBook.html
   */
  public toUpdateAddressBook() {
    return this.to('UpdateAddressBook');
  }

  /**
   * Updates the configuration of the report delivery schedule with the specified schedule ARN.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateBusinessReportSchedule.html
   */
  public toUpdateBusinessReportSchedule() {
    return this.to('UpdateBusinessReportSchedule');
  }

  /**
   * Updates an existing conference provider's settings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateConferenceProvider.html
   */
  public toUpdateConferenceProvider() {
    return this.to('UpdateConferenceProvider');
  }

  /**
   * Updates the contact details by the contact ARN.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateContact.html
   */
  public toUpdateContact() {
    return this.to('UpdateContact');
  }

  /**
   * Updates device name.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateDevice.html
   */
  public toUpdateDevice() {
    return this.to('UpdateDevice');
  }

  /**
   * Updates an existing profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateProfile.html
   */
  public toUpdateProfile() {
    return this.to('UpdateProfile');
  }

  /**
   * Update room details.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateRoom.html
   */
  public toUpdateRoom() {
    return this.to('UpdateRoom');
  }

  /**
   * Updates skill group details with skill group ARN. Skillgroup ARN must be specified.
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
      "AssociateDeviceWithRoom",
      "AssociateSkillGroupWithRoom",
      "AssociateSkillWithSkillGroup",
      "AssociateSkillWithUsers",
      "CompleteRegistration",
      "CreateAddressBook",
      "CreateBusinessReportSchedule",
      "CreateConferenceProvider",
      "CreateContact",
      "CreateProfile",
      "CreateRoom",
      "CreateSkillGroup",
      "CreateUser",
      "DeleteAddressBook",
      "DeleteBusinessReportSchedule",
      "DeleteConferenceProvider",
      "DeleteContact",
      "DeleteDevice",
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
      "PutRoomSkillParameter",
      "PutSkillAuthorization",
      "RegisterAVSDevice",
      "RegisterDevice",
      "RejectSkill",
      "RevokeInvitation",
      "SendInvitation",
      "StartDeviceSync",
      "UpdateAddressBook",
      "UpdateBusinessReportSchedule",
      "UpdateConferenceProvider",
      "UpdateContact",
      "UpdateDevice",
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
