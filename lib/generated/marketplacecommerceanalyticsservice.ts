import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [marketplacecommerceanalytics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacecommerceanalyticsservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Marketplacecommerceanalytics extends PolicyStatement {
  public servicePrefix = 'marketplacecommerceanalytics';

  /**
   * Statement provider for service [marketplacecommerceanalytics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacecommerceanalyticsservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Request a data set to be published to your Amazon S3 bucket.
   *
   * Access Level: Write
   */
  public toGenerateDataSet() {
    this.to('marketplacecommerceanalytics:GenerateDataSet');
    return this;
  }

  /**
   * Request a support data set to be published to your Amazon S3 bucket.
   *
   * Access Level: Write
   */
  public toStartSupportDataExport() {
    this.to('marketplacecommerceanalytics:StartSupportDataExport');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "GenerateDataSet",
      "StartSupportDataExport"
    ]
  };
}
