import NumberFlow from "@number-flow/react";
import { useEffect, useRef, useState } from "react";

function StatsSection() {
    const status = [
        {numero: 2000, descricao: "Alunos ativos"},
        {numero: 10, descricao: "Anos no mercado"},
        {numero: 4, descricao: "Modalidades"},
        {numero: 4.9, descricao: "Avaliação"}
    ]

    const [iniciou, setIniciou] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                setIniciou(true)
                observer.disconnect()
            }
        }, { threshold: 0.2 })
        observer.observe(ref.current)
        return (() => observer.disconnect())
    }, [])

    return (
        <div ref={ref} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
                {status.map((s) => (
                    <div key={s.numero} className="p-5 flex flex-col items-center md:items-baseline border rounded-2xl shadow-xl">
                        <NumberFlow className="text-5xl text-redFit font-['Bebas_Neue']" value={iniciou ? s.numero : 0} transformTiming={{ duration: 2000, easing: 'ease-out' }}/>
                        <p className="text-xl font-['Google_Sans']">{s.descricao}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StatsSection;