import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [groundtruthlabeling](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongroundtruthlabeling.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Groundtruthlabeling extends PolicyStatement {
  public servicePrefix = 'groundtruthlabeling';

  /**
   * Statement provider for service [groundtruthlabeling](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongroundtruthlabeling.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Get status of GroundTruthLabeling Jobs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toDescribeConsoleJob() {
    return this.to('DescribeConsoleJob');
  }

  /**
   * Paginated list API to list dataset objects in a manifest file.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toListDatasetObjects() {
    return this.to('ListDatasetObjects');
  }

  /**
   * Filter records from a manifest file using S3 select. Get sample entries based on random sampling.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-data-filtering
   */
  public toRunFilterOrSampleDatasetJob() {
    return this.to('RunFilterOrSampleDatasetJob');
  }

  /**
   * List a S3 prefix and create manifest files from objects in that location.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toRunGenerateManifestByCrawlingJob() {
    return this.to('RunGenerateManifestByCrawlingJob');
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "DescribeConsoleJob",
      "ListDatasetObjects"
    ],
    "Write": [
      "RunFilterOrSampleDatasetJob",
      "RunGenerateManifestByCrawlingJob"
    ]
  };
}
