import { useState, useEffect } from 'react';
import Udatagrid from './datagrid/Udatagrid.c.jsx';
import AgregarData from './AgregarData.c.jsx';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosClient } from '../libs/axios';
import Loading from './Loading.c';
import Godpopup from './popups/Godpopup.jsx';
import {
  providerDefault,
  providerStructure,
} from '../structures/provider.s.jsx';

const Provedores = () => {
  const [isOpened, SetisOpened] = useState(false);
  const [search, SetSearch] = useState('');
  const [provider, SetProvider] = useState(providerDefault);
  useEffect(() => {
    if (!isOpened) {
      SetProvider(providerDefault);
    }
  }, [isOpened]);
  const queryClient = useQueryClient();
  const providerQuery = useQuery({
    queryKey: ['providers'],
    queryFn: async () => {
      const axios = AxiosClient();
      let response = await axios.get(
        '/providers' + `${search !== '' ? `?name=${search}` : ''}`
      );
      response.data.providers.forEach((provider) => {
        provider.createdAt = new Date(provider.createdAt);
        provider.updatedAt = new Date(provider.updatedAt);
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
      {
        field: 'address.street1',
        headerName: 'Street',
        width: 130,
        valueGetter: (params) => params.row.address.street1,
      },
      {
        field: 'address.city',
        headerName: 'City',
        width: 130,
        valueGetter: (params) => params.row.address.city,
      },
      {
        field: 'address.zip',
        headerName: 'Zip',
        width: 130,
        valueGetter: (params) => params.row.address.zip,
      },
      {
        field: 'description',
        headerName: 'Description',
        width: 230,
      },
    ],
    rows: providerQuery?.data?.providers,
    onRowClick: (e) => {
      SetProvider(e.row);
      SetisOpened(true);
    },
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
      <Godpopup
        isOpened={isOpened}
        SetisOpened={SetisOpened}
        QueryKey={['providers']}
        Dstate={provider}
        Structure={providerStructure}
      />
    </div>
  );
};

export default Provedores;
