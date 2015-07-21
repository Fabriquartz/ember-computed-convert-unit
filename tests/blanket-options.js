/* globals blanket, module */

const options = {
  modulePrefix: 'ember-railio-convert-unit',
  filter: '//.*ember-railio-convert-unit/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['json'],
    autostart: true
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
