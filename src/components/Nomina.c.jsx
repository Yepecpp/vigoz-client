import { useState, useEffect } from 'react';
import AgregarData from './AgregarData.c';
import Udatagrid from './datagrid/Udatagrid.c.jsx';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosClient } from '../libs/axios';
import Loading from './Loading.c';
import moment from 'moment';
import { payrollDefault, payrollStructure } from '../structures/payroll.s';
import Godpopup from './popups/Godpopup';

const Nominap = () => {
  const [isOpened, SetisOpened] = useState(false);
  const [search, SetSearch] = useState('');
  const [payroll, SetPayroll] = useState(payrollDefault);

  const queryClient = useQueryClient();
  const payrollQuery = useQuery({
    queryKey: ['payrolls'],
    queryFn: async () => {
      const axios = AxiosClient();
      let response = await axios.get(
        '/payrolls' + `${search !== '' ? `?name=${search}` : ''}`
      );
      response.data.payrolls.forEach((payroll) => {
        payroll.createdAt = moment(payroll.createdAt).format('YYYY-MM-DD');
        payroll.updatedAt = moment(payroll.updatedAt).format('YYYY-MM-DD');
      });
      return response.data;
    },
  });

  useEffect(() => {
    if (!queryClient.isFetching(['payrolls']))
      setTimeout(() => {
        queryClient.invalidateQueries(['payrolls']);
        payrollQuery.refetch();
      }, 1000);
  }, [search]);

  const GridProps = {
    columns: [
      { field: 'id', headerName: 'ID', width: 150 },
      { field: 'period', headerName: 'Period', width: 150 },
      { field: 'employee', headerName: 'Employee', width: 150 },
      {
        field: 'values.currency.code',
        headerName: 'Currency Code',
        width: 130,
        valueGetter: (params) => params.row.values.currency.code,
      },
      {
        field: 'values.salary',
        headerName: 'Salary',
        width: 150,
        valueGetter: (params) => params.row.values.salary,
      },
      {
        field: 'values.extra',
        headerName: 'Extra',
        width: 150,
        valueGetter: (params) => params.row.values.extra,
      },
      {
        field: 'values.tax.percentage',
        headerName: 'Tax Percentage',
        width: 150,
        valueGetter: (params) => params.row.values.tax.percentage,
      },
      {
        field: 'values.tax.amount',
        headerName: 'Tax Amount',
        width: 150,
        valueGetter: (params) => params.row.values.tax.amount,
      },
      {
        field: 'social.health.percentage',
        headerName: 'Health Percentage',
        width: 150,
        valueGetter: (params) => params.row.social.health.percentage,
      },
      {
        field: 'social.health.amount',
        headerName: 'Health Amount',
        width: 150,
        valueGetter: (params) => params.row.social.health.amount,
      },
      {
        field: 'pension.percentage',
        headerName: 'Pension Percentage',
        width: 150,
        valueGetter: (params) => params.row.pension.percentage,
      },
      {
        field: 'pension.amount',
        headerName: 'Pension Amount',
        width: 150,
        valueGetter: (params) => params.row.pension.amount,
      },
      {
        field: 'total.percentage',
        headerName: 'Total Percentage',
        width: 150,
        valueGetter: (params) => params.row.total.percentage,
      },
      {
        field: 'total.amount',
        headerName: 'Total Amount',
        width: 150,
        valueGetter: (params) => params.row.total.amount,
      },
      { field: 'netAmount', headerName: 'Net Amount', width: 150 },
      { field: 'createdAt', headerName: 'Created At', width: 150 },
      {
        field: 'process.status',
        headerName: 'Status',
        width: 150,
        valueGetter: (params) => params.row.precess.status,
      },
      {
        field: 'process.updatedAt',
        headerName: 'Updated At',
        width: 150,
        valueGetter: (params) => params.row.process.updatedAt,
      },
      {
        field: 'process.processedBy',
        headerName: 'Processed By',
        width: 150,
        valueGetter: (params) => params.row.process.processedBy,
      },
    ],
    rows: payrollQuery?.data?.payrolls,
    onRowClick: (e) => {
      SetPayroll(e.row);
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
      {payrollQuery.isLoading ? (
        <Loading />
      ) : payrollQuery.error ? (
        <div>error</div>
      ) : (
        <Udatagrid data={GridProps} />
      )}
      {
        <Godpopup
          isOpened={isOpened}
          SetisOpened={SetisOpened}
          QueryKey={['payrolls']}
          Dstate={payroll}
          Structure={payrollStructure}
        />
      }
    </div>
  );
};

export default Nominap;
