import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [comprehendmedical](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_comprehendmedical.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Comprehendmedical extends PolicyStatement {
  public servicePrefix = 'comprehendmedical';
  protected actionList: Actions = {
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
  public resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [comprehendmedical](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_comprehendmedical.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Inspects the specified text for the specified type of entities and returns information about them.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_hera_DetectEntities.html
   */
  public detectEntities() {
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
  public detectPHI() {
    this.add('comprehendmedical:DetectPHI');
    return this;
  }
}
