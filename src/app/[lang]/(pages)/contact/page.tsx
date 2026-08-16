'use client' // TODO: delete if possible
import { ContactUs } from '@/components/ContactUs'
import { useTranslation } from '@/hooks/useTranslation'

export default function ContactPage () {
  const { APP } = useTranslation()

  return (
    <main className="relative overflow-hidden">
      {/* Ambient atmosphere, consistent with the landing hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-dark_cyan-900/60 blur-3xl" />
        <div className="blob blob-slow absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-desert_sand-800/50 blur-3xl" />
      </div>

      <header className="mx-6 md:mx-12">
        <h1 className="font-display my-3 text-4xl font-bold tracking-tight text-flow bg-gradient-to-r from-caribbean_current-300 via-dark_cyan-500 to-caribbean_current-600 bg-clip-text text-transparent lg:text-5xl">
          {APP.CONTACT.TITLE}
        </h1>
        <hr className="h-px bg-caribbean_current/40 border-0 rounded-full lg:mt-2" />
      </header>

      <article className="relative z-10 p-6 md:p-12">
        <ContactUs />
      </article>
    </main>
  )
}
