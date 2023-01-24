import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaGooglePlusG,
  FaGithub,
} from 'react-icons/fa';

function Footeri() {
  return (
    <>
      <footer className="footerdash">
        <div className="contenedor_footer">
          <h3 className="footer_h3">Hielo Vigoz</h3>
          <p className="footer_descripcion">
            Dirección: Calle Francisco Henríquez y Carvajal #140, sector San Carlos 
            Fundación de empresa: 15 de diciembre del año 2015 
            RNC: 1-3209235-1
            Teléfono y Ws: 809-221-0444
            Precio del hielo por unidad: 35
            Horario laboral con delivery: de lunes a Sábado de 7:30 am a 4:00pm y los domingos de 9:00 am a 1:00 pm
          </p>
          <ul className="socials">
            <li>
              
              <a href="https://es-la.facebook.com/login/device-based/regular/login/?login_attempt=1" target="_blank">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/?lang=es" target="_blank">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="https://github.com/Yepecpp" target="_blank">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_bajo">
          <p>
            copyrigth &copy; 2022 Hielo Vigoz. designed by <span>Jona</span>
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footeri;
