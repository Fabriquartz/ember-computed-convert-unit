import Ember from 'ember';

const MILLIMETERS = 1;
const CENTIMETERS = 10 * MILLIMETERS;
const METERS      = 100 * CENTIMETERS;
const KILOMETERS  = 1000 * METERS;

const MILLISECONDS = 1;
const SECONDS      = 1000 * MILLISECONDS;
const MINUTES      = 60 * SECONDS;
const HOURS        = 60 * MINUTES;

const KILOS = 1;
const TONS  = 1000 * KILOS;

const FEET = 1;
const TEU  = 20 * FEET;

const CONVERSION_MAP = {
  // Please sort on alphabetic order, thank you!
  'centimeters': {
    'kilometers':    (value) => value * CENTIMETERS / KILOMETERS,
    'meters':        (value) => value * CENTIMETERS / METERS,
    'millimeters':   (value) => value * CENTIMETERS
  },
  'feet': {
    'teu':           (value) => value / TEU
  },
  'hours': {
    'milliseconds':  (value) => value * HOURS,
    'minutes':       (value) => value * HOURS / MINUTES,
    'seconds':       (value) => value * HOURS / SECONDS
  },
  'kilometers': {
    'centimeters':   (value) => value * KILOMETERS / CENTIMETERS,
    'meters':        (value) => value * KILOMETERS / METERS,
    'millimeters':   (value) => value * KILOMETERS
  },
  'kilos': {
    'tons':          (value) => value / TONS
  },
  'meters': {
    'centimeters':   (value) => value * METERS / CENTIMETERS,
    'kilometers':    (value) => value * METERS / KILOMETERS,
    'millimeters':   (value) => value * METERS
  },
  'millimeters': {
    'centimeters':   (value) => value / CENTIMETERS,
    'kilometers':    (value) => value / KILOMETERS,
    'meters':        (value) => value / METERS
  },
  'milliseconds': {
    'hours':         (value) => value / HOURS,
    'minutes':       (value) => value / MINUTES,
    'seconds':       (value) => value / SECONDS
  },
  'minutes': {
    'hours':         (value) => value * MINUTES / HOURS,
    'milliseconds':  (value) => value * MINUTES,
    'seconds':       (value) => value * MINUTES / SECONDS
  },
  'seconds': {
    'milliseconds':  (value) => value * SECONDS,
    'minutes':       (value) => value * SECONDS / MINUTES,
    'hours':         (value) => value * SECONDS / HOURS
  },
  'teu': {
    'feet':          (value) => value * TEU
  },
  'tons': {
    'kilos':         (value) => value * TONS
  }
};

export default function(value, fromUnit, toUnit) {
  if (value == null) { return value; }
  if (typeof value !== 'number') {
    throw new Ember.Error('Input to conversion function must be a number');
  }

  if (CONVERSION_MAP[fromUnit] && CONVERSION_MAP[fromUnit][toUnit]) {
    return CONVERSION_MAP[fromUnit][toUnit](value);
  } else {
    throw new Ember.Error('Conversion from ' + fromUnit + ' to ' +
                                               toUnit + ' not available');
  }
}
