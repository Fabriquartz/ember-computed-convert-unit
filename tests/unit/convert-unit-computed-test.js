import qUnit  from 'qunit';
import { test } from 'ember-qunit';

import Ember from 'ember';
import convertUnitComputed from 'ember-railio-convert-unit/computed';

qUnit.module('Unit | Convert Unit Computed Property');

const Rock = Ember.Object.extend({
  kilos: null,
  tons:  convertUnitComputed('kilos', 'kilos', 'tons')
});

test('converts the units', function(assert) {
  const rock = Rock.create({ kilos: 2500 });
  assert.equal(rock.get('tons'), 2.5);
});

test('can set the converted unit', function(assert) {
  const rock = Rock.create({ kilos: 1000 });
  rock.set('tons', 4.8);
  assert.equal(rock.get('kilos'), 4800);
});
