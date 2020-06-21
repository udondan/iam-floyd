import { Actions, PolicyStatement, ResourceTypes } from "./shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service cloudsearch
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudsearch.html
 */
export class Cloudsearch extends PolicyStatement {
  public servicePrefix = 'cloudsearch';
  public actions: Actions = {
    "AddTags": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_AddTags.html",
      "description": "Attaches resource tags to an Amazon CloudSearch domain.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "BuildSuggesters": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_BuildSuggesters.html",
      "description": "Indexes the search suggestions.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "CreateDomain": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_CreateDomain.html",
      "description": "Creates a new search domain.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DefineAnalysisScheme": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineAnalysisScheme.html",
      "description": "Configures an analysis scheme that can be applied to a text or text-array field to define language-specific text processing options.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DefineExpression": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineExpression.html",
      "description": "Configures an Expression for the search domain.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DefineIndexField": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineIndexField.html",
      "description": "Configures an IndexField for the search domain.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DefineSuggester": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineSuggester.html",
      "description": "Configures a suggester for a domain.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DeleteAnalysisScheme": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteAnalysisScheme.html",
      "description": "Deletes an analysis scheme.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DeleteDomain": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteDomain.html",
      "description": "Permanently deletes a search domain and all of its data.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DeleteExpression": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteExpression.html",
      "description": "Removes an Expression from the search domain.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DeleteIndexField": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteIndexField.html",
      "description": "Removes an IndexField from the search domain.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DeleteSuggester": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteSuggester.html",
      "description": "Deletes a suggester.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DescribeAnalysisSchemes": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeAnalysisSchemes.html",
      "description": "Gets the analysis schemes configured for a domain.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DescribeAvailabilityOptions": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeAvailabilityOptions.html",
      "description": "Gets the availability options configured for a domain.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DescribeDomainEndpointOptions": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeDomainEndpointOptions.html",
      "description": "Gets the domain endpoint options configured for a domain.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DescribeDomains": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeDomains.html",
      "description": "Gets information about the search domains owned by this account.",
      "accessLevel": "List",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DescribeExpressions": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeExpressions.html",
      "description": "Gets the expressions configured for the search domain.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DescribeIndexFields": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeIndexFields.html",
      "description": "Gets information about the index fields configured for the search domain.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DescribeScalingParameters": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeScalingParameters.html",
      "description": "Gets the scaling parameters configured for a domain.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DescribeServiceAccessPolicies": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeServiceAccessPolicies.html",
      "description": "Gets information about the access policies that control access to the domain's document and search endpoints.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "DescribeSuggesters": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeSuggesters.html",
      "description": "Gets the suggesters configured for a domain.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "IndexDocuments": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_IndexDocuments.html",
      "description": "Tells the search domain to start indexing its documents using the latest indexing options.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "ListDomainNames": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_ListDomainNames.html",
      "description": "Lists all search domains owned by an account.",
      "accessLevel": "List",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "ListTags": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_ListTags.html",
      "description": "Displays all of the resource tags for an Amazon CloudSearch domain.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "RemoveTags": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_RemoveTags.html",
      "description": "Removes the specified resource tags from an Amazon ES domain.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "UpdateAvailabilityOptions": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateAvailabilityOptions.html",
      "description": "Configures the availability options for a domain.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "UpdateDomainEndpointOptions": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateDomainEndpointOptions.html",
      "description": "Configures the domain endpoint options for a domain.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "UpdateScalingParameters": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateScalingParameters.html",
      "description": "Configures scaling parameters for a domain.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "UpdateServiceAccessPolicies": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateServiceAccessPolicies.html",
      "description": "Configures the access rules that control access to the domain's document and search endpoints.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "domain": {
          "required": true
        }
      }
    },
    "document": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html#cloudsearch-actions",
      "description": "Allows access to the document service operations.",
      "accessLevel": "Write",
      "resourceTypes": {
        "domain": {
          "required": false
        }
      }
    },
    "search": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html#cloudsearch-actions",
      "description": "Allows access to the search operations.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": false
        }
      }
    },
    "suggest": {
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html#cloudsearch-actions",
      "description": "Allows access to the suggest operations.",
      "accessLevel": "Read",
      "resourceTypes": {
        "domain": {
          "required": false
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "domain": {
      "name": "domain",
      "url": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html",
      "arn": "arn:${Partition}:cloudsearch:${Region}:${Account}:domain/${DomainName}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service cloudsearch
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudsearch.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Attaches resource tags to an Amazon CloudSearch domain.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_AddTags.html
   */
  public addTags() {
    this.add('cloudsearch:AddTags');
    return this;
  }

  /**
   * Indexes the search suggestions.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_BuildSuggesters.html
   */
  public buildSuggesters() {
    this.add('cloudsearch:BuildSuggesters');
    return this;
  }

  /**
   * Creates a new search domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_CreateDomain.html
   */
  public createDomain() {
    this.add('cloudsearch:CreateDomain');
    return this;
  }

  /**
   * Configures an analysis scheme that can be applied to a text or text-array field to define language-specific text processing options.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineAnalysisScheme.html
   */
  public defineAnalysisScheme() {
    this.add('cloudsearch:DefineAnalysisScheme');
    return this;
  }

  /**
   * Configures an Expression for the search domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineExpression.html
   */
  public defineExpression() {
    this.add('cloudsearch:DefineExpression');
    return this;
  }

  /**
   * Configures an IndexField for the search domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineIndexField.html
   */
  public defineIndexField() {
    this.add('cloudsearch:DefineIndexField');
    return this;
  }

  /**
   * Configures a suggester for a domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DefineSuggester.html
   */
  public defineSuggester() {
    this.add('cloudsearch:DefineSuggester');
    return this;
  }

  /**
   * Deletes an analysis scheme.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteAnalysisScheme.html
   */
  public deleteAnalysisScheme() {
    this.add('cloudsearch:DeleteAnalysisScheme');
    return this;
  }

  /**
   * Permanently deletes a search domain and all of its data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteDomain.html
   */
  public deleteDomain() {
    this.add('cloudsearch:DeleteDomain');
    return this;
  }

  /**
   * Removes an Expression from the search domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteExpression.html
   */
  public deleteExpression() {
    this.add('cloudsearch:DeleteExpression');
    return this;
  }

  /**
   * Removes an IndexField from the search domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteIndexField.html
   */
  public deleteIndexField() {
    this.add('cloudsearch:DeleteIndexField');
    return this;
  }

  /**
   * Deletes a suggester.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DeleteSuggester.html
   */
  public deleteSuggester() {
    this.add('cloudsearch:DeleteSuggester');
    return this;
  }

  /**
   * Gets the analysis schemes configured for a domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeAnalysisSchemes.html
   */
  public describeAnalysisSchemes() {
    this.add('cloudsearch:DescribeAnalysisSchemes');
    return this;
  }

  /**
   * Gets the availability options configured for a domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeAvailabilityOptions.html
   */
  public describeAvailabilityOptions() {
    this.add('cloudsearch:DescribeAvailabilityOptions');
    return this;
  }

  /**
   * Gets the domain endpoint options configured for a domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeDomainEndpointOptions.html
   */
  public describeDomainEndpointOptions() {
    this.add('cloudsearch:DescribeDomainEndpointOptions');
    return this;
  }

  /**
   * Gets information about the search domains owned by this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeDomains.html
   */
  public describeDomains() {
    this.add('cloudsearch:DescribeDomains');
    return this;
  }

  /**
   * Gets the expressions configured for the search domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeExpressions.html
   */
  public describeExpressions() {
    this.add('cloudsearch:DescribeExpressions');
    return this;
  }

  /**
   * Gets information about the index fields configured for the search domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeIndexFields.html
   */
  public describeIndexFields() {
    this.add('cloudsearch:DescribeIndexFields');
    return this;
  }

  /**
   * Gets the scaling parameters configured for a domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeScalingParameters.html
   */
  public describeScalingParameters() {
    this.add('cloudsearch:DescribeScalingParameters');
    return this;
  }

  /**
   * Gets information about the access policies that control access to the domain's document and search endpoints.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeServiceAccessPolicies.html
   */
  public describeServiceAccessPolicies() {
    this.add('cloudsearch:DescribeServiceAccessPolicies');
    return this;
  }

  /**
   * Gets the suggesters configured for a domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_DescribeSuggesters.html
   */
  public describeSuggesters() {
    this.add('cloudsearch:DescribeSuggesters');
    return this;
  }

  /**
   * Tells the search domain to start indexing its documents using the latest indexing options.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_IndexDocuments.html
   */
  public indexDocuments() {
    this.add('cloudsearch:IndexDocuments');
    return this;
  }

  /**
   * Lists all search domains owned by an account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_ListDomainNames.html
   */
  public listDomainNames() {
    this.add('cloudsearch:ListDomainNames');
    return this;
  }

  /**
   * Displays all of the resource tags for an Amazon CloudSearch domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_ListTags.html
   */
  public listTags() {
    this.add('cloudsearch:ListTags');
    return this;
  }

  /**
   * Removes the specified resource tags from an Amazon ES domain.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_RemoveTags.html
   */
  public removeTags() {
    this.add('cloudsearch:RemoveTags');
    return this;
  }

  /**
   * Configures the availability options for a domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateAvailabilityOptions.html
   */
  public updateAvailabilityOptions() {
    this.add('cloudsearch:UpdateAvailabilityOptions');
    return this;
  }

  /**
   * Configures the domain endpoint options for a domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateDomainEndpointOptions.html
   */
  public updateDomainEndpointOptions() {
    this.add('cloudsearch:UpdateDomainEndpointOptions');
    return this;
  }

  /**
   * Configures scaling parameters for a domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateScalingParameters.html
   */
  public updateScalingParameters() {
    this.add('cloudsearch:UpdateScalingParameters');
    return this;
  }

  /**
   * Configures the access rules that control access to the domain's document and search endpoints.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/API_UpdateServiceAccessPolicies.html
   */
  public updateServiceAccessPolicies() {
    this.add('cloudsearch:UpdateServiceAccessPolicies');
    return this;
  }

  /**
   * Allows access to the document service operations.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html#cloudsearch-actions
   */
  public document() {
    this.add('cloudsearch:document');
    return this;
  }

  /**
   * Allows access to the search operations.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html#cloudsearch-actions
   */
  public search() {
    this.add('cloudsearch:search');
    return this;
  }

  /**
   * Allows access to the suggest operations.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html#cloudsearch-actions
   */
  public suggest() {
    this.add('cloudsearch:suggest');
    return this;
  }

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
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
