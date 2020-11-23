import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Create a quote
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toCreateQuote() {
    this.to('CreateQuote');
    return this;
  }

  /**
   * Describe a quote
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toGetQuote() {
    this.to('GetQuote');
    return this;
  }

  /**
   * List the quotes in the user account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toListQuotes() {
    this.to('ListQuotes');
    return this;
  }

  /**
   * This action lists tags for an AWS Elemental Appliances and Software resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
  }

  /**
   * This action tags an AWS Elemental Appliances and Software resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toTagResource() {
    this.to('TagResource');
    return this;
  }

  /**
   * This action removes a tag from an AWS Elemental Appliances and Software resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toUntagResource() {
    this.to('UntagResource');
    return this;
  }

  /**
   * Modify a quote
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toUpdateQuote() {
    this.to('UpdateQuote');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Tagging": [
      "CreateQuote",
      "TagResource",
      "UntagResource"
    ],
    "Read": [
      "GetQuote",
      "ListTagsForResource"
    ],
    "List": [
      "ListQuotes"
    ],
    "Write": [
      "UpdateQuote"
    ]
  };

  /**
   * Adds a resource of type quote to the statement
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onQuote(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elemental-appliances-software:${Region}:${Account}:quote/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
