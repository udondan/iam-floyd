import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [wellarchitected](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswell-architectedtool.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Wellarchitected extends PolicyStatement {
  public servicePrefix = 'wellarchitected';

  /**
   * Statement provider for service [wellarchitected](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswell-architectedtool.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a new workload.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html
   */
  public toCreateWorkload() {
    this.to('CreateWorkload');
    return this;
  }

  /**
   * Shares a workload with another account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html
   */
  public toCreateWorkloadShare() {
    this.to('CreateWorkloadShare');
    return this;
  }

  /**
   * Deletes an existing workload.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-delete.html
   */
  public toDeleteWorkload() {
    this.to('DeleteWorkload');
    return this;
  }

  /**
   * Retrieves the specified workload.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/workload-details.html
   */
  public toGetWorkload() {
    this.to('GetWorkload');
    return this;
  }

  /**
   * Lists the workloads in this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-page.html
   */
  public toListWorkloads() {
    this.to('ListWorkloads');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateWorkload",
      "CreateWorkloadShare",
      "DeleteWorkload"
    ],
    "Read": [
      "GetWorkload"
    ],
    "List": [
      "ListWorkloads"
    ]
  };

  /**
   * Adds a resource of type workload to the statement
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/iam-auth-access.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onWorkload(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:wellarchitected:${Region}:${Account}:workload/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
