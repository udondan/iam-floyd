import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [aws-marketplace-reporting](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacereporting.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMarketplaceReporting extends PolicyStatement {
  public servicePrefix = 'aws-marketplace';

  /**
   * Statement provider for service [aws-marketplace-reporting](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacereporting.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to view a dashboard that shows a buyer's AWS Marketplace purchase data
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/API_marketplace-reporting_GetBuyerDashboard.html
   */
  public toGetBuyerDashboard() {
    return this.to('GetBuyerDashboard');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetBuyerDashboard'
    ]
  };

  /**
   * Adds a resource of type Dashboard to the statement
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/API_marketplace-reporting_GetBuyerDashboard.html#API_marketplace-reporting_GetBuyerDashboard_RequestBody
   *
   * @param catalog - Identifier for the catalog.
   * @param factTable - Identifier for the factTable.
   * @param dashboardName - Identifier for the dashboardName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDashboard(catalog: string, factTable: string, dashboardName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aws-marketplace::${ account ?? this.defaultAccount }:${ catalog }/ReportingData/${ factTable }/Dashboard/${ dashboardName }`);
  }
}
