import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [apigateway](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_manageamazonapigateway.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Apigateway extends PolicyStatement {
  public servicePrefix = 'apigateway';

  /**
   * Statement provider for service [apigateway](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_manageamazonapigateway.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Used to delete resources
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/API_DELETE.html
   */
  public toDELETE() {
    this.to('apigateway:DELETE');
    return this;
  }

  /**
   * Used to get information about resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/API_GET.html
   */
  public toGET() {
    this.to('apigateway:GET');
    return this;
  }

  /**
   * Used to update resources
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/API_PATCH.html
   */
  public toPATCH() {
    this.to('apigateway:PATCH');
    return this;
  }

  /**
   * Used to create child resources
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/API_POST.html
   */
  public toPOST() {
    this.to('apigateway:POST');
    return this;
  }

  /**
   * Used to update resources (and, although not recommended, can be used to create child resources)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/API_PUT.html
   */
  public toPUT() {
    this.to('apigateway:PUT');
    return this;
  }

  /**
   * Gives WebAcl permissions to WAF
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/WEBACL_SET.html
   */
  public toSetWebACL() {
    this.to('apigateway:SetWebACL');
    return this;
  }

  /**
   * Used to update the Resource Policy for a given API
   *
   * Access Level: Write
   */
  public toUpdateRestApiPolicy() {
    this.to('apigateway:UpdateRestApiPolicy');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "DELETE",
      "PATCH",
      "POST",
      "PUT",
      "SetWebACL",
      "UpdateRestApiPolicy"
    ],
    "Read": [
      "GET"
    ]
  };

  /**
   * Adds a resource of type apigateway-general to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/permissions.html
   *
   * @param apiGatewayResourcePath - Identifier for the apiGatewayResourcePath.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApigatewayGeneral(apiGatewayResourcePath: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:apigateway:${Region}::${ApiGatewayResourcePath}';
    arn = arn.replace('${ApiGatewayResourcePath}', apiGatewayResourcePath);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
