import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Attaches resource tags to an Amazon CloudSearch domain.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_AddTags.html
   */
  public toAddTags() {
    this.to('AddTags');
    return this;
  }

  /**
   * Indexes the search suggestions.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_BuildSuggesters.html
   */
  public toBuildSuggesters() {
    this.to('BuildSuggesters');
    return this;
  }

  /**
   * Creates a new search domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_CreateDomain.html
   */
  public toCreateDomain() {
    this.to('CreateDomain');
    return this;
  }

  /**
   * Configures an analysis scheme that can be applied to a text or text-array field to define language-specific text processing options.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineAnalysisScheme.html
   */
  public toDefineAnalysisScheme() {
    this.to('DefineAnalysisScheme');
    return this;
  }

  /**
   * Configures an Expression for the search domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineExpression.html
   */
  public toDefineExpression() {
    this.to('DefineExpression');
    return this;
  }

  /**
   * Configures an IndexField for the search domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineIndexField.html
   */
  public toDefineIndexField() {
    this.to('DefineIndexField');
    return this;
  }

  /**
   * Configures a suggester for a domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineSuggester.html
   */
  public toDefineSuggester() {
    this.to('DefineSuggester');
    return this;
  }

  /**
   * Deletes an analysis scheme.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteAnalysisScheme.html
   */
  public toDeleteAnalysisScheme() {
    this.to('DeleteAnalysisScheme');
    return this;
  }

  /**
   * Permanently deletes a search domain and all of its data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    this.to('DeleteDomain');
    return this;
  }

  /**
   * Removes an Expression from the search domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteExpression.html
   */
  public toDeleteExpression() {
    this.to('DeleteExpression');
    return this;
  }

  /**
   * Removes an IndexField from the search domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteIndexField.html
   */
  public toDeleteIndexField() {
    this.to('DeleteIndexField');
    return this;
  }

  /**
   * Deletes a suggester.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteSuggester.html
   */
  public toDeleteSuggester() {
    this.to('DeleteSuggester');
    return this;
  }

  /**
   * Gets the analysis schemes configured for a domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeAnalysisSchemes.html
   */
  public toDescribeAnalysisSchemes() {
    this.to('DescribeAnalysisSchemes');
    return this;
  }

  /**
   * Gets the availability options configured for a domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeAvailabilityOptions.html
   */
  public toDescribeAvailabilityOptions() {
    this.to('DescribeAvailabilityOptions');
    return this;
  }

  /**
   * Gets the domain endpoint options configured for a domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeDomainEndpointOptions.html
   */
  public toDescribeDomainEndpointOptions() {
    this.to('DescribeDomainEndpointOptions');
    return this;
  }

  /**
   * Gets information about the search domains owned by this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeDomains.html
   */
  public toDescribeDomains() {
    this.to('DescribeDomains');
    return this;
  }

  /**
   * Gets the expressions configured for the search domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeExpressions.html
   */
  public toDescribeExpressions() {
    this.to('DescribeExpressions');
    return this;
  }

  /**
   * Gets information about the index fields configured for the search domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeIndexFields.html
   */
  public toDescribeIndexFields() {
    this.to('DescribeIndexFields');
    return this;
  }

  /**
   * Gets the scaling parameters configured for a domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeScalingParameters.html
   */
  public toDescribeScalingParameters() {
    this.to('DescribeScalingParameters');
    return this;
  }

  /**
   * Gets information about the access policies that control access to the domain's document and search endpoints.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeServiceAccessPolicies.html
   */
  public toDescribeServiceAccessPolicies() {
    this.to('DescribeServiceAccessPolicies');
    return this;
  }

  /**
   * Gets the suggesters configured for a domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeSuggesters.html
   */
  public toDescribeSuggesters() {
    this.to('DescribeSuggesters');
    return this;
  }

  /**
   * Tells the search domain to start indexing its documents using the latest indexing options.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_IndexDocuments.html
   */
  public toIndexDocuments() {
    this.to('IndexDocuments');
    return this;
  }

  /**
   * Lists all search domains owned by an account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_ListDomainNames.html
   */
  public toListDomainNames() {
    this.to('ListDomainNames');
    return this;
  }

  /**
   * Displays all of the resource tags for an Amazon CloudSearch domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_ListTags.html
   */
  public toListTags() {
    this.to('ListTags');
    return this;
  }

  /**
   * Removes the specified resource tags from an Amazon ES domain.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_RemoveTags.html
   */
  public toRemoveTags() {
    this.to('RemoveTags');
    return this;
  }

  /**
   * Configures the availability options for a domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateAvailabilityOptions.html
   */
  public toUpdateAvailabilityOptions() {
    this.to('UpdateAvailabilityOptions');
    return this;
  }

  /**
   * Configures the domain endpoint options for a domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateDomainEndpointOptions.html
   */
  public toUpdateDomainEndpointOptions() {
    this.to('UpdateDomainEndpointOptions');
    return this;
  }

  /**
   * Configures scaling parameters for a domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateScalingParameters.html
   */
  public toUpdateScalingParameters() {
    this.to('UpdateScalingParameters');
    return this;
  }

  /**
   * Configures the access rules that control access to the domain's document and search endpoints.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateServiceAccessPolicies.html
   */
  public toUpdateServiceAccessPolicies() {
    this.to('UpdateServiceAccessPolicies');
    return this;
  }

  /**
   * Allows access to the document service operations.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html#cloudsearch-actions
   */
  public todocument() {
    this.to('document');
    return this;
  }

  /**
   * Allows access to the search operations.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html#cloudsearch-actions
   */
  public tosearch() {
    this.to('search');
    return this;
  }

  /**
   * Allows access to the suggest operations.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html#cloudsearch-actions
   */
  public tosuggest() {
    this.to('suggest');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Tagging": [
      "AddTags",
      "RemoveTags"
    ],
    "Write": [
      "BuildSuggesters",
      "CreateDomain",
      "DefineAnalysisScheme",
      "DefineExpression",
      "DefineIndexField",
      "DefineSuggester",
      "DeleteAnalysisScheme",
      "DeleteDomain",
      "DeleteExpression",
      "DeleteIndexField",
      "DeleteSuggester",
      "IndexDocuments",
      "UpdateAvailabilityOptions",
      "UpdateDomainEndpointOptions",
      "UpdateScalingParameters",
      "document"
    ],
    "Read": [
      "DescribeAnalysisSchemes",
      "DescribeAvailabilityOptions",
      "DescribeDomainEndpointOptions",
      "DescribeExpressions",
      "DescribeIndexFields",
      "DescribeScalingParameters",
      "DescribeServiceAccessPolicies",
      "DescribeSuggesters",
      "ListTags",
      "search",
      "suggest"
    ],
    "List": [
      "DescribeDomains",
      "ListDomainNames"
    ],
    "Permissions management": [
      "UpdateServiceAccessPolicies"
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDomain(domainName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudsearch:${Region}:${Account}:domain/${DomainName}';
    arn = arn.replace('${DomainName}', domainName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
