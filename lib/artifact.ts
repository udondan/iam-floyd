import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service artifact
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsartifact.html
 */
export class Artifact extends PolicyStatement {
    public servicePrefix = 'artifact';
    public actions : Actions = { "AcceptAgreement": { "url": "https://docs.aws.amazon.com/artifact/latest/ug/managingagreements.html", "description": "Grants permission to accept an AWS agreement that has not yet been accepted by the customer account.", "accessLevel": "Write", "resourceTypes": { "agreement": { "required": true } } }, "DownloadAgreement": { "url": "https://docs.aws.amazon.com/artifact/latest/ug/managingagreements.html", "description": "Grants permission to download an AWS agreement that has not yet been accepted or a customer agreement that has been accepted by the customer account.", "accessLevel": "Read", "resourceTypes": { "agreement": { "required": false }, "customer-agreement": { "required": false } } }, "Get": { "url": "https://docs.aws.amazon.com/artifact/latest/ug/getting-started.html", "description": "Grants permission to download an AWS compliance report package.", "accessLevel": "Read", "resourceTypes": { "report-package": { "required": true } } }, "TerminateAgreement": { "url": "https://docs.aws.amazon.com/artifact/latest/ug/managingagreements.html", "description": "Grants permission to terminate a customer agreement that was previously accepted by the customer account.", "accessLevel": "Write", "resourceTypes": { "customer-agreement": { "required": true } } } };

    /**
     * Grants permission to accept an AWS agreement that has not yet been accepted by the customer account.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/artifact/latest/ug/managingagreements.html
     */
    public acceptAgreement () {
        this.add('artifact:AcceptAgreement');
        return this;
    }

    /**
     * Grants permission to download an AWS agreement that has not yet been accepted or a customer agreement that has been accepted by the customer account.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/artifact/latest/ug/managingagreements.html
     */
    public downloadAgreement () {
        this.add('artifact:DownloadAgreement');
        return this;
    }

    /**
     * Grants permission to download an AWS compliance report package.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/artifact/latest/ug/getting-started.html
     */
    public get () {
        this.add('artifact:Get');
        return this;
    }

    /**
     * Grants permission to terminate a customer agreement that was previously accepted by the customer account.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/artifact/latest/ug/managingagreements.html
     */
    public terminateAgreement () {
        this.add('artifact:TerminateAgreement');
        return this;
    }
}
