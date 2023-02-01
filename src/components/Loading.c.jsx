import { Typography, Container } from '@mui/material';
const Loandig = () => {
  return (
    <Container>
      <div className="container_spinner">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Typography variant="h1">Cargando...</Typography>
    </Container>
  );
};
export default Loandig;
