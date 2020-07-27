import * as statement from '..';

/**
 * Allows stopping EC2 instance only for the user who started them
 *
 * @param tag The tag name, where the user information will be stored - default: `Owner`
 */

export function allowEc2InstanceDeleteByOwner(tag?: string) {
  const tagName = tag || 'Owner';
  return [
    new statement.Ec2()
      .allow()
      .startInstances()
      .ifAwsRequestTag(tagName, '${aws:username}'),
    new statement.Ec2()
      .allow()
      .stopInstances()
      .ifResourceTag(tagName, '${aws:username}'),
  ];
}
