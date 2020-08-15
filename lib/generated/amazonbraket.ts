import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [braket](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonbraket.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Braket extends PolicyStatement {
  public servicePrefix = 'braket';
  protected actionList: Actions = {
    "CancelQuantumTask": {
      "url": "https://docs.aws.amazon.com/braket/latest/APIReference/API_CancelQuantumTask.html",
      "description": "Grants permission to cancel a quantum task.",
      "accessLevel": "Write"
    },
    "CreateQuantumTask": {
      "url": "https://docs.aws.amazon.com/braket/latest/APIReference/API_CreateQuantumTask.html",
      "description": "Grants permission to create a quantum task.",
      "accessLevel": "Write"
    },
    "GetDevice": {
      "url": "https://docs.aws.amazon.com/braket/latest/APIReference/API_GetDevice.html",
      "description": "Grants permission to retrieve information about the devices available in Amazon Braket.",
      "accessLevel": "Read"
    },
    "GetQuantumTask": {
      "url": "https://docs.aws.amazon.com/braket/latest/APIReference/API_GetQuantumTask.html",
      "description": "Grants permission to retrieve quantum tasks.",
      "accessLevel": "Read"
    },
    "SearchDevices": {
      "url": "https://docs.aws.amazon.com/braket/latest/APIReference/API_SearchDevices.html",
      "description": "Grants permission to search for devices available in Amazon Braket.",
      "accessLevel": "Read"
    },
    "SearchQuantumTasks": {
      "url": "https://docs.aws.amazon.com/braket/latest/APIReference/API_SearchQuantumTasks.html",
      "description": "Grants permission to search for quantum tasks.",
      "accessLevel": "Read"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [braket](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonbraket.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel a quantum task.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_CancelQuantumTask.html
   */
  public cancelQuantumTask() {
    this.add('braket:CancelQuantumTask');
    return this;
  }

  /**
   * Grants permission to create a quantum task.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_CreateQuantumTask.html
   */
  public createQuantumTask() {
    this.add('braket:CreateQuantumTask');
    return this;
  }

  /**
   * Grants permission to retrieve information about the devices available in Amazon Braket.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_GetDevice.html
   */
  public getDevice() {
    this.add('braket:GetDevice');
    return this;
  }

  /**
   * Grants permission to retrieve quantum tasks.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_GetQuantumTask.html
   */
  public getQuantumTask() {
    this.add('braket:GetQuantumTask');
    return this;
  }

  /**
   * Grants permission to search for devices available in Amazon Braket.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_SearchDevices.html
   */
  public searchDevices() {
    this.add('braket:SearchDevices');
    return this;
  }

  /**
   * Grants permission to search for quantum tasks.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_SearchQuantumTasks.html
   */
  public searchQuantumTasks() {
    this.add('braket:SearchQuantumTasks');
    return this;
  }
}
