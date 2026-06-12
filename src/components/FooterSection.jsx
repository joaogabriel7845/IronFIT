import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ironFit from "../assets/photos/ironFitFavicon.png"
import { faWhatsapp, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

function FooterSection() {
    return (
        <div id="contact" className="flex p-5 md:p-5 bg-black text-white font-['Google_Sans']">

            <div className="flex flex-col flex-1 gap-3 justify-center p-4 md:p-10">

                <div>
                    <p>Endereço: Av. das Américas, 3250 - Barra da Tijuca, Rio de Janeiro - RJ, 22640-102</p>
                    <p>Telefone: (21) 3587-4621</p>
                </div>

                <div>
                    <a href="https://wa.me/5521888888888" target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} fontSize={32}/>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} fontSize={32}/>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} fontSize={32}/>
                    </a>
                </div>
                
            </div>

            <div className="flex flex-col flex-1 justify-center items-center">
                <img className="w-65" src={ironFit} alt="" />
                <p className="text-alice-blue/50 text-sm">© 2026 IronFIT. Todos os direitos reservados.</p>
            </div>


        </div>

        
    )
}

export default FooterSection