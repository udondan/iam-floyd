import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [importexport](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsimportexportdiskservice.html).
 *
 * @param options - Options for the statement
 */
export class Importexport extends PolicyStatement {
  public servicePrefix = 'importexport';

  /**
   * Statement provider for service [importexport](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsimportexportdiskservice.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * This action cancels a specified job. Only the job owner can cancel it. The action fails if the job has already started or is complete.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebCancelJob.html
   */
  public toCancelJob() {
    return this.to('CancelJob');
  }

  /**
   * This action initiates the process of scheduling an upload or download of your data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebCreateJob.html
   */
  public toCreateJob() {
    return this.to('CreateJob');
  }

  /**
   * This action generates a pre-paid shipping label that you will use to ship your device to AWS for processing.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebGetShippingLabel.html
   */
  public toGetShippingLabel() {
    return this.to('GetShippingLabel');
  }

  /**
   * This action returns information about a job, including where the job is in the processing pipeline, the status of the results, and the signature value associated with the job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebGetStatus.html
   */
  public toGetStatus() {
    return this.to('GetStatus');
  }

  /**
   * This action returns the jobs associated with the requester.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebListJobs.html
   */
  public toListJobs() {
    return this.to('ListJobs');
  }

  /**
   * You use this action to change the parameters specified in the original manifest file by supplying a new manifest file.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSImportExport/latest/DG/WebUpdateJob.html
   */
  public toUpdateJob() {
    return this.to('UpdateJob');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelJob',
      'CreateJob',
      'UpdateJob'
    ],
    Read: [
      'GetShippingLabel',
      'GetStatus'
    ],
    List: [
      'ListJobs'
    ]
  };
}
