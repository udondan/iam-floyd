import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service workmailmessageflow
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkmailmessageflow.html
 */
export class Workmailmessageflow extends PolicyStatement {
    public servicePrefix = 'workmailmessageflow';
    public actions : Actions = { "GetRawMessageContent": { "url": "https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html", "description": "Grants permission to read the content of email messages with the specified message ID", "accessLevel": "Read", "resourceTypes": { "RawMessage": { "required": true } } } };

    /**
     * Grants permission to read the content of email messages with the specified message ID
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html
     */
    public getRawMessageContent () {
        this.add('workmailmessageflow:GetRawMessageContent');
        return this;
    }
}
