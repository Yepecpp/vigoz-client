export const identityDefault = {
  type: 'id',
  number: '',
  expiration: new Date(),
  country: '',
  state: 'active',
};

export const identityStructure = [
  {
    key: 'type',
    type: 'select',
    header: 'Tipo',
    enums: [{ value: 'id', header: 'Activo' }, 'passport'],
  },
  {
    key: 'number',
    type: 'text',
    header: 'Numero',
  },
  {
    key: 'expiration',
    type: 'date',
    header: 'Expiracion',
  },
  {
    key: 'country',
    type: 'text',
    header: 'Pais',
  },
  {
    key: 'state',
    type: 'select',
    header: 'Estado',
    enums: [
      {
        value: 'active',
        header: 'Activo',
      },
      {
        value: 'inactive',
        header: 'Inactivo',
      },
    ],
  },
];
