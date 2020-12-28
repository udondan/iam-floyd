import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [mediaconvert](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediaconvert.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mediaconvert extends PolicyStatement {
  public servicePrefix = 'mediaconvert';

  /**
   * Statement provider for service [mediaconvert](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediaconvert.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate an AWS Certificate Manager (ACM) Amazon Resource Name (ARN) with AWS Elemental MediaConvert.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/certificates.html
   */
  public toAssociateCertificate() {
    return this.to('AssociateCertificate');
  }

  /**
   * Grants permission to cancel an AWS Elemental MediaConvert job that is waiting in queue
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html
   */
  public toCancelJob() {
    return this.to('CancelJob');
  }

  /**
   * Grants permission to create and submit an AWS Elemental MediaConvert job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html
   */
  public toCreateJob() {
    return this.to('CreateJob');
  }

  /**
   * Grants permission to create an AWS Elemental MediaConvert custom job template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html
   */
  public toCreateJobTemplate() {
    return this.to('CreateJobTemplate');
  }

  /**
   * Grants permission to create an AWS Elemental MediaConvert custom output preset
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets.html
   */
  public toCreatePreset() {
    return this.to('CreatePreset');
  }

  /**
   * Grants permission to create an AWS Elemental MediaConvert job queue
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues.html
   */
  public toCreateQueue() {
    return this.to('CreateQueue');
  }

  /**
   * Grants permission to delete an AWS Elemental MediaConvert custom job template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html
   */
  public toDeleteJobTemplate() {
    return this.to('DeleteJobTemplate');
  }

  /**
   * Grants permission to delete an AWS Elemental MediaConvert custom output preset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html
   */
  public toDeletePreset() {
    return this.to('DeletePreset');
  }

  /**
   * Grants permission to delete an AWS Elemental MediaConvert job queue
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html
   */
  public toDeleteQueue() {
    return this.to('DeleteQueue');
  }

  /**
   * Grants permission to subscribe to the AWS Elemental MediaConvert service, by sending a request for an account-specific endpoint. All transcoding requests must be sent to the endpoint that the service returns.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/endpoints.html
   */
  public toDescribeEndpoints() {
    return this.to('DescribeEndpoints');
  }

  /**
   * Grants permission to remove an association between the Amazon Resource Name (ARN) of an AWS Certificate Manager (ACM) certificate and an AWS Elemental MediaConvert resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/certificates-arn.html
   */
  public toDisassociateCertificate() {
    return this.to('DisassociateCertificate');
  }

  /**
   * Grants permission to get an AWS Elemental MediaConvert job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html
   */
  public toGetJob() {
    return this.to('GetJob');
  }

  /**
   * Grants permission to get an AWS Elemental MediaConvert job template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html
   */
  public toGetJobTemplate() {
    return this.to('GetJobTemplate');
  }

  /**
   * Grants permission to get an AWS Elemental MediaConvert output preset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html
   */
  public toGetPreset() {
    return this.to('GetPreset');
  }

  /**
   * Grants permission to get an AWS Elemental MediaConvert job queue
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html
   */
  public toGetQueue() {
    return this.to('GetQueue');
  }

  /**
   * Grants permission to list AWS Elemental MediaConvert job templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates.html
   */
  public toListJobTemplates() {
    return this.to('ListJobTemplates');
  }

  /**
   * Grants permission to list AWS Elemental MediaConvert jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html
   */
  public toListJobs() {
    return this.to('ListJobs');
  }

  /**
   * Grants permission to list AWS Elemental MediaConvert output presets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets.html
   */
  public toListPresets() {
    return this.to('ListPresets');
  }

  /**
   * Grants permission to list AWS Elemental MediaConvert job queues
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues.html
   */
  public toListQueues() {
    return this.to('ListQueues');
  }

  /**
   * Grants permission to retrieve the tags for a MediaConvert queue, preset, or job template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags-arn.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to add tags to a MediaConvert queue, preset, or job template
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a MediaConvert queue, preset, or job template
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags-arn.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an AWS Elemental MediaConvert custom job template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html
   */
  public toUpdateJobTemplate() {
    return this.to('UpdateJobTemplate');
  }

  /**
   * Grants permission to update an AWS Elemental MediaConvert custom output preset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html
   */
  public toUpdatePreset() {
    return this.to('UpdatePreset');
  }

  /**
   * Grants permission to update an AWS Elemental MediaConvert job queue
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html
   */
  public toUpdateQueue() {
    return this.to('UpdateQueue');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateCertificate",
      "CancelJob",
      "CreateJob",
      "CreateJobTemplate",
      "CreatePreset",
      "CreateQueue",
      "DeleteJobTemplate",
      "DeletePreset",
      "DeleteQueue",
      "DisassociateCertificate",
      "UpdateJobTemplate",
      "UpdatePreset",
      "UpdateQueue"
    ],
    "List": [
      "DescribeEndpoints",
      "ListJobTemplates",
      "ListJobs",
      "ListPresets",
      "ListQueues"
    ],
    "Read": [
      "GetJob",
      "GetJobTemplate",
      "GetPreset",
      "GetQueue",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type Job to the statement
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onJob(jobId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mediaconvert:${Region}:${Account}:jobs/${JobId}';
    arn = arn.replace('${JobId}', jobId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Queue to the statement
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues.html
   *
   * @param queueName - Identifier for the queueName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onQueue(queueName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mediaconvert:${Region}:${Account}:queues/${QueueName}';
    arn = arn.replace('${QueueName}', queueName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Preset to the statement
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets.html
   *
   * @param presetName - Identifier for the presetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPreset(presetName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mediaconvert:${Region}:${Account}:presets/${PresetName}';
    arn = arn.replace('${PresetName}', presetName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type JobTemplate to the statement
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates.html
   *
   * @param jobTemplateName - Identifier for the jobTemplateName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJobTemplate(jobTemplateName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mediaconvert:${Region}:${Account}:jobTemplates/${JobTemplateName}';
    arn = arn.replace('${JobTemplateName}', jobTemplateName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type CertificateAssociation to the statement
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/certificates.html
   *
   * @param certificateArn - Identifier for the certificateArn.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCertificateAssociation(certificateArn: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mediaconvert:${Region}:${Account}:certificates/${CertificateArn}';
    arn = arn.replace('${CertificateArn}', certificateArn);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
