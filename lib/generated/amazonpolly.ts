import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [polly](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpolly.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Polly extends PolicyStatement {
  public servicePrefix = 'polly';
  protected actionList: Actions = {
    "DeleteLexicon": {
      "url": "https://docs.aws.amazon.com/polly/latest/dg/API_DeleteLexicon.html",
      "description": "Deletes the specified pronunciation lexicon stored in an AWS Region",
      "accessLevel": "Write",
      "resourceTypes": {
        "lexicon": {
          "required": true
        }
      }
    },
    "DescribeVoices": {
      "url": "https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html",
      "description": "Returns the list of voices that are available for use when requesting speech synthesis.",
      "accessLevel": "List"
    },
    "GetLexicon": {
      "url": "https://docs.aws.amazon.com/polly/latest/dg/API_GetLexicon.html",
      "description": "Returns the content of the specified pronunciation lexicon stored in an AWS Region.",
      "accessLevel": "Read",
      "resourceTypes": {
        "lexicon": {
          "required": true
        }
      }
    },
    "GetSpeechSynthesisTask": {
      "url": "https://docs.aws.amazon.com/polly/latest/dg/API_GetSpeechSynthesisTask.html",
      "description": "Enables the user to get information about specific speech synthesis task.",
      "accessLevel": "Read"
    },
    "ListLexicons": {
      "url": "https://docs.aws.amazon.com/polly/latest/dg/API_ListLexicons.html",
      "description": "Returns a list of pronunciation lexicons stored in an AWS Region.",
      "accessLevel": "List"
    },
    "ListSpeechSynthesisTasks": {
      "url": "https://docs.aws.amazon.com/polly/latest/dg/API_ListSpeechSynthesisTasks.html",
      "description": "Enables the user to list requested speech synthesis tasks.",
      "accessLevel": "List"
    },
    "PutLexicon": {
      "url": "https://docs.aws.amazon.com/polly/latest/dg/API_PutLexicon.html",
      "description": "Stores a pronunciation lexicon in an AWS Region.",
      "accessLevel": "Write"
    },
    "StartSpeechSynthesisTask": {
      "url": "https://docs.aws.amazon.com/polly/latest/dg/API_StartSpeechSynthesisTask.html",
      "description": "Enables the user to synthesize long inputs to provided S3 location.",
      "accessLevel": "Write",
      "dependentActions": [
        "s3:PutObject"
      ],
      "resourceTypes": {
        "lexicon": {
          "required": false
        }
      }
    },
    "SynthesizeSpeech": {
      "url": "https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html",
      "description": "Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes.",
      "accessLevel": "Read",
      "resourceTypes": {
        "lexicon": {
          "required": false
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "lexicon": {
      "name": "lexicon",
      "url": "https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html",
      "arn": "arn:${Partition}:polly:${Region}:${Account}:lexicon/${LexiconName}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [polly](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpolly.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Deletes the specified pronunciation lexicon stored in an AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/polly/latest/dg/API_DeleteLexicon.html
   */
  public toDeleteLexicon() {
    this.add('polly:DeleteLexicon');
    return this;
  }

  /**
   * Returns the list of voices that are available for use when requesting speech synthesis.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html
   */
  public toDescribeVoices() {
    this.add('polly:DescribeVoices');
    return this;
  }

  /**
   * Returns the content of the specified pronunciation lexicon stored in an AWS Region.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/polly/latest/dg/API_GetLexicon.html
   */
  public toGetLexicon() {
    this.add('polly:GetLexicon');
    return this;
  }

  /**
   * Enables the user to get information about specific speech synthesis task.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/polly/latest/dg/API_GetSpeechSynthesisTask.html
   */
  public toGetSpeechSynthesisTask() {
    this.add('polly:GetSpeechSynthesisTask');
    return this;
  }

  /**
   * Returns a list of pronunciation lexicons stored in an AWS Region.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/polly/latest/dg/API_ListLexicons.html
   */
  public toListLexicons() {
    this.add('polly:ListLexicons');
    return this;
  }

  /**
   * Enables the user to list requested speech synthesis tasks.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/polly/latest/dg/API_ListSpeechSynthesisTasks.html
   */
  public toListSpeechSynthesisTasks() {
    this.add('polly:ListSpeechSynthesisTasks');
    return this;
  }

  /**
   * Stores a pronunciation lexicon in an AWS Region.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/polly/latest/dg/API_PutLexicon.html
   */
  public toPutLexicon() {
    this.add('polly:PutLexicon');
    return this;
  }

  /**
   * Enables the user to synthesize long inputs to provided S3 location.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/polly/latest/dg/API_StartSpeechSynthesisTask.html
   */
  public toStartSpeechSynthesisTask() {
    this.add('polly:StartSpeechSynthesisTask');
    return this;
  }

  /**
   * Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html
   */
  public toSynthesizeSpeech() {
    this.add('polly:SynthesizeSpeech');
    return this;
  }

  /**
   * Adds a resource of type lexicon to the statement
   *
   * https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html
   *
   * @param lexiconName - Identifier for the lexiconName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onLexicon(lexiconName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:polly:${Region}:${Account}:lexicon/${LexiconName}';
    arn = arn.replace('${LexiconName}', lexiconName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
