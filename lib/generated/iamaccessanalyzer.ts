import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [access-analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_iamaccessanalyzer.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AccessAnalyzer extends PolicyStatement {
  public servicePrefix = 'access-analyzer';
  protected actionList: Actions = {
    "CreateAnalyzer": {
      "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateAnalyzer.html",
      "description": "Grants permission to create an analyzer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Analyzer": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateArchiveRule": {
      "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateArchiveRule.html",
      "description": "Grants permission to create an archive rule for the specified analyzer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Analyzer": {
          "required": true
        },
        "ArchiveRule": {
          "required": true
        }
      }
    },
    "DeleteAnalyzer": {
      "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_DeleteAnalyzer.html",
      "description": "Grants permission to delete the specified analyzer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Analyzer": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteArchiveRule": {
      "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_DeleteArchiveRule.html",
      "description": "Grants permission to delete archive rules for the specified analyzer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Analyzer": {
          "required": true
        },
        "ArchiveRule": {
          "required": true
        }
      }
    },
    "GetAnalyzedResource": {
      "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAnalyzedResource.html",
      "description": "Grants permission to retrieve information about an analyzed resource.",
      "accessLevel": "Read"
    },
    "GetAnalyzer": {
      "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAnalyzer.html",
      "description": "Grants permission to retrieve information about analyzers.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Analyzer": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "GetArchiveRule": {
      "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetArchiveRule.html",
      "description": "Grants permission to retrieve information about archive rules for the specified analyzer.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Analyzer": {
          "required": true
        },
        "ArchiveRule": {
          "required": true
        }
      }
    },
    "GetFinding": {
      "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetFinding.html",
      "description": "Grants permission to retrieve findings.",
      "accessLevel": "Read"
    },
    "ListAnalyzedResources": {
      "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzedResources.html",
      "description": "Grants permission to retrieve a list of resources that have been analyzed.",
      "accessLevel": "Read"
    },
    "ListAnalyzers": {
      "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzers.html",
      "description": "Grants permission to retrieves a list of analyzers.",
      "accessLevel": "List"
    },
    "ListArchiveRules": {
      "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListArchiveRules.html",
      "description": "Grants permission to retrieve a list of archive rules from an analyzer.",
      "accessLevel": "List",
      "resourceTypes": {
        "Analyzer": {
          "required": true
        }
      }
    },
    "ListFindings": {
      "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListFindings.html",
      "description": "Grants permission to retrieve a list of findings from an analyzer.",
      "accessLevel": "Read"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to retrieve a list of tags applied to a resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "Analyzer": {
          "required": false
        }
      }
    },
    "StartResourceScan": {
      "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_StartResourceScan.html",
      "description": "Grants permission to start a scan of the policies applied to a resource.",
      "accessLevel": "Write"
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to add a tag to a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "Analyzer": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to remove a tag from a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "Analyzer": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateArchiveRule": {
      "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateArchiveRule.html",
      "description": "Grants permission to modify an archive rule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Analyzer": {
          "required": true
        },
        "ArchiveRule": {
          "required": true
        }
      }
    },
    "UpdateFindings": {
      "url": "https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateFindings.html",
      "description": "Grants permission to modify findings.",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {
    "Analyzer": {
      "name": "Analyzer",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources",
      "arn": "arn:${Partition}:access-analyzer:${Region}:${Account}:analyzer/${AnalyzerName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "ArchiveRule": {
      "name": "ArchiveRule",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources",
      "arn": "arn:${Partition}:access-analyzer:${Region}:${Account}:analyzer/${AnalyzerName}/archive-rule/${RuleName}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [access-analyzer](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_iamaccessanalyzer.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an analyzer.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateAnalyzer.html
   */
  public toCreateAnalyzer() {
    this.add('access-analyzer:CreateAnalyzer');
    return this;
  }

  /**
   * Grants permission to create an archive rule for the specified analyzer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateArchiveRule.html
   */
  public toCreateArchiveRule() {
    this.add('access-analyzer:CreateArchiveRule');
    return this;
  }

  /**
   * Grants permission to delete the specified analyzer.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_DeleteAnalyzer.html
   */
  public toDeleteAnalyzer() {
    this.add('access-analyzer:DeleteAnalyzer');
    return this;
  }

  /**
   * Grants permission to delete archive rules for the specified analyzer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_DeleteArchiveRule.html
   */
  public toDeleteArchiveRule() {
    this.add('access-analyzer:DeleteArchiveRule');
    return this;
  }

  /**
   * Grants permission to retrieve information about an analyzed resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAnalyzedResource.html
   */
  public toGetAnalyzedResource() {
    this.add('access-analyzer:GetAnalyzedResource');
    return this;
  }

  /**
   * Grants permission to retrieve information about analyzers.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAnalyzer.html
   */
  public toGetAnalyzer() {
    this.add('access-analyzer:GetAnalyzer');
    return this;
  }

  /**
   * Grants permission to retrieve information about archive rules for the specified analyzer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetArchiveRule.html
   */
  public toGetArchiveRule() {
    this.add('access-analyzer:GetArchiveRule');
    return this;
  }

  /**
   * Grants permission to retrieve findings.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetFinding.html
   */
  public toGetFinding() {
    this.add('access-analyzer:GetFinding');
    return this;
  }

  /**
   * Grants permission to retrieve a list of resources that have been analyzed.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzedResources.html
   */
  public toListAnalyzedResources() {
    this.add('access-analyzer:ListAnalyzedResources');
    return this;
  }

  /**
   * Grants permission to retrieves a list of analyzers.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzers.html
   */
  public toListAnalyzers() {
    this.add('access-analyzer:ListAnalyzers');
    return this;
  }

  /**
   * Grants permission to retrieve a list of archive rules from an analyzer.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListArchiveRules.html
   */
  public toListArchiveRules() {
    this.add('access-analyzer:ListArchiveRules');
    return this;
  }

  /**
   * Grants permission to retrieve a list of findings from an analyzer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListFindings.html
   */
  public toListFindings() {
    this.add('access-analyzer:ListFindings');
    return this;
  }

  /**
   * Grants permission to retrieve a list of tags applied to a resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('access-analyzer:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to start a scan of the policies applied to a resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_StartResourceScan.html
   */
  public toStartResourceScan() {
    this.add('access-analyzer:StartResourceScan');
    return this;
  }

  /**
   * Grants permission to add a tag to a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.add('access-analyzer:TagResource');
    return this;
  }

  /**
   * Grants permission to remove a tag from a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('access-analyzer:UntagResource');
    return this;
  }

  /**
   * Grants permission to modify an archive rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateArchiveRule.html
   */
  public toUpdateArchiveRule() {
    this.add('access-analyzer:UpdateArchiveRule');
    return this;
  }

  /**
   * Grants permission to modify findings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateFindings.html
   */
  public toUpdateFindings() {
    this.add('access-analyzer:UpdateFindings');
    return this;
  }

  /**
   * Adds a resource of type Analyzer to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources
   *
   * @param analyzerName - Identifier for the analyzerName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAnalyzer(analyzerName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:access-analyzer:${Region}:${Account}:analyzer/${AnalyzerName}';
    arn = arn.replace('${AnalyzerName}', analyzerName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ArchiveRule to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources
   *
   * @param analyzerName - Identifier for the analyzerName.
   * @param ruleName - Identifier for the ruleName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onArchiveRule(analyzerName: string, ruleName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:access-analyzer:${Region}:${Account}:analyzer/${AnalyzerName}/archive-rule/${RuleName}';
    arn = arn.replace('${AnalyzerName}', analyzerName);
    arn = arn.replace('${RuleName}', ruleName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
