import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [qldb](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonqldb.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Qldb extends PolicyStatement {
  public servicePrefix = 'qldb';

  /**
   * Statement provider for service [qldb](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonqldb.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel a journal kinesis stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_CancelJournalKinesisStream.html
   */
  public toCancelJournalKinesisStream() {
    return this.to('CancelJournalKinesisStream');
  }

  /**
   * Grants permission to create a ledger
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_CreateLedger.html
   */
  public toCreateLedger() {
    return this.to('CreateLedger');
  }

  /**
   * Grants permission to delete a ledger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_DeleteLedger.html
   */
  public toDeleteLedger() {
    return this.to('DeleteLedger');
  }

  /**
   * Grants permission to describe information about a journal kinesis stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeJournalKinesisStream.html
   */
  public toDescribeJournalKinesisStream() {
    return this.to('DescribeJournalKinesisStream');
  }

  /**
   * Grants permission to describe information about a journal export job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeJournalS3Export.html
   */
  public toDescribeJournalS3Export() {
    return this.to('DescribeJournalS3Export');
  }

  /**
   * Grants permission to describe a ledger
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeLedger.html
   */
  public toDescribeLedger() {
    return this.to('DescribeLedger');
  }

  /**
   * Grants permission to send commands to a ledger via the console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html
   */
  public toExecuteStatement() {
    return this.to('ExecuteStatement');
  }

  /**
   * Grants permission to export journal contents to an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_ExportJournalToS3.html
   */
  public toExportJournalToS3() {
    return this.to('ExportJournalToS3');
  }

  /**
   * Grants permission to retrieve a block from a ledger for a given BlockAddress
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetBlock.html
   */
  public toGetBlock() {
    return this.to('GetBlock');
  }

  /**
   * Grants permission to retrieve a digest from a ledger for a given BlockAddress
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetDigest.html
   */
  public toGetDigest() {
    return this.to('GetDigest');
  }

  /**
   * Grants permission to retrieve a revision for a given document ID and a given BlockAddress
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetRevision.html
   */
  public toGetRevision() {
    return this.to('GetRevision');
  }

  /**
   * Grants permission to insert sample application data via the console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html
   */
  public toInsertSampleData() {
    return this.to('InsertSampleData');
  }

  /**
   * Grants permission to list journal kinesis streams for a specified ledger
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalKinesisStreamsForLedger.html
   */
  public toListJournalKinesisStreamsForLedger() {
    return this.to('ListJournalKinesisStreamsForLedger');
  }

  /**
   * Grants permission to list journal export jobs for all ledgers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalS3Exports.html
   */
  public toListJournalS3Exports() {
    return this.to('ListJournalS3Exports');
  }

  /**
   * Grants permission to list journal export jobs for a specified ledger
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalS3ExportsForLedger.html
   */
  public toListJournalS3ExportsForLedger() {
    return this.to('ListJournalS3ExportsForLedger');
  }

  /**
   * Grants permission to list existing ledgers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListLedgers.html
   */
  public toListLedgers() {
    return this.to('ListLedgers');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create an index on a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.create-index.html
   */
  public toPartiQLCreateIndex() {
    return this.to('PartiQLCreateIndex');
  }

  /**
   * Grants permission to create a table
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.create-table.html
   */
  public toPartiQLCreateTable() {
    return this.to('PartiQLCreateTable');
  }

  /**
   * Grants permission to delete documents from a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.delete.html
   */
  public toPartiQLDelete() {
    return this.to('PartiQLDelete');
  }

  /**
   * Grants permission to drop an index from a table
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPurge()
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.drop-index.html
   */
  public toPartiQLDropIndex() {
    return this.to('PartiQLDropIndex');
  }

  /**
   * Grants permission to drop a table
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPurge()
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.drop-table.html
   */
  public toPartiQLDropTable() {
    return this.to('PartiQLDropTable');
  }

  /**
   * Grants permission to use the history function on a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/working.history.html
   */
  public toPartiQLHistoryFunction() {
    return this.to('PartiQLHistoryFunction');
  }

  /**
   * Grants permission to insert documents into a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.insert.html
   */
  public toPartiQLInsert() {
    return this.to('PartiQLInsert');
  }

  /**
   * Grants permission to redact historic revisions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/ql-stored-procedures.redact_revision.html
   */
  public toPartiQLRedact() {
    return this.to('PartiQLRedact');
  }

  /**
   * Grants permission to select documents from a table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.select.html
   */
  public toPartiQLSelect() {
    return this.to('PartiQLSelect');
  }

  /**
   * Grants permission to undrop a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.undrop-table.html
   */
  public toPartiQLUndropTable() {
    return this.to('PartiQLUndropTable');
  }

  /**
   * Grants permission to update existing documents in a table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/ql-reference.update.html
   */
  public toPartiQLUpdate() {
    return this.to('PartiQLUpdate');
  }

  /**
   * Grants permission to send commands to a ledger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_QLDB-Session_SendCommand.html
   */
  public toSendCommand() {
    return this.to('SendCommand');
  }

  /**
   * Grants permission to view a ledger's catalog via the console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html
   */
  public toShowCatalog() {
    return this.to('ShowCatalog');
  }

  /**
   * Grants permission to stream journal contents to a Kinesis Data Stream
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_StreamJournalToKinesis.html
   */
  public toStreamJournalToKinesis() {
    return this.to('StreamJournalToKinesis');
  }

  /**
   * Grants permission to add one or more tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove one or more tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update properties on a ledger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_UpdateLedger.html
   */
  public toUpdateLedger() {
    return this.to('UpdateLedger');
  }

  /**
   * Grants permission to update the permissions mode on a ledger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_UpdateLedgerPermissionsMode.html
   */
  public toUpdateLedgerPermissionsMode() {
    return this.to('UpdateLedgerPermissionsMode');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelJournalKinesisStream',
      'CreateLedger',
      'DeleteLedger',
      'ExecuteStatement',
      'ExportJournalToS3',
      'InsertSampleData',
      'PartiQLCreateIndex',
      'PartiQLCreateTable',
      'PartiQLDelete',
      'PartiQLDropIndex',
      'PartiQLDropTable',
      'PartiQLInsert',
      'PartiQLRedact',
      'PartiQLUndropTable',
      'PartiQLUpdate',
      'SendCommand',
      'ShowCatalog',
      'StreamJournalToKinesis',
      'UpdateLedger',
      'UpdateLedgerPermissionsMode'
    ],
    Read: [
      'DescribeJournalKinesisStream',
      'DescribeJournalS3Export',
      'DescribeLedger',
      'GetBlock',
      'GetDigest',
      'GetRevision',
      'ListTagsForResource',
      'PartiQLHistoryFunction',
      'PartiQLSelect'
    ],
    List: [
      'ListJournalKinesisStreamsForLedger',
      'ListJournalS3Exports',
      'ListJournalS3ExportsForLedger',
      'ListLedgers'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type ledger to the statement
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/ledger-structure.html
   *
   * @param ledgerName - Identifier for the ledgerName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLedger(ledgerName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:qldb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:ledger/${ ledgerName }`);
  }

  /**
   * Adds a resource of type stream to the statement
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/streams.html
   *
   * @param ledgerName - Identifier for the ledgerName.
   * @param streamId - Identifier for the streamId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStream(ledgerName: string, streamId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:qldb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:stream/${ ledgerName }/${ streamId }`);
  }

  /**
   * Adds a resource of type table to the statement
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/working.manage-tables.html
   *
   * @param ledgerName - Identifier for the ledgerName.
   * @param tableId - Identifier for the tableId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTable(ledgerName: string, tableId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:qldb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:ledger/${ ledgerName }/table/${ tableId }`);
  }

  /**
   * Adds a resource of type catalog to the statement
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/working.catalog.html
   *
   * @param ledgerName - Identifier for the ledgerName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCatalog(ledgerName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:qldb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:ledger/${ ledgerName }/information_schema/user_tables`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateLedger()
   * - .toPartiQLCreateTable()
   * - .toStreamJournalToKinesis()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a tag key and value pair of a resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - ledger
   * - stream
   * - table
   * - catalog
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a list of tag keys that are allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateLedger()
   * - .toPartiQLCreateTable()
   * - .toStreamJournalToKinesis()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the value of purge that is specified in a PartiQL DROP statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-purge
   *
   * Applies to actions:
   * - .toPartiQLDropIndex()
   * - .toPartiQLDropTable()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPurge(value: string | string[], operator?: Operator | string) {
    return this.if(`Purge`, value, operator ?? 'StringLike');
  }
}
