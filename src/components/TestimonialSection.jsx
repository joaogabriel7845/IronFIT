import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AnimatedSection from "./AnimatedSection"

function TestimonialSection() {
    const peoples = [
        {
            nome: "Carlos Mendonça",
            depoimento: "Treino na IronFit há 2 anos e não troco por nada. Os professores são atenciosos e o ambiente te motiva a dar o máximo todo dia.",
            userPhoto: "https://images.pexels.com/photos/16160859/pexels-photo-16160859.jpeg",
        },
        {
            nome: "Fernanda Rocha",
            depoimento: "Comecei sem saber nada de academia e hoje faço Crossfit 4 vezes por semana. A evolução que tive aqui foi absurda.",
            userPhoto: "https://images.pexels.com/photos/12054969/pexels-photo-12054969.jpeg",
        },
        {
            nome: "Rafael Souza",
            depoimento: "Melhor investimento que fiz na vida. Estrutura top, equipamentos novos e uma equipe que realmente se importa com o seu resultado.",
            userPhoto: "https://images.pexels.com/photos/15418106/pexels-photo-15418106.jpeg",
        }
    ]
    
    return (
            <AnimatedSection>
                <div id="testimonial" className="scroll-mt-30 py-5">
                    <h1 className="text-4xl px-5 text-center font-['Bebas_Neue']">Depoimentos</h1>
                    <div className="w-full flex flex-col justify-center items-center md:flex-row p-10 gap-5">
                        {peoples.map((p) => (
                            <div key={p.userPhoto} className="flex flex-col flex-1 h-72 max-w-md border border-black/10 p-5 gap-2 items-center justify-center shadow-xl rounded-2xl transition-all hover:-translate-y-2 hover:shadow-2xl">
                
                                <img className="w-15 rounded-[50%]" src={p.userPhoto} alt="" />
                
                                <h1 className="font-semibold font-['Google_Sans']">{p.nome}</h1>
                                <p className="text-center font-['Google_Sans']">{p.depoimento}</p>
                                <div className="py-3 px-2.5 rounded-[50%] border border-black/20">
                                    <FontAwesomeIcon icon={faQuoteLeft} color="#A5ACB6" fontSize={32}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
    )
}

export default TestimonialSection