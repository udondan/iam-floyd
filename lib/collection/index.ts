import * as statement from '../generated';

/**
 * Allows stopping EC2 instance only for the user who started them
 *
 * @param tag The tag name, where the user information will be stored - default: `Owner`
 */

export function allowEc2InstanceDeleteByOwner(tag?: string) {
  const tagName = tag || 'Owner';
  console.log(tagName);
  return [new statement.Ec2()];
}

export class Collection {
  public allowEc2InstanceDeleteByOwner() {
    return allowEc2InstanceDeleteByOwner();
  }
}
