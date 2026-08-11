import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [sagemaker-data-science-assistant](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsagemakerdatascienceassistant.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SagemakerDataScienceAssistant extends PolicyStatement {
  public servicePrefix = 'sagemaker-data-science-assistant';

  /**
   * Statement provider for service [sagemaker-data-science-assistant](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsagemakerdatascienceassistant.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to start a conversation with SageMaker data science assistant
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker-dsa/APIReference/
   */
  public toSendConversation() {
    return this.to('SendConversation');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'SendConversation'
    ]
  };
}
