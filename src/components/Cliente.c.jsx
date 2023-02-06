import React, { useState } from 'react';
import { AxiosClient } from '../libs/axios';
import Loading from './Loading.c';
import ClientP from './popups/Client.popup';
import Udatagrid from './datagrid/Udatagrid.c.jsx';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import AgregarData from './AgregarData.c';
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
  const [client, SetClient] = useState({});
  const clientsQuery = useQuery({
    queryKey: ['clients'],
    queryFn: async () => {
      const axios = AxiosClient();
      const response = await axios.get('/clients');
      response.data.clients.forEach((client) => {
        client.user = client.user ? client.user.name : 'No user';
        client.createdAt = new Date(client.createdAt).toLocaleString();
        client.updatedAt = new Date(client.updatedAt).toLocaleString();
        client.identity.expiration = moment(client.identity.expiration).format(
          'YYYY-MM-DD'
        );
      });
      return response.data;
    },
  });
  const GridProps = {
    columns: [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'name', headerName: 'Name', width: 130 },
      { field: 'address.street1', headerName: 'street', width: 130 },
      { field: 'user', headerName: 'User', width: 130 },
      { field: 'identity', headerName: 'Identity', width: 130 },
      { field: 'rnc', headerName: 'RNC', width: 130 },
      { field: 'phone', headerName: 'Phone', width: 130 },
      { field: 'createdAt', headerName: 'Created At', width: 130 },
      { field: 'updatedAt', headerName: 'Updated At', width: 130 },
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
      <AgregarData isOpened={isOpened} SetisOpened={SetisOpened} />

      {clientsQuery.status === 'loading' ? (
        <Loading />
      ) : clientsQuery.status === 'error' ? (
        <div>error</div>
      ) : (
        <Udatagrid data={GridProps} name="Clientes" />
      )}

      {isOpened ? (
        <ClientP
          SetisOpened={SetisOpened}
          useClient={() => [client, SetClient]}
        />
      ) : null}
    </div>
  );
};

export default Cliente;
