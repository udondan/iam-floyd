import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [serviceextract](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmicroserviceextractorfor.net.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Serviceextract extends PolicyStatement {
  public servicePrefix = 'serviceextract';

  /**
   * Statement provider for service [serviceextract](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmicroserviceextractorfor.net.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to get required configuration for the AWS Microservice Extractor for .NET desktop client
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/microservice-extractor/latest/userguide/what-is-microservice-extractor.html
   */
  public toGetConfig() {
    return this.to('GetConfig');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetConfig'
    ]
  };
}
