import Cart from "../routes/Cart";
import Shop from "../routes/Shop";
import Error from "./Error";

const routes = [
  {
    path: "/",
    element: <Shop />,
    errorElement: <Error />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
];

export default routes;
