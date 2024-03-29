[![Build Status](https://travis-ci.com/Fabriquartz/ember-computed-convert-unit.svg?branch=master)](https://travis-ci.com/Fabriquartz/ember-computed-convert-unit)
[![Ember Observer Score](https://emberobserver.com/badges/ember-computed-convert-unit.svg)](https://emberobserver.com/addons/ember-computed-convert-unit)
[![Maintainability](https://api.codeclimate.com/v1/badges/858b6cc9bbf3cc61a2e6/maintainability)](https://codeclimate.com/github/Fabriquartz/ember-computed-convert-unit/maintainability)

ember-computed-convert-unit
==============================================================================

Provides unit conversion as a computed property wrapper around [convert-units](https://github.com/ben-ng/convert-units)

Compatibility
------------------------------------------------------------------------------
ember-computed-convert-unit is made for ember 3.12 and above, but probably works for older versions too.

* Ember.js v3.20 or above
* Ember CLI v3.20 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-computed-convert-unit
```

Usage
------------------------------------------------------------------------------

convertUnit is a computed property that you can use in the same way as you normally would do. It works for both 'classic' Ember and Ember Octane. To indicate a unit, you can use both the full name and the abbreviation of a unit. (e.g. 'kg'/'kilograms', 'ft'/'feet')

```js
import Model       from '@ember-data/model';
import convertUnit from 'ember-computed-convert-unit'

export default Model.extend({
  lengthInMilimeters:  attr('number'),
  lengthInCentimeters: convertUnit('lengthInMilimeters', 'milimeters', 'centimeters')
})
```
```js
import Model       from '@ember-data/model';
import convertUnit from 'ember-computed-convert-unit'

export default class Paper extends Model {
  @attr('number')
  lengthInMilimeters;

  @convertUnit('lengthInMilimeters', 'milimeters', 'centimeters')
  lengthInCentimeters;
}
```
Available conversions
------------------------------------------------------------------------------
This addon uses [convert-units](https://github.com/ben-ng/convert-units) to perform the actual conversion. Check its documentation for available conversions.

Custom conversions
------------------------------------------------------------------------------
It's possible to add (or "overwrite") a conversion as shown in the example below. If you add a conversion for a type that's included in the library, you must use the abbreviation. In the example below feet/ft already exists as a type and TEU doesn't.
```js
// utils/computed-convert-unit.js
export default [
  {
    from: 'ft',
    to:   'TEU',
    convert(value) {
      return value / 20;
    }
  },
  {
    from: 'TEU',
    to:   'ft',
    convert(value) {
      return value * 20;
    }
  }
];


// models/rock.js
import Model       from '@ember-data/model';
import convertUnit from 'ember-computed-convert-unit'

export default class Rock extends Model {
  @attr('number')
  lengthInFeet;

  @convertUnit('lengthInMilimeters', 'feet', 'TEU')
  volumeInTeu;
}
```
Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
