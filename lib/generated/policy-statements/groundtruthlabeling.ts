import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

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
  constructor(sid?: string) {
    super(sid);
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
   * Grants permission to create a GT+ Batch
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toCreateBatch() {
    return this.to('CreateBatch');
  }

  /**
   * Grants permission to create intake form
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toCreateIntakeForm() {
    return this.to('CreateIntakeForm');
  }

  /**
   * Grants permission to create a GT+ Project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Grants permission to create a GT+ Workflow Definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toCreateWorkflowDefinition() {
    return this.to('CreateWorkflowDefinition');
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
   * Grants permission to generate LiDAR Preview Task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toGenerateLIDARPreviewTaskConfigJob() {
    return this.to('GenerateLIDARPreviewTaskConfigJob');
  }

  /**
   * Grants permission to get a GT+ Batch
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toGetBatch() {
    return this.to('GetBatch');
  }

  /**
   * Grants permission to get a intake forms
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toGetIntakeFormStatus() {
    return this.to('GetIntakeFormStatus');
  }

  /**
   * Grants permission to list a GT+ Batchs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toListBatches() {
    return this.to('ListBatches');
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
   * Grants permission to list a GT+ Projects
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toListProjects() {
    return this.to('ListProjects');
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

  /**
   * Grants permission to generate metrics from objects in manifest
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toRunGenerateManifestMetricsJob() {
    return this.to('RunGenerateManifestMetricsJob');
  }

  /**
   * Grants permission to update a GT+ Batch
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public toUpdateBatch() {
    return this.to('UpdateBatch');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociatePatchToManifestJob',
      'CreateBatch',
      'CreateIntakeForm',
      'CreateProject',
      'CreateWorkflowDefinition',
      'GenerateLIDARPreviewTaskConfigJob',
      'RunFilterOrSampleDatasetJob',
      'RunGenerateManifestByCrawlingJob',
      'RunGenerateManifestMetricsJob',
      'UpdateBatch'
    ],
    Read: [
      'DescribeConsoleJob',
      'GetBatch',
      'GetIntakeFormStatus',
      'ListBatches',
      'ListDatasetObjects',
      'ListProjects'
    ]
  };
}
