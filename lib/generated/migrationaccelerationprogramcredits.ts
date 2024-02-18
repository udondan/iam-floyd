import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [mapcredits](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationaccelerationprogramcredits.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mapcredits extends PolicyStatement {
  public servicePrefix = 'mapcredits';

  /**
   * Statement provider for service [mapcredits](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationaccelerationprogramcredits.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to view the user's associated Migration Acceleration Program agreements
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toListAssociatedPrograms() {
    return this.to('ListAssociatedPrograms');
  }

  /**
   * Grants permission to view Migration Acceleration Program agreements credits associated with the user's payer account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toListQuarterCredits() {
    return this.to('ListQuarterCredits');
  }

  /**
   * Grants permission to view Migration Acceleration Program agreements eligible spend associated with the user's payer account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toListQuarterSpend() {
    return this.to('ListQuarterSpend');
  }

  protected accessLevelList: AccessLevelList = {
    List: [
      'ListAssociatedPrograms',
      'ListQuarterCredits',
      'ListQuarterSpend'
    ]
  };

  /**
   * Adds a resource of type agreement to the statement
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   *
   * @param agreement - Identifier for the agreement.
   * @param agreementId - Identifier for the agreementId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAgreement(agreement: string, agreementId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mapcredits:::${ agreement }/${ agreementId }`);
  }
}
