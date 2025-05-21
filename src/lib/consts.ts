import { ContactIcon, EnglishIcon, ExperienceIcon, HomeIcon, ProjectsIcon, SkillsIcon, SpanishIcon } from '@/assets/Icons'

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
    name: 'Plataforma Crowdfunding',
    description: 'Un sitio web basado en crowdfunding de donación con la finalidad de gestionar pagos fácilmente en distintas plataformas y promocionar proyectos de impacto social en Venezuela, con la intención de apoyar y dar visibilidad a personas de bajo recursos, en un estado de necesidad, vulnerabilidad y todo tipo de causas sociales en general.',
    imagesCount: 9,
    note: 'Nota: es posible que los datos tarden en cargarse la primera vez, debido a limitaciones en el host de la API',
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
    note: "Credenciales de prueba: usuario 'admin' y contraseña '1234'",
    links: [
      { type: 'fullstack', label: 'LIVE', url: 'http://romanos-system.atwebpages.com/', isSolidButton: true },
      { type: 'fullstack', label: 'GITHUB', url: 'https://github.com/luisjose1010/romanos-system' }
    ],
    slug: 'romanos-system',
    tags: ['JavaScript', 'VueJS', 'PHP', 'Vite', 'Vuetify', 'Composer', 'Eloquent/Laravel']
  },
  {
    name: 'SabedeSeguros Quoters',
    description: 'Una Aplicación que proporciona diversos cotizadores web responsivos para varios tipos de seguros, desarrollados en forma de un plugin de Wordpress para ser agregados fácilmente al sitio web de la empresa, reemplazando el uso de archivos Excel locales.',
    imagesCount: 9,
    links: [
      { type: 'app', label: 'LIVE', url: 'https://sabedeseguros.com/cotizacion/', isSolidButton: true },
      { type: 'app', label: 'GITHUB', url: 'https://github.com/luisjose1010/sabedeseguros-app' },
      { type: 'api', label: 'LIVE', url: 'https://sabedeseguros.com/wp-json/sq/v1', isSolidButton: true },
      { type: 'api', label: 'GITHUB', url: 'https://github.com/luisjose1010/sabedese-quoters' }
    ],
    slug: 'sabedeseguros-quoters',
    tags: ['JavaScript', 'VueJS', 'PHP', 'Wordpress', 'Vite', 'Vuetify']
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
  }, {
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
    name: 'Sabe de Seguros | Desarrollo Web Full-Stack',
    description: 'En la empresa Sabe de Seguros, entre enero y mayo de 2024, desarrollé diversos cotizadores web responsivos para la página empresarial mediante un plugin personalizado de WordPress, utilizando PHP, MySQL, Vue y Vuetify para integrar de manera eficiente los cotizadores en la plataforma aprovechando las capacidades de gestión de contenido de WordPress para mantener actualizada la información del sitio web.',
    year: '2024'
  },
  {
    name: 'Universidad Rafael Belloso Chacín | Desarrollo Web Full-Stack',
    description: 'En la Universidad Rafael Belloso Chacín, entre enero y abril de 2024, desarrollé mi trabajo especial de grado: una aplicación web responsive de Crowdfunding. Utilicé los frameworks FastAPI (Python), React y Bootstrap para construir esta solución web, enfocándome en la creación de una interfaz de usuario receptiva y adaptable a diferentes dispositivos.',
    year: '2024'
  },
  {
    name: 'Regalado Group: Bienes Raíces | Encargado de Departamento de Redes',
    description: 'En Regalado Group: Bienes Raíces, me desempeñé como Encargado del Departamento de Redes desde marzo de 2022, hasta septiembre de 2023. En este cargo, administré la página web comercial de la empresa, utilizando Joomla CMS como plataforma y los lenguajes PHP, HTML y CSS. Mis responsabilidades incluyeron la gestión y actualización del sitio web en general, así como la administración de los inmuebles en sistema y los datos de la empresa.',
    year: '2022'
  },
  {
    name: 'SysModelers | Desarrollo Web Front-end',
    description: 'Durante mi tiempo como Desarrollador Web Front-end en SysModelers, entre agosto de 2021 y febrero de 2022, desarrollé interfaces gráficas amigables y accesibles utilizando la librería de componentes React y el framework de diseño CoreUI. Esto me permitió crear aplicaciones web de forma modular y eficiente, enfocándome en la experiencia del usuario y la accesibilidad.',
    year: '2021'
  },
  {
    name: "Romano's Pizza | Desarrollo Web Full-Stack",
    description: "En Romano's Pizza, entre julio de 2021 y noviembre de 2022, desarrollé un proyecto de aplicación web tipo punto de venta. Para ello, utilicé un pequeño framework personal basado en PHP, MySQL, Vue.js y Vuetify. Esta solución me permitió crear una aplicación web adaptada a las necesidades específicas del negocio de restaurantes.",
    year: '2021'
  },
  {
    name: 'Corretaje de Seguros ASECA | Gestor de cotizadores Excel',
    description: 'En Corretaje de Seguros ASECA, trabajé como Gestor de Cotizadores Excel desde julio de 2021 hasta mayo de 2024. En este rol, me encargué de la creación y mantenimiento de archivos Excel para la cotización de seguros internacionales, nacionales y regionales. Mis responsabilidades incluían asegurar la precisión y actualización constante de estos cotizadores, lo que permitía a la empresa ofrecer a sus clientes una herramienta eficiente para la evaluación de diferentes planes de cobertura.',
    year: '2021'
  }
]

export const links = {
  home: { name: 'Inicio', url: '/', Icon: HomeIcon },
  projects: { name: 'Proyectos', url: '/#projects', Icon: ProjectsIcon },
  projectsPage: { name: 'Proyectos', url: '/projects', Icon: ProjectsIcon },
  experience: { name: 'Experiencia', url: '/#experience', Icon: ExperienceIcon },
  skills: { name: 'Habilidades', url: '/#skills', Icon: SkillsIcon },
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
