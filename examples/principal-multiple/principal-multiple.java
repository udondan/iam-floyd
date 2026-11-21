import com.udondan.iamFloyd.cdk.statement.Sts;
import java.util.List;

class ExamplePrincipalMultiple {
  static Object example() {
    // doc-start
    Sts s1 = new Sts()
        .allow()
        .toAssumeRole()
        .forAccount("1234567890", "0987654321");

    // when you already have a list:
    String[] accounts = {"1234567890", "0987654321"};
    Sts s2 = new Sts()
        .allow()
        .toAssumeRole()
        .forAccount(accounts);

    Sts s3 = new Sts()
        .allow()
        .toAssumeRole()
        .forUser("1234567890", "Bob", "John");

    // when you already have a list:
    String[] users = {"Bob", "John"};
    Sts s4 = new Sts()
        .allow()
        .toAssumeRole()
        .forUser("1234567890", users);
    // doc-end
    return List.of(s1, s2, s3, s4);
  }
}
