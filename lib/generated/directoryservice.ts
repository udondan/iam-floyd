import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [ds](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectoryservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ds extends PolicyStatement {
  public servicePrefix = 'ds';

  /**
   * Statement provider for service [ds](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectoryservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept a directory sharing request that was sent from the directory owner account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AcceptSharedDirectory.html
   */
  public toAcceptSharedDirectory() {
    return this.to('AcceptSharedDirectory');
  }

  /**
   * Grants permission to add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:AuthorizeSecurityGroupEgress
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:DescribeSecurityGroups
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AddIpRoutes.html
   */
  public toAddIpRoutes() {
    return this.to('AddIpRoutes');
  }

  /**
   * Grants permission to add two domain controllers in the specified Region for the specified directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AddRegion.html
   */
  public toAddRegion() {
    return this.to('AddRegion');
  }

  /**
   * Grants permission to add or overwrite one or more tags for the specified Amazon Directory Services directory
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AddTagsToResource.html
   */
  public toAddTagsToResource() {
    return this.to('AddTagsToResource');
  }

  /**
   * Grants permission to authorize an application for your AWS Directory
   *
   * Access Level: Write
   */
  public toAuthorizeApplication() {
    return this.to('AuthorizeApplication');
  }

  /**
   * Grants permission to cancel an in-progress schema extension to a Microsoft AD directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CancelSchemaExtension.html
   */
  public toCancelSchemaExtension() {
    return this.to('CancelSchemaExtension');
  }

  /**
   * Grants permission to verify that the alias is available for use
   *
   * Access Level: Read
   */
  public toCheckAlias() {
    return this.to('CheckAlias');
  }

  /**
   * Grants permission to create an AD Connector to connect to an on-premises directory
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:AuthorizeSecurityGroupEgress
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:CreateNetworkInterface
   * - ec2:CreateSecurityGroup
   * - ec2:CreateTags
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ConnectDirectory.html
   */
  public toConnectDirectory() {
    return this.to('ConnectDirectory');
  }

  /**
   * Grants permission to create an alias for a directory and assigns the alias to the directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateAlias.html
   */
  public toCreateAlias() {
    return this.to('CreateAlias');
  }

  /**
   * Grants permission to create a computer account in the specified directory, and joins the computer to the directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateComputer.html
   */
  public toCreateComputer() {
    return this.to('CreateComputer');
  }

  /**
   * Grants permission to create a conditional forwarder associated with your AWS directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateConditionalForwarder.html
   */
  public toCreateConditionalForwarder() {
    return this.to('CreateConditionalForwarder');
  }

  /**
   * Grants permission to create a Simple AD directory
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:AuthorizeSecurityGroupEgress
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:CreateNetworkInterface
   * - ec2:CreateSecurityGroup
   * - ec2:CreateTags
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateDirectory.html
   */
  public toCreateDirectory() {
    return this.to('CreateDirectory');
  }

  /**
   * Grants permission to create an IdentityPool Directory in the AWS cloud
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   */
  public toCreateIdentityPoolDirectory() {
    return this.to('CreateIdentityPoolDirectory');
  }

  /**
   * Grants permission to create a subscription to forward real time Directory Service domain controller security logs to the specified CloudWatch log group in your AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateLogSubscription.html
   */
  public toCreateLogSubscription() {
    return this.to('CreateLogSubscription');
  }

  /**
   * Grants permission to create a Microsoft AD in the AWS cloud
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:AuthorizeSecurityGroupEgress
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:CreateNetworkInterface
   * - ec2:CreateSecurityGroup
   * - ec2:CreateTags
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateMicrosoftAD.html
   */
  public toCreateMicrosoftAD() {
    return this.to('CreateMicrosoftAD');
  }

  /**
   * Grants permission to create a snapshot of a Simple AD or Microsoft AD directory in the AWS cloud
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateSnapshot.html
   */
  public toCreateSnapshot() {
    return this.to('CreateSnapshot');
  }

  /**
   * Grants permission to initiate the creation of the AWS side of a trust relationship between a Microsoft AD in the AWS cloud and an external domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateTrust.html
   */
  public toCreateTrust() {
    return this.to('CreateTrust');
  }

  /**
   * Grants permission to delete a conditional forwarder that has been set up for your AWS directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteConditionalForwarder.html
   */
  public toDeleteConditionalForwarder() {
    return this.to('DeleteConditionalForwarder');
  }

  /**
   * Grants permission to delete an AWS Directory Service directory
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DeleteNetworkInterface
   * - ec2:DeleteSecurityGroup
   * - ec2:DescribeNetworkInterfaces
   * - ec2:RevokeSecurityGroupEgress
   * - ec2:RevokeSecurityGroupIngress
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteDirectory.html
   */
  public toDeleteDirectory() {
    return this.to('DeleteDirectory');
  }

  /**
   * Grants permission to delete the specified log subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteLogSubscription.html
   */
  public toDeleteLogSubscription() {
    return this.to('DeleteLogSubscription');
  }

  /**
   * Grants permission to delete a directory snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteSnapshot.html
   */
  public toDeleteSnapshot() {
    return this.to('DeleteSnapshot');
  }

  /**
   * Grants permission to delete an existing trust relationship between your Microsoft AD in the AWS cloud and an external domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/DeleteTrust.html
   */
  public toDeleteTrust() {
    return this.to('DeleteTrust');
  }

  /**
   * Grants permission to delete from the system the certificate that was registered for a secured LDAP connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeregisterCertificate.html
   */
  public toDeregisterCertificate() {
    return this.to('DeregisterCertificate');
  }

  /**
   * Grants permission to remove the specified directory as a publisher to the specified SNS topic
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeregisterEventTopic.html
   */
  public toDeregisterEventTopic() {
    return this.to('DeregisterEventTopic');
  }

  /**
   * Grants permission to display information about the certificate registered for a secured LDAP connection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeCertificate.html
   */
  public toDescribeCertificate() {
    return this.to('DescribeCertificate');
  }

  /**
   * Grants permission to retrieve information about the type of client authentication for the specified directory, if the type is specified. If no type is specified, information about all client authentication types that are supported for the specified directory is retrieved. Currently, only SmartCard is supported
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeClientAuthenticationSettings.html
   */
  public toDescribeClientAuthenticationSettings() {
    return this.to('DescribeClientAuthenticationSettings');
  }

  /**
   * Grants permission to obtain information about the conditional forwarders for this account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeConditionalForwarders.html
   */
  public toDescribeConditionalForwarders() {
    return this.to('DescribeConditionalForwarders');
  }

  /**
   * Grants permission to obtain information about the directories that belong to this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeDirectories.html
   */
  public toDescribeDirectories() {
    return this.to('DescribeDirectories');
  }

  /**
   * Grants permission to provide information about any domain controllers in your directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeDomainControllers.html
   */
  public toDescribeDomainControllers() {
    return this.to('DescribeDomainControllers');
  }

  /**
   * Grants permission to obtain information about which SNS topics receive status messages from the specified directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeEventTopics.html
   */
  public toDescribeEventTopics() {
    return this.to('DescribeEventTopics');
  }

  /**
   * Grants permission to describe the status of LDAP security for the specified directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeLDAPSSettings.html
   */
  public toDescribeLDAPSSettings() {
    return this.to('DescribeLDAPSSettings');
  }

  /**
   * Grants permission to provide information about the Regions that are configured for multi-Region replication
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeRegions.html
   */
  public toDescribeRegions() {
    return this.to('DescribeRegions');
  }

  /**
   * Grants permission to return the shared directories in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeSharedDirectories.html
   */
  public toDescribeSharedDirectories() {
    return this.to('DescribeSharedDirectories');
  }

  /**
   * Grants permission to obtain information about the directory snapshots that belong to this account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeSnapshots.html
   */
  public toDescribeSnapshots() {
    return this.to('DescribeSnapshots');
  }

  /**
   * Grants permission to obtain information about the trust relationships for this account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeTrusts.html
   */
  public toDescribeTrusts() {
    return this.to('DescribeTrusts');
  }

  /**
   * Grants permission to disable alternative client authentication methods for the specified directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableClientAuthentication.html
   */
  public toDisableClientAuthentication() {
    return this.to('DisableClientAuthentication');
  }

  /**
   * Grants permission to deactivate LDAP secure calls for the specified directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableLDAPS.html
   */
  public toDisableLDAPS() {
    return this.to('DisableLDAPS');
  }

  /**
   * Grants permission to disable multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableRadius.html
   */
  public toDisableRadius() {
    return this.to('DisableRadius');
  }

  /**
   * Grants permission to disable single-sign on for a directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableSso.html
   */
  public toDisableSso() {
    return this.to('DisableSso');
  }

  /**
   * Grants permission to enable alternative client authentication methods for the specified directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableClientAuthentication.html
   */
  public toEnableClientAuthentication() {
    return this.to('EnableClientAuthentication');
  }

  /**
   * Grants permission to activate the switch for the specific directory to always use LDAP secure calls
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableLDAPS.html
   */
  public toEnableLDAPS() {
    return this.to('EnableLDAPS');
  }

  /**
   * Grants permission to enable multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableRadius.html
   */
  public toEnableRadius() {
    return this.to('EnableRadius');
  }

  /**
   * Grants permission to enable single-sign on for a directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableSso.html
   */
  public toEnableSso() {
    return this.to('EnableSso');
  }

  /**
   * Grants permission to retrieve the details of the authorized applications on a directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_GetAuthorizedApplicationDetails.html
   */
  public toGetAuthorizedApplicationDetails() {
    return this.to('GetAuthorizedApplicationDetails');
  }

  /**
   * Grants permission to obtain directory limit information for the current region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_GetDirectoryLimits.html
   */
  public toGetDirectoryLimits() {
    return this.to('GetDirectoryLimits');
  }

  /**
   * Grants permission to obtain the manual snapshot limits for a directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_GetSnapshotLimits.html
   */
  public toGetSnapshotLimits() {
    return this.to('GetSnapshotLimits');
  }

  /**
   * Grants permission to obtain the AWS applications authorized for a directory
   *
   * Access Level: Read
   */
  public toListAuthorizedApplications() {
    return this.to('ListAuthorizedApplications');
  }

  /**
   * Grants permission to list all the certificates registered for a secured LDAP connection, for the specified directory
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListCertificates.html
   */
  public toListCertificates() {
    return this.to('ListCertificates');
  }

  /**
   * Grants permission to list the address blocks that you have added to a directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListIpRoutes.html
   */
  public toListIpRoutes() {
    return this.to('ListIpRoutes');
  }

  /**
   * Grants permission to list the active log subscriptions for the AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListLogSubscriptions.html
   */
  public toListLogSubscriptions() {
    return this.to('ListLogSubscriptions');
  }

  /**
   * Grants permission to list all schema extensions applied to a Microsoft AD Directory
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListSchemaExtensions.html
   */
  public toListSchemaExtensions() {
    return this.to('ListSchemaExtensions');
  }

  /**
   * Grants permission to list all tags on an Amazon Directory Services directory
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to register a certificate for secured LDAP connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RegisterCertificate.html
   */
  public toRegisterCertificate() {
    return this.to('RegisterCertificate');
  }

  /**
   * Grants permission to associate a directory with an SNS topic
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sns:GetTopicAttributes
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RegisterEventTopic.html
   */
  public toRegisterEventTopic() {
    return this.to('RegisterEventTopic');
  }

  /**
   * Grants permission to reject a directory sharing request that was sent from the directory owner account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RejectSharedDirectory.html
   */
  public toRejectSharedDirectory() {
    return this.to('RejectSharedDirectory');
  }

  /**
   * Grants permission to remove IP address blocks from a directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RemoveIpRoutes.html
   */
  public toRemoveIpRoutes() {
    return this.to('RemoveIpRoutes');
  }

  /**
   * Grants permission to stop all replication and removes the domain controllers from the specified Region. You cannot remove the primary Region with this operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RemoveRegion.html
   */
  public toRemoveRegion() {
    return this.to('RemoveRegion');
  }

  /**
   * Grants permission to remove tags from an Amazon Directory Services directory
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:DeleteTags
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RemoveTagsFromResource.html
   */
  public toRemoveTagsFromResource() {
    return this.to('RemoveTagsFromResource');
  }

  /**
   * Grants permission to reset the password for any user in your AWS Managed Microsoft AD or Simple AD directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ResetUserPassword.html
   */
  public toResetUserPassword() {
    return this.to('ResetUserPassword');
  }

  /**
   * Grants permission to restore a directory using an existing directory snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RestoreFromSnapshot.html
   */
  public toRestoreFromSnapshot() {
    return this.to('RestoreFromSnapshot');
  }

  /**
   * Grants permission to share a specified directory in your AWS account (directory owner) with another AWS account (directory consumer). With this operation you can use your directory from any AWS account and from any Amazon VPC within an AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ShareDirectory.html
   */
  public toShareDirectory() {
    return this.to('ShareDirectory');
  }

  /**
   * Grants permission to apply a schema extension to a Microsoft AD directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_StartSchemaExtension.html
   */
  public toStartSchemaExtension() {
    return this.to('StartSchemaExtension');
  }

  /**
   * Grants permission to unauthorize an application from your AWS Directory
   *
   * Access Level: Write
   */
  public toUnauthorizeApplication() {
    return this.to('UnauthorizeApplication');
  }

  /**
   * Grants permission to stop the directory sharing between the directory owner and consumer accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UnshareDirectory.html
   */
  public toUnshareDirectory() {
    return this.to('UnshareDirectory');
  }

  /**
   * Grants permission to update a conditional forwarder that has been set up for your AWS directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateConditionalForwarder.html
   */
  public toUpdateConditionalForwarder() {
    return this.to('UpdateConditionalForwarder');
  }

  /**
   * Grants permission to add or remove domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateNumberOfDomainControllers.html
   */
  public toUpdateNumberOfDomainControllers() {
    return this.to('UpdateNumberOfDomainControllers');
  }

  /**
   * Grants permission to update the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateRadius.html
   */
  public toUpdateRadius() {
    return this.to('UpdateRadius');
  }

  /**
   * Grants permission to update the trust that has been set up between your AWS Managed Microsoft AD directory and an on-premises Active Directory
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateTrust.html
   */
  public toUpdateTrust() {
    return this.to('UpdateTrust');
  }

  /**
   * Grants permission to verify a trust relationship between your Microsoft AD in the AWS cloud and an external domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_VerifyTrust.html
   */
  public toVerifyTrust() {
    return this.to('VerifyTrust');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptSharedDirectory',
      'AddIpRoutes',
      'AddRegion',
      'AuthorizeApplication',
      'CancelSchemaExtension',
      'ConnectDirectory',
      'CreateAlias',
      'CreateComputer',
      'CreateConditionalForwarder',
      'CreateDirectory',
      'CreateIdentityPoolDirectory',
      'CreateLogSubscription',
      'CreateMicrosoftAD',
      'CreateSnapshot',
      'CreateTrust',
      'DeleteConditionalForwarder',
      'DeleteDirectory',
      'DeleteLogSubscription',
      'DeleteSnapshot',
      'DeleteTrust',
      'DeregisterCertificate',
      'DeregisterEventTopic',
      'DisableClientAuthentication',
      'DisableLDAPS',
      'DisableRadius',
      'DisableSso',
      'EnableClientAuthentication',
      'EnableLDAPS',
      'EnableRadius',
      'EnableSso',
      'RegisterCertificate',
      'RegisterEventTopic',
      'RejectSharedDirectory',
      'RemoveIpRoutes',
      'RemoveRegion',
      'ResetUserPassword',
      'RestoreFromSnapshot',
      'ShareDirectory',
      'StartSchemaExtension',
      'UnauthorizeApplication',
      'UnshareDirectory',
      'UpdateConditionalForwarder',
      'UpdateNumberOfDomainControllers',
      'UpdateRadius',
      'UpdateTrust'
    ],
    Tagging: [
      'AddTagsToResource',
      'RemoveTagsFromResource'
    ],
    Read: [
      'CheckAlias',
      'DescribeCertificate',
      'DescribeClientAuthenticationSettings',
      'DescribeConditionalForwarders',
      'DescribeDomainControllers',
      'DescribeEventTopics',
      'DescribeLDAPSSettings',
      'DescribeRegions',
      'DescribeSharedDirectories',
      'DescribeSnapshots',
      'DescribeTrusts',
      'GetAuthorizedApplicationDetails',
      'GetDirectoryLimits',
      'GetSnapshotLimits',
      'ListAuthorizedApplications',
      'ListIpRoutes',
      'ListLogSubscriptions',
      'ListTagsForResource',
      'VerifyTrust'
    ],
    List: [
      'DescribeDirectories',
      'ListCertificates',
      'ListSchemaExtensions'
    ]
  };

  /**
   * Adds a resource of type directory to the statement
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/welcome.html
   *
   * @param directoryId - Identifier for the directoryId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDirectory(directoryId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Ds.defaultPartition }:ds:${ region || '*' }:${ account || '*' }:directory/${ directoryId }`);
  }
}
