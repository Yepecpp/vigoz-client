import { useState } from 'react';
import { Button } from '@mui/material';
function Client({ SetisOpened }) {
  //eslint-disable-next-line
  const [client, Setclient] = useState({
    name: 'Juan',
    address: {
      street1: 'Calle',
      street2: 'Calle',
      city: 'Santo Domingo',
      zip: '10101',
    },
    //user: crypto.randomUUID(),
    identity: {
      type: 'Fisical',
      identity: {
        type: 'id',
        number: '123456789',
        expiration: '2021-12-31',
        country: 'Dominican Republic',
        state: 'Santo Domingo',
      },
    },
    rnc: '123456789',
    phone: '809-123-4567',
  });
  return (
    <div className="popup_client">
      <span className="close" onClick={() => SetisOpened(false)}>
        &times;
      </span>
      <form className="form_cliente">
        <label className="label_cliente">Name:</label>
        <input
          type="text"
          name="name"
          className="input_cliente"
          value={client.name}
          onChange={(e) => Setclient({ ...client, name: e.target.value })}
        />
        <label className="label_cliente">RNC:</label>
        <input
          type="text"
          name="rnc"
          className="input_cliente"
          value={client.rnc}
          onChange={(e) => Setclient({ ...client, rnc: e.target.value })}
        />
        <label className="label_cliente">Phone:</label>
        <input
          type="text"
          name="phone"
          className="input_cliente"
          value={client.phone}
          onChange={(e) => Setclient({ ...client, phone: e.target.value })}
        />
        <Button variant="contained" color="success">
          Guardar
        </Button>
      </form>
    </div>
  );
}
export default Client;
