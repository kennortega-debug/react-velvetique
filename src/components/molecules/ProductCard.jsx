import { Button } from '../atoms/Button';
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({ id, image, titulo, marca, precio }) => {
  const navigate = useNavigate();

  const detalledelpath = () => {
    navigate(`/producto/${id}`); 
  }; 

  return (
    <div className="caluga-producto">
      <div className="imagen-producto">
        <img src={image} alt={titulo} />
      </div>
      <h3 className="producto-titulo">{titulo}</h3>
      <span className="marca-producto">{marca}</span>
      <span className="precio-producto">${precio}</span>
      <Button 
        variant="primary" 
        className="btn-full" 
        onClick={detalledelpath} 
      >
        DETALLES
      </Button>
    </div>
  );
};