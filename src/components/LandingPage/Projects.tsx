import Button from "../Button";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  className?: string;
}

const ProjectCard = ({ title, description, link, className }: ProjectProps) => (
  <article className={`flex flex-col justify-between gap-4 bg-caribbean_current text-seasalt rounded-2xl shadow-md p-6 transition ${className}`}>
    <section>
      <h3 className="text-3xl font-bold mb-2">{title}</h3>
      <p className="text-base line-clamp-4">{description}</p>
    </section>

    <section className="flex gap-3">
      <Button.LinkSolid href={link} size="small" className="text-caribbean_current">
        Explorar
      </Button.LinkSolid>
      <Button.LinkOutline href={link} size="small" className="hover:bg-seasalt hover:text-caribbean_current hover:outline-seasalt">
        GitHub
      </Button.LinkOutline>
    </section>
  </article>
);

const Projects = () => {
  return (
    <section id="projects" className="flex h-screen p-12 flex-col-reverse gap-2 text-seasalt justify-evenly items-center bg-forest bg-cover">
      <article className="p-6 w-1/2 self-start">
        <h2 className="text-5xl font-bold mb-3">Proyectos</h2>
        <p className="mb-5">
          Explora mi experiencia en el desarrollo de proyectos de software y soluciones web a lo largo de mi trayectoria. En la sección a continuación, encontrarás detalles sobre los trabajos más destacados que he realizado.
        </p>
        <section className="flex items-center gap-8 justify-start">
          <Button.LinkSolid href="#" size="large" className="text-black">
            Explorar
          </Button.LinkSolid>
          <Button.LinkOutline href="#" size="large" className="hover:text-black hover:bg-seasalt hover:outline-seasalt">
            GitHub
          </Button.LinkOutline>
        </section>
      </article>
      <article className="flex gap-12 justify-center mt-10">
        <ProjectCard
          title="Project 1"
          description="This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1.This is a description of Project 1."
          link="#projects"
          className="w-full max-w-xs"
        />
        <ProjectCard
          title="Project 2"
          description="This is a description of Project 2."
          link="#projects"
          className="w-full max-w-xs"
        />
        <ProjectCard
          title="Project 3"
          description="This is a description of Project 3."
          link="#projects"
          className="w-full max-w-xs"
        />
      </article>
    </section>
  );
};

export default Projects;

