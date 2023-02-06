import { useState, useEffect } from 'react';
import Udatagrid from './datagrid/Udatagrid.c.jsx';
import AgregarData from './AgregarData.c.jsx';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosClient } from '../libs/axios';
import moment from 'moment';
import Loading from './Loading.c';
const Provedores = () => {
  const [isOpened, SetisOpened] = useState(false);
  const [search, SetSearch] = useState('');
  const queryClient = useQueryClient();
  const providerQuery = useQuery({
    queryKey: ['providers'],
    queryFn: async () => {
      const axios = AxiosClient();
      let response = await axios.get(
        '/providers' + `${search !== '' ? `?name=${search}` : ''}`
      );
      response.data.providers.forEach((provider) => {
        provider.user = provider.user ? provider.user.name : 'No user';
        provider.createdAt = moment(provider.createdAt).format('YYYY-MM-DD');
        provider.updatedAt = moment(provider.updatedAt).format('YYYY-MM-DD');
      });
      return response.data;
    },
  });
  useEffect(() => {
    if (!queryClient.isFetching(['providers']))
      setTimeout(() => {
        queryClient.invalidateQueries(['providers']);
        providerQuery.refetch();
      }, 1000);
  }, [search]);
  const GridProps = {
    columns: [
      { field: 'id', headerName: 'ID', width: 100 },
      { field: 'name', headerName: 'Name', width: 230 },
      { field: 'email', headerName: 'Email', width: 230 },
      { field: 'phone', headerName: 'Phone', width: 230 },
      { field: 'address', headerName: 'Address', width: 230 },
      {
        field: 'description',
        headerName: 'Description',
        width: 230,
      },
    ],
    rows: providerQuery?.data?.providers,
  };

  return (
    <div className="container_formProvedores">
      <AgregarData
        isOpened={isOpened}
        SetisOpened={SetisOpened}
        handleChange={(e) => SetSearch(e.target.value)}
        search={search}
      />
      {providerQuery.isLoading ? (
        <Loading />
      ) : providerQuery.error ? (
        <div>error</div>
      ) : (
        <Udatagrid data={GridProps} />
      )}
    </div>
  );
};

export default Provedores;
