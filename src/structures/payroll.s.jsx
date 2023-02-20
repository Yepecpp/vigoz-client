import { currencyDefault, currencyStructure } from './common/currency.s';

export const payrollDefault = {
  period: '',
  employee: '',
  values: {
    currency: currencyDefault,
    salary: 0,
    extra: 0,
    tax: {
      percentage: 0,
      amount: 0,
    },
    social: {
      health: {
        percentage: 0,
        amount: 0,
      },
      pension: {
        percentage: 0,
        amount: 0,
      },
      total: {
        percentage: 0,
        amount: 0,
      },
    },
    netAmount: 0,
  },
  process: {
    status: 'pending',
    processedBy: '',
  },
};

export const payrollStructure = [
  {
    key: 'period',
    type: 'text',
    header: 'Periodo',
  },
  {
    key: 'employee',
    type: 'text',
    header: 'Empleado',
  },
  {
    key: 'values',
    type: 'object',
    header: 'Valores',
    value: [
      {
        key: 'currency',
        type: 'object',
        header: 'Moneda',
        value: currencyStructure,
      },
      {
        key: 'salary',
        type: 'number',
        header: 'Salario',
      },
      {
        key: 'extra',
        type: 'number',
        header: 'Extra',
      },
      {
        key: 'tax',
        type: 'object',
        header: 'Impuesto',
        value: [
          {
            key: 'percentage',
            type: 'number',
            header: 'Porcentaje',
          },
          {
            key: 'amount',
            type: 'number',
            header: 'Monto',
          },
        ],
      },
      {
        key: 'social',
        type: 'object',
        header: 'Social',
        value: [
          {
            key: 'health',
            type: 'object',
            header: 'Salud',
            value: [
              {
                key: 'percentage',
                type: 'number',
                header: 'Porcentaje',
              },
              {
                key: 'amount',
                type: 'number',
                header: 'Monto',
              },
            ],
          },
          {
            key: 'pension',
            type: 'object',
            header: 'Pension',
            value: [
              {
                key: 'percentage',
                type: 'number',
                header: 'Porcentaje',
              },
              {
                key: 'amount',
                type: 'number',
                header: 'Monto',
              },
            ],
          },
          {
            key: 'total',
            type: 'object',
            header: 'Total',
            value: [
              {
                key: 'percentage',
                type: 'number',
                header: 'Porcentaje',
              },
              {
                key: 'amount',
                type: 'number',
                header: 'Monto',
              },
            ],
          },
        ],
      },
      {
        key: 'netAmount',
        type: 'number',
        header: 'Monto Neto',
      },
    ],
  },
  {
    key: 'process',
    type: 'object',
    header: 'Proceso',
    value: [
      {
        key: 'status',
        type: 'select',
        header: 'Estado',
        enums: [
          {
            value: 'pending',
            header: 'Pendiente',
          },
          {
            value: 'processed',
            header: 'Procesado',
          },
        ],
      },
      {
        key: 'processedBy',
        type: 'text',
        header: 'Procesado Por',
      },
    ],
  },
];
