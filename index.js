'use strict';

module.exports = {
  name: require('./package').name,

  included() {
    this._super.included.apply(this, arguments);
    let app = this._findHost();

    app.import('node_modules/convert-units/lib/index.js', {
      using: [{ transformation: 'cjs', as: 'convert-units' }],
    });
  },
};
