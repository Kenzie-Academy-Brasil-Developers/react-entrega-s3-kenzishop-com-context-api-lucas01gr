import { useContext } from "react";

import { ProductsContext } from "../../providers/products";
import Product from "../product";
import { ContainerProduct } from "./styles";

const Products = () => {
  const { products } = useContext(ProductsContext);

  return (
    <ContainerProduct>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ContainerProduct>
  );
};

export default Products;
