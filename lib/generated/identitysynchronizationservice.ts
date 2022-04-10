import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [identity-sync](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentitysynchronizationservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class IdentitySync extends PolicyStatement {
  public servicePrefix = 'identity-sync';

  /**
   * Statement provider for service [identity-sync](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentitysynchronizationservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a sync filter on the sync profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  public toCreateSyncFilter() {
    return this.to('CreateSyncFilter');
  }

  /**
   * Grants permission to create a sync profile for the source
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ds:AuthorizeApplication
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  public toCreateSyncProfile() {
    return this.to('CreateSyncProfile');
  }

  /**
   * Grants permission to create a sync target for the source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  public toCreateSyncTarget() {
    return this.to('CreateSyncTarget');
  }

  /**
   * Grants permission to delete a sync filter on the sync profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  public toDeleteSyncFilter() {
    return this.to('DeleteSyncFilter');
  }

  /**
   * Grants permission to delete a sync profile on the source
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ds:UnauthorizeApplication
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  public toDeleteSyncProfile() {
    return this.to('DeleteSyncProfile');
  }

  /**
   * Grants permission to delete a sync target on the source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  public toDeleteSyncTarget() {
    return this.to('DeleteSyncTarget');
  }

  /**
   * Grants permission to retrieve a sync profile using sync profile name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  public toGetSyncProfile() {
    return this.to('GetSyncProfile');
  }

  /**
   * Grants permission to retrieve a sync target on the sync profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  public toGetSyncTarget() {
    return this.to('GetSyncTarget');
  }

  /**
   * Grants permission to list the sync filters on the sync profile
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  public toListSyncFilters() {
    return this.to('ListSyncFilters');
  }

  /**
   * Grants permission to start a synchronization process or to restart a synchronization that was previously stopped
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  public toStartSync() {
    return this.to('StartSync');
  }

  /**
   * Grants permission to stop any planned synchronizations in the synchronization schedule from starting
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  public toStopSync() {
    return this.to('StopSync');
  }

  /**
   * Grants permission to update a sync target on the sync profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   */
  public toUpdateSyncTarget() {
    return this.to('UpdateSyncTarget');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateSyncFilter',
      'CreateSyncProfile',
      'CreateSyncTarget',
      'DeleteSyncFilter',
      'DeleteSyncProfile',
      'DeleteSyncTarget',
      'StartSync',
      'StopSync',
      'UpdateSyncTarget'
    ],
    Read: [
      'GetSyncProfile',
      'GetSyncTarget'
    ],
    List: [
      'ListSyncFilters'
    ]
  };

  /**
   * Adds a resource of type SyncProfileResource to the statement
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   *
   * @param syncProfileName - Identifier for the syncProfileName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSyncProfileResource(syncProfileName: string, account?: string, region?: string, partition?: string) {
    return this.on(`^arn:${ partition || 'aws' }:identity-sync:${ region || '*' }:${ account || '*' }:profile/${ syncProfileName }`);
  }

  /**
   * Adds a resource of type SyncTargetResource to the statement
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/security-iam-awsmanpol.html
   *
   * @param syncProfileName - Identifier for the syncProfileName.
   * @param syncTargetName - Identifier for the syncTargetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSyncTargetResource(syncProfileName: string, syncTargetName: string, account?: string, region?: string, partition?: string) {
    return this.on(`^arn:${ partition || 'aws' }:identity-sync:${ region || '*' }:${ account || '*' }:target/${ syncProfileName }/${ syncTargetName }`);
  }
}
