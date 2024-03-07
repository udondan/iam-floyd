import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [q](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonq.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Q extends PolicyStatement {
  public servicePrefix = 'q';

  /**
   * Statement provider for service [q](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonq.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to get individual messages associated with a specific conversation with Amazon Q
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/aws-builder-use-ug/security_iam_manage-access-with-policies.html
   */
  public toGetConversation() {
    return this.to('GetConversation');
  }

  /**
   * Grants permission to get troubleshooting results with Amazon Q
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/aws-builder-use-ug/security_iam_manage-access-with-policies.html
   */
  public toGetTroubleshootingResults() {
    return this.to('GetTroubleshootingResults');
  }

  /**
   * Grants permission to list individual conversations associated with a specific Amazon Q user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/aws-builder-use-ug/security_iam_manage-access-with-policies.html
   */
  public toListConversations() {
    return this.to('ListConversations');
  }

  /**
   * Grants permission to send a message to Amazon Q
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/aws-builder-use-ug/security_iam_manage-access-with-policies.html
   */
  public toSendMessage() {
    return this.to('SendMessage');
  }

  /**
   * Grants permission to start a conversation with Amazon Q
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/aws-builder-use-ug/security_iam_manage-access-with-policies.html
   */
  public toStartConversation() {
    return this.to('StartConversation');
  }

  /**
   * Grants permission to start a troubleshooting analysis with Amazon Q
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/aws-builder-use-ug/security_iam_manage-access-with-policies.html
   */
  public toStartTroubleshootingAnalysis() {
    return this.to('StartTroubleshootingAnalysis');
  }

  /**
   * Grants permission to start a troubleshooting resolution explanation with Amazon Q
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/aws-builder-use-ug/security_iam_manage-access-with-policies.html
   */
  public toStartTroubleshootingResolutionExplanation() {
    return this.to('StartTroubleshootingResolutionExplanation');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetConversation',
      'GetTroubleshootingResults',
      'ListConversations'
    ],
    Write: [
      'SendMessage',
      'StartConversation',
      'StartTroubleshootingAnalysis',
      'StartTroubleshootingResolutionExplanation'
    ]
  };
}
