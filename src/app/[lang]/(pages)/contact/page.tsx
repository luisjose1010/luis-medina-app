'use client' // TODO: delete if possible
import { ContactUs } from '@/components/ContactUs'
import { useTranslation } from '@/hooks/useTranslation'

export default function ContactPage () {
  const { APP } = useTranslation()

  return (
    <>
      <h1 className="my-3 text-caribbean_current mx-12 text-4xl font-bold">{APP.CONTACT.TITLE}</h1>
      <hr className="mx-12 h-px bg-caribbean_current/50 border-0 rounded-full lg:mt-2" />
      <article className="p-12 bg-white overflow-hidden relative z-10">
        <ContactUs />
      </article>
    </>
  )
}
