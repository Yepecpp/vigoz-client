import { useState, useEffect } from 'react';
import AgregarData from './AgregarData.c';
import Udatagrid from './datagrid/Udatagrid.c.jsx';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosClient } from '../libs/axios';
import Loading from './Loading.c';
import moment from 'moment';
import Upopup from './popups/Upopup.c';


const Empleados = () => {
  const [isOpened, SetisOpened] = useState(false);
  const [search, SetSearch] = useState('');
  const [employee, SetEmployee] = useState({});
  const queryClient = useQueryClient();
  const employeeQuery = useQuery({
    queryKey: ['Employees'],
    queryFn: async () => {
      const axios = AxiosClient();
      let response = await axios.get(
        '/employees' + `${search !== '' ? `?name=${search}` : ''}`
      );

      response.data.employees.forEach((employee) => {
        employee.birthDate = moment(employee.birthDate).format('YYYY-MM-DD');
      });
      return response.data;
    },
  });

  useEffect(() => {
    if (!queryClient.isFetching(['Employees']))
      setTimeout(() => {
        queryClient.invalidateQueries(['Employees']);
        employeeQuery.refetch();
      }, 1000);
  }, [search]);

  const GridProps = {
    columns: [
      { field: 'id', headerName: 'ID', width: 150 },
      {
        field: 'address.street1',
        headerName: 'street',
        width: 130,
        valueGetter: (params) => params.row.address.street1,
      },
      { field: 'birthDate', headerName: 'Birth Date', width: 150 },
      {
        field: 'details.position',
        headerName: 'Details',
        width: 150,
        valueGetter: (params) => params.row.details.position,
      },
      {
        field: 'details.type',
        headerName: 'Type',
        width: 150,
        valueGetter: (params) => params.row.details.type,
      },
      { field: 'gender', headerName: 'Gender', width: 150 },
      {
        field: 'salary.amounts',
        headerName: 'Amounts',
        width: 150,
        valueGetter: (params) => params.row.salary.amounts,
      },
      {
        field: 'salary.currency.code',
        headerName: 'Currency Code',
        width: 150,
        valueGetter: (params) => params.row.salary.currency.code,
      },
      {
        field: 'salary.period',
        headerName: 'Period',
        width: 150,
        valueGetter: (params) => params.row.salary.period,
      },
      { field: 'department', headerName: 'Department', width: 150 },
      { field: 'role', headerName: 'Role', width: 150 },
      {
        field: 'identity.type',
        headerName: 'Type',
        width: 150,
        valueGetter: (params) => params.row.identity.type,
      },
      {
        field: 'identity.number',
        headerName: 'Cedula',
        width: 150,
        valueGetter: (params) => params.row.identity.number,
      },
      { field: 'user', headerName: 'User', width: 150 },
    ],
    rows: employeeQuery?.data?.employees,
    onRowClick: (e) => {
      console.log(e.row);
      SetEmployee(e.row);
      SetisOpened(true);
    },
  };
  return (
    <div>
      <AgregarData
        isOpened={isOpened}
        SetisOpened={SetisOpened}
        handleChange={(e) => SetSearch(e.target.value)}
        search={search}
      />
      {employeeQuery.isLoading ? (
        <Loading />
      ) : employeeQuery.error ? (
        <div>error</div>
      ) : (
        <Udatagrid data={GridProps} />
      )}
      <Upopup
        isOpened={isOpened}
        SetisOpened={SetisOpened}
        QueryKey={['Employees']}
        Fstate={() => employee}
      />
    </div>
  );
};

export default Empleados;
