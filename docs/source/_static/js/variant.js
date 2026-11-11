/**
 * The switch between the variants, iam-floyd and cdk-iam-floyd, on the pages with content of the
 * variants (`.. variant::` and the examples). The chosen variant applies to all pages and is stored.
 * Without JavaScript, the content of both variants is shown, each with its name.
 */
(function () {
  'use strict';

  var KEY = 'iam-floyd-variant';
  var VARIANTS = ['iam-floyd', 'cdk-iam-floyd'];

  function stored() {
    try {
      var variant = window.localStorage.getItem(KEY);
      return VARIANTS.indexOf(variant) === -1 ? VARIANTS[0] : variant;
    } catch {
      return VARIANTS[0];
    }
  }

  function store(variant) {
    try {
      window.localStorage.setItem(KEY, variant);
    } catch {
      // the choice applies to this page only
    }
  }

  function apply(variant) {
    document.documentElement.setAttribute('data-floyd-variant', variant);
    var buttons = document.querySelectorAll('.floyd-variant-switch button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute(
        'aria-pressed',
        String(buttons[i].getAttribute('data-variant') === variant),
      );
    }
  }

  function createSwitch() {
    var bar = document.createElement('div');
    bar.className = 'floyd-variant-switch';
    bar.setAttribute('role', 'group');
    bar.setAttribute('aria-label', 'Package');
    VARIANTS.forEach(function (variant) {
      var button = document.createElement('button');
      button.type = 'button';
      button.textContent = variant;
      button.setAttribute('data-variant', variant);
      button.addEventListener('click', function () {
        // the position of the button stays, while the content above it changes
        var top = button.getBoundingClientRect().top;
        store(variant);
        apply(variant);
        window.scrollBy(0, button.getBoundingClientRect().top - top);
      });
      bar.appendChild(button);
    });
    return bar;
  }

  function init() {
    if (!document.querySelector('.floyd-variant')) {
      return;
    }
    var heading = document.querySelector('[itemprop="articleBody"] h1');
    if (!heading) {
      return;
    }
    heading.parentNode.insertBefore(createSwitch(), heading.nextSibling);
    apply(document.documentElement.getAttribute('data-floyd-variant'));
  }

  // before the page is rendered, so the content of the other variant doesn't flash
  apply(stored());
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
