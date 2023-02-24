import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [serviceextract](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmicroserviceextractorfor.net.html).
 *
 * @param options - Options for the statement
 */
export class Serviceextract extends PolicyStatement {
  public servicePrefix = 'serviceextract';

  /**
   * Statement provider for service [serviceextract](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmicroserviceextractorfor.net.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
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
