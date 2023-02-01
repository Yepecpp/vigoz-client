import { useState } from 'react';
import { Button } from '@mui/material';

const Usuariosc = () => {
  const [isOpened, SetisOpened] = useState(false);
  const [client, SetClient] = useState({});
  return (
    <div>
      <div className="container_formClient">
      <div className="controls_clientForm">
        <div className='container_search_client'>
          <label className="text_client">Search:</label>
          <input type="text" name="buscar" className="search_client" />
        </div>

          <Button
            variant="contained"
            size="medium"
            className="open_client"
            onClick={() => {
              SetisOpened(true);
            }}
            visibility={`${!isOpened}`}
          >
            Agregar
          </Button>
      </div>

      {isOpened ? (
        <ClientP
          SetisOpened={SetisOpened}
          useClient={() => [client, SetClient]}
        />
      ) : null}
    </div>
    </div>
  );
};
export default Usuariosc;
