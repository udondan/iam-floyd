import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [wellarchitected](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awswell-architectedtool.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Wellarchitected extends PolicyStatement {
  public servicePrefix = 'wellarchitected';
  protected actionList: Actions = {
    "CreateWorkload": {
      "url": "https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html",
      "description": "Creates a new workload.",
      "accessLevel": "Write"
    },
    "CreateWorkloadShare": {
      "url": "https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html",
      "description": "Shares a workload with another account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workload": {
          "required": true
        }
      }
    },
    "DeleteWorkload": {
      "url": "https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-delete.html",
      "description": "Deletes an existing workload.",
      "accessLevel": "Write",
      "resourceTypes": {
        "workload": {
          "required": true
        }
      }
    },
    "GetWorkload": {
      "url": "https://docs.aws.amazon.com/wellarchitected/latest/userguide/workload-details.html",
      "description": "Retrieves the specified workload.",
      "accessLevel": "Read",
      "resourceTypes": {
        "workload": {
          "required": true
        }
      }
    },
    "ListWorkloads": {
      "url": "https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-page.html",
      "description": "Lists the workloads in this account.",
      "accessLevel": "List"
    }
  };
  protected resourceTypes: ResourceTypes = {
    "workload": {
      "name": "workload",
      "url": "https://docs.aws.amazon.com/wellarchitected/latest/userguide/iam-auth-access.html",
      "arn": "arn:${Partition}:wellarchitected:${Region}:${Account}:workload/${ResourceId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [wellarchitected](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awswell-architectedtool.html).
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
    this.add('wellarchitected:CreateWorkload');
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
    this.add('wellarchitected:CreateWorkloadShare');
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
    this.add('wellarchitected:DeleteWorkload');
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
    this.add('wellarchitected:GetWorkload');
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
    this.add('wellarchitected:ListWorkloads');
    return this;
  }

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
