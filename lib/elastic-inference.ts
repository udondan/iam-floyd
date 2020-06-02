import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service elastic-inference
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticinference.html
 */
export class ElasticInference extends PolicyStatement {
    public servicePrefix = 'elastic-inference';
    public actions : Actions = { "Connect": { "url": "", "description": "Connects customer to Elastic Inference accelerator", "accessLevel": "Write", "resourceTypes": { "accelerator": { "required": true } } } };

    /**
     * Connects customer to Elastic Inference accelerator
     *
     * Access Level: Write
     *
     *
     */
    public connect () {
        this.add('elastic-inference:Connect');
        return this;
    }
}
