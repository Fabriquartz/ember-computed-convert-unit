import qUnit  from 'qunit';
import { test } from 'ember-qunit';

import convertUnit from 'ember-railio-convert-unit';

qUnit.module('Unit | Convert Unit');

test('null value', function(assert) {
  assert.equal(convertUnit(null, 'kilos', 'tons'), null);
});

test('not a number', function(assert) {
  assert.throws(() => { convertUnit('String', 'kilos', 'tons'); },
    /Input to conversion function must be a number/,
    'raised error when not a number');
});

test('not existing conversion', function(assert) {
  assert.throws(() => { convertUnit(250, 'measurement', 'tons'); },
    /not available/,
    'raised error when unit not available');
});

test('millimeters to centimeters', function(assert) {
  assert.equal(convertUnit(25, 'millimeters', 'centimeters'), 2.5);
});

test('millimeters to meters', function(assert) {
  assert.equal(convertUnit(2500, 'millimeters', 'meters'), 2.5);
});

test('millimeters to kilometers', function(assert) {
  assert.equal(convertUnit(2500000, 'millimeters', 'kilometers'), 2.5);
});

test('centimeters to millimeters', function(assert) {
  assert.equal(convertUnit(2.5, 'centimeters', 'millimeters'), 25);
});

test('centimeters to meters', function(assert) {
  assert.equal(convertUnit(250, 'centimeters', 'meters'), 2.5);
});

test('centimeters to kilometers', function(assert) {
  assert.equal(convertUnit(250000, 'centimeters', 'kilometers'), 2.5);
});

test('meters to millimeters', function(assert) {
  assert.equal(convertUnit(2.5, 'meters', 'millimeters'), 2500);
});

test('meters to centimeters', function(assert) {
  assert.equal(convertUnit(2.5, 'meters', 'centimeters'), 250);
});

test('meters to kilometers', function(assert) {
  assert.equal(convertUnit(2500, 'meters', 'kilometers'), 2.5);
});

test('kilometers to millimeters', function(assert) {
  assert.equal(convertUnit(2.5, 'kilometers', 'millimeters'), 2500000);
});

test('kilometers to centimeters', function(assert) {
  assert.equal(convertUnit(2.5, 'kilometers', 'centimeters'), 250000);
});

test('kilometers to meters', function(assert) {
  assert.equal(convertUnit(2.5, 'kilometers', 'meters'), 2500);
});

test('feet to teu', function(assert) {
  assert.equal(convertUnit(200, 'feet', 'teu'), 10);
});

test('teu to feet', function(assert) {
  assert.equal(convertUnit(10, 'teu', 'feet'), 200);
});

test('milliseconds to seconds', function(assert) {
  assert.equal(convertUnit(2500, 'milliseconds', 'seconds'), 2.5);
});

test('milliseconds to minutes', function(assert) {
  assert.equal(convertUnit(150000, 'milliseconds', 'minutes'), 2.5);
});

test('milliseconds to hours', function(assert) {
  assert.equal(convertUnit(9000000, 'milliseconds', 'hours'), 2.5);
});

test('seconds to milliseconds', function(assert) {
  assert.equal(convertUnit(2.5, 'seconds', 'milliseconds'), 2500);
});

test('seconds to minutes', function(assert) {
  assert.equal(convertUnit(150, 'seconds', 'minutes'), 2.5);
});

test('seconds to hours', function(assert) {
  assert.equal(convertUnit(9000, 'seconds', 'hours'), 2.5);
});

test('minutes to milliseconds', function(assert) {
  assert.equal(convertUnit(2.5, 'minutes', 'milliseconds'), 150000);
});

test('minutes to seconds', function(assert) {
  assert.equal(convertUnit(2.5, 'minutes', 'seconds'), 150);
});

test('minutes to hours', function(assert) {
  assert.equal(convertUnit(150, 'minutes', 'hours'), 2.5);
});

test('hours to milliseconds', function(assert) {
  assert.equal(convertUnit(2.5, 'hours', 'milliseconds'), 9000000);
});

test('hours to seconds', function(assert) {
  assert.equal(convertUnit(2.5, 'hours', 'seconds'), 9000);
});

test('hours to minutes', function(assert) {
  assert.equal(convertUnit(2.5, 'hours', 'minutes'), 150);
});

test('Kilos to Tons', function(assert) {
  assert.equal(convertUnit(2500, 'kilos', 'tons'), 2.5);
});

test('Tons to Kilos', function(assert) {
  assert.equal(convertUnit(2.5, 'tons', 'kilos'), 2500);
});
