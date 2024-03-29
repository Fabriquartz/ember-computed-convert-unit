import { setApplication } from '@ember/test-helpers';
import Application from 'dummy/app';
import config from 'dummy/config/environment';
import { start } from 'ember-qunit';
import { setup } from 'qunit-dom';
import * as QUnit from 'qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
