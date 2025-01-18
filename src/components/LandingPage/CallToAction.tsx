'use client' // TODO: delete if possible
import { Button } from '@/components/Button'
import { useLinks } from '@/hooks/useLinks'
import { useTranslation } from '@/hooks/useTranslation'

export function CallToAction () {
  const { APP, UI } = useTranslation()
  const { links } = useLinks()

  return (
    <section id="cta" className="flex flex-col h-min-96 p-6 gap-5 justify-center items-center text-center text-white bg-clouds bg-cover relative lg:h-96 lg:p-12">
      <h2 className="text-4xl font-bold mb-3">{APP.CALL_TO_ACTION.TITLE}</h2>
      <p className="text-lg mb-2 w-full lg:w-1/2">
        {APP.CALL_TO_ACTION.DESCRIPTION}
      </p>
      <section className="flex justify-center">
        <Button.LinkSolid href={links.contact.url} size="largest" className="text-dark_purple">
          {UI.BUTTON.CONTACT_ME}
        </Button.LinkSolid>
      </section>
    </section>
  )
}
