import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service deepcomposer
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdeepcomposer.html
 */
export class Deepcomposer extends PolicyStatement {
    public servicePrefix = 'deepcomposer';
    public actions : Actions = { "AssociateCoupon": { "url": "", "description": "Associates a DeepComposer coupon (or DSN) with the account associated with the sender of the request.", "accessLevel": "Write" }, "CreateAudio": { "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html", "description": "Creates an audio file by converting the midi composition into a wav or mp3 file.", "accessLevel": "Write", "resourceTypes": { "composition": { "required": true } } }, "CreateComposition": { "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html", "description": "Creates a multi-track midi composition.", "accessLevel": "Write" }, "CreateModel": { "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html", "description": "Starts creating/training a generative-model that is able to perform inference against the user-provided piano-melody to create a multi-track midi composition.", "accessLevel": "Write" }, "DeleteComposition": { "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html", "description": "Deletes the composition.", "accessLevel": "Write", "resourceTypes": { "composition": { "required": true } } }, "DeleteModel": { "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html", "description": "Deletes the model.", "accessLevel": "Write", "resourceTypes": { "model": { "required": true } } }, "GetComposition": { "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html", "description": "Returns information about the composition.", "accessLevel": "Read", "resourceTypes": { "composition": { "required": true } } }, "GetModel": { "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html", "description": "Returns information about the model.", "accessLevel": "Read", "resourceTypes": { "model": { "required": true } } }, "GetSampleModel": { "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html", "description": "Returns information about the sample/pre-trained DeepComposer model.", "accessLevel": "Read" }, "ListCompositions": { "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html", "description": "Returns a list of all the compositions owned by the sender of the request.", "accessLevel": "List" }, "ListModels": { "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html", "description": "Returns a list of all the models owned by the sender of the request.", "accessLevel": "List" }, "ListSampleModels": { "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html", "description": "Returns a list of all the sample/pre-trained models provided by the DeepComposer service.", "accessLevel": "List" }, "ListTrainingTopics": { "url": "", "description": "Returns a list of all the training options or topic for creating/training a model.", "accessLevel": "List" }, "UpdateComposition": { "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html", "description": "Modifies the mutable properties associated with a composition.", "accessLevel": "Write", "resourceTypes": { "composition": { "required": true } } }, "UpdateModel": { "url": "https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html", "description": "Modifies the mutable properties associated with a model.", "accessLevel": "Write", "resourceTypes": { "model": { "required": true } } } };

    /**
     * Associates a DeepComposer coupon (or DSN) with the account associated with the sender of the request.
     *
     * Access Level: Write
     *
     *
     */
    public associateCoupon () {
        this.add('deepcomposer:AssociateCoupon');
        return this;
    }

    /**
     * Creates an audio file by converting the midi composition into a wav or mp3 file.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
     */
    public createAudio () {
        this.add('deepcomposer:CreateAudio');
        return this;
    }

    /**
     * Creates a multi-track midi composition.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
     */
    public createComposition () {
        this.add('deepcomposer:CreateComposition');
        return this;
    }

    /**
     * Starts creating/training a generative-model that is able to perform inference against the user-provided piano-melody to create a multi-track midi composition.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html
     */
    public createModel () {
        this.add('deepcomposer:CreateModel');
        return this;
    }

    /**
     * Deletes the composition.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
     */
    public deleteComposition () {
        this.add('deepcomposer:DeleteComposition');
        return this;
    }

    /**
     * Deletes the model.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html
     */
    public deleteModel () {
        this.add('deepcomposer:DeleteModel');
        return this;
    }

    /**
     * Returns information about the composition.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
     */
    public getComposition () {
        this.add('deepcomposer:GetComposition');
        return this;
    }

    /**
     * Returns information about the model.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html
     */
    public getModel () {
        this.add('deepcomposer:GetModel');
        return this;
    }

    /**
     * Returns information about the sample/pre-trained DeepComposer model.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
     */
    public getSampleModel () {
        this.add('deepcomposer:GetSampleModel');
        return this;
    }

    /**
     * Returns a list of all the compositions owned by the sender of the request.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
     */
    public listCompositions () {
        this.add('deepcomposer:ListCompositions');
        return this;
    }

    /**
     * Returns a list of all the models owned by the sender of the request.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html
     */
    public listModels () {
        this.add('deepcomposer:ListModels');
        return this;
    }

    /**
     * Returns a list of all the sample/pre-trained models provided by the DeepComposer service.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
     */
    public listSampleModels () {
        this.add('deepcomposer:ListSampleModels');
        return this;
    }

    /**
     * Returns a list of all the training options or topic for creating/training a model.
     *
     * Access Level: List
     *
     *
     */
    public listTrainingTopics () {
        this.add('deepcomposer:ListTrainingTopics');
        return this;
    }

    /**
     * Modifies the mutable properties associated with a composition.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
     */
    public updateComposition () {
        this.add('deepcomposer:UpdateComposition');
        return this;
    }

    /**
     * Modifies the mutable properties associated with a model.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html
     */
    public updateModel () {
        this.add('deepcomposer:UpdateModel');
        return this;
    }
}
