import { AxiosClient } from '../../libs/axios';
import IdentityP from './common/Identity.popup';
import AddressP from './common/Address.popup';
import { Button } from '@mui/material';
import { useFormik, Form, Field, ErrorMessage } from 'formik';

function Client({ SetisOpened }) {
  //eslint-disable-next-line
  const axios = AxiosClient();

  const SaveClient = async (client) => {
    client.preventDefault();
    const response = await axios.post('/clients', { client: client });
    console.log(response);
  };

  const Formik = useFormik({
    initialValues: {
      name: '',
      userId: '',
      rnc: '',
      phone: '',
      address: '',
      identity: '',
    },
    valideate: (values) => {
      let errors = {};

      // Validation of name
      if (!values.name) {
        errors.name = 'Required';
      }

      if (!values.userId) {
        errors.userId = 'Required';
      }

      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      resetForm();
      SaveClient(values);
      const y = 8;
      console.log('Form Send');
    },
  });

  return (
    <Form onSubmit={Formik.handleSubmit}>
      {Formik.values?.id ? (
        <h2>Editing client: {Formik.values?.name}</h2>
      ) : (
        <h2>Creating new client</h2>
      )}
      <span className="close" onClick={() => SetisOpened(false)}>
        &times;
      </span>

      <label htmlFor="name">Name</label>
      <Field
        type="text"
        id="name"
        name="name"
        placeholder="Write your name"
        value={Formik.values?.name}
        onChange={Formik.handleChange}
      />
      <ErrorMessage
        name="name"
        component={() => <div className="error">{Formik.errors?.name}</div>}
      />
      {/* No se te escucha */}
      <label htmlFor="user">User</label>
      <Field
        type="text"
        id="user"
        name="user"
        placeholder="Write your user"
        value={Formik.values?.user}
        onChange={Formik.handleChange}
      />
      <ErrorMessage
        name="userid"
        component={() => <div className="error">{Formik.errors?.user}</div>}
      />

      <label htmlFor="rnc">RNC</label>
      <Field
        type="text"
        id="rnc"
        name="rnc"
        placeholder="Write your RNC"
        value={Formik.values?.rnc}
        onChange={Formik.handleChange}
      />
      <ErrorMessage
        name="rnc"
        component={() => <div className="error">{Formik.errors?.rnc}</div>}
      />

      <label htmlFor="phone">Phone</label>
      <Field
        type="text"
        id="phone"
        name="phone"
        placeholder="(849)865-8925"
        value={Formik.values?.phone}
        onChange={Formik.handleChange}
      />
      <ErrorMessage
        name="phone"
        component={() => <div className="error">{Formik.errors?.phone}</div>}
      />

      <AddressP
        address={Formik.values?.address}
        name="address."
        handleChange={Formik.handleChange}
        errors={Formik.errors?.address}
      />
      <IdentityP
        identity={Formik.values?.identity}
        name="identity."
        handleChange={Formik.handleChange}
        errors={Formik.errors?.identity}
      />

      <Button
        variant="contained"
        color="success"
        onClick={(e) => SaveClient(e)}
      >
        Guardar
      </Button>
    </Form>
  );
}
export default Client;
// no se oye
{
  /* <div className="popup client">
  <h1>Client data:</h1>

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
    <Button variant="contained" color="success" onClick={(e) => SaveClient(e)}>
      Guardar
    </Button>
  </form>
</div>; */
}
