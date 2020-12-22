Policy Converter
================

.. include:: _links.rst

Use this tool to convert any IAM policy in JSON format to IAM Floyd code.

.. raw:: html

    <fieldset>
      <legend>Load AWS managed policy</legend>
      <p>
        <select id="managedPolicies"><option></option></select>
      </p>
    </fieldset>
    <fieldset>
      <legend>Input policy</legend>
      <p>
        <textarea id="policyConverterInput"></textarea>
        <div id="policyConverterError"></div>
      </p>
      <p>
        <div class="policyConverterOptionsSection">
          <strong>Language</strong>
          <input type="radio" name="policyConverterLanguage" value="TypeScript" data-labelauty="TypeScript" class="iconTs" checked="checked">
          <input type="radio" name="policyConverterLanguage" value="JavaScript" data-labelauty="JavaScript" class="iconJs">
          <input type="radio" name="policyConverterLanguage" value="Python" data-labelauty="Python" class="iconPy">
        </div>

        <div class="policyConverterOptionsSection">
          <strong>Package Variant</strong>
          <input type="radio" name="policyConverterVariant" value="CDK" data-labelauty="CDK" class="imageOtter" checked="checked">
          <input type="radio" name="policyConverterVariant" value="Standalone" data-labelauty="Standalone" class="imageStandalone">
        </div>

        <div class="policyConverterOptionsSection">
          <strong>Include imports</strong>
          <input type="radio" name="policyConverterImports" value="Yes" data-labelauty="Yes" class="imageYes" checked="checked">
          <input type="radio" name="policyConverterImports" value="No" data-labelauty="No" class="imageNo">
        </div>

      </p>
    </fieldset>
    <fieldset id="policyConverterResult" style="display: none;">
      <legend>IAM Floyd code</legend>
      <p>
        <textarea id="policyConverterOutput"></textarea>
      </p>
    </fieldset>
    <script src="_static/js/policy-converter.js"></script>
