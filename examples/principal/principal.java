import com.udondan.iamFloyd.cdk.statement.Sts;
import java.util.List;

class ExamplePrincipal {
  static Object example() {
    // doc-start
    Sts s1 = new Sts()
        .allow()
        .toAssumeRole()
        .forAccount("1234567890");

    Sts s2 = new Sts()
        .allow()
        .toAssumeRoleWithSAML()
        .forService("lambda.amazonaws.com");

    Sts s3 = new Sts()
        .allow()
        .toAssumeRole()
        .forUser("1234567890", "Bob");

    Sts s4 = new Sts()
        .allow()
        .toAssumeRole()
        .forRole("1234567890", "role-name");

    Sts s5 = new Sts()
        .allow()
        .toAssumeRoleWithSAML()
        .forFederatedCognito();

    Sts s6 = new Sts()
        .allow()
        .toAssumeRoleWithSAML()
        .forFederatedAmazon();

    Sts s7 = new Sts()
        .allow()
        .toAssumeRoleWithSAML()
        .forFederatedGoogle();

    Sts s8 = new Sts()
        .allow()
        .toAssumeRoleWithSAML()
        .forFederatedFacebook();

    Sts s9 = new Sts()
        .allow()
        .toAssumeRoleWithSAML()
        .forSaml("1234567890", "saml-provider");

    Sts s10 = new Sts()
        .allow()
        .toAssumeRole()
        .forPublic();

    Sts s11 = new Sts()
        .allow()
        .toAssumeRole()
        .forAssumedRoleSession("123456789", "role-name", "session-name");

    Sts s12 = new Sts()
        .allow()
        .toAssumeRole()
        .forCanonicalUser("userID");

    Sts s13 = new Sts()
        .allow()
        .toAssumeRole()
        .doFor("arn:foo:bar");
    // doc-end
    return List.of(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13);
  }
}
