import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube, FaGooglePlusG, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footerdash">
        <div className="contenedor_footer">
            <h3 className="footer_h3">Hielo Vigoz</h3>
            <p className="footer_descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus expedita officiis blanditiis at architecto quo cumque fuga quis, perspiciatis libero, ab, quasi quaerat illum dolore ad consequatur iusto facilis.</p>
            <ul className="socials">
              <li><Link to="/"><FaFacebook/></Link></li>
              <li><Link to="/"><FaTwitter/></Link></li>
              <li><Link to="/"><FaYoutube/></Link></li>
              <li><Link to="/"><FaGooglePlusG/></Link></li>
              <li><Link to="/"><FaGithub/></Link></li>
            </ul>
        </div>
        <div className="footer_bajo">
          <p>copyrigth &copy; 2022 Hielo Vigoz. designed by <span>Jona</span></p>
        </div>
      </footer>
    </>
  )
}
export default Footer