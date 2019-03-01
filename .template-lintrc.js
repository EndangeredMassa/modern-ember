'use strict';

module.exports = {
  extends: 'recommended',
  rules: {
    'no-implicit-this': true,
    'attribute-indentation': {
      'element-open-end': 'last-attribute',
      'mustache-open-end': 'last-attribute'
    },
    'eol-last': 'never',
    'link-href-attributes': true,
    'no-action-modifiers': true,
    'no-extra-mut-helper-argument': true,
    'no-trailing-spaces': true,
    'template-length': false,
    'deprecated-each-syntax': true,
    'deprecated-inline-view-helper': true,
    'deprecated-render-helper': true
  }
};
