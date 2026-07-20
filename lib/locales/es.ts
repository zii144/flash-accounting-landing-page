import type { LocaleContent } from "./types";

// Spanish dictionary. Terminology follows the App Store es-ES metadata
// (fastlane/metadata/es-ES in the app repo): "gastos fantasma", "fugas
// invisibles de dinero", "la trampa de las suscripciones", "registro sin
// fricción", "cortafuegos de gastos", "suscripciones parásito".
const dict: LocaleContent = {
  seo: {
    title: "Contabilidad B/N — Anota un gasto en 3 segundos",
    description:
      "Contabilidad B/N (Flash Accounting): app minimalista de gastos para iOS. Anota en 3 segundos, sin cuenta, datos en tu móvil. Caza los gastos fantasma.",
  },
  siteContent: {
    brand: {
      name: "Contabilidad B/N",
      nameEn: "Flash Accounting",
      tagline:
        "Detecta los gastos que nunca notas. Registro sin fricción. Recupera el control.",
      description:
        "El café de camino al trabajo, los $4 de envío del delivery, el billete que pagaste de más por perder el tren y esos $2.99 de iCloud que llevan tres años renovándose en silencio: esas fugas invisibles de dinero, y no las grandes compras, son la razón de que tu saldo siga bajando.",
    },
    download: {
      appStoreUrl: "#",
      googlePlayUrl: "#",
      appStoreLabel: "Gratis en el App Store",
      googlePlayLabel: "Android, próximamente",
      googlePlayEnabled: false,
    },
    nav: [
      { name: "Funciones", href: "#features" },
      { name: "Cómo funciona", href: "#how-it-works" },
      { name: "Capturas", href: "#screenshots" },
      { name: "Precios", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
    ],
    hero: {
      eyebrow: "¿Sin grandes compras este mes y aun así baja el saldo?",
      headlinePrefix: "Sin grandes compras,",
      rotatingWords: [
        "¿a dónde se fue el dinero?",
        "son fugas invisibles",
        "son gastos fantasma",
        "toca anotarlo ya",
      ],
      stats: [
        { value: "3 seg", label: "para anotar un gasto", company: "Registro sin fricción" },
        { value: "16", label: "idiomas disponibles", company: "Interfaz multilingüe" },
        { value: "500", label: "registros locales gratis", company: "Local primero" },
        { value: "Siempre", label: "puedes exportar", company: "Tus datos, en tus manos" },
      ],
    },
    features: {
      eyebrow: "Funciones",
      title: "Mira cada céntimo de",
      titleMuted: "gasto invisible.",
      items: [
        {
          number: "01",
          title: "Detecta los gastos invisibles",
          descriptionParts: [
            { text: "Cafés, delivery, pequeñas suscripciones: los " },
            { text: "gastos fantasma", highlight: true },
            {
              text: " suman más de lo que crees. Anota cada uno y la página de estadísticas te muestra la ",
            },
            { text: "fuga invisible total", highlight: true },
            { text: " del mes de un vistazo." },
          ],
          visual: "deploy",
        },
        {
          number: "02",
          title: "Registro sin fricción",
          descriptionParts: [
            { text: "Importe, descripción", highlight: true },
            { text: " y listo en " },
            { text: "tres segundos", highlight: true },
            {
              text: ". Sin categorías complicadas, sin recordatorios molestos, sin una pantalla que quieras cerrar al abrirla. ",
            },
            { text: "Anota y sigue", highlight: true },
            { text: " con tu día." },
          ],
          visual: "ai",
        },
        {
          number: "03",
          title: "Destapa la trampa de las suscripciones",
          descriptionParts: [
            { text: "Registra las " },
            { text: "suscripciones", highlight: true },
            {
              text: " recurrentes como gastos y el resumen mensual revela cuántas apps estás alimentando sin darte cuenta. Levanta un ",
            },
            { text: "cortafuegos de gastos", highlight: true },
            { text: " y corta las suscripciones " },
            { text: "parásito", highlight: true },
            { text: "." },
          ],
          visual: "collab",
        },
        {
          number: "04",
          title: "Privacidad primero, todo en tu dispositivo",
          descriptionParts: [
            { text: "Funciona sin conexión", highlight: true },
            { text: " y " },
            { text: "tus datos se quedan en tu dispositivo", highlight: true },
            {
              text: ". El Pro opcional desbloquea la sincronización en la nube para que tu libro sobreviva al cambio de móvil. Incluye modo oscuro e interfaz totalmente multilingüe.",
            },
          ],
          visual: "security",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Cómo funciona",
      title: "Tres pasos para",
      titleMuted: "recuperar el control.",
      status: "Local primero · Empieza sin iniciar sesión",
      steps: [
        {
          number: "I",
          title: "Anota uno en tres segundos",
          description:
            "Escribe el importe y una descripción y toca \"Gasto\" o \"Ingreso\". La interfaz es mínima: una entrada toma unos tres segundos.",
          preview: `Importe: 4.50
Descripción: café

[ Gasto ]  [ Ingreso ]`,
        },
        {
          number: "II",
          title: "Mira las fugas invisibles",
          description:
            "El libro muestra el total neto acumulado, con cada gasto e ingreso listado con claridad. Los gastos fantasma no tienen dónde esconderse.",
          preview: `Total: $12,480

- $4.50   Gasto    café
- $18     Gasto    delivery
+ $3,200  Ingreso  freelance`,
        },
        {
          number: "III",
          title: "Revisa suscripciones y gastos",
          description:
            "Cambia a estadísticas y mira por día o por mes. Filtra por semana o mes, ordena por importe o fecha: la trampa de las suscripciones salta a la vista.",
          preview: `Ingresos +$3,200
Gastos   -$1,952
Neto     +$1,248

Filtro: Este mes | Orden: Recientes`,
        },
      ],
    },
    localFirst: {
      eyebrow: "Local primero",
      title: "Tus datos se quedan",
      titleBreak: "en tus manos.",
      description:
        "Contabilidad B/N guarda todo en tu dispositivo por defecto. Empieza a anotar sin crear cuenta; activa la sincronización en la nube solo cuando quieras un respaldo.",
      stats: [
        { value: "500", label: "registros locales gratis" },
        { value: "0", label: "inicios de sesión forzados" },
        { value: "Siempre", label: "exporta y respalda" },
      ],
      highlights: [
        { title: "Los datos viven en tu móvil", detail: "Rápido, fiable y funciona sin internet" },
        { title: "500 registros gratis", detail: "De sobra para empezar y probarla con calma" },
        { title: "Nube opcional", detail: "Respalda entre dispositivos cuando lo necesites" },
        { title: "Hoja de cálculo en un toque", detail: "Llévate tu respaldo a donde quieras" },
        { title: "Edita y elimina", detail: "Corrige cualquier entrada en cualquier momento" },
        { title: "Navegación paginada", detail: "Desplazamiento fluido incluso con muchos registros" },
      ],
    },
    metrics: {
      eyebrow: "En números",
      title: "Una herramienta enfocada,",
      titleBreak: "cero ruido.",
      items: [
        { value: 2, suffix: "", label: "pestañas principales: libro y estadísticas" },
        { value: 16, suffix: "", label: "idiomas disponibles" },
        { value: 500, suffix: "", label: "registros locales gratis" },
        { value: 5, suffix: "", label: "filtros de tiempo: de todo el historial a este año" },
      ],
    },
    languages: {
      eyebrow: "Idiomas y hoja de ruta",
      title: "Diseñada para usuarios",
      titleBreak: "de todo el mundo.",
      description: "Detecta el idioma de tu dispositivo, con localización completa.",
      descriptionBreak: "Más funciones en camino.",
      items: [
        { name: "繁體中文", native: "繁體中文" },
        { name: "English", native: "English" },
        { name: "日本語", native: "日本語" },
        { name: "Español", native: "Español" },
        { name: "Français", native: "Français" },
        { name: "Deutsch", native: "Deutsch" },
        { name: "हिन्दी", native: "हिन्दी" },
        { name: "Português", native: "Português" },
        { name: "Русский", native: "Русский" },
        { name: "Bahasa Indonesia", native: "Bahasa Indonesia" },
        { name: "한국어", native: "한국어" },
        { name: "Italiano", native: "Italiano" },
        { name: "Türkçe", native: "Türkçe" },
        { name: "Tiếng Việt", native: "Tiếng Việt" },
        { name: "ไทย", native: "ไทย" },
        { name: "Polski", native: "Polski" },
      ],
      comingSoon: [
        { name: "Respaldo y sincronización en la nube", category: "Función Pro" },
        { name: "Escaneo de recibos + OCR", category: "Próximamente" },
        { name: "Exportación a PDF y hoja de cálculo", category: "Próximamente" },
      ],
    },
    privacy: {
      eyebrow: "Privacidad",
      title: "Tus finanzas,",
      titleBreak: "tu dispositivo.",
      description:
        "Contabilidad B/N está diseñada con enfoque local primero. Anota gastos sin cuenta; activa la sincronización en la nube solo cuando quieras un respaldo.",
      badges: [
        "Funciona sin conexión",
        "Solo en tu dispositivo",
        "Exporta cuando quieras",
        "Inicio de sesión opcional",
        "Sincronización en la nube",
      ],
      items: [
        {
          title: "Local primero",
          description:
            "Tus movimientos se guardan en el dispositivo por defecto. Sin registro: abre la app y empieza a anotar.",
        },
        {
          title: "Inicio de sesión opcional",
          description:
            "Inicia sesión solo si quieres sincronizar con la nube. En iOS está disponible Sign in with Apple.",
        },
        {
          title: "Tú controlas tus datos",
          description:
            "Exporta un respaldo en hoja de cálculo cuando quieras, edita o elimina entradas sueltas, o borra todos los registros desde Ajustes.",
        },
        {
          title: "Nube opcional",
          description:
            "Respalda entre dispositivos y restaura al cambiar de móvil. Sube o descarga tus datos de la nube desde Ajustes.",
        },
      ],
    },
    testimonials: {
      label: "Lo que dicen los usuarios",
      marqueeLabel: "Registrar gastos debería ser sin fricción",
      marqueeItems: [
        "Anota en 3 segundos",
        "Interfaz mínima",
        "Modo sin conexión",
        "Exporta cuando quieras",
        "Estadísticas",
        "Modo oscuro",
        "16 idiomas",
        "Sincronización en la nube",
      ],
      items: [
        {
          quote:
            "Este mes no compré nada grande, ¿por qué bajó mi saldo? Dos semanas anotando me lo enseñaron: el café y el delivery eran los culpables.",
          author: "Lucía",
          role: "Freelance",
          company: "Madrid",
          metric: "Cazó las fugas invisibles",
        },
        {
          quote:
            "Odio las apps de gastos con mil categorías. Esta es importe y descripción, tres segundos y fuera. Por fin una con la que sigo.",
          author: "Diego",
          role: "Dueño de un pequeño negocio",
          company: "Ciudad de México",
          metric: "Registro sin fricción",
        },
        {
          quote:
            "Anotar cada suscripción una por una me impactó: cuánto se renovaba solo cada mes. Las parásito por fin están canceladas.",
          author: "Valentina",
          role: "Oficinista",
          company: "Buenos Aires",
          metric: "Destapó la trampa de las suscripciones",
        },
        {
          quote:
            "La interfaz va fluida y el modo oscuro descansa la vista de noche. Mis datos se quedan en mi móvil: eso es tranquilidad.",
          author: "Marc",
          role: "Diseñador",
          company: "Barcelona",
          metric: "Tranquilidad local primero",
        },
      ],
    },
    pricing: {
      eyebrow: "Precios",
      title: "Empieza gratis.",
      titleMuted: "Sincroniza cuando quieras.",
      description:
        "Registrar en local es totalmente gratis. Desbloquea registros ilimitados con una compra única de Plus, o pasa a Pro para respaldar y sincronizar entre dispositivos.",
      annualBadge: "$14.99/año",
      footnote:
        "Los precios de Plus y Pro son orientativos; consulta el App Store / Google Play para ver el precio final.",
      plans: [
        {
          id: "free",
          name: "Gratis",
          description: "Registro local, cero barreras",
          price: { monthly: 0, annual: 0, oneTime: null },
          features: [
            "Hasta 500 registros locales",
            "Registro de gastos e ingresos",
            "Estadísticas, filtros y orden",
            "Exportación a hoja de cálculo",
            "16 idiomas + modo oscuro",
            "Sin iniciar sesión",
          ],
          cta: "Descarga gratis",
          popular: false,
        },
        {
          id: "plus",
          name: "Plus",
          description: "Compra única, registros locales ilimitados",
          price: { monthly: null, annual: null, oneTime: 14.99 },
          features: [
            "Todo lo del plan Gratis",
            "Registros locales ilimitados",
            "Pagas una vez, sin suscripción",
            "Sin cuenta, sin nube",
            "Tus datos se quedan en tu dispositivo",
            "Restaurar compras",
          ],
          cta: "Desbloquea local ilimitado",
          popular: false,
        },
        {
          id: "pro",
          name: "Pro",
          description: "Un libro en la nube que sobrevive al cambio de móvil",
          price: { monthly: 1.99, annual: 1.25, oneTime: null },
          features: [
            "Todo lo del plan Plus",
            "Almacenamiento en la nube ilimitado",
            "Sube tus registros a la nube",
            "Restaura desde la nube",
            "Recupera tus datos en un móvil nuevo",
            "Sign in with Apple opcional",
            "Restaurar compras",
          ],
          cta: "Desbloquea la nube",
          popular: true,
        },
        {
          id: "coming-soon",
          name: "Próximamente",
          description: "Más funciones para ahorrarte tiempo",
          price: { monthly: null, annual: null, oneTime: null },
          features: [
            "Escaneo de recibos + OCR",
            "Autocompletar importe y comercio",
            "Exportación a PDF",
            "Plantillas de hoja de cálculo",
            "Categorización más inteligente",
            "Más formatos de exportación",
          ],
          cta: "Únete a la lista de espera",
          popular: false,
        },
      ],
    },
    cta: {
      title: "¿Listo para recuperar",
      titleBreak: "el control de tu dinero?",
      description:
        "Todo empieza por ver cada gasto que normalmente se te escapa. Descarga Contabilidad B/N, anota uno en tres segundos y caza los gastos fantasma.",
      footnote: "Empieza gratis · 500 registros locales",
    },
    faqSection: {
      eyebrow: "Preguntas frecuentes",
      title: "Sobre Contabilidad B/N",
      description:
        "Respuestas rápidas sobre qué es Flash Accounting, su modelo de privacidad, los planes y las plataformas compatibles.",
    },
    screenshotsSection: {
      eyebrow: "Pantallas de la app",
      title: "Una interfaz mínima,",
      titleMuted: "clara de un vistazo.",
      description:
        "Dos pestañas principales: libro y estadísticas. Los ajustes, a un toque. Registro sin fricción: anotas y cierras.",
    },
    footer: {
      links: {
        Producto: [
          { name: "Funciones", href: "#features" },
          { name: "Cómo funciona", href: "#how-it-works" },
          { name: "Precios", href: "#pricing" },
          { name: "Preguntas frecuentes", href: "#faq" },
          { name: "Idiomas", href: "#integrations" },
        ],
        App: [
          { name: "Pestaña de libro", href: "#screenshots" },
          { name: "Pestaña de estadísticas", href: "#screenshots" },
          { name: "Ajustes", href: "#screenshots" },
          { name: "Selector de idioma", href: "#integrations" },
        ],
        Compañía: [
          { name: "Acerca de", href: "#" },
          { name: "Soporte", href: "/support" },
          { name: "Privacidad", href: "/privacy" },
          { name: "Contacto", href: "/support" },
        ],
        Legal: [
          { name: "Política de privacidad", href: "/privacy" },
          { name: "Términos y condiciones", href: "/terms" },
          { name: "Datos y privacidad", href: "/data" },
        ],
      },
      social: [
        { name: "Threads", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "App Store", href: "#" },
      ],
      status: "Local primero · Solo en tu móvil",
      copyright: "2026 Contabilidad B/N. Todos los derechos reservados.",
    },
    ui: {
      monthlyLabel: "Mensual",
      annualLabel: "Anual",
      billingToggleAria: "Cambiar a facturación anual",
      popularBadge: "Sincronización",
      oneTimeSuffix: "pago único",
      perMonthSuffix: "/mes",
      comingSoonPrice: "Próximamente",
      favoriteFeature: "Función favorita",
      panelTitle: "Funciones integradas",
      panelStatus: "Funciona sin conexión",
      heroImageAlt: "Pantalla del libro de Contabilidad B/N",
      mockMonthlyAutopay: "Cargos del mes",
      mockForgotWhy: "¿Por qué pago?",
      mockAutoRenews: "Se renueva",
      mockMonthlyFixedSpend: "Gasto fijo/mes",
      mockExpenseButton: "Gasto",
      mockIncomeButton: "Ingreso",
      mockNetTotal: "Total neto",
      mockThisMonth: "Este mes",
      mockByAmount: "Por importe",
    },
  },
  faqItems: [
    {
      question: "¿Qué es Contabilidad B/N (Flash Accounting)?",
      answer:
        "Contabilidad B/N (Flash Accounting) es una app de gastos personales para iOS centrada en cazar los gastos invisibles con un registro sin fricción. Escribe un importe y una descripción y listo en unos tres segundos: suficiente para destapar los cafés, el delivery y las pequeñas suscripciones que vacían tu saldo en silencio.",
    },
    {
      question: "¿En qué se diferencia de otras apps de gastos?",
      answer:
        "Deja fuera las categorías complicadas y los recordatorios molestos: solo importe y descripción, en un registro mínimo. La interfaz es blanco y negro puro, local primero y usable sin iniciar sesión, con una página de estadísticas que muestra de un vistazo las fugas invisibles del mes y la trampa de las suscripciones.",
    },
    {
      question: "¿Dónde se guardan mis datos? ¿Están seguros?",
      answer:
        "Por defecto, cada movimiento se guarda solo en tu dispositivo y funciona sin conexión, sin registro. Cuando quieras un respaldo, tienes la sincronización en la nube opcional de Pro. Puedes exportar una hoja de cálculo, editar o eliminar registros en cualquier momento; tus datos siguen bajo tu control.",
    },
    {
      question: "¿Necesito una cuenta para usarla?",
      answer:
        "No. El plan gratuito registra hasta 500 movimientos íntegramente en tu dispositivo. Solo inicias sesión si quieres sincronización en la nube y restauración entre dispositivos (en iOS está disponible Sign in with Apple).",
    },
    {
      question: "¿Qué idiomas están disponibles?",
      answer:
        "16 idiomas: 繁體中文, English, 日本語, Español, Français, Deutsch, हिन्दी, Português, Русский, Bahasa Indonesia, 한국어, Italiano, Türkçe, Tiếng Việt, ไทย y Polski, además de modo oscuro y detección automática del idioma del dispositivo.",
    },
    {
      question: "¿Cuál es la diferencia entre Gratis, Plus y Pro?",
      answer:
        "Gratis incluye hasta 500 registros locales, registro de gastos e ingresos, estadísticas con filtros y orden, exportación a hoja de cálculo y la interfaz en 16 idiomas. Plus (precio orientativo: $14.99, pago único) elimina el límite para registrar en local sin restricciones: sin suscripción, sin cuenta, sin nube. Pro (precio orientativo: $1.99/mes o $14.99/año) incluye todo lo de Plus y suma almacenamiento en la nube ilimitado, subida a la nube, restauración desde la nube y recuperación en un móvil nuevo.",
    },
    {
      question: "¿Cuándo llega la versión para Android?",
      answer:
        "La versión para Android está en los planes, pero todavía no está en Google Play. Sigue el sitio oficial o la página del App Store para conocer el lanzamiento.",
    },
    {
      question: "¿Para quién es Contabilidad B/N?",
      answer:
        "Para quienes quieren anotar rápido sin categorías complicadas; para freelancers, oficinistas y dueños de pequeños negocios que persiguen los gastos invisibles y la trampa de las suscripciones; y para usuarios que cuidan su privacidad y quieren sus datos en su propio dispositivo.",
    },
  ],
  appScreenshots: [
    {
      id: "accounting",
      title: "Libro",
      description:
        "Importe, descripción y listo en tres segundos. El total neto mantiene los gastos fantasma a plena vista.",
      src: "/screenshots/accounting.png",
      alt: "Pantalla del libro de Contabilidad B/N con el formulario de gastos y la lista de movimientos",
    },
    {
      id: "statistics",
      title: "Estadísticas",
      description:
        "Tarjetas de resumen de ingresos, gastos y neto. Mira por día o por mes, filtra por periodo y ordena tus registros.",
      src: "/screenshots/statistics.png",
      alt: "Pantalla de estadísticas de Contabilidad B/N con tarjetas de resumen y listas agrupadas",
    },
    {
      id: "settings",
      title: "Ajustes",
      description:
        "Exportación a hoja de cálculo, cambio de idioma, límite de registros locales y nube opcional.",
      src: "/screenshots/settings.png",
      alt: "Pantalla de ajustes de Contabilidad B/N con opciones de exportación e idioma",
    },
  ],
};

export default dict;
