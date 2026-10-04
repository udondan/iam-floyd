package software.amazon.awscdk.services.iam;

import com.udondan.iamFloyd.PolicyStatement;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * The part of the PolicyDocument of the AWS CDK that the examples use. Builds the policy document
 * like the TypeScript examples of iam-floyd do.
 */
public final class PolicyDocument {
  private final List<? extends PolicyStatement<?>> statements;

  private PolicyDocument(List<? extends PolicyStatement<?>> statements) {
    this.statements = statements;
  }

  /** The policy document. */
  public Map<String, Object> toJSON() {
    List<Object> statements = new ArrayList<>();
    for (PolicyStatement<?> statement : this.statements) {
      statements.add(statement.toJSON());
    }
    Map<String, Object> document = new LinkedHashMap<>();
    document.put("Version", "2012-10-17");
    document.put("Statement", statements);
    return document;
  }

  /** Builds a PolicyDocument. */
  public static final class Builder {
    private List<? extends PolicyStatement<?>> statements = new ArrayList<>();

    private Builder() {}

    /** A new builder. */
    public static Builder create() {
      return new Builder();
    }

    /** Sets the statements. */
    public Builder statements(List<? extends PolicyStatement<?>> statements) {
      this.statements = statements;
      return this;
    }

    /** The PolicyDocument. */
    public PolicyDocument build() {
      return new PolicyDocument(statements);
    }
  }
}
