import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import {percySnapshot} from 'ember-percy';

function screenshot(path) {
  test(`screenshot ${path}`, async function(assert) {
    await visit(path);
    await percySnapshot(assert);
    assert.expect(0);
  });
}

module('Acceptance | visual regression testing', function(hooks) {
  setupApplicationTest(hooks);

  screenshot('/jobs/1');
});
