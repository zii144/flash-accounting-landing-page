import type { LocaleContent } from "./types";

// Polish dictionary. Terminology follows the App Store pl metadata
// (fastlane/metadata/pl in the app repo): "wydatki-widma" (ghost spending),
// "ciche wycieki pieniędzy" (invisible money leaks), "pułapka subskrypcji"
// (subscription fatigue), "zapis bez tarcia" (frictionless logging).
const dict: LocaleContent = {
  seo: {
    title: "Czarno-białe finanse — zapisz wydatek w 3 sekundy",
    description:
      "Czarno-białe finanse (Flash Accounting) — minimalny tracker wydatków na iOS: zapis w 3 sekundy, dane lokalnie, bez konta. Zobacz, co po cichu drenuje saldo.",
  },
  siteContent: {
    brand: {
      name: "Czarno-białe finanse",
      nameEn: "Flash Accounting",
      tagline:
        "Śledź wydatki, których nie zauważasz. Zapis bez tarcia. Odzyskaj kontrolę.",
      description:
        "Kawa złapana w drodze do pracy, $4 za dostawę lunchu, dopłata za bilet, gdy pociąg ci uciekł, i $2.99 za iCloud, które po cichu odnawia się od trzech lat — to te ciche wycieki pieniędzy, nie wielkie zakupy, sprawiają, że saldo wciąż topnieje.",
    },
    download: {
      appStoreUrl: "#",
      googlePlayUrl: "#",
      appStoreLabel: "Pobierz za darmo w App Store",
      googlePlayLabel: "Wersja na Androida wkrótce",
      googlePlayEnabled: false,
    },
    nav: [
      { name: "Funkcje", href: "#features" },
      { name: "Jak to działa", href: "#how-it-works" },
      { name: "Zrzuty ekranu", href: "#screenshots" },
      { name: "Cennik", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
    ],
    hero: {
      eyebrow: "W tym miesiącu bez dużych zakupów — więc czemu saldo spadło?",
      headlinePrefix: "Bez wielkich wydatków,",
      rotatingWords: [
        "dokąd znikają pieniądze",
        "to ciche wycieki",
        "to wydatki-widma",
        "czas to zapisać",
      ],
      stats: [
        { value: "3 sek", label: "na zapis wydatku", company: "Zapis bez tarcia" },
        { value: "16", label: "obsługiwanych języków", company: "Wielojęzyczny interfejs" },
        { value: "500", label: "darmowych zapisów lokalnych", company: "Dane lokalnie" },
        { value: "Zawsze", label: "możliwy eksport", company: "Dane w twoich rękach" },
      ],
    },
    features: {
      eyebrow: "Funkcje",
      title: "Zobacz każdy",
      titleMuted: "niewidzialny wydatek.",
      items: [
        {
          number: "01",
          title: "Śledź niewidzialne wydatki",
          descriptionParts: [
            { text: "Kawa na wynos, dostawy, drobne subskrypcje — " },
            { text: "wydatki-widma", highlight: true },
            {
              text: " sumują się mocniej, niż myślisz. Zapisz każdy z nich, a strona statystyk pokaże ",
            },
            { text: "łączną sumę cichych wycieków", highlight: true },
            { text: " w tym miesiącu — na pierwszy rzut oka." },
          ],
          visual: "deploy",
        },
        {
          number: "02",
          title: "Zapis bez tarcia",
          descriptionParts: [
            { text: "Kwota, opis", highlight: true },
            { text: " — gotowe w " },
            { text: "trzy sekundy", highlight: true },
            {
              text: ". Bez skomplikowanych kategorii, bez natrętnych przypomnień, bez ekranu, który chcesz zamknąć zaraz po otwarciu. ",
            },
            { text: "Zapisujesz i wracasz", highlight: true },
            { text: " do swoich spraw." },
          ],
          visual: "ai",
        },
        {
          number: "03",
          title: "Zdemaskuj pułapkę subskrypcji",
          descriptionParts: [
            { text: "Zapisuj cykliczne " },
            { text: "subskrypcje", highlight: true },
            {
              text: " jako wydatki, a miesięczne podsumowanie pokaże, ile aplikacji po cichu karmisz. Zbuduj ",
            },
            { text: "zaporę dla wydatków", highlight: true },
            { text: " i utnij " },
            { text: "subskrypcje-pasożyty", highlight: true },
            { text: "." },
          ],
          visual: "collab",
        },
        {
          number: "04",
          title: "Prywatność przede wszystkim, dane na urządzeniu",
          descriptionParts: [
            { text: "Działa offline", highlight: true },
            { text: ", a " },
            { text: "twoje dane zostają na twoim urządzeniu", highlight: true },
            {
              text: ". Opcjonalny plan Pro odblokowuje synchronizację w chmurze, więc księga przetrwa zmianę telefonu. Tryb ciemny i w pełni wielojęzyczny interfejs w zestawie.",
            },
          ],
          visual: "security",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Jak to działa",
      title: "Trzy kroki, by",
      titleMuted: "odzyskać kontrolę.",
      status: "Dane lokalnie · Start bez logowania",
      steps: [
        {
          number: "I",
          title: "Zapisz wpis w trzy sekundy",
          description:
            "Wpisz kwotę i opis, potem stuknij „Wydatek” albo „Przychód”. Interfejs jest minimalny — jeden wpis zajmuje około trzech sekund.",
          preview: `Kwota: 4.50
Opis: kawa

[ Wydatek ]  [ Przychód ]`,
        },
        {
          number: "II",
          title: "Zobacz ciche wycieki",
          description:
            "Księga pokazuje bieżące saldo netto, a każdy wydatek i przychód jest czytelnie wypisany. Wydatki-widma nie mają się gdzie schować.",
          preview: `Razem: $12,480

- $4.50   Wydatek   kawa
- $18     Wydatek   dostawa
+ $3,200  Przychód  zlecenie`,
        },
        {
          number: "III",
          title: "Przejrzyj subskrypcje i wydatki",
          description:
            "Przełącz się na statystyki i oglądaj dane dziennie lub miesięcznie. Filtruj po tygodniu lub miesiącu, sortuj po kwocie lub czasie — pułapka subskrypcji staje się widoczna od razu.",
          preview: `Przychody +$3,200
Wydatki   -$1,952
Netto     +$1,248

Filtr: Ten miesiąc | Sortuj: Najnowsze`,
        },
      ],
    },
    localFirst: {
      eyebrow: "Dane lokalnie",
      title: "Twoje dane zostają",
      titleBreak: "w twoich rękach.",
      description:
        "Czarno-białe finanse domyślnie przechowują wszystko na twoim urządzeniu. Zacznij zapisywać bez zakładania konta; synchronizację w chmurze włączasz dopiero wtedy, gdy chcesz kopii zapasowej.",
      stats: [
        { value: "500", label: "darmowych zapisów lokalnych" },
        { value: "0", label: "wymuszonych logowań" },
        { value: "Zawsze", label: "eksport i kopia zapasowa" },
      ],
      highlights: [
        { title: "Dane mieszkają w twoim telefonie", detail: "Szybko, niezawodnie, działa bez internetu" },
        { title: "500 darmowych zapisów", detail: "W sam raz, by zacząć i wszystko przetestować" },
        { title: "Opcjonalna synchronizacja", detail: "Kopia między urządzeniami, gdy jej potrzebujesz" },
        { title: "Eksport do arkusza jednym dotknięciem", detail: "Zabierz kopię, dokąd chcesz" },
        { title: "Edycja i usuwanie", detail: "Popraw dowolny wpis w każdej chwili" },
        { title: "Przeglądanie stronami", detail: "Płynne przewijanie nawet przy wielu zapisach" },
      ],
    },
    metrics: {
      eyebrow: "Liczby mówią same",
      title: "Skupione narzędzie,",
      titleBreak: "zero szumu.",
      items: [
        { value: 2, suffix: "", label: "główne zakładki — księga i statystyki" },
        { value: 16, suffix: "", label: "obsługiwanych języków" },
        { value: 500, suffix: "", label: "darmowych zapisów lokalnych" },
        { value: 5, suffix: "", label: "filtrów czasu — od całości po ten rok" },
      ],
    },
    languages: {
      eyebrow: "Języki i plany rozwoju",
      title: "Zaprojektowane dla ludzi",
      titleBreak: "na całym świecie.",
      description: "Wykrywa język urządzenia, z pełną lokalizacją.",
      descriptionBreak: "Kolejne funkcje w drodze.",
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
        { name: "Kopia i synchronizacja w chmurze", category: "Funkcja Pro" },
        { name: "Skanowanie paragonów + OCR", category: "Wkrótce" },
        { name: "Eksport do PDF i arkusza", category: "Wkrótce" },
      ],
    },
    privacy: {
      eyebrow: "Prywatność",
      title: "Twoje finanse,",
      titleBreak: "twoje urządzenie.",
      description:
        "Czarno-białe finanse są zaprojektowane w duchu „najpierw lokalnie”. Zapisuj wydatki bez konta; synchronizację w chmurze włączasz tylko wtedy, gdy chcesz kopii zapasowej.",
      badges: ["Działa offline", "Tylko na urządzeniu", "Eksport w każdej chwili", "Logowanie opcjonalne", "Sync z chmurą"],
      items: [
        {
          title: "Najpierw lokalnie",
          description:
            "Transakcje są domyślnie zapisywane na twoim urządzeniu. Bez rejestracji — otwierasz aplikację i zapisujesz.",
        },
        {
          title: "Logowanie opcjonalne",
          description:
            "Logujesz się tylko wtedy, gdy chcesz synchronizacji w chmurze. Na iOS dostępne jest logowanie przez Apple.",
        },
        {
          title: "Ty kontrolujesz dane",
          description:
            "W każdej chwili wyeksportujesz kopię do arkusza, poprawisz lub usuniesz pojedynczy wpis albo wyczyścisz wszystko w ustawieniach.",
        },
        {
          title: "Opcjonalna synchronizacja",
          description:
            "Rób kopie między urządzeniami i przywracaj dane przy zmianie telefonu. Dane wypchniesz do chmury lub pobierzesz z niej w ustawieniach.",
        },
      ],
    },
    testimonials: {
      label: "Co mówią użytkownicy",
      marqueeLabel: "Zapisywanie wydatków powinno być bez tarcia",
      marqueeItems: [
        "Zapis w 3 sekundy",
        "Minimalny interfejs",
        "Tryb offline",
        "Eksport w każdej chwili",
        "Statystyki",
        "Tryb ciemny",
        "16 języków",
        "Sync z chmurą",
      ],
      items: [
        {
          quote:
            "W tym miesiącu żadnych dużych zakupów, a saldo i tak w dół? Po dwóch tygodniach zapisywania już wiedziałam — winowajcami były kawa i dostawy.",
          author: "Kasia",
          role: "Freelancerka",
          company: "Warszawa",
          metric: "Wyłapała ciche wycieki",
        },
        {
          quote:
            "Nie znoszę aplikacji do wydatków z milionem kategorii. Tu jest kwota plus opis, trzy sekundy i po sprawie. W końcu udało mi się wytrwać.",
          author: "Marek",
          role: "Właściciel małej firmy",
          company: "Kraków",
          metric: "Zapis bez tarcia",
        },
        {
          quote:
            "Zapisałam subskrypcje jedną po drugiej i się przeraziłam — tyle odnawia się co miesiąc samo z siebie. Pasożyty w końcu skasowane.",
          author: "Ola",
          role: "Pracownica biura",
          company: "Wrocław",
          metric: "Zdemaskowała pułapkę subskrypcji",
        },
        {
          quote:
            "Interfejs działa płynnie, a tryb ciemny nie męczy oczu wieczorem. Dane zostają w telefonie — i to daje spokój.",
          author: "Tomek",
          role: "Projektant",
          company: "Gdańsk",
          metric: "Spokój dzięki danym lokalnie",
        },
      ],
    },
    pricing: {
      eyebrow: "Cennik",
      title: "Zacznij za darmo.",
      titleMuted: "Synchronizuj, gdy zechcesz.",
      description:
        "Lokalny zapis wydatków jest całkowicie darmowy. Zdejmij limit zapisów jednorazowym zakupem Plus albo przejdź na Pro, by mieć kopię zapasową i synchronizację między urządzeniami.",
      annualBadge: "$14.99/rok",
      footnote:
        "Ceny Plus i Pro są orientacyjne — ostateczne ceny znajdziesz w App Store / Google Play.",
      plans: [
        {
          id: "free",
          name: "Darmowy",
          description: "Lokalny zapis wydatków, zero barier",
          price: { monthly: 0, annual: 0, oneTime: null },
          features: [
            "Do 500 zapisów lokalnych",
            "Zapis wydatków i przychodów",
            "Statystyki, filtry i sortowanie",
            "Eksport do arkusza",
            "16 języków + tryb ciemny",
            "Bez logowania",
          ],
          cta: "Pobierz za darmo",
          popular: false,
        },
        {
          id: "plus",
          name: "Plus",
          description: "Jednorazowy zakup, lokalne zapisy bez limitu",
          price: { monthly: null, annual: null, oneTime: 14.99 },
          features: [
            "Wszystko z planu Darmowego",
            "Zapisy lokalne bez limitu",
            "Kupujesz raz, bez subskrypcji",
            "Bez konta, bez chmury",
            "Dane zostają na urządzeniu",
            "Przywracanie zakupów",
          ],
          cta: "Zdejmij lokalny limit",
          popular: false,
        },
        {
          id: "pro",
          name: "Pro",
          description: "Księga w chmurze, która przetrwa zmianę telefonu",
          price: { monthly: 1.99, annual: 1.25, oneTime: null },
          features: [
            "Wszystko z planu Plus",
            "Nielimitowana pamięć w chmurze",
            "Wysyłka zapisów lokalnych do chmury",
            "Przywracanie z chmury",
            "Odzyskanie danych na nowym telefonie",
            "Opcjonalne logowanie przez Apple",
            "Przywracanie zakupów",
          ],
          cta: "Odblokuj sync z chmurą",
          popular: true,
        },
        {
          id: "coming-soon",
          name: "Wkrótce",
          description: "Więcej funkcji oszczędzających czas",
          price: { monthly: null, annual: null, oneTime: null },
          features: [
            "Skanowanie paragonów + OCR",
            "Automatyczna kwota i sprzedawca",
            "Eksport do PDF",
            "Szablony arkuszy",
            "Sprytniejsza kategoryzacja",
            "Więcej formatów eksportu",
          ],
          cta: "Dołącz do listy oczekujących",
          popular: false,
        },
      ],
    },
    cta: {
      title: "Chcesz odzyskać",
      titleBreak: "kontrolę nad pieniędzmi?",
      description:
        "Wszystko zaczyna się od zobaczenia wydatków, które zwykle ci umykają. Pobierz Czarno-białe finanse, zapisz pierwszy wpis w trzy sekundy i złap wydatki-widma.",
      footnote: "Zacznij za darmo · 500 zapisów lokalnych",
    },
    faqSection: {
      eyebrow: "FAQ",
      title: "O Czarno-białych finansach",
      description:
        "Szybkie odpowiedzi: czym jest Flash Accounting, jak dba o prywatność, jakie ma plany i na jakich platformach działa.",
    },
    screenshotsSection: {
      eyebrow: "Ekrany aplikacji",
      title: "Minimalny interfejs,",
      titleMuted: "czytelny od razu.",
      description:
        "Dwie główne zakładki: księga i statystyki. Ustawienia o jedno dotknięcie — zapis bez tarcia, zamykasz i wracasz do życia.",
    },
    footer: {
      links: {
        Produkt: [
          { name: "Funkcje", href: "#features" },
          { name: "Jak to działa", href: "#how-it-works" },
          { name: "Cennik", href: "#pricing" },
          { name: "FAQ", href: "#faq" },
          { name: "Języki", href: "#integrations" },
        ],
        Aplikacja: [
          { name: "Zakładka księgi", href: "#screenshots" },
          { name: "Zakładka statystyk", href: "#screenshots" },
          { name: "Ustawienia", href: "#screenshots" },
          { name: "Wybór języka", href: "#integrations" },
        ],
        Firma: [
          { name: "O aplikacji", href: "#" },
          { name: "Wsparcie", href: "/support" },
          { name: "Prywatność", href: "/privacy" },
          { name: "Kontakt", href: "/support" },
        ],
        Prawne: [
          { name: "Polityka prywatności", href: "/privacy" },
          { name: "Regulamin", href: "/terms" },
          { name: "Dane i prywatność", href: "/data" },
        ],
      },
      social: [
        { name: "Threads", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "App Store", href: "#" },
      ],
      status: "Dane lokalnie · Tylko w twoim telefonie",
      copyright: "2026 Czarno-białe finanse. Wszelkie prawa zastrzeżone.",
    },
    ui: {
      monthlyLabel: "Miesięcznie",
      annualLabel: "Rocznie",
      billingToggleAria: "Przełącz rozliczenie roczne",
      popularBadge: "Sync z chmurą",
      oneTimeSuffix: "jednorazowo",
      perMonthSuffix: "/mies.",
      comingSoonPrice: "Wkrótce",
      favoriteFeature: "Ulubiona funkcja",
      panelTitle: "Wbudowane możliwości",
      panelStatus: "Działa offline",
      heroImageAlt: "Ekran księgi w Czarno-białych finansach",
      mockMonthlyAutopay: "Auto-opłaty",
      mockForgotWhy: "Po co to było?",
      mockAutoRenews: "Auto-odnowa",
      mockMonthlyFixedSpend: "Stałe wydatki",
      mockExpenseButton: "Wydatek",
      mockIncomeButton: "Przychód",
      mockNetTotal: "Saldo netto",
      mockThisMonth: "Ten miesiąc",
      mockByAmount: "Wg kwoty",
    },
  },
  faqItems: [
    {
      question: "Czym są Czarno-białe finanse (Flash Accounting)?",
      answer:
        "Czarno-białe finanse (Flash Accounting) to aplikacja do śledzenia osobistych wydatków na iOS, skupiona na wyłapywaniu niewidzialnych wydatków dzięki zapisowi bez tarcia. Wpisujesz kwotę i opis — gotowe w około trzy sekundy. Tyle wystarczy, by odkryć kawy, dostawy i drobne subskrypcje, które po cichu drenują twoje saldo.",
    },
    {
      question: "Czym różnią się od innych aplikacji do wydatków?",
      answer:
        "Rezygnują ze skomplikowanych kategorii i natrętnych przypomnień na rzecz minimalnego zapisu „kwota plus opis”. Interfejs jest konsekwentnie czarno-biały, dane trzymane najpierw lokalnie, a całość działa bez logowania. Strona statystyk pokazuje ciche wycieki tego miesiąca i pułapkę subskrypcji na pierwszy rzut oka.",
    },
    {
      question: "Gdzie są przechowywane moje dane? Czy są bezpieczne?",
      answer:
        "Domyślnie każda transakcja jest zapisywana wyłącznie na twoim urządzeniu i działa offline — bez rejestracji. Gdy chcesz kopii zapasowej, dostępna jest opcjonalna synchronizacja w chmurze w planie Pro. W każdej chwili wyeksportujesz arkusz, poprawisz lub usuniesz zapisy; dane pozostają pod twoją kontrolą.",
    },
    {
      question: "Czy potrzebuję konta, żeby korzystać z aplikacji?",
      answer:
        "Nie. Plan darmowy pozwala zapisać do 500 rekordów w całości na twoim urządzeniu. Logujesz się dopiero wtedy, gdy chcesz synchronizacji w chmurze i przywracania danych na innych urządzeniach (na iOS dostępne jest logowanie przez Apple).",
    },
    {
      question: "Jakie języki są obsługiwane?",
      answer:
        "16 języków: 繁體中文, English, 日本語, Español, Français, Deutsch, हिन्दी, Português, Русский, Bahasa Indonesia, 한국어, Italiano, Türkçe, Tiếng Việt, ไทย i Polski — plus tryb ciemny i automatyczne wykrywanie języka urządzenia.",
    },
    {
      question: "Czym różnią się plany Darmowy, Plus i Pro?",
      answer:
        "Darmowy obejmuje do 500 zapisów lokalnych, zapis wydatków i przychodów, statystyki z filtrami i sortowaniem, eksport do arkusza oraz interfejs w 16 językach. Plus (cena orientacyjna $14.99 jednorazowo) zdejmuje limit zapisów — lokalny zapis bez ograniczeń, bez subskrypcji, bez konta i bez chmury. Pro (cena orientacyjna $1.99/miesiąc lub $14.99/rok) zawiera wszystko z Plus i dodaje nielimitowaną pamięć w chmurze, wysyłkę danych do chmury, przywracanie z chmury i odzyskanie danych na nowym telefonie.",
    },
    {
      question: "Kiedy pojawi się wersja na Androida?",
      answer:
        "Wersja na Androida jest w planach, ale nie ma jej jeszcze w Google Play. Śledź oficjalną stronę lub kartę w App Store, by nie przegapić premiery.",
    },
    {
      question: "Dla kogo są Czarno-białe finanse?",
      answer:
        "Dla osób, które chcą zapisywać szybko, bez skomplikowanych kategorii; dla freelancerów, pracowników biur i właścicieli małych firm polujących na niewidzialne wydatki i pułapkę subskrypcji; oraz dla ceniących prywatność użytkowników, którzy chcą trzymać dane na własnym urządzeniu.",
    },
  ],
  appScreenshots: [
    {
      id: "accounting",
      title: "Księga",
      description:
        "Kwota, opis, gotowe w trzy sekundy. Saldo netto trzyma wydatki-widma na widoku.",
      src: "/screenshots/accounting.png",
      alt: "Ekran księgi w Czarno-białych finansach z formularzem wydatku i listą transakcji",
    },
    {
      id: "statistics",
      title: "Statystyki",
      description:
        "Karty podsumowań: przychody, wydatki i netto. Widok dzienny lub miesięczny, filtry czasu, sortowanie zapisów.",
      src: "/screenshots/statistics.png",
      alt: "Ekran statystyk w Czarno-białych finansach z kartami podsumowań i pogrupowanymi listami",
    },
    {
      id: "settings",
      title: "Ustawienia",
      description:
        "Eksport do arkusza, zmiana języka, lokalny limit zapisów i opcjonalna synchronizacja w chmurze.",
      src: "/screenshots/settings.png",
      alt: "Ekran ustawień w Czarno-białych finansach z opcjami eksportu i języka",
    },
  ],
};

export default dict;
