import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [groundtruthlabeling](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongroundtruthlabeling.html).
 *
 * @param options - Options for the statement
 */
export class Groundtruthlabeling extends PolicyStatement {
  public servicePrefix = 'groundtruthlabeling';

  /**
   * Statement provider for service [groundtruthlabeling](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazongroundtruthlabeling.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to associate a patch file with the manifest file to update the manifest file
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toAssociatePatchToManifestJob() {
    return this.to('AssociatePatchToManifestJob');
  }

  /**
   * Grants permission to get status of GroundTruthLabeling Jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toDescribeConsoleJob() {
    return this.to('DescribeConsoleJob');
  }

  /**
   * Grants permission to list dataset objects in a manifest file
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toListDatasetObjects() {
    return this.to('ListDatasetObjects');
  }

  /**
   * Grants permission to filter records from a manifest file using S3 select. Get sample entries based on random sampling
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-data-filtering
   */
  public toRunFilterOrSampleDatasetJob() {
    return this.to('RunFilterOrSampleDatasetJob');
  }

  /**
   * Grants permission to list a S3 prefix and create manifest files from objects in that location
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toRunGenerateManifestByCrawlingJob() {
    return this.to('RunGenerateManifestByCrawlingJob');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociatePatchToManifestJob',
      'RunFilterOrSampleDatasetJob',
      'RunGenerateManifestByCrawlingJob'
    ],
    Read: [
      'DescribeConsoleJob',
      'ListDatasetObjects'
    ]
  };
}
