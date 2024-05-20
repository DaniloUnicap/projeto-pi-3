import { Swiper, SwiperSlide } from 'swiper/react'

export const Colabore = () => {

    const data = [
        {id: 1, imagem: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
        {id: 2, imagem: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png'},
        {id: 3, imagem: 'https://sujeitoprogramador.com/wp-content/uploads/2022/03/Frame-321.png'},
        {id: 4, imagem: 'https://sujeitoprogramador.com/wp-content/uploads/2022/01/thumb-1.png'}
    ]

    return (
        <div className='px-4 md:px-16'>
            <h1 className="text-4xl font-semibold text-center mt-8 mb-12">Colabore com o nosso projeto</h1>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <p className="px-4 leading-7 mx-auto">
                        A BirdTech nasceu a partir do desejo de incentivar os estudos na área tech, com isso buscamos promover gratuitamente conteúdos filtrados para pessoas que não possuem condições financeiras para adquirir materiais pagos. Para continuarmos com nosso trabalho, é necessário que haja uma manutenção constante, para mantermos a comunidade cada vez mais atualizada. Portanto, se você foi ajudado em algum momento por nossa plataforma e tiver condições para ajudar novos estudantes, aceitamos doações apartir de R$2,00. Cada contribuição, por menor que seja, faz a diferença e nos ajuda a continuar oferecendo suporte a novos estudantes.
                        Caso não possua condições, nos ajude compartilhando e espalhando nossa plataforma para novas pessoas, você poderá ajudar novos ingressantes da área TECH!
                        Juntos, podemos construir uma comunidade mais inclusiva e capacitada na área de tecnologia. Obrigado por considerar apoiar nosso projeto e por ser parte dessa jornada conosco!
                    </p>
                </div>

                <div className="w-max-[400px] h-[400px] bg-sky-600 flex items-center justify-center">
                    <p>Área do gerador de QRCode</p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-center my-16 ">Algum título aqui</h2>

                <div className=''>
                    <Swiper
                        slidesPerView={1}
                        pagination={{clickable: true}}
                        navigation={{clickable: true}}
                        autoplay={{ delay: 7000 }}
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img src={item.imagem} alt="Slider" className='lg:h-[700px] lg:w-full' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

        </div>
    )
}