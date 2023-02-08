import { useState, useEffect } from 'react';
import AgregarData from './AgregarData.c';
import Udatagrid from './datagrid/Udatagrid.c.jsx';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosClient } from '../libs/axios';
import Loading from './Loading.c';
import moment from 'moment';

const Empleados = () => {
    const [isOpened, SetisOpened] = useState(false);
    const [search, SetSearch] = useState('');
    const queryClient = useQueryClient();
  const employeeQuery = useQuery({
    queryKey: ['employees'],
    queryFn: async () => {
      const axios = AxiosClient();
      let response = await axios.get(
        '/employees' + `${search !== '' ? `?name=${search}` : ''}`
      );
      console.log(response.data);
        response.data.employees.forEach((employee) => {
        employee.birthDate = moment(employee.birthDate).format('YYYY-MM-DD');
      });
      return response.data;
    }
  });

  useEffect(() => {
    if (!queryClient.isFetching(['employees']))
      setTimeout(() => {
        queryClient.invalidateQueries(['employees']);
        employeeQuery.refetch();
      }, 1000);
  }, [search]);

    const GridProps = {
        columns: [
          { field: 'id', headerName: 'ID', width: 90 },
          { field: 'user', headerName: 'User', width: 150 },
          { field: 'address', headerName: 'Address', width: 150 },
          { field: 'identity', headerName: 'Identity', width: 150 },
          { field: 'birthDate', headerName: 'Birth Date', width: 150 },
          { field: 'details', headerName: 'Details', width: 150 },
          { field: 'gender', headerName: 'Gender', width: 150 },
          { field: 'salary', headerName: 'Salary', width: 150 },
          { field: 'department', headerName: 'Department', width: 150 },
          { field: 'role', headerName: 'Role', width: 150 },
        ],
        rows: employeeQuery?.data?.employees,
      };
  return (
    <div>
      <AgregarData         
        isOpened={isOpened}
        SetisOpened={SetisOpened}
        handleChange={(e) => SetSearch(e.target.value)}
        search={search}/>
      {employeeQuery.isLoading ? (
        <Loading/>
      ) : employeeQuery.error ? (
        <div>error</div>
      ) : (
        <Udatagrid data={GridProps} />
      )}
    </div>
  );
};

export default Empleados;
