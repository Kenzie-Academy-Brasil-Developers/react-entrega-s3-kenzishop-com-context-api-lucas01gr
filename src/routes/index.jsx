import { Switch, Route } from "react-router-dom";
import CartShop from "../pages/cartShop";
import Home from "../pages/home";



function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/CartShop">
        <CartShop />
      </Route>
    </Switch>
  );
}
export default Routes;
