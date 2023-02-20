export const userDefault = {
  name: '',
  last_name: '',
  login: {
    email: '',
    username: '',
    provider: 'local',
    passw: '',
  },
  phone: '',
  status: '',
};
export const userStructure = [
  {
    key: 'name',
    type: 'text',
    header: 'Nombre',
  },
  {
    key: 'last_name',
    type: 'text',
    header: 'Apellido',
  },
  {
    key: 'login',
    type: 'object',
    header: 'Login',
    value: [
      {
        key: 'email',
        type: 'text',
        header: 'Email',
      },
      {
        key: 'username',
        type: 'text',
        header: 'Username',
      },
      {
        key: 'provider',
        type: 'select',
        header: 'Provedor',
        enums: [
          {
            value: 'local',
            header: 'Local',
          },
        ],
      },
    ],
  },
  {
    key: 'phone',
    type: 'text',
    header: 'Telefono',
  },
  {
    key: 'status',
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
