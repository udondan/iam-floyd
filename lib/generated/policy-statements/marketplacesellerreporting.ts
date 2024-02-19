import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [aws-marketplace-seller-reporting](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacesellerreporting.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMarketplaceSellerReporting extends PolicyStatement {
  public servicePrefix = 'aws-marketplace';

  /**
   * Statement provider for service [aws-marketplace-seller-reporting](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacesellerreporting.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to view a seller dashboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/dashboards.html#reports-accessing
   */
  public toGetSellerDashboard() {
    return this.to('GetSellerDashboard');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetSellerDashboard'
    ]
  };

  /**
   * Adds a resource of type SellerDashboard to the statement
   *
   * https://docs.aws.amazon.com/marketplace/latest/userguide/dashboards.html#reports-accessing
   *
   * @param catalog - Identifier for the catalog.
   * @param factTable - Identifier for the factTable.
   * @param dashboardName - Identifier for the dashboardName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSellerDashboard(catalog: string, factTable: string, dashboardName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aws-marketplace::${ account ?? this.defaultAccount }:${ catalog }/ReportingData/${ factTable }/Dashboard/${ dashboardName }`);
  }
}
