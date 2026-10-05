// Módulo de Gestión de Inventario de Insumos
const stock = { cafe: 10, leche: 8, azucar: 15 };

function descontarInsumo(insumo, cantidad) {
  if (stock[insumo] === undefined) throw new Error('Insumo no existe');
  if (stock[insumo] < cantidad) throw new Error('Stock insuficiente');
  stock[insumo] -= cantidad;
  return stock[insumo];
}

module.exports = { stock, descontarInsumo };