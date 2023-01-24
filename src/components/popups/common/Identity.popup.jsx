import { useState, useEffect } from 'react';

function Identity({ Identity, SetIdentity }) {
  const [identity, Setidentity] = useState(Identity);
  useEffect(() => {
    SetIdentity(identity);
  }, [identity]);

  return (
    <div className="popup_identity">
      <h1>Identity</h1>
      <label className="label identity">Type:</label>
      <select
        className="input identity"
        value={identity?.type}
        onChange={(e) =>
          Setidentity({
            ...identity,
            type: e.target.value,
          })
        }
      >
        <option value="placeholder">Select</option>
        <option value="Fisical">Fisical</option>
        <option value="Juridical">Juridical</option>
      </select>

      <label className="label identity">Type:</label>
      <select
        className="input identity"
        value={identity?.identity?.type}
        onChange={(e) =>
          Setidentity({
            ...identity,
            identity: { ...identity?.identity, type: e.target.value },
          })
        }
      >
        <option value="placeholder">Select</option>
        <option value="id">ID</option>
        <option value="passport">Passport</option>
      </select>
      <label className="label identity">Number:</label>
      <input
        type="text"
        name="number"
        className="input cliente"
        value={identity?.identity?.number}
        onChange={(e) =>
          Setidentity({
            ...identity,
            identity: { ...identity?.identity, number: e.target.value },
          })
        }
      />
      <label className="label identity">Expiration:</label>
      <input
        type="date"
        name="expiration"
        className="inputdate identity"
        value={identity?.identity?.expiration}
        onChange={(e) =>
          Setidentity({
            ...identity,
            identity: { ...identity?.identity, expiration: e.target.value },
          })
        }
      />
      <label className="label identity">Country:</label>
      <input
        type="text"
        name="country"
        className="input cliente"
        value={identity?.identity?.country}
        onChange={(e) =>
          Setidentity({
            ...identity,
            identity: { ...identity?.identity, country: e.target.value },
          })
        }
      />
      <label className="label identity">State:</label>
      <select
        className="input identity"
        value={identity?.identity?.state}
        onChange={(e) =>
          Setidentity({
            ...identity,
            identity: { ...identity?.identity, state: e.target.value },
          })
        }
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
}

export default Identity;
