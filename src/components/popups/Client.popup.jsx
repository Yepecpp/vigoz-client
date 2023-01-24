import { useState } from 'react';
import { Button } from '@mui/material';
import IdentityP from './common/Identity.popup';
import AddressP from './common/Address.popup';
import { AxiosClient } from '../../libs/axios';
function Client({ SetisOpened }) {
  //eslint-disable-next-line
  const axios = AxiosClient();
  const [client, Setclient] = useState();
  const setAdress = (address) => {
    Setclient({ ...client, address: address });
  };
  const setIdentity = (identity) => {
    Setclient({
      ...client,
      identity: identity,
    });
  };
  const SaveClient = async (e) => {
    e.preventDefault();
    const response = await axios.post('/clients', { client: client });
    console.log(response);
  };
  return (
    <div className="popup client">
      <h1>Client data:</h1>
      {client?.id ? (
        <h2>Editing client: {client?.name}</h2>
      ) : (
        <h2>Creating new client</h2>
      )}
      <span className="close" onClick={() => SetisOpened(false)}>
        &times;
      </span>

      <form className="form client">
        <label className="label_cliente">Name:</label>
        <input
          type="text"
          name="name"
          className="input cliente"
          value={client?.name}
          onChange={(e) => Setclient({ ...client, name: e.target.value })}
        />
        <label className="label cliente">User ID:</label>
        <input
          type="text"
          name="userId"
          className="input cliente"
          value={client?.user}
          onChange={(e) => Setclient({ ...client, user: e.target.value })}
        />
        <label className="label cliente">RNC:</label>
        <input
          type="text"
          name="rnc"
          className="input cliente"
          value={client?.rnc}
          onChange={(e) => Setclient({ ...client, rnc: e.target.value })}
        />
        <label className="label cliente">Phone:</label>
        <input
          type="text"
          name="phone"
          className="input cliente"
          value={client?.phone}
          onChange={(e) => Setclient({ ...client, phone: e.target.value })}
        />
        <AddressP SetAddress={setAdress} preAddress={client?.address} />
        <IdentityP Identity={client?.identity} SetIdentity={setIdentity} />
        <Button
          variant="contained"
          color="success"
          onClick={(e) => SaveClient(e)}
        >
          Guardar
        </Button>
      </form>
    </div>
  );
}
export default Client;
