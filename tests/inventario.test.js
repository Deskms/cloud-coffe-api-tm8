const test = require('node:test');
const assert = require('node:assert');
const { descontarInsumo } = require('../src/inventario');

test('descuenta insumo correctamente', () => {
  assert.strictEqual(descontarInsumo('cafe', 2), 8);
});