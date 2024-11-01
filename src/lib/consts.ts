import { HomeIcon, ProjectsIcon, ExperienceIcon, SkillsIcon, ContactIcon } from "@/assets/Icons"

export const projects: Project[] = [
  {
    name: 'Plataforma Crowdfunding',
    description: 'Un sitio web basado en crowdfunding de donación con la finalidad de gestionar pagos fácilmente en distintas plataformas y promocionar proyectos de impacto social en Venezuela, con la intención de apoyar y dar visibilidad a personas de bajo recursos, en un estado de necesidad, vulnerabilidad y todo tipo de causas sociales en general.',
    imagesCount: 9,
    source: {
      app: 'https://github.com/luisjose1010/plataforma-crowdfunding',
      api: 'https://github.com/luisjose1010/plataforma-crowdfunding-api',
    },
    live: {
      app: 'https://plataforma-crowdfunding.vercel.app/',
      api: 'https://plataforma-crowdfunding-api.onrender.com/docs',
    },
    slug: 'plataforma-crowdfunding',
    tags: ['JavaScript', 'React', 'Python', 'FastAPI', 'SQLAlchemy', 'Bootstrap', 'Styled Components'],
  },
  {
    name: 'Romano\'s Pizza System',
    description: 'Un sistema de venta web responsivo para una pizzería, con todo catálogo de productos y combos disponibles de la franquicia, otorgando una interfaz accesible para el procesamiento de pedidos, la gestión de clientes y la impresión de facturas.',
    imagesCount: 6,
    notes: "Credenciales de prueba: usuario 'admin' y contraseña '1234'",
    source: 'https://github.com/luisjose1010/romanos-system',
    live: 'http://romanos-system.atwebpages.com/',
    slug: 'romanos-system',
    tags: ['JavaScript', 'VueJS', 'PHP', 'Vite', 'Vuetify', 'Composer', 'Eloquent/Laravel'],
  },
  {
    name: 'SabedeSeguros Quoters',
    description: 'Una Aplicación que proporciona diversos cotizadores web responsivos para varios tipos de seguros, desarrollados en forma de un plugin de Wordpress para ser agregados fácilmente al sitio web de la empresa, reemplazando el uso de archivos Excel locales.',
    imagesCount: 9,
    live: {
      app: 'https://sabedeseguros.com/cotizacion/',
      api: 'https://sabedeseguros.com/wp-json/sq/v1',
    },
    source: {
      app: 'https://github.com/luisjose1010/sabedeseguros-app',
      api: 'https://github.com/luisjose1010/sabedese-quoters',
    },
    slug: 'sabedeseguros-quoters',
    tags: ['JavaScript', 'VueJS', 'PHP', 'Wordpress', 'Vite', 'Vuetify'],
  },
  {
    name: 'Luis Medina App',
    description: 'Portafolio web profesional actual de mi persona.',
    imagesCount: 3,
    source: 'https://github.com/luisjose1010/luis-medina-app',
    live: 'https://luis-medina-app.vercel.app/',
    slug: 'luis-medina-app',
    tags: ['TypeScript', 'React', 'NextJS', 'TailwindCSS'],
  },
];

export const links = {
  home: { name: 'Inicio', url: '/', icon: HomeIcon },
  projects: { name: 'Proyectos', url: '/#projects', icon: ProjectsIcon },
  projectsPage: { name: 'Proyectos', url: '/proyectos', icon: ProjectsIcon },
  experience: { name: 'Experiencia', url: '/#experience', icon: ExperienceIcon },
  skills: { name: 'Habilidades', url: '/#skills', icon: SkillsIcon },
  contact: { name: 'Contáctame', url: '/contacto', icon: ContactIcon },
}

export const skills = [
  { src: "js", alt: "JavaScript Logo" },
  { src: "ts", alt: "Typescript Logo" },
  { src: "react", alt: "React Logo" },
  { src: "nextjs", alt: "NextJS Logo" },
  { src: "vuejs", alt: "Vue.js Logo" },
  { src: "tailwindcss", alt: "Tailwind CSS Logo" },
  { src: "css", alt: "CSS Logo" },
  { src: "html", alt: "HTML Logo" },
  { src: "bootstrap", alt: "Bootstrap Logo" },
  { src: "vuetify", alt: "Vuetify Logo" },
  { src: "python", alt: "Python Logo" },
  { src: "fastapi", alt: "FastAPI Logo" },
  { src: "c", alt: "C Logo" },
  { src: "csharp", alt: "C# Logo" },
  { src: "java", alt: "Java Logo" },
  { src: "php", alt: "PHP Logo" },
  { src: "wordpress", alt: "WordPress Logo" },
  { src: "joomla", alt: "Joomla Logo" },
  { src: "laravel", alt: "Laravel Logo" },
  { src: "postgresql", alt: "PostgreSQL Logo" },
];

export const tools = [
  { src: "git", alt: "Git Logo" },
  { src: "github", alt: "GitHub Logo" },
  { src: "nodejs", alt: "Node.js Logo" },
  { src: "scrum", alt: "Scrum Logo" },
  { src: "excel", alt: "Excel Logo" },
  { src: "word", alt: "Word Logo" },
]
