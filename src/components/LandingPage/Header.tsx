"use client"
import { useState, useEffect, SyntheticEvent } from "react";
import Image from "next/image";
import PersonalImage from "@/assets/luis-medina.png";
import NavBar from "../NavBar";
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
            <span className="text-dark_purple/60">{text}</span>
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
            <Button.Outline dark={true} size="small" onClick={() => window.open('https://github.com/luisjose1010', '_blank')} className="ml-2 mt-3 mb-1 hover:text-seasalt">
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
            <Button.Outline dark={true} size="small" onClick={() => window.open('https://www.linkedin.com/in/luis-jose-medina-sandoval-444262195/', '_blank')} className="ml-2 mt-3 mb-1 hover:text-seasalt">
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
            <Button.Outline dark={true} size="small" onClick={() => window.open('assets/luis-medina-cv.pdf', '_blank')} className="ml-2 mt-3 mb-1 hover:text-seasalt">
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
    const [open, setOpen] = useState(false)
    const [step, setStep] = useState(0)
    const [animation, setAnimation] = useState('')

    const handleNextStep = (event?: SyntheticEvent<HTMLElement>) => {
        event?.preventDefault()
        event?.stopPropagation()

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

    // Activa el slide cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextStep()
        }, 5000)
        return () => clearInterval(interval)
    })

    return (
        <header id="header" className="flex h-auto lg:p-12 lg:pb-0 lg:max-2xl:h-screen">
            {/* Side decoration */}
            <div onClick={handleNextStep} className="flex relative flex-col justify-center cursor-pointer marker:text-xl text-desert_sand  before:block before:absolute before:-top-[50%] before:bottom-[65%] before:border-l-[3px] before:border-caribbean_current before:rounded-2xl after:block after:absolute after:top-[65%] after:-bottom-20 after:border-l-[3px] after:border-caribbean_current after:rounded-2xl after:overflow-hidden after:-z-10 max-lg:left-10">
                {presentations.map((_presentation, index) => (
                    <a href="#" key={index} className={`-my-2 transition-colors delay-200 ${step === index ? 'text-caribbean_current' : ''}`}>
                        <li></li>
                    </a>
                ))}
            </div>
            <article className="w-full">
                <article className="flex flex-wrap mt-4 py-2 text-caribbean_current px-12 ml-4 lg:min-h-40">
                    <article className="flex justify-center items-end w-full max-h-9 lg:mt-6">
                        <svg className="fill-current h-6 w-6 sm:mr-4 lg:mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                        <span className="font-semibold tracking-tight">Luis Medina App</span>
                        <button id="nav-button" className="fill-current h-3 w-3 ml-auto relative z-50 focus:outline-none lg:hidden" onClick={() => { setOpen(!open) }
                        }>
                            <span className="sr-only">Open main menu</span>
                            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <span aria-hidden="true" className={`${open ? 'rotate-45' : '-translate-y-1.5'} block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}></span>
                                <span aria-hidden="true" className={`${open ? 'opacity-0' : ''} block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}></span>
                                <span aria-hidden="true" className={`${open ? '-rotate-45' : 'translate-y-1.5'} block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out`}></span>
                            </div>
                        </button>
                    </article>

                    <NavBar
                        open={open}
                        onClose={() => setOpen(false)}
                    />
                </article>
                <main id="main" className="flex px-12 ml-4 mt-4 overflow-hidden text-caribbean_current gap-5 cursor-pointer lg:gap-12 xl:gap-60 max-lg:flex-wrap" onClick={handleNextStep}>
                    <div className="overflow-hidden lg:max-w-md xl:max-w-lg 2xl:max-w-3xl">
                        <div onAnimationEnd={handleEndAnimation} className={`${animation}`}>
                            {presentations[step]}
                        </div>
                    </div>
                    <div className="flex">
                        <i className="w-16 h-16 mt-2 lg:hidden">
                            <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0" /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M12 5L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> <path d="M8 16L12 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> <path d="M16 8L12 4L8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
                        </i>
                        <Image
                            priority={true}
                            className="aspect-[79/103] object-contain -z-20 lg:max-2xl:h-4/5"
                            src={PersonalImage}
                            alt="Imagen personal"
                        />
                    </div>
                </main>
            </article>
        </header>
    );
};

export default Header;


