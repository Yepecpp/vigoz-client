import { addressDefault, addressStructure } from './common/address.s';

export const providerDefault = {
  name: '',
  email: '',
  phone: '',
  address: addressDefault,
  description: '',
};

export const providerStructure = [
  {
    key: 'name',
    type: 'text',
    header: 'Nombre',
  },
  {
    key: 'email',
    type: 'text',
    header: 'Email',
  },
  {
    key: 'phone',
    type: 'text',
    header: 'Telefono',
  },
  {
    key: 'address',
    type: 'object',
    header: 'Identidad',
    value: addressStructure,
  },
  {
    key: 'descrption',
    type: 'text',
    header: 'Descripcion',
  },
];
