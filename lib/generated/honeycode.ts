import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
  constructor(sid?: string) {
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
   * Grants permission to create a new Amazon Honeycode team for your AWS Account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/team.html#create-team
   */
  public toCreateTeam() {
    return this.to('CreateTeam');
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
   * Grants permission to delete Amazon Honeycode domains for your AWS Account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/domain.html#delete-domains
   */
  public toDeleteDomains() {
    return this.to('DeleteDomains');
  }

  /**
   * Grants permission to remove groups from an Amazon Honeycode team for your AWS Account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/group.html#deregister-groups
   */
  public toDeregisterGroups() {
    return this.to('DeregisterGroups');
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
   * Grants permission to get details about Amazon Honeycode teams for your AWS Account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/team.html#describe-team
   */
  public toDescribeTeam() {
    return this.to('DescribeTeam');
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
   * Grants permission to list all Amazon Honeycode domains and their verification status for your AWS Account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/domain.html#list-domains
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * Grants permission to list all groups in an Amazon Honeycode team for your AWS Account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/group.html#list-groups
   */
  public toListGroups() {
    return this.to('ListGroups');
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
   * Grants permission to list all tags for a resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
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
   * Grants permission to request verification of the Amazon Honeycode domains for your AWS Account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/domain.html#register-domain-for-verification
   */
  public toRegisterDomainForVerification() {
    return this.to('RegisterDomainForVerification');
  }

  /**
   * Grants permission to add groups to an Amazon Honeycode team for your AWS Account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/group.html#register-groups
   */
  public toRegisterGroups() {
    return this.to('RegisterGroups');
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
   * Grants permission to restart verification of the Amazon Honeycode domains for your AWS Account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/domain.html#restart-domain-verification
   */
  public toRestartDomainVerification() {
    return this.to('RestartDomainVerification');
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

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an Amazon Honeycode team for your AWS Account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/team.html#update-team
   */
  public toUpdateTeam() {
    return this.to('UpdateTeam');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ApproveTeamAssociation',
      'BatchCreateTableRows',
      'BatchDeleteTableRows',
      'BatchUpdateTableRows',
      'BatchUpsertTableRows',
      'CreateTeam',
      'CreateTenant',
      'DeleteDomains',
      'DeregisterGroups',
      'InvokeScreenAutomation',
      'RegisterDomainForVerification',
      'RegisterGroups',
      'RejectTeamAssociation',
      'RestartDomainVerification',
      'StartTableDataImportJob',
      'UpdateTeam'
    ],
    Read: [
      'DescribeTableDataImportJob',
      'DescribeTeam',
      'GetScreenData',
      'QueryTableRows'
    ],
    List: [
      'ListDomains',
      'ListGroups',
      'ListTableColumns',
      'ListTableRows',
      'ListTables',
      'ListTeamAssociations',
      'ListTenants'
    ],
    Tagging: [
      'ListTagsForResource',
      'TagResource',
      'UntagResource'
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
    return this.on(`arn:${ partition || 'aws' }:honeycode:${ region || '*' }:${ account || '*' }:workbook:workbook/${ workbookId }`);
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
    return this.on(`arn:${ partition || 'aws' }:honeycode:${ region || '*' }:${ account || '*' }:table:workbook/${ workbookId }/table/${ tableId }`);
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
    return this.on(`arn:${ partition || 'aws' }:honeycode:${ region || '*' }:${ account || '*' }:screen:workbook/${ workbookId }/app/${ appId }/screen/${ screenId }`);
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
    return this.on(`arn:${ partition || 'aws' }:honeycode:${ region || '*' }:${ account || '*' }:screen-automation:workbook/${ workbookId }/app/${ appId }/screen/${ screenId }/automation/${ automationId }`);
  }
}
