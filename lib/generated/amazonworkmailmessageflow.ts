import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [workmailmessageflow](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkmailmessageflow.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Workmailmessageflow extends PolicyStatement {
  public servicePrefix = 'workmailmessageflow';
  protected actionList: Actions = {
    "GetRawMessageContent": {
      "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html",
      "description": "Grants permission to read the content of email messages with the specified message ID",
      "accessLevel": "Read",
      "resourceTypes": {
        "RawMessage": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "RawMessage": {
      "name": "RawMessage",
      "url": "https://docs.aws.amazon.com/workmail/latest/adminguide/lambda-content.html",
      "arn": "arn:${Partition}:workmailmessageflow:${Region}:${Account}:message/${OrganizationId}/${Context}/${MessageId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [workmailmessageflow](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkmailmessageflow.html).
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
    this.add('workmailmessageflow:GetRawMessageContent');
    return this;
  }

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
