import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [honeycode](https://docs.aws.amazon.com/service-authorization/latest/reference/list_honeycode.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Honeycode extends PolicyStatement {
  public servicePrefix = 'honeycode';

  /**
   * Statement provider for service [honeycode](https://docs.aws.amazon.com/service-authorization/latest/reference/list_honeycode.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
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
   * Grants permission to list all tags for a resource
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
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
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BatchCreateTableRows',
      'BatchDeleteTableRows',
      'BatchUpdateTableRows',
      'BatchUpsertTableRows',
      'InvokeScreenAutomation',
      'ListTagsForResource',
      'StartTableDataImportJob',
      'TagResource',
      'UntagResource'
    ],
    Read: [
      'DescribeTableDataImportJob',
      'GetScreenData',
      'QueryTableRows'
    ],
    List: [
      'ListTableColumns',
      'ListTableRows',
      'ListTables'
    ],
    Tagging: [
      'ListTagsForResource',
      'TagResource',
      'UntagResource'
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
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onScreen(workbookId: string, appId: string, screenId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:honeycode:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:screen:workbook/${ workbookId }/app/${ appId }/screen/${ screenId }`);
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
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onScreenAutomation(workbookId: string, appId: string, screenId: string, automationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:honeycode:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:screen-automation:workbook/${ workbookId }/app/${ appId }/screen/${ screenId }/automation/${ automationId }`);
  }

  /**
   * Adds a resource of type table to the statement
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/resource-table.html
   *
   * @param workbookId - Identifier for the workbookId.
   * @param tableId - Identifier for the tableId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTable(workbookId: string, tableId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:honeycode:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:table:workbook/${ workbookId }/table/${ tableId }`);
  }

  /**
   * Adds a resource of type workbook to the statement
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/resource-workbook.html
   *
   * @param workbookId - Identifier for the workbookId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onWorkbook(workbookId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:honeycode:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workbook:workbook/${ workbookId }`);
  }
}
