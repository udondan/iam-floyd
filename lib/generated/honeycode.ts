import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [honeycode](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonhoneycode.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Honeycode extends PolicyStatement {
  public servicePrefix = 'honeycode';

  /**
   * Statement provider for service [honeycode](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonhoneycode.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to approve a team association request for your AWS Account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/team-association.html#approve-team-association
   */
  public toApproveTeamAssociation() {
    this.to('honeycode:ApproveTeamAssociation');
    return this;
  }

  /**
   * Grants permission to create a new tenant within Amazon Honeycode for your AWS Account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/tenant.html#create-tenant
   */
  public toCreateTenant() {
    this.to('honeycode:CreateTenant');
    return this;
  }

  /**
   * Grants permission to load the data from a screen
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_GetScreenData.html
   */
  public toGetScreenData() {
    this.to('honeycode:GetScreenData');
    return this;
  }

  /**
   * Grants permission to invoke a screen automation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_InvokeScreenAutomation.html
   */
  public toInvokeScreenAutomation() {
    this.to('honeycode:InvokeScreenAutomation');
    return this;
  }

  /**
   * Grants permission to list all pending and approved team associations with your AWS Account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/team-association.html#list-team-associations
   */
  public toListTeamAssociations() {
    this.to('honeycode:ListTeamAssociations');
    return this;
  }

  /**
   * Grants permission to list all tenants of Amazon Honeycode for your AWS Account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/tenant.html#list-tenants
   */
  public toListTenants() {
    this.to('honeycode:ListTenants');
    return this;
  }

  /**
   * Grants permission to reject a team association request for your AWS Account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/team-association.html#reject-team-association
   */
  public toRejectTeamAssociation() {
    this.to('honeycode:RejectTeamAssociation');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "ApproveTeamAssociation",
      "CreateTenant",
      "InvokeScreenAutomation",
      "RejectTeamAssociation"
    ],
    "Read": [
      "GetScreenData"
    ],
    "List": [
      "ListTeamAssociations",
      "ListTenants"
    ]
  };

  /**
   * Adds a resource of type screen to the statement
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/resource-screen.html
   *
   * @param workbookId - Identifier for the workbookId.
   * @param appId - Identifier for the appId.
   * @param screenId - Identifier for the screenId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onScreen(workbookId: string, appId: string, screenId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:honeycode:${Region}:${Account}:screen:workbook/${WorkbookId}/app/${AppId}/screen/${ScreenId}';
    arn = arn.replace('${WorkbookId}', workbookId);
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${ScreenId}', screenId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type screen-automation to the statement
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/resource-screen-automation.html
   *
   * @param workbookId - Identifier for the workbookId.
   * @param appId - Identifier for the appId.
   * @param screenId - Identifier for the screenId.
   * @param automationId - Identifier for the automationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onScreenAutomation(workbookId: string, appId: string, screenId: string, automationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:honeycode:${Region}:${Account}:screen-automation:workbook/${WorkbookId}/app/${AppId}/screen/${ScreenId}/automation/${AutomationId}';
    arn = arn.replace('${WorkbookId}', workbookId);
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${ScreenId}', screenId);
    arn = arn.replace('${AutomationId}', automationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
