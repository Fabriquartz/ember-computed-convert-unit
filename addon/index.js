import Ember from 'ember';

const CONVERSION_MAP = {
  // Please sort on alphabetic order, thank you!
  'centimeters': {
    'kilometers':    (value) => value / 100000.0,
    'meters':        (value) => value / 100.0,
    'millimeters':   (value) => value * 10.0
  },
  'feet': {
    'teu':           (value) => value / 20.0
  },
  'hours': {
    'milliseconds':  (value) => value * 3600000,
    'minutes':       (value) => value * 60.0,
    'seconds':       (value) => value * 3600.0
  },
  'kilometers': {
    'centimeters':   (value) => value * 100000,
    'meters':        (value) => value * 1000,
    'millimeters':   (value) => value * 1000000
  },
  'kilos': {
    'tons':          (value) => value / 1000.0
  },
  'meters': {
    'centimeters':   (value) => value * 100,
    'kilometers':    (value) => value / 1000,
    'millimeters':   (value) => value * 1000
  },
  'millimeters': {
    'centimeters':   (value) => value / 10.0,
    'kilometers':    (value) => value / 1000000.0,
    'meters':        (value) => value / 1000.0
  },
  'milliseconds': {
    'hours':         (value) => value / 3600000.0,
    'minutes':       (value) => value / 60000.0,
    'seconds':       (value) => value / 1000.0
  },
  'minutes': {
    'hours':         (value) => value / 60.0,
    'milliseconds':  (value) => value * 60000.0,
    'seconds':       (value) => value * 60.0
  },
  'seconds': {
    'milliseconds':  (value) => value * 1000,
    'minutes':       (value) => value / 60,
    'hours':         (value) => value / 3600
  },
  'teu': {
    'feet':          (value) => value * 20.0
  },
  'tons': {
    'kilos':         (value) => value * 1000
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
