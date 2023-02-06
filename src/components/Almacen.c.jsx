import {useState} from 'react';
import AgregarData from './AgregarData.c';
import Udatagrid from './datagrid/Udatagrid.c.jsx';

const Almacenc = () => {
  const [isOpened, SetisOpened] = useState(false);
  const GridProps = {
    columns: [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'name', headerName: 'Name', width: 150 },
      { field: 'category', headerName: 'Category', width: 150 },
      { field: 'status', headerName: 'Status', width: 150 },
      { field: 'maxCapacity', headerName: 'Max Capacity', width: 150 },
      { field: 'currentCapacity', headerName: 'Current Capacity', width: 150 },
      { field: 'createdAt', headerName: 'Created At', width: 150 },
      { field: 'updatedAt', headerName: 'Updated At', width: 150 },
      { field: 'branch', headerName: 'Branch', width: 150 },
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

export default Almacenc;
