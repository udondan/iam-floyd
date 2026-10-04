/* global PolicyConverter */

var preferredLanguage = 'TypeScript';
var preferredVariant = 'CDK';
var preferredImports = 'Yes';

var selectFilled = false;
var selectExtensionLoaded = false;

// the services with their classes and actions, see lib/generator/emit/converter.ts
var services = null;

$(function () {
  activateNavItem();
  populateManagedPolicies();
  $.getJSON('_static/policy-converter/services.json', function (data) {
    services = data;
    convertInputPolicy();
  });
  $('#managedPolicies').change(loadManagedPolicy);
  $(':radio, #policyConverterInput').change(function () {
    preferredVariant = $("input[name='policyConverterVariant']:checked").val();
    preferredLanguage = $(
      "input[name='policyConverterLanguage']:checked",
    ).val();
    preferredImports = $("input[name='policyConverterImports']:checked").val();
    convertInputPolicy();
  });

  $('head').append(
    '<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/devicon.min.css">',
    '<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/chosen/1.8.7/chosen.min.css">',
    '<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/labelauty/1.1.4/jquery-labelauty.css" integrity="sha512-NUD74ySmYmRWEO5NXZ2EU0FfFhCIVhsxSoi3i4fybJYVhr5DkV+gdyEBd8tO0Pl/CspRwllRSAaUG7theVh1dA==" crossorigin="anonymous" />',
  );

  $.getScript(
    '//cdnjs.cloudflare.com/ajax/libs/chosen/1.8.7/chosen.jquery.min.js',
    function () {
      selectExtensionLoaded = true;
      beautifySelect();
    },
  );

  $.getScript(
    '//cdnjs.cloudflare.com/ajax/libs/labelauty/1.1.4/jquery-labelauty.min.js',
    function () {
      $('input[type=radio]').labelauty({
        label: true,
      });
    },
  );
});

function beautifySelect() {
  if (!selectExtensionLoaded || !selectFilled) {
    return;
  }
  $('#managedPolicies').chosen({
    search_contains: true,
    placeholder_text_single: 'Select policy to import',
  });

  // fallback for when chosen did not apply (e.g. mobile)
  const currentWidth = $('#managedPolicies').width();
  const parentWidth = $('#policy-converter').width();
  if (currentWidth > parentWidth) {
    $('#managedPolicies').width('100%');
  }
}

function convertInputPolicy() {
  setErrors([]);
  let input = $('#policyConverterInput').val();
  if (!input.length || services === null) {
    return;
  }
  try {
    var parsed = JSON.parse(input);
  } catch {
    setErrors(['Invalid input policy']);
    return;
  }

  const result = PolicyConverter.convert(
    parsed,
    services,
    preferredLanguage,
    preferredVariant,
  );
  setErrors(result.errors);
  if (!result.code.length) {
    return;
  }
  $('#policyConverterOutput').val(
    PolicyConverter.render(result, preferredImports == 'Yes'),
  );
  $('#policyConverterResult').show();
}

function setErrors(errors) {
  $('#policyConverterError').empty();
  for (const error of errors) {
    $('#policyConverterError').append($('<div>').text(error));
  }
}

function populateManagedPolicies() {
  $.getJSON('_static/managed-policies/index.json', function (data) {
    data.sort();
    $.each(data, function (_, value) {
      $('#managedPolicies').append(new Option(value, value));
    });
    selectFilled = true;
    beautifySelect();
  });
}

function loadManagedPolicy() {
  const file =
    '_static/managed-policies/' + $('#managedPolicies').val() + '.json';
  $.ajax({
    url: file,
    dataType: 'text',
    success: function (data) {
      $('#policyConverterInput').val(data);
      convertInputPolicy();
    },
  });
}

function activateNavItem() {
  $('div[role="navigation"] a:contains("Policy Converter")')
    .addClass('current')
    .parent()
    .addClass('current');
}
