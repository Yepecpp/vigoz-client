import { useState, useEffect } from 'react';
import AgregarData from './AgregarData.c';
import Udatagrid from './datagrid/Udatagrid.c.jsx';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosClient } from '../libs/axios';
import moment from 'moment';
import Loading from './Loading.c';
import Upopup from './popups/Upopup.c';

const Gasto = () => {
  const [isOpened, SetisOpened] = useState(false);
  const [search, SetSearch] = useState('');
  const [expense, SetExpense] = useState({Category: '', Description: '', Value: '', Currency: '', Date_ex: new Date(), Status: '', Method: '', Destination: ''});
  const queryClient = useQueryClient();
  const expenseQuery = useQuery({
    queryKey: ['Expense'],
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
      { field: 'amount.value', headerName: 'Value', width: 150 },
      { field: 'amount.currency', headerName: 'Currency', width: 150 },
      { field: 'date_ex', headerName: 'Date Ex', width: 150 },
      { field: 'state.status', headerName: 'Status', width: 150 },
      { field: 'state.updated', headerName: 'Updated', width: 150 },
      { field: 'creatorEmp', headerName: 'Creator Emp', width: 150 },
      { field: 'method', headerName: 'Method', width: 150 },
      { field: 'destination', headerName: 'Destination', width: 150 },
      { field: 'destinationData', headerName: 'Destination Data', width: 150 },
    ],
    rows: expenseQuery?.data?.expenses,
    onRowClick: (e) => {
      SetExpense(e.row);
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
      {expenseQuery.isLoading ? (
        <Loading />
      ) : expenseQuery.error ? (
        <div>error</div>
      ) : (
        <Udatagrid data={GridProps} />
      )}

      <Upopup
        isOpened={isOpened}
        SetisOpened={SetisOpened}
        Fstate={() => expense}
        QueryKey={['Expenses']}
      />
    </div>
  );
};
export default Gasto;
