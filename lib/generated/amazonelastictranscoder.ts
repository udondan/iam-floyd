import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [elastictranscoder](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelastictranscoder.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Elastictranscoder extends PolicyStatement {
  public servicePrefix = 'elastictranscoder';

  /**
   * Statement provider for service [elastictranscoder](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelastictranscoder.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Cancel a job that Elastic Transcoder has not begun to process
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/cancel-job.html
   */
  public toCancelJob() {
    this.to('elastictranscoder:CancelJob');
    return this;
  }

  /**
   * Create a job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-job.html
   */
  public toCreateJob() {
    this.to('elastictranscoder:CreateJob');
    return this;
  }

  /**
   * Create a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-pipeline.html
   */
  public toCreatePipeline() {
    this.to('elastictranscoder:CreatePipeline');
    return this;
  }

  /**
   * Create a preset.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-preset.html
   */
  public toCreatePreset() {
    this.to('elastictranscoder:CreatePreset');
    return this;
  }

  /**
   * Delete a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/delete-pipeline.html
   */
  public toDeletePipeline() {
    this.to('elastictranscoder:DeletePipeline');
    return this;
  }

  /**
   * Delete a preset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/delete-preset.html
   */
  public toDeletePreset() {
    this.to('elastictranscoder:DeletePreset');
    return this;
  }

  /**
   * Get a list of the jobs that you assigned to a pipeline
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-jobs-by-pipeline.html
   */
  public toListJobsByPipeline() {
    this.to('elastictranscoder:ListJobsByPipeline');
    return this;
  }

  /**
   * Get information about all of the jobs associated with the current AWS account that have a specified status
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-jobs-by-status.html
   */
  public toListJobsByStatus() {
    this.to('elastictranscoder:ListJobsByStatus');
    return this;
  }

  /**
   * Get a list of the pipelines associated with the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-pipelines.html
   */
  public toListPipelines() {
    this.to('elastictranscoder:ListPipelines');
    return this;
  }

  /**
   * Get a list of all presets associated with the current AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-presets.html
   */
  public toListPresets() {
    this.to('elastictranscoder:ListPresets');
    return this;
  }

  /**
   * Get detailed information about a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-job.html
   */
  public toReadJob() {
    this.to('elastictranscoder:ReadJob');
    return this;
  }

  /**
   * Get detailed information about a pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-pipeline.html
   */
  public toReadPipeline() {
    this.to('elastictranscoder:ReadPipeline');
    return this;
  }

  /**
   * Get detailed information about a preset.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-preset.html
   */
  public toReadPreset() {
    this.to('elastictranscoder:ReadPreset');
    return this;
  }

  /**
   * Test the settings for a pipeline to ensure that Elastic Transcoder can create and process jobs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/test-pipeline-role.html
   */
  public toTestRole() {
    this.to('elastictranscoder:TestRole');
    return this;
  }

  /**
   * Update settings for a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline.html
   */
  public toUpdatePipeline() {
    this.to('elastictranscoder:UpdatePipeline');
    return this;
  }

  /**
   * Update only Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline-notifications.html
   */
  public toUpdatePipelineNotifications() {
    this.to('elastictranscoder:UpdatePipelineNotifications');
    return this;
  }

  /**
   * Pause or reactivate a pipeline, so the pipeline stops or restarts processing jobs, update the status for the pipeline.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline-status.html
   */
  public toUpdatePipelineStatus() {
    this.to('elastictranscoder:UpdatePipelineStatus');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelJob",
      "CreateJob",
      "CreatePipeline",
      "CreatePreset",
      "DeletePipeline",
      "DeletePreset",
      "TestRole",
      "UpdatePipeline",
      "UpdatePipelineNotifications",
      "UpdatePipelineStatus"
    ],
    "List": [
      "ListJobsByPipeline",
      "ListJobsByStatus",
      "ListPipelines",
      "ListPresets"
    ],
    "Read": [
      "ReadJob",
      "ReadPipeline",
      "ReadPreset"
    ]
  };

  /**
   * Adds a resource of type job to the statement
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/operations-jobs.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onJob(jobId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elastictranscoder:${Region}:${Account}:job/${JobId}';
    arn = arn.replace('${JobId}', jobId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type pipeline to the statement
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/operations-pipelines.html
   *
   * @param pipelineId - Identifier for the pipelineId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPipeline(pipelineId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elastictranscoder:${Region}:${Account}:pipeline/${PipelineId}';
    arn = arn.replace('${PipelineId}', pipelineId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type preset to the statement
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/operations-presets.html
   *
   * @param presetId - Identifier for the presetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPreset(presetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elastictranscoder:${Region}:${Account}:preset/${PresetId}';
    arn = arn.replace('${PresetId}', presetId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
