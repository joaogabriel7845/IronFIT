import { useState } from "react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

function FAQSection() {
const faqs = [
    {
        pergunta: "Como faço para me matricular?",
        resposta: "É simples! Entre em contato pelo WhatsApp ou venha pessoalmente à nossa unidade. Nosso time te ajuda a escolher o melhor plano."
    },
    {
        pergunta: "Preciso ter experiência para começar?",
        resposta: "Não! Recebemos alunos de todos os níveis. Nossos professores fazem uma avaliação inicial e montam um treino personalizado pra você."
    },
    {
        pergunta: "Quais são os horários de funcionamento?",
        resposta: "Funcionamos de segunda a sexta das 6h às 22h, sábados das 8h às 18h e domingos das 9h às 13h."
    },
    {
        pergunta: "Posso congelar minha matrícula?",
        resposta: "Sim, oferecemos a opção de congelamento por até 60 dias por ano mediante solicitação na recepção."
    },
    {
        pergunta: "As aulas coletivas estão incluídas no plano?",
        resposta: "Depende do plano. No Basic apenas musculação. No Pro e Premium todas as modalidades estão inclusas."
    }
]

const [aberta, setAberta] = useState(null);

return (
    <div className="p-5 md:p-10">
        <AnimatedSection>
            <fieldset className="border border-black/20 rounded-2xl p-5 py-10 md:p-10 shadow-md">
                <legend className="px-3 font-['Bebas_Neue'] text-center text-prussian text-5xl">Perguntas Frequentes</legend>
            
                {faqs.map((f) => (
                    <div key={f.pergunta} onClick={() => setAberta(f.pergunta === aberta ? null : f.pergunta)} className="flex flex-col gap-2 border-b font-['Google_Sans'] hover:cursor-pointer border-black/10 p-5" >
                        <h1 className="flex justify-between text-xl md:text-2xl hover:cursor-pointer">
                            {f.pergunta}
                            <FontAwesomeIcon className={`transition-all ease duration-350 ${aberta === f.pergunta ? "rotate-180" : ""}`} color={aberta === f.pergunta ? "#B4121B" : ""} icon={faAngleUp}/>
                        </h1>
                        <AnimatePresence>
                            {aberta === f.pergunta && (
                                <motion.p
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                {f.resposta}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            
            </fieldset>
        </AnimatedSection>
    </div>
);
}

export default FAQSection;