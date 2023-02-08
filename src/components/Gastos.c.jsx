import { useState, useEffect } from 'react';
import AgregarData from './AgregarData.c';
import Udatagrid from './datagrid/Udatagrid.c.jsx';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosClient } from '../libs/axios';
import moment from 'moment';
import Loading from './Loading.c';

const Gasto = () => {
  const [isOpened, SetisOpened] = useState(false);
  const [search, SetSearch] = useState('');
  const queryClient = useQueryClient();
  const expenseQuery = useQuery({
    queryKey: ['expense'],
    queryFn: async () => {
      const axios = AxiosClient();
      let response = await axios.get(
        '/expenses' + `${search !== '' ? `?name=${search}` : ''}`
      );

      response.data.expenses.forEach((expense) => {
        expense.date_ex = moment(expense.date_ex).format('YYYY-MM-DD');
      });
      return response.data;
    },
  });
  useEffect(() => {
    if (!queryClient.isFetching(['expenses']))
      setTimeout(() => {
        queryClient.invalidateQueries(['expenses']);
        expenseQuery.refetch();
      }, 1000);
  }, [search]);
  const GridProps = {
    columns: [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'category', headerName: 'Category', width: 150 },
      { field: 'description', headerName: 'Description', width: 150 },
      { field: 'amount', headerName: 'Amount', width: 150 },
      { field: 'date_ex', headerName: 'Date Ex', width: 150 },
      { field: 'state', headerName: 'State', width: 150 },
      { field: 'creatorEmp', headerName: 'Creator Emp', width: 150 },
      { field: 'method', headerName: 'Method', width: 150 },
      { field: 'destination', headerName: 'Destination', width: 150 },
      { field: 'destinationData', headerName: 'Destination Data', width: 150 },
    ],
    rows: expenseQuery?.data?.expenses,
  };

  return (
    <div>
      <AgregarData
        isOpened={isOpened}
        SetisOpened={SetisOpened}
        handleChange={(e) => SetSearch(e.target.value)}
        search={search}
      />
      {expenseQuery.isLoading ? (
        <Loading />
      ) : expenseQuery.error ? (
        <div>error</div>
      ) : (
        <Udatagrid data={GridProps} />
      )}
    </div>
  );
};
export default Gasto;
