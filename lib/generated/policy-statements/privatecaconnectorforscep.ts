import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [pca-connector-scep](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsprivatecaconnectorforscep.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class PcaConnectorScep extends PolicyStatement {
  public servicePrefix = 'pca-connector-scep';

  /**
   * Statement provider for service [pca-connector-scep](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsprivatecaconnectorforscep.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a Challenge for a Connector
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pca-connector-scep/latest/APIReference/API_CreateChallenge.html
   */
  public toCreateChallenge() {
    return this.to('CreateChallenge');
  }

  /**
   * Grants permission to create a SCEP Connector in your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - acm-pca:DescribeCertificateAuthority
   * - acm-pca:GetCertificate
   * - acm-pca:GetCertificateAuthorityCertificate
   * - acm-pca:IssueCertificate
   *
   * https://docs.aws.amazon.com/pca-connector-scep/latest/APIReference/API_CreateConnector.html
   */
  public toCreateConnector() {
    return this.to('CreateConnector');
  }

  /**
   * Grants permission to delete a Challenge for a Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pca-connector-scep/latest/APIReference/API_DeleteChallenge.html
   */
  public toDeleteChallenge() {
    return this.to('DeleteChallenge');
  }

  /**
   * Grants permission to delete a SCEP Connector in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pca-connector-scep/latest/APIReference/API_DeleteConnector.html
   */
  public toDeleteConnector() {
    return this.to('DeleteConnector');
  }

  /**
   * Grants permission to get a Challenge for a Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pca-connector-scep/latest/APIReference/API_GetChallengeMetadata.html
   */
  public toGetChallengeMetadata() {
    return this.to('GetChallengeMetadata');
  }

  /**
   * Grants permission to get a Challenge password for a Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pca-connector-scep/latest/APIReference/API_GetChallengePassword.html
   */
  public toGetChallengePassword() {
    return this.to('GetChallengePassword');
  }

  /**
   * Grants permission to get a SCEP Connector in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pca-connector-scep/latest/APIReference/API_GetConnector.html
   */
  public toGetConnector() {
    return this.to('GetConnector');
  }

  /**
   * Grants permission to list Challenges for a Connector
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pca-connector-scep/latest/APIReference/API_ListChallengeMetadata.html
   */
  public toListChallengeMetadata() {
    return this.to('ListChallengeMetadata');
  }

  /**
   * Grants permission to list the SCEP Connectors in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pca-connector-scep/latest/APIReference/API_ListConnectors.html
   */
  public toListConnectors() {
    return this.to('ListConnectors');
  }

  /**
   * Grants permission to list the tags for a pca-connector-scep resource in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pca-connector-scep/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to tag a pca-connector-scep resource in your account
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pca-connector-scep/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a pca-connector-scep resource in your account
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pca-connector-scep/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateChallenge',
      'CreateConnector',
      'DeleteChallenge',
      'DeleteConnector'
    ],
    Read: [
      'GetChallengeMetadata',
      'GetChallengePassword',
      'GetConnector',
      'ListTagsForResource'
    ],
    List: [
      'ListChallengeMetadata',
      'ListConnectors'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Challenge to the statement
   *
   * https://docs.aws.amazon.com/pca-connector-scep/latest/APIReference/API_Challenge.html
   *
   * @param connectorId - Identifier for the connectorId.
   * @param challengeId - Identifier for the challengeId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChallenge(connectorId: string, challengeId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:pca-connector-scep:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:connector/${ connectorId }/challenge/${ challengeId }`);
  }

  /**
   * Adds a resource of type Connector to the statement
   *
   * https://docs.aws.amazon.com/pca-connector-scep/latest/APIReference/API_Connector.html
   *
   * @param connectorId - Identifier for the connectorId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConnector(connectorId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:pca-connector-scep:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:connector/${ connectorId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/privateca/latest/userguide/connector-for-scep.htmlreference_policies_iam-condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateChallenge()
   * - .toCreateConnector()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/privateca/latest/userguide/connector-for-scep.htmlreference_policies_iam-condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - Challenge
   * - Connector
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/privateca/latest/userguide/connector-for-scep.htmlreference_policies_iam-condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateChallenge()
   * - .toCreateConnector()
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
