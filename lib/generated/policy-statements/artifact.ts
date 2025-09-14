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
   * https://docs.aws.amazon.com/artifact/latest/APIReference/API_AcceptAgreement.html
   */
  public toAcceptAgreement() {
    return this.to('AcceptAgreement');
  }

  /**
   * Grants permission to accept the terms of an NDA Document for a given agreement resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/artifact/latest/APIReference/API_AcceptNdaForAgreement.html
   */
  public toAcceptNdaForAgreement() {
    return this.to('AcceptNdaForAgreement');
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
   * Grants permission to get an AWS agreement that has not yet been accepted by the customer account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/artifact/latest/APIReference/API_GetAgreement.html
   */
  public toGetAgreement() {
    return this.to('GetAgreement');
  }

  /**
   * Grants permission to get an AWS agreement that has been accepted by the customer account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/artifact/latest/APIReference/API_GetCustomerAgreement.html
   */
  public toGetCustomerAgreement() {
    return this.to('GetCustomerAgreement');
  }

  /**
   * Grants permission to retrieve the NDA Document for a given agreement resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/artifact/latest/APIReference/API_GetNdaForAgreement.html
   */
  public toGetNdaForAgreement() {
    return this.to('GetNdaForAgreement');
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
   * Grants permission to list AWS agreements
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/artifact/latest/APIReference/API_ListAgreements.html
   */
  public toListAgreements() {
    return this.to('ListAgreements');
  }

  /**
   * Grants permission to list customer-agreement resources that have been accepted by the customer account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/artifact/latest/APIReference/API_ListCustomerAgreements.html
   */
  public toListCustomerAgreements() {
    return this.to('ListCustomerAgreements');
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
   * https://docs.aws.amazon.com/artifact/latest/APIReference/API_TerminateAgreement.html
   */
  public toTerminateAgreement() {
    return this.to('TerminateAgreement');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptAgreement',
      'AcceptNdaForAgreement',
      'PutAccountSettings',
      'TerminateAgreement'
    ],
    Read: [
      'GetAccountSettings',
      'GetAgreement',
      'GetCustomerAgreement',
      'GetNdaForAgreement',
      'GetReport',
      'GetReportMetadata',
      'GetTermForReport'
    ],
    List: [
      'ListAgreements',
      'ListCustomerAgreements',
      'ListReports'
    ]
  };

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
   * @param reportId - Identifier for the reportId.
   * @param version - Identifier for the version.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifReportCategory()
   * - .ifReportSeries()
   */
  public onReport(reportId: string, version: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:artifact:${ region ?? this.defaultRegion }::report/${ reportId }:${ version }`);
  }

  /**
   * Filters access by which category reports are associated with
   *
   * https://docs.aws.amazon.com/artifact/latest/ug/using-condition-keys.html
   *
   * Applies to resource types:
   * - report
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
   * Applies to resource types:
   * - report
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifReportSeries(value: string | string[], operator?: Operator | string) {
    return this.if(`ReportSeries`, value, operator ?? 'StringLike');
  }
}
