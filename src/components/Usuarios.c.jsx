import { useState, useEffect } from 'react';
import Udatagrid from './datagrid/Udatagrid.c.jsx';
import AgregarData from './AgregarData.c.jsx';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosClient } from '../libs/axios';
import Loading from './Loading.c';
import moment from 'moment';
import Upopup from './popups/Godpopup';
import { userDefault, userStructure } from '../structures/users.s.jsx';
const Usuariosc = () => {
  const [isOpened, SetisOpened] = useState(false);
  const [search, SetSearch] = useState('');
  const [user, SetUser] = useState(userDefault);
  const queryClient = useQueryClient();
  const userQuery = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const axios = AxiosClient();
      let response = await axios.get(
        '/users' + `${search !== '' ? `?name=${search}` : ''}`
      );

      response.data.users.forEach((user) => {
        user.lastlogin = moment(user.lastlogin).format('YYYY-MM-DD');
      });
      return response.data;
    },
  });

  useEffect(() => {
    if (!queryClient.isFetching(['Users']))
      setTimeout(() => {
        queryClient.invalidateQueries(['Users']);
        userQuery.refetch();
      }, 1000);
  }, [search]);

  const GridProps = {
    columns: [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'name', headerName: 'Name', width: 130 },
      { field: 'last_name', headerName: 'Last Name', width: 130 },
      {
        field: 'login.email',
        headerName: 'Email',
        valueGetter: (params) => params.row.login.email,
        width: 130,
      },
      {
        field: 'login.username',
        headerName: 'Username',
        valueGetter: (params) => params.row.login.username,
        width: 130,
      },
      {
        field: 'login.provider',
        headerName: 'Provider',
        valueGetter: (params) => params.row.login.provider,
        width: 130,
      },
      {
        field: 'login.lastLogin',
        headerName: 'Last Login',
        valueGetter: (params) => params.row.login.lastLogin,
        width: 130,
      },
      { field: 'createdAt', headerName: 'Created At', width: 130 },
      { field: 'updatedAt', headerName: 'Update At', width: 130 },
      { field: 'status', headerName: 'Status', width: 130 },
      { field: 'phone', headerName: 'Phone', width: 130 },
    ],
    rows: userQuery?.data?.users,
    onRowClick: (e) => {
      SetUser(e.row);
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
      {userQuery.isLoading ? (
        <Loading />
      ) : userQuery.error ? (
        <div>error</div>
      ) : (
        <Udatagrid data={GridProps} />
      )}
      <Upopup
        isOpened={isOpened}
        SetisOpened={SetisOpened}
        QueryKey={['users']}
        Dstate={user}
        Structure={userStructure}
      />
    </div>
  );
};
export default Usuariosc;
