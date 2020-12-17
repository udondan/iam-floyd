import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [cloudshell](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudshell.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cloudshell extends PolicyStatement {
  public servicePrefix = 'cloudshell';

  /**
   * Statement provider for service [cloudshell](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudshell.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permissions to create a CloudShell environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#CreateEnvironment
   */
  public toCreateEnvironment() {
    this.to('cloudshell:CreateEnvironment');
    return this;
  }

  /**
   * Grants permissions to connect to a CloudShell environment from the AWS Console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#CreateSession
   */
  public toCreateSession() {
    this.to('cloudshell:CreateSession');
    return this;
  }

  /**
   * Grants permissions to download files from a CloudShell environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#GetFileDownloadUrls
   */
  public toGetFileDownloadUrls() {
    this.to('cloudshell:GetFileDownloadUrls');
    return this;
  }

  /**
   * Grants permissions to upload files to a CloudShell environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#GetFileUploadUrls
   */
  public toGetFileUploadUrls() {
    this.to('cloudshell:GetFileUploadUrls');
    return this;
  }

  /**
   * Grants permissions to forward console credentials to the environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#PutCredentials
   */
  public toPutCredentials() {
    this.to('cloudshell:PutCredentials');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateEnvironment",
      "CreateSession",
      "GetFileDownloadUrls",
      "GetFileUploadUrls",
      "PutCredentials"
    ]
  };

  /**
   * Adds a resource of type Environment to the statement
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#Environment
   *
   * @param environmentId - Identifier for the environmentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEnvironment(environmentId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudshell:${Region}:${Account}:environment/${EnvironmentId}';
    arn = arn.replace('${EnvironmentId}', environmentId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
