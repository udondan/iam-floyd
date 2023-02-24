import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [elastictranscoder](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelastictranscoder.html).
 *
 * @param options - Options for the statement
 */
export class Elastictranscoder extends PolicyStatement {
  public servicePrefix = 'elastictranscoder';

  /**
   * Statement provider for service [elastictranscoder](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelastictranscoder.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Cancel a job that Elastic Transcoder has not begun to process
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/cancel-job.html
   */
  public toCancelJob() {
    return this.to('CancelJob');
  }

  /**
   * Create a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-job.html
   */
  public toCreateJob() {
    return this.to('CreateJob');
  }

  /**
   * Create a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-pipeline.html
   */
  public toCreatePipeline() {
    return this.to('CreatePipeline');
  }

  /**
   * Create a preset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/create-preset.html
   */
  public toCreatePreset() {
    return this.to('CreatePreset');
  }

  /**
   * Delete a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/delete-pipeline.html
   */
  public toDeletePipeline() {
    return this.to('DeletePipeline');
  }

  /**
   * Delete a preset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/delete-preset.html
   */
  public toDeletePreset() {
    return this.to('DeletePreset');
  }

  /**
   * Get a list of the jobs that you assigned to a pipeline
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-jobs-by-pipeline.html
   */
  public toListJobsByPipeline() {
    return this.to('ListJobsByPipeline');
  }

  /**
   * Get information about all of the jobs associated with the current AWS account that have a specified status
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-jobs-by-status.html
   */
  public toListJobsByStatus() {
    return this.to('ListJobsByStatus');
  }

  /**
   * Get a list of the pipelines associated with the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-pipelines.html
   */
  public toListPipelines() {
    return this.to('ListPipelines');
  }

  /**
   * Get a list of all presets associated with the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/list-presets.html
   */
  public toListPresets() {
    return this.to('ListPresets');
  }

  /**
   * Get detailed information about a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-job.html
   */
  public toReadJob() {
    return this.to('ReadJob');
  }

  /**
   * Get detailed information about a pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-pipeline.html
   */
  public toReadPipeline() {
    return this.to('ReadPipeline');
  }

  /**
   * Get detailed information about a preset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/get-preset.html
   */
  public toReadPreset() {
    return this.to('ReadPreset');
  }

  /**
   * Test the settings for a pipeline to ensure that Elastic Transcoder can create and process jobs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/test-pipeline-role.html
   */
  public toTestRole() {
    return this.to('TestRole');
  }

  /**
   * Update settings for a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline.html
   */
  public toUpdatePipeline() {
    return this.to('UpdatePipeline');
  }

  /**
   * Update only Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline-notifications.html
   */
  public toUpdatePipelineNotifications() {
    return this.to('UpdatePipelineNotifications');
  }

  /**
   * Pause or reactivate a pipeline, so the pipeline stops or restarts processing jobs, update the status for the pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/update-pipeline-status.html
   */
  public toUpdatePipelineStatus() {
    return this.to('UpdatePipelineStatus');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelJob',
      'CreateJob',
      'CreatePipeline',
      'CreatePreset',
      'DeletePipeline',
      'DeletePreset',
      'TestRole',
      'UpdatePipeline',
      'UpdatePipelineNotifications',
      'UpdatePipelineStatus'
    ],
    List: [
      'ListJobsByPipeline',
      'ListJobsByStatus',
      'ListPipelines',
      'ListPresets'
    ],
    Read: [
      'ReadJob',
      'ReadPipeline',
      'ReadPreset'
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onJob(jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elastictranscoder:${ region || '*' }:${ account || '*' }:job/${ jobId }`);
  }

  /**
   * Adds a resource of type pipeline to the statement
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/operations-pipelines.html
   *
   * @param pipelineId - Identifier for the pipelineId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onPipeline(pipelineId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elastictranscoder:${ region || '*' }:${ account || '*' }:pipeline/${ pipelineId }`);
  }

  /**
   * Adds a resource of type preset to the statement
   *
   * https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/operations-presets.html
   *
   * @param presetId - Identifier for the presetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onPreset(presetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:elastictranscoder:${ region || '*' }:${ account || '*' }:preset/${ presetId }`);
  }
}
