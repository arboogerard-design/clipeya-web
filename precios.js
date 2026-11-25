// precios.js · Clipeya v8 · ÚNICO sitio con los precios de la web. Para cambiar un precio, se cambia aquí y nada más.
// Ofertas v14 (el PC1, 25-nov-2026): solo 4 ofertas con precio, «desde» y + IVA. Lo demás: «Pídenos presupuesto».
// Gerard aún no está convencido: para cambiar un precio se toca SOLO este fichero. ESTADO es interno (no se enseña en la web).
// Formato: inicio = pago único (null si no hay); mes = cuota mensual (null si no hay); nota = línea pequeña debajo del precio.
// La página rellena cada [data-precio="clave"].
window.PRECIOS = {
  ESTADO: 'por confirmar',
  sistema:  { nombre: 'Sistema a medida',               inicio: 4900, mes: 149, nota: 'cuidado mensual; alcance por escrito' },
  local:    { nombre: 'Web + Google + Reseñas',          inicio: 690,  mes: 49 },
  tienda:   { nombre: 'Tienda Esencial',                 inicio: 1190, mes: 149, nota: 'cuidado y mejoras cada mes' },
  anuncios: { nombre: 'Anuncios + creativos IA',         inicio: null, mes: 590,  nota: 'y 190 € de alta' },
};
