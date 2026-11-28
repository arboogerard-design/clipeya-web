// precios.js · Clipeya · ÚNICO sitio con los precios de la web. Para cambiar un precio, se cambia aquí y nada más.
// Tarifas 2026 definitivas: PDF de Andy 26-nov 21:20 (+30 %, confirmado por Gerard), TARIFAS_2120.txt. Puestas por el P2 el 27-nov-2026.
// Formato: inicio = instalación (null si no hay); mes = cuota mensual (null si no hay); desde = enseña «desde»; nota = línea pequeña.
window.PRECIOS = {
  ESTADO: 'tarifas 2120 (PDF de Andy 26-nov 21:20)',
  web: { nombre: 'Web élite', inicio: 639, mes: 159, desde: true, nota: 'hosting, copias, seguridad, actualizaciones, 2 cambios al mes e informe mensual. Unos 5 € al día' },
  tienda: { nombre: 'Tienda online élite (Shopify)', inicio: 509, mes: 129, desde: true, nota: 'actualizaciones de tema y apps, revisión del pago, 2 cambios al mes e informe de ventas. Menos de 4,5 € al día' },
  landing: { nombre: 'Landing de venta extra', inicio: 119, mes: 39, desde: false, nota: '' },
  embudo: { nombre: 'Embudo de venta', inicio: 249, mes: 99, desde: false, nota: '' },
  embudo_completo: { nombre: 'Embudo completo', inicio: 639, mes: 259, desde: false, nota: 'Todo junto, sale más barato' },
  bot_whatsapp: { nombre: 'Bot de WhatsApp', inicio: 119, mes: 69, desde: false, nota: '' },
  manychat: { nombre: 'ManyChat Instagram', inicio: 119, mes: 69, desde: false, nota: '' },
  whatsapp_ia: { nombre: 'WhatsApp con IA', inicio: 500, mes: 99, desde: false, nota: '' },
  diagnostico: { nombre: 'Diagnóstico', inicio: 97, mes: null, desde: false, nota: '' },
  emails: { nombre: 'Emails automáticos', inicio: 199, mes: 69, desde: false, nota: '' },
  crm: { nombre: 'CRM y panel', inicio: 249, mes: 119, desde: false, nota: '' },
  agente_ia: { nombre: 'Agente de IA a medida', inicio: 1029, mes: 329, desde: false, nota: '' },
  fotos_ia: { nombre: 'Fotos de producto IA', inicio: null, mes: 259, desde: false, nota: 'sin alta' },
  videos_ia: { nombre: 'Vídeos IA', inicio: null, mes: 459, desde: false, nota: 'sin alta' },
  redes_ia: { nombre: 'Redes con IA', inicio: null, mes: 509, desde: false, nota: 'sin alta' },
  anuncios_meta: { nombre: 'Anuncios de Meta', inicio: null, mes: 639, desde: false, nota: 'sin alta' },
  redes_reels: { nombre: 'Redes con IA · Reels', inicio: null, mes: 899, desde: false, nota: 'sin alta' },
};
