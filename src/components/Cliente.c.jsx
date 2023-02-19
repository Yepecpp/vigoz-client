import React, { useState } from 'react';
import { AxiosClient } from '../libs/axios';
import Loading from './Loading.c';

import Udatagrid from './datagrid/Udatagrid.c.jsx';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import moment from 'moment';
import AgregarData from './AgregarData.c';
import { useEffect } from 'react';
import Upopup from './popups/Upopup.c.jsx';
/*id: z.string().optional(),
  name: z.string(),
  address: addressZod
  user: userZod.or(z.string()),
  identity: z.object({
    type: z.enum(['Fisical', 'Company']).default('Company'), //could be a normal civilian or a company
    identity: identityZod
  }),
  rnc: z.string(),
  phone: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),*/
const Cliente = () => {
  const [isOpened, SetisOpened] = useState(false);
  const [client, SetClient] = useState({Name: '', Address: '', User: '', TipoCliente: '', Identificacion: '', Expiracion: '', RNC: '', Phone: '', Street: '', City: '', Zip: ''});
  const [search, SetSearch] = useState('');
  useEffect(() => {
    if (!queryClient.isFetching(['Clients']))
      setTimeout(() => {
        queryClient.invalidateQueries('clients');
        clientsQuery.refetch();
      }, 1000);
  }, [search]);
  const queryClient = useQueryClient();
  const clientsQuery = useQuery({
    queryKey: ['Clients'],
    queryFn: async () => {
      const axios = AxiosClient();
      const response = await axios.get(
        '/clients' + `${search !== '' ? `?name=${search}` : ''}`
      );
      response.data.clients.forEach((client) => {
        client.user = client.user ? client.user.name : 'No user';
        client.createdAt = new Date(client.createdAt);
        client.updatedAt = new Date(client.updatedAt);
        client.identity.expiration = // use moment to format 'yyyy-MM-dd'
          client.identity.expiration !== null
            ? new Date(client.identity.expiration)
            : null;
      });
      return response.data;
    },
  });
  // invalid
  const GridProps = {
    columns: [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'name', headerName: 'Name', width: 130 },

      { field: 'user', headerName: 'User', width: 130 },
      {
        field: 'identity.type',
        headerName: 'Tipo de cliente',
        width: 130,
        valueGetter: (params) => params.row.identity.type,
      },
      {
        field: 'identity.id',
        headerName: 'identification',
        width: 130,
        valueGetter: (params) =>
          `${params.row.identity.identity.type.toUpperCase()}: ${
            params.row.identity.identity.number
          }`,
      },
      {
        field: 'identity.expiration',
        headerName: 'Expiration',
        width: 130,
        valueGetter: (params) =>
          moment(params.row.identity.identity.expiration).format('YYYY-MM-DD'),
      },
      { field: 'rnc', headerName: 'RNC', width: 130 },
      { field: 'phone', headerName: 'Phone', width: 130 },
      { field: 'createdAt', headerName: 'Created At', width: 130 },
      { field: 'updatedAt', headerName: 'Updated At', width: 130 },
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
    ],
    rows: clientsQuery.data?.clients,
    onRowClick: (e) => {
      SetClient(e.row);
      SetisOpened(true);
    },
  };
  //
  return (
    <div className="container_formClient">
      <AgregarData
        isOpened={isOpened}
        SetisOpened={SetisOpened}
        handleChange={(e) => SetSearch(e.target.value)}
        search={search}
      />

      {clientsQuery.status === 'loading' ? (
        <Loading />
      ) : clientsQuery.status === 'error' ? (
        <div>error</div>
      ) : (
        <Udatagrid data={GridProps} name="Clientes" />
      )}

      <Upopup
        isOpened={isOpened}
        SetisOpened={SetisOpened}
        Fstate={() => client}
        QueryKey={['Clients']}
      />
    </div>
  );
};

export default Cliente;
