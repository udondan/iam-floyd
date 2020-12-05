import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [polly](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpolly.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Polly extends PolicyStatement {
  public servicePrefix = 'polly';

  /**
   * Statement provider for service [polly](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonpolly.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permissions to delete the specified pronunciation lexicon stored in an AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/polly/latest/dg/API_DeleteLexicon.html
   */
  public toDeleteLexicon() {
    this.to('polly:DeleteLexicon');
    return this;
  }

  /**
   * Grants permissions to describe the list of voices that are available for use when requesting speech synthesis
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/polly/latest/dg/API_DescribeVoices.html
   */
  public toDescribeVoices() {
    this.to('polly:DescribeVoices');
    return this;
  }

  /**
   * Grants permissions to retrieve the content of the specified pronunciation lexicon stored in an AWS Region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/polly/latest/dg/API_GetLexicon.html
   */
  public toGetLexicon() {
    this.to('polly:GetLexicon');
    return this;
  }

  /**
   * Grants permissions to get information about specific speech synthesis task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/polly/latest/dg/API_GetSpeechSynthesisTask.html
   */
  public toGetSpeechSynthesisTask() {
    this.to('polly:GetSpeechSynthesisTask');
    return this;
  }

  /**
   * Grants permisions to list the pronunciation lexicons stored in an AWS Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/polly/latest/dg/API_ListLexicons.html
   */
  public toListLexicons() {
    this.to('polly:ListLexicons');
    return this;
  }

  /**
   * Grants permissions to list requested speech synthesis tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/polly/latest/dg/API_ListSpeechSynthesisTasks.html
   */
  public toListSpeechSynthesisTasks() {
    this.to('polly:ListSpeechSynthesisTasks');
    return this;
  }

  /**
   * Grants permissions to store a pronunciation lexicon in an AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/polly/latest/dg/API_PutLexicon.html
   */
  public toPutLexicon() {
    this.to('polly:PutLexicon');
    return this;
  }

  /**
   * Grants permissions to synthesize long inputs to the provided S3 location
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/polly/latest/dg/API_StartSpeechSynthesisTask.html
   */
  public toStartSpeechSynthesisTask() {
    this.to('polly:StartSpeechSynthesisTask');
    return this;
  }

  /**
   * Grants permissions to synthesize speech
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html
   */
  public toSynthesizeSpeech() {
    this.to('polly:SynthesizeSpeech');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "DeleteLexicon",
      "PutLexicon",
      "StartSpeechSynthesisTask"
    ],
    "List": [
      "DescribeVoices",
      "ListLexicons",
      "ListSpeechSynthesisTasks"
    ],
    "Read": [
      "GetLexicon",
      "GetSpeechSynthesisTask",
      "SynthesizeSpeech"
    ]
  };

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
