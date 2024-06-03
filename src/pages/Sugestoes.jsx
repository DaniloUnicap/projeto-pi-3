import hero from '../assets/sugestões/feedback.png'

export const Sugestoes = () => {
    return (
        <div className="px-4 md:px-48">
            <section className='grid grid-cols-1 gap-16 lg:grid-cols-2 lg:mt-12 lg:gap-4 lg:justify-center'>
                <div className=''>
                    <h1 className='text-4xl font-semibold text-center mt-8 mb-12 lg:text-start'>Faça sugestões de melhorias em nosso sistema</h1>
                    <p className='text-justify lg:text-start'>
                        Estamos comprometidos em fornecer um sistema que atenda às suas necessidades de forma eficiente e eficaz. Para continuarmos a evoluir e melhorar nossos serviços, gostaríamos de ouvir suas sugestões e ideias. Sua opinião é fundamental para nós, pois nos ajuda a identificar áreas de melhoria e implementar mudanças que realmente fazem a diferença para nossos usuários.
                    </p>
                </div>

                <div className=''>
                    <img src={hero} alt="" className='mx-auto' />
                </div>
            </section>

        </div>
    )
}