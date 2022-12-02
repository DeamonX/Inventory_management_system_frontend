import { createBrowserRouter } from "react-router-dom";
import Fooldal from "../routes/Fooldal";
import Kategoria from "../routes/Kategoria";
import Raktar from "../routes/Raktar";
import { categoryLoader, productLoader, raktarLoader } from "./routeLoaders";
import Utanrendeles from "../routes/Utanrendeles";
import Termek from "../routes/Termek";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Fooldal />,
    children: [
      {
        path: "/raktar",
        element: <Raktar />,
        loader: raktarLoader,
      },
      {
        path: "/utanrendeles",
        element: <Utanrendeles />,
        loader: productLoader,
      },
      {
        path: "/kategoria",
        element: <Kategoria />,
        loader: categoryLoader,
      },
      {
        path: "/termek",
        element: <Termek />,
        loader: productLoader,
      },
    ],
  },
]);
