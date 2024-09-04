"use client"
import { useEffect, useRef, FocusEvent } from "react"
import { navLinks } from "@/lib/consts"
import Link from "next/link"
import { CloseIcon } from "@/assets/Icons"

interface NavBarProps {
    open: boolean
    onClose: () => void
}

const NavBar: React.FC<NavBarProps> = ({ open, onClose }) => {
    const navRef = useRef<HTMLElement>(null)
    const linkRef = useRef<HTMLAnchorElement>(null)

    const handleBlur = (event: FocusEvent) => {
        // The second condition prevents the blur from closing the menu with the nav button click, no reopening
        if (event.relatedTarget?.parentElement !== navRef.current && event.relatedTarget?.id !== 'nav-button') {
            onClose()
        }
    }

    useEffect(() => {
        if (open) {
            linkRef.current?.focus()
        }
    }, [open])

    return (
        <>
            <nav className="flex flex-grow text-sm font-bold lg:w-auto lg:justify-between max-lg:hidden items-center">
                {
                    navLinks.map((link, index) => (
                        <Link key={index} href={link.url}>
                            <span className="transition duration-300 ease-in-out hover:text-caribbean_current-800">{link.name}</span>
                        </Link>
                    ))
                }
            </nav>

            <nav
                ref={navRef}
                onBlur={(event) => handleBlur(event)}
                className={`${!open && '-translate-x-[200%]'} z-20 flex flex-col shrink-0 grow-0 justify-around gap-4 p-2.5 shadow-lg backdrop-blur-md rounded-lg border border-slate-600/60 bg-slate-500/40 text-caribbean_current fixed top-2/4 -translate-y-2/4 transition-transform duration-200 left-6 min-h-[auto] min-w-[64px] lg:hidden`}
            >
                {
                    navLinks.map((link, index) => (
                        <Link
                            ref={index === 0 ? linkRef : null}
                            key={index} href={link.url}
                            className="flex aspect-square min-h-[32px] w-20 flex-col items-center justify-center gap-1 rounded-md p-1.5 transition duration-300 ease-in-out text-caribbean_current hover:bg-caribbean_current hover:text-seasalt hover:scale-105"
                        >
                            {<link.icon className="w-16 h-16" />}
                            <small className="text-xs font-medium">
                                {link.name}
                            </small>
                        </Link>
                    ))
                }

                <hr className="dark:border-gray-700/60" />

                <button
                    onClick={() => onClose()}
                    className="flex aspect-square min-h-[32px] w-20 flex-col items-center justify-center gap-1 rounded-md p-1.5 transition duration-300 ease-in-out text-caribbean_current hover:bg-caribbean_current hover:text-seasalt hover:scale-105"
                >
                    <CloseIcon className="w-16 h-16" />
                    <small className="text-xs font-medium">Cerrar</small>
                </button>
            </nav>
        </>
    )
}

export default NavBar