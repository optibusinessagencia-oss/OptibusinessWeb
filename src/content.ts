// Todos los textos de la web salen de web-optibusiness/copy.md (mismos IDs).
// Para cambiar el titular del hero, cambia HERO_TITLE (variantes A, B y C de copy.md).

export const HERO_VARIANTS = {
  A: 'Estás con una paciente. Ella coge el teléfono y agenda la cita.',
  B: 'Las llamadas que no puedes coger, atendidas y con la cita agendada.',
  C: 'Llamadas y WhatsApp contestados, aunque estés con una paciente.',
} as const;
export const HERO_TITLE: string = HERO_VARIANTS.C;

export const SITE = {
  nombre: 'OptiBusiness',
  telefono: '+34 621 34 64 72',
  demoUrl: 'https://optibusiness-escuchar.netlify.app/?c=demo-aurora',
};

const WA_BASE = 'https://wa.me/34621346472';
const waTexts = {
  menu: 'Hola Hugo, he visto tu web y quiero hablar contigo. Origen - menu',
  hero_prueba: 'Hola Hugo, quiero probar 14 días gratis la recepcionista virtual en mi clínica. Origen - hero-prueba',
  problema: 'Hola Hugo, se me escapan llamadas mientras atiendo y quiero ver qué puedes hacer. Origen - problema',
  como_funciona: 'Hola Hugo, he visto cómo funciona y quiero que me cuentes cómo sería en mi clínica. Origen - como-funciona',
  demo: 'Hola Hugo, la he escuchado y me gustaría oírla con el nombre de mi clínica. Origen - demo',
  whatsapp_servicio: 'Hola Hugo, quiero información sobre el agente de WhatsApp para mi clínica. Origen - whatsapp-servicio',
  prueba: 'Hola Hugo, quiero empezar la prueba gratis de 14 días. Origen - prueba',
  quien: 'Hola Hugo, he leído quién eres y me gustaría hablar contigo. Origen - quien',
  faq_precio: 'Hola Hugo, quiero que me cuentes cuánto costaría para mi clínica. Origen - faq-precio',
  faq_whatsapp: 'Hola Hugo, tengo una duda sobre el agente de WhatsApp. Origen - faq-whatsapp',
  whatsapp_seccion: 'Hola Hugo, he leído lo del agente de WhatsApp y quiero saber cómo funcionaría en mi clínica. Origen - whatsapp-seccion',
  faq: 'Hola Hugo, tengo una pregunta que no he visto en la web. Origen - faq',
  cta_final_prueba: 'Hola Hugo, quiero probar la recepcionista virtual 14 días gratis. Origen - cta-final-prueba',
  cta_final_whatsapp: 'Hola Hugo, quiero información del agente de WhatsApp. Origen - cta-final-whatsapp',
  footer: 'Hola Hugo, te escribo desde el pie de tu web. Origen - footer',
} as const;

export const wa = Object.fromEntries(
  Object.entries(waTexts).map(([k, t]) => [k, `${WA_BASE}?text=${encodeURIComponent(t)}`]),
) as Record<keyof typeof waTexts, string>;

export const NAV = [
  { t: 'Cómo funciona', h: '#como-funciona' },
  { t: 'Escúchala', h: '#demo' },
  { t: 'WhatsApp', h: '#whatsapp' },
  { t: 'Prueba gratis', h: '#prueba' },
  { t: 'Preguntas', h: '#preguntas' },
];

export const HERO = {
  etiqueta: 'Para clínicas estéticas y dentales',
  subtitulo:
    'Soy Hugo. Monto una recepcionista virtual que contesta las llamadas de tu clínica y un agente que responde tu WhatsApp. Los dos agendan la cita directamente en tu agenda.',
  pills: ['Contesta cuando no puedes', 'Agenda la cita sola', '14 días gratis, sin permanencia'],
  nota: 'Solo para clínicas de España.',
  ctaDemo: 'Escucha a la recepcionista',
  ctaPrueba: 'Probar 14 días gratis',
};

export const WA_CHAT = {
  avatar: 'CE',
  nombre: 'Clínica Ejemplo',
  estado: 'en línea',
  aviso: 'Ejemplo ilustrativo. Clínica y paciente ficticias.',
  msgs: [
    { quien: 'paciente', hora: '10:42', texto: 'Hola, buenas. Quería pedir cita para una limpieza dental.' },
    { quien: 'agente', hora: '10:42', texto: 'Hola, soy la recepcionista virtual de Clínica Ejemplo. Claro que sí. ¿Te viene mejor por la mañana o por la tarde?' },
    { quien: 'paciente', hora: '10:43', texto: 'Por la tarde, a partir de las 17:00.' },
    { quien: 'agente', hora: '10:43', texto: 'Tengo el jueves a las 17:30 o el viernes a las 18:00. ¿Cuál prefieres?' },
    { quien: 'paciente', hora: '10:44', texto: 'El jueves. Me llamo Marta.' },
    { quien: 'agente', hora: '10:44', texto: 'Perfecto, Marta. Te he agendado la limpieza dental el jueves a las 17:30 en Clínica Ejemplo. Te esperamos.' },
  ] as { quien: 'paciente' | 'agente'; hora: string; texto: string }[],
  badges: ['Responde al momento', 'Cita en la agenda de la clínica ✓'],
};

export const VOZ = {
  cabecera: 'Clínica Ejemplo · Recepcionista virtual',
  chip: 'Llamada atendida',
  hablando: ['PACIENTE HABLANDO', 'RECEPCIONISTA HABLANDO'],
  aviso: 'Ejemplo ilustrativo. Clínica y paciente ficticias.',
  lineas: [
    { quien: 'PACIENTE', texto: 'Hola, quería pedir cita para una limpieza facial.' },
    { quien: 'RECEPCIONISTA', texto: 'Hola, buenas tardes. Le atiende la recepcionista virtual de Clínica Ejemplo. Claro que sí. ¿Qué día le viene bien?' },
    { quien: 'PACIENTE', texto: 'A ver, el martes por la mañana, si puede ser.' },
    { quien: 'RECEPCIONISTA', texto: 'El martes tengo libre a las 10:00 y a las 11:30. ¿Cuál prefiere?' },
    { quien: 'PACIENTE', texto: 'A las 11:30. Me llamo Lucía.' },
    { quien: 'RECEPCIONISTA', texto: 'Perfecto, Lucía. Le dejo agendada la limpieza facial el martes a las 11:30. Si hay algún cambio, la clínica le avisa. ¿Necesita algo más?' },
  ] as { quien: 'PACIENTE' | 'RECEPCIONISTA'; texto: string }[],
};

export const PROBLEMA = {
  titulo: 'Suena el teléfono y tú estás con una paciente',
  escena:
    'Estás en cabina, con las manos ocupadas. El teléfono suena. No lo coges, porque delante tienes a alguien que ha venido a verte. Cuando sales, hay una llamada perdida de un número que no conoces. Puede ser una paciente nueva. ¿Qué hace si nadie le contesta? Es fácil que llame a otra clínica.',
  cards: [
    { t: 'En cabina o en el gabinete', x: 'Tu recepción no puede atender el mostrador y tres llamadas a la vez.' },
    { t: 'A mediodía y a última hora', x: 'Los huecos en los que el equipo está comiendo, cerrando o con la agenda llena.' },
    { t: 'Fuera de horario', x: 'Quien llama por la noche o en fin de semana también quiere cita.' },
  ],
  pregunta: '¿Y los WhatsApp que llegan mientras trabajas? ¿Cuántos se quedan horas sin respuesta?',
  cierre: 'No sustituyo a tu recepcionista. Cubro los ratos en que está ocupada o no está.',
  cta: 'Cuéntame cómo lo llevas',
};

export const SERVICIOS = {
  titulo: 'Dos formas de que nadie se quede sin respuesta',
  voz: {
    n: '01',
    t: 'Recepcionista virtual (llamadas)',
    x: 'Contesta cuando tú no puedes, habla con la paciente, resuelve dudas básicas y le deja la cita agendada en tu agenda.',
    cta: 'Escúchala',
  },
  wa: {
    n: '02',
    t: 'Agente de WhatsApp (mensajes)',
    x: 'Responde a los mensajes de tus pacientes, resuelve dudas básicas y agenda la cita sin que tengas que parar lo que estás haciendo.',
    cta: 'Pídeme info por WhatsApp',
  },
  nota: 'La prueba gratis de 14 días es de la recepcionista virtual. Del agente de WhatsApp lo hablamos tú y yo.',
};

export const COMO = {
  titulo: 'Así lo dejo funcionando en tu clínica',
  pasos: [
    { t: 'Me cuentas cómo trabajas', x: 'Tratamientos, horarios, cómo llevas la agenda y qué quieres que diga. Con eso, la recepcionista lleva el nombre de tu clínica y responde con tus datos.' },
    { t: 'Yo lo dejo puesto', x: 'En las llamadas, configuro el desvío por teléfono con tu operador, en unos 10 minutos. En WhatsApp, lo conecto a tu número. Tú no tocas nada técnico.' },
    { t: 'Atiende, agenda y te avisa', x: 'Contesta, toma nota de lo que quiere la paciente y deja la cita en tu agenda. Tú recibes el aviso con nombre, teléfono y motivo. Al acabar la prueba, te paso un informe de lo que ha pasado.' },
  ],
  nota: 'Lo clínico o urgente no lo resuelve: lo anota y lo devuelve una persona de tu equipo.',
  cta: 'Quiero verlo en mi clínica',
};

export const DEMO = {
  titulo: 'Escúchala tú',
  texto: 'Dale al botón y háblale como si fueras una paciente que llama. Pídele una cita, pregúntale por un tratamiento o por el horario.',
  boton: 'Hablar con la recepcionista',
  aviso: 'Es una prueba: la cita que pidas no queda reservada. No da precios ni consejos médicos. Necesitarás permitir el micrófono.',
  datos: 'Al usar la demo, tu voz se procesa para responderte. Más info en la',
  cta: 'Quiero oírla con el nombre de mi clínica',
};

export const WHATSAPP = {
  etiqueta: 'Agente de WhatsApp',
  titulo: 'Un agente que contesta tu WhatsApp mientras trabajas',
  texto:
    'Tus pacientes escriben por WhatsApp porque es lo más cómodo. El agente contesta al momento, resuelve las dudas básicas (tratamientos, horarios, dirección) y agenda la cita en tu agenda. Si algo es clínico o no sabe contestarlo, lo anota y lo ve tu equipo.',
  puntos: ['Contesta con los datos de tu clínica', 'Agenda la cita en tu agenda', 'Te avisa de lo que no puede resolver'],
  nota: 'No tiene prueba gratis fija como la recepcionista. Me lo cuentas y vemos cómo montarlo en tu caso.',
  cta: 'Pídeme info por WhatsApp',
};

export const PRUEBA = {
  titulo: '14 días gratis, con tus llamadas reales',
  intro: 'Prefiero que la oigas trabajar antes de hablar de nada más. Durante 14 días contesta las llamadas que tu clínica no coge.',
  incluyeTitulo: 'Qué incluye',
  incluye: [
    'Las llamadas que no coges: cuando no contestas, cuando comunica y fuera de horario.',
    'Lleva el nombre de tu clínica y responde con tus tratamientos, horario y dirección.',
    'Agenda la cita en la agenda de tu clínica y toma nota de lo que pide cada paciente.',
    'Aviso al momento con nombre, teléfono y motivo.',
    'Yo configuro el desvío de llamadas por teléfono, en unos 10 minutos.',
    'Un informe al terminar: qué llamadas ha atendido, a qué horas y qué pedían.',
  ],
  noTitulo: 'Qué no te compromete',
  no: [
    'Sin permanencia: si no te convence, deshaces el desvío y se acabó.',
    'Sin obligación de seguir después. Si quieres seguir, lo hablamos con el informe delante.',
  ],
  cta: 'Quiero empezar la prueba',
  nota: 'La prueba es de la recepcionista virtual.',
};

export const QUIEN = {
  titulo: 'Quién está detrás',
  textos: [
    'Soy Hugo Andreu, tengo 18 años y vivo en Valencia. Estudio el grado en Inteligencia Artificial en la UPV.',
    'Llevo cerca de un año construyendo agentes. Los probé primero en el negocio de mi padre, un local de wifi, telefonía y TV, para contestar las consultas que se repetían todos los días.',
    'Ahora abro con mis primeras clínicas. Todavía no tengo una lista de clínicas que enseñarte, y no voy a inventármela. Por eso la prueba es gratis y con tus llamadas: así lo ves tú.',
    'Cuando me escribes, te contesto yo. No hay un equipo comercial detrás.',
  ],
  cta: 'Escríbeme por WhatsApp',
};

export const FAQ = {
  titulo: 'Preguntas frecuentes',
  items: [
    { q: '¿Suena a robot?', a: 'No te puedo prometer que a todo el mundo le guste, así que no te pido que me creas: escúchala arriba y pruébala 14 días. Habla con frases cortas y con el nombre de tu clínica. Si alguien prefiere hablar con una persona, la llamada queda anotada y la devuelve tu equipo.' },
    { q: '¿Es una persona o funciona con inteligencia artificial?', a: 'Funciona con inteligencia artificial, y no lo escondo. Se presenta como la recepcionista virtual de tu clínica, así que quien llama sabe con quién habla. No sustituye a tu equipo: cubre las llamadas que hoy no se cogen.' },
    { q: '¿Y si no sabe responder?', a: 'Toma nota y la clínica devuelve la llamada. Solo hace tres cosas: dar información básica (horarios, dirección, tratamientos), pedir la cita y dejar el recado. Todo lo clínico lo anota y lo contesta una persona de tu equipo. No da precios ni consejos médicos. Puede equivocarse alguna vez; por eso, durante la prueba, revisamos juntos lo que ha pasado antes de que decidas nada.' },
    // Recortada: se han quitado "borrado a los 30 días" y "grabación" (pendientes, ver PENDIENTES.md).
    { q: '¿Qué pasa con los datos de mis pacientes?', a: 'Es la pregunta correcta, y te lo cuento sin adornos. Antes de activar nada firmo un contrato de encargado del tratamiento: tú decides para qué se usan los datos y yo los trato solo para eso. La recepcionista solo recoge nombre, teléfono, el motivo en una frase y el tratamiento. No pide síntomas ni diagnósticos. Si quieres revisarlo con tu asesor de protección de datos, te paso todo lo que necesite.' },
    { q: '¿Qué tengo que hacer yo?', a: 'Muy poco. Me cuentas cómo trabaja tu clínica (tratamientos, horarios, cómo llevas la agenda) y yo hago el resto. El desvío de llamadas lo configuro contigo por teléfono, en unos 10 minutos. Para deshacerlo, lo mismo.' },
    { q: '¿Cuánto cuesta?', a: 'Prefiero no darte un precio a ciegas. Depende de tu clínica, así que lo vemos en 15 minutos. Y la prueba de 14 días con la recepcionista es gratis.', cta: 'Cuéntame tu clínica y te digo', href: wa.faq_precio },
    { q: '¿Cómo funciona el agente de WhatsApp?', a: 'Contesta los mensajes que tus pacientes te escriben al WhatsApp de la clínica, con tus datos: tratamientos, horarios, dirección. Agenda la cita en tu agenda y, si algo no puede resolverlo, lo anota para que lo vea tu equipo. Se puede contratar aparte de la recepcionista o junto a ella. La prueba gratis de 14 días es de la recepcionista; del agente de WhatsApp lo hablamos tú y yo.', cta: 'Pregúntame por WhatsApp', href: wa.faq_whatsapp },
  ] as { q: string; a: string; cta?: string; href?: string }[],
  pie: '¿Tienes otra pregunta? Escríbeme.',
  pieCta: 'Escríbeme por WhatsApp',
};

export const CTA_FINAL = {
  titulo: 'Cuando estés con una paciente, que el teléfono no se quede sonando',
  texto: 'Escúchala, pruébala 14 días y decides con el informe delante. O escríbeme y lo hablamos.',
  principal: 'Probar 14 días gratis',
  secundario: 'Pídeme info por WhatsApp',
  demo: 'O escucha primero a la recepcionista',
  privacidad: 'Al escribirme por WhatsApp aceptas que use tus datos para responderte. Más información en la',
  privacidadLink: 'Política de privacidad',
};

export const FOOTER = {
  frase: 'Recepcionista virtual y agente de WhatsApp para clínicas estéticas y dentales de España.',
  copyright: '© 2026 Hugo Andreu. Todos los derechos reservados.',
};

export const META = {
  title: 'OptiBusiness | Recepcionista virtual y agente de WhatsApp para clínicas',
  description:
    'Una recepcionista virtual que coge tus llamadas y un agente que contesta tu WhatsApp. Agendan la cita en la agenda de tu clínica. Pruébala 14 días gratis.',
  ogTitle: HERO_TITLE,
  ogDescription:
    'Recepcionista virtual para clínicas estéticas y dentales. Escúchala y pruébala 14 días gratis, sin permanencia.',
  schemaDescripcion: 'Recepcionista virtual y agente de WhatsApp para clínicas estéticas y dentales en España.',
};
