import {
  faCheck,
  faCheckCircle,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SubscriptionSection() {
  const planos = [
    {
      nome: "Basic",
      preco: 89,
      descricao: "Para quem está começando a jornada fitness",
      destaque: false,
      url: "https://wa.me/5521999999998?text=Olá, tenho interesse no plano Basic!",
      beneficios: [
        "Acesso à musculação",
        "Horário comercial",
        "Vestiário completo",
        "Avaliação física inicial",
      ],
    },
    {
      nome: "Pro",
      preco: 139,
      descricao: "Para quem treina com consistência e quer mais",
      destaque: true,
      url: "https://wa.me/5521999999998?text=Olá, tenho interesse no plano Pro!",
      beneficios: [
        "Acesso a todas as modalidades",
        "Acesso ilimitado",
        "Personal trainer 2x por semana",
        "Avaliação física mensal",
        "App de treinos",
      ],
    },
    {
      nome: "Premium",
      preco: 199,
      descricao: "Experiência completa sem limitações",
      destaque: false,
      url: "https://wa.me/5521999999998?text=Olá, tenho interesse no plano Premium!",
      beneficios: [
        "Tudo do Pro",
        "Personal trainer ilimitado",
        "Nutricionista incluso",
        "Acesso a todas as unidades",
        "Prioridade no agendamento",
        "Suporte prioritário",
      ],
    },
  ];

  return (
    <div id="planos" className="w-full scroll-mt-30 flex flex-col gap-4 pb-5 md:px-10">
      <h1 className="text-5xl text-center px-5 font-['Bebas_Neue']">Planos</h1>
      <div className="flex flex-col md:flex-row p-5 justify-center gap-5">
        {planos.map((p) => (
          <div
            key={p.nome}
            className="w-full md:w-1/3 rounded-2xl flex flex-col shadow-md transition-all duration-200 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              className={`rounded-2xl h-full flex flex-col gap-3 p-5 ${p.destaque ? "border border-t-5 border-redFit" : "border border-black/20"}`}
            >
              {p.destaque && (
                <span className="w-fit text-[16px] py-1 px-2 text-redFit/75 bg-red-300 rounded-2xl font-['Google_Sans'] font-medium">
                  Mais popular
                </span>
              )}

              <div className="w-full flex flex-col gap-3 md:flex-row md:gap-0 justify-between text-center">
                <h1
                  className={`text-3xl font-bold font-['Google_Sans'] ${p.destaque ? "text-redFit" : "text-black"}`}
                >
                  {p.nome}
                </h1>

                <p className="text-4xl font-['Bebas_Neue']">
                  R${p.preco}
                  <span className="text-xl text-gray-600 font-['Google_Sans']">
                    /mês
                  </span>
                </p>
              </div>

              <p className="text-gray-700 text-center font-['Google_Sans']">
                {p.descricao}
              </p>

              <div className="h-full flex items-center">
                <ul className="flex flex-col gap-1">
                  {p.beneficios.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-4 font-['Google_Sans']"
                    >
                      <FontAwesomeIcon
                        color={p.destaque ? "#B4121B" : ""}
                        icon={faCircleCheck}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex p-4 justify-center">
                <a
                  href={p.url}
                  target="_blank"
                  className={`transition-all shadow-md cursor-pointer p-4 rounded-2xl font-['Google_Sans'] hover:-translate-y-1.5 ${p.destaque ? "text-white bg-redFit" : "text-black/80 bg-gray-200 hover:text-black"}`}
                >
                  Adquira o Plano {p.nome}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubscriptionSection;
