import { HomeIcon, ProjectsIcon, ExperienceIcon, SkillsIcon, ContactIcon } from "@/assets/Icons"

/* El código siguiente exporta un arreglo llamado `devProjects`, contiene objetos que representan
proyectos de desarrollo diversos. Cada objeto en el arreglo incluye propiedades como `name`, `description`
y `url` para proyectos como React Native, Node.js y Express. Este arreglo puede ser importado y usado
en otras partes del codebase. */
export const projects = [
  {
    name: 'Plataforma Crowdfunding',
    description: 'Un sitio web con la finalidad de gestionar las donaciones y promocionar proyectos de impacto social en Venezuela.',
    source: ' https://github.com/luisjose1010/PlataformaCrowdfunding',
    live: 'http://plataformacrowdfunding.herokuapp.com/',
    url: '/plataforma-crowdfunding',
    tags: ['JavaScript', 'React', 'Python', 'FastAPI', 'SQLAlchemy', 'Bootstrap', 'Styled Components'],
  },
  {
    name: 'App de Productividad',
    description: 'Una aplicación web para ayudar a los usuarios a gestionar sus tareas y proyectos.',
    source: 'https://github.com/luisjose1010/TodoList-React',
    live: 'https://todolist-react-app.netlify.app/',
    url: '/productividad-app',
    tags: ['JavaScript', 'React'],
  },
  {
    name: 'Sitio Web de Tienda Online',
    description: 'Un sitio web para vender productos electrónicos en línea.',
    source: 'https://github.com/luisjose1010/ecommerce-website',
    live: 'https://ecommerce-website-louisjose1010.netlify.app/',
    url: '/tienda-online',
    tags: ['JavaScript', 'React', 'Node.js', 'Express'],
  },
  {
    name: 'API RESTful para Blogs',
    description: 'Una API que permite gestionar artículos y categorías de un blog.',
    source: 'https://github.com/luisjose1010/blog-api',
    live: 'https://blog-api-louisjose1010.herokuapp.com/api/v1',
    url: '/api-restful',
    tags: ['JavaScript', 'Node.js', 'Express'],
  },
  {
    name: 'Aplicación de Chat en tiempo real',
    description: 'Una aplicación web para enviar y recibir mensajes en tiempo real.',
    source: 'https://github.com/luisjose1010/realtime-chat-app',
    live: 'https://realtimechatapplouisjose1010.netlify.app/',
    url: '/chat-en-tiempo-real',
    tags: ['JavaScript', 'React', 'Socket.io'],
  },
  {
    name: 'Aplicación de Gestión de Inventario',
    description: 'Una aplicación web para gestionar el inventario de una tienda.',
    source: 'https://github.com/luisjose1010/inventory-management-app',
    live: 'https://inventorymanagementapplouisjose1010.netlify.app/',
    url: '/gestion-de-inventario',
    tags: ['JavaScript', 'React', 'Node.js', 'Express'],
  },
  {
    name: 'Aplicación de Gestión de Personal',
    description: 'Una aplicación web para gestionar información sobre empleados y proyectos asignados.',
    source: 'https://github.com/luisjose1010/staff-management-app',
    live: 'https://staffmanagementapplouisjose1010.netlify.app/',
    url: '/gestion-de-personal',
    tags: ['JavaScript', 'React', 'Node.js', 'Express'],
  },
  {
    name: 'API RESTful para Gestión de Personal',
    description: 'Una API que permite gestionar información sobre empleados y proyectos asignados.',
    source: 'https://github.com/luisjose1010/staff-management-api',
    live: 'https://staffmanagementapilouisjose1010.herokuapp.com/api/v1',
    url: '/gestion-de-personal-api',
    tags: ['JavaScript', 'Node.js', 'Express'],
  },
  {
    name: 'Aplicación de Gestión de Estadísticas',
    description: 'Una aplicación web para visualizar estadísticas sobre proyectos y empleados.',
    source: 'https://github.com/luisjose1010/dashboard-app',
    live: 'https://dashboardapplouisjose1010.netlify.app/',
    url: '/gestion-de-estadisticas',
    tags: ['JavaScript', 'React'],
  },
];

export const navLinks = [
  { name: 'Inicio', url: '/', icon: HomeIcon },
  { name: 'Proyectos', url: '/#projects', icon: ProjectsIcon },
  { name: 'Experiencia', url: '/#experience', icon: ExperienceIcon },
  { name: 'Habilidades', url: '/#skills', icon: SkillsIcon },
  { name: 'Contáctame', url: '/#', icon: ContactIcon },
]

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
