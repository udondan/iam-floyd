import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [braket](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonbraket.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Braket extends PolicyStatement {
  public servicePrefix = 'braket';

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
  public toCancelQuantumTask() {
    this.to('braket:CancelQuantumTask');
    return this;
  }

  /**
   * Grants permission to create a quantum task.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_CreateQuantumTask.html
   */
  public toCreateQuantumTask() {
    this.to('braket:CreateQuantumTask');
    return this;
  }

  /**
   * Grants permission to retrieve information about the devices available in Amazon Braket.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_GetDevice.html
   */
  public toGetDevice() {
    this.to('braket:GetDevice');
    return this;
  }

  /**
   * Grants permission to retrieve quantum tasks.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_GetQuantumTask.html
   */
  public toGetQuantumTask() {
    this.to('braket:GetQuantumTask');
    return this;
  }

  /**
   * Grants permission to search for devices available in Amazon Braket.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_SearchDevices.html
   */
  public toSearchDevices() {
    this.to('braket:SearchDevices');
    return this;
  }

  /**
   * Grants permission to search for quantum tasks.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/braket/latest/APIReference/API_SearchQuantumTasks.html
   */
  public toSearchQuantumTasks() {
    this.to('braket:SearchQuantumTasks');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelQuantumTask",
      "CreateQuantumTask"
    ],
    "Read": [
      "GetDevice",
      "GetQuantumTask",
      "SearchDevices",
      "SearchQuantumTasks"
    ]
  };
}
