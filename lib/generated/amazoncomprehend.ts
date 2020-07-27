import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [comprehend](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Comprehend extends PolicyStatement {
  public servicePrefix = 'comprehend';
  protected actionList: Actions = {
    "BatchDetectDominantLanguage": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectDominantLanguage.html",
      "description": "Detects the language or languages present in the list of text documents.",
      "accessLevel": "Read"
    },
    "BatchDetectEntities": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectEntities.html",
      "description": "Detects the named entities (\"People\", \"Places\", \"Locations\", etc) within the given list of text documents.",
      "accessLevel": "Read"
    },
    "BatchDetectKeyPhrases": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectKeyPhrases.html",
      "description": "Detects the phrases in the list of text documents that are most indicative of the content.",
      "accessLevel": "Read"
    },
    "BatchDetectSentiment": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectSentiment.html",
      "description": "Detects the sentiment of a text in the list of documents (Positive, Negative, Neutral, or Mixed).",
      "accessLevel": "Read"
    },
    "BatchDetectSyntax": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectSyntax.html",
      "description": "Detects syntactic information (like Part of Speech, Tokens) in a list of text documents.",
      "accessLevel": "Read"
    },
    "ClassifyDocument": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_ClassifyDocument.html",
      "description": "Creates a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint.",
      "accessLevel": "Read",
      "resourceTypes": {
        "document-classifier-endpoint": {
          "required": true
        }
      }
    },
    "CreateDocumentClassifier": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_CreateDocumentClassifier.html",
      "description": "Creates a new document classifier that you can use to categorize documents.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateEndpoint": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_CreateEndpoint.html",
      "description": "Creates a model-specific endpoint for synchronous inference for a previously trained custom model",
      "accessLevel": "Write",
      "resourceTypes": {
        "document-classifier": {
          "required": true
        },
        "entity-recognizer": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateEntityRecognizer": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_CreateEntityRecognizer.html",
      "description": "Creates an entity recognizer using submitted files.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteDocumentClassifier": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_DeleteDocumentClassifier.html",
      "description": "Deletes a previously created document classifier.",
      "accessLevel": "Write",
      "resourceTypes": {
        "document-classifier": {
          "required": true
        }
      }
    },
    "DeleteEndpoint": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_DeleteEndpoint.html",
      "description": "Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted.",
      "accessLevel": "Write",
      "resourceTypes": {
        "document-classifier-endpoint": {
          "required": true
        },
        "entity-recognizer-endpoint": {
          "required": true
        }
      }
    },
    "DeleteEntityRecognizer": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_DeleteEntityRecognizer.html",
      "description": "Deletes a submitted entity recognizer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "entity-recognizer": {
          "required": true
        }
      }
    },
    "DescribeDocumentClassificationJob": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeDocumentClassificationJob.html",
      "description": "Gets the properties associated with a document classification job.",
      "accessLevel": "Read"
    },
    "DescribeDocumentClassifier": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeDocumentClassifier.html",
      "description": "Gets the properties associated with a document classifier.",
      "accessLevel": "Read",
      "resourceTypes": {
        "document-classifier": {
          "required": true
        }
      }
    },
    "DescribeDominantLanguageDetectionJob": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeDominantLanguageDetectionJob.html",
      "description": "Gets the properties associated with a dominant language detection job.",
      "accessLevel": "Read"
    },
    "DescribeEndpoint": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeEndpoint.html",
      "description": "Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint.",
      "accessLevel": "Read",
      "resourceTypes": {
        "document-classifier-endpoint": {
          "required": true
        },
        "entity-recognizer-endpoint": {
          "required": true
        }
      }
    },
    "DescribeEntitiesDetectionJob": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeEntitiesDetectionJob.html",
      "description": "Gets the properties associated with an entities detection job.",
      "accessLevel": "Read"
    },
    "DescribeEntityRecognizer": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeEntityRecognizer.html",
      "description": "Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.",
      "accessLevel": "Read",
      "resourceTypes": {
        "entity-recognizer": {
          "required": true
        }
      }
    },
    "DescribeKeyPhrasesDetectionJob": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeKeyPhrasesDetectionJob.html",
      "description": "Gets the properties associated with a key phrases detection job.",
      "accessLevel": "Read"
    },
    "DescribeSentimentDetectionJob": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeSentimentDetectionJob.html",
      "description": "Gets the properties associated with a sentiment detection job.",
      "accessLevel": "Read"
    },
    "DescribeTopicsDetectionJob": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeTopicsDetectionJob.html",
      "description": "Gets the properties associated with a topic detection job.",
      "accessLevel": "Read"
    },
    "DetectDominantLanguage": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectDominantLanguage.html",
      "description": "Detects the language or languages present in the text.",
      "accessLevel": "Read"
    },
    "DetectEntities": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectEntities.html",
      "description": "Detects the named entities (\"People\", \"Places\", \"Locations\", etc) within the given text document.",
      "accessLevel": "Read",
      "resourceTypes": {
        "entity-recognizer-endpoint": {
          "required": false
        }
      }
    },
    "DetectKeyPhrases": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectKeyPhrases.html",
      "description": "Detects the phrases in the text that are most indicative of the content.",
      "accessLevel": "Read"
    },
    "DetectSentiment": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectSentiment.html",
      "description": "Detects the sentiment of a text in a document (Positive, Negative, Neutral, or Mixed).",
      "accessLevel": "Read"
    },
    "DetectSyntax": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectSyntax.html",
      "description": "Detects syntactic information (like Part of Speech, Tokens) in a text document.",
      "accessLevel": "Read"
    },
    "ListDocumentClassificationJobs": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_ListDocumentClassificationJobs.html",
      "description": "Gets a list of the document classification jobs that you have submitted.",
      "accessLevel": "List"
    },
    "ListDocumentClassifiers": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_ListDocumentClassifiers.html",
      "description": "Gets a list of the document classifiers that you have created.",
      "accessLevel": "List"
    },
    "ListDominantLanguageDetectionJobs": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_ListDominantLanguageDetectionJobs.html",
      "description": "Gets a list of the dominant language detection jobs that you have submitted.",
      "accessLevel": "List"
    },
    "ListEndpoints": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_ListEndpoints.html",
      "description": "Gets a list of all existing endpoints that you've created.",
      "accessLevel": "List"
    },
    "ListEntitiesDetectionJobs": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_ListEntitiesDetectionJobs.html",
      "description": "Gets a list of the entity detection jobs that you have submitted.",
      "accessLevel": "List"
    },
    "ListEntityRecognizers": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_ListEntityRecognizers.html",
      "description": "Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training.",
      "accessLevel": "List"
    },
    "ListKeyPhrasesDetectionJobs": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_ListKeyPhrasesDetectionJobs.html",
      "description": "Get a list of key phrase detection jobs that you have submitted.",
      "accessLevel": "List"
    },
    "ListSentimentDetectionJobs": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_ListSentimentDetectionJobs.html",
      "description": "Gets a list of sentiment detection jobs that you have submitted.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_ListTagsForResource.html",
      "description": "Lists tags for a resource",
      "accessLevel": "List",
      "resourceTypes": {
        "document-classifier": {
          "required": false
        },
        "document-classifier-endpoint": {
          "required": false
        },
        "entity-recognizer": {
          "required": false
        },
        "entity-recognizer-endpoint": {
          "required": false
        }
      }
    },
    "ListTopicsDetectionJobs": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_ListTopicsDetectionJobs.html",
      "description": "Gets a list of the topic detection jobs that you have submitted.",
      "accessLevel": "List"
    },
    "StartDocumentClassificationJob": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_StartDocumentClassificationJob.html",
      "description": "Starts an asynchronous document classification job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "document-classifier": {
          "required": true
        }
      }
    },
    "StartDominantLanguageDetectionJob": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_StartDominantLanguageDetectionJob.html",
      "description": "Starts an asynchronous dominant language detection job for a collection of documents.",
      "accessLevel": "Write"
    },
    "StartEntitiesDetectionJob": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_StartEntitiesDetectionJob.html",
      "description": "Starts an asynchronous entity detection job for a collection of documents.",
      "accessLevel": "Write",
      "resourceTypes": {
        "entity-recognizer": {
          "required": false
        }
      }
    },
    "StartKeyPhrasesDetectionJob": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_StartKeyPhrasesDetectionJob.html",
      "description": "Starts an asynchronous key phrase detection job for a collection of documents.",
      "accessLevel": "Write"
    },
    "StartSentimentDetectionJob": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_StartSentimentDetectionJob.html",
      "description": "Starts an asynchronous sentiment detection job for a collection of documents.",
      "accessLevel": "Write"
    },
    "StartTopicsDetectionJob": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_StartTopicsDetectionJob.html",
      "description": "Starts an asynchronous job to detect the most common topics in the collection of documents and the phrases associated with each topic.",
      "accessLevel": "Write"
    },
    "StopDominantLanguageDetectionJob": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_StopDominantLanguageDetectionJob.html",
      "description": "Stops a dominant language detection job.",
      "accessLevel": "Write"
    },
    "StopEntitiesDetectionJob": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_StopEntitiesDetectionJob.html",
      "description": "Stops an entity detection job.",
      "accessLevel": "Write"
    },
    "StopKeyPhrasesDetectionJob": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_StopKeyPhrasesDetectionJob.html",
      "description": "Stops a key phrase detection job.",
      "accessLevel": "Write"
    },
    "StopSentimentDetectionJob": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_StopSentimentDetectionJob.html",
      "description": "Stops a sentiment detection job.",
      "accessLevel": "Write"
    },
    "StopTrainingDocumentClassifier": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_StopTrainingDocumentClassifier.html",
      "description": "Stop a previously created document classifier training job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "document-classifier": {
          "required": true
        }
      }
    },
    "StopTrainingEntityRecognizer": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_StopTrainingEntityRecognizer.html",
      "description": "Stop a previously created entity recognizer training job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "entity-recognizer": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_TagResource.html",
      "description": "Tags a resource with given key value pairs",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "document-classifier": {
          "required": false
        },
        "document-classifier-endpoint": {
          "required": false
        },
        "entity-recognizer": {
          "required": false
        },
        "entity-recognizer-endpoint": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_UntagResource.html",
      "description": "Untags a resource with given key",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "document-classifier": {
          "required": false
        },
        "document-classifier-endpoint": {
          "required": false
        },
        "entity-recognizer": {
          "required": false
        },
        "entity-recognizer-endpoint": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateEndpoint": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_UpdateEndpoint.html",
      "description": "Updates information about the specified endpoint.",
      "accessLevel": "Write",
      "resourceTypes": {
        "document-classifier-endpoint": {
          "required": true
        },
        "entity-recognizer-endpoint": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "document-classifier": {
      "name": "document-classifier",
      "url": "",
      "arn": "arn:${Partition}:comprehend:${Region}:${Account}:document-classifier/${DocumentClassifierName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "entity-recognizer": {
      "name": "entity-recognizer",
      "url": "",
      "arn": "arn:${Partition}:comprehend:${Region}:${Account}:entity-recognizer/${EntityRecognizerName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "document-classifier-endpoint": {
      "name": "document-classifier-endpoint",
      "url": "",
      "arn": "arn:${Partition}:comprehend:${Region}:${Account}:document-classifier-endpoint/${DocumentClassifierEndpointName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "entity-recognizer-endpoint": {
      "name": "entity-recognizer-endpoint",
      "url": "",
      "arn": "arn:${Partition}:comprehend:${Region}:${Account}:entity-recognizer-endpoint/${EntityRecognizerEndpointName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [comprehend](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Detects the language or languages present in the list of text documents.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectDominantLanguage.html
   */
  public batchDetectDominantLanguage() {
    this.add('comprehend:BatchDetectDominantLanguage');
    return this;
  }

  /**
   * Detects the named entities ("People", "Places", "Locations", etc) within the given list of text documents.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectEntities.html
   */
  public batchDetectEntities() {
    this.add('comprehend:BatchDetectEntities');
    return this;
  }

  /**
   * Detects the phrases in the list of text documents that are most indicative of the content.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectKeyPhrases.html
   */
  public batchDetectKeyPhrases() {
    this.add('comprehend:BatchDetectKeyPhrases');
    return this;
  }

  /**
   * Detects the sentiment of a text in the list of documents (Positive, Negative, Neutral, or Mixed).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectSentiment.html
   */
  public batchDetectSentiment() {
    this.add('comprehend:BatchDetectSentiment');
    return this;
  }

  /**
   * Detects syntactic information (like Part of Speech, Tokens) in a list of text documents.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_BatchDetectSyntax.html
   */
  public batchDetectSyntax() {
    this.add('comprehend:BatchDetectSyntax');
    return this;
  }

  /**
   * Creates a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ClassifyDocument.html
   */
  public classifyDocument() {
    this.add('comprehend:ClassifyDocument');
    return this;
  }

  /**
   * Creates a new document classifier that you can use to categorize documents.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_CreateDocumentClassifier.html
   */
  public createDocumentClassifier() {
    this.add('comprehend:CreateDocumentClassifier');
    return this;
  }

  /**
   * Creates a model-specific endpoint for synchronous inference for a previously trained custom model
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_CreateEndpoint.html
   */
  public createEndpoint() {
    this.add('comprehend:CreateEndpoint');
    return this;
  }

  /**
   * Creates an entity recognizer using submitted files.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_CreateEntityRecognizer.html
   */
  public createEntityRecognizer() {
    this.add('comprehend:CreateEntityRecognizer');
    return this;
  }

  /**
   * Deletes a previously created document classifier.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DeleteDocumentClassifier.html
   */
  public deleteDocumentClassifier() {
    this.add('comprehend:DeleteDocumentClassifier');
    return this;
  }

  /**
   * Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DeleteEndpoint.html
   */
  public deleteEndpoint() {
    this.add('comprehend:DeleteEndpoint');
    return this;
  }

  /**
   * Deletes a submitted entity recognizer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DeleteEntityRecognizer.html
   */
  public deleteEntityRecognizer() {
    this.add('comprehend:DeleteEntityRecognizer');
    return this;
  }

  /**
   * Gets the properties associated with a document classification job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeDocumentClassificationJob.html
   */
  public describeDocumentClassificationJob() {
    this.add('comprehend:DescribeDocumentClassificationJob');
    return this;
  }

  /**
   * Gets the properties associated with a document classifier.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeDocumentClassifier.html
   */
  public describeDocumentClassifier() {
    this.add('comprehend:DescribeDocumentClassifier');
    return this;
  }

  /**
   * Gets the properties associated with a dominant language detection job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeDominantLanguageDetectionJob.html
   */
  public describeDominantLanguageDetectionJob() {
    this.add('comprehend:DescribeDominantLanguageDetectionJob');
    return this;
  }

  /**
   * Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeEndpoint.html
   */
  public describeEndpoint() {
    this.add('comprehend:DescribeEndpoint');
    return this;
  }

  /**
   * Gets the properties associated with an entities detection job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeEntitiesDetectionJob.html
   */
  public describeEntitiesDetectionJob() {
    this.add('comprehend:DescribeEntitiesDetectionJob');
    return this;
  }

  /**
   * Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeEntityRecognizer.html
   */
  public describeEntityRecognizer() {
    this.add('comprehend:DescribeEntityRecognizer');
    return this;
  }

  /**
   * Gets the properties associated with a key phrases detection job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeKeyPhrasesDetectionJob.html
   */
  public describeKeyPhrasesDetectionJob() {
    this.add('comprehend:DescribeKeyPhrasesDetectionJob');
    return this;
  }

  /**
   * Gets the properties associated with a sentiment detection job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeSentimentDetectionJob.html
   */
  public describeSentimentDetectionJob() {
    this.add('comprehend:DescribeSentimentDetectionJob');
    return this;
  }

  /**
   * Gets the properties associated with a topic detection job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DescribeTopicsDetectionJob.html
   */
  public describeTopicsDetectionJob() {
    this.add('comprehend:DescribeTopicsDetectionJob');
    return this;
  }

  /**
   * Detects the language or languages present in the text.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectDominantLanguage.html
   */
  public detectDominantLanguage() {
    this.add('comprehend:DetectDominantLanguage');
    return this;
  }

  /**
   * Detects the named entities ("People", "Places", "Locations", etc) within the given text document.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectEntities.html
   */
  public detectEntities() {
    this.add('comprehend:DetectEntities');
    return this;
  }

  /**
   * Detects the phrases in the text that are most indicative of the content.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectKeyPhrases.html
   */
  public detectKeyPhrases() {
    this.add('comprehend:DetectKeyPhrases');
    return this;
  }

  /**
   * Detects the sentiment of a text in a document (Positive, Negative, Neutral, or Mixed).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectSentiment.html
   */
  public detectSentiment() {
    this.add('comprehend:DetectSentiment');
    return this;
  }

  /**
   * Detects syntactic information (like Part of Speech, Tokens) in a text document.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectSyntax.html
   */
  public detectSyntax() {
    this.add('comprehend:DetectSyntax');
    return this;
  }

  /**
   * Gets a list of the document classification jobs that you have submitted.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListDocumentClassificationJobs.html
   */
  public listDocumentClassificationJobs() {
    this.add('comprehend:ListDocumentClassificationJobs');
    return this;
  }

  /**
   * Gets a list of the document classifiers that you have created.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListDocumentClassifiers.html
   */
  public listDocumentClassifiers() {
    this.add('comprehend:ListDocumentClassifiers');
    return this;
  }

  /**
   * Gets a list of the dominant language detection jobs that you have submitted.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListDominantLanguageDetectionJobs.html
   */
  public listDominantLanguageDetectionJobs() {
    this.add('comprehend:ListDominantLanguageDetectionJobs');
    return this;
  }

  /**
   * Gets a list of all existing endpoints that you've created.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListEndpoints.html
   */
  public listEndpoints() {
    this.add('comprehend:ListEndpoints');
    return this;
  }

  /**
   * Gets a list of the entity detection jobs that you have submitted.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListEntitiesDetectionJobs.html
   */
  public listEntitiesDetectionJobs() {
    this.add('comprehend:ListEntitiesDetectionJobs');
    return this;
  }

  /**
   * Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListEntityRecognizers.html
   */
  public listEntityRecognizers() {
    this.add('comprehend:ListEntityRecognizers');
    return this;
  }

  /**
   * Get a list of key phrase detection jobs that you have submitted.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListKeyPhrasesDetectionJobs.html
   */
  public listKeyPhrasesDetectionJobs() {
    this.add('comprehend:ListKeyPhrasesDetectionJobs');
    return this;
  }

  /**
   * Gets a list of sentiment detection jobs that you have submitted.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListSentimentDetectionJobs.html
   */
  public listSentimentDetectionJobs() {
    this.add('comprehend:ListSentimentDetectionJobs');
    return this;
  }

  /**
   * Lists tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('comprehend:ListTagsForResource');
    return this;
  }

  /**
   * Gets a list of the topic detection jobs that you have submitted.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_ListTopicsDetectionJobs.html
   */
  public listTopicsDetectionJobs() {
    this.add('comprehend:ListTopicsDetectionJobs');
    return this;
  }

  /**
   * Starts an asynchronous document classification job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartDocumentClassificationJob.html
   */
  public startDocumentClassificationJob() {
    this.add('comprehend:StartDocumentClassificationJob');
    return this;
  }

  /**
   * Starts an asynchronous dominant language detection job for a collection of documents.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartDominantLanguageDetectionJob.html
   */
  public startDominantLanguageDetectionJob() {
    this.add('comprehend:StartDominantLanguageDetectionJob');
    return this;
  }

  /**
   * Starts an asynchronous entity detection job for a collection of documents.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartEntitiesDetectionJob.html
   */
  public startEntitiesDetectionJob() {
    this.add('comprehend:StartEntitiesDetectionJob');
    return this;
  }

  /**
   * Starts an asynchronous key phrase detection job for a collection of documents.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartKeyPhrasesDetectionJob.html
   */
  public startKeyPhrasesDetectionJob() {
    this.add('comprehend:StartKeyPhrasesDetectionJob');
    return this;
  }

  /**
   * Starts an asynchronous sentiment detection job for a collection of documents.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartSentimentDetectionJob.html
   */
  public startSentimentDetectionJob() {
    this.add('comprehend:StartSentimentDetectionJob');
    return this;
  }

  /**
   * Starts an asynchronous job to detect the most common topics in the collection of documents and the phrases associated with each topic.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StartTopicsDetectionJob.html
   */
  public startTopicsDetectionJob() {
    this.add('comprehend:StartTopicsDetectionJob');
    return this;
  }

  /**
   * Stops a dominant language detection job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopDominantLanguageDetectionJob.html
   */
  public stopDominantLanguageDetectionJob() {
    this.add('comprehend:StopDominantLanguageDetectionJob');
    return this;
  }

  /**
   * Stops an entity detection job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopEntitiesDetectionJob.html
   */
  public stopEntitiesDetectionJob() {
    this.add('comprehend:StopEntitiesDetectionJob');
    return this;
  }

  /**
   * Stops a key phrase detection job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopKeyPhrasesDetectionJob.html
   */
  public stopKeyPhrasesDetectionJob() {
    this.add('comprehend:StopKeyPhrasesDetectionJob');
    return this;
  }

  /**
   * Stops a sentiment detection job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopSentimentDetectionJob.html
   */
  public stopSentimentDetectionJob() {
    this.add('comprehend:StopSentimentDetectionJob');
    return this;
  }

  /**
   * Stop a previously created document classifier training job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopTrainingDocumentClassifier.html
   */
  public stopTrainingDocumentClassifier() {
    this.add('comprehend:StopTrainingDocumentClassifier');
    return this;
  }

  /**
   * Stop a previously created entity recognizer training job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_StopTrainingEntityRecognizer.html
   */
  public stopTrainingEntityRecognizer() {
    this.add('comprehend:StopTrainingEntityRecognizer');
    return this;
  }

  /**
   * Tags a resource with given key value pairs
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_TagResource.html
   */
  public tagResource() {
    this.add('comprehend:TagResource');
    return this;
  }

  /**
   * Untags a resource with given key
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_UntagResource.html
   */
  public untagResource() {
    this.add('comprehend:UntagResource');
    return this;
  }

  /**
   * Updates information about the specified endpoint.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_UpdateEndpoint.html
   */
  public updateEndpoint() {
    this.add('comprehend:UpdateEndpoint');
    return this;
  }

  /**
   * Adds a resource of type document-classifier to the statement
   *
   * @param documentClassifierName - Identifier for the documentClassifierName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDocumentClassifier(documentClassifierName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:comprehend:${Region}:${Account}:document-classifier/${DocumentClassifierName}';
    arn = arn.replace('${DocumentClassifierName}', documentClassifierName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type entity-recognizer to the statement
   *
   * @param entityRecognizerName - Identifier for the entityRecognizerName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEntityRecognizer(entityRecognizerName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:comprehend:${Region}:${Account}:entity-recognizer/${EntityRecognizerName}';
    arn = arn.replace('${EntityRecognizerName}', entityRecognizerName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type document-classifier-endpoint to the statement
   *
   * @param documentClassifierEndpointName - Identifier for the documentClassifierEndpointName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDocumentClassifierEndpoint(documentClassifierEndpointName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:comprehend:${Region}:${Account}:document-classifier-endpoint/${DocumentClassifierEndpointName}';
    arn = arn.replace('${DocumentClassifierEndpointName}', documentClassifierEndpointName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type entity-recognizer-endpoint to the statement
   *
   * @param entityRecognizerEndpointName - Identifier for the entityRecognizerEndpointName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEntityRecognizerEndpoint(entityRecognizerEndpointName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:comprehend:${Region}:${Account}:entity-recognizer-endpoint/${EntityRecognizerEndpointName}';
    arn = arn.replace('${EntityRecognizerEndpointName}', entityRecognizerEndpointName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters create requests based on the allowed set of values for each of the mandatory tags.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tag value associated with the resource.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters create requests based on the presence of mandatory tags in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-globally-available
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
