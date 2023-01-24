import { useState, useEffect } from 'react';
function Address({ preAddress, SetAddress }) {
  const [address, Setaddress] = useState(preAddress);
  useEffect(() => {
    SetAddress(address);
  }, [address]);
  return (
    <div className="popup_address">
      <h1>Address</h1>
      <label className="label_address">Street 1:</label>
      <input
        type="text"
        name="street1"
        className="input address"
        value={address?.street1}
        onChange={(e) => Setaddress({ ...address, street1: e.target.value })}
      />
      <label className="label_address">Street 2:</label>
      <input
        type="text"
        name="street2"
        className="input address"
        value={address?.street2}
        onChange={(e) => Setaddress({ ...address, street2: e.target.value })}
      />
      <label className="label_address">City:</label>
      <input
        type="text"
        name="city"
        className="input address"
        value={address?.city}
        onChange={(e) => Setaddress({ ...address, city: e.target.value })}
      />
      <label className="label_address">Zip:</label>
      <input
        type="text"
        name="zip"
        className="input address"
        value={address?.zip}
        onChange={(e) => Setaddress({ ...address, zip: e.target.value })}
      />
    </div>
  );
}

export default Address;
