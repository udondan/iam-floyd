import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [codewhisperer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodewhisperer.html).
 *
 * @param options - Options for the statement
 */
export class Codewhisperer extends PolicyStatement {
  public servicePrefix = 'codewhisperer';

  /**
   * Statement provider for service [codewhisperer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodewhisperer.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to invoke CreateProfile on CodeWhisperer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/dg/API_CreateProfile.html
   */
  public toCreateProfile() {
    return this.to('CreateProfile');
  }

  /**
   * Grants permission to invoke GenerateRecommendations on CodeWhisperer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/dg/API_GenerateRecommendations.html
   */
  public toGenerateRecommendations() {
    return this.to('GenerateRecommendations');
  }

  /**
   * Grants permission to invoke ListProfiles on CodeWhisperer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/dg/API_ListProfiles.html
   */
  public toListProfiles() {
    return this.to('ListProfiles');
  }

  /**
   * Grants permission to invoke UpdateProfile on CodeWhisperer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/dg/API_UpdateProfile.html
   */
  public toUpdateProfile() {
    return this.to('UpdateProfile');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateProfile',
      'UpdateProfile'
    ],
    Read: [
      'GenerateRecommendations'
    ],
    List: [
      'ListProfiles'
    ]
  };

  /**
   * Adds a resource of type profile to the statement
   *
   * https://docs.aws.amazon.com/codewhisperer/latest/dg/profile.html
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onProfile(identifier: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:codewhisperer::${ account || '*' }:profile/${ identifier }`);
  }
}
