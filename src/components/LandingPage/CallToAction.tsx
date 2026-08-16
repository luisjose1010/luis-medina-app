'use client' // TODO: delete if possible
import { Button } from '@/components/Button'
import { useLinks } from '@/hooks/useLinks'
import { useTranslation } from '@/hooks/useTranslation'

export function CallToAction () {
  const { APP, UI } = useTranslation()
  const { links } = useLinks()

  return (
    <section id="cta" className="flex flex-col h-min-96 p-6 gap-5 justify-center items-center text-center text-white bg-clouds bg-cover bg-center relative overflow-hidden lg:h-96 md:p-12">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-dark_purple/45 via-transparent to-caribbean_current/45" />
      <h2 className="reveal relative font-display text-4xl font-bold mb-3 tracking-tight drop-shadow-[0_2px_12px_rgba(22,15,41,0.45)] lg:text-5xl">{APP.CALL_TO_ACTION.TITLE}</h2>
      <p className="relative text-lg mb-2 w-full text-balance drop-shadow-[0_1px_8px_rgba(22,15,41,0.4)] lg:w-1/2">
        {APP.CALL_TO_ACTION.DESCRIPTION}
      </p>
      <section className="relative flex justify-center">
        <Button.LinkSolid href={links.contact.url} size="largest" className="text-dark_purple">
          {UI.BUTTON.CONTACT_ME}
        </Button.LinkSolid>
      </section>
    </section>
  )
}
