export const isEmptyProduct = (product) => {
  if (
    product.categoria &&
    product.marca &&
    product.nombre_producto &&
    product.descuento &&
    product.proveedor &&
    product.cantidad_unidad &&
    product.codigo_producto &&
    product.descripcion
  )
    return true;
  return false;
};
