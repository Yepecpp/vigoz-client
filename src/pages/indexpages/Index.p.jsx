import Slider from '../../components/slider/Slider.c';
import Squares from '../../components/squares/Squares.c';

const SquaresData = [
  {
    imageUrl: 'sobreNosotros.png',
    name: 'Sobre Nosotros',
  },
  {
    imageUrl: 'contacto.png',
    name: 'Contacto',
  },
  {
    imageUrl: 'servicios.png',
    name: 'Servicios',
  },
  {
    imageUrl: 'hielo.png',
    name: 'Hielo',
  },
  {
    imageUrl: 'redesSociales.png',
    name: 'Redes Sociales',
  },
  {
    imageUrl: 'encargos.png',
    name: 'Encargos',
  },
];
const Index = () => {
  return (
    <>
      <Slider />
      <div className="container_Squares">
        {SquaresData.map((square, index) => {
          return (
            <Squares
              key={index}
              imageUrl={'/media/' + square.imageUrl}
              name={square.name}
            />
          );
        })}
      </div>
    </>
  );
};
/**/
export default Index;
