/* globals module */
'use strict';

module.exports = {
  name: 'ember-computed-convert-unit',

  included() {
    this._super.included.apply(this, arguments);
    let app = this._findHost();

    app.import('node_modules/convert-units/lib/index.js', {
      using: [
        { transformation: 'cjs', as: 'convert-units' }
      ]
    });
  },

  afterInstall() {
    return this.addAddonToProject({
      packages: [{ name: 'ember-cli-cjs-transform' }]
    });
  }
};
