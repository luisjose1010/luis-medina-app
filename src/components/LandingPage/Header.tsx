"use client"

import { SyntheticEvent, useState } from "react";
import Image from "next/image";
import PersonalImage from "@/assets/luis-medina.png";
import Button from "../Button";

interface PresentationProps {
    title?: string,
    text: string,
    children?: React.ReactNode,
}

const Presentation = ({ title = 'Luis José Medina Sandoval', text, children }: PresentationProps) => {
    return (
        <>
            <h1 className="text-4xl font-bold mb-4 bg-white">{title}</h1>
            <span>{text}</span>
            <div>
                {children}
            </div>
        </>
    )
}

const presentations = [
    (
        <Presentation
            key={0}
            text="Soy un desarrollador de software con 3 años de experiencia laboral, incluida la gestión de software empresarial. Me considero una persona muy determinada, analítica y comunicativamente asertiva, con un gran interés por aprender y resolver problemas de manera creativa y estructurada."
        ></Presentation>
    ),
    (
        <Presentation
            key={1}
            title="GitHub"
            text="Aquí encontrarás un vistazo a mis proyectos personales y laborales. Desde pequeño, me encantaron las computadoras, entenderlas y disfrutar de crear programas que resolviesen problemas. Ahora, he convertido esa pasión en mi carrera profesional."
        >
            <Button.Outline size="small" onClick={() => window.open('https://github.com/luisjose1010', '_blank')} className="ml-2 mt-4">
                GitHub
            </Button.Outline>
        </Presentation>
    ),
    (
        <Presentation
            key={2}
            title="LinkedIn"
            text="Si deseas más información sobre mis proyectos, experiencia laboral o cualquier otro tema, no dudes en visitar mi perfil en LinkedIn. Allí encontrarás toda la información necesaria para que te sientas en el lugar correcto."
        >
            <Button.Outline size="small" onClick={() => window.open('https://www.linkedin.com/in/luis-jose-medina-sandoval-444262195/', '_blank')} className="ml-2 mt-4">
                LinkedIn
            </Button.Outline>
        </Presentation>
    ),
    (
        <Presentation
            key={3}
            title="Currículum Vitae"
            text="Clickea aquí para descargar mi currículum vitae y obtener información detallada sobre mis experiencias laborales, habilidades y proyectos destacados."
        >
            <Button.Outline size="small" onClick={() => window.open('assets/luis-medina-cv.pdf', '_blank')} className="ml-2 mt-4">
                Descargar CV
            </Button.Outline>
        </Presentation>
    ),
    // (
    //     <Presentation
    //         key={4}
    //         title="Todos mis proyectos"
    //         text="En la página a continuación se encuentran mis principales proyectos académicos y profesionales."
    //     >
    //         <Button.Outline size="small" onClick={() => window.open('/proyectos')} className="ml-2 mt-4">
    //             Proyectos
    //         </Button.Outline>
    //     </Presentation>
    // ),
]

const Header: React.FC = ({ }) => {
    const [step, setStep] = useState(0)
    const [animation, setAnimation] = useState('')

    const handleNextStep = (event: SyntheticEvent<HTMLDivElement>) => {
        event.preventDefault()
        event.stopPropagation()

        if (step < presentations.length - 1) {
            setAnimation('slide-off-top')
        } else {
            setAnimation('fade-in')
            setStep(0)
        }
    }

    const handleEndAnimation = () => {
        if (animation === 'slide-off-top' && step < presentations.length) {
            setStep(prevState => prevState + 1)
            setAnimation('slide-in-bottom')
        } else if (step >= presentations.length) {
            setAnimation('fade-in')
            setStep(0)
        } else {
            setAnimation('')
        }
    }

    return (
        <header id="header" className="p-12 flex h-screen">
            {/* Side decoration */}
            <div onClick={handleNextStep} className="flex relative flex-col justify-center cursor-pointer marker:text-xl text-desert_sand  before:block before:absolute before:-top-[50%] before:bottom-[65%] before:border-l-[3px] before:border-caribbean_current before:rounded-2xl after:block after:absolute after:top-[65%] after:-bottom-20 after:border-l-[3px] after:border-caribbean_current after:rounded-2xl after:overflow-hidden after:-z-10">
                {presentations.map((presentation, index) => (
                    <a href="#" key={index} className={`-my-2 transition-colors delay-200 ${step === index ? 'text-caribbean_current' : ''}`}>
                        <li></li>
                    </a>
                ))}
            </div>
            <article className="w-full">
                <article className="flex flex-wrap text-caribbean_current min-h-32 xl:min-h-40 px-12 ml-4 ">
                    <article className="flex justify-center w-full max-h-9 mt-6">
                        <svg className="fill-current h-6 w-6 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                        <span className="font-semibold tracking-tight">Luis Medina App</span>
                    </article>
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-dark_cyan hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>
                    <nav className="flex text-sm font-bold w-full flex-grow lg:flex lg:w-auto lg:justify-between">
                        <a href="#header" className="hover:text-caribbean_current-800">
                            Inicio
                        </a>
                        <a href="#projects" className="hover:text-caribbean_current-800">
                            Proyectos
                        </a>
                        <a href="#skills" className="hover:text-caribbean_current-800">
                            Habilidades
                        </a>
                        <a href="#experience" className="hover:text-caribbean_current-800">
                            Experiencia
                        </a>
                        <a href="#" className="hover:text-caribbean_current-800">
                            Contáctame
                        </a>
                    </nav>
                </article>
                <main id="main" className="flex px-12 ml-4 mt-4 lg:gap-10 xl:gap-36 text-caribbean_current">
                    <div className="lg:max-w-md 2xl:max-w-lg overflow-hidden cursor-pointer" onClick={handleNextStep}>
                        <div onAnimationEnd={handleEndAnimation} className={`${animation}`}>
                            {presentations[step]}
                        </div>

                    </div>
                    <Image
                        className="aspect-[79/103] object-contain ml-10 -m-8"
                        height={350}
                        src={PersonalImage}
                        alt="Imagen personal"
                    />
                </main>
            </article>
        </header>
    );
};

export default Header;


