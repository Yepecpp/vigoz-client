import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contactoc = () => {
  return (
    <>
    <div className="container-form">
    <div className="info-form">
        <h2>Contáctanos</h2>
        <p>Estamos aquí para ayudarte. Si tienes alguna pregunta o necesitas ayuda con algún producto o servicio, no dudes en contactarnos. Tenemos un equipo de profesionales altamente capacitados listos para responder a tus preguntas y brindarte el mejor servicio posible.
        <br />
        <br />
        Puedes contactarnos por teléfono, correo electrónico o a través de nuestro formulario de contacto en línea. No importa cómo prefieras contactarnos, estamos aquí para ayudarte. ¡Estamos ansiosos por escucharte y ayudarte a tener la mejor experiencia posible!</p>
        <div><AiFillPhone className="contacto_icon"/> 123-456-7890</div>
        <div><FaRegEnvelope className="contacto_icon"/> hielovigoz@gmail.com</div>
        <div> <FaMapMarkerAlt className="contacto_icon"/> Santo Domingo, Republica Dominicana</div>
    </div>
    <form action="#">
        <input type="text" name="nombre" placeholder="Tu Nombre" className="campo"/>
        <input type="emal" name="email" placeholder="Tu Email" className="campo"/>
        <textarea name="mensaje" placeholder="Tu Mensaje..."></textarea>
        <input type="submit" name="enviar" value="Enviar Mensaje" className="btn-enviar"/>
    </form>
</div>
</>
  );
};

export default Contactoc;