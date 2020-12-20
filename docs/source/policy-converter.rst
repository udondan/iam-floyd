Policy Converter
================

.. include:: _links.rst

Use this tool to convert any IAM policy in JSON format to IAM Floyd code.

.. raw:: html

    <fieldset>
      <legend>Load AWS managed policy</legend>
      <p>
        <select id="managedPolicies"></select>
        <input type="button" id="policyConverterImport" value="Import">
      </p>
    </fieldset>
    <fieldset>
      <legend>Input policy</legend>
      <p>
        <textarea id="policyConverterInput"></textarea>
        <div id="policyConverterError"></div>
      </p>
      <p>
        <input type="button" class="convertButton" value="JavaScript">
        <input type="button" class="convertButton" value="Python">
      </p>
    </fieldset>
    <fieldset>
      <p>
        <textarea id="policyConverterOutput" style="display: none;"></textarea>
      </p>
    </fieldset>
    <script src="_static/js/policy-converter.js"></script>
