import { Button } from '@/components/Button'

export function CallToAction () {
  return (
    <section id="cta" className="flex flex-col h-min-96 p-6 gap-5 justify-center items-center text-center text-white bg-clouds bg-cover relative lg:h-96 lg:p-12">
      <h2 className="text-4xl font-bold mb-3">¿Tienes algo en mente?</h2>
      <p className="text-lg mb-2 w-full lg:w-1/2">
        No te quedes con la duda, podemos hacerlo realidad, estoy aquí para ayudarte.
      </p>
      <section className="flex justify-center">
        <Button.LinkSolid href="/contacto" size="largest" className="text-dark_purple">
          Contáctame
        </Button.LinkSolid>
      </section>
    </section>
  )
}
