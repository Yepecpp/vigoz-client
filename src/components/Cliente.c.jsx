import React, { useState } from 'react';
import { Button, Box } from '@mui/material';

const Cliente = () => {
  const [isOpened, SetisOpened] = useState(false);
  const handleOnclick = (e) => {
    SetisOpened(true);
  };

  return (
    <div className="contenedor_cliente">
      <div>
        <label className="client_buscar">Search:</label>
        <input type="text" name="buscar" className="input_buscar" />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>User</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Adress</td>
            <td>User</td>
            <td>Phone</td>
            <td>
              <button className="editar_info">Edit</button>
              <button className="delete_info">Delete</button>
            </td>
          </tr>
          <Box mt={2} ml={2}>
            <Button
              variant="contained"
              size="medium"
              className="open_client"
              onClick={(e) => handleOnclick(e)}
            >
              Agregar
            </Button>
          </Box>
        </tbody>
      </table>
      {
       isOpened?
       <div className="add_client">
        <div className="modal_content">
          <span className="close" onClick={()=> SetisOpened(false)}>&times;</span>
          <form className="form_cliente">
            <label className="form_client_name">Name:</label>
            <input type="text" className="client_name" name="name" />
          <br />
            <label className="form_client_address">Address:</label>
            <input type="text" className="client_address" name="address" />
          <br />
            <label className="form_client_user">User:</label>
            <input type="text" className="client_user" name="user" />
          <br />
            <label className="form_client_phone">Phone:</label>
            <input type="text" className="client_phone" name="phone" />
          <br />
            <Button variant="contained" color="success">
              Guardar
            </Button>
          </form>
       </div>
     </div>
    : <div></div>
      }
    </div>
  );
};

export default Cliente;
