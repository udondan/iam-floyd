import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permissions to create a CloudShell environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSecurityGroupIds()
   * - .ifSubnetIds()
   * - .ifVpcIds()
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#CreateEnvironment
   */
  public toCreateEnvironment() {
    return this.to('CreateEnvironment');
  }

  /**
   * Grants permissions to connect to a CloudShell environment from the AWS Management Console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#CreateSession
   */
  public toCreateSession() {
    return this.to('CreateSession');
  }

  /**
   * Grants permission to delete a CloudShell environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#DeleteEnvironment
   */
  public toDeleteEnvironment() {
    return this.to('DeleteEnvironment');
  }

  /**
   * Grants permission to return descriptions of existing user's environments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#DescribeEnvironments
   */
  public toDescribeEnvironments() {
    return this.to('DescribeEnvironments');
  }

  /**
   * Grants permission to read a CloudShell environment status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#GetEnvironmentStatus
   */
  public toGetEnvironmentStatus() {
    return this.to('GetEnvironmentStatus');
  }

  /**
   * Grants permissions to download files from a CloudShell environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#GetFileDownloadUrls
   */
  public toGetFileDownloadUrls() {
    return this.to('GetFileDownloadUrls');
  }

  /**
   * Grants permissions to upload files to a CloudShell environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#GetFileUploadUrls
   */
  public toGetFileUploadUrls() {
    return this.to('GetFileUploadUrls');
  }

  /**
   * Grants permissions to forward console credentials to the environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#PutCredentials
   */
  public toPutCredentials() {
    return this.to('PutCredentials');
  }

  /**
   * Grants permission to start a stopped CloudShell environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#StartEnvironment
   */
  public toStartEnvironment() {
    return this.to('StartEnvironment');
  }

  /**
   * Grants permission to stop a running CloudShell environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#StopEnvironment
   */
  public toStopEnvironment() {
    return this.to('StopEnvironment');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateEnvironment',
      'CreateSession',
      'DeleteEnvironment',
      'GetFileDownloadUrls',
      'GetFileUploadUrls',
      'PutCredentials',
      'StartEnvironment',
      'StopEnvironment'
    ],
    List: [
      'DescribeEnvironments'
    ],
    Read: [
      'GetEnvironmentStatus'
    ]
  };

  /**
   * Adds a resource of type Environment to the statement
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/sec-auth-with-identities.html#Environment
   *
   * @param environmentId - Identifier for the environmentId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEnvironment(environmentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudshell:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:environment/${ environmentId }`);
  }

  /**
   * Filters access by security group ids. Available during CreateEnvironment operation
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/aws-cloudshell-vpc-permissions-1.html#vpc-condition-keys-examples-1
   *
   * Applies to actions:
   * - .toCreateEnvironment()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecurityGroupIds(value: string | string[], operator?: Operator | string) {
    return this.if(`SecurityGroupIds`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by subnet ids. Available during CreateEnvironment operation
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/aws-cloudshell-vpc-permissions-1.html#vpc-condition-keys-examples-1
   *
   * Applies to actions:
   * - .toCreateEnvironment()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSubnetIds(value: string | string[], operator?: Operator | string) {
    return this.if(`SubnetIds`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by vpc ids. Available during CreateEnvironment operation
   *
   * https://docs.aws.amazon.com/cloudshell/latest/userguide/aws-cloudshell-vpc-permissions-1.html#vpc-condition-keys-examples-1
   *
   * Applies to actions:
   * - .toCreateEnvironment()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcIds(value: string | string[], operator?: Operator | string) {
    return this.if(`VpcIds`, value, operator ?? 'StringLike');
  }
}
