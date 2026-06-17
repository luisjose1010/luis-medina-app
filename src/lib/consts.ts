import { ContactIcon, CVIcon, EnglishIcon, ExperienceIcon, HomeIcon, ProjectsIcon, SkillsIcon, SpanishIcon } from '@/assets/Icons'

export const languages = {
  English: {
    name: 'English',
    code: 'en-US',
    Flag: EnglishIcon
  },
  Spanish: {
    name: 'Español',
    code: 'es',
    Flag: SpanishIcon
  }
}

export const projects: Project[] = [
  {
    name: 'Traders Institute Academy',
    description: 'Una plataforma educativa completa para trading, que incluye una landing page, un portal de estudiantes y un panel administrativo. Desarrollada como monorepo con backend serverless y una base de datos distribuida, cuenta con un sistema de autenticación por roles.',
    imagesCount: 5,
    links: [],
    slug: 'traders-institute-academy',
    tags: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Express', 'Drizzle ORM', 'Turso', 'Vercel']
  },
  {
    name: 'Canvassing App (CCTV FB Lead)',
    description: 'Aplicación web progresiva (PWA) construida para la gestión de leads en campo. Cuenta con integración de datos a través de GoHighLevel (GHL) y servicios en la nube para sincronizar información en tiempo real de los clientes y ventas.',
    imagesCount: 5,
    links: [],
    slug: 'canvassing-app',
    tags: ['TypeScript', 'React', 'PWA', 'Tailwind CSS']
  },
  {
    name: 'EcoHome WebApp (NPS App)',
    description: 'Colaborador en esta aplicación multiplataforma (iOS, Android, Web) orientada a la eficiencia y el control en el hogar, desarrollada utilizando el ecosistema de React Native y Firebase. Incluye autenticación, base de datos en tiempo real y sincronización en la nube mediante Cloud Functions.',
    note: 'Proyecto colaborativo.',
    imagesCount: 5,
    links: [],
    slug: 'ecohome-webapp',
    tags: ['TypeScript', 'React Native', 'Firebase', 'Node.js', 'Cross-Platform']
  },
  {
    name: 'CP Global Insurance',
    description: 'Sitio web oficial de CP Global Insurance (EE. UU.) con contenido bilingüe (EN/ES). SPA en React + TypeScript con enrutamiento para páginas de servicios y líneas de negocio; diseño responsivo con Tailwind y componentes accesibles de Radix. Incluye selector de idioma con detección automática, formulario de contacto validado con React Hook Form y toasts, enlaces directos a llamada/WhatsApp, SEO técnico (metadatos OG/Twitter y JSON‑LD) y despliegue en Vercel con dominio personalizado.',
    imagesCount: 13,
    links: [
      { type: 'fullstack', label: 'LIVE', url: 'https://www.cpglobalinsurance.com/', isSolidButton: true }
    ],
    slug: 'cp-global-insurance',
    tags: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'React Router', 'i18next', 'Radix UI', 'Vercel']
  },
  {
    name: 'Tomodachi App',
    description: 'Una plataforma web para la gestión integral de eventos, facilitando la venta de entradas, stands y patrocinios. Permite la creación detallada de eventos con itinerarios, la gestión de tipos de tickets con promociones, y un sistema de facturación y transacciones. Incluye gestión de usuarios y roles, y un panel para administrar asistentes, expositores y patrocinadores.',
    imagesCount: 8,
    links: [
      { type: 'app', label: 'LIVE', url: 'https://tomodachi-app.vercel.app/', isSolidButton: true },
      { type: 'app', label: 'GITHUB', url: 'https://github.com/luisjose1010/tomodachi-app' },
      { type: 'api', label: 'LIVE', url: 'https://tomodachi-api.vercel.app/', isSolidButton: true },
      { type: 'api', label: 'GITHUB', url: 'https://github.com/luisjose1010/tomodachi-api' }
    ],
    slug: 'tomodachi-app',
    tags: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express']
  },
  {
    name: 'Plataforma Crowdfunding',
    description: 'Un sitio web basado en crowdfunding de donación con la finalidad de gestionar pagos fácilmente en distintas plataformas y promocionar proyectos de impacto social en Venezuela, con la intención de apoyar y dar visibilidad a personas de bajo recursos, en un estado de necesidad, vulnerabilidad y todo tipo de causas sociales en general.',
    imagesCount: 9,
    note: 'Nota: es posible que los datos tarden en cargarse la primera vez, debido a limitaciones en el host de la API.',
    links: [
      { type: 'app', label: 'LIVE', url: 'https://plataforma-crowdfunding.vercel.app/', isSolidButton: true },
      { type: 'app', label: 'GITHUB', url: 'https://github.com/luisjose1010/plataforma-crowdfunding' },
      { type: 'api', label: 'LIVE', url: 'https://plataforma-crowdfunding-api.onrender.com/', isSolidButton: true },
      { type: 'api', label: 'GITHUB', url: 'https://github.com/luisjose1010/plataforma-crowdfunding-api' },
      { type: 'api', label: 'API_DOCS', url: 'https://plataforma-crowdfunding-api.onrender.com/docs' }
    ],
    slug: 'plataforma-crowdfunding',
    tags: ['JavaScript', 'React', 'Python', 'FastAPI', 'SQLAlchemy', 'Bootstrap', 'Styled Components']
  },
  {
    name: "Romano's Pizza System",
    description: 'Un sistema de venta web responsivo para una pizzería, con todo catálogo de productos y combos disponibles de la franquicia, otorgando una interfaz accesible para el procesamiento de pedidos, la gestión de clientes y la impresión de facturas.',
    imagesCount: 6,
    note: "Credenciales de prueba: usuario 'admin' y contraseña '1234'.",
    links: [
      { type: 'fullstack', label: 'LIVE', url: 'http://romanos-system.atwebpages.com/', isSolidButton: true },
      { type: 'fullstack', label: 'GITHUB', url: 'https://github.com/luisjose1010/romanos-system' }
    ],
    slug: 'romanos-system',
    tags: ['JavaScript', 'VueJS', 'PHP', 'Vite', 'Vuetify', 'Composer', 'Eloquent/Laravel']
  },
  {
    name: 'Melissa Barba Real Estate',
    description: 'Landing page moderna y responsiva para la asesora inmobiliaria Melissa Barba. Contenido bilingüe (EN/ES) con i18next, navegación por secciones, formulario de búsqueda de propiedades con validación y notificaciones, envío a función serverless (Vercel) y SEO dinámico (metadatos OG/Twitter) mediante un componente reutilizable.',
    imagesCount: 10,
    links: [
      { type: 'fullstack', label: 'LIVE', url: 'https://melissabarbarealestate.com/', isSolidButton: true }
    ],
    slug: 'melissabarba-realestate',
    tags: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'React Router', 'i18next', 'Radix UI', 'Vercel']
  },
  {
    name: 'All City Gold Website',
    description: 'Sitio web oficial de la joyería All City Gold. Landing page responsive con navegación por secciones, animaciones sutiles y colecciones destacadas. Incluye formulario de contacto con envío de correos vía función serverless (Maileroo), SEO básico (metadatos OG/Twitter) y despliegue en Vercel.',
    imagesCount: 6,
    links: [
      { type: 'fullstack', label: 'LIVE', url: 'https://allcitygold.vercel.app/', isSolidButton: true }
    ],
    slug: 'all-city-gold-website',
    tags: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'React Router', 'Framer Motion', 'Radix UI', 'Vercel']
  },
  {
    name: 'Cognitive Monitoring App',
    description: 'Aplicación móvil desarrollada como una prueba técnica, enfocada en el diseño y la implementación de un dashboard de monitoreo cognitivo utilizando React Native. Incluye módulos para visualizar el progreso, el rendimiento y un perfil de usuario, ofreciendo una experiencia intuitiva para el seguimiento de métricas cognitivas.',
    imagesCount: 10,
    links: [
      { type: 'presentation', label: 'PROTOTYPE', url: 'https://www.figma.com/proto/v6iKAEnCPmwtclhkpuabqS/Cognitive-Monitoring-App?node-id=0-1&t=fqnkUUtceUgOBknI-1', isSolidButton: true },
      { type: 'presentation', label: 'GITHUB', url: 'https://github.com/luisjose1010/prueba-tecnica-pulpoline' },
      { type: 'app', label: 'FIGMA', url: 'https://www.figma.com/design/v6iKAEnCPmwtclhkpuabqS/Cognitive-Monitoring-App?node-id=0-1&t=fqnkUUtceUgOBknI-1', isSolidButton: true },
      { type: 'app', label: 'GITHUB', url: 'https://github.com/luisjose1010/cogni-app' }
    ],
    slug: 'cognitive-monitoring-app',
    tags: ['TypeScript', 'React Native', 'Figma', 'Expo', 'Android SDK']
  },
  {
    name: 'SabedeSeguros Quoters',
    description: 'Una Aplicación que proporciona diversos cotizadores web responsivos para varios tipos de seguros, desarrollados en forma de un plugin de Wordpress para ser agregados fácilmente al sitio web de la empresa, reemplazando el uso de archivos Excel locales.',
    imagesCount: 9,
    note: 'Nota: La aplicación en vivo opera desde una página de demostración. Las imágenes reflejan la apariencia y funcionalidad original del proyecto en el sitio web de la empresa, el cual se encuentra inactivo.',
    links: [
      { type: 'app', label: 'LIVE', url: 'http://sabedeseguros.atwebpages.com/', isSolidButton: true },
      { type: 'app', label: 'GITHUB', url: 'https://github.com/luisjose1010/sabedeseguros-app' },
      { type: 'api', label: 'LIVE', url: 'http://sabedeseguros.atwebpages.com/wp-json/sq/v1', isSolidButton: true },
      { type: 'api', label: 'GITHUB', url: 'https://github.com/luisjose1010/sabedese-quoters' }
    ],
    slug: 'sabedeseguros-quoters',
    tags: ['JavaScript', 'VueJS', 'PHP', 'Wordpress', 'Vite', 'Vuetify']
  },
  {
    name: 'Luis Medina App',
    description: 'Portafolio web profesional actual de mi persona.',
    imagesCount: 3,
    links: [
      { type: 'fullstack', label: 'LIVE', url: 'https://luis-medina-app.vercel.app/', isSolidButton: true },
      { type: 'fullstack', label: 'GITHUB', url: 'https://github.com/luisjose1010/luis-medina-app' }
    ],
    slug: 'luis-medina-app',
    tags: ['TypeScript', 'React', 'NextJS', 'Tailwind CSS']
  }
]

export const experience = [
  {
    name: 'Desarrollador Full-Stack | Proyectos Freelance',
    description: 'Diseñé, desarrollé y desplegué sitios web a medida (seguros, bienes raíces, e‑commerce de joyería) con TypeScript, Tailwind CSS, Node.js, funciones serverless y SQL. Proyectos oficiales: CP Global Insurance, All City Gold Jewelry, Melissa Barba Real Estate.',
    year: '2025'
  },
  {
    name: 'Tomodachi Events | Desarrollo Web Full-Stack',
    description: 'Mantenimiento y desarrollo de apps cliente‑servidor internas (eventos, administración). TypeScript, React y Express/Node.js con PostgreSQL; ~20% de mejora en desempeño vía optimización de API/BD.',
    year: '2025'
  },
  {
    name: 'Sabe de Seguros | Desarrollo Web Full-Stack',
    description: 'Plugin WordPress (PHP, MySQL, Vue, Vuetify) para cotizadores web responsivos; ~40% menos tiempo de cotización. Gestión de CMS e integración con sistemas basados en Excel.',
    year: '2024'
  },
  {
    name: 'Universidad Rafael Belloso Chacín | Desarrollo Web Full-Stack',
    description: 'Trabajo de grado: app de crowdfunding responsive con FastAPI (Python), React y Bootstrap; mejora de accesibilidad para aportes a iniciativas sociales.',
    year: '2024'
  },
  {
    name: "Romano's Pizza | Desarrollo Web Full-Stack",
    description: 'Proyecto POS web con framework personal (PHP, MySQL, Vue.js, Vuetify) para ventas e inventario.',
    year: '2022'
  },
  {
    name: 'SysModelers | Desarrollo Web Front-end',
    description: 'UI/UX accesibles con React y CoreUI. Optimización de funcionalidades CRUD y responsividad, incluyendo mejoras de rendimiento.',
    year: '2022'
  },
  {
    name: 'Regalado Group: Bienes Raíces | Encargado de Departamento de Redes',
    description: 'Administración del sitio (Joomla CMS), listados de propiedades y soporte a usuarios/asesores y a la agencia publicitaria.',
    year: '2023'
  }
]

export const links: Record<string, NavLink> = {
  home: { name: 'Inicio', url: '/', Icon: HomeIcon },
  projects: { name: 'Proyectos', url: '/#projects', Icon: ProjectsIcon },
  projectsPage: { name: 'Proyectos', url: '/projects', Icon: ProjectsIcon },
  experience: { name: 'Experiencia', url: '/#experience', Icon: ExperienceIcon },
  skills: { name: 'Habilidades', url: '/#skills', Icon: SkillsIcon },
  cv: { name: 'Descargar CV', url: '/assets/luis-medina-cv.pdf', target: '_blank', Icon: CVIcon },
  contact: { name: 'Contáctame', url: '/contact', Icon: ContactIcon }
}

export const skills = [
  { src: 'js', alt: 'JavaScript Logo' },
  { src: 'ts', alt: 'Typescript Logo' },
  { src: 'react', alt: 'React Logo' },
  { src: 'nextjs', alt: 'NextJS Logo' },
  { src: 'vuejs', alt: 'Vue.js Logo' },
  { src: 'tailwindcss', alt: 'Tailwind CSS Logo' },
  { src: 'css', alt: 'CSS Logo' },
  { src: 'html', alt: 'HTML Logo' },
  { src: 'bootstrap', alt: 'Bootstrap Logo' },
  { src: 'vuetify', alt: 'Vuetify Logo' },
  { src: 'python', alt: 'Python Logo' },
  { src: 'fastapi', alt: 'FastAPI Logo' },
  { src: 'c', alt: 'C Logo' },
  { src: 'csharp', alt: 'C# Logo' },
  { src: 'java', alt: 'Java Logo' },
  { src: 'php', alt: 'PHP Logo' },
  { src: 'wordpress', alt: 'WordPress Logo' },
  { src: 'joomla', alt: 'Joomla Logo' },
  { src: 'laravel', alt: 'Laravel Logo' },
  { src: 'postgresql', alt: 'PostgreSQL Logo' }
]

export const tools = [
  { src: 'git', alt: 'Git Logo' },
  { src: 'github', alt: 'GitHub Logo' },
  { src: 'nodejs', alt: 'Node.js Logo' },
  { src: 'scrum', alt: 'Scrum Logo' },
  { src: 'excel', alt: 'Excel Logo' },
  { src: 'word', alt: 'Word Logo' }
]
