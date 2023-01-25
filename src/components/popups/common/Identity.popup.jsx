import { Field, ErrorMessage } from 'formik';

function Identity(name, handleChange, errors, identity) {
  return (
    <div className="popup_identity">
      <h1>Identity</h1>
      <label className="label identity">Type algo:</label>
      <Field
        as="select"
        name={name + 'algo'}
        className="input identity"
        value={identity?.algo}
        onChange={handleChange}
      >
        <option value="placeholder">Select</option>
        <option value="Fisical">Fisical</option>
        <option value="Juridical">Juridical</option>
      </Field>
      <ErrorMessage
        name={name + 'algo'}
        component={() => <div className="error">{errors.algo}</div>}
      />

      <label className="label identity">Type Document:</label>
      <Field
        name={name + 'document'}
        className="input identity"
        value={identity?.document}
        onChange={handleChange}
      >
        <option value="placeholder">Select</option>
        <option value="id">ID</option>
        <option value="passport">Passport</option>
      </Field>
      <ErrorMessage
        name={name + 'document'}
        component={() => <div className="error">{errors.document}</div>}
      />

      <label className="label identity">Number:</label>
      <Field
        type="text"
        name="number"
        className="input cliente"
        value={identity?.number}
        onChange={handleChange}
      />
      <ErrorMessage
        name={name + 'number'}
        component={() => <div className="error">{errors.number}</div>}
      />

      <label className="label identity">Expiration:</label>
      <Field
        type="date"
        name="expiration"
        className="inputdate identity"
        value={identity?.expiration}
        onChange={handleChange}
      />
      <ErrorMessage
        name={name + 'expiration'}
        component={() => <div className="error">{errors.expiration}</div>}
      />

      <label className="label identity">Country:</label>
      <Field
        type="text"
        name="country"
        className="input cliente"
        value={identity?.country}
        onChange={handleChange}
      />
      <ErrorMessage
        name={name + 'country'}
        component={() => <div className="error">{errors.country}</div>}
      />

      <label className="label identity">State:</label>
      <Field
        name={name + 'state'}
        className="input identity"
        value={identity?.state}
        onChange={handleChange}
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </Field>
      <ErrorMessage
        name={name + 'state'}
        component={() => <div className="error">{errors.state}</div>}
      />
    </div>
  );
}

export default Identity;
