import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [qapps](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonqbusinessqapps.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Qapps extends PolicyStatement {
  public servicePrefix = 'qapps';

  /**
   * Statement provider for service [qapps](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonqbusinessqapps.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate Q App with a user in Q Business application
   *
   * Access Level: Write
   */
  public toAssociateQAppWithUser() {
    return this.to('AssociateQAppWithUser');
  }

  /**
   * Grants permission to copy Q App in Q Business application
   *
   * Access Level: Write
   */
  public toCopyQApp() {
    return this.to('CopyQApp');
  }

  /**
   * Grants permission to create a library item in Q Business application
   *
   * Access Level: Write
   */
  public toCreateLibraryItem() {
    return this.to('CreateLibraryItem');
  }

  /**
   * Grants permission to create a library item review in Q Business application
   *
   * Access Level: Write
   */
  public toCreateLibraryItemReview() {
    return this.to('CreateLibraryItemReview');
  }

  /**
   * Grants permission to create Q App in Q Business application
   *
   * Access Level: Write
   */
  public toCreateQApp() {
    return this.to('CreateQApp');
  }

  /**
   * Grants permission to subscribe to a Q App event bus topic in Q Business application
   *
   * Access Level: Write
   */
  public toCreateSubscriptionToken() {
    return this.to('CreateSubscriptionToken');
  }

  /**
   * Grants permission to delete a library item in Q Business application
   *
   * Access Level: Write
   */
  public toDeleteLibraryItem() {
    return this.to('DeleteLibraryItem');
  }

  /**
   * Grants permission to delete Q App in Q Business application
   *
   * Access Level: Write
   */
  public toDeleteQApp() {
    return this.to('DeleteQApp');
  }

  /**
   * Grants permission to disassociate Q App with a user in Q Business application
   *
   * Access Level: Write
   */
  public toDisassociateQAppFromUser() {
    return this.to('DisassociateQAppFromUser');
  }

  /**
   * Grants permission to get a library item in Q Business application
   *
   * Access Level: Read
   */
  public toGetLibraryItem() {
    return this.to('GetLibraryItem');
  }

  /**
   * Grants permission to get Q App in Q Business application
   *
   * Access Level: Read
   */
  public toGetQApp() {
    return this.to('GetQApp');
  }

  /**
   * Grants permission to import a document to Q App in Q Business application
   *
   * Access Level: Write
   */
  public toImportDocumentToQApp() {
    return this.to('ImportDocumentToQApp');
  }

  /**
   * Grants permission to import a document to Q App session in Q Business application
   *
   * Access Level: Write
   */
  public toImportDocumentToQAppSession() {
    return this.to('ImportDocumentToQAppSession');
  }

  /**
   * Grants permission to list library items in Q Business application
   *
   * Access Level: List
   */
  public toListLibraryItems() {
    return this.to('ListLibraryItems');
  }

  /**
   * Grants permission to list Q Apps in Q Business application
   *
   * Access Level: List
   */
  public toListQApps() {
    return this.to('ListQApps');
  }

  /**
   * Grants permission to predict problem statement from conversation log in Q Business application
   *
   * Access Level: Write
   */
  public toPredictProblemStatementFromConversation() {
    return this.to('PredictProblemStatementFromConversation');
  }

  /**
   * Grants permission to predict Q App metadata from problem statement in Q Business application
   *
   * Access Level: Write
   */
  public toPredictQAppFromProblemStatement() {
    return this.to('PredictQAppFromProblemStatement');
  }

  /**
   * Grants permission to start Q App session in Q Business application
   *
   * Access Level: Write
   */
  public toStartQAppSession() {
    return this.to('StartQAppSession');
  }

  /**
   * Grants permission to stop Q App session in Q Business application
   *
   * Access Level: Write
   */
  public toStopQAppSession() {
    return this.to('StopQAppSession');
  }

  /**
   * Grants permission to update a library item in Q Business application
   *
   * Access Level: Write
   */
  public toUpdateLibraryItem() {
    return this.to('UpdateLibraryItem');
  }

  /**
   * Grants permission to update Q App in Q Business application
   *
   * Access Level: Write
   */
  public toUpdateQApp() {
    return this.to('UpdateQApp');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateQAppWithUser',
      'CopyQApp',
      'CreateLibraryItem',
      'CreateLibraryItemReview',
      'CreateQApp',
      'CreateSubscriptionToken',
      'DeleteLibraryItem',
      'DeleteQApp',
      'DisassociateQAppFromUser',
      'ImportDocumentToQApp',
      'ImportDocumentToQAppSession',
      'PredictProblemStatementFromConversation',
      'PredictQAppFromProblemStatement',
      'StartQAppSession',
      'StopQAppSession',
      'UpdateLibraryItem',
      'UpdateQApp'
    ],
    Read: [
      'GetLibraryItem',
      'GetQApp'
    ],
    List: [
      'ListLibraryItems',
      'ListQApps'
    ]
  };

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/create-app.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onApplication(applicationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:qbusiness:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationId }`);
  }
}
