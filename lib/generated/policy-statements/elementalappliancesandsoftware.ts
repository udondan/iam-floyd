import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [elemental-appliances-software](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalappliancesandsoftware.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ElementalAppliancesSoftware extends PolicyStatement {
  public servicePrefix = 'elemental-appliances-software';

  /**
   * Statement provider for service [elemental-appliances-software](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalappliancesandsoftware.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to complete an upload of an attachment for a quote or order
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toCompleteUpload() {
    return this.to('CompleteUpload');
  }

  /**
   * Grants permission to create an order
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toCreateOrderV1() {
    return this.to('CreateOrderV1');
  }

  /**
   * Grants permission to create a quote
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toCreateQuote() {
    return this.to('CreateQuote');
  }

  /**
   * Grants permission to validate an address
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toGetAvsCorrectAddress() {
    return this.to('GetAvsCorrectAddress');
  }

  /**
   * Grants permission to list the billing addresses in the AWS Account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toGetBillingAddresses() {
    return this.to('GetBillingAddresses');
  }

  /**
   * Grants permission to list the delivery addresses in the AWS Account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toGetDeliveryAddressesV2() {
    return this.to('GetDeliveryAddressesV2');
  }

  /**
   * Grants permission to describe an order
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toGetOrder() {
    return this.to('GetOrder');
  }

  /**
   * Grants permission to list the orders in the AWS Account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toGetOrdersV2() {
    return this.to('GetOrdersV2');
  }

  /**
   * Grants permission to describe a quote
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toGetQuote() {
    return this.to('GetQuote');
  }

  /**
   * Grants permission to calculate taxes for an order
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toGetTaxes() {
    return this.to('GetTaxes');
  }

  /**
   * Grants permission to list the quotes in the AWS Account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toListQuotes() {
    return this.to('ListQuotes');
  }

  /**
   * Grants permission to start an upload of an attachment for a quote or order
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toStartUpload() {
    return this.to('StartUpload');
  }

  /**
   * Grants permission to submit an order
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toSubmitOrderV1() {
    return this.to('SubmitOrderV1');
  }

  /**
   * Grants permission to modify a quote
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toUpdateQuote() {
    return this.to('UpdateQuote');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CompleteUpload',
      'CreateOrderV1',
      'CreateQuote',
      'StartUpload',
      'SubmitOrderV1',
      'UpdateQuote'
    ],
    Read: [
      'GetAvsCorrectAddress',
      'GetBillingAddresses',
      'GetDeliveryAddressesV2',
      'GetOrder',
      'GetOrdersV2',
      'GetQuote',
      'GetTaxes'
    ],
    List: [
      'ListQuotes'
    ]
  };

  /**
   * Adds a resource of type quote to the statement
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onQuote(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elemental-appliances-software:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:quote/${ resourceId }`);
  }
}
