import React from 'react';
import { GiIcebergs } from 'react-icons/gi';

const Aboutc = () => {
  return (
    <div
      className="contenedor_sbn_all"
      style={{ backgroundImage: 'url(/media/slider/slide2.jpeg)' }}
    >
      <div className="contenedor_sbn">
        <GiIcebergs className='about_logo'/>
        <h1>Acerca de Nosotros</h1>
        <div className="wrapper-about">
          <p>
            Hielo vigoz es una empresa que se dedica a la venta de hielo en
            diferentes tamaños y formas, con el fin de satisfacer las
            necesidades de nuestros clientes, ofreciendo un servicio de calidad
            y profesionalismo. Fue fundada el 15 de diciembre del año 2015, con
            el fin de progresar el negocio familiar de venta de hielo, y así
            poder llevar la costumbre familiar de la fabrica de hielo a un nivel
            que el baron nunca se imaginó.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutc;
