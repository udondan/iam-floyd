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
    return this.to('ApproveTeamAssociation');
  }

  /**
   * Grants permission to create new rows in a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_BatchCreateTableRows.html
   */
  public toBatchCreateTableRows() {
    return this.to('BatchCreateTableRows');
  }

  /**
   * Grants permission to delete rows from a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_BatchDeleteTableRows.html
   */
  public toBatchDeleteTableRows() {
    return this.to('BatchDeleteTableRows');
  }

  /**
   * Grants permission to update rows in a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_BatchUpdateTableRows.html
   */
  public toBatchUpdateTableRows() {
    return this.to('BatchUpdateTableRows');
  }

  /**
   * Grants permission to upsert rows in a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_BatchUpsertTableRows.html
   */
  public toBatchUpsertTableRows() {
    return this.to('BatchUpsertTableRows');
  }

  /**
   * Grants permission to create a new tenant within Amazon Honeycode for your AWS Account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/tenant.html#create-tenant
   */
  public toCreateTenant() {
    return this.to('CreateTenant');
  }

  /**
   * Grants permission to get details about a table data import job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_DescribeTableDataImportJob.html
   */
  public toDescribeTableDataImportJob() {
    return this.to('DescribeTableDataImportJob');
  }

  /**
   * Grants permission to load the data from a screen
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_GetScreenData.html
   */
  public toGetScreenData() {
    return this.to('GetScreenData');
  }

  /**
   * Grants permission to invoke a screen automation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_InvokeScreenAutomation.html
   */
  public toInvokeScreenAutomation() {
    return this.to('InvokeScreenAutomation');
  }

  /**
   * Grants permission to list the columns in a table
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_ListTableColumns.html
   */
  public toListTableColumns() {
    return this.to('ListTableColumns');
  }

  /**
   * Grants permission to list the rows in a table
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_ListTableRows.html
   */
  public toListTableRows() {
    return this.to('ListTableRows');
  }

  /**
   * Grants permission to list the tables in a workbook
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_ListTables.html
   */
  public toListTables() {
    return this.to('ListTables');
  }

  /**
   * Grants permission to list all pending and approved team associations with your AWS Account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/team-association.html#list-team-associations
   */
  public toListTeamAssociations() {
    return this.to('ListTeamAssociations');
  }

  /**
   * Grants permission to list all tenants of Amazon Honeycode for your AWS Account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/tenant.html#list-tenants
   */
  public toListTenants() {
    return this.to('ListTenants');
  }

  /**
   * Grants permission to query the rows of a table using a filter
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_QueryTableRows.html
   */
  public toQueryTableRows() {
    return this.to('QueryTableRows');
  }

  /**
   * Grants permission to reject a team association request for your AWS Account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/team-association.html#reject-team-association
   */
  public toRejectTeamAssociation() {
    return this.to('RejectTeamAssociation');
  }

  /**
   * Grants permission to start a table data import job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_StartTableDataImportJob.html
   */
  public toStartTableDataImportJob() {
    return this.to('StartTableDataImportJob');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "ApproveTeamAssociation",
      "BatchCreateTableRows",
      "BatchDeleteTableRows",
      "BatchUpdateTableRows",
      "BatchUpsertTableRows",
      "CreateTenant",
      "InvokeScreenAutomation",
      "RejectTeamAssociation",
      "StartTableDataImportJob"
    ],
    "Read": [
      "DescribeTableDataImportJob",
      "GetScreenData",
      "QueryTableRows"
    ],
    "List": [
      "ListTableColumns",
      "ListTableRows",
      "ListTables",
      "ListTeamAssociations",
      "ListTenants"
    ]
  };

  /**
   * Adds a resource of type workbook to the statement
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/resource-workbook.html
   *
   * @param workbookId - Identifier for the workbookId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onWorkbook(workbookId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:honeycode:${Region}:${Account}:workbook:workbook/${WorkbookId}';
    arn = arn.replace('${WorkbookId}', workbookId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type table to the statement
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/resource-table.html
   *
   * @param workbookId - Identifier for the workbookId.
   * @param tableId - Identifier for the tableId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTable(workbookId: string, tableId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:honeycode:${Region}:${Account}:table:workbook/${WorkbookId}/table/${TableId}';
    arn = arn.replace('${WorkbookId}', workbookId);
    arn = arn.replace('${TableId}', tableId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

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
