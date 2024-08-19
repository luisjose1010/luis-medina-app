import Button from '../Button';

const CallToAction = () => {
    return (
        <section id="cta" className="flex flex-col h-96 p-12 gap-5 justify-center items-center text-center text-white bg-clouds bg-cover relative">
            <h2 className="text-4xl font-bold mb-3">¿Tienes algo en mente?</h2>
            <p className="text-lg mb-2 w-1/2">
                No te quedes con la duda, podemos hacerlo realidad, estoy aquí para ayudarte.
            </p>
            <section className="flex justify-center">
                <Button.LinkSolid href="#cta" size="largest" className="text-black">
                    Contáctame
                </Button.LinkSolid>
            </section>
        </section>
    );
};

export default CallToAction;
