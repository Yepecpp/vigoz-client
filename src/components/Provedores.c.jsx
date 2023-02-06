import {useState} from 'react';
import Udatagrid from './datagrid/Udatagrid.c.jsx';
import AgregarData from './AgregarData.c.jsx';

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
      <AgregarData isOpened={isOpened} SetisOpened={SetisOpened} />
      <Udatagrid data={GridProps} />
    </div>
  );
};

export default Provedores;
