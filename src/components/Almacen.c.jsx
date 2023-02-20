import { useState, useEffect } from 'react';
import AgregarData from './AgregarData.c';
import Udatagrid from './datagrid/Udatagrid.c.jsx';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosClient } from '../libs/axios';
import Loading from './Loading.c';
import moment from 'moment';
import Upopup from './popups/Godpopup';
import { storageDefault, storageStructure } from '../structures/storage.s.jsx';

const Almacenc = () => {
  const [isOpened, SetisOpened] = useState(false);
  const [storage, SetStorage] = useState(storageDefault);
  const [search, SetSearch] = useState('');
  const queryClient = useQueryClient();
  const storageQuery = useQuery({
    queryKey: ['storages'],
    queryFn: async () => {
      const axios = AxiosClient();
      let response = await axios.get(
        '/storages' + `${search !== '' ? `?name=${search}` : ''}`
      );

      response.data.storages.forEach((storage) => {
        storage.createdAt = moment(storage.createdAt).format('YYYY-MM-DD');
        storage.updatedAt = moment(storage.updatedAt).format('YYYY-MM-DD');
      });
      return response.data;
    },
  });

  useEffect(() => {
    if (!queryClient.isFetching(['storages']))
      setTimeout(() => {
        queryClient.invalidateQueries(['storages']);
        storageQuery.refetch();
      }, 1000);
  }, [search]);

  const GridProps = {
    columns: [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'name', headerName: 'Name', width: 150 },
      { field: 'category', headerName: 'Category', width: 150 },
      { field: 'status', headerName: 'Status', width: 150 },
      { field: 'maxCapacity', headerName: 'Max Capacity', width: 150 },
      { field: 'currentCapacity', headerName: 'Current Capacity', width: 150 },
      { field: 'createdAt', headerName: 'Created At', width: 150 },
      { field: 'updatedAt', headerName: 'Updated At', width: 150 },
      { field: 'branch', headerName: 'Branch', width: 150 },
    ],
    rows: storageQuery?.data?.storages,
    onRowClick: (e) => {
      SetStorage(e.row);
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
      {storageQuery.isLoading ? (
        <Loading />
      ) : storageQuery.error ? (
        <div>error</div>
      ) : (
        <Udatagrid data={GridProps} />
      )}
      <Upopup
        isOpened={isOpened}
        SetisOpened={SetisOpened}
        QueryKey={['storages']}
        Dstate={storage}
        Structure={storageStructure}
      />
    </div>
  );
};

export default Almacenc;
