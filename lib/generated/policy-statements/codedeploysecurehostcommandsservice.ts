import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [codedeploy-commands-secure](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodedeploysecurehostcommandsservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CodedeployCommandsSecure extends PolicyStatement {
  public servicePrefix = 'codedeploy-commands-secure';

  /**
   * Statement provider for service [codedeploy-commands-secure](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodedeploysecurehostcommandsservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to get deployment specification
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/userguide/vpc-endpoints.html#vpc-codedeploy-agent-configuration
   */
  public toGetDeploymentSpecification() {
    return this.to('GetDeploymentSpecification');
  }

  /**
   * Grants permission to request host agent commands
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/userguide/vpc-endpoints.html#vpc-codedeploy-agent-configuration
   */
  public toPollHostCommand() {
    return this.to('PollHostCommand');
  }

  /**
   * Grants permission to mark host agent commands acknowledged
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/userguide/vpc-endpoints.html#vpc-codedeploy-agent-configuration
   */
  public toPutHostCommandAcknowledgement() {
    return this.to('PutHostCommandAcknowledgement');
  }

  /**
   * Grants permission to mark host agent commands completed
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/userguide/vpc-endpoints.html#vpc-codedeploy-agent-configuration
   */
  public toPutHostCommandComplete() {
    return this.to('PutHostCommandComplete');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetDeploymentSpecification',
      'PollHostCommand'
    ],
    Write: [
      'PutHostCommandAcknowledgement',
      'PutHostCommandComplete'
    ]
  };
}
