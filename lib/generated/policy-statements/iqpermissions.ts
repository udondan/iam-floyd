import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [iq-permission](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiqpermissions.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class IqPermission extends PolicyStatement {
  public servicePrefix = 'iq-permission';

  /**
   * Statement provider for service [iq-permission](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiqpermissions.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to approve a permission request
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toApproveAccessGrant() {
    return this.to('ApproveAccessGrant');
  }

  /**
   * Grants permission to approve a permission request
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toApprovePermissionRequest() {
    return this.to('ApprovePermissionRequest');
  }

  /**
   * Grants permission to obtain a set of temporary security credentials for experts which they can use to access buyers' AWS resources
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toAssumePermissionRole() {
    return this.to('AssumePermissionRole');
  }

  /**
   * Grants permission to create a permission request
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toCreatePermissionRequest() {
    return this.to('CreatePermissionRequest');
  }

  /**
   * Grants permission to get a permission request
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toGetPermissionRequest() {
    return this.to('GetPermissionRequest');
  }

  /**
   * Grants permission to list permission requests
   *
   * Access Level: Read
   *
   * https://aws.amazon.com/iq/
   */
  public toListPermissionRequests() {
    return this.to('ListPermissionRequests');
  }

  /**
   * Grants permission to reject a permission request
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toRejectPermissionRequest() {
    return this.to('RejectPermissionRequest');
  }

  /**
   * Grants permission to revoke a permission request which was previously approved
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toRevokePermissionRequest() {
    return this.to('RevokePermissionRequest');
  }

  /**
   * Grants permission to withdraw a permission request that has not been approved or declined
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public toWithdrawPermissionRequest() {
    return this.to('WithdrawPermissionRequest');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ApproveAccessGrant',
      'ApprovePermissionRequest',
      'AssumePermissionRole',
      'CreatePermissionRequest',
      'RejectPermissionRequest',
      'RevokePermissionRequest',
      'WithdrawPermissionRequest'
    ],
    Read: [
      'GetPermissionRequest',
      'ListPermissionRequests'
    ]
  };

  /**
   * Adds a resource of type permission to the statement
   *
   * https://aws.amazon.com/iq/
   *
   * @param permissionRequestId - Identifier for the permissionRequestId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onPermission(permissionRequestId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iq-permission:${ region ?? this.defaultRegion }::permission/${ permissionRequestId }`);
  }
}
