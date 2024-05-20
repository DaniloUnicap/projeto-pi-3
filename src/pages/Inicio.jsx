import { Botao } from "../components/Botao"
import hero from "../assets/início/hero.svg"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const Inicio = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:mt-24 px-4 md:px-16 ">
                <div className="flex flex-col">
                    <h1 className={`text-5xl italic text-center mt-8 md:mx-auto md:text-7xl ${theme === "ligth" ? "text-black" : "text-white"}`}><span className="font-bold  text-sky-600">Bird</span>Tech</h1>

                    <p className="my-12 text-center px-8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam debitis voluptas in blanditiis veritatis explicabo, dignissimos nostrum officia, dicta aspernatur perspiciatis maxime provident! Ipsa excepturi exercitationem provident labore ut officiis.
                    </p>

                    <div className="flex justify-center md:mx-auto">
                        <Botao prop="Conecte-se" />
                    </div>
                </div>

                <div className="w-96 h-96  mx-auto flex justify-center items-center">
                    <img src={hero} alt="" />
                </div>
            </div>

            <div className="bg-[#f2f2f2] w-full p-6 mt-36 text-black">
                <h2 className="text-xl font-semibold text-center">Setor de TI no Brasil deve crescer 12% em 2024, superando os Estados Unidos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 md:mt-6">
                    <div className="my-8 md:my-0">
                        <iframe src="https://www.youtube.com/embed/4fYSC25KDxE?si=KIBNYFHIBhlDe8QG" frameborder="0" className="w-full h-80 md:h-96"></iframe>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae ex nulla aut harum voluptatum nisi iste animi, quod eaque cum rem minima expedita dolorem praesentium labore voluptatem beatae eveniet.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae ex nulla aut harum voluptatum nisi iste animi, quod eaque cum rem minima expedita dolorem praesentium labore voluptatem beatae eveniet.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae ex nulla aut harum voluptatum nisi iste animi, quod eaque cum rem minima expedita dolorem praesentium labore voluptatem beatae eveniet.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}