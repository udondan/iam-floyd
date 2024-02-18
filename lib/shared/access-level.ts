export type AccessLevelList = Partial<Record<AccessLevel, string[]>>;

/**
 * Access level classifications for the actions in a service
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_understand-policy-summary-access-level-summaries.html#access_policies_access-level
 */
export enum AccessLevel {
  /**
   * Permission to list resources within the service to determine whether an object exists.
   *
   * Actions with this level of access can list objects but cannot see the contents of a resource.
   *
   * For example, the Amazon S3 action `ListBucket` has the List access level.
   */
  list = 'List',

  /**
   * Permission to read but not edit the contents and attributes of resources in the service.
   *
   * For example, the Amazon S3 actions `GetObject` and `GetBucketLocation` have the Read access level.
   */
  read = 'Read',

  /**
   * Permission to create, delete, or modify resources in the service.
   *
   * For example, the Amazon S3 actions `CreateBucket`, `DeleteBucket` and `PutObject` have the Write access level.
   *
   * Write actions might also allow modifying a resource tag. However, an action that allows only changes to tags has the Tagging access level.
   */
  write = 'Write',

  /**
   * Permission to grant or modify resource permissions in the service.
   *
   * For example, most IAM and AWS Organizations actions, as well as actions like the Amazon S3 actions `PutBucketPolicy` and `DeleteBucketPolicy` have the Permissions management access level.
   */
  permissionsManagement = 'Permissions management',

  /**
   * Permission to perform actions that only change the state of resource tags.
   *
   * For example, the IAM actions `TagRole` and `UntagRole` have the Tagging access level because they allow only tagging or untagging a role. However, the `CreateRole` action allows tagging a role resource when you create that role. Because the action does not only add a tag, it has the Write access level.
   */
  tagging = 'Tagging',
}
