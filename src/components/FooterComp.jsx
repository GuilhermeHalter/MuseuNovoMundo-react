import "./FooterComp.css"
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";


const FooterComp = () => {
  return (
    <div className="footer">
      
      <div className="icons">
        <div>
          Follow us
        </div>
        <FaFacebookSquare />
        <IoLogoInstagram />
        <FaSquareXTwitter />
      </div>
    </div>
  )
}

export default FooterComp