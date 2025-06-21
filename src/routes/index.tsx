import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import AccordianPage from "../pages/AccordianPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/accordian",
        element: <AccordianPage />,
      },
    ],
  },
]);

export default router;
