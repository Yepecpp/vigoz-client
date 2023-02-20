export const productionDefault = {
    date: new Date(),
    product: {
        type: 'Ice',
        quantity: 0 
    },
    storange: '',
    employee: '',
  };
  export const productionStructure = [
    {
      key: 'date',
      type: 'date',
      header: 'Date',
    },
    {
      key: 'product',
      type: 'object',
      header: 'Product', 
      value: [
        {
            key: 'type',
            type: 'select',
            header: 'Tipo',
            enums: [
                {
                    value: 'Ice' , 
                    header: 'Ice'
                },
                 {
                    value: 'Bags',
                    header: 'Bags'
                 }
            ] 
          },
          {
            key: 'quantity',
            type: 0,
            header: 'Quantity',
          }
      ]
    },
    {
        key: 'storage',
        type: 'text',
        header: 'Storange'
    },
    {
        key: 'employee',
        type: 'text',
        header: 'Employee'
    },
  ];