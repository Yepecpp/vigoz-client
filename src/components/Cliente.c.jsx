import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import ClientP from './popups/Client.popup';
/*id: z.string().optional(),
  name: z.string(),
  address: addressZod || z.string(),
  user: userZod.or(z.string()),
  identity: z.object({
    type: z.enum(['Fisical', 'Company']).default('Company'), //could be a normal civilian or a company
    identity:
      identityZod ||
      z.object({
        name: z.string(),
        address: addressZod,
        phone: z.string(),
        email: z.string(),
      }),
  }),
  rnc: z.string(),
  phone: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),*/
const Cliente = () => {
  const [isOpened, SetisOpened] = useState(false);
  return (
    <div className="contenedor_cliente">
      <div>
        <label className="buscar client">Search:</label>
        <input type="text" name="buscar" className="input buscar" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
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
              onClick={() => {
                SetisOpened(true);
              }}
            >
              Agregar
            </Button>
          </Box>
        </tbody>
      </table>
      {isOpened ? <ClientP SetisOpened={SetisOpened} /> : null}
    </div>
  );
};

export default Cliente;
