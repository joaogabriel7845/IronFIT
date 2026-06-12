import {
  faBolt,
  faDumbbell,
  faHandFist,
  faPersonBiking,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ModalidadesSection() {
  const modalidades = [
    {
      nome: "Musculação",
      descricao: "Treinamento com pesos para ganho de massa e força.",
      icone: faDumbbell,
      color: "#B4121B",
      img: "https://images.pexels.com/photos/5327553/pexels-photo-5327553.jpeg", 
    },
    {
      nome: "Crossfit",
      descricao:
        "Treinos funcionais de alta intensidade para condicionamento total.",
      icone: faBolt,
      color: "#F4A261",
      img: "https://images.pexels.com/photos/4720822/pexels-photo-4720822.jpeg", 
    },
    {
      nome: "Spinning",
      descricao: "Aulas de ciclismo indoor com música e ritmo intenso.",
      icone: faPersonBiking,
      color: "#2A9D8F",
      img: "https://images.pexels.com/photos/13896069/pexels-photo-13896069.jpeg",
    },
    {
      nome: "Luta",
      descricao: "Artes marciais e defesa pessoal para todos os níveis.",
      icone: faHandFist,
      color: "#E65F5C",
      img: "https://images.pexels.com/photos/7187989/pexels-photo-7187989.jpeg", 
    },
  ];

  return (
    <div id="modalidades" className="scroll-mt-30">
      <h1 className="text-5xl text-center p-10 font-['Bebas_Neue']">
        Modalidades
      </h1>
      <div className="flex flex-col md:flex-row bg-black text-white gap-5 p-5 py-10">
        {modalidades.map((m) => (
          <div
            key={m.nome}
            className="transition-all duration-200 flex flex-1 flex-col gap-3 p-5 border border-white/30 hover:-translate-y-2"
          >
            <img className="w-full h-50 object-top object-cover" src={m.img} alt="" />

            <FontAwesomeIcon color={m.color} icon={m.icone} fontSize={32} />

            <h1 className="text-3xl font-['Bebas_Neue']">{m.nome}</h1>

            <p className="font-['Google_Sans']">{m.descricao}</p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ModalidadesSection;
