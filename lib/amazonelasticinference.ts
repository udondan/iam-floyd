import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service elastic-inference
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticinference.html
 */
export class ElasticInference extends PolicyStatement {
  public servicePrefix = 'elastic-inference';
  public actions : Actions = {
    "Connect": {
      "url": "",
      "description": "Connects customer to Elastic Inference accelerator",
      "accessLevel": "Write",
      "resourceTypes": {
        "accelerator": {
          "required": true
        }
      }
    }
  };
  public resourceTypes : ResourceTypes = {
    "accelerator": {
      "name": "accelerator",
      "arn": "arn:${Partition}:elastic-inference:${Region}:${Account}:elastic-inference-accelerator/${AcceleratorId}",
      "conditionKeys": []
    }
  };

  /**
   * Connects customer to Elastic Inference accelerator
   *
   * Access Level: Write
   */
  public connect () {
    this.add('elastic-inference:Connect');
    return this;
  }
}
