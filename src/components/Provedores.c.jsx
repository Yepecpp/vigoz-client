import { useState, useEffect } from 'react';
import Udatagrid from './datagrid/Udatagrid.c.jsx';
import AgregarData from './AgregarData.c.jsx';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosClient } from '../libs/axios';
import Loading from './Loading.c';
import Upopup from './popups/Upopup.c.jsx';
const Provedores = () => {
  const [isOpened, SetisOpened] = useState(false);
  const [search, SetSearch] = useState('');
  const [provider, SetProvider] = useState({
    name: 's',
    email: 's',
    phone: 's',
    address: {
      street1: 's',
      street2: 's',
      city: 's',
      zip: 's',
    },
    description: 's',
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  useEffect(() => {
    if (!isOpened) {
      SetProvider({
        name: '',
        email: '',
        phone: '',
        address: {
          street1: '',
          street2: '',
          city: '',
          zip: '',
        },
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
  }, [isOpened]);
  const queryClient = useQueryClient();
  const providerQuery = useQuery({
    queryKey: ['Providers'],
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
        headerName: 'street',
        width: 130,
        valueGetter: (params) => params.row.address.street1,
      },
      {
        field: 'address.city',
        headerName: 'city',
        width: 130,
        valueGetter: (params) => params.row.address.city,
      },
      {
        field: 'address.zip',
        headerName: 'zip',
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
      <Upopup
        isOpened={isOpened}
        SetisOpened={SetisOpened}
        Fstate={() => provider}
        QueryKey={['Providers']}
      />
    </div>
  );
};

export default Provedores;
