'use strict';

/*
 * STYLELINT Configuration file
 */
module.exports = {
  extends: [
    'stylelint-config-standard-scss',
  ],
  plugins: [
    "stylelint-no-unsupported-browser-features"
  ],
  rules: {
    "plugin/no-unsupported-browser-features": [true, {
      "severity": "warning",
      "ignorePartialSupport": false
    }]
  },
  'overrides': []
};