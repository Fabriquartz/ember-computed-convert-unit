import convertUnit from 'ember-railio-convert-unit';
import computed    from 'ember-computed';

export default function(prop, fromUnit, toUnit) {
  return computed(prop, {
    get() {
      return convertUnit(this.get(prop), fromUnit, toUnit);
    },

    set(key, value) {
      let converted = convertUnit(value, toUnit, fromUnit);
      this.set(prop, converted);
      return value;
    }
  });
}
