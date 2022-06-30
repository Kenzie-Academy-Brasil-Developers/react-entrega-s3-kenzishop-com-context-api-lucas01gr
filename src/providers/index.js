import { CartProvider } from "./cart";
import { ProductsProvider } from "./products";

function Providers({ children }) {
  return (
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsProvider>
  );
}
export default Providers;
