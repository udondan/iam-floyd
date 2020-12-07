import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
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
    this.to('qldb:CancelJournalKinesisStream');
    return this;
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
    this.to('qldb:CreateLedger');
    return this;
  }

  /**
   * Grants permission to delete a ledger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_DeleteLedger.html
   */
  public toDeleteLedger() {
    this.to('qldb:DeleteLedger');
    return this;
  }

  /**
   * Grants permission to describe information about a journal kinesis stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeJournalKinesisStream.html
   */
  public toDescribeJournalKinesisStream() {
    this.to('qldb:DescribeJournalKinesisStream');
    return this;
  }

  /**
   * Grants permission to describe information about a journal export job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeJournalS3Export.html
   */
  public toDescribeJournalS3Export() {
    this.to('qldb:DescribeJournalS3Export');
    return this;
  }

  /**
   * Grants permission to describe a ledger
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_DescribeLedger.html
   */
  public toDescribeLedger() {
    this.to('qldb:DescribeLedger');
    return this;
  }

  /**
   * Grants permission to send commands to a ledger via the console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html
   */
  public toExecuteStatement() {
    this.to('qldb:ExecuteStatement');
    return this;
  }

  /**
   * Grants permission to export journal contents to an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_ExportJournalToS3.html
   */
  public toExportJournalToS3() {
    this.to('qldb:ExportJournalToS3');
    return this;
  }

  /**
   * Grants permission to retrieve a block from a ledger for a given BlockAddress
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetBlock.html
   */
  public toGetBlock() {
    this.to('qldb:GetBlock');
    return this;
  }

  /**
   * Grants permission to retrieve a digest from a ledger for a given BlockAddress
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetDigest.html
   */
  public toGetDigest() {
    this.to('qldb:GetDigest');
    return this;
  }

  /**
   * Grants permission to retrieve a revision for a given document ID and a given BlockAddress
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_GetRevision.html
   */
  public toGetRevision() {
    this.to('qldb:GetRevision');
    return this;
  }

  /**
   * Grants permission to insert sample application data via the console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html
   */
  public toInsertSampleData() {
    this.to('qldb:InsertSampleData');
    return this;
  }

  /**
   * Grants permission to list journal kinesis streams for a specified ledger
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalKinesisStreamsForLedger.html
   */
  public toListJournalKinesisStreamsForLedger() {
    this.to('qldb:ListJournalKinesisStreamsForLedger');
    return this;
  }

  /**
   * Grants permission to list journal export jobs for all ledgers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalS3Exports.html
   */
  public toListJournalS3Exports() {
    this.to('qldb:ListJournalS3Exports');
    return this;
  }

  /**
   * Grants permission to list journal export jobs for a specified ledger
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListJournalS3ExportsForLedger.html
   */
  public toListJournalS3ExportsForLedger() {
    this.to('qldb:ListJournalS3ExportsForLedger');
    return this;
  }

  /**
   * Grants permission to list existing ledgers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListLedgers.html
   */
  public toListLedgers() {
    this.to('qldb:ListLedgers');
    return this;
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('qldb:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to send commands to a ledger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/Using.API.html
   */
  public toSendCommand() {
    this.to('qldb:SendCommand');
    return this;
  }

  /**
   * Grants permission to view a ledger's catalog via the console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/console_QLDB.html
   */
  public toShowCatalog() {
    this.to('qldb:ShowCatalog');
    return this;
  }

  /**
   * Grants permission to stream journal contents to a Kinesis Data Stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_StreamJournalToKinesis.html
   */
  public toStreamJournalToKinesis() {
    this.to('qldb:StreamJournalToKinesis');
    return this;
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
    this.to('qldb:TagResource');
    return this;
  }

  /**
   * Grants permission to remove one or more tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('qldb:UntagResource');
    return this;
  }

  /**
   * Grants permission to update properties on a ledger
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/API_UpdateLedger.html
   */
  public toUpdateLedger() {
    this.to('qldb:UpdateLedger');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelJournalKinesisStream",
      "CreateLedger",
      "DeleteLedger",
      "ExecuteStatement",
      "ExportJournalToS3",
      "InsertSampleData",
      "SendCommand",
      "ShowCatalog",
      "StreamJournalToKinesis",
      "UpdateLedger"
    ],
    "Read": [
      "DescribeJournalKinesisStream",
      "DescribeJournalS3Export",
      "DescribeLedger",
      "GetBlock",
      "GetDigest",
      "GetRevision",
      "ListTagsForResource"
    ],
    "List": [
      "ListJournalKinesisStreamsForLedger",
      "ListJournalS3Exports",
      "ListJournalS3ExportsForLedger",
      "ListLedgers"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type ledger to the statement
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/what-is.html
   *
   * @param ledgerName - Identifier for the ledgerName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLedger(ledgerName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:qldb:${Region}:${Account}:ledger/${LedgerName}';
    arn = arn.replace('${LedgerName}', ledgerName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type stream to the statement
   *
   * https://docs.aws.amazon.com/qldb/latest/developerguide/what-is.html
   *
   * @param ledgerName - Identifier for the ledgerName.
   * @param streamId - Identifier for the streamId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStream(ledgerName: string, streamId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:qldb:${Region}:${Account}:stream/${LedgerName}/${StreamId}';
    arn = arn.replace('${LedgerName}', ledgerName);
    arn = arn.replace('${StreamId}', streamId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type QldbActionsWrite = 'CancelJournalKinesisStream' | 'CreateLedger' | 'DeleteLedger' | 'ExecuteStatement' | 'ExportJournalToS3' | 'InsertSampleData' | 'SendCommand' | 'ShowCatalog' | 'StreamJournalToKinesis' | 'UpdateLedger';
export type QldbActionsRead = 'DescribeJournalKinesisStream' | 'DescribeJournalS3Export' | 'DescribeLedger' | 'GetBlock' | 'GetDigest' | 'GetRevision' | 'ListTagsForResource';
export type QldbActionsList = 'ListJournalKinesisStreamsForLedger' | 'ListJournalS3Exports' | 'ListJournalS3ExportsForLedger' | 'ListLedgers';
export type QldbActionsTagging = 'TagResource' | 'UntagResource';
export type QldbActions = QldbActionsWrite | QldbActionsRead | QldbActionsList | QldbActionsTagging;
