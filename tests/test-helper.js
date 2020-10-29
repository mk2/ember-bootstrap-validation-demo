import Application from 'ember-bootstrap-validation-demo/app';
import config from 'ember-bootstrap-validation-demo/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
