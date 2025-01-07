import { ContactUs } from '@/components/ContactUs'

export default function ContactPage () {
  return (
    <>
      <h1 className="my-3 text-caribbean_current mx-12 text-4xl font-bold">Contacto</h1>
      <hr className="mx-12 h-px bg-caribbean_current/50 border-0 rounded-full lg:mt-2" />
      <article className="p-12 bg-white overflow-hidden relative z-10">
        <ContactUs />
      </article>
    </>
  )
}
