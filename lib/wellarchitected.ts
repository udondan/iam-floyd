import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service wellarchitected
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awswell-architectedtool.html
 */
export class Wellarchitected extends PolicyStatement {
  public servicePrefix = 'wellarchitected';
  public actions : Actions = {
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

  /**
   * Creates a new workload.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html
   */
  public createWorkload () {
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
  public createWorkloadShare () {
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
  public deleteWorkload () {
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
  public getWorkload () {
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
  public listWorkloads () {
    this.add('wellarchitected:ListWorkloads');
    return this;
  }
}
