import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function FormSection() {
    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    
    const [tentouEnviar, setTentouEnviar] = useState(false)
    
    const objetivos = [
        "Selecione o seu objetivo",
        "Hipertrofia",
        "Emagrecimento",
        "Condicionamento físico",
        "Ganho de força",
        "Melhora da saúde",
        "Preparação para competições",
        "CrossFit",
        "Aula experimental",
        "Outro",
    ]

    const [objetivo, setObjetivo] = useState(objetivos[0])

    const msg = `Olá meu nome é ${nome} | Telefone: ${telefone} | Objetivo: ${objetivo}`;
    
    return (
        <div className="flex flex-col md:flex-row gap-5 p-5">

            <div className="flex flex-col p-5 border border-black/30 shadow-md gap-5 flex-1">

                <h1 className="text-4xl font-['Bebas_Neue'] text-center">Fale com a gente !</h1>
            
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-['Bebas_Neue']">Nome</h1>
                    <input className={`font-['Google_Sans'] transition-all border border-black/40 focus:border-black outline-0 p-3.75 ${tentouEnviar && nome === "" ? "border-2 border-red-500" : ""}`} id="nome" type="text" placeholder={"Digite o seu nome"} value={nome} onChange={(e) => setNome(e.target.value)}/>
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-['Bebas_Neue']">Telefone</h1>
                    <input className={`font-['Google_Sans'] transition-all border border-black/40 focus:border-black outline-0 p-3.75 ${tentouEnviar && telefone === "" ? "border-2 border-red-500" : ""}`} type="tel" placeholder={"Digite o seu telefone"} value={telefone} onChange={(e) => setTelefone(e.target.value.replace(/\D/g, ""))}/>
                </div>

                <div className="flex flex-col gap-2">
                    
                    <h1 className="text-2xl font-['Bebas_Neue']">Objetivo</h1>

                    <select className={`font-['Google_Sans'] outline-0 border border-black/40 focus:border-black p-3.75 ${tentouEnviar && objetivo === objetivos[0] ? "border-2 border-red-500" : ""}`} value={objetivo} onChange={(e) => setObjetivo(e.target.value)}>
                        {objetivos.map((o) => (
                            <option key={o} value={o}>{o}</option>
                        ))}
                    </select>

                </div>

                <div className="flex justify-center">
                    <button onClick={() => {
                        if(nome === "" || telefone === "" || objetivo === objetivos[0]) {
                            return setTentouEnviar(true)
                        } else {
                            setTentouEnviar(false)
                            window.open(`https://wa.me/5521999999998?text=${msg}`)
                        }
                    }} className="transition-all text-white font-['Google_Sans'] p-3.5 bg-redFit shadow hover:-translate-y-1 hover:shadow-md hover:cursor-pointer">
                        <FontAwesomeIcon icon={faWhatsapp}/>
                        Enviar Mensagem
                    </button>
                </div>
                
            </div>

            <div className="flex flex-col p-5 pb-10 border border-black/30 shadow-md gap-5 flex-1">
                <h1 className="text-4xl font-['Bebas_Neue'] text-center">Informações</h1>

                <div className="flex flex-col gap-5">

                    <div className="flex flex-col text-center">
                        <p><FontAwesomeIcon icon={faLocationDot} color="#333333"/> Av. das Américas, 3250 - Barra da Tijuca, Rio de Janeiro - RJ, 22640-102</p>
                        <p><FontAwesomeIcon icon={faPhone} color="#333333"/> (21) 3587-4621</p>
                    </div>

                    <div>
                        <table className="w-full font-['Google_Sans']">
                            <thead>
                                <tr className="border-b border-black/40 text-2xl font-['Bebas_Neue']">
                                    <th className="text-left p-2 border-r border-black/40">Dia</th>
                                    <th className="text-left p-2">Horario</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-black/40">
                                    <td className="p-2 border-r border-black/40">Segunda a quinta</td>
                                    <td className="p-2">6h às 22h</td>
                                </tr>
                                <tr className="border-b border-black/40">
                                    <td className="p-2 border-r border-black/40">Sexta</td>
                                    <td className="p-2">6h às 21h</td>
                                </tr>
                                <tr className="border-b border-black/40">
                                    <td className="p-2 border-r border-black/40">Sábado</td>
                                    <td className="p-2">8h às 18h</td>
                                </tr>
                                <tr className="border-b border-black/40">
                                    <td className="p-2 border-r border-black/40">Domingo</td>
                                    <td className="p-2">9h às 13h</td>
                                </tr>
                                <tr className="border-b border-black/40">
                                    <td className="p-2 border-r border-black/40">Feriados</td>
                                    <td className="p-2">9h às 13h</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default FormSection