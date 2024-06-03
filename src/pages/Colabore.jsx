import { Swiper, SwiperSlide } from 'swiper/react'
import PixQRCodeGenerator from '../components/PixQRCodeGenerator'
import hero from '../assets/colabore/hero.png'

export const Colabore = () => {

    const data = [
        {id: 1, imagem: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
        {id: 2, imagem: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png'},
        {id: 3, imagem: 'https://sujeitoprogramador.com/wp-content/uploads/2022/03/Frame-321.png'},
        {id: 4, imagem: 'https://sujeitoprogramador.com/wp-content/uploads/2022/01/thumb-1.png'}
    ]

    return (
        <div className='px-4 md:px-48'>
            

            <section className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:mt-12 lg:gap-4 lg:justify-center">
                <div>
                <h1 className="text-4xl font-semibold text-center mb-12 lg:text-start">Colabore com o nosso projeto</h1>
                    <p className="text-justify lg:text-start">
                        A BirdTech nasceu a partir do desejo de incentivar os estudos na área tech, com isso buscamos promover gratuitamente conteúdos filtrados para pessoas que não possuem condições financeiras para adquirir materiais pagos. Para continuarmos com nosso trabalho, é necessário que haja uma manutenção constante, para mantermos a comunidade cada vez mais atualizada. Portanto, se você foi ajudado em algum momento por nossa plataforma e tiver condições para ajudar novos estudantes, aceitamos doações a partir de R$2,00.
                    </p>
                </div>

                <div className=''>
                    <img src={hero} alt="" className='mx-auto' />
                </div>
            </section>

            <div className='mt-20'>
                <div className="max-w-[400px]  mx-auto">
                    <PixQRCodeGenerator>

                    </PixQRCodeGenerator>
                </div>
            </div>
                

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
                                <img src={item.imagem} alt="Slider" className='lg:h-[400px] lg:w-full' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

        </div>
    )
}