const test = require('node:test');
const assert = require('node:assert');
const { modulos } = require('../src/app');

test('la lista de módulos existe', () => {
  assert.ok(Array.isArray(modulos));
});