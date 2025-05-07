import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [verifiedpermissions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonverifiedpermissions.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Verifiedpermissions extends PolicyStatement {
  public servicePrefix = 'verifiedpermissions';

  /**
   * Statement provider for service [verifiedpermissions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonverifiedpermissions.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a reference to an external identity provider (IdP) that is compatible with OpenID Connect (OIDC) authentication protocol, such as Amazon Cognito
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreateIdentitySource.html
   */
  public toCreateIdentitySource() {
    return this.to('CreateIdentitySource');
  }

  /**
   * Grants permission to create a Cedar policy and save it in the specified policy store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html
   */
  public toCreatePolicy() {
    return this.to('CreatePolicy');
  }

  /**
   * Grants permission to create a Cedar policy and save it in the specified policy store
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicyStore.html
   */
  public toCreatePolicyStore() {
    return this.to('CreatePolicyStore');
  }

  /**
   * Grants permission to create a policy template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicyTemplate.html
   */
  public toCreatePolicyTemplate() {
    return this.to('CreatePolicyTemplate');
  }

  /**
   * Grants permission to delete an identity source that references an identity provider (IdP) such as Amazon Cognito
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_DeleteIdentitySource.html
   */
  public toDeleteIdentitySource() {
    return this.to('DeleteIdentitySource');
  }

  /**
   * Grants permission to delete the specified policy from the policy store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_DeletePolicy.html
   */
  public toDeletePolicy() {
    return this.to('DeletePolicy');
  }

  /**
   * Grants permission to delete the specified policy store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_DeletePolicyStore.html
   */
  public toDeletePolicyStore() {
    return this.to('DeletePolicyStore');
  }

  /**
   * Grants permission to delete the specified policy template from the policy store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_DeletePolicyTemplate.html
   */
  public toDeletePolicyTemplate() {
    return this.to('DeletePolicyTemplate');
  }

  /**
   * Grants permission to retrieve the details about the specified identity source
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetIdentitySource.html
   */
  public toGetIdentitySource() {
    return this.to('GetIdentitySource');
  }

  /**
   * Grants permission to retrieve information about the specified policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetPolicy.html
   */
  public toGetPolicy() {
    return this.to('GetPolicy');
  }

  /**
   * Grants permission to retrieve details about a policy store
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - verifiedpermissions:ListTagsForResource
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetPolicyStore.html
   */
  public toGetPolicyStore() {
    return this.to('GetPolicyStore');
  }

  /**
   * Grants permission to retrieve the details for the specified policy template in the specified policy store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetPolicyTemplate.html
   */
  public toGetPolicyTemplate() {
    return this.to('GetPolicyTemplate');
  }

  /**
   * Grants permission to retrieve the details for the specified schema in the specified policy store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_GetSchema.html
   */
  public toGetSchema() {
    return this.to('GetSchema');
  }

  /**
   * Grants permission to make an authorization decision about a service request described in the parameters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorized.html
   */
  public toIsAuthorized() {
    return this.to('IsAuthorized');
  }

  /**
   * Grants permission to make an authorization decision about a service request described in the parameters. The principal in this request comes from an external identity source
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html
   */
  public toIsAuthorizedWithToken() {
    return this.to('IsAuthorizedWithToken');
  }

  /**
   * Grants permission to return a paginated list of all of the identity sources defined in the specified policy store
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListIdentitySources.html
   */
  public toListIdentitySources() {
    return this.to('ListIdentitySources');
  }

  /**
   * Grants permission to return a paginated list of all policies stored in the specified policy store
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicies.html
   */
  public toListPolicies() {
    return this.to('ListPolicies');
  }

  /**
   * Grants permission to return a paginated list of all policy stores in the calling Amazon Web Services account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyStores.html
   */
  public toListPolicyStores() {
    return this.to('ListPolicyStores');
  }

  /**
   * Grants permission to return a paginated list of all policy templates in the specified policy store
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListPolicyTemplates.html
   */
  public toListPolicyTemplates() {
    return this.to('ListPolicyTemplates');
  }

  /**
   * Grants permission to view a list of resource tags for the specified policy store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create or update the policy schema in the specified policy store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_PutSchema.html
   */
  public toPutSchema() {
    return this.to('PutSchema');
  }

  /**
   * Grants permission to add tags to the specified policy store
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from the specified policy store
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the specified identity source to use a new identity provider (IdP) source, or to change the mapping of identities from the IdP to a different principal entity type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdateIdentitySource.html
   */
  public toUpdateIdentitySource() {
    return this.to('UpdateIdentitySource');
  }

  /**
   * Grants permission to modify the specified Cedar static policy in the specified policy store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicy.html
   */
  public toUpdatePolicy() {
    return this.to('UpdatePolicy');
  }

  /**
   * Grants permission to modify the validation setting for a policy store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyStore.html
   */
  public toUpdatePolicyStore() {
    return this.to('UpdatePolicyStore');
  }

  /**
   * Grants permission to update the specified policy template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyTemplate.html
   */
  public toUpdatePolicyTemplate() {
    return this.to('UpdatePolicyTemplate');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateIdentitySource',
      'CreatePolicy',
      'CreatePolicyStore',
      'CreatePolicyTemplate',
      'DeleteIdentitySource',
      'DeletePolicy',
      'DeletePolicyStore',
      'DeletePolicyTemplate',
      'PutSchema',
      'UpdateIdentitySource',
      'UpdatePolicy',
      'UpdatePolicyStore',
      'UpdatePolicyTemplate'
    ],
    Read: [
      'GetIdentitySource',
      'GetPolicy',
      'GetPolicyStore',
      'GetPolicyTemplate',
      'GetSchema',
      'IsAuthorized',
      'IsAuthorizedWithToken',
      'ListTagsForResource'
    ],
    List: [
      'ListIdentitySources',
      'ListPolicies',
      'ListPolicyStores',
      'ListPolicyTemplates'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type policy-store to the statement
   *
   * https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/policy-stores.html
   *
   * @param policyStoreId - Identifier for the policyStoreId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPolicyStore(policyStoreId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:verifiedpermissions::${ account ?? this.defaultAccount }:policy-store/${ policyStoreId }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreatePolicyStore()
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
   * Filters access by a tag key and value pair of a resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreatePolicyStore()
   *
   * Applies to resource types:
   * - policy-store
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a list of tag keys that are allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreatePolicyStore()
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
