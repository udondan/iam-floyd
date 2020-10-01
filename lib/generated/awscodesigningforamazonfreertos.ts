import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [signer](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodesigningforamazonfreertos.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Signer extends PolicyStatement {
  public servicePrefix = 'signer';

  /**
   * Statement provider for service [signer](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodesigningforamazonfreertos.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Cancels a signing profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_CancelSigningProfile.html
   */
  public toCancelSigningProfile() {
    this.to('signer:CancelSigningProfile');
    return this;
  }

  /**
   * Describe a signing job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_DescribeSigningJob.html
   */
  public toDescribeSigningJob() {
    this.to('signer:DescribeSigningJob');
    return this;
  }

  /**
   * Retrieves a signing platform.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_GetSigningPlatform.html
   */
  public toGetSigningPlatform() {
    this.to('signer:GetSigningPlatform');
    return this;
  }

  /**
   * Retrieves a signing profile.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_GetSigningProfile.html
   */
  public toGetSigningProfile() {
    this.to('signer:GetSigningProfile');
    return this;
  }

  /**
   * List signing jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListSigningJobs.html
   */
  public toListSigningJobs() {
    this.to('signer:ListSigningJobs');
    return this;
  }

  /**
   * List all signing platforms.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListSigningPlatforms.html
   */
  public toListSigningPlatforms() {
    this.to('signer:ListSigningPlatforms');
    return this;
  }

  /**
   * List all signing profile associated with the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListSigningProfiles.html
   */
  public toListSigningProfiles() {
    this.to('signer:ListSigningProfiles');
    return this;
  }

  /**
   * Lists the tags associated with the Signing Profile resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('signer:ListTagsForResource');
    return this;
  }

  /**
   * Creates a new signing profile if not exists.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_PutSigningProfile.html
   */
  public toPutSigningProfile() {
    this.to('signer:PutSigningProfile');
    return this;
  }

  /**
   * Starts a code signing request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_StartSigningJob.html
   */
  public toStartSigningJob() {
    this.to('signer:StartSigningJob');
    return this;
  }

  /**
   * Adds one or more tags to an Signing Profile resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_TagResource.html
   */
  public toTagResource() {
    this.to('signer:TagResource');
    return this;
  }

  /**
   * Removes one or more tags from an Signing Profile resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/signer/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('signer:UntagResource');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelSigningProfile",
      "PutSigningProfile",
      "StartSigningJob"
    ],
    "Read": [
      "DescribeSigningJob",
      "GetSigningPlatform",
      "GetSigningProfile"
    ],
    "List": [
      "ListSigningJobs",
      "ListSigningPlatforms",
      "ListSigningProfiles",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type signing-profile to the statement
   *
   * https://docs.aws.amazon.com/signer/latest/developerguide/Welcome.htmlpermissions.html
   *
   * @param profileName - Identifier for the profileName.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSigningProfile(profileName: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:signer:${Region}::/signing-profiles/${ProfileName}';
    arn = arn.replace('${ProfileName}', profileName);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type signing-job to the statement
   *
   * https://docs.aws.amazon.com/signer/latest/developerguide/Welcome.htmlpermissions.html
   *
   * @param jobId - Identifier for the jobId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSigningJob(jobId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:signer:${Region}::/signing-jobs/${JobId}';
    arn = arn.replace('${JobId}', jobId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
