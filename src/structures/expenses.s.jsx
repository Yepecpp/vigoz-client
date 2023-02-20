import { currencyDefault, currencyStructure } from './common/currency.s';

export const expenseDefault = {
  category: '',
  description: '',
  amount: {
    value: 0,
    currency: currencyDefault,
  },
  date_ex: new Date(),
  state: {
    status: 'pending',
    updated: new Date(),
  },
  creatorEmp: '',
  method: 'cash',
  destination: 'employees',
  destinationData: '',
};

export const expenseStructure = [
  {
    key: 'category',
    type: 'text',
    header: 'Categoria',
  },
  {
    key: 'description',
    type: 'text',
    header: 'Descripcion',
  },
  {
    key: 'amount',
    type: 'object',
    header: 'Monto',
    value: [
      {
        key: 'value',
        type: 'number',
        header: 'Valor',
      },
      {
        key: 'currency',
        type: 'object',
        header: 'Moneda',
        value: currencyStructure,
      },
    ],
  },
  {
    key: 'date_ex',
    type: 'date',
    header: 'Fecha de Expiracion',
  },
  {
    key: 'state',
    type: 'object',
    header: 'Estado',
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
            value: 'approved',
            header: 'Aprobado',
          },
          {
            value: 'rejected',
            header: 'Rechazado',
          },
        ],
      },
      {
        key: 'updated',
        type: 'date',
        header: 'Fecha de Actualizacion',
      },
    ],
  },
  {
    key: 'creatorEmp',
    type: 'text',
    header: 'Creador',
  },
  {
    key: 'method',
    type: 'select',
    header: 'Metodo',
    enums: [
      {
        value: 'cash',
        header: 'Efectivo',
      },
      {
        value: 'credit card',
        header: 'Tarjeta de Credito',
      },
      {
        value: 'bank',
        header: 'Banco',
      },
    ],
  },
  {
    key: 'destination',
    type: 'select',
    header: 'Destino',
    enums: [
      {
        value: 'employees',
        header: 'Empleados',
      },
      {
        value: 'providers',
        header: 'Proveedores',
      },
    ],
  },
  {
    key: 'destinationData',
    type: 'text',
    header: 'Datos de Destino',
  },
];
