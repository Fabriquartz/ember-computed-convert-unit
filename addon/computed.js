import Ember from 'ember';
import convertUnit from 'ember-railio-convert-unit';

const { computed } = Ember;

export default function(prop, fromUnit, toUnit) {
  return computed(prop, {
    get: function() {
      return convertUnit(this.get(prop), fromUnit, toUnit);
    },

    set: function(key, value) {
      const converted = convertUnit(value, toUnit, fromUnit);
      this.set(prop, converted);
      return converted;
    }
  });
}
