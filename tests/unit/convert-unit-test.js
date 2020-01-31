import { setOwner }     from '@ember/application';
import EmberObject      from '@ember/object';
import { setupTest }    from 'ember-qunit';
import convertUnit      from 'ember-railio-convert-unit';
import { module, test } from 'qunit';

module('Unit | Convert unit', function(hooks) {
  setupTest(hooks);

  module('Converts (old style Ember)', function() {
    let Rock = EmberObject.extend({
      millimeters: null,
      centimeters: convertUnit('millimeters', 'millimeters', 'centimeters')
    });

    test('converts the units', function(assert) {
      let rock = Rock.create({ millimeters: 25 });
      setOwner(rock, this.owner);

      assert.equal(rock.get('centimeters'), 2.5);
    });

    test('can set the converted unit', function(assert) {
      let rock = Rock.create({ millimeters: 1000 });
      setOwner(rock, this.owner);

      rock.set('centimeters', 4.8);
      assert.equal(rock.get('millimeters'), 48);
    });

    Rock = EmberObject.extend({
      millimeters: null,
      centimeters: convertUnit('millimeters', 'mm', 'cm')
    });

    test('converts the units', function(assert) {
      let rock = Rock.create({ millimeters: 25 });
      setOwner(rock, this.owner);

      assert.equal(rock.get('centimeters'), 2.5);
    });

    test('can set the converted unit', function(assert) {
      let rock = Rock.create({ millimeters: 1000 });
      setOwner(rock, this.owner);

      rock.set('centimeters', 4.8);
      assert.equal(rock.get('millimeters'), 48);
    });
  }),
  module('Converts (new style Ember)', function() {
    class Paper extends EmberObject {
        millimeters;

        @convertUnit('millimeters', 'millimeters', 'cm')
        centimeters;
    }

    test('Get converted', function(assert) {
      let paper = Paper.create({ millimeters: 25 });
      setOwner(paper, this.owner);

      assert.equal(paper.get('centimeters'), 2.5);
    });

    test('Set converted', function(assert) {
      let paper = Paper.create({ millimeters: 1000 });
      setOwner(paper, this.owner);

      paper.set('centimeters', 4.8);
      assert.equal(paper.get('millimeters'), 48);
    });
  }),
  module(
      'Custom converts can be provided via environment/config',
      function() {
        class Scissor extends EmberObject {
          feet;

          @convertUnit('feet', 'feet', 'TEU')
          TEU;
        }

        test('Get converted', function(assert) {
          this.owner.resolveRegistration('config:environment').computedConvertUnit = {
            customConversions: [
              {
                from: 'ft',
                to:   'TEU',
                convert(value) {
                  return value / 20;
                }
              }
            ]
          };

          let scissor = Scissor.create({ feet: 40 });
          setOwner(scissor, this.owner);

          assert.equal(scissor.get('TEU'), 2);
        });

        test('Set converted', function(assert) {
          this.owner.resolveRegistration('config:environment').computedConvertUnit = {
            customConversions: [
              {
                from: 'TEU',
                to:   'ft',
                convert(value) {
                  return value * 20;
                }
              }
            ]
          };

          let scissor = Scissor.create({ feet: 20 });
          setOwner(scissor, this.owner);

          scissor.set('TEU', 2);
          assert.equal(scissor.get('feet'), 40);
        });
      }
  );
});
