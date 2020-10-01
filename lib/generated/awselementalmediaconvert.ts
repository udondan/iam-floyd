import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [mediaconvert](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediaconvert.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mediaconvert extends PolicyStatement {
  public servicePrefix = 'mediaconvert';

  /**
   * Statement provider for service [mediaconvert](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediaconvert.html).
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
    this.to('mediaconvert:AssociateCertificate');
    return this;
  }

  /**
   * Grants permission to cancel an AWS Elemental MediaConvert job that is waiting in queue
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html
   */
  public toCancelJob() {
    this.to('mediaconvert:CancelJob');
    return this;
  }

  /**
   * Grants permission to create and submit an AWS Elemental MediaConvert job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html
   */
  public toCreateJob() {
    this.to('mediaconvert:CreateJob');
    return this;
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
    this.to('mediaconvert:CreateJobTemplate');
    return this;
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
    this.to('mediaconvert:CreatePreset');
    return this;
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
    this.to('mediaconvert:CreateQueue');
    return this;
  }

  /**
   * Grants permission to delete an AWS Elemental MediaConvert custom job template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html
   */
  public toDeleteJobTemplate() {
    this.to('mediaconvert:DeleteJobTemplate');
    return this;
  }

  /**
   * Grants permission to delete an AWS Elemental MediaConvert custom output preset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html
   */
  public toDeletePreset() {
    this.to('mediaconvert:DeletePreset');
    return this;
  }

  /**
   * Grants permission to delete an AWS Elemental MediaConvert job queue
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html
   */
  public toDeleteQueue() {
    this.to('mediaconvert:DeleteQueue');
    return this;
  }

  /**
   * Grants permission to subscribe to the AWS Elemental MediaConvert service, by sending a request for an account-specific endpoint. All transcoding requests must be sent to the endpoint that the service returns.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/endpoints.html
   */
  public toDescribeEndpoints() {
    this.to('mediaconvert:DescribeEndpoints');
    return this;
  }

  /**
   * Grants permission to remove an association between the Amazon Resource Name (ARN) of an AWS Certificate Manager (ACM) certificate and an AWS Elemental MediaConvert resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/certificates-arn.html
   */
  public toDisassociateCertificate() {
    this.to('mediaconvert:DisassociateCertificate');
    return this;
  }

  /**
   * Grants permission to get an AWS Elemental MediaConvert job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs-id.html
   */
  public toGetJob() {
    this.to('mediaconvert:GetJob');
    return this;
  }

  /**
   * Grants permission to get an AWS Elemental MediaConvert job template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html
   */
  public toGetJobTemplate() {
    this.to('mediaconvert:GetJobTemplate');
    return this;
  }

  /**
   * Grants permission to get an AWS Elemental MediaConvert output preset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html
   */
  public toGetPreset() {
    this.to('mediaconvert:GetPreset');
    return this;
  }

  /**
   * Grants permission to get an AWS Elemental MediaConvert job queue
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html
   */
  public toGetQueue() {
    this.to('mediaconvert:GetQueue');
    return this;
  }

  /**
   * Grants permission to list AWS Elemental MediaConvert job templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates.html
   */
  public toListJobTemplates() {
    this.to('mediaconvert:ListJobTemplates');
    return this;
  }

  /**
   * Grants permission to list AWS Elemental MediaConvert jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html
   */
  public toListJobs() {
    this.to('mediaconvert:ListJobs');
    return this;
  }

  /**
   * Grants permission to list AWS Elemental MediaConvert output presets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets.html
   */
  public toListPresets() {
    this.to('mediaconvert:ListPresets');
    return this;
  }

  /**
   * Grants permission to list AWS Elemental MediaConvert job queues
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues.html
   */
  public toListQueues() {
    this.to('mediaconvert:ListQueues');
    return this;
  }

  /**
   * Grants permission to retrieve the tags for a MediaConvert queue, preset, or job template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/tags-arn.html
   */
  public toListTagsForResource() {
    this.to('mediaconvert:ListTagsForResource');
    return this;
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
    this.to('mediaconvert:TagResource');
    return this;
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
    this.to('mediaconvert:UntagResource');
    return this;
  }

  /**
   * Grants permission to update an AWS Elemental MediaConvert custom job template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobtemplates-name.html
   */
  public toUpdateJobTemplate() {
    this.to('mediaconvert:UpdateJobTemplate');
    return this;
  }

  /**
   * Grants permission to update an AWS Elemental MediaConvert custom output preset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/presets-name.html
   */
  public toUpdatePreset() {
    this.to('mediaconvert:UpdatePreset');
    return this;
  }

  /**
   * Grants permission to update an AWS Elemental MediaConvert job queue
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediaconvert/latest/apireference/queues-name.html
   */
  public toUpdateQueue() {
    this.to('mediaconvert:UpdateQueue');
    return this;
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
