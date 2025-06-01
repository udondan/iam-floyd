import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [transform](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstransform.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Transform extends PolicyStatement {
  public servicePrefix = 'transform';

  /**
   * Statement provider for service [transform](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstransform.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to invoke AssociateConnectorResource on AWS Transform
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/security_iam_permissions.html
   */
  public toAssociateConnectorResource() {
    return this.to('AssociateConnectorResource');
  }

  /**
   * Grants permission to invoke CreateProfile on AWS Transform
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/security_iam_permissions.html
   */
  public toCreateProfile() {
    return this.to('CreateProfile');
  }

  /**
   * Grants permission to invoke DeleteProfile on AWS Transform
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/security_iam_permissions.html
   */
  public toDeleteProfile() {
    return this.to('DeleteProfile');
  }

  /**
   * Grants permission to invoke GetConnector on AWS Transform
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/security_iam_permissions.html
   */
  public toGetConnector() {
    return this.to('GetConnector');
  }

  /**
   * Grants permission to invoke ListProfiles on AWS Transform
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/security_iam_permissions.html
   */
  public toListProfiles() {
    return this.to('ListProfiles');
  }

  /**
   * Grants permission to invoke RejectConnector on AWS Transform
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/security_iam_permissions.html
   */
  public toRejectConnector() {
    return this.to('RejectConnector');
  }

  /**
   * Grants permission to invoke UpdateProfile on AWS Transform
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/security_iam_permissions.html
   */
  public toUpdateProfile() {
    return this.to('UpdateProfile');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateConnectorResource',
      'CreateProfile',
      'DeleteProfile',
      'RejectConnector',
      'UpdateProfile'
    ],
    Read: [
      'GetConnector'
    ],
    List: [
      'ListProfiles'
    ]
  };

  /**
   * Adds a resource of type profile to the statement
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/security_iam_permissions.html
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onProfile(identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transform:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:profile/${ identifier }`);
  }
}
