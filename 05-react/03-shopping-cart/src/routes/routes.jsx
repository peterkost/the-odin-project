import { CART_ROUTE, SHOP_ROUTE } from "../constants";
import Cart from "../routes/Cart";
import Shop from "../routes/Shop";
import Error from "./Error";

const routes = [
  {
    path: SHOP_ROUTE,
    element: <Shop />,
    errorElement: <Error />,
  },
  {
    path: CART_ROUTE,
    element: <Cart />,
    errorElement: <Error />,
  },
];

export default routes;
