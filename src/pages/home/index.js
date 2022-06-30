import { FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

import Products from "../../components/products";

import { ContainerHeader, ContainerProduct } from "./styles";

function Home() {
  const { cart } = useContext(CartContext);
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <>
      <ContainerHeader>
        <div>
          <h3>
            Kenzie <span>Shop</span>{" "}
          </h3>
        </div>
        <button onClick={() => handleNavigation("/CartShop")}>
          <span>{cart.length}</span> <FiShoppingCart />
        </button>
      </ContainerHeader>
      <ContainerProduct>
        <Products />
      </ContainerProduct>
    </>
  );
}
export default Home;
