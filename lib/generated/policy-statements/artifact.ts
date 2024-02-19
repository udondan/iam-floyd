import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [artifact](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsartifact.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Artifact extends PolicyStatement {
  public servicePrefix = 'artifact';

  /**
   * Statement provider for service [artifact](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsartifact.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept an AWS agreement that has not yet been accepted by the customer account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/artifact/latest/ug/managing-agreements.html
   */
  public toAcceptAgreement() {
    return this.to('AcceptAgreement');
  }

  /**
   * Grants permission to download an AWS agreement that has not yet been accepted or a customer agreement that has been accepted by the customer account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/artifact/latest/ug/managing-agreements.html
   */
  public toDownloadAgreement() {
    return this.to('DownloadAgreement');
  }

  /**
   * Grants permission to download an AWS compliance report package
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/artifact/latest/ug/getting-started.html
   */
  public toGet() {
    return this.to('Get');
  }

  /**
   * Grants permission to get the account settings for Artifact
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/artifact/latest/APIReference/API_GetAccountSettings.html
   */
  public toGetAccountSettings() {
    return this.to('GetAccountSettings');
  }

  /**
   * Grants permission to download a report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/artifact/latest/APIReference/API_GetReport.html
   */
  public toGetReport() {
    return this.to('GetReport');
  }

  /**
   * Grants permission to download metadata associated with a report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/artifact/latest/APIReference/API_GetReportMetadata.html
   */
  public toGetReportMetadata() {
    return this.to('GetReportMetadata');
  }

  /**
   * Grants permission to download a term associated with a report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/artifact/latest/APIReference/API_GetTermForReport.html
   */
  public toGetTermForReport() {
    return this.to('GetTermForReport');
  }

  /**
   * Grants permission to list reports in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/artifact/latest/APIReference/API_ListReports.html
   */
  public toListReports() {
    return this.to('ListReports');
  }

  /**
   * Grants permission to put account settings for Artifact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/artifact/latest/APIReference/API_PutAccountSettings.html
   */
  public toPutAccountSettings() {
    return this.to('PutAccountSettings');
  }

  /**
   * Grants permission to terminate a customer agreement that was previously accepted by the customer account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/artifact/latest/ug/managing-agreements.html
   */
  public toTerminateAgreement() {
    return this.to('TerminateAgreement');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptAgreement',
      'PutAccountSettings',
      'TerminateAgreement'
    ],
    Read: [
      'DownloadAgreement',
      'Get',
      'GetAccountSettings',
      'GetReport',
      'GetReportMetadata',
      'GetTermForReport'
    ],
    List: [
      'ListReports'
    ]
  };

  /**
   * Adds a resource of type report-package to the statement
   *
   * https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onReportPackage(resourceName: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:artifact:::report-package/${ resourceName }`);
  }

  /**
   * Adds a resource of type customer-agreement to the statement
   *
   * https://docs.aws.amazon.com/artifact/latest/ug/managing-agreements.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCustomerAgreement(resourceName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:artifact::${ account ?? this.defaultAccount }:customer-agreement/${ resourceName }`);
  }

  /**
   * Adds a resource of type agreement to the statement
   *
   * https://docs.aws.amazon.com/artifact/latest/ug/managing-agreements.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAgreement(resourceName: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:artifact:::agreement/${ resourceName }`);
  }

  /**
   * Adds a resource of type report to the statement
   *
   * https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onReport(resourceName: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:artifact:${ region ?? this.defaultRegion }::report/${ resourceName }`);
  }

  /**
   * Filters access by which category reports are associated with
   *
   * https://docs.aws.amazon.com/artifact/latest/ug/using-condition-keys.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReportCategory(value: string | string[], operator?: Operator | string) {
    return this.if(`ReportCategory`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by which series reports are associated with
   *
   * https://docs.aws.amazon.com/artifact/latest/ug/using-condition-keys.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReportSeries(value: string | string[], operator?: Operator | string) {
    return this.if(`ReportSeries`, value, operator ?? 'StringLike');
  }
}
