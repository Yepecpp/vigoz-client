import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
function Identity({ name, handleChange, errors, identity }) {
  return (
    <div className="popup_client">
      <h1>Identity</h1>
      <div className="info_popup">
        <div className="info_popup_ext">
          <label className="label identity">Type:</label>
          <select
            name={name + 'type'}
            className="input identity"
            value={identity?.identity?.type}
            onChange={handleChange}
          >
            <option value="placeholder">Select</option>
            <option value="Fisical">Fisical</option>
            <option value="Company">Company</option>
          </select>
          <ErrorMessage
            name={name + 'type'}
            component={() => <div className="error">{errors?.type}</div>}
          />
        </div>

        <div className="info_popup_ext">
          <label className="label identity">Type:</label>
          <select
            name={name + name + 'type'}
            className="input identity"
            value={identity?.identity?.type}
            onChange={handleChange}
          >
            <option value="placeholder">Select</option>
            <option value="id">ID</option>
            <option value="passport">Passport</option>
          </select>
          <ErrorMessage
            name={name + name + 'type'}
            component={() => <div className="error">{errors?.identity?.type}</div>}
          />
        </div>
        
        <div className="info_popup_ext">
          <label className="label identity">Number:</label>
          <Field
            type="text"
            name={name + name + 'number'}
            className="input cliente"
            value={identity?.identity?.number}
            onChange={handleChange}
          />
          <ErrorMessage
            name={name + name + 'number'}
            component={() => (
              <div className="error">{errors?.identity?.number}</div>
            )}
          />
        </div>

        <div className="info_popup_ext">
          <label className="label identity">Expiration:</label>
          <Field
            type="date"
            name={name + name + 'expiration'}
            className="inputdate identity"
            value={identity?.identity?.expiration}
            onChange={handleChange}
          />
          <ErrorMessage
            name={name + name + 'expiration'}
            component={() => (
              <div className="error">{errors?.identity?.expiration}</div>
            )}
          />
        </div>

        <div className="info_popup_ext">
          <label className="label identity">Country:</label>
          <Field
            type="text"
            name={name + name + 'country'}
            className="input cliente"
            value={identity?.identity?.country}
            onChange={handleChange}
          />
          <ErrorMessage
            name={name + name + 'country'}
            component={() => (
              <div className="error">{errors?.identity?.country}</div>
            )}
          />
        </div>
        
        <div className="info_popup_ext">
          <label className="label identity">State:</label>
          <select
            name={name + name + 'state'}
            className="input identity"
            value={identity?.identity?.state}
            onChange={handleChange}
          >
            <option value="placeholder">Select</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <ErrorMessage
            name={name + name + 'state'}
            component={() => <div className="error">{errors?.identity?.state}</div>}
          />
        </div>
      </div>
    </div>
  );
}
Identity.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  identity: PropTypes.object,
};
export default Identity;
