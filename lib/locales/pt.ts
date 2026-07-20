import type { LocaleContent } from "./types";

// Brazilian Portuguese dictionary. Terminology follows the App Store pt-BR
// metadata (fastlane/metadata/pt-BR in the app repo): "gastos fantasma",
// "vazamentos invisíveis", "a armadilha das assinaturas", "lançamento sem
// atrito", "firewall de gastos", "assinaturas parasitas".
const dict: LocaleContent = {
  seo: {
    title: "Conta Preto e Branco — Lance um gasto em 3 segundos",
    description:
      "Conta Preto e Branco (Flash Accounting): app minimalista de gastos para iOS. Lance em 3 segundos, sem cadastro, dados no aparelho. Veja o que drena seu saldo.",
  },
  siteContent: {
    brand: {
      name: "Conta Preto e Branco",
      nameEn: "Flash Accounting",
      tagline:
        "Acompanhe os gastos que você nem nota. Lançamento sem atrito. Retome o controle do seu dinheiro.",
      description:
        "O cafezinho a caminho do trabalho, os $4 de taxa de entrega no almoço, a corrida de aplicativo porque o ônibus passou, e aquele iCloud de $2.99 renovando em silêncio há três anos — são esses vazamentos invisíveis, e não as compras grandes, que deixam seu saldo cada vez menor.",
    },
    download: {
      appStoreUrl: "#",
      googlePlayUrl: "#",
      appStoreLabel: "Grátis na App Store",
      googlePlayLabel: "Android em breve",
      googlePlayEnabled: false,
    },
    nav: [
      { name: "Recursos", href: "#features" },
      { name: "Como funciona", href: "#how-it-works" },
      { name: "Telas", href: "#screenshots" },
      { name: "Planos", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
    ],
    hero: {
      eyebrow: "Nenhuma compra grande este mês — então por que o saldo caiu?",
      headlinePrefix: "Sem gastar muito,",
      rotatingWords: [
        "para onde foi o dinheiro",
        "vazamentos invisíveis",
        "são os gastos fantasma",
        "hora de lançar",
      ],
      stats: [
        { value: "3 seg", label: "para lançar um gasto", company: "Lançamento sem atrito" },
        { value: "16", label: "idiomas suportados", company: "Interface multilíngue" },
        { value: "500", label: "registros locais grátis", company: "Tudo no aparelho" },
        { value: "Sempre", label: "pronto para exportar", company: "Seus dados, nas suas mãos" },
      ],
    },
    features: {
      eyebrow: "Recursos",
      title: "Enxergue cada",
      titleMuted: "gasto invisível.",
      items: [
        {
          number: "01",
          title: "Pegue os gastos que você não nota",
          descriptionParts: [
            { text: "Cafezinho, delivery, assinaturas pequenas — " },
            { text: "gastos fantasma", highlight: true },
            {
              text: " somam bem mais do que você imagina. Lance cada um e a tela de estatísticas mostra o ",
            },
            { text: "total que vazou em silêncio", highlight: true },
            { text: " neste mês." },
          ],
          visual: "deploy",
        },
        {
          number: "02",
          title: "Lançamento sem atrito",
          descriptionParts: [
            { text: "Valor, descrição", highlight: true },
            { text: " — pronto em " },
            { text: "três segundos", highlight: true },
            {
              text: ". Sem categorias complicadas, sem lembretes chatos, sem tela que dá vontade de fechar na hora. ",
            },
            { text: "Lance e siga em frente", highlight: true },
            { text: " com o seu dia." },
          ],
          visual: "ai",
        },
        {
          number: "03",
          title: "Escape da armadilha das assinaturas",
          descriptionParts: [
            { text: "Registre " },
            { text: "assinaturas", highlight: true },
            {
              text: " recorrentes como despesas e o resumo mensal revela quantos apps você anda sustentando sem perceber. Monte um ",
            },
            { text: "firewall de gastos", highlight: true },
            { text: " e corte as assinaturas " },
            { text: "parasitas", highlight: true },
            { text: "." },
          ],
          visual: "collab",
        },
        {
          number: "04",
          title: "Privada por padrão, dados no aparelho",
          descriptionParts: [
            { text: "Funciona offline", highlight: true },
            { text: " e " },
            { text: "seus dados ficam no seu aparelho", highlight: true },
            {
              text: ". O Pro opcional libera a sincronização na nuvem para o seu livro sobreviver à troca de celular. Modo escuro e interface totalmente multilíngue inclusos.",
            },
          ],
          visual: "security",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Como funciona",
      title: "Três passos para",
      titleMuted: "retomar o controle.",
      status: "Dados no aparelho · Comece sem login",
      steps: [
        {
          number: "I",
          title: "Lance um gasto em três segundos",
          description:
            "Digite o valor e uma descrição, depois toque em \"Despesa\" ou \"Receita\". A interface é minimalista — um lançamento leva uns três segundos.",
          preview: `Valor: 4.50
Descrição: café

[ Despesa ]  [ Receita ]`,
        },
        {
          number: "II",
          title: "Veja os vazamentos invisíveis",
          description:
            "A tela de lançamentos mostra o saldo líquido acumulado, com cada despesa e receita listada com clareza. Gasto fantasma não tem onde se esconder.",
          preview: `Total: $12,480

- $4.50   Despesa  café
- $18     Despesa  delivery
+ $3,200  Receita  freelance`,
        },
        {
          number: "III",
          title: "Revise assinaturas e despesas",
          description:
            "Mude para as estatísticas e veja por dia ou por mês. Filtre por semana ou mês, ordene por valor ou data — a armadilha das assinaturas fica óbvia num relance.",
          preview: `Receitas +$3,200
Despesas -$1,952
Líquido  +$1,248

Filtro: Este mês | Ordem: Recentes`,
        },
      ],
    },
    localFirst: {
      eyebrow: "Dados no aparelho",
      title: "Seus dados ficam",
      titleBreak: "nas suas mãos.",
      description:
        "A Conta Preto e Branco guarda tudo no seu aparelho por padrão. Comece a lançar sem criar conta; ative a sincronização na nuvem só quando quiser um backup.",
      stats: [
        { value: "500", label: "registros locais grátis" },
        { value: "0", label: "logins obrigatórios" },
        { value: "Sempre", label: "exportação e backup" },
      ],
      highlights: [
        { title: "Dados moram no seu celular", detail: "Rápido, confiável e funciona sem internet" },
        { title: "500 registros grátis", detail: "De sobra para começar e testar à vontade" },
        { title: "Nuvem opcional", detail: "Backup entre aparelhos quando você precisar" },
        { title: "Planilha em um toque", detail: "Leve seu backup para onde quiser" },
        { title: "Edite e apague", detail: "Corrija qualquer lançamento a qualquer hora" },
        { title: "Navegação paginada", detail: "Rolagem fluida mesmo com muitos registros" },
      ],
    },
    metrics: {
      eyebrow: "Os números",
      title: "Uma ferramenta focada,",
      titleBreak: "zero ruído.",
      items: [
        { value: 2, suffix: "", label: "abas principais — lançamentos e estatísticas" },
        { value: 16, suffix: "", label: "idiomas suportados" },
        { value: 500, suffix: "", label: "registros locais grátis" },
        { value: 5, suffix: "", label: "filtros de período — de sempre a este ano" },
      ],
    },
    languages: {
      eyebrow: "Idiomas e roadmap",
      title: "Feito para gente",
      titleBreak: "do mundo todo.",
      description: "Detecta o idioma do aparelho, com localização completa.",
      descriptionBreak: "Mais recursos a caminho.",
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
        { name: "Backup e sincronização na nuvem", category: "Recurso Pro" },
        { name: "Escaneamento de recibos + OCR", category: "Em breve" },
        { name: "Exportação em PDF e planilha", category: "Em breve" },
      ],
    },
    privacy: {
      eyebrow: "Privacidade",
      title: "Suas finanças,",
      titleBreak: "seu aparelho.",
      description:
        "A Conta Preto e Branco é privada por padrão. Lance gastos sem criar conta; ative a sincronização na nuvem só quando quiser um backup.",
      badges: ["Funciona offline", "Só no aparelho", "Exporte sempre", "Login opcional", "Sinc. na nuvem"],
      items: [
        {
          title: "Privada por padrão",
          description:
            "As transações ficam no seu aparelho por padrão. Sem cadastro — abra o app e comece a lançar.",
        },
        {
          title: "Login opcional",
          description:
            "Entre só quando quiser sincronizar na nuvem. No iOS, dá para usar o Sign in with Apple.",
        },
        {
          title: "Você controla seus dados",
          description:
            "Exporte uma planilha de backup quando quiser, edite ou apague lançamentos, ou limpe todos os registros nas configurações.",
        },
        {
          title: "Nuvem opcional",
          description:
            "Faça backup entre aparelhos e restaure ao trocar de celular. Envie ou puxe os dados da nuvem nas configurações.",
        },
      ],
    },
    testimonials: {
      label: "O que dizem os usuários",
      marqueeLabel: "Registrar gastos tinha que ser sem atrito",
      marqueeItems: [
        "Lançamento em 3 segundos",
        "Interface minimalista",
        "Modo offline",
        "Exporte quando quiser",
        "Estatísticas",
        "Modo escuro",
        "16 idiomas",
        "Sincronização na nuvem",
      ],
      items: [
        {
          quote:
            "Nenhuma compra grande no mês, então por que meu saldo caiu? Bastaram duas semanas lançando para descobrir — café e delivery eram os culpados.",
          author: "Camila",
          role: "Freelancer",
          company: "São Paulo",
          metric: "Pegou os vazamentos invisíveis",
        },
        {
          quote:
            "Odeio app de gastos com mil categorias. Este aqui é valor mais descrição, três segundos e pronto. Finalmente criei o hábito.",
          author: "Rafael",
          role: "Dono de pequeno negócio",
          company: "Rio de Janeiro",
          metric: "Lançamento sem atrito",
        },
        {
          quote:
            "Registrar cada assinatura uma por uma me chocou — quanta coisa renovando sozinha todo mês. As parasitas finalmente foram canceladas.",
          author: "Larissa",
          role: "Analista",
          company: "Curitiba",
          metric: "Escapou da armadilha das assinaturas",
        },
        {
          quote:
            "A interface é fluida e o modo escuro descansa os olhos à noite. Meus dados ficam no meu celular — isso me deixa tranquilo.",
          author: "Gustavo",
          role: "Designer",
          company: "Belo Horizonte",
          metric: "Tranquilidade de dados no aparelho",
        },
      ],
    },
    pricing: {
      eyebrow: "Planos",
      title: "Comece grátis.",
      titleMuted: "Sincronize quando quiser.",
      description:
        "Lançar no aparelho é totalmente grátis. Destrave registros ilimitados com uma compra única do Plus, ou assine o Pro para backup e sincronização entre aparelhos.",
      annualBadge: "$14.99/ano",
      footnote:
        "Os preços de Plus e Pro são indicativos — confira o valor final na App Store / Google Play.",
      plans: [
        {
          id: "free",
          name: "Grátis",
          description: "Lançamentos no aparelho, sem barreiras",
          price: { monthly: 0, annual: 0, oneTime: null },
          features: [
            "Até 500 registros locais",
            "Lançamento de despesas e receitas",
            "Estatísticas, filtros e ordenação",
            "Exportação em planilha",
            "16 idiomas + modo escuro",
            "Sem necessidade de login",
          ],
          cta: "Baixar grátis",
          popular: false,
        },
        {
          id: "plus",
          name: "Plus",
          description: "Compra única, registros locais ilimitados",
          price: { monthly: null, annual: null, oneTime: 14.99 },
          features: [
            "Tudo do Grátis",
            "Registros locais ilimitados",
            "Pague uma vez, sem assinatura",
            "Sem conta, sem nuvem",
            "Dados só no seu aparelho",
            "Restauração de compras",
          ],
          cta: "Destravar local ilimitado",
          popular: false,
        },
        {
          id: "pro",
          name: "Pro",
          description: "Livro sincronizado na nuvem que sobrevive à troca de celular",
          price: { monthly: 1.99, annual: 1.25, oneTime: null },
          features: [
            "Tudo do Plus",
            "Armazenamento ilimitado na nuvem",
            "Envio dos registros locais para a nuvem",
            "Restauração a partir da nuvem",
            "Recuperação dos dados num celular novo",
            "Sign in with Apple opcional",
            "Restauração de compras",
          ],
          cta: "Destravar a nuvem",
          popular: true,
        },
        {
          id: "coming-soon",
          name: "Em breve",
          description: "Mais recursos para ganhar tempo",
          price: { monthly: null, annual: null, oneTime: null },
          features: [
            "Escaneamento de recibos + OCR",
            "Preenchimento automático de valor e loja",
            "Exportação em PDF",
            "Modelos de planilha",
            "Categorização mais esperta",
            "Mais formatos de exportação",
          ],
          cta: "Entrar na lista de espera",
          popular: false,
        },
      ],
    },
    cta: {
      title: "Pronto para retomar",
      titleBreak: "o controle do seu dinheiro?",
      description:
        "Tudo começa por ver cada gasto que normalmente passa batido. Baixe Conta Preto e Branco, lance um em três segundos e pegue os gastos fantasma no flagra.",
      footnote: "Comece grátis · 500 registros no aparelho",
    },
    faqSection: {
      eyebrow: "FAQ",
      title: "Sobre a Conta Preto e Branco",
      description:
        "Respostas rápidas sobre o que é o Flash Accounting, seu modelo de privacidade, os planos e as plataformas suportadas.",
    },
    screenshotsSection: {
      eyebrow: "Telas do app",
      title: "Interface minimalista,",
      titleMuted: "clara num relance.",
      description:
        "Duas abas principais: lançamentos e estatísticas. Configurações a um toque — lançamento sem atrito: lançou, fechou, acabou.",
    },
    footer: {
      links: {
        Produto: [
          { name: "Recursos", href: "#features" },
          { name: "Como funciona", href: "#how-it-works" },
          { name: "Planos", href: "#pricing" },
          { name: "FAQ", href: "#faq" },
          { name: "Idiomas", href: "#integrations" },
        ],
        Aplicativo: [
          { name: "Aba de lançamentos", href: "#screenshots" },
          { name: "Aba de estatísticas", href: "#screenshots" },
          { name: "Configurações", href: "#screenshots" },
          { name: "Seleção de idioma", href: "#integrations" },
        ],
        Empresa: [
          { name: "Sobre", href: "#" },
          { name: "Suporte", href: "/support" },
          { name: "Privacidade", href: "/privacy" },
          { name: "Contato", href: "/support" },
        ],
        Jurídico: [
          { name: "Política de Privacidade", href: "/privacy" },
          { name: "Termos e Condições", href: "/terms" },
          { name: "Dados e Privacidade", href: "/data" },
        ],
      },
      social: [
        { name: "Threads", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "App Store", href: "#" },
      ],
      status: "Dados no aparelho · Só no seu celular",
      copyright: "2026 Conta Preto e Branco. Todos os direitos reservados.",
    },
    ui: {
      monthlyLabel: "Mensal",
      annualLabel: "Anual",
      billingToggleAria: "Alternar cobrança anual",
      popularBadge: "Sinc. na nuvem",
      oneTimeSuffix: "pagamento único",
      perMonthSuffix: "/mês",
      comingSoonPrice: "Em breve",
      favoriteFeature: "Recurso favorito",
      panelTitle: "Recursos integrados",
      panelStatus: "Funciona offline",
      heroImageAlt: "Tela de lançamentos da Conta Preto e Branco",
      mockMonthlyAutopay: "Débitos do mês",
      mockForgotWhy: "Nem sei por quê",
      mockAutoRenews: "Renova sozinha",
      mockMonthlyFixedSpend: "Fixos do mês",
      mockExpenseButton: "Despesa",
      mockIncomeButton: "Receita",
      mockNetTotal: "Saldo líquido",
      mockThisMonth: "Este mês",
      mockByAmount: "Por valor",
    },
  },
  faqItems: [
    {
      question: "O que é a Conta Preto e Branco (Flash Accounting)?",
      answer:
        "Conta Preto e Branco (Flash Accounting) é um app de controle de gastos pessoais para iOS, focado em pegar os gastos invisíveis com lançamento sem atrito. Digite um valor e uma descrição e pronto — cerca de três segundos, o suficiente para revelar os cafés, deliveries e pequenas assinaturas que drenam seu saldo em silêncio.",
    },
    {
      question: "Qual a diferença para outros apps de gastos?",
      answer:
        "Ele abandona categorias complicadas e lembretes chatos em favor do lançamento minimalista de valor mais descrição. A interface é preto e branco, os dados ficam no aparelho e dá para usar sem login, com uma tela de estatísticas que mostra os vazamentos invisíveis do mês e a armadilha das assinaturas num relance.",
    },
    {
      question: "Onde meus dados ficam guardados? É seguro?",
      answer:
        "Por padrão, cada transação fica só no seu aparelho e funciona offline — sem cadastro. Quando quiser um backup, a sincronização na nuvem do Pro opcional está disponível. Você pode exportar uma planilha, editar ou apagar registros a qualquer momento; seus dados seguem sob seu controle.",
    },
    {
      question: "Preciso de conta para usar?",
      answer:
        "Não. O plano gratuito registra até 500 lançamentos inteiramente no seu aparelho. Você só faz login quando quiser sincronização na nuvem e restauração entre aparelhos (o Sign in with Apple está disponível no iOS).",
    },
    {
      question: "Quais idiomas são suportados?",
      answer:
        "16 idiomas: 繁體中文, English, 日本語, Español, Français, Deutsch, हिन्दी, Português, Русский, Bahasa Indonesia, 한국어, Italiano, Türkçe, Tiếng Việt, ไทย e Polski — além de modo escuro e detecção automática do idioma do aparelho.",
    },
    {
      question: "Qual a diferença entre Grátis, Plus e Pro?",
      answer:
        "O Grátis inclui até 500 registros locais, lançamento de despesas e receitas, estatísticas com filtros e ordenação, exportação em planilha e a interface em 16 idiomas. O Plus (preço indicativo de $14.99, pagamento único) remove o limite de registros para lançamentos locais ilimitados — sem assinatura, sem conta, sem nuvem. O Pro (preço indicativo de $1.99/mês ou $14.99/ano) inclui tudo do Plus e soma armazenamento ilimitado na nuvem, envio para a nuvem, restauração a partir da nuvem e recuperação dos dados num celular novo.",
    },
    {
      question: "Quando sai a versão para Android?",
      answer:
        "A versão Android está nos planos, mas ainda não chegou ao Google Play. Acompanhe o site oficial ou a página na App Store para novidades sobre o lançamento.",
    },
    {
      question: "Para quem é a Conta Preto e Branco?",
      answer:
        "Para quem quer lançar rápido, sem categorias complicadas; para freelancers, quem trabalha em escritório e donos de pequenos negócios caçando gastos invisíveis e assinaturas esquecidas; e para quem valoriza privacidade e quer os dados guardados no próprio aparelho.",
    },
  ],
  appScreenshots: [
    {
      id: "accounting",
      title: "Lançamentos",
      description:
        "Valor, descrição, pronto em três segundos. O saldo líquido mantém os gastos fantasma sempre à vista.",
      src: "/screenshots/accounting.png",
      alt: "Tela de lançamentos da Conta Preto e Branco com o formulário de despesas e a lista de transações",
    },
    {
      id: "statistics",
      title: "Estatísticas",
      description:
        "Cartões de resumo de receitas, despesas e saldo líquido. Veja por dia ou mês, filtre por período, ordene os registros.",
      src: "/screenshots/statistics.png",
      alt: "Tela de estatísticas da Conta Preto e Branco com cartões de resumo e listas agrupadas",
    },
    {
      id: "settings",
      title: "Configurações",
      description:
        "Exportação em planilha, troca de idioma, limite de registros locais e nuvem opcional.",
      src: "/screenshots/settings.png",
      alt: "Tela de configurações da Conta Preto e Branco com opções de exportação e idioma",
    },
  ],
};

export default dict;
