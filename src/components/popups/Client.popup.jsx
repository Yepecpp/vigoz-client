import { AxiosClient } from '../../libs/axios';
import IdentityP from './common/Identity.popup';
import AddressP from './common/Address.popup';
import { Button } from '@mui/material';
import { Formik, useFormik, Form, Field, ErrorMessage } from 'formik';
import { useMutation } from '@tanstack/react-query';

function Client({ SetisOpened, useClient, queryClient }) {
  const [client] = useClient();
  const clientMutation = useMutation({
    mutationFn: async (client) => {
      const axios = AxiosClient();
      if (client.user === '' || client.user === 'No user') delete client.user;
      const response = await (Formikh.values?.id
        ? axios.put('/clients/', {
            client: client,
          })
        : axios.post('/clients/', {
            client: client,
          }));
      return response.data;
    },
    onSuccess: (values) => {
      queryClient.invalidateQueries(['clients', values.id]);
    },
  });
  /*
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
      },*/
  const Formikh = useFormik({
    initialValues: {
      ...client,
    },
    onSubmit: async (values, { resetForm }) => {
      clientMutation.mutate(values);
      if (clientMutation.isSuccess) {
        resetForm();
        SetisOpened(false);
      }
    },
  });

  return (
    <Formik>
      <div className="container_popupClient">
        <Form onSubmit={Formikh.handleSubmit} className="container_form">
          <div className="popup_client">
            {Formikh.values?.id ? (
              <h1>Edit Client: {Formikh.values?.name}</h1>
            ) : (
              <h1>Create New Client</h1>
            )}
            <span className="close" onClick={() => SetisOpened(false)}>
              &times;
            </span>
            <div className="info_popup">
              <div className="info_popup_ext">
                <label htmlFor="name">Name:</label>
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
                  component={() => (
                    <div className="error">{Formikh.errors?.name}</div>
                  )}
                />
              </div>

              <div className="info_popup_ext">
                <label htmlFor="user">User:</label>
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
                  component={() => (
                    <div className="error">{Formikh.errors?.user}</div>
                  )}
                />
              </div>

              <div className="info_popup_ext">
                <label htmlFor="rnc">RNC:</label>
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
                  component={() => (
                    <div className="error">{Formikh.errors?.rnc}</div>
                  )}
                />
              </div>

              <div className="info_popup_ext">
                <label htmlFor="phone">Phone:</label>
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
                  component={() => (
                    <div className="error">{Formikh.errors?.phone}</div>
                  )}
                />
              </div>
            </div>
          </div>

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

          {/* <div className="popup_client_button"> */}
          <Button type="submit" variant="contained" color="success">
            Guardar
          </Button>
          {/* </div> */}
        </Form>
      </div>
    </Formik>
  );
}
export default Client;
