import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service comprehendmedical
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_comprehendmedical.html
 */
export class Comprehendmedical extends PolicyStatement {
  public servicePrefix = 'comprehendmedical';
  public actions : Actions = {
    "DetectEntities": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_hera_DetectEntities.html",
      "description": "Inspects the specified text for the specified type of entities and returns information about them.",
      "accessLevel": "Read"
    },
    "DetectPHI": {
      "url": "https://docs.aws.amazon.com/comprehend/latest/dg/API_hera_DetectPHI.html",
      "description": "Inspects the specified text for PHI entities and returns information about them.",
      "accessLevel": "Read"
    }
  };

  /**
   * Inspects the specified text for the specified type of entities and returns information about them.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_hera_DetectEntities.html
   */
  public detectEntities () {
    this.add('comprehendmedical:DetectEntities');
    return this;
  }

  /**
   * Inspects the specified text for PHI entities and returns information about them.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_hera_DetectPHI.html
   */
  public detectPHI () {
    this.add('comprehendmedical:DetectPHI');
    return this;
  }
}
