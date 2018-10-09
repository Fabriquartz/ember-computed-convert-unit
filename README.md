# ember-railio-convert-unit

An Ember addon for converting units.

## Install

In your application's directory:

```sh
$ ember install ember-railio-convert-unit
```

## Usage

### Available units
These units can be used to pass as fromUnit and toUnit (second and third arguments).

| Unit group  | Available units |
| ----------- | --------------- |
| Weights     | *kilos, tons* |
| Metrics     | *feet, teu* |
| Metrics     | *millimeters, centimeters, meters, kilometers* |
| Time        | *milliseconds, seconds, minutes, hours* |

### Use as a function
```js
import convertUnit from 'ember-railio-convert-unit';

//            convertUnit(value, fromUnit, toUnit)
let meters  = convertUnit(2, 'kilometers', 'meters');
let minutes = convertUnit(2, 'hours', 'minutes');
```

### Use as a computed property
```js
import convertUnitProperty from 'ember-railio-convert-unit';

export default EmberObject.extend({
  //                 convertUnitProperty(propertyName, fromUnit, toUnit)
  lengthInMeters:    convertUnitProperty('lengthInKm', 'kilometers', 'meters'),
  durationInMinutes: convertUnitProperty('duration', 'seconds', 'minutes')
});
```

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
