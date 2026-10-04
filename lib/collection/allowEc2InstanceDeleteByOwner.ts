import { Ec2 } from '../generated/policy-statements/ec2';

/**
 * Allows stopping EC2 instance only for the user who started them
 *
 * @param tag The tag name, where the user information will be stored - default: `Owner`
 */

export function allowEc2InstanceDeleteByOwner(tag?: string): Ec2[] {
  const tagName = tag ?? 'Owner';
  return [
    new Ec2()
      .allow()
      .toStartInstances()
      .ifAwsRequestTag(tagName, '${aws:username}'),
    new Ec2()
      .allow()
      .toStopInstances()
      .ifResourceTag(tagName, '${aws:username}'),
  ];
}
