import json
import iam_floyd as statement


def get_policy():
    # doc-start
    policy = {
        'Version': '2012-10-17',
        'Statement': [
            # allow all CFN actions
            statement.Cloudformation() \
            .allow() \
            .all_actions() \
            .to_json(),
            # allow access to the CDK staging bucket
            statement.All() \
            .allow() \
            .all_actions() \
            .if_aws_called_via('cloudformation.amazonaws.com') \
            .to_json(),
            # allow access to the CDK staging bucket
            statement.S3() \
            .allow() \
            .all_actions() \
            .on('arn:aws:s3:::cdktoolkit-stagingbucket-*') \
            .to_json(),
            # even when triggered via CFN, do not allow modifications of the
            #  account
            statement.Account() \
            .deny() \
            .all_permission_management_actions() \
            .all_write_actions() \
            .to_json(),
            # even when triggered via CFN, do not allow modifications of the
            #  organization
            statement.Organizations() \
            .deny() \
            .all_permission_management_actions() \
            .all_write_actions() \
            .to_json()
        ]
    }

    # doc-end
    return policy


pretty = json.dumps(get_policy(), indent=4, sort_keys=True)
print(pretty)
