import { Actions, PolicyStatement, ResourceTypes } from "./shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service importexport
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsimportexportdiskservice.html
 */
export class Importexport extends PolicyStatement {
  public servicePrefix = 'importexport';
  public actions: Actions = {
    "CancelJob": {
      "url": "https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebCancelJob.html",
      "description": "This action cancels a specified job. Only the job owner can cancel it. The action fails if the job has already started or is complete.",
      "accessLevel": "Write"
    },
    "CreateJob": {
      "url": "https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebCreateJob.html",
      "description": "This action initiates the process of scheduling an upload or download of your data.",
      "accessLevel": "Write"
    },
    "GetShippingLabel": {
      "url": "https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebGetShippingLabel.html",
      "description": "This action generates a pre-paid shipping label that you will use to ship your device to AWS for processing.",
      "accessLevel": "Read"
    },
    "GetStatus": {
      "url": "https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebGetStatus.html",
      "description": "This action returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job.",
      "accessLevel": "Read"
    },
    "ListJobs": {
      "url": "https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebListJobs.html",
      "description": "This action returns the jobs associated with the requester.",
      "accessLevel": "List"
    },
    "UpdateJob": {
      "url": "https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebUpdateJob.html",
      "description": "You use this action to change the parameters specified in the original manifest file by supplying a new manifest file.",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * Action provider for service importexport
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsimportexportdiskservice.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * This action cancels a specified job. Only the job owner can cancel it. The action fails if the job has already started or is complete.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebCancelJob.html
   */
  public cancelJob() {
    this.add('importexport:CancelJob');
    return this;
  }

  /**
   * This action initiates the process of scheduling an upload or download of your data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebCreateJob.html
   */
  public createJob() {
    this.add('importexport:CreateJob');
    return this;
  }

  /**
   * This action generates a pre-paid shipping label that you will use to ship your device to AWS for processing.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebGetShippingLabel.html
   */
  public getShippingLabel() {
    this.add('importexport:GetShippingLabel');
    return this;
  }

  /**
   * This action returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebGetStatus.html
   */
  public getStatus() {
    this.add('importexport:GetStatus');
    return this;
  }

  /**
   * This action returns the jobs associated with the requester.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebListJobs.html
   */
  public listJobs() {
    this.add('importexport:ListJobs');
    return this;
  }

  /**
   * You use this action to change the parameters specified in the original manifest file by supplying a new manifest file.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebUpdateJob.html
   */
  public updateJob() {
    this.add('importexport:UpdateJob');
    return this;
  }
}
