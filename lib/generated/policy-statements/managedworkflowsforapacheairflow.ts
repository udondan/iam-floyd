import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [airflow](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedworkflowsforapacheairflow.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Airflow extends PolicyStatement {
  public servicePrefix = 'airflow';

  /**
   * Statement provider for service [airflow](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedworkflowsforapacheairflow.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a short-lived token that allows a user to invoke Airflow CLI via an endpoint on the Apache Airflow Webserver
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mwaa/latest/API/API_CreateCliToken.html
   */
  public toCreateCliToken() {
    return this.to('CreateCliToken');
  }

  /**
   * Grants permission to create an Amazon MWAA environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mwaa/latest/API/API_CreateEnvironment.html
   */
  public toCreateEnvironment() {
    return this.to('CreateEnvironment');
  }

  /**
   * Grants permission to create a short-lived token that allows a user to log into Apache Airflow web UI
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mwaa/latest/API/API_CreateWebLoginToken.html
   */
  public toCreateWebLoginToken() {
    return this.to('CreateWebLoginToken');
  }

  /**
   * Grants permission to delete an Amazon MWAA environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/mwaa/latest/API/API_DeleteEnvironment.html
   */
  public toDeleteEnvironment() {
    return this.to('DeleteEnvironment');
  }

  /**
   * Grants permission to view details about an Amazon MWAA environment
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/mwaa/latest/API/API_GetEnvironment.html
   */
  public toGetEnvironment() {
    return this.to('GetEnvironment');
  }

  /**
   * Grants permission to list the Amazon MWAA environments in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mwaa/latest/API/API_ListEnvironments.html
   */
  public toListEnvironments() {
    return this.to('ListEnvironments');
  }

  /**
   * Grants permission to lists tag for an Amazon MWAA environment
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/mwaa/latest/API/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to publish metrics for an Amazon MWAA environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mwaa/latest/API/API_PublishMetrics.html
   */
  public toPublishMetrics() {
    return this.to('PublishMetrics');
  }

  /**
   * Grants permission to tag an Amazon MWAA environment
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/mwaa/latest/API/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag an Amazon MWAA environment
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/mwaa/latest/API/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to modify an Amazon MWAA environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/mwaa/latest/API/API_UpdateEnvironment.html
   */
  public toUpdateEnvironment() {
    return this.to('UpdateEnvironment');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateCliToken',
      'CreateEnvironment',
      'CreateWebLoginToken',
      'DeleteEnvironment',
      'PublishMetrics',
      'UpdateEnvironment'
    ],
    Read: [
      'GetEnvironment',
      'ListTagsForResource'
    ],
    List: [
      'ListEnvironments'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/mwaa/latest/userguide/using-mwaa.html
   *
   * @param environmentName - Identifier for the environmentName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEnvironment(environmentName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:airflow:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:environment/${ environmentName }`);
  }

  /**
   * Adds a resource of type rbac-role to the statement
   *
   * https://docs.aws.amazon.com/mwaa/latest/userguide/access-policies.html
   *
   * @param environmentName - Identifier for the environmentName.
   * @param roleName - Identifier for the roleName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onRbacRole(environmentName: string, roleName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:airflow:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:role/${ environmentName }/${ roleName }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateEnvironment()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreateEnvironment()
   * - .toDeleteEnvironment()
   * - .toGetEnvironment()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateEnvironment()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateEnvironment()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
