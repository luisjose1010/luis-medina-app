interface ExperienceItemProps {
  title: string
  description: string
  year: number | string
  children?: React.ReactNode // Optional prop for additional content
}

const ExperienceItem = ({ title, description, year, children }: ExperienceItemProps) => (
    <li data-before={`${year}`} className="p-6 text-left max-w-max sm:max-w-sm md:max-w-md lg:max-w-3xl before:absolute before:content-[attr(data-before)] before:bg-desert_sand before:w-16 before:h-16 before:rounded-full before:-left-7 before:text-dark_purple before:text-center before:font-medium before:flex before:items-center before:justify-center before:lg:-left-14">
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      <p className="text-dark_purple/60 leading-relaxed">{description}</p>
      {
        children != null && (
          <div className="flex p-6 justify-center">
            {children}
          </div>
        )
      }
    </li>
)

export function Experience () {
  return (
    <section id="experience" className="flex flex-col min-h-screen p-12 gap-5 justify-center items-center text-center text-caribbean_current xl:p-16">
      <h2 className="text-3xl font-bold">Experiencia laboral</h2>
      <ul className="relative pl-8 lg:pl-5 before:content-[''] before:absolute before:left-1 before:top-9 before:bottom-40 before:bg-caribbean_current before:w-0.5 before:rounded-full before:lg:-left-6">
        <ExperienceItem
          title="Sabe de Seguros | Desarrollo Web Full-Stack"
          description="En la empresa Sabe de Seguros, entre enero y mayo de 2024, desarrollé diversos cotizadores web responsivos para la página empresarial mediante un plugin personalizado de WordPress, utilizando PHP, MySQL, Vue y Vuetify para integrar de manera eficiente los cotizadores en la plataforma aprovechando las capacidades de gestión de contenido de WordPress para mantener actualizada la información del sitio web."
          year="2024"
        />

        <ExperienceItem
          title="Universidad Rafael Belloso Chacín | Desarrollo Web Full-Stack"
          description="En la Universidad Rafael Belloso Chacín, entre enero y abril de 2024, desarrollé mi trabajo especial de grado: una aplicación web responsive de Crowdfunding. Utilicé los frameworks FastAPI (Python), React y Bootstrap para construir esta solución web, enfocándome en la creación de una interfaz de usuario receptiva y adaptable a diferentes dispositivos."
          year="2024"
        />

        <ExperienceItem
          title="Regalado Group: Bienes Raíces | Encargado de Departamento de Redes"
          description="En Regalado Group: Bienes Raíces, me desempeñé como Encargado del Departamento de Redes desde marzo de 2022, hasta septiembre de 2023. En este cargo, administré la página web comercial de la empresa, utilizando Joomla CMS como plataforma y los lenguajes PHP, HTML y CSS. Mis responsabilidades incluyeron la gestión y actualización del sitio web en general, así como la administración de los inmuebles en sistema y los datos de la empresa."
          year="2022"
        />

        <ExperienceItem
          title="SysModelers | Desarrollo Web Front-end"
          description="Durante mi tiempo como Desarrollador Web Front-end en SysModelers, entre agosto de 2021 y febrero de 2022, desarrollé interfaces gráficas amigables y accesibles utilizando la librería de componentes React y el framework de diseño CoreUI. Esto me permitió crear aplicaciones web de forma modular y eficiente, enfocándome en la experiencia del usuario y la accesibilidad."
          year="2021"
        />

        <ExperienceItem
          title="Romano's Pizza | Desarrollo Web Full-Stack"
          description="En Romano's Pizza, entre julio de 2021 y noviembre de 2022, desarrollé un proyecto de aplicación web tipo punto de venta. Para ello, utilicé un pequeño framework personal basado en PHP, MySQL, Vue.js y Vuetify. Esta solución me permitió crear una aplicación web adaptada a las necesidades específicas del negocio de restaurantes."
          year="2021"
        />

        <ExperienceItem
          title="Corretaje de Seguros ASECA | Gestor de cotizadores Excel"
          description="En Corretaje de Seguros ASECA, trabajé como Gestor de Cotizadores Excel desde julio de 2021 hasta mayo de 2024. En este rol, me encargué de la creación y mantenimiento de archivos Excel para la cotización de seguros internacionales, nacionales y regionales. Mis responsabilidades incluían asegurar la precisión y actualización constante de estos cotizadores, lo que permitía a la empresa ofrecer a sus clientes una herramienta eficiente para la evaluación de diferentes planes de cobertura."
          year="2021"
        />
      </ul>
    </section>
  )
}
