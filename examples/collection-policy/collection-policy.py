import json
import iam_floyd as statement

currentdir = os.path.dirname(os.path.abspath(
    inspect.getfile(inspect.currentframe())))
helperDir = '%s/../../helper/python' % currentdir
sys.path.insert(0, helperDir)

test = importlib.import_module('python_test')
deploy = getattr(test, 'deploy')


def get_policy():
    # doc-start
    statements = statement.Collection().allow_ec2_instance_delete_by_owner()
    policy = {
            'Version': '2012-10-17',
            'Statement': list(map(lambda x: x.to_json(), statements)),
    }
    # doc-end
    return policy


policy = get_policy()
pretty = json.dumps(policy, indent=4)
print(pretty)

deploy(policy.get('Statement'))
