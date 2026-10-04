// A stand-in for the PolicyDocument of the AWS CDK, which some examples of the docs return.

using System.Collections.Generic;

namespace Amazon.CDK.AWS.IAM;

class PolicyDocumentProps
{
    public IEnumerable<object> Statements { get; set; }
}

class PolicyDocument
{
    private readonly PolicyDocumentProps props;

    public PolicyDocument(PolicyDocumentProps props)
    {
        this.props = props;
    }

    public object ToJSON()
    {
        return new SortedDictionary<string, object>
        {
            ["Statement"] = props.Statements,
            ["Version"] = "2012-10-17",
        };
    }
}
