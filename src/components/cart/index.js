import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import Product from "../product";

const Cart = () => {
  const { cart } = useContext(CartContext);
  

  return (
    <>
      {cart.map((product) => (
        <Product key={product.id} product={product} isRemovable />
      ))}
    </>
  );
};

export default Cart;
