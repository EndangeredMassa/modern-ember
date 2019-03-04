import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import a11yAudit from 'ember-a11y-testing/test-support/audit';

function audit(path) {
  test(`audit ${path}`, async function(assert) {
    await visit(path);
    await a11yAudit();
    assert.expect(0);
  });
}

module('Acceptance | a11y audit', function(hooks) {
  setupApplicationTest(hooks);

  audit('/jobs/1');
});
