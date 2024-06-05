import { Botao } from "../components/Botao"
import imgFront from "../assets/trilhas/imgFront.svg"
import imgBack from "../assets/trilhas/imgBack.svg"
import imgFerramentas from "../assets/trilhas/imgFerramentas.svg"
import imgRedes from "../assets/trilhas/imgRedes.svg"
import "../App.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const Trilhas = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="px-4 md:px-16 ">
            <h1 className="text-4xl font-semibold text-center mt-8 mb-12">Trilhasde conhecimento</h1>

            <div className="grid grid-cols-1 gap-y-16 gap-0 md:grid-cols-2 md:gap-x-24">
                <div className="flex justify-center md:justify-end">
                    <div className={` ${theme === "light" ? "bg-gray-300 text-black" : "bg-[#242125] text-white"} min-w-[280px] max-w-[320px] p-6 flex flex-col gap-6 rounded-lg`}>
                        <div>
                            <h2 className="font-bold text-center text-xl mb-2">Front-end</h2>
                            <img src={imgFront} alt="" className="h-[200px] mx-auto" />
                        </div>
                        <p className="text-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam in voluptatum dignissimos.
                        </p>

                        <Link to="/cursos/frontend" className="mx-auto">
                            <Botao prop="Iniciar" />
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center md:justify-start">
                    <div className={` ${theme === "light" ? "bg-gray-300 text-black" : "bg-[#242125] text-white"} min-w-[280px] max-w-[320px] p-6 flex flex-col gap-6 rounded-lg`}>
                        <div>
                            <h2 className="font-bold text-center text-xl mb-2">Back-end</h2>
                            <img src={imgBack} alt="" className="h-[200px] mx-auto" />
                        </div>
                        <p className="text-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam in voluptatum dignissimos.
                        </p>

                        <Link to="/cursos/backend" className="mx-auto">
                            <Botao prop="Iniciar" />
                        </Link>

                    </div>
                </div>

                <div className="flex justify-center md:justify-end">
                    <div className={` ${theme === "light" ? "bg-gray-300 text-black" : "bg-[#242125] text-white"} min-w-[280px] max-w-[320px] p-6 flex flex-col gap-6 rounded-lg`}>
                        <div>
                            <h2 className="font-bold text-center text-xl mb-2">Ferramentas ágeis</h2>
                            <img src={imgFerramentas} alt="" className="h-[200px] mx-auto" />
                        </div>
                        <p className="text-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam in voluptatum dignissimos.
                        </p>

                        <Link to="/cursos/ferramentasageis" className="mx-auto">
                            <Botao prop="Iniciar" />
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center md:justify-start">
                    <div className={` ${theme === "light" ? "bg-gray-300 text-black" : "bg-[#242125] text-white"} min-w-[280px] max-w-[320px] p-6 flex flex-col gap-6 rounded-lg`}>
                        <div>
                            <h2 className="font-bold text-center text-xl mb-2">Redes</h2>
                            <img src={imgRedes} alt="" className="h-[200px] mx-auto" />
                        </div>
                        <p className="text-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam in voluptatum dignissimos.
                        </p>

                        <Link to="/cursos/redes" className="mx-auto">
                            <Botao prop="Iniciar" />
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    )
}

