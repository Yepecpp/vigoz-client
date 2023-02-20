import { addressDefault, addressStructure } from './common/address.s.jsx';
import { identityDefault, identityStructure } from './common/identity.s.jsx';
import { currencyDefault, currencyStructure } from './common/currency.s.jsx';

export const employeeDefault = {
  user: '',
  address: addressDefault,
  identity: identityDefault,
  birthDate: new Date(),
  details: {
    position: '',
    type: 'fulltime',
    contract: {
      hireday: new Date(),
      terminated: new Date(),
      Id: '',
    },
  },
  gender: 'other',
  salary: {
    amounts: [1, 2],
    currency: currencyDefault,
    period: '',
  },
  department: '',
  role: 'staff',
};

export const employeeStructure = [
  {
    key: 'user',
    type: 'text',
    header: 'Usuario',
  },
  {
    key: 'address',
    type: 'object',
    header: 'Direccion',
    value: addressStructure,
  },
  {
    key: 'identity',
    type: 'object',
    header: 'Identidad',
    value: identityStructure,
  },
  {
    key: 'birthDate',
    type: 'date',
    header: 'Fecha de Nacimiento',
  },
  {
    key: 'details',
    type: 'object',
    header: 'Detalles',
    value: [
      {
        key: 'position',
        type: 'text',
        header: 'Posicion',
      },
      {
        key: 'type',
        type: 'select',
        header: 'Tipo',
        enums: [
          {
            value: 'fulltime',
            header: 'Tiempo Completo',
          },
          {
            value: 'parttime',
            header: 'Tiempo Parcial',
          },
          {
            value: 'contractor',
            header: 'Contratista',
          },
        ],
      },
      {
        key: 'contract',
        type: 'object',
        header: 'Contrato',
        value: [
          {
            key: 'hireday',
            type: 'date',
            header: 'Fecha de Contratacion',
          },
          {
            key: 'terminated',
            type: 'date',
            header: 'Fecha de Terminacion',
          },
          {
            key: 'Id',
            type: 'text',
            header: 'Id',
          },
        ],
      },
    ],
  },
  {
    key: 'gender',
    type: 'select',
    header: 'Genero',
    enums: [
      {
        value: 'male',
        header: 'Masculino',
      },
      {
        value: 'female',
        header: 'Femenino',
      },
      {
        value: 'other',
        header: 'Otro',
      },
    ],
  },
  {
    key: 'salary',
    type: 'object',
    header: 'Salario',
    value: [
      {
        key: 'amounts',
        type: 'array',
        header: 'Montos',
      },
      {
        key: 'currency',
        type: 'object',
        header: 'Moneda',
        value: currencyStructure,
      },
      {
        key: 'period',
        type: 'text',
        header: 'Periodo',
      },
    ],
  },
  {
    key: 'department',
    type: 'text',
    header: 'Departamento',
  },
  {
    key: 'role',
    type: 'select',
    header: 'Rol',
    enums: [
      {
        value: 'staff',
        header: 'Staff',
      },
      {
        value: 'supervisor',
        header: 'supervisor',
      },
      {
        value: 'admin',
        header: 'Admin',
      },
    ],
  },
];
