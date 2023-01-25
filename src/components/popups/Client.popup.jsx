import { AxiosClient } from '../../libs/axios';
import IdentityP from './common/Identity.popup';
import AddressP from './common/Address.popup';
import { Button } from '@mui/material';
import { Formik, useFormik, Form, Field, ErrorMessage } from 'formik';

function Client({ SetisOpened }) {
  //eslint-disable-next-line
  const axios = AxiosClient();

  const SaveClient = async (client) => {
    client.preventDefault();
    const response = await axios.post('/clients', { client: client });
    console.log(response);
  };

  const Formikh = useFormik({
    initialValues: {
      name: '',
      user: '',
      rnc: '',
      phone: '',
      address: {
        street1: '',
        street2: '',
        city: '',
        country: '',
      },
      identity: {
        type: 'fisical',
        identity: {
          type: 'id',
          number: '',
          expiration: new Date(),
          state: 'active',
        },
      },
    },
    onSubmit: (values, { resetForm }) => {
      resetForm();
      SaveClient(values);
      console.log('Form Send');
    },
  });

  return (
    <Formik>
      <Form onSubmit={Formikh.handleSubmit}>
        {Formikh.values?.id ? (
          <h2>Editing client: {Formikh.values?.name}</h2>
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
          value={Formikh.values?.name}
          onChange={Formikh.handleChange}
        />
        <ErrorMessage
          name="name"
          component={() => <div className="error">{Formikh.errors?.name}</div>}
        />
        {/* No se te escucha */}
        <label htmlFor="user">User</label>
        <Field
          type="text"
          id="user"
          name="user"
          placeholder="Write your user"
          value={Formikh.values?.user}
          onChange={Formikh.handleChange}
        />
        <ErrorMessage
          name="userid"
          component={() => <div className="error">{Formikh.errors?.user}</div>}
        />

        <label htmlFor="rnc">RNC</label>
        <Field
          type="text"
          id="rnc"
          name="rnc"
          placeholder="Write your RNC"
          value={Formikh.values?.rnc}
          onChange={Formikh.handleChange}
        />
        <ErrorMessage
          name="rnc"
          component={() => <div className="error">{Formikh.errors?.rnc}</div>}
        />

        <label htmlFor="phone">Phone</label>
        <Field
          type="text"
          id="phone"
          name="phone"
          placeholder="(849)865-8925"
          value={Formikh.values?.phone}
          onChange={Formikh.handleChange}
        />
        <ErrorMessage
          name="phone"
          component={() => <div className="error">{Formikh.errors?.phone}</div>}
        />

        <IdentityP
          identity={Formikh.values?.identity}
          name="identity."
          handleChange={Formikh.handleChange}
          errors={Formikh?.errors?.identity}
        />
        <AddressP
          address={Formikh.values?.address}
          name="address."
          handleChange={Formikh.handleChange}
          errors={Formikh.errors?.address}
        />
        <Button variant="contained" color="success">
          Guardar
        </Button>
      </Form>
    </Formik>
  );
}
export default Client;
