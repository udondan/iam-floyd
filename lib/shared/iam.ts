// ugly hacks ftw!
class Iam {}

try {
  var iam = require('@aws-cdk/aws-iam');
} catch (e) {
  var iam: any = Iam;
}

export default iam;
