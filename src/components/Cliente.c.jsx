import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import ClientP from './popups/Client.popup';
import Udatagrid from './datagrid/Udatagrid.c.jsx';
/*id: z.string().optional(),
  name: z.string(),
  address: addressZod
  user: userZod.or(z.string()),
  identity: z.object({
    type: z.enum(['Fisical', 'Company']).default('Company'), //could be a normal civilian or a company
    identity: identityZod
  }),
  rnc: z.string(),
  phone: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),*/
const Cliente = () => {
  const [isOpened, SetisOpened] = useState(false);
  const GridProps = {
    columns: [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'name', headerName: 'Name', width: 130 },
      { field: 'address', headerName: 'Address', width: 130 },
      { field: 'user', headerName: 'User', width: 130 },
      { field: 'identity', headerName: 'Identity', width: 130 },
      { field: 'rnc', headerName: 'RNC', width: 130 },
      { field: 'phone', headerName: 'Phone', width: 130 },
      { field: 'createdAt', headerName: 'Created At', width: 130 },
      { field: 'updatedAt', headerName: 'Updated At', width: 130 },
    ],
    rows: [],
  };
  //
  return (
    <div className="contenedor_cliente">
      <div>
        <label className="buscar client">Search:</label>
        <input type="text" name="buscar" className="input buscar" />
      </div>
      <Udatagrid data={GridProps} name="Clientes" />
      <Box mt={2} ml={2}>
        <Button
          variant="contained"
          size="medium"
          className="open_client"
          onClick={() => {
            SetisOpened(true);
          }}
          visibility={`${!isOpened}`}
        />
      </Box>
      {isOpened ? <ClientP SetisOpened={SetisOpened} /> : null}
    </div>
  );
};

export default Cliente;
