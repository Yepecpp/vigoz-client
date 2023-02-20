export const storageDefault = {
  name: '',
  category: '',
  status: 'active',
  maxCapacity: 0,
  currentCapacity: 0,
  brach: '',
};

export const storageStructure = [
  {
    key: 'name',
    type: 'text',
    header: 'Nombre',
  },
  {
    key: 'category',
    type: 'text',
    header: 'Categoria',
  },
  {
    key: 'status',
    type: 'select',
    header: 'Status',
    enums: [
      {
        value: 'active',
        header: 'Activo',
      },
      {
        value: 'inactive',
        header: 'Inactivo',
      },
      {
        value: 'damaged',
        header: 'Damaged',
      },
    ],
  },
  {
    key: 'maxCapacity',
    type: 'number',
    header: 'Capacidad Maxima',
  },
  {
    key: 'branch',
    type: 'text',
    header: 'Branch',
  },
];
