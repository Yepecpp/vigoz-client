import React from 'react';

const Gasto = () =>{
    return(
        <div className="Contenedor_complet">
            <h1 className="txt_lista">Lista de Gastos</h1>
            <table id="gastos-table" className="display">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Precio</th>
                    <th>Empleado</th>
                    <th>etc</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>$15,000.</td>
                    <td>Juan Martinez</td>
                    <td>
                    <button className="delete_info">Edit</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>$1,380.</td>
                    <td>Maria Perez</td>
                    <td>
                    <button className="delete_info">Edit</button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>$4,000.</td>
                    <td>Jeremy Peña</td>
                    <td>
                    <button className="delete_info">Edit</button>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>$1,000.</td>
                    <td>Juana Liz</td>
                    <td>
                    <button className="delete_info">Edit</button>
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>$4,050.</td>
                    <td>Alizia Albert</td>
                    <td>
                    <button className="delete_info">Edit</button>
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>$1,407.</td>
                    <td>Robinso Cano</td>
                    <td>
                    <button className="delete_info">Edit</button>
                    </td>
                </tr>
            </tbody>
            </table>
            <button id="add-button" className="green-button">Agregar Gasto</button>
        </div>
    );
}
export default Gasto;

  
