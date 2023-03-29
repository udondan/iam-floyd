import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [datazone](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondatazone.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Datazone extends PolicyStatement {
  public servicePrefix = 'datazone';

  /**
   * Statement provider for service [datazone](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondatazone.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to retrieve information about an Amazon DataZone project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toGetProject() {
    return this.to('GetProject');
  }

  /**
   * Grants permission to retrieve configuration information for an Amazon DataZone project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toGetProjectConfiguration() {
    return this.to('GetProjectConfiguration');
  }

  /**
   * Grants permission to retrieve credentials for an Amazon DataZone project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toGetProjectCredentials() {
    return this.to('GetProjectCredentials');
  }

  /**
   * Grants permission to retrieve all Amazon DataZone projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toListProjects() {
    return this.to('ListProjects');
  }

  /**
   * Grants permission to retrieve all Amazon DataZone projects for a user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toListUserProjects() {
    return this.to('ListUserProjects');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetProject',
      'GetProjectConfiguration',
      'GetProjectCredentials'
    ],
    List: [
      'ListProjects',
      'ListUserProjects'
    ]
  };
}
