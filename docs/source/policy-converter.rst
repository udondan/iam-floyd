Policy Converter
================

.. include:: _links.rst

Use this tool to convert any IAM policy in JSON format to IAM Floyd code.

.. raw:: html

    <fieldset>
      <legend>Import AWS managed policy</legend>
      <select id="managedPolicies"></select>
      <input type="button" id="policyConverterImport" value="Import">
    </fieldset>
    <textarea id="policyConverterInput"></textarea>
    <div id="policyConverterError"></div>

    <input type="button" class="convertButton" value="JavaScript">
    <input type="button" class="convertButton" value="Python">

    <textarea id="policyConverterOutput"></textarea>
    <script src="_static/js/policy-converter.js"></script>
