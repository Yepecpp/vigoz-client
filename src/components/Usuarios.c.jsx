import { useState } from 'react';
import Udatagrid from './datagrid/Udatagrid.c.jsx';
import AgregarData from './AgregarData.c.jsx';
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
      { field: 'isVerified', headerName: 'Is Verrified', width: 130 },
      { field: 'isEmployee', headerName: 'Is Employee', width: 130 },
    ],
    rows: [],
  };

  return (
    <div>
      <AgregarData isOpened={isOpened} SetisOpened={SetisOpened} />
      <Udatagrid data={GridProps} />
    </div>
  );
};
export default Usuariosc;
