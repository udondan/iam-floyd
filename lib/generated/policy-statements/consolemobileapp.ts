import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [consoleapp](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconsolemobileapp.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Consoleapp extends PolicyStatement {
  public servicePrefix = 'consoleapp';

  /**
   * Statement provider for service [consoleapp](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconsolemobileapp.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to retrieve the device identity for a Console Mobile App device
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/consolemobileapp/latest/userguide/permissions-policies.html
   */
  public toGetDeviceIdentity() {
    return this.to('GetDeviceIdentity');
  }

  /**
   * Grants permission to retrieve a list of device identities
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/consolemobileapp/latest/userguide/permissions-policies.html
   */
  public toListDeviceIdentities() {
    return this.to('ListDeviceIdentities');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetDeviceIdentity'
    ],
    List: [
      'ListDeviceIdentities'
    ]
  };

  /**
   * Adds a resource of type DeviceIdentity to the statement
   *
   * https://docs.aws.amazon.com/consolemobileapp/latest/userguide/permissions-policies.html
   *
   * @param deviceId - Identifier for the deviceId.
   * @param identityId - Identifier for the identityId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDeviceIdentity(deviceId: string, identityId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:consoleapp::${ account ?? this.defaultAccount }:device/${ deviceId }/identity/${ identityId }`);
  }
}
