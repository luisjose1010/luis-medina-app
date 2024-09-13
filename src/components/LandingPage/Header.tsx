"use client"
import { useState, useEffect, SyntheticEvent } from "react";
import Image from "next/image";
import { links } from "@/lib/consts";
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
            <div className="flex flex-wrap gap-1 mt-3 ml-1 mb-1 lg:gap-3">
                {children}
            </div>
        </>
    )
}

const presentations = [
    (
        <Presentation
            key={0}
            text="Soy ingeniero en informática y un desarrollador de software con 3 años de experiencia laboral, incluida la gestión de software empresarial. Me considero muy determinado, analítico y asertivo, con un gran interés por aprender y resolver problemas."
        >
            <Button.LinkSolid dark={true} size="small" href="/contacto" className="mb-1 text-seasalt">
                Contáctame
            </Button.LinkSolid>
            <Button.LinkOutline dark={true} size="small" href="/assets/luis-medina-cv.pdf" target="_blank" className="mb-1 hover:text-seasalt">
                Descargar CV
            </Button.LinkOutline>
        </Presentation>
    ),
    (
        <Presentation
            key={1}
            title="GitHub"
            text="Aquí encontrarás un vistazo a mis proyectos personales y laborales. Desde pequeño, me encantaron las computadoras, entenderlas y disfrutar de crear programas que resolviesen problemas. Ahora, he convertido esa pasión en mi carrera profesional."
        >
            <Button.LinkOutline dark={true} size="small" href="https://github.com/luisjose1010" target="_blank" className="hover:text-seasalt">
                GitHub
            </Button.LinkOutline>
        </Presentation>
    ),
    (
        <Presentation
            key={2}
            title="LinkedIn"
            text="Si deseas más información sobre mis proyectos, experiencia laboral o cualquier otro tema, no dudes en visitar mi perfil en LinkedIn. Allí encontrarás toda la información necesaria para que te sientas en el lugar correcto."
        >
            <Button.LinkOutline dark={true} size="small" href="https://www.linkedin.com/in/luis-jose-medina-sandoval-444262195/" target="_blank" className="hover:text-seasalt">
                LinkedIn
            </Button.LinkOutline>
        </Presentation>
    ),
    (
        <Presentation
            key={3}
            title="Currículum Vitae"
            text="Clickea aquí para descargar mi currículum vitae y obtener información detallada sobre mis experiencias laborales, habilidades y proyectos destacados."
        >
            <Button.LinkOutline dark={true} size="small" href="/assets/luis-medina-cv.pdf" target="_blank" className="hover:text-seasalt">
                Descargar CV
            </Button.LinkOutline>
        </Presentation>
    ),
    (
        <Presentation
            key={4}
            title="Proyectos"
            text="A lo largo de mi carrera profesional y académica he desarrollado varios proyectos que te presento a continuación."
        >
            <Button.LinkOutline dark={true} size="small" href="/proyectos" className="hover:text-seasalt">
                Proyectos
            </Button.LinkOutline>
        </Presentation>
    ),
]

const Header: React.FC = ({ }) => {
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

    // Activate the slide every 5 seconds
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
                <NavBar links={[
                    links.home,
                    links.projects,
                    links.experience,
                    links.skills,
                    links.contact,
                ]} className="ml-4" />
                <main id="main" className="flex px-12 ml-4 mt-4 overflow-hidden text-caribbean_current gap-5 cursor-pointer lg:gap-12 xl:gap-60 max-lg:flex-wrap" onClick={handleNextStep}>
                    <div className="overflow-hidden lg:max-w-md xl:max-w-lg 2xl:max-w-3xl">
                        <div onAnimationEnd={handleEndAnimation} className={`${animation} ${animation !== '' && 'relative -z-10' /* behind while animated */}`}>
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


