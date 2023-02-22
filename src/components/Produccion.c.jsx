import { useState, useEffect } from 'react';
import Udatagrid from './datagrid/Udatagrid.c.jsx';
import AgregarData from './AgregarData.c.jsx';
import Godpopup from './popups/Godpopup.jsx';
import {
  productionDefault,
  productionStructure,
} from '../structures/production.s.jsx';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosClient } from '../libs/axios';
import Loading from './Loading.c';



const Produccion = () => {

  const [isOpened, SetisOpened] = useState(false);
  const [search, SetSearch] = useState('');
  const [production, SetProduction] = useState(productionDefault);

  useEffect(() => {
    if (!isOpened) {
      SetProduction(productionDefault);
    }
  }, [isOpened]);
  const queryClient = useQueryClient();
  const productionQuery = useQuery({
    queryKey: ['productions'],
    queryFn: async () => {
      const axios = AxiosClient();
      let response = await axios.get(
        '/storages/production' + `${search !== '' ? `?name=${search}` : ''}`
      );
      response.data.production.forEach((production) => {
        production.date = new Date(production.date);
        production.createdAt = new Date(production.createdAt);
        production.updatedAt = new Date(production.updatedAt);
      });
      return response.data;
    },
  });
  useEffect(() => {
    if (!queryClient.isFetching(['productions']))
      setTimeout(() => {
        queryClient.invalidateQueries(['productions']);
        productionQuery.refetch();
      }, 1000);
  }, [search]);


  const GridProps = {
    columns: [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'date', headerName: 'Date', width: 130 },
      { field: 'product.type', headerName: 'Product Type', valueGetter: (params) => params.row.product.type ,width: 130 },
      { field: 'product.quantity', headerName: 'Product Quantity', valueGetter: (params) => params.row.product.quantity ,width: 130 },
      { field: 'storage', headerName: 'Storage', width: 130 },
      { field: 'employee', headerName: 'Employee', width: 130 },
      { field: 'createdAt', headerName: 'Created At', width: 130 },
      { field: 'udatedAt', headerName: 'Udated At', width: 130 },
    ],
    rows: productionQuery?.data?.production,
    onRowClick: (e) => {
      SetProduction(e.row);
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
      {productionQuery.isLoading ? (
        <Loading />
      ) : productionQuery.error ? (
        <div>error</div>
      ) : (
        <Udatagrid data={GridProps} />
      )}
      <Godpopup
        isOpened={isOpened}
        SetisOpened={SetisOpened}
        QueryKey={['productions']}
        Dstate={production}
        Structure={productionStructure}
      />
    </div>
  );
};

export default Produccion;