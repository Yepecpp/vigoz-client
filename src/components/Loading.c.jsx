import {  Container } from '@mui/material';

const Loandig = () => {
  return (
    <Container className="main">
      <div className="container_spinner">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1>Cargando...</h1>
      </div>
    </Container>
  );
};
export default Loandig;
