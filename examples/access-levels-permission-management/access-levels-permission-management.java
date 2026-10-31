import com.udondan.iamFloyd.cdk.statement.S3;

class ExampleAccessLevelsPermissionManagement {
  static Object example() {
    // doc-start
    S3 statement = new S3()
        .allow()
        .allPermissionManagementActions();
    // doc-end
    return statement;
  }
}
