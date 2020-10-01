import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [groundtruthlabeling](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazongroundtruthlabeling.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Groundtruthlabeling extends PolicyStatement {
  public servicePrefix = 'groundtruthlabeling';

  /**
   * Statement provider for service [groundtruthlabeling](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazongroundtruthlabeling.html).
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
    this.to('groundtruthlabeling:DescribeConsoleJob');
    return this;
  }

  /**
   * Paginated list API to list dataset objects in a manifest file.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toListDatasetObjects() {
    this.to('groundtruthlabeling:ListDatasetObjects');
    return this;
  }

  /**
   * Filter records from a manifest file using S3 select. Get sample entries based on random sampling.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-data-filtering
   */
  public toRunFilterOrSampleDatasetJob() {
    this.to('groundtruthlabeling:RunFilterOrSampleDatasetJob');
    return this;
  }

  /**
   * List a S3 prefix and create manifest files from objects in that location.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toRunGenerateManifestByCrawlingJob() {
    this.to('groundtruthlabeling:RunGenerateManifestByCrawlingJob');
    return this;
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
