import {useState} from 'react';
import AgregarData from './AgregarData.c';
import Udatagrid from './datagrid/Udatagrid.c.jsx';

const Gasto = () => {
  const [isOpened, SetisOpened] = useState(false);
  const GridProps = {
    columns: [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'category', headerName: 'Category', width: 150 },
      { field: 'description', headerName: 'Description', width: 150 },
      { field: 'date_ex', headerName: 'Date Ex', width: 150 },
      { field: 'creatorEmp', headerName: 'Creator Emp', width: 150 },
      { field: 'method', headerName: 'Method', width: 150 },
      { field: 'destination', headerName: 'Destination', width: 150 },
      { field: 'destinationData', headerName: 'Destination Data', width: 150 },
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
export default Gasto;
