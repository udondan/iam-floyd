import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to delete channels, inputs, input security groups, and multiplexes.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html
   */
  public toBatchDelete() {
    this.to('BatchDelete');
    return this;
  }

  /**
   * Grants permission to start channels and multiplexes.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  public toBatchStart() {
    this.to('BatchStart');
    return this;
  }

  /**
   * Grants permission to stop channels and multiplexes.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  public toBatchStop() {
    this.to('BatchStop');
    return this;
  }

  /**
   * Grants permission to add and remove actions from a channel's schedule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/batching-actions.html
   */
  public toBatchUpdateSchedule() {
    this.to('BatchUpdateSchedule');
    return this;
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
    this.to('CreateChannel');
    return this;
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
    this.to('CreateInput');
    return this;
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
    this.to('CreateInputSecurityGroup');
    return this;
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
   * https://docs.aws.amazon.com/medialive/latest/ug/creating-multiplex.html
   */
  public toCreateMultiplex() {
    this.to('CreateMultiplex');
    return this;
  }

  /**
   * Grants permission to create a multiplex program
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/multiplex-create.html
   */
  public toCreateMultiplexProgram() {
    this.to('CreateMultiplexProgram');
    return this;
  }

  /**
   * Grants permission to create tags for channels, inputs, input security groups, multiplexes, and reservations.
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
    this.to('CreateTags');
    return this;
  }

  /**
   * Grants permission to delete a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html
   */
  public toDeleteChannel() {
    this.to('DeleteChannel');
    return this;
  }

  /**
   * Grants permission to delete an input
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/delete-input.html
   */
  public toDeleteInput() {
    this.to('DeleteInput');
    return this;
  }

  /**
   * Grants permission to delete an input security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/delete-input-security-group.html
   */
  public toDeleteInputSecurityGroup() {
    this.to('DeleteInputSecurityGroup');
    return this;
  }

  /**
   * Grants permission to delete a multiplex
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/delete-multiplex.html
   */
  public toDeleteMultiplex() {
    this.to('DeleteMultiplex');
    return this;
  }

  /**
   * Grants permission to delete a multiplex program
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/delete-multiplex-program.html
   */
  public toDeleteMultiplexProgram() {
    this.to('DeleteMultiplexProgram');
    return this;
  }

  /**
   * Grants permission to delete an expired reservation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/deleting-reservations.html
   */
  public toDeleteReservation() {
    this.to('DeleteReservation');
    return this;
  }

  /**
   * Grants permission to delete tags from channels, inputs, input security groups, multiplexes, and reservations.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/tagging.html
   */
  public toDeleteTags() {
    this.to('DeleteTags');
    return this;
  }

  /**
   * Grants permission to get details about a channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/viewing-channel-configuration.html
   */
  public toDescribeChannel() {
    this.to('DescribeChannel');
    return this;
  }

  /**
   * Grants permission to describe an input
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html
   */
  public toDescribeInput() {
    this.to('DescribeInput');
    return this;
  }

  /**
   * Grants permission to describe an input device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input-device.html
   */
  public toDescribeInputDevice() {
    this.to('DescribeInputDevice');
    return this;
  }

  /**
   * Grants permission to describe an input device thumbnail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input-device.html
   */
  public toDescribeInputDeviceThumbnail() {
    this.to('DescribeInputDeviceThumbnail');
    return this;
  }

  /**
   * Grants permission to describe an input security group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html
   */
  public toDescribeInputSecurityGroup() {
    this.to('DescribeInputSecurityGroup');
    return this;
  }

  /**
   * Grants permission to describe a multiplex
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/viewing-multiplex-configuration.html
   */
  public toDescribeMultiplex() {
    this.to('DescribeMultiplex');
    return this;
  }

  /**
   * Grants permission to describe a multiplex program
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/monitoring-multiplex-console.html
   */
  public toDescribeMultiplexProgram() {
    this.to('DescribeMultiplexProgram');
    return this;
  }

  /**
   * Grants permission to get details about a reservation offering
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html
   */
  public toDescribeOffering() {
    this.to('DescribeOffering');
    return this;
  }

  /**
   * Grants permission to get details about a reservation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/view-reservations.html
   */
  public toDescribeReservation() {
    this.to('DescribeReservation');
    return this;
  }

  /**
   * Grants permission to view a list of actions scheduled on a channel.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/viewing-actions-schedule.html
   */
  public toDescribeSchedule() {
    this.to('DescribeSchedule');
    return this;
  }

  /**
   * Grants permission to list channels
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/viewing-channel-configuration.html
   */
  public toListChannels() {
    this.to('ListChannels');
    return this;
  }

  /**
   * Grants permission to list input devices
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input-device.html
   */
  public toListInputDevices() {
    this.to('ListInputDevices');
    return this;
  }

  /**
   * Grants permission to list input security groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html
   */
  public toListInputSecurityGroups() {
    this.to('ListInputSecurityGroups');
    return this;
  }

  /**
   * Grants permission to list inputs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html
   */
  public toListInputs() {
    this.to('ListInputs');
    return this;
  }

  /**
   * Grants permission to list multiplex programs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/monitoring-multiplex-console.html
   */
  public toListMultiplexPrograms() {
    this.to('ListMultiplexPrograms');
    return this;
  }

  /**
   * Grants permission to list multiplexes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/viewing-multiplex-configuration.html
   */
  public toListMultiplexes() {
    this.to('ListMultiplexes');
    return this;
  }

  /**
   * Grants permission to list reservation offerings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/purchasing-reservations.html
   */
  public toListOfferings() {
    this.to('ListOfferings');
    return this;
  }

  /**
   * Grants permission to list reservations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/view-reservations.html
   */
  public toListReservations() {
    this.to('ListReservations');
    return this;
  }

  /**
   * Grants permission to list tags for channels, inputs, input security groups, multiplexes, and reservations.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/tagging.html
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
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
    this.to('PurchaseOffering');
    return this;
  }

  /**
   * Grants permission to start a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  public toStartChannel() {
    this.to('StartChannel');
    return this;
  }

  /**
   * Grants permission to start a multiplex
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-a-multiplex.html
   */
  public toStartMultiplex() {
    this.to('StartMultiplex');
    return this;
  }

  /**
   * Grants permission to stop a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-deleting-a-channel.html
   */
  public toStopChannel() {
    this.to('StopChannel');
    return this;
  }

  /**
   * Grants permission to stop a multiplex
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/starting-stopping-a-multiplex.html
   */
  public toStopMultiplex() {
    this.to('StopMultiplex');
    return this;
  }

  /**
   * Grants permission to update a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html
   */
  public toUpdateChannel() {
    this.to('UpdateChannel');
    return this;
  }

  /**
   * Grants permission to update the class of a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/editing-deleting-channel.html
   */
  public toUpdateChannelClass() {
    this.to('UpdateChannelClass');
    return this;
  }

  /**
   * Grants permission to update an input
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input.html
   */
  public toUpdateInput() {
    this.to('UpdateInput');
    return this;
  }

  /**
   * Grants permission to update an input device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input-device.html
   */
  public toUpdateInputDevice() {
    this.to('UpdateInputDevice');
    return this;
  }

  /**
   * Grants permission to update an input security group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-input-security-group.html
   */
  public toUpdateInputSecurityGroup() {
    this.to('UpdateInputSecurityGroup');
    return this;
  }

  /**
   * Grants permission to update a multiplex
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex.html
   */
  public toUpdateMultiplex() {
    this.to('UpdateMultiplex');
    return this;
  }

  /**
   * Grants permission to update a multiplex program
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/edit-multiplex-program-channel.html
   */
  public toUpdateMultiplexProgram() {
    this.to('UpdateMultiplexProgram');
    return this;
  }

  /**
   * Grants permission to update a reservation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/reservations.html
   */
  public toUpdateReservation() {
    this.to('UpdateReservation');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "BatchDelete",
      "BatchStart",
      "BatchStop",
      "BatchUpdateSchedule",
      "CreateChannel",
      "CreateInput",
      "CreateInputSecurityGroup",
      "CreateMultiplex",
      "CreateMultiplexProgram",
      "DeleteChannel",
      "DeleteInput",
      "DeleteInputSecurityGroup",
      "DeleteMultiplex",
      "DeleteMultiplexProgram",
      "DeleteReservation",
      "PurchaseOffering",
      "StartChannel",
      "StartMultiplex",
      "StopChannel",
      "StopMultiplex",
      "UpdateChannel",
      "UpdateChannelClass",
      "UpdateInput",
      "UpdateInputDevice",
      "UpdateInputSecurityGroup",
      "UpdateMultiplex",
      "UpdateMultiplexProgram",
      "UpdateReservation"
    ],
    "Tagging": [
      "CreateTags",
      "DeleteTags"
    ],
    "Read": [
      "DescribeChannel",
      "DescribeInput",
      "DescribeInputDevice",
      "DescribeInputDeviceThumbnail",
      "DescribeInputSecurityGroup",
      "DescribeMultiplex",
      "DescribeMultiplexProgram",
      "DescribeOffering",
      "DescribeReservation",
      "DescribeSchedule"
    ],
    "List": [
      "ListChannels",
      "ListInputDevices",
      "ListInputSecurityGroups",
      "ListInputs",
      "ListMultiplexPrograms",
      "ListMultiplexes",
      "ListOfferings",
      "ListReservations",
      "ListTagsForResource"
    ]
  };

  /**
   * Adds a resource of type channel to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/channels.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChannel(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:medialive:${Region}:${Account}:channel:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type input to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/inputs.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInput(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:medialive:${Region}:${Account}:input:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type input-device to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/inputdevices.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onInputDevice(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:medialive:${Region}:${Account}:inputDevice:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type input-security-group to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/inputsecuritygroups.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInputSecurityGroup(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:medialive:${Region}:${Account}:inputSecurityGroup:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type multiplex to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/multiplexes.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMultiplex(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:medialive:${Region}:${Account}:multiplex:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type reservation to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/reservations.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onReservation(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:medialive:${Region}:${Account}:reservation:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type offering to the statement
   *
   * https://docs.aws.amazon.com/medialive/latest/ug/input-output-reservations.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onOffering(resourceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:medialive:${Region}:${Account}:offering:${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
