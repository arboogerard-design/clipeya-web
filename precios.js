// precios.js · Clipeya v8 · ÚNICO sitio con los precios de la web. Para cambiar un precio, se cambia aquí y nada más.
// Ofertas v14 (el PC1, 25-nov-2026): solo 4 ofertas con precio, «desde» y + IVA. Lo demás: «Pídenos presupuesto».
// Gerard aún no está convencido: para cambiar un precio se toca SOLO este fichero. ESTADO es interno (no se enseña en la web).
// Formato: inicio = pago único (null si no hay); mes = cuota mensual (null si no hay); nota = línea pequeña debajo del precio.
// La página rellena cada [data-precio="clave"].
window.PRECIOS = {
  ESTADO: 'v15 25-nov (coordinador): socio recurrente; fuente ENTREGAS_25NOV_AGENCIAS/PRECIOS_CLIPEYA_FABLE.md',
  diagnostico: { nombre: 'Diagnóstico',          inicio: 97,   mes: null, nota: 'plan de 90 días' },
  socio:       { nombre: 'Socio de crecimiento', inicio: null, mes: 1190, nota: '590 € de alta · mínimo 3 meses' },
  proyecto:    { nombre: 'Proyecto suelto',      inicio: 690,  mes: null, desde: true, nota: 'según alcance' },
};
