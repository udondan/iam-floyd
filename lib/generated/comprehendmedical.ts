import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [comprehendmedical](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehendmedical.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Comprehendmedical extends PolicyStatement {
  public servicePrefix = 'comprehendmedical';

  /**
   * Statement provider for service [comprehendmedical](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncomprehendmedical.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to describe the properties of a medical entity detection job that you have submitted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_DescribeEntitiesDetectionV2Job.html
   */
  public toDescribeEntitiesDetectionV2Job() {
    return this.to('DescribeEntitiesDetectionV2Job');
  }

  /**
   * Grants permission to describe the properties of an ICD-10-CM linking job that you have submitted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_DescribeICD10CMInferenceJob.html
   */
  public toDescribeICD10CMInferenceJob() {
    return this.to('DescribeICD10CMInferenceJob');
  }

  /**
   * Grants permission to describe the properties of a PHI entity detection job that you have submitted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_DescribePHIDetectionJob.html
   */
  public toDescribePHIDetectionJob() {
    return this.to('DescribePHIDetectionJob');
  }

  /**
   * Grants permission to describe the properties of an RxNorm linking job that you have submitted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_DescribeRxNormInferenceJob.html
   */
  public toDescribeRxNormInferenceJob() {
    return this.to('DescribeRxNormInferenceJob');
  }

  /**
   * Grants permission to detect the named medical entities, and their relationships and traits within the given text document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_DetectEntitiesV2.html
   */
  public toDetectEntitiesV2() {
    return this.to('DetectEntitiesV2');
  }

  /**
   * Grants permission to detect the protected health information (PHI) entities within the given text document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_DetectPHI.html
   */
  public toDetectPHI() {
    return this.to('DetectPHI');
  }

  /**
   * Grants permission to detect the medical condition entities within the given text document and link them to ICD-10-CM codes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_InferICD10CM.html
   */
  public toInferICD10CM() {
    return this.to('InferICD10CM');
  }

  /**
   * Grants permission to detect the medication entities within the given text document and link them to RxCUI concept identifiers from the National Library of Medicine RxNorm database
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_InferRxNorm.html
   */
  public toInferRxNorm() {
    return this.to('InferRxNorm');
  }

  /**
   * Grants permission to list the medical entity detection jobs that you have submitted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_ListEntitiesDetectionV2Jobs.html
   */
  public toListEntitiesDetectionV2Jobs() {
    return this.to('ListEntitiesDetectionV2Jobs');
  }

  /**
   * Grants permission to list the ICD-10-CM linking jobs that you have submitted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_ListICD10CMInferenceJobs.html
   */
  public toListICD10CMInferenceJobs() {
    return this.to('ListICD10CMInferenceJobs');
  }

  /**
   * Grants permission to list the PHI entity detection jobs that you have submitted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_ListPHIDetectionJobs.html
   */
  public toListPHIDetectionJobs() {
    return this.to('ListPHIDetectionJobs');
  }

  /**
   * Grants permission to list the RxNorm linking jobs that you have submitted
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_ListRxNormInferenceJobs.html
   */
  public toListRxNormInferenceJobs() {
    return this.to('ListRxNormInferenceJobs');
  }

  /**
   * Grants permission to start an asynchronous medical entity detection job for a collection of documents
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_StartEntitiesDetectionV2Job.html
   */
  public toStartEntitiesDetectionV2Job() {
    return this.to('StartEntitiesDetectionV2Job');
  }

  /**
   * Grants permission to start an asynchronous ICD-10-CM linking job for a collection of documents
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_StartICD10CMInferenceJob.html
   */
  public toStartICD10CMInferenceJob() {
    return this.to('StartICD10CMInferenceJob');
  }

  /**
   * Grants permission to start an asynchronous PHI entity detection job for a collection of documents
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_StartPHIDetectionJob.html
   */
  public toStartPHIDetectionJob() {
    return this.to('StartPHIDetectionJob');
  }

  /**
   * Grants permission to start an asynchronous RxNorm linking job for a collection of documents
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_StartRxNormInferenceJob.html
   */
  public toStartRxNormInferenceJob() {
    return this.to('StartRxNormInferenceJob');
  }

  /**
   * Grants permission to stop a medical entity detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_StopEntitiesDetectionV2Job.html
   */
  public toStopEntitiesDetectionV2Job() {
    return this.to('StopEntitiesDetectionV2Job');
  }

  /**
   * Grants permission to stop an ICD-10-CM linking job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_StopICD10CMInferenceJob.html
   */
  public toStopICD10CMInferenceJob() {
    return this.to('StopICD10CMInferenceJob');
  }

  /**
   * Grants permission to stop a PHI entity detection job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_StopPHIDetectionJob.html
   */
  public toStopPHIDetectionJob() {
    return this.to('StopPHIDetectionJob');
  }

  /**
   * Grants permission to stop an RxNorm linking job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_medical_StopRxNormInferenceJob.html
   */
  public toStopRxNormInferenceJob() {
    return this.to('StopRxNormInferenceJob');
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "DescribeEntitiesDetectionV2Job",
      "DescribeICD10CMInferenceJob",
      "DescribePHIDetectionJob",
      "DescribeRxNormInferenceJob",
      "DetectEntitiesV2",
      "DetectPHI",
      "InferICD10CM",
      "InferRxNorm",
      "ListEntitiesDetectionV2Jobs",
      "ListICD10CMInferenceJobs",
      "ListPHIDetectionJobs",
      "ListRxNormInferenceJobs"
    ],
    "Write": [
      "StartEntitiesDetectionV2Job",
      "StartICD10CMInferenceJob",
      "StartPHIDetectionJob",
      "StartRxNormInferenceJob",
      "StopEntitiesDetectionV2Job",
      "StopICD10CMInferenceJob",
      "StopPHIDetectionJob",
      "StopRxNormInferenceJob"
    ]
  };
}
