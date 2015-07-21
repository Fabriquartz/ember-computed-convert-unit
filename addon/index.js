import Ember from 'ember';

const CONVERSION_MAP = {
  // Please sort on alphabetic order, thank you!
  'centimeters': {
    'meters':        function(value) { return value / 100.0; },
    'millimeters':   function(value) { return value * 10.0; }
  },
  'feet': {
    'teu':           function(value) { return value / 20.0; }
  },
  'hours': {
    'milliseconds':  function(value) { return value * 3600000; },
    'minutes':       function(value) { return value * 60.0; },
    'seconds':       function(value) { return value * 3600.0; }
  },
  'kilos': {
    'tons':          function(value) { return value / 1000.0; }
  },
  'meters': {
    'centimeters':   function(value) { return value * 100; },
    'millimeters':   function(value) { return value * 1000; }
  },
  'millimeters': {
    'centimeters':   function(value) { return value / 10.0; },
    'meters':        function(value) { return value / 1000.0; }
  },
  'milliseconds': {
    'hours':         function(value) { return value / 3600000.0; },
    'minutes':       function(value) { return value / 60000.0; },
    'seconds':       function(value) { return value / 1000.0; }
  },
  'minutes': {
    'hours':         function(value) { return value / 60.0; },
    'milliseconds':  function(value) { return value * 60000.0; },
    'seconds':       function(value) { return value * 60.0; }
  },
  'seconds': {
    'milliseconds':  function(value) { return value * 1000; },
    'minutes':       function(value) { return value / 60; },
    'hours':         function(value) { return value / 3600; }
  },
  'teu': {
    'feet':          function(value) { return value * 20.0; }
  },
  'tons': {
    'kilos':         function(value) { return value * 1000; }
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
                                               toUnit + 'not available');
  }
}
