import Link from "next/link";

interface FooterProps {
  links: NavLink[]
}

const Footer: React.FC<FooterProps> = ({ links }) => {
  return (
    <footer className="flex flex-col justify-between bg-caribbean_current text-seasalt p-6 px-12 min-h-44">
      {/*  */}
      <section className="flex gap-3 md:gap-8 max-md:flex-wrap max-lg:py-3">
        {
          links?.map((link, index) => (
            <Link key={index} href={link.url}>
              <span className="text-xs tracking-widest transition duration-300 ease-in-out hover:text-caribbean_current-800">
                {link.name.toLocaleUpperCase()}
              </span>
            </Link>
          ))
        }
      </section>
      <hr className="h-px bg-seasalt rounded-full" />
      <section className="flex flex-wrap justify-between">
        <section className="flex gap-10">
          <p className="max-lg:pt-4">Luis Medina App</p>
          <p className="w-1/2 text-xs lg:w-1/3 max-lg:p-4">
            Soy un desarrollador de software con 3 años de experiencia laboral, incluida la gestión de software empresarial.
          </p>
        </section>
        <p className="text-xs max-lg:pt-4">
          Copyright &copy; {new Date().getFullYear()} Luis Medina App
        </p>
      </section>
    </footer>
  );
};

export default Footer;
