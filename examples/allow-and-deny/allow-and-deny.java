import com.udondan.iamFloyd.cdk.statement.Ec2;
import java.util.List;

class ExampleAllowAndDeny {
  static Object example() {
    // doc-start
    Ec2 s1 = new Ec2()
        .allow()
        .toStartInstances();

    Ec2 s2 = new Ec2()
        .deny()
        .toStopInstances();
    // doc-end
    return List.of(s1, s2);
  }
}
