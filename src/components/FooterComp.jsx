import "./FooterComp.css"
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";


const FooterComp = () => {
  return (
    <div className="footer">
      <div>
        <h3>Informações de Contato</h3>
        <p>Email: contato@seusite.com</p>
        <p>Telefone: (123) 456-7890</p>
      </div>
      <div>
        <h3>Links Úteis</h3>
        <a >Página Inicial</a>
        <a>Sobre Nós</a>
        <a >Produtos</a>
        <a >Contato</a>
      </div>
      <div className="icons">
        <div>
          Redes Sociais
        </div>
        <FaFacebookSquare />
        <IoLogoInstagram />
        <FaSquareXTwitter />
      </div>
    </div>
  )
}

export default FooterComp