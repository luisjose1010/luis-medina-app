import Image from "next/image";
import { skills, tools } from "@/lib/consts";

const Skills = () => {
    return (
        <section id="skills" className="flex flex-col h-screen p-12 gap-4 justify-center items-center">
            <h2 className="mt-4 text-4xl font-bold text-caribbean_current">Habilidades y tecnologías</h2>
            <p className="text-neutral-500 text-lg text-center mt-2">
                Como profesional, he adquirido una amplia variedad de habilidades y experiencia con diversas tecnologías.
            </p>

            <h3 className="mt-2 font-bold uppercase text-caribbean_current text-center tracking-widest">
                Habilidades
            </h3>
            <ul className="flex flex-wrap w-3/4 p-4 gap-10 justify-center items-center">
                {
                    skills.map((logo, index) => (
                        <li key={index}>
                            <Image
                                key={index}
                                src={`/assets/logos/${logo.src}.svg`}
                                alt={logo.alt}
                                width={48}
                                height={48}
                            />
                        </li>
                    ))
                }
            </ul>

            <h3 className="mt-2 font-bold uppercase text-caribbean_current text-center tracking-widest">
                Herramientas
            </h3>
            <ul className="flex flex-wrap w-3/4 p-4 gap-12 justify-center items-center">
                {
                    tools.map((logo, index) => (
                        <li key={index}>
                            <Image
                                key={index}
                                src={`/assets/logos/${logo.src}.svg`}
                                alt={logo.alt}
                                width={48}
                                height={48}
                            />
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

export default Skills;
