import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Kategoria from "../routes/Kategoria";
import Raktar from "../routes/Raktar";
import { categoryLoader, raktarLoader } from "../routes/routeLoaders";
import Utanrendeles from "../routes/Utanrendeles";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/raktar",
        element: <Raktar />,
        loader: raktarLoader,
      },
      {
        path: "/utanrendeles",
        element: <Utanrendeles />,
        loader: categoryLoader,
      },
      {
        path: "/kategoria",
        element: <Kategoria />,
        loader: categoryLoader,
      },
    ],
  },
]);
