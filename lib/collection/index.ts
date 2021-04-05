import { Ec2 } from '../generated';

export class Collection {
  public allowEc2InstanceDeleteByOwner() {
    return [new Ec2()];
  }
}
