import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [cloudsearch](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudsearch.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cloudsearch extends PolicyStatement {
  public servicePrefix = 'cloudsearch';

  /**
   * Statement provider for service [cloudsearch](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudsearch.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Attaches resource tags to an Amazon CloudSearch domain
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_AddTags.html
   */
  public toAddTags() {
    return this.to('AddTags');
  }

  /**
   * Indexes the search suggestions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_BuildSuggesters.html
   */
  public toBuildSuggesters() {
    return this.to('BuildSuggesters');
  }

  /**
   * Creates a new search domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_CreateDomain.html
   */
  public toCreateDomain() {
    return this.to('CreateDomain');
  }

  /**
   * Configures an analysis scheme that can be applied to a text or text-array field to define language-specific text processing options
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineAnalysisScheme.html
   */
  public toDefineAnalysisScheme() {
    return this.to('DefineAnalysisScheme');
  }

  /**
   * Configures an Expression for the search domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineExpression.html
   */
  public toDefineExpression() {
    return this.to('DefineExpression');
  }

  /**
   * Configures an IndexField for the search domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineIndexField.html
   */
  public toDefineIndexField() {
    return this.to('DefineIndexField');
  }

  /**
   * Configures a suggester for a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineSuggester.html
   */
  public toDefineSuggester() {
    return this.to('DefineSuggester');
  }

  /**
   * Deletes an analysis scheme
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteAnalysisScheme.html
   */
  public toDeleteAnalysisScheme() {
    return this.to('DeleteAnalysisScheme');
  }

  /**
   * Permanently deletes a search domain and all of its data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    return this.to('DeleteDomain');
  }

  /**
   * Removes an Expression from the search domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteExpression.html
   */
  public toDeleteExpression() {
    return this.to('DeleteExpression');
  }

  /**
   * Removes an IndexField from the search domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteIndexField.html
   */
  public toDeleteIndexField() {
    return this.to('DeleteIndexField');
  }

  /**
   * Deletes a suggester
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteSuggester.html
   */
  public toDeleteSuggester() {
    return this.to('DeleteSuggester');
  }

  /**
   * Gets the analysis schemes configured for a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeAnalysisSchemes.html
   */
  public toDescribeAnalysisSchemes() {
    return this.to('DescribeAnalysisSchemes');
  }

  /**
   * Gets the availability options configured for a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeAvailabilityOptions.html
   */
  public toDescribeAvailabilityOptions() {
    return this.to('DescribeAvailabilityOptions');
  }

  /**
   * Gets the domain endpoint options configured for a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeDomainEndpointOptions.html
   */
  public toDescribeDomainEndpointOptions() {
    return this.to('DescribeDomainEndpointOptions');
  }

  /**
   * Gets information about the search domains owned by this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeDomains.html
   */
  public toDescribeDomains() {
    return this.to('DescribeDomains');
  }

  /**
   * Gets the expressions configured for the search domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeExpressions.html
   */
  public toDescribeExpressions() {
    return this.to('DescribeExpressions');
  }

  /**
   * Gets information about the index fields configured for the search domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeIndexFields.html
   */
  public toDescribeIndexFields() {
    return this.to('DescribeIndexFields');
  }

  /**
   * Gets the scaling parameters configured for a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeScalingParameters.html
   */
  public toDescribeScalingParameters() {
    return this.to('DescribeScalingParameters');
  }

  /**
   * Gets information about the access policies that control access to the domain's document and search endpoints
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeServiceAccessPolicies.html
   */
  public toDescribeServiceAccessPolicies() {
    return this.to('DescribeServiceAccessPolicies');
  }

  /**
   * Gets the suggesters configured for a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeSuggesters.html
   */
  public toDescribeSuggesters() {
    return this.to('DescribeSuggesters');
  }

  /**
   * Tells the search domain to start indexing its documents using the latest indexing options
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_IndexDocuments.html
   */
  public toIndexDocuments() {
    return this.to('IndexDocuments');
  }

  /**
   * Lists all search domains owned by an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_ListDomainNames.html
   */
  public toListDomainNames() {
    return this.to('ListDomainNames');
  }

  /**
   * Displays all of the resource tags for an Amazon CloudSearch domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_ListTags.html
   */
  public toListTags() {
    return this.to('ListTags');
  }

  /**
   * Removes the specified resource tags from an Amazon ES domain
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_RemoveTags.html
   */
  public toRemoveTags() {
    return this.to('RemoveTags');
  }

  /**
   * Configures the availability options for a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateAvailabilityOptions.html
   */
  public toUpdateAvailabilityOptions() {
    return this.to('UpdateAvailabilityOptions');
  }

  /**
   * Configures the domain endpoint options for a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateDomainEndpointOptions.html
   */
  public toUpdateDomainEndpointOptions() {
    return this.to('UpdateDomainEndpointOptions');
  }

  /**
   * Configures scaling parameters for a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateScalingParameters.html
   */
  public toUpdateScalingParameters() {
    return this.to('UpdateScalingParameters');
  }

  /**
   * Configures the access rules that control access to the domain's document and search endpoints
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateServiceAccessPolicies.html
   */
  public toUpdateServiceAccessPolicies() {
    return this.to('UpdateServiceAccessPolicies');
  }

  /**
   * Allows access to the document service operations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html#cloudsearch-actions
   */
  public toDocument() {
    return this.to('document');
  }

  /**
   * Allows access to the search operations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html#cloudsearch-actions
   */
  public toSearch() {
    return this.to('search');
  }

  /**
   * Allows access to the suggest operations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html#cloudsearch-actions
   */
  public toSuggest() {
    return this.to('suggest');
  }

  protected accessLevelList: AccessLevelList = {
    Tagging: [
      'AddTags',
      'RemoveTags'
    ],
    Write: [
      'BuildSuggesters',
      'CreateDomain',
      'DefineAnalysisScheme',
      'DefineExpression',
      'DefineIndexField',
      'DefineSuggester',
      'DeleteAnalysisScheme',
      'DeleteDomain',
      'DeleteExpression',
      'DeleteIndexField',
      'DeleteSuggester',
      'IndexDocuments',
      'UpdateAvailabilityOptions',
      'UpdateDomainEndpointOptions',
      'UpdateScalingParameters',
      'document'
    ],
    Read: [
      'DescribeAnalysisSchemes',
      'DescribeAvailabilityOptions',
      'DescribeDomainEndpointOptions',
      'DescribeExpressions',
      'DescribeIndexFields',
      'DescribeScalingParameters',
      'DescribeServiceAccessPolicies',
      'DescribeSuggesters',
      'ListTags',
      'search',
      'suggest'
    ],
    List: [
      'DescribeDomains',
      'ListDomainNames'
    ],
    'Permissions management': [
      'UpdateServiceAccessPolicies'
    ]
  };

  /**
   * Adds a resource of type domain to the statement
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html
   *
   * @param domainName - Identifier for the domainName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDomain(domainName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Cloudsearch.defaultPartition }:cloudsearch:${ region || '*' }:${ account || '*' }:domain/${ domainName }`);
  }
}
