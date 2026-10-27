export default {
  nav: {
    about: 'O mnie',
    experience: 'Doświadczenie',
    technologies: 'Technologie',
    ai: 'AI',
    projects: 'Projekty',
    education: 'Edukacja',
    contact: 'Kontakt',
    cta: 'Kontakt'
  },
  hero: {
    role: 'Frontend & AI Engineer',
    description: 'Tworzę aplikacje webowe z dbałością o każdy piksel. Aktualnie w',
    company: 'T-Mobile Polska',
    cta: 'Zobacz projekty',
    year: '© 2026'
  },
  about: {
    label: 'O mnie',
    heading: 'Pasja do tworzenia nowoczesnych interfejsów webowych.',
    p1: 'Cześć! Jestem Karol — frontend developer z Polski z pasją do budowania pięknych i wydajnych aplikacji webowych. Moja przygoda z technologią zaczęła się od grafiki komputerowej w dzieciństwie i przekształciła się w głęboką miłość do kodu na studiach.',
    p2: 'Obecnie pracuję jako Mid Frontend Developer w T-Mobile Polska, gdzie tworzę skalowalne rozwiązania frontendowe dla jednego z największych operatorów telekomunikacyjnych w Polsce.',
    p3: 'Specjalizuję się w Vue.js, React i TypeScript. Stawiam na czysty kod, pixel-perfect UI i najlepsze praktyki.',
    p4: 'Obok frontendu rozwijam się jako AI engineer: ukończyłem AI_devs 4, gdzie nauczyłem się budować agentów AI — tool use, function calling i workflowy agentowe — razem z interfejsami wokół nich.',
    stat1: 'Lat doświadczenia',
    stat2: 'Ukończonych projektów',
    stat3: 'Firm'
  },
  experience: {
    label: 'Doświadczenie',
    heading: 'Moja ścieżka zawodowa.',
    current: 'Obecnie',
    jobs: [
      {
        location: 'Warszawa, Woj. Mazowieckie, Polska · Praca hybrydowa',
        duration: 'paź 2024 – obecnie · 1 rok 5 mies.',
        position: 'Mid Frontend Developer',
        description:
          'Tworzenie i utrzymywanie skalowalnych rozwiązań frontendowych dla jednej z największych firm telekomunikacyjnych w Polsce.',
        techStack: 'Vue 3, TypeScript, Tailwind CSS, REST API, Git'
      },
      {
        location: 'Austria • Graz / Praca zdalna',
        duration: 'maj 2023 - wrzesień 2024',
        position: 'Vue Frontend Developer',
        description:
          'Rozwój Housebook Control - cyfrowa dokumentacja do zarządzania procesem tworzenia inwestycji.',
        techStack:
          'Vue 3 (Composition API), Pinia, Vitest, TypeScript, Storybook, Tailwind CSS, GitHub, GIT'
      },
      {
        location: 'Polska • Warszawa / Praca zdalna',
        duration: 'lipiec 2022 - luty 2023',
        position: 'Frontend Developer (React)',
        description: 'Rozwój portfela płatniczego kryptowalut',
        techStack: 'React, TypeScript, Web3'
      },
      {
        location: 'Łódź • Lodz Solar Team',
        duration: 'luty 2022 - czerwiec 2022',
        position: 'Frontend Developer (React)',
        description: 'Rozwój aplikacji telemetrycznej dla bolidu zasilanego energią słoneczną',
        techStack: 'React, TypeScript, GraphQL, SCSS, GitLab'
      },
      {
        location: 'Toruń • LEA24',
        duration: 'marzec 2021 - lipiec 2022',
        position: 'JS Frontend Developer',
        description: '',
        techStack: ''
      },
      {
        location: 'Toruń • EXTRANET',
        duration: 'czerwiec 2018 - lipiec 2018',
        position: 'Frontend Developer - praktyki szkolne',
        description: '',
        techStack: ''
      }
    ]
  },
  technologies: {
    label: 'Technologie',
    heading: 'Narzędzia, z którymi pracuję.',
    primaryLabel: 'Główny stack',
    toolsLabel: 'Narzędzia & inne'
  },
  ai: {
    label: 'AI Engineering',
    heading: 'Poza interfejsem: agenci AI.',
    intro:
      'Frontend to moje główne rzemiosło, agenci AI — drugie. Ukończyłem AI_devs 4, kohortowy kurs budowania produkcyjnych rozwiązań AI, i potrafię zaprojektować agenta razem z interfejsem, przez który ludzie z niego korzystają.',
    certificate: {
      title: 'AI_devs 4: Builders',
      kind: 'Certyfikat ukończenia kursu',
      date: 'maj 2026',
      facts: '5 tygodni · 25 lekcji · 25+ projektów praktycznych',
      numberLabel: 'Nr',
      open: 'Zobacz cały certyfikat',
      close: 'Zamknij',
      alt: 'Certyfikat ukończenia kursu AI_devs 4 wystawiony dla Karola Wiśniewskiego'
    },
    areas: [
      {
        title: 'LLM w kodzie',
        points: [
          'Function calling, natywne narzędzia API i odpowiedzi w JSON Schema',
          'Projektowanie narzędzi dla agentów (CLI i MCP)',
          'Multimodalność, ochrona przed prompt injection, koszt i niezawodność'
        ]
      },
      {
        title: 'Context Engineering',
        points: [
          'Sterowanie agentem przez kontekst, nie tylko prompt',
          'Prompt cache, kompresja i ekstrakcja kontekstu',
          'Kontekst w architekturach multi-agentowych'
        ]
      },
      {
        title: 'Observability i evale',
        points: [
          'Evale offline i online dla promptów i agentów',
          'Zbiory danych z produkcji',
          'Integracje i narzędzia agentowe sterowane evalami'
        ]
      },
      {
        title: 'Aplikacje produkcyjne',
        points: [
          'Systemy multi-agentowe działające w tle',
          'Procesy biznesowe z human-in-the-loop',
          'Narzędzia poza czatem, zintegrowane z istniejącą logiką produktu'
        ]
      }
    ],
    outro: 'Szukam pierwszych zleceń z agentami AI.',
    cta: 'Porozmawiajmy'
  },
  projects: {
    label: 'Projekty',
    heading: 'Wybrane realizacje.',
    items: [
      {
        description:
          'Platforma do tworzenia spersonalizowanych stron ślubnych. Zbudowana z wykorzystaniem nowoczesnych technologii webowych.'
      },
      {
        description:
          'Nowoczesna platforma do udostępniania zdjęć i filmów ze ślubu. Goście mogą wgrywać i dzielić się wspomnieniami w czasie rzeczywistym.'
      }
    ]
  },
  education: {
    label: 'Edukacja',
    heading: 'Wykształcenie.',
    items: [
      {
        institution: 'Politechnika Łódzka',
        degree: 'Inżynier Informatyki',
        specialization: 'Specjalizacja: Technologie Webowe'
      }
    ]
  },
  contact: {
    label: 'Kontakt',
    heading: 'Porozmawiajmy\no Twoim projekcie.',
    subtitle: 'Szukasz frontendowca albo kogoś, kto zbuduje agenta AI razem z interfejsem? Napisz.',
    cta: 'Napisz do mnie'
  },
  footer: {
    city: 'Warszawa',
    backToTop: 'Do góry',
    credits: 'Zaprojektowane & zbudowane przeze mnie'
  },
  meta: {
    title: 'Karol Wiśniewski — Frontend & AI Engineer',
    description:
      'Mid Frontend Developer w T-Mobile Polska. Tworzę aplikacje webowe w Vue.js, React i TypeScript. Absolwent AI_devs 4 — buduję agentów AI i interfejsy wokół nich.'
  }
}
