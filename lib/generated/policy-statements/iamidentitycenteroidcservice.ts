import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [sso-oauth](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiamidentitycenteroidcservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SsoOauth extends PolicyStatement {
  public servicePrefix = 'sso-oauth';

  /**
   * Statement provider for service [sso-oauth](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiamidentitycenteroidcservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create and return OAuth 2.0 access tokens and refresh tokens for authorized client applications. These tokens might contain defined scopes that specify permissions such as `read:profile` or `write:data`
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   *
   * https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/API_CreateTokenWithIAM.html
   */
  public toCreateTokenWithIAM() {
    return this.to('CreateTokenWithIAM');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateTokenWithIAM'
    ]
  };

  /**
   * Adds a resource of type Application to the statement
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/get-started-enable-identity-center.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param applicationId - Identifier for the applicationId.
   * @param accountId - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onApplication(instanceId: string, applicationId: string, accountId?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sso::${ accountId ?? this.defaultAccount }:application/${ instanceId }/${ applicationId }`);
  }
}
