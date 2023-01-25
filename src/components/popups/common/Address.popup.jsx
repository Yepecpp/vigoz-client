import { Field, ErrorMessage } from 'formik';

function Address({ name, handleChange, errors, address }) {
  return (
    <div className="popup_address">
      <h1>Address</h1>
      <label className="label address">Street 1:</label>
      <Field
        type="text"
        name={name + 'street1'}
        className="input address"
        value={address?.street1}
        onChange={handleChange}
      />
      <ErrorMessage
        name={name + 'street1'}
        component={() => <div className="error">{errors.street1}</div>}
      />
      <label className="label address">Street 2:</label>
      <Field
        type="text"
        name={name + 'street2'}
        className="input address"
        value={address?.street2}
        onChange={handleChange}
      />
      <ErrorMessage
        name={name + 'street2'}
        component={() => <div className="error">{errors.street2}</div>}
      />
      <label className="label address">City:</label>
      <Field
        type="text"
        name={name + 'city'}
        className="input address"
        value={address?.city}
        onChange={handleChange}
      />
      <ErrorMessage
        name={name + 'city'}
        component={() => <div className="error">{errors.city}</div>}
      />
      <label className="label address">Zip:</label>
      <Field
        type="text"
        name={name + 'zip'}
        className="input address"
        value={address?.zip}
        onChange={handleChange}
      />
      <ErrorMessage
        name={name + 'zip'}
        component={() => <div className="error">{errors.zip}</div>}
      />
    </div>
  );
}

export default Address;
