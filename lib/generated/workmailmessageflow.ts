import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [workmailmessageflow](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkmailmessageflow.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Workmailmessageflow extends PolicyStatement {
  public servicePrefix = 'workmailmessageflow';

  /**
   * Statement provider for service [workmailmessageflow](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkmailmessageflow.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to read the content of email messages with the specified message ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html
   */
  public toGetRawMessageContent() {
    return this.to('GetRawMessageContent');
  }

  /**
   * Grants permission to update the content of email messages with the specified message ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_PutRawMessageContent.html
   */
  public toPutRawMessageContent() {
    return this.to('PutRawMessageContent');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetRawMessageContent'
    ],
    Write: [
      'PutRawMessageContent'
    ]
  };

  /**
   * Adds a resource of type RawMessage to the statement
   *
   * https://docs.aws.amazon.com/workmail/latest/adminguide/lambda-content.html
   *
   * @param organizationId - Identifier for the organizationId.
   * @param context - Identifier for the context.
   * @param messageId - Identifier for the messageId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRawMessage(organizationId: string, context: string, messageId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:workmailmessageflow:${ region || '*' }:${ account || '*' }:message/${ organizationId }/${ context }/${ messageId }`);
  }
}
