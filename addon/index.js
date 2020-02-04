import { getOwner }           from '@ember/application';
import { get, set, computed } from '@ember/object';
import { isBlank }            from '@ember/utils';
import convert                from 'convert-units';

function formatType(type) {
  let convertObject = convert()
    .list()
    .find(({ singular, plural }) => {
      return (
        singular.toLowerCase() === type.toLowerCase() ||
        plural.toLowerCase() === type.toLowerCase()
      );
    });

  return convertObject ? convertObject.abbr : type;
}

function _convert(scope, value, orginalType, convertType) {
  if (isBlank(value)) {
    return value;
  }

  let conversions =
    getOwner(scope).resolveRegistration('util:computed-convert-unit') || [];

  let customConvert = conversions.find(({ from, to }) => {
    return from === orginalType && to === convertType;
  });

  return customConvert
    ? customConvert.convert(value)
    : convert(value)
        .from(orginalType)
        .to(convertType);
}

export default function(propertyPath, orginalType, convertType) {
  orginalType = formatType(orginalType);
  convertType = formatType(convertType);

  return computed(propertyPath, {
    get() {
      let value = get(this, propertyPath);
      return _convert(this, value, orginalType, convertType);
    },

    set(key, value) {
      let convertedValue = _convert(this, value, convertType, orginalType);
      set(this, propertyPath, convertedValue);

      return value;
    }
  });
}
