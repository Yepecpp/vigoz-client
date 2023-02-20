import { addressStructure, addressDefault } from './common/address.s';
import { identityStructure, identityDefault } from './common/identity.s';
export const clientDefault = {
  name: '',
  address: addressDefault,
  phone: '',
  user: '',
  identity: {
    type: 'Fisical',
    identity: identityDefault,
  },
  rnc: '',
};

export const clientStructure = [
  {
    key: 'name',
    type: 'text',
    header: 'Nombre',
  },
  {
    key: 'address',
    type: 'object',
    header: 'Direccion',
    value: addressStructure,
  },
  {
    key: 'phone',
    type: 'text',
    header: 'Telefono',
  },
  {
    key: 'user',
    type: 'user',
    header: 'Usuario',
  },
  {
    key: 'identity',
    type: 'object',
    header: 'Identidad',
    value: [
      {
        key: 'identity',
        type: 'object',
        header: 'Identidad',
        value: identityStructure,
      },
      {
        key: 'type',
        type: 'select',
        header: 'Tipo',
        enums: [
          { value: 'Fisical', header: 'Fisico' },
          { value: 'Company', header: 'Empresa' },
        ],
      },
    ],
  },
  {
    key: 'rnc',
    type: 'text',
    header: 'RNC',
  },
];
