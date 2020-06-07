import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service polly
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpolly.html
 */
export class Polly extends PolicyStatement {
    public servicePrefix = 'polly';
    public actions : Actions = {
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

    /**
     * Deletes the specified pronunciation lexicon stored in an AWS Region
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/polly/latest/dg/API_DeleteLexicon.html
     */
    public deleteLexicon () {
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
    public describeVoices () {
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
    public getLexicon () {
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
    public getSpeechSynthesisTask () {
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
    public listLexicons () {
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
    public listSpeechSynthesisTasks () {
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
    public putLexicon () {
        this.add('polly:PutLexicon');
        return this;
    }

    /**
     * Enables the user to synthesize long inputs to provided S3 location.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/polly/latest/dg/API_StartSpeechSynthesisTask.html
     */
    public startSpeechSynthesisTask () {
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
    public synthesizeSpeech () {
        this.add('polly:SynthesizeSpeech');
        return this;
    }
}
