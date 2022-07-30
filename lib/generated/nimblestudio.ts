import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [nimble](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonnimblestudio.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Nimble extends PolicyStatement {
  public servicePrefix = 'nimble';

  /**
   * Statement provider for service [nimble](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonnimblestudio.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept EULAs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_AcceptEulas.html
   */
  public toAcceptEulas() {
    return this.to('AcceptEulas');
  }

  /**
   * Grants permission to create a launch profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:DescribeNatGateways
   * - ec2:DescribeNetworkAcls
   * - ec2:DescribeRouteTables
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcEndpoints
   * - ec2:RunInstances
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_CreateLaunchProfile.html
   */
  public toCreateLaunchProfile() {
    return this.to('CreateLaunchProfile');
  }

  /**
   * Grants permission to create a streaming image
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - ec2:DescribeImages
   * - ec2:DescribeSnapshots
   * - ec2:ModifyInstanceAttribute
   * - ec2:ModifySnapshotAttribute
   * - ec2:RegisterImage
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_CreateStreamingImage.html
   */
  public toCreateStreamingImage() {
    return this.to('CreateStreamingImage');
  }

  /**
   * Grants permission to create a streaming session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - ec2:CreateNetworkInterface
   * - ec2:CreateNetworkInterfacePermission
   * - nimble:GetLaunchProfile
   * - nimble:GetLaunchProfileInitialization
   * - nimble:ListEulaAcceptances
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_CreateStreamingSession.html
   */
  public toCreateStreamingSession() {
    return this.to('CreateStreamingSession');
  }

  /**
   * Grants permission to create a StreamingSessionStream
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequesterPrincipalId()
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_CreateStreamingSessionStream.html
   */
  public toCreateStreamingSessionStream() {
    return this.to('CreateStreamingSessionStream');
  }

  /**
   * Grants permission to create a studio
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:PassRole
   * - sso:CreateManagedApplicationInstance
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_CreateStudio.html
   */
  public toCreateStudio() {
    return this.to('CreateStudio');
  }

  /**
   * Grants permission to create a studio component. A studio component designates a network resource to which a launch profile will provide access
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - ds:AuthorizeApplication
   * - ds:DescribeDirectories
   * - ec2:DescribeSecurityGroups
   * - fsx:DescribeFileSystems
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_CreateStudioComponent.html
   */
  public toCreateStudioComponent() {
    return this.to('CreateStudioComponent');
  }

  /**
   * Grants permission to delete a launch profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteLaunchProfile.html
   */
  public toDeleteLaunchProfile() {
    return this.to('DeleteLaunchProfile');
  }

  /**
   * Grants permission to delete a launch profile member
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteLaunchProfileMember.html
   */
  public toDeleteLaunchProfileMember() {
    return this.to('DeleteLaunchProfileMember');
  }

  /**
   * Grants permission to delete a streaming image
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DeleteSnapshot
   * - ec2:DeregisterImage
   * - ec2:ModifyInstanceAttribute
   * - ec2:ModifySnapshotAttribute
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteStreamingImage.html
   */
  public toDeleteStreamingImage() {
    return this.to('DeleteStreamingImage');
  }

  /**
   * Grants permission to delete a streaming session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequesterPrincipalId()
   *
   * Dependent actions:
   * - ec2:DeleteNetworkInterface
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteStreamingSession.html
   */
  public toDeleteStreamingSession() {
    return this.to('DeleteStreamingSession');
  }

  /**
   * Grants permission to delete a studio
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sso:DeleteManagedApplicationInstance
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteStudio.html
   */
  public toDeleteStudio() {
    return this.to('DeleteStudio');
  }

  /**
   * Grants permission to delete a studio component
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ds:UnauthorizeApplication
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteStudioComponent.html
   */
  public toDeleteStudioComponent() {
    return this.to('DeleteStudioComponent');
  }

  /**
   * Grants permission to delete a studio member
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_DeleteStudioMember.html
   */
  public toDeleteStudioMember() {
    return this.to('DeleteStudioMember');
  }

  /**
   * Grants permission to get a EULA
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetEula.html
   */
  public toGetEula() {
    return this.to('GetEula');
  }

  /**
   * Grants permission to allow Nimble Studio portal to show the appropriate features for this account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html
   */
  public toGetFeatureMap() {
    return this.to('GetFeatureMap');
  }

  /**
   * Grants permission to get a launch profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetLaunchProfile.html
   */
  public toGetLaunchProfile() {
    return this.to('GetLaunchProfile');
  }

  /**
   * Grants permission to get a launch profile's details, which includes the summary of studio components and streaming images used by the launch profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetLaunchProfileDetails.html
   */
  public toGetLaunchProfileDetails() {
    return this.to('GetLaunchProfileDetails');
  }

  /**
   * Grants permission to get a launch profile initialization. A launch profile initialization is a dereferenced version of a launch profile, including attached studio component connection information
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - ds:DescribeDirectories
   * - ec2:DescribeSecurityGroups
   * - fsx:DescribeFileSystems
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetLaunchProfileInitialization.html
   */
  public toGetLaunchProfileInitialization() {
    return this.to('GetLaunchProfileInitialization');
  }

  /**
   * Grants permission to get a launch profile member
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetLaunchProfileMember.html
   */
  public toGetLaunchProfileMember() {
    return this.to('GetLaunchProfileMember');
  }

  /**
   * Grants permission to get a streaming image
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetStreamingImage.html
   */
  public toGetStreamingImage() {
    return this.to('GetStreamingImage');
  }

  /**
   * Grants permission to get a streaming session
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifRequesterPrincipalId()
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetStreamingSession.html
   */
  public toGetStreamingSession() {
    return this.to('GetStreamingSession');
  }

  /**
   * Grants permission to get a streaming session stream
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifRequesterPrincipalId()
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetStreamingSessionStream.html
   */
  public toGetStreamingSessionStream() {
    return this.to('GetStreamingSessionStream');
  }

  /**
   * Grants permission to get a studio
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetStudio.html
   */
  public toGetStudio() {
    return this.to('GetStudio');
  }

  /**
   * Grants permission to get a studio component
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetStudioComponent.html
   */
  public toGetStudioComponent() {
    return this.to('GetStudioComponent');
  }

  /**
   * Grants permission to get a studio member
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_GetStudioMember.html
   */
  public toGetStudioMember() {
    return this.to('GetStudioMember');
  }

  /**
   * Grants permission to list EULA acceptances
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListEulaAcceptances.html
   */
  public toListEulaAcceptances() {
    return this.to('ListEulaAcceptances');
  }

  /**
   * Grants permission to list EULAs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListEulas.html
   */
  public toListEulas() {
    return this.to('ListEulas');
  }

  /**
   * Grants permission to list launch profile members
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListLaunchProfileMembers.html
   */
  public toListLaunchProfileMembers() {
    return this.to('ListLaunchProfileMembers');
  }

  /**
   * Grants permission to list launch profiles
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPrincipalId()
   * - .ifRequesterPrincipalId()
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListLaunchProfiles.html
   */
  public toListLaunchProfiles() {
    return this.to('ListLaunchProfiles');
  }

  /**
   * Grants permission to list streaming images
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListStreamingImages.html
   */
  public toListStreamingImages() {
    return this.to('ListStreamingImages');
  }

  /**
   * Grants permission to list streaming sessions
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifCreatedBy()
   * - .ifOwnedBy()
   * - .ifRequesterPrincipalId()
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListStreamingSessions.html
   */
  public toListStreamingSessions() {
    return this.to('ListStreamingSessions');
  }

  /**
   * Grants permission to list studio components
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListStudioComponents.html
   */
  public toListStudioComponents() {
    return this.to('ListStudioComponents');
  }

  /**
   * Grants permission to list studio members
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListStudioMembers.html
   */
  public toListStudioMembers() {
    return this.to('ListStudioMembers');
  }

  /**
   * Grants permission to list all studios
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListStudios.html
   */
  public toListStudios() {
    return this.to('ListStudios');
  }

  /**
   * Grants permission to list all tags on a Nimble Studio resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to add/update launch profile members
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sso-directory:DescribeUsers
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_PutLaunchProfileMembers.html
   */
  public toPutLaunchProfileMembers() {
    return this.to('PutLaunchProfileMembers');
  }

  /**
   * Grants permission to report metrics and logs for the Nimble Studio portal to monitor application health
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html
   */
  public toPutStudioLogEvents() {
    return this.to('PutStudioLogEvents');
  }

  /**
   * Grants permission to add/update studio members
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sso-directory:DescribeUsers
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_PutStudioMembers.html
   */
  public toPutStudioMembers() {
    return this.to('PutStudioMembers');
  }

  /**
   * Grants permission to start a streaming session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequesterPrincipalId()
   *
   * Dependent actions:
   * - nimble:GetLaunchProfile
   * - nimble:GetLaunchProfileMember
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_StartStreamingSession.html
   */
  public toStartStreamingSession() {
    return this.to('StartStreamingSession');
  }

  /**
   * Grants permission to repair the studio's AWS SSO configuration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sso:CreateManagedApplicationInstance
   * - sso:GetManagedApplicationInstance
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_StartStudioSSOConfigurationRepair.html
   */
  public toStartStudioSSOConfigurationRepair() {
    return this.to('StartStudioSSOConfigurationRepair');
  }

  /**
   * Grants permission to stop a streaming session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRequesterPrincipalId()
   *
   * Dependent actions:
   * - nimble:GetLaunchProfile
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_StopStreamingSession.html
   */
  public toStopStreamingSession() {
    return this.to('StopStreamingSession');
  }

  /**
   * Grants permission to add or overwrite one or more tags for the specified Nimble Studio resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to disassociate one or more tags from the specified Nimble Studio resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a launch profile
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DescribeNatGateways
   * - ec2:DescribeNetworkAcls
   * - ec2:DescribeRouteTables
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcEndpoints
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_UpdateLaunchProfile.html
   */
  public toUpdateLaunchProfile() {
    return this.to('UpdateLaunchProfile');
  }

  /**
   * Grants permission to update a launch profile member
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_UpdateLaunchProfileMember.html
   */
  public toUpdateLaunchProfileMember() {
    return this.to('UpdateLaunchProfileMember');
  }

  /**
   * Grants permission to update a streaming image
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_UpdateStreamingImage.html
   */
  public toUpdateStreamingImage() {
    return this.to('UpdateStreamingImage');
  }

  /**
   * Grants permission to update a studio
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_UpdateStudio.html
   */
  public toUpdateStudio() {
    return this.to('UpdateStudio');
  }

  /**
   * Grants permission to update a studio component
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ds:AuthorizeApplication
   * - ds:DescribeDirectories
   * - ec2:DescribeSecurityGroups
   * - fsx:DescribeFileSystems
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_UpdateStudioComponent.html
   */
  public toUpdateStudioComponent() {
    return this.to('UpdateStudioComponent');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptEulas',
      'CreateLaunchProfile',
      'CreateStreamingImage',
      'CreateStreamingSession',
      'CreateStreamingSessionStream',
      'CreateStudio',
      'CreateStudioComponent',
      'DeleteLaunchProfile',
      'DeleteLaunchProfileMember',
      'DeleteStreamingImage',
      'DeleteStreamingSession',
      'DeleteStudio',
      'DeleteStudioComponent',
      'DeleteStudioMember',
      'PutLaunchProfileMembers',
      'PutStudioLogEvents',
      'PutStudioMembers',
      'StartStreamingSession',
      'StartStudioSSOConfigurationRepair',
      'StopStreamingSession',
      'UpdateLaunchProfile',
      'UpdateLaunchProfileMember',
      'UpdateStreamingImage',
      'UpdateStudio',
      'UpdateStudioComponent'
    ],
    Read: [
      'GetEula',
      'GetFeatureMap',
      'GetLaunchProfile',
      'GetLaunchProfileDetails',
      'GetLaunchProfileInitialization',
      'GetLaunchProfileMember',
      'GetStreamingImage',
      'GetStreamingSession',
      'GetStreamingSessionStream',
      'GetStudio',
      'GetStudioComponent',
      'GetStudioMember',
      'ListEulaAcceptances',
      'ListEulas',
      'ListLaunchProfileMembers',
      'ListLaunchProfiles',
      'ListStreamingImages',
      'ListStreamingSessions',
      'ListStudioComponents',
      'ListStudioMembers',
      'ListStudios',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type studio to the statement
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_Studio.html
   *
   * @param studioId - Identifier for the studioId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifStudioId()
   */
  public onStudio(studioId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Nimble.defaultPartition }:nimble:${ region || '*' }:${ account || '*' }:studio/${ studioId }`);
  }

  /**
   * Adds a resource of type streaming-image to the statement
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_StreamingImage.html
   *
   * @param streamingImageId - Identifier for the streamingImageId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifStudioId()
   */
  public onStreamingImage(streamingImageId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Nimble.defaultPartition }:nimble:${ region || '*' }:${ account || '*' }:streaming-image/${ streamingImageId }`);
  }

  /**
   * Adds a resource of type studio-component to the statement
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_StudioComponent.html
   *
   * @param studioComponentId - Identifier for the studioComponentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifStudioId()
   */
  public onStudioComponent(studioComponentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Nimble.defaultPartition }:nimble:${ region || '*' }:${ account || '*' }:studio-component/${ studioComponentId }`);
  }

  /**
   * Adds a resource of type launch-profile to the statement
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_LaunchProfile.html
   *
   * @param launchProfileId - Identifier for the launchProfileId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifStudioId()
   */
  public onLaunchProfile(launchProfileId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Nimble.defaultPartition }:nimble:${ region || '*' }:${ account || '*' }:launch-profile/${ launchProfileId }`);
  }

  /**
   * Adds a resource of type streaming-session to the statement
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_StreamingSession.html
   *
   * @param streamingSessionId - Identifier for the streamingSessionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifCreatedBy()
   * - .ifOwnedBy()
   */
  public onStreamingSession(streamingSessionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Nimble.defaultPartition }:nimble:${ region || '*' }:${ account || '*' }:streaming-session/${ streamingSessionId }`);
  }

  /**
   * Adds a resource of type eula to the statement
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_Eula.html
   *
   * @param eulaId - Identifier for the eulaId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEula(eulaId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Nimble.defaultPartition }:nimble:${ region || '*' }:${ account || '*' }:eula/${ eulaId }`);
  }

  /**
   * Adds a resource of type eula-acceptance to the statement
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/APIReference/API_EulaAcceptance.html
   *
   * @param eulaAcceptanceId - Identifier for the eulaAcceptanceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifStudioId()
   */
  public onEulaAcceptance(eulaAcceptanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Nimble.defaultPartition }:nimble:${ region || '*' }:${ account || '*' }:eula-acceptance/${ eulaAcceptanceId }`);
  }

  /**
   * Filters access by the createdBy request parameter or the ID of the creator of the resource
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html
   *
   * Applies to actions:
   * - .toListStreamingSessions()
   *
   * Applies to resource types:
   * - streaming-session
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCreatedBy(value: string | string[], operator?: Operator | string) {
    return this.if(`createdBy`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ownedBy request parameter or the ID of the owner of the resource
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html
   *
   * Applies to actions:
   * - .toListStreamingSessions()
   *
   * Applies to resource types:
   * - streaming-session
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOwnedBy(value: string | string[], operator?: Operator | string) {
    return this.if(`ownedBy`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the principalId request parameter
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html
   *
   * Applies to actions:
   * - .toListLaunchProfiles()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPrincipalId(value: string | string[], operator?: Operator | string) {
    return this.if(`principalId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of the logged in user
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html
   *
   * Applies to actions:
   * - .toCreateStreamingSessionStream()
   * - .toDeleteStreamingSession()
   * - .toGetStreamingSession()
   * - .toGetStreamingSessionStream()
   * - .toListLaunchProfiles()
   * - .toListStreamingSessions()
   * - .toStartStreamingSession()
   * - .toStopStreamingSession()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequesterPrincipalId(value: string | string[], operator?: Operator | string) {
    return this.if(`requesterPrincipalId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by a specific studio
   *
   * https://docs.aws.amazon.com/nimble-studio/latest/userguide/security-iam-service-with-iam.html
   *
   * Applies to resource types:
   * - studio
   * - streaming-image
   * - studio-component
   * - launch-profile
   * - eula-acceptance
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifStudioId(value: string | string[], operator?: Operator | string) {
    return this.if(`studioId`, value, operator || 'ArnLike');
  }
}
