import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service cur
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscostandusagereport.html
 */
export class Cur extends PolicyStatement {
    public servicePrefix = 'cur';
    public actions : Actions = { "DeleteReportDefinition": { "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/delete-report-definition.html", "description": "Delete Cost and Usage Report Definition", "accessLevel": "Write", "resourceTypes": { "cur": { "required": true } } }, "DescribeReportDefinitions": { "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/describe-report-definitions.html", "description": "Get Cost and Usage Report Definitions", "accessLevel": "Read" }, "ModifyReportDefinition": { "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/modify-report-definition.html", "description": "Modify Cost and Usage Report Definition", "accessLevel": "Write", "resourceTypes": { "cur": { "required": true } } }, "PutReportDefinition": { "url": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/put-report-definition.html", "description": "Write Cost and Usage Report Definition", "accessLevel": "Write", "resourceTypes": { "cur": { "required": true } } } };

    /**
     * Delete Cost and Usage Report Definition
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/delete-report-definition.html
     */
    public deleteReportDefinition () {
        this.add('cur:DeleteReportDefinition');
        return this;
    }

    /**
     * Get Cost and Usage Report Definitions
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/describe-report-definitions.html
     */
    public describeReportDefinitions () {
        this.add('cur:DescribeReportDefinitions');
        return this;
    }

    /**
     * Modify Cost and Usage Report Definition
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/modify-report-definition.html
     */
    public modifyReportDefinition () {
        this.add('cur:ModifyReportDefinition');
        return this;
    }

    /**
     * Write Cost and Usage Report Definition
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/put-report-definition.html
     */
    public putReportDefinition () {
        this.add('cur:PutReportDefinition');
        return this;
    }
}
