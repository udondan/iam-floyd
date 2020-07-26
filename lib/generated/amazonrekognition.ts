import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [rekognition](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrekognition.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Rekognition extends PolicyStatement {
  public servicePrefix = 'rekognition';
  protected actionList: Actions = {
    "CompareFaces": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_CompareFaces.html",
      "description": "Compares a face in source input image with each face detected in the target input image.",
      "accessLevel": "Read"
    },
    "CreateCollection": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateCollection.html",
      "description": "Creates a collection in an AWS region. You can then add faces to the collection using the IndexFaces API.",
      "accessLevel": "Write",
      "resourceTypes": {
        "collection": {
          "required": true
        }
      }
    },
    "CreateProject": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateProject.html",
      "description": "Creates a new Amazon Rekognition Custom Labels project.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "CreateProjectVersion": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateProjectVersion.html",
      "description": "Creates a new version of a model and begins training.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        },
        "projectversion": {
          "required": true
        }
      }
    },
    "CreateStreamProcessor": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateStreamProcessor.html",
      "description": "Creates an Amazon Rekognition stream processor that you can use to detect and recognize faces in a streaming video.",
      "accessLevel": "Write",
      "resourceTypes": {
        "collection": {
          "required": true
        },
        "streamprocessor": {
          "required": true
        }
      }
    },
    "DeleteCollection": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteCollection.html",
      "description": "Deletes the specified collection. Note that this operation removes all faces in the collection.",
      "accessLevel": "Write",
      "resourceTypes": {
        "collection": {
          "required": true
        }
      }
    },
    "DeleteFaces": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteFaces.html",
      "description": "Deletes faces from a collection.",
      "accessLevel": "Write",
      "resourceTypes": {
        "collection": {
          "required": true
        }
      }
    },
    "DeleteProject": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteProject.html",
      "description": "Deletes a project.",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "DeleteProjectVersion": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteProjectVersion.html",
      "description": "Deletes a model.",
      "accessLevel": "Write",
      "resourceTypes": {
        "projectversion": {
          "required": true
        }
      }
    },
    "DeleteStreamProcessor": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteStreamProcessor.html",
      "description": "Deletes the stream processor identified by Name.",
      "accessLevel": "Write",
      "resourceTypes": {
        "streamprocessor": {
          "required": true
        }
      }
    },
    "DescribeCollection": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeCollection.html",
      "description": "Describes the specified collection.",
      "accessLevel": "Read",
      "resourceTypes": {
        "collection": {
          "required": true
        }
      }
    },
    "DescribeProjectVersions": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeProjectVersions.html",
      "description": "Lists and describes the model versions in an Amazon Rekognition Custom Labels project.",
      "accessLevel": "Read",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "DescribeProjects": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeProjects.html",
      "description": "Lists and gets information about your Amazon Rekognition Custom Labels projects.",
      "accessLevel": "Read"
    },
    "DescribeStreamProcessor": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeStreamProcessorh.html",
      "description": "Provides information about a stream processor created by CreateStreamProcessor.",
      "accessLevel": "Read",
      "resourceTypes": {
        "streamprocessor": {
          "required": true
        }
      }
    },
    "DetectCustomLabels": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectCustomLabels.html",
      "description": "Detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model version.",
      "accessLevel": "Read",
      "resourceTypes": {
        "projectversion": {
          "required": true
        }
      }
    },
    "DetectFaces": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectFaces.html",
      "description": "Detects human faces within an image (JPEG or PNG) provided as input.",
      "accessLevel": "Read"
    },
    "DetectLabels": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectLabels.html",
      "description": "Detects instances of real-world labels within an image (JPEG or PNG) provided as input.",
      "accessLevel": "Read"
    },
    "DetectModerationLabels": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectModerationLabels.html",
      "description": "Detects moderation labels within input image.",
      "accessLevel": "Read"
    },
    "DetectText": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectText.html",
      "description": "Detects text in the input image and converts it into machine-readable text.",
      "accessLevel": "Read"
    },
    "GetCelebrityInfo": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_GetCelebrityInfo.html",
      "description": "Gets the name and additional information about a celebrity based on his or her Rekognition ID.",
      "accessLevel": "Read"
    },
    "GetCelebrityRecognition": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_GetCelebrityRecognition.html",
      "description": "Gets the celebrity recognition results for a Rekognition Video analysis started by StartCelebrityRecognition.",
      "accessLevel": "Read"
    },
    "GetContentModeration": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_GetContentModeration.html",
      "description": "Gets the content moderation analysis results for a Rekognition Video analysis started by StartContentModeration.",
      "accessLevel": "Read"
    },
    "GetFaceDetection": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_GetFaceDetection.html",
      "description": "Gets face detection results for a Rekognition Video analysis started by StartFaceDetection.",
      "accessLevel": "Read"
    },
    "GetFaceSearch": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_GetFaceSearch.html",
      "description": "Gets the face search results for Rekognition Video face search started by StartFaceSearch.",
      "accessLevel": "Read"
    },
    "GetLabelDetection": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_GetLabelDetection.html",
      "description": "Gets the label detection results of a Rekognition Video analysis started by StartLabelDetection.",
      "accessLevel": "Read"
    },
    "GetPersonTracking": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_GetPersonTracking.html",
      "description": "Gets information about people detected within a video.",
      "accessLevel": "Read"
    },
    "GetSegmentDetection": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_GetSegmentDetection.html",
      "description": "Gets segment detection results for a Rekognition Video analysis started by StartSegmentDetection.",
      "accessLevel": "Read"
    },
    "GetTextDetection": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_GetTextDetection.html",
      "description": "Gets text detection results for a Rekognition Video analysis started by StartTextDetection.",
      "accessLevel": "Read"
    },
    "IndexFaces": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_IndexFaces.html",
      "description": "Detects faces in the input image and adds them to the specified collection.",
      "accessLevel": "Write",
      "resourceTypes": {
        "collection": {
          "required": true
        }
      }
    },
    "ListCollections": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_ListCollections.html",
      "description": "Returns a list of collection IDs in your account.",
      "accessLevel": "Read",
      "resourceTypes": {
        "collection": {
          "required": true
        }
      }
    },
    "ListFaces": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_ListFaces.html",
      "description": "Returns metadata for faces in the specified collection.",
      "accessLevel": "Read",
      "resourceTypes": {
        "collection": {
          "required": true
        }
      }
    },
    "ListStreamProcessors": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_ListStreamProcessors.html",
      "description": "Gets a list of stream processors that you have created with CreateStreamProcessor.",
      "accessLevel": "List",
      "resourceTypes": {
        "streamprocessor": {
          "required": true
        }
      }
    },
    "RecognizeCelebrities": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_RecognizeCelebrities.html",
      "description": "Returns an array of celebrities recognized in the input image.",
      "accessLevel": "Read"
    },
    "SearchFaces": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_SearchFaces.html",
      "description": "For a given input face ID, searches the specified collection for matching faces.",
      "accessLevel": "Read",
      "resourceTypes": {
        "collection": {
          "required": true
        }
      }
    },
    "SearchFacesByImage": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_SearchFacesByImage.html",
      "description": "For a given input image, first detects the largest face in the image, and then searches the specified collection for matching faces.",
      "accessLevel": "Read",
      "resourceTypes": {
        "collection": {
          "required": true
        }
      }
    },
    "StartCelebrityRecognition": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_StartCelebrityRecognition.html",
      "description": "Starts asynchronous recognition of celebrities in a video.",
      "accessLevel": "Write"
    },
    "StartContentModeration": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_StartContentModeration.html",
      "description": "Starts asynchronous detection of explicit or suggestive adult content in a video.",
      "accessLevel": "Write"
    },
    "StartFaceDetection": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_StartFaceDetection.html",
      "description": "Starts asynchronous detection of faces in a video.",
      "accessLevel": "Write"
    },
    "StartFaceSearch": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_StartFaceSearch.html",
      "description": "Starts the asynchronous search for faces in a collection that match the faces of persons detected in a video.",
      "accessLevel": "Write",
      "resourceTypes": {
        "collection": {
          "required": true
        }
      }
    },
    "StartLabelDetection": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_StartLabelDetection.html",
      "description": "Starts asynchronous detection of labels in a video.",
      "accessLevel": "Write"
    },
    "StartPersonTracking": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_StartPersonTracking.html",
      "description": "Starts the asynchronous tracking of persons in a video.",
      "accessLevel": "Write"
    },
    "StartProjectVersion": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_StartProjectVersion.html",
      "description": "Starts the deployment of a model version.",
      "accessLevel": "Write",
      "resourceTypes": {
        "projectversion": {
          "required": true
        }
      }
    },
    "StartSegmentDetection": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_StartSegmentDetection.html",
      "description": "Starts asynchronous detection of segments in a video.",
      "accessLevel": "Write"
    },
    "StartStreamProcessor": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_StartStreamProcessor.html",
      "description": "Starts processing a stream processor.",
      "accessLevel": "Write",
      "resourceTypes": {
        "streamprocessor": {
          "required": true
        }
      }
    },
    "StartTextDetection": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_StartTextDetection.html",
      "description": "Starts asynchronous detection of text in a video.",
      "accessLevel": "Write"
    },
    "StopProjectVersion": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_StopProjectVersion.html",
      "description": "Stops a deployed model version.",
      "accessLevel": "Write",
      "resourceTypes": {
        "projectversion": {
          "required": true
        }
      }
    },
    "StopStreamProcessor": {
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/API_StopStreamProcessor.html",
      "description": "Stops a running stream processor that was created by CreateStreamProcessor.",
      "accessLevel": "Write",
      "resourceTypes": {
        "streamprocessor": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "collection": {
      "name": "collection",
      "url": "https://docs.aws.amazon.com/rekognition/latest/dg/howitworks-collection.html",
      "arn": "arn:${Partition}:rekognition:${Region}:${Account}:collection/${CollectionId}",
      "conditionKeys": []
    },
    "streamprocessor": {
      "name": "streamprocessor",
      "url": "",
      "arn": "arn:${Partition}:rekognition:${Region}:${Account}:streamprocessor/${StreamprocessorId}",
      "conditionKeys": []
    },
    "project": {
      "name": "project",
      "url": "",
      "arn": "arn:${Partition}:rekognition:${Region}:${Account}:project/${ProjectName}/${CreationTimestamp}",
      "conditionKeys": []
    },
    "projectversion": {
      "name": "projectversion",
      "url": "",
      "arn": "arn:${Partition}:rekognition:${Region}:${Account}:project/${ProjectName}/version/${VersionName}/${CreationTimestamp}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [rekognition](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrekognition.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Compares a face in source input image with each face detected in the target input image.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_CompareFaces.html
   */
  public compareFaces() {
    this.add('rekognition:CompareFaces');
    return this;
  }

  /**
   * Creates a collection in an AWS region. You can then add faces to the collection using the IndexFaces API.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateCollection.html
   */
  public createCollection() {
    this.add('rekognition:CreateCollection');
    return this;
  }

  /**
   * Creates a new Amazon Rekognition Custom Labels project.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateProject.html
   */
  public createProject() {
    this.add('rekognition:CreateProject');
    return this;
  }

  /**
   * Creates a new version of a model and begins training.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateProjectVersion.html
   */
  public createProjectVersion() {
    this.add('rekognition:CreateProjectVersion');
    return this;
  }

  /**
   * Creates an Amazon Rekognition stream processor that you can use to detect and recognize faces in a streaming video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateStreamProcessor.html
   */
  public createStreamProcessor() {
    this.add('rekognition:CreateStreamProcessor');
    return this;
  }

  /**
   * Deletes the specified collection. Note that this operation removes all faces in the collection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteCollection.html
   */
  public deleteCollection() {
    this.add('rekognition:DeleteCollection');
    return this;
  }

  /**
   * Deletes faces from a collection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteFaces.html
   */
  public deleteFaces() {
    this.add('rekognition:DeleteFaces');
    return this;
  }

  /**
   * Deletes a project.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteProject.html
   */
  public deleteProject() {
    this.add('rekognition:DeleteProject');
    return this;
  }

  /**
   * Deletes a model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteProjectVersion.html
   */
  public deleteProjectVersion() {
    this.add('rekognition:DeleteProjectVersion');
    return this;
  }

  /**
   * Deletes the stream processor identified by Name.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DeleteStreamProcessor.html
   */
  public deleteStreamProcessor() {
    this.add('rekognition:DeleteStreamProcessor');
    return this;
  }

  /**
   * Describes the specified collection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeCollection.html
   */
  public describeCollection() {
    this.add('rekognition:DescribeCollection');
    return this;
  }

  /**
   * Lists and describes the model versions in an Amazon Rekognition Custom Labels project.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeProjectVersions.html
   */
  public describeProjectVersions() {
    this.add('rekognition:DescribeProjectVersions');
    return this;
  }

  /**
   * Lists and gets information about your Amazon Rekognition Custom Labels projects.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeProjects.html
   */
  public describeProjects() {
    this.add('rekognition:DescribeProjects');
    return this;
  }

  /**
   * Provides information about a stream processor created by CreateStreamProcessor.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DescribeStreamProcessorh.html
   */
  public describeStreamProcessor() {
    this.add('rekognition:DescribeStreamProcessor');
    return this;
  }

  /**
   * Detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectCustomLabels.html
   */
  public detectCustomLabels() {
    this.add('rekognition:DetectCustomLabels');
    return this;
  }

  /**
   * Detects human faces within an image (JPEG or PNG) provided as input.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectFaces.html
   */
  public detectFaces() {
    this.add('rekognition:DetectFaces');
    return this;
  }

  /**
   * Detects instances of real-world labels within an image (JPEG or PNG) provided as input.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectLabels.html
   */
  public detectLabels() {
    this.add('rekognition:DetectLabels');
    return this;
  }

  /**
   * Detects moderation labels within input image.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectModerationLabels.html
   */
  public detectModerationLabels() {
    this.add('rekognition:DetectModerationLabels');
    return this;
  }

  /**
   * Detects text in the input image and converts it into machine-readable text.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_DetectText.html
   */
  public detectText() {
    this.add('rekognition:DetectText');
    return this;
  }

  /**
   * Gets the name and additional information about a celebrity based on his or her Rekognition ID.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetCelebrityInfo.html
   */
  public getCelebrityInfo() {
    this.add('rekognition:GetCelebrityInfo');
    return this;
  }

  /**
   * Gets the celebrity recognition results for a Rekognition Video analysis started by StartCelebrityRecognition.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetCelebrityRecognition.html
   */
  public getCelebrityRecognition() {
    this.add('rekognition:GetCelebrityRecognition');
    return this;
  }

  /**
   * Gets the content moderation analysis results for a Rekognition Video analysis started by StartContentModeration.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetContentModeration.html
   */
  public getContentModeration() {
    this.add('rekognition:GetContentModeration');
    return this;
  }

  /**
   * Gets face detection results for a Rekognition Video analysis started by StartFaceDetection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetFaceDetection.html
   */
  public getFaceDetection() {
    this.add('rekognition:GetFaceDetection');
    return this;
  }

  /**
   * Gets the face search results for Rekognition Video face search started by StartFaceSearch.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetFaceSearch.html
   */
  public getFaceSearch() {
    this.add('rekognition:GetFaceSearch');
    return this;
  }

  /**
   * Gets the label detection results of a Rekognition Video analysis started by StartLabelDetection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetLabelDetection.html
   */
  public getLabelDetection() {
    this.add('rekognition:GetLabelDetection');
    return this;
  }

  /**
   * Gets information about people detected within a video.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetPersonTracking.html
   */
  public getPersonTracking() {
    this.add('rekognition:GetPersonTracking');
    return this;
  }

  /**
   * Gets segment detection results for a Rekognition Video analysis started by StartSegmentDetection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetSegmentDetection.html
   */
  public getSegmentDetection() {
    this.add('rekognition:GetSegmentDetection');
    return this;
  }

  /**
   * Gets text detection results for a Rekognition Video analysis started by StartTextDetection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_GetTextDetection.html
   */
  public getTextDetection() {
    this.add('rekognition:GetTextDetection');
    return this;
  }

  /**
   * Detects faces in the input image and adds them to the specified collection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_IndexFaces.html
   */
  public indexFaces() {
    this.add('rekognition:IndexFaces');
    return this;
  }

  /**
   * Returns a list of collection IDs in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_ListCollections.html
   */
  public listCollections() {
    this.add('rekognition:ListCollections');
    return this;
  }

  /**
   * Returns metadata for faces in the specified collection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_ListFaces.html
   */
  public listFaces() {
    this.add('rekognition:ListFaces');
    return this;
  }

  /**
   * Gets a list of stream processors that you have created with CreateStreamProcessor.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_ListStreamProcessors.html
   */
  public listStreamProcessors() {
    this.add('rekognition:ListStreamProcessors');
    return this;
  }

  /**
   * Returns an array of celebrities recognized in the input image.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_RecognizeCelebrities.html
   */
  public recognizeCelebrities() {
    this.add('rekognition:RecognizeCelebrities');
    return this;
  }

  /**
   * For a given input face ID, searches the specified collection for matching faces.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_SearchFaces.html
   */
  public searchFaces() {
    this.add('rekognition:SearchFaces');
    return this;
  }

  /**
   * For a given input image, first detects the largest face in the image, and then searches the specified collection for matching faces.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_SearchFacesByImage.html
   */
  public searchFacesByImage() {
    this.add('rekognition:SearchFacesByImage');
    return this;
  }

  /**
   * Starts asynchronous recognition of celebrities in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartCelebrityRecognition.html
   */
  public startCelebrityRecognition() {
    this.add('rekognition:StartCelebrityRecognition');
    return this;
  }

  /**
   * Starts asynchronous detection of explicit or suggestive adult content in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartContentModeration.html
   */
  public startContentModeration() {
    this.add('rekognition:StartContentModeration');
    return this;
  }

  /**
   * Starts asynchronous detection of faces in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartFaceDetection.html
   */
  public startFaceDetection() {
    this.add('rekognition:StartFaceDetection');
    return this;
  }

  /**
   * Starts the asynchronous search for faces in a collection that match the faces of persons detected in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartFaceSearch.html
   */
  public startFaceSearch() {
    this.add('rekognition:StartFaceSearch');
    return this;
  }

  /**
   * Starts asynchronous detection of labels in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartLabelDetection.html
   */
  public startLabelDetection() {
    this.add('rekognition:StartLabelDetection');
    return this;
  }

  /**
   * Starts the asynchronous tracking of persons in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartPersonTracking.html
   */
  public startPersonTracking() {
    this.add('rekognition:StartPersonTracking');
    return this;
  }

  /**
   * Starts the deployment of a model version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartProjectVersion.html
   */
  public startProjectVersion() {
    this.add('rekognition:StartProjectVersion');
    return this;
  }

  /**
   * Starts asynchronous detection of segments in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartSegmentDetection.html
   */
  public startSegmentDetection() {
    this.add('rekognition:StartSegmentDetection');
    return this;
  }

  /**
   * Starts processing a stream processor.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartStreamProcessor.html
   */
  public startStreamProcessor() {
    this.add('rekognition:StartStreamProcessor');
    return this;
  }

  /**
   * Starts asynchronous detection of text in a video.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StartTextDetection.html
   */
  public startTextDetection() {
    this.add('rekognition:StartTextDetection');
    return this;
  }

  /**
   * Stops a deployed model version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StopProjectVersion.html
   */
  public stopProjectVersion() {
    this.add('rekognition:StopProjectVersion');
    return this;
  }

  /**
   * Stops a running stream processor that was created by CreateStreamProcessor.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/API_StopStreamProcessor.html
   */
  public stopStreamProcessor() {
    this.add('rekognition:StopStreamProcessor');
    return this;
  }

  /**
   * Adds a resource of type collection to the statement
   *
   * https://docs.aws.amazon.com/rekognition/latest/dg/howitworks-collection.html
   *
   * @param collectionId - Identifier for the collectionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCollection(collectionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rekognition:${Region}:${Account}:collection/${CollectionId}';
    arn = arn.replace('${CollectionId}', collectionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type streamprocessor to the statement
   *
   * @param streamprocessorId - Identifier for the streamprocessorId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onStreamprocessor(streamprocessorId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rekognition:${Region}:${Account}:streamprocessor/${StreamprocessorId}';
    arn = arn.replace('${StreamprocessorId}', streamprocessorId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * @param projectName - Identifier for the projectName.
   * @param creationTimestamp - Identifier for the creationTimestamp.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProject(projectName: string, creationTimestamp: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rekognition:${Region}:${Account}:project/${ProjectName}/${CreationTimestamp}';
    arn = arn.replace('${ProjectName}', projectName);
    arn = arn.replace('${CreationTimestamp}', creationTimestamp);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type projectversion to the statement
   *
   * @param projectName - Identifier for the projectName.
   * @param versionName - Identifier for the versionName.
   * @param creationTimestamp - Identifier for the creationTimestamp.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProjectversion(projectName: string, versionName: string, creationTimestamp: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:rekognition:${Region}:${Account}:project/${ProjectName}/version/${VersionName}/${CreationTimestamp}';
    arn = arn.replace('${ProjectName}', projectName);
    arn = arn.replace('${VersionName}', versionName);
    arn = arn.replace('${CreationTimestamp}', creationTimestamp);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
