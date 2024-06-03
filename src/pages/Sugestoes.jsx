import hero from '../assets/sugestões/feedback.png'
import { Botao } from '../components/Botao'

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

            <section className='mt-28 font-bold text-lg'>
                <h2 className='text-center mb-6'>Em qual ponto você acha que devemos melhorar?</h2>
                <div className='flex flex-col gap-6'>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder='Título da sugestão'
                        className='bg-[#242125] rounded-md p-2 outline-none'
                    />
                    <textarea
                        name=""
                        id=""
                        placeholder='Faça sua sugestão aqui'
                        className='bg-[#242125] rounded-md p-2 outline-none'>

                    </textarea>
                    <div className='mx-auto'>
                        <Botao prop={"Enviar sugestão"}/>
                    </div>
                </div>

            </section>

        </div>
    )
}