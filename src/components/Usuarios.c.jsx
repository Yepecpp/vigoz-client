import React, { useState } from 'react';
import { Button } from '@mui/material';
import Udatagrid from './datagrid/Udatagrid.c.jsx';

const Usuariosc = () => {
  const [isOpened, SetisOpened] = useState(false);

  const GridProps = {
    columns: [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'name', headerName: 'Name', width: 130 },
      { field: 'lastname', headerName: 'Last Name', width: 130 },
      /*{ field: 'login', headerName: 'Login', width: 130 },*/
      { field: 'createdAt', headerName: 'Created At', width: 130 },
      { field: 'updatedAt', headerName: 'Update At', width: 130 },
      { field: 'status', headerName: 'Status', width: 130 },
      { field: 'phone', headerName: 'Phone', width: 130 },
      { field: 'meta', headerName: 'Meta', width: 130 },
      { field: 'info', headerName: 'Info', width: 130 },
      { field: 'images', headerName: 'Images', width: 130 },
      { field: 'isverified', headerName: 'Is Verrified', width: 130 },
      { field: 'isemployee', headerName: 'Is Employee', width: 130 },
    ],
    rows: [],
  };

  return (
    <div>
      <div className="container_formUsuario">
      <div className="controls_usuarioForm">
        <div className="container_search_usuario">
          <label className="text_usuario">Search:</label>
          <input type="text" name="buscar" className="search_usuario" />
        </div>

          <Button
            variant="contained"
            size="medium"
            className="open_usuario"
            onClick={() => {
              SetisOpened(true);
            }}
            visibility={`${!isOpened}`}
          >
            Agregar
          </Button>
      </div>
    </div>
    <Udatagrid data={GridProps} />
    </div>
  );
};
export default Usuariosc;
