import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [translate](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontranslate.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Translate extends PolicyStatement {
  public servicePrefix = 'translate';

  /**
   * Statement provider for service [translate](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazontranslate.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a Parallel Data
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/translate/latest/APIReference/API_CreateParallelData.html
   */
  public toCreateParallelData() {
    return this.to('CreateParallelData');
  }

  /**
   * Grants permission to delete a Parallel Data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/translate/latest/APIReference/API_DeleteParallelData.html
   */
  public toDeleteParallelData() {
    return this.to('DeleteParallelData');
  }

  /**
   * Grants permission to delete a terminology
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/translate/latest/APIReference/API_DeleteTerminology.html
   */
  public toDeleteTerminology() {
    return this.to('DeleteTerminology');
  }

  /**
   * Grants permission to get the properties associated with an asynchronous batch translation job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/translate/latest/APIReference/API_DescribeTextTranslationJob.html
   */
  public toDescribeTextTranslationJob() {
    return this.to('DescribeTextTranslationJob');
  }

  /**
   * Grants permission to get a Parallel Data
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/translate/latest/APIReference/API_GetParallelData.html
   */
  public toGetParallelData() {
    return this.to('GetParallelData');
  }

  /**
   * Grants permission to retrieve a terminology
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/translate/latest/APIReference/API_GetTerminology.html
   */
  public toGetTerminology() {
    return this.to('GetTerminology');
  }

  /**
   * Grants permission to create or update a terminology, depending on whether or not one already exists for the given terminology name
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/translate/latest/APIReference/API_ImportTerminology.html
   */
  public toImportTerminology() {
    return this.to('ImportTerminology');
  }

  /**
   * Grants permission to list supported languages
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/translate/latest/APIReference/API_ListLanguages.html
   */
  public toListLanguages() {
    return this.to('ListLanguages');
  }

  /**
   * Grants permission to list Parallel Data associated with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/translate/latest/APIReference/API_ListParallelData.html
   */
  public toListParallelData() {
    return this.to('ListParallelData');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/translate/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list terminologies associated with your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/translate/latest/APIReference/API_ListTerminologies.html
   */
  public toListTerminologies() {
    return this.to('ListTerminologies');
  }

  /**
   * Grants permission to list batch translation jobs that you have submitted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/translate/latest/APIReference/API_ListTextTranslationJobs.html
   */
  public toListTextTranslationJobs() {
    return this.to('ListTextTranslationJobs');
  }

  /**
   * Grants permission to start an asynchronous batch translation job. Batch translation jobs can be used to translate large volumes of text across multiple documents at once
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/translate/latest/APIReference/API_StartTextTranslationJob.html
   */
  public toStartTextTranslationJob() {
    return this.to('StartTextTranslationJob');
  }

  /**
   * Grants permission to stop an asynchronous batch translation job that is in progress
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/translate/latest/APIReference/API_StopTextTranslationJob.html
   */
  public toStopTextTranslationJob() {
    return this.to('StopTextTranslationJob');
  }

  /**
   * Grants permission to tag a resource with given key value pairs
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/translate/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to translate a document from a source language to a target language
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateDocument.html
   */
  public toTranslateDocument() {
    return this.to('TranslateDocument');
  }

  /**
   * Grants permission to translate text from a source language to a target language
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateText.html
   */
  public toTranslateText() {
    return this.to('TranslateText');
  }

  /**
   * Grants permission to untag a resource with given key
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/translate/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an existing Parallel Data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/translate/latest/APIReference/API_UpdateParallelData.html
   */
  public toUpdateParallelData() {
    return this.to('UpdateParallelData');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateParallelData',
      'DeleteParallelData',
      'DeleteTerminology',
      'ImportTerminology',
      'StartTextTranslationJob',
      'StopTextTranslationJob',
      'UpdateParallelData'
    ],
    Read: [
      'DescribeTextTranslationJob',
      'GetParallelData',
      'GetTerminology',
      'ListTagsForResource',
      'TranslateDocument',
      'TranslateText'
    ],
    List: [
      'ListLanguages',
      'ListParallelData',
      'ListTerminologies',
      'ListTextTranslationJobs'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type terminology to the statement
   *
   * https://docs.aws.amazon.com/translate/latest/dg/how-custom-terminology.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTerminology(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Translate.defaultPartition }:translate:${ region || '*' }:${ account || '*' }:terminology/${ resourceName }`);
  }

  /**
   * Adds a resource of type parallel-data to the statement
   *
   * https://docs.aws.amazon.com/translate/latest/dg/customizing-translations-parallel-data.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onParallelData(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Translate.defaultPartition }:translate:${ region || '*' }:${ account || '*' }:parallel-data/${ resourceName }`);
  }

  /**
   * Filters access by requiring tag values present in a resource creation request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * Applies to actions:
   * - .toCreateParallelData()
   * - .toImportTerminology()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by requiring tag value associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * Applies to resource types:
   * - terminology
   * - parallel-data
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by requiring the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * Applies to actions:
   * - .toCreateParallelData()
   * - .toImportTerminology()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
