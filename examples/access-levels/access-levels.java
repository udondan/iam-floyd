import com.udondan.iamFloyd.cdk.statement.S3;
import java.util.List;

class ExampleAccessLevels {
  static Object example() {
    // doc-start
    S3 s1 = new S3()
        .deny()
        .allPermissionManagementActions();

    S3 s2 = new S3()
        .allow()
        .allListActions()
        .allReadActions();
    // doc-end
    return List.of(s1, s2);
  }
}
