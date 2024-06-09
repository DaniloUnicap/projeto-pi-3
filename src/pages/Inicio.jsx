import { Botao } from "../components/Botao";
import hero from "../assets/início/hero.svg";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { Link } from 'react-router-dom';

export const Inicio = () => {
    const { theme } = useContext(ThemeContext);
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-6 md:mt-6 px-4 md:px-36 ">
                <div className="flex flex-col">
                    <h1 className={`text-5xl italic text-center mt-8 md:mx-auto md:text-7xl ${theme === "light" ? "text-black" : "text-white"}`}>
                        <span className="font-bold text-sky-600">Bird</span>Tech
                    </h1>

                    <p className="my-12 text-justify px-8">
                        Seja bem-vindo ao BirdTech, nosso site de trilhas de cursos de tecnologia! Aqui, você está prestes a embarcar em uma jornada de aprendizado e crescimento no vasto universo da tecnologia. Explore nossas trilhas cuidadosamente elaboradas para aprimorar suas habilidades, conquistar novos conhecimentos e impulsionar sua carreira. Estamos aqui para guiá-lo em cada passo do caminho. Vamos começar essa jornada juntos!
                    </p>

                    {!isAuthenticated && (
                        <div className="flex flex-col justify-center gap-2 md:mx-auto">
                            <Link to="entrar" className="mx-auto"><Botao prop="Conecte-se" /></Link>
                            <Link to="trilhas" className="underline text-center text-sky-600 hover:text-sky-400 transition-all ease-linear">Continuar sem login</Link>
                        </div>
                    )}
                </div>

                <div className="w-96 h-96 mx-auto max-w-[320px] min-w-[200px] flex justify-center items-center">
                    <img src={hero} alt="" className="w-full" />
                </div>
            </div>

            <h2 className="text-center text-2xl mt-16 mb-8">Veja a importância do setor de TI no Brasil</h2>
            <div className="bg-[#EBEBEF] w-full p-6 mt-6 text-black md:px-36">
                <h2 className="text-xl font-semibold text-center">Setor de TI no Brasil deve crescer 12% em 2024, superando os Estados Unidos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 md:mt-6">
                    <div className="my-8 md:my-0">
                        <iframe src="https://www.youtube.com/embed/4fYSC25KDxE?si=KIBNYFHIBhlDe8QG" frameborder="0" className="w-full h-80 md:h-96"></iframe>
                    </div>
                    <div>
                        <p>
                            O setor de Tecnologia da Informação (TI) desempenha um papel crucial no desenvolvimento e progresso do Brasil, impactando positivamente todos os aspectos da sociedade, da economia à educação, da saúde à segurança. Sua importância é incontestável e crescente, moldando o presente e definindo o futuro do país.
                        </p>
                        <p>
                            Em um mundo cada vez mais digitalizado, a TI é a espinha dorsal que sustenta a infraestrutura tecnológica de empresas, governos e organizações de todos os tamanhos. No Brasil, a adoção de tecnologias de informação tem sido um catalisador para a inovação, a eficiência operacional e a competitividade no mercado global. Empresas de diversos setores, desde o agronegócio até o comércio eletrônico, dependem da TI para otimizar processos, oferecer produtos e serviços inovadores e alcançar novos mercados.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
