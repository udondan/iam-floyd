import com.udondan.iamFloyd.Collection;

class ExampleCollection {
  static Object example() {
    // doc-start
    var statements = new Collection().allowEc2InstanceDeleteByOwner();
    // doc-end
    return statements;
  }
}
