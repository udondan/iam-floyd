import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [neptune-db](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonneptune.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class NeptuneDb extends PolicyStatement {
  public servicePrefix = 'neptune-db';

  /**
   * Statement provider for service [neptune-db](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonneptune.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Connect to database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/get-started.html
   */
  public toconnect() {
    this.to('neptune-db:connect');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "connect"
    ]
  };

  /**
   * Adds a resource of type database to the statement
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/get-started.html
   *
   * @param cluster - Identifier for the cluster.
   * @param database - Identifier for the database.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDatabase(cluster: string, database: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:neptune-db:${Region}:${Account}:${Cluster}/${Database}';
    arn = arn.replace('${Cluster}', cluster);
    arn = arn.replace('${Database}', database);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type NeptuneDbActionsWrite = 'connect';
export type NeptuneDbActions = NeptuneDbActionsWrite;
