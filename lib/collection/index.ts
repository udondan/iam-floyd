import { Ec2 } from '../generated/policy-statements/ec2';
import { allowEc2InstanceDeleteByOwner } from './allowEc2InstanceDeleteByOwner';

export class Collection {
  public allowEc2InstanceDeleteByOwner(): Ec2[] {
    return allowEc2InstanceDeleteByOwner();
  }
}
