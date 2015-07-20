import qUnit  from 'qunit';
import { test } from 'ember-qunit';

import convertUnit from 'ember-railio-convert-unit';

qUnit.module('Unit: Convert Unit');

test('Kilos to Tons', function(assert) {
  assert.equal(convertUnit(2500, 'kilos', 'tons'), 2.5);
});

test('Tons to Kilos', function(assert) {
  assert.equal(convertUnit(2.5, 'tons', 'kilos'), 2500);
});
