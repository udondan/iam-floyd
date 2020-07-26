import * as statement from '..';

/**
 * Allows stopping EC2 instance only for the user who started them
 *
 * TODO: describe tag param, default value
 */

export function allowEc2InstanceDeleteByOwner(tag?: string) {
  const tagName = tag || 'Owner';

  return [
    new statement.Ec2().allow().startInstances().if('StringEquals', {
      // TODO: use the tag instead of hardcoded 'Owner'
      'aws:RequestTag/Owner': '${aws:username}',
    }),
    new statement.Ec2()
      .allow()
      .stopInstances()
      .ifResourceTag(tagName, '${aws:username}'),
  ];
}
