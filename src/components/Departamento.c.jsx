import React, { useState } from 'react';
import { AxiosClient } from '../libs/axios';
import Loading from './Loading.c';
import Udatagrid from './datagrid/Udatagrid.c.jsx';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import AgregarData from './AgregarData.c';
import { useEffect } from 'react';
import Godpopup from './popups/Godpopup';

const Departamento = () => {
  const [isOpened, SetisOpened] = useState(false);
  const [department, SetDepartment] = useState({});
  const [search, SetSearch] = useState('');

  const queryClient = useQueryClient();
  const departmentQuery = useQuery({
    queryKey: ['departments'],
    queryFn: async () => {
      const axios = AxiosClient();
      let response = await axios.get(
        '/departments' + `${search !== '' ? `?name=${search}` : ''}`
      );
      return response.data;
    },
  });

  useEffect(() => {
    if (!queryClient.isFetching(['departments']))
      setTimeout(() => {
        queryClient.invalidateQueries(['departments']);
        departmentQuery.refetch();
      }, 1000);
  }, [search]);

  const GridProps = {
    columns: [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'name', headerName: 'Name', width: 230 },
      { field: 'description', headerName: 'Description', width: 230 },
      { field: 'phone', headerName: 'Phone', width: 230 },
      { field: 'brach', headerName: 'Brach', width: 230 },
    ],
    rows: departmentQuery?.data?.departments,
    onRowClick: (e) => {
      console.log(e.row);
      SetDepartment(e.row);
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
      {departmentQuery.isLoading ? (
        <Loading />
      ) : departmentQuery.error ? (
        <div>error</div>
      ) : (
        <Udatagrid data={GridProps} />
      )}
      <Godpopup
        isOpened={isOpened}
        SetisOpened={SetisOpened}
        QueryKey={['departments']}
        Dstate={department}
      />
    </div>
  );
};

export default Departamento;
