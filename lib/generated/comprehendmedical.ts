import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [comprehendmedical](https://docs.aws.amazon.com/service-authorization/latest/reference/list_comprehendmedical.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Comprehendmedical extends PolicyStatement {
  public servicePrefix = 'comprehendmedical';

  /**
   * Statement provider for service [comprehendmedical](https://docs.aws.amazon.com/service-authorization/latest/reference/list_comprehendmedical.html).
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
  public toDetectEntities() {
    this.to('comprehendmedical:DetectEntities');
    return this;
  }

  /**
   * Inspects the specified text for PHI entities and returns information about them.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/comprehend/latest/dg/API_hera_DetectPHI.html
   */
  public toDetectPHI() {
    this.to('comprehendmedical:DetectPHI');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "DetectEntities",
      "DetectPHI"
    ]
  };
}

export type ComprehendmedicalActionsRead = 'DetectEntities' | 'DetectPHI';
export type ComprehendmedicalActions = ComprehendmedicalActionsRead;
