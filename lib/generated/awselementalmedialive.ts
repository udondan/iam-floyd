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
    this.to('medialive:BatchDelete');
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
    this.to('medialive:BatchStart');
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
    this.to('medialive:BatchStop');
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
    this.to('medialive:BatchUpdateSchedule');
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
    this.to('medialive:CreateChannel');
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
    this.to('medialive:CreateInput');
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
    this.to('medialive:CreateInputSecurityGroup');
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
    this.to('medialive:CreateMultiplex');
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
    this.to('medialive:CreateMultiplexProgram');
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
    this.to('medialive:CreateTags');
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
    this.to('medialive:DeleteChannel');
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
    this.to('medialive:DeleteInput');
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
    this.to('medialive:DeleteInputSecurityGroup');
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
    this.to('medialive:DeleteMultiplex');
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
    this.to('medialive:DeleteMultiplexProgram');
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
    this.to('medialive:DeleteReservation');
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
    this.to('medialive:DeleteTags');
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
    this.to('medialive:DescribeChannel');
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
    this.to('medialive:DescribeInput');
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
    this.to('medialive:DescribeInputDevice');
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
    this.to('medialive:DescribeInputDeviceThumbnail');
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
    this.to('medialive:DescribeInputSecurityGroup');
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
    this.to('medialive:DescribeMultiplex');
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
    this.to('medialive:DescribeMultiplexProgram');
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
    this.to('medialive:DescribeOffering');
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
    this.to('medialive:DescribeReservation');
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
    this.to('medialive:DescribeSchedule');
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
    this.to('medialive:ListChannels');
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
    this.to('medialive:ListInputDevices');
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
    this.to('medialive:ListInputSecurityGroups');
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
    this.to('medialive:ListInputs');
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
    this.to('medialive:ListMultiplexPrograms');
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
    this.to('medialive:ListMultiplexes');
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
    this.to('medialive:ListOfferings');
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
    this.to('medialive:ListReservations');
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
    this.to('medialive:ListTagsForResource');
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
    this.to('medialive:PurchaseOffering');
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
    this.to('medialive:StartChannel');
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
    this.to('medialive:StartMultiplex');
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
    this.to('medialive:StopChannel');
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
    this.to('medialive:StopMultiplex');
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
    this.to('medialive:UpdateChannel');
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
    this.to('medialive:UpdateChannelClass');
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
    this.to('medialive:UpdateInput');
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
    this.to('medialive:UpdateInputDevice');
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
    this.to('medialive:UpdateInputSecurityGroup');
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
    this.to('medialive:UpdateMultiplex');
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
    this.to('medialive:UpdateMultiplexProgram');
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
    this.to('medialive:UpdateReservation');
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
