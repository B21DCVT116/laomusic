// AllRouter.jsx
import { useRoutes } from "react-router-dom";
import LayoutMusic from "../component/Layout";
import Home from "../page/Home/Home";

const routes = [
  {
    path: "/",
    element: <LayoutMusic />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

const AllRouter = () => {
  const routing = useRoutes(routes);
  return routing;
};

export default AllRouter;
