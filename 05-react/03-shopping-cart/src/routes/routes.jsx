import { CART_ROUTE } from "../constants";
import Cart from "../components/Cart";
import Shop from "../components/Shop";
import Error from "../components/Error";

const routes = [
  {
    path: "/",
    element: <Shop />,
    errorElement: <Error />,
    children: [
      {
        path: CART_ROUTE,
        element: <Cart />,
      },
    ],
  },
];

export default routes;
