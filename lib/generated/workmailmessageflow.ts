import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
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
    this.to('GetRawMessageContent');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "GetRawMessageContent"
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
    var arn = 'arn:${Partition}:workmailmessageflow:${Region}:${Account}:message/${OrganizationId}/${Context}/${MessageId}';
    arn = arn.replace('${OrganizationId}', organizationId);
    arn = arn.replace('${Context}', context);
    arn = arn.replace('${MessageId}', messageId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
