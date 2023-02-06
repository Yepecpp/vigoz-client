import React, { useState } from 'react';
import { Button } from '@mui/material';
import Udatagrid from './datagrid/Udatagrid.c.jsx';

const Provedores = () => {
  const [isOpened, SetisOpened] = useState(false);

  const GridProps = {
    columns: [
      { field: 'id', headerName: 'ID', width: 100 },
      { field: 'name', headerName: 'Name', width: 230 },
      { field: 'email', headerName: 'Email', width: 230 },
      { field: 'phone', headerName: 'Phone', width: 230 },
      { field: 'address', headerName: 'Address', width: 230 },
      { field: 'description', headerName: 'Description', width: 230 },
    ],
    rows: [],
  };

  return (
    <div className="container_formProvedores">
      <div className="controls_provedoresForm">
        <div className="container_search_provedores">
          <label className="text_provedores">Search:</label>
          <input type="text" name="buscar" className="search_provedores" />
        </div>

        <Button
          variant="contained"
          size="medium"
          className="open_provedores"
          onClick={() => {
            SetisOpened(true);
          }}
          visibility={`${!isOpened}`}
        >
          Agregar
        </Button>
      </div>
      <Udatagrid data={GridProps} />
    </div>
  );
};

export default Provedores;
