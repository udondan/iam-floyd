import json
import iam_floyd as statement


def get_statement():
    # doc-start
    my_statement = statement.Ec2()
    my_statement.allow()
    my_statement.to_start_instances()
    my_statement.to_stop_instances()
    # doc-end
    return my_statement.to_json()


pretty = json.dumps(get_statement(), indent=4, sort_keys=True)
print(pretty)
