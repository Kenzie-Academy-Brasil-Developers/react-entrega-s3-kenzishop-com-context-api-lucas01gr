import { useContext } from "react";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { CartContext } from "../../providers/cart";

import { ContainerProducts } from "./styles";

const Product = ({
  product,
  isRemovable = false,
}) => {
  const { id, name, price, img } = product;

  const { addToCart, removeFromCart } = useContext(CartContext);
  

  return (
    <>
      <ContainerProducts>
        <img src={img} alt={name} id="img" />
        <div>
          <h3>{name}</h3>
          <h4>R$ {price}</h4>
          {isRemovable ? (
            <button onClick={() => removeFromCart(id)}>
              <FiTrash2 /> Remove
            </button>
          ) : (
            <button onClick={() => addToCart(product)}>
              <FiShoppingCart /> Adiciona
            </button>
          )}
        </div>
      </ContainerProducts>
    </>
  );
};
export default Product;
