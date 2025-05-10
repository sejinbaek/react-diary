import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import New from "../pages/New";
import Diary from "../pages/Diary";
import Edit from "../pages/Edit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "new", element: <New /> },
      { path: "diary/:id", element: <Diary /> },
      { path: "edit/:id", element: <Edit /> },
    ],
  },
]);
