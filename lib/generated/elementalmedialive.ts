import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [medialive](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmedialive.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Medialive extends PolicyStatement {
  public servicePrefix = 'medialive';

  /**
   * Statement provider for service [medialive](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmedialive.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept an input device transfer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  public toAcceptInputDeviceTransfer() {
    return this.to('AcceptInputDeviceTransfer');
  }

  /**
   * Grants permission to delete channels, inputs, input security groups, and multiplexes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html
   */
  public toBatchDelete() {
    return this.to('BatchDelete');
  }

  /**
   * Grants permission to start channels and multiplexes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  public toBatchStart() {
    return this.to('BatchStart');
  }

  /**
   * Grants permission to stop channels and multiplexes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  public toBatchStop() {
    return this.to('BatchStop');
  }

  /**
   * Grants permission to add and remove actions from a channel's schedule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/submitting-batch-command.html
   */
  public toBatchUpdateSchedule() {
    return this.to('BatchUpdateSchedule');
  }

  /**
   * Grants permission to cancel an input device transfer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  public toCancelInputDeviceTransfer() {
    return this.to('CancelInputDeviceTransfer');
  }

  /**
   * Grants permission to claim an input device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  public toClaimDevice() {
    return this.to('ClaimDevice');
  }

  /**
   * Grants permission to create a channel
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/creating-channel-scratch.html
   */
  public toCreateChannel() {
    return this.to('CreateChannel');
  }

  /**
   * Grants permission to create an input
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/creating-input.html
   */
  public toCreateInput() {
    return this.to('CreateInput');
  }

  /**
   * Grants permission to create an input security group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/working-with-input-security-groups.html
   */
  public toCreateInputSecurityGroup() {
    return this.to('CreateInputSecurityGroup');
  }

  /**
   * Grants permission to create a multiplex
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/multiplex-create.html
   */
  public toCreateMultiplex() {
    return this.to('CreateMultiplex');
  }

  /**
   * Grants permission to create a multiplex program
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/multiplex-create.html
   */
  public toCreateMultiplexProgram() {
    return this.to('CreateMultiplexProgram');
  }

  /**
   * Grants permission to create a partner input
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/input-create-cdi-partners.html
   */
  public toCreatePartnerInput() {
    return this.to('CreatePartnerInput');
  }

  /**
   * Grants permission to create tags for channels, inputs, input security groups, multiplexes, and reservations
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/tagging.html
   */
  public toCreateTags() {
    return this.to('CreateTags');
  }

  /**
   * Grants permission to delete a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html
   */
  public toDeleteChannel() {
    return this.to('DeleteChannel');
  }

  /**
   * Grants permission to delete an input
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/delete-input.html
   */
  public toDeleteInput() {
    return this.to('DeleteInput');
  }

  /**
   * Grants permission to delete an input security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/delete-input-security-group.html
   */
  public toDeleteInputSecurityGroup() {
    return this.to('DeleteInputSecurityGroup');
  }

  /**
   * Grants permission to delete a multiplex
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/delete-multiplex-program.html
   */
  public toDeleteMultiplex() {
    return this.to('DeleteMultiplex');
  }

  /**
   * Grants permission to delete a multiplex program
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/delete-multiplex-program.html
   */
  public toDeleteMultiplexProgram() {
    return this.to('DeleteMultiplexProgram');
  }

  /**
   * Grants permission to delete an expired reservation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/deleting-reservations.html
   */
  public toDeleteReservation() {
    return this.to('DeleteReservation');
  }

  /**
   * Grants permission to delete all schedule actions for a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/schedule-using-console-delete.html
   */
  public toDeleteSchedule() {
    return this.to('DeleteSchedule');
  }

  /**
   * Grants permission to delete tags from channels, inputs, input security groups, multiplexes, and reservations
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/tagging.html
   */
  public toDeleteTags() {
    return this.to('DeleteTags');
  }

  /**
   * Grants permission to view the account configuration of the customer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  public toDescribeAccountConfiguration() {
    return this.to('DescribeAccountConfiguration');
  }

  /**
   * Grants permission to get details about a channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/viewing-channel-configuration.html
   */
  public toDescribeChannel() {
    return this.to('DescribeChannel');
  }

  /**
   * Grants permission to describe an input
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html
   */
  public toDescribeInput() {
    return this.to('DescribeInput');
  }

  /**
   * Grants permission to describe an input device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/device-edit.html
   */
  public toDescribeInputDevice() {
    return this.to('DescribeInputDevice');
  }

  /**
   * Grants permission to describe an input device thumbnail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/device-edit.html
   */
  public toDescribeInputDeviceThumbnail() {
    return this.to('DescribeInputDeviceThumbnail');
  }

  /**
   * Grants permission to describe an input security group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html
   */
  public toDescribeInputSecurityGroup() {
    return this.to('DescribeInputSecurityGroup');
  }

  /**
   * Grants permission to describe a multiplex
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex-program-channel.html
   */
  public toDescribeMultiplex() {
    return this.to('DescribeMultiplex');
  }

  /**
   * Grants permission to describe a multiplex program
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/monitoring-multiplex-console.html
   */
  public toDescribeMultiplexProgram() {
    return this.to('DescribeMultiplexProgram');
  }

  /**
   * Grants permission to get details about a reservation offering
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html
   */
  public toDescribeOffering() {
    return this.to('DescribeOffering');
  }

  /**
   * Grants permission to get details about a reservation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/view-reservations.html
   */
  public toDescribeReservation() {
    return this.to('DescribeReservation');
  }

  /**
   * Grants permission to view a list of actions scheduled on a channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/schedule-using-console-view.html
   */
  public toDescribeSchedule() {
    return this.to('DescribeSchedule');
  }

  /**
   * Grants permission to view the thumbnails for a channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  public toDescribeThumbnails() {
    return this.to('DescribeThumbnails');
  }

  /**
   * Grants permission to list channels
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/viewing-channel-configuration.html
   */
  public toListChannels() {
    return this.to('ListChannels');
  }

  /**
   * Grants permission to list input device transfers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  public toListInputDeviceTransfers() {
    return this.to('ListInputDeviceTransfers');
  }

  /**
   * Grants permission to list input devices
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/device-edit.html
   */
  public toListInputDevices() {
    return this.to('ListInputDevices');
  }

  /**
   * Grants permission to list input security groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html
   */
  public toListInputSecurityGroups() {
    return this.to('ListInputSecurityGroups');
  }

  /**
   * Grants permission to list inputs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html
   */
  public toListInputs() {
    return this.to('ListInputs');
  }

  /**
   * Grants permission to list multiplex programs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/monitoring-multiplex-console.html
   */
  public toListMultiplexPrograms() {
    return this.to('ListMultiplexPrograms');
  }

  /**
   * Grants permission to list multiplexes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex-program-channel.html
   */
  public toListMultiplexes() {
    return this.to('ListMultiplexes');
  }

  /**
   * Grants permission to list reservation offerings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html
   */
  public toListOfferings() {
    return this.to('ListOfferings');
  }

  /**
   * Grants permission to list reservations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/view-reservations.html
   */
  public toListReservations() {
    return this.to('ListReservations');
  }

  /**
   * Grants permission to list tags for channels, inputs, input security groups, multiplexes, and reservations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/tagging.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to purchase a reservation offering
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html
   */
  public toPurchaseOffering() {
    return this.to('PurchaseOffering');
  }

  /**
   * Grants permission to reboot an input device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  public toRebootInputDevice() {
    return this.to('RebootInputDevice');
  }

  /**
   * Grants permission to reject an input device transfer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  public toRejectInputDeviceTransfer() {
    return this.to('RejectInputDeviceTransfer');
  }

  /**
   * Grants permission to start a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  public toStartChannel() {
    return this.to('StartChannel');
  }

  /**
   * Grants permission to start an input device attached to a MediaConnect flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  public toStartInputDevice() {
    return this.to('StartInputDevice');
  }

  /**
   * Grants permission to start a maintenance window for an input device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  public toStartInputDeviceMaintenanceWindow() {
    return this.to('StartInputDeviceMaintenanceWindow');
  }

  /**
   * Grants permission to start a multiplex
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/start-multiplex.html
   */
  public toStartMultiplex() {
    return this.to('StartMultiplex');
  }

  /**
   * Grants permission to stop a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  public toStopChannel() {
    return this.to('StopChannel');
  }

  /**
   * Grants permission to stop an input device attached to a MediaConnect flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  public toStopInputDevice() {
    return this.to('StopInputDevice');
  }

  /**
   * Grants permission to stop a multiplex
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/stop-multiplex.title.html
   */
  public toStopMultiplex() {
    return this.to('StopMultiplex');
  }

  /**
   * Grants permission to transfer an input device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   */
  public toTransferInputDevice() {
    return this.to('TransferInputDevice');
  }

  /**
   * Grants permission to update a customer's account configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  public toUpdateAccountConfiguration() {
    return this.to('UpdateAccountConfiguration');
  }

  /**
   * Grants permission to update a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html
   */
  public toUpdateChannel() {
    return this.to('UpdateChannel');
  }

  /**
   * Grants permission to update the class of a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html
   */
  public toUpdateChannelClass() {
    return this.to('UpdateChannelClass');
  }

  /**
   * Grants permission to update an input
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html
   */
  public toUpdateInput() {
    return this.to('UpdateInput');
  }

  /**
   * Grants permission to update an input device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/device-edit.html
   */
  public toUpdateInputDevice() {
    return this.to('UpdateInputDevice');
  }

  /**
   * Grants permission to update an input security group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html
   */
  public toUpdateInputSecurityGroup() {
    return this.to('UpdateInputSecurityGroup');
  }

  /**
   * Grants permission to update a multiplex
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex-program-channel.html
   */
  public toUpdateMultiplex() {
    return this.to('UpdateMultiplex');
  }

  /**
   * Grants permission to update a multiplex program
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex-program-channel.html
   */
  public toUpdateMultiplexProgram() {
    return this.to('UpdateMultiplexProgram');
  }

  /**
   * Grants permission to update a reservation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/reservations.html
   */
  public toUpdateReservation() {
    return this.to('UpdateReservation');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptInputDeviceTransfer',
      'BatchDelete',
      'BatchStart',
      'BatchStop',
      'BatchUpdateSchedule',
      'CancelInputDeviceTransfer',
      'ClaimDevice',
      'CreateChannel',
      'CreateInput',
      'CreateInputSecurityGroup',
      'CreateMultiplex',
      'CreateMultiplexProgram',
      'CreatePartnerInput',
      'DeleteChannel',
      'DeleteInput',
      'DeleteInputSecurityGroup',
      'DeleteMultiplex',
      'DeleteMultiplexProgram',
      'DeleteReservation',
      'DeleteSchedule',
      'PurchaseOffering',
      'RebootInputDevice',
      'RejectInputDeviceTransfer',
      'StartChannel',
      'StartInputDevice',
      'StartInputDeviceMaintenanceWindow',
      'StartMultiplex',
      'StopChannel',
      'StopInputDevice',
      'StopMultiplex',
      'TransferInputDevice',
      'UpdateAccountConfiguration',
      'UpdateChannel',
      'UpdateChannelClass',
      'UpdateInput',
      'UpdateInputDevice',
      'UpdateInputSecurityGroup',
      'UpdateMultiplex',
      'UpdateMultiplexProgram',
      'UpdateReservation'
    ],
    Tagging: [
      'CreateTags',
      'DeleteTags'
    ],
    Read: [
      'DescribeAccountConfiguration',
      'DescribeChannel',
      'DescribeInput',
      'DescribeInputDevice',
      'DescribeInputDeviceThumbnail',
      'DescribeInputSecurityGroup',
      'DescribeMultiplex',
      'DescribeMultiplexProgram',
      'DescribeOffering',
      'DescribeReservation',
      'DescribeSchedule',
      'DescribeThumbnails'
    ],
    List: [
      'ListChannels',
      'ListInputDeviceTransfers',
      'ListInputDevices',
      'ListInputSecurityGroups',
      'ListInputs',
      'ListMultiplexPrograms',
      'ListMultiplexes',
      'ListOfferings',
      'ListReservations',
      'ListTagsForResource'
    ]
  };

  /**
   * Adds a resource of type channel to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/channels.html
   *
   * @param channelId - Identifier for the channelId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChannel(channelId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:medialive:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:channel:${ channelId }`);
  }

  /**
   * Adds a resource of type input to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/inputs.html
   *
   * @param inputId - Identifier for the inputId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInput(inputId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:medialive:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:input:${ inputId }`);
  }

  /**
   * Adds a resource of type input-device to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/eml-devices.html
   *
   * @param deviceId - Identifier for the deviceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onInputDevice(deviceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:medialive:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:inputDevice:${ deviceId }`);
  }

  /**
   * Adds a resource of type input-security-group to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/inputsecuritygroups.html
   *
   * @param inputSecurityGroupId - Identifier for the inputSecurityGroupId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInputSecurityGroup(inputSecurityGroupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:medialive:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:inputSecurityGroup:${ inputSecurityGroupId }`);
  }

  /**
   * Adds a resource of type multiplex to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/eml-multiplex.html
   *
   * @param multiplexId - Identifier for the multiplexId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMultiplex(multiplexId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:medialive:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:multiplex:${ multiplexId }`);
  }

  /**
   * Adds a resource of type reservation to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/reservations.html
   *
   * @param reservationId - Identifier for the reservationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onReservation(reservationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:medialive:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:reservation:${ reservationId }`);
  }

  /**
   * Adds a resource of type offering to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/input-output-reservations.html
   *
   * @param offeringId - Identifier for the offeringId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onOffering(offeringId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:medialive:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:offering:${ offeringId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/medialive/latest/ugtagging.html
   *
   * Applies to actions:
   * - .toCreateChannel()
   * - .toCreateInput()
   * - .toCreateInputSecurityGroup()
   * - .toCreateMultiplex()
   * - .toCreatePartnerInput()
   * - .toCreateTags()
   * - .toPurchaseOffering()
   * - .toUpdateInputSecurityGroup()
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
   * https://docs.aws.amazon.com/medialive/latest/ugtagging.html
   *
   * Applies to resource types:
   * - channel
   * - input
   * - input-security-group
   * - multiplex
   * - reservation
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
   * https://docs.aws.amazon.com/medialive/latest/ugtagging.html
   *
   * Applies to actions:
   * - .toCreateChannel()
   * - .toCreateInput()
   * - .toCreateInputSecurityGroup()
   * - .toCreateMultiplex()
   * - .toCreatePartnerInput()
   * - .toCreateTags()
   * - .toDeleteTags()
   * - .toPurchaseOffering()
   * - .toUpdateInputSecurityGroup()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
