import iconLinkedin from '../assets/footer/linkedin.svg'
import iconGithub from '../assets/footer/github.svg'
import logoUnicap from '../assets/footer/logoUnicap.png'
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from 'react';

export const Footer = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <footer className={`${theme === "light" ? "bg-[#FFFFFF] text-black" : "bg-[#27272A] text-white"} mt-80`}>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                <div className='mx-auto'>
                    <div className='w-[280px] lg:w-auto'>
                        <h4 className='font-bold mb-2'>Equipe de desenvolvimento</h4>
                        <div className="flex gap-2 items-center">
                            <p>Andreza Carrilho</p>
                            <div className='flex gap-1'>
                                <a href="https://www.linkedin.com/in/andreza-carrilho-358177261/" target="_blank"><img src={iconLinkedin} alt="" className='w-5' /></a>
                                <a href="https://github.com/AndrezaCarrilhoo" target="_blank"><img src={iconGithub} alt="" className='w-5' /></a>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p>Antônio Guedes</p>
                            <div className='flex gap-1'>
                                <a href="https://www.linkedin.com/in/ant%C3%B4nio-guedes-ab906a274/" target="_blank"><img src={iconLinkedin} alt="" className='w-5' /></a>
                                <a href="https://github.com/tonigds1" target="_blank"><img src={iconGithub} alt="" className='w-5' /></a>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p>Danilo Fernandes</p>
                            <div className='flex gap-1'>
                                <a href="https://www.linkedin.com/in/dev-danilo-fernandes/" target="_blank"><img src={iconLinkedin} alt="" className='w-5' /></a>
                                <a href="https://github.com/danilozxz" target="_blank"><img src={iconGithub} alt="" className='w-5' /></a>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p>Giovana Araujo</p>
                            <div className='flex gap-1'>
                                <a href="https://www.linkedin.com/in/giovanna-araujo-1b0817270/" target="_blank"><img src={iconLinkedin} alt="" className='w-5' /></a>
                                <a href="https://github.com/giovannaaraujo1" target="_blank"><img src={iconGithub} alt="" className='w-5' /></a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='mx-auto'>
                    <div className='w-[280px] lg:w-auto'>
                        <h4 className='font-bold mb-2'>Professores</h4>
                        <p>Christiane Quaresma</p>
                        <p>Daniel Bezerra</p>
                        <p>Gabriel Fernandes</p>
                        <p>Iago Richard</p>
                        <p>Rennan Cavalcante</p>
                    </div>
                </div>
                <div className='mx-auto'>
                    <div className='w-[280px] lg:w-auto'>
                        <h4 className='font-bold mb-2'>Disciplinas</h4>
                        <p>Design Thinking</p>
                        <p>Programação Orientada a Objetos</p>
                        <p>Redes de Computadores</p>
                        <p>Programação Front-End</p>
                        <p>Gestão de Projetos</p>
                        <p>Análise e Projetos de Software</p>
                        <p>Projeto Integrador III</p>
                    </div>
                </div>
                <div className='mx-auto'>
                    <div className='w-[280px] lg:w-auto'>
                        <h4 className='font-bold mb-2'>Tecnologias utilizadas</h4>
                        <p>ReactJS</p>
                        <p>Javascript</p>
                        <p>TailwindCss</p>
                        <p>Vite</p>
                        <p>Figma</p>
                        <p>Back4app</p>
                        <p>Postman</p>
                    </div>
                </div>

            </div>
            <div className='border-t-2 border-sky-600 mt-8 p-4'>
                <img src={logoUnicap} alt="" className='p-2 mx-auto'/>
            </div>
        </footer>
    )
}