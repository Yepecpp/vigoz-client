import React from 'react';

const Nominap = () => {
  return (
    <div className="container">
      <div className="Name">
        <h2>COMPAÑIA DE HIELO VIGOZ S.A.</h2>
      </div>
      <div className="Sub">
        <h3>Nomina del 2023</h3>
        <div>
          <label className="client_buscar">Search:</label>
          <input type="text" name="buscar" className="input_buscar" />
        </div>
        <table>
          <thead>
            <tr>
              <th>Nombre Completo</th>
              <th>Departamento</th>
              <th>Puesto</th>
              <th>Salario Bruto</th>
              <th>ISR (4%)</th>
              <th>Seguro Social (2%)</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Yepe</td>
              <td>Informatica</td>
              <td>Programador</td>
              <td>$100,000.</td>
              <td>$489.60</td>
              <td>$1094.00</td>
              <td>$98,416.4</td>
              <td>
                <button className="editar_info">Edit</button>
                <button className="delete_info">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Nominap;
