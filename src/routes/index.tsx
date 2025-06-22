import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import AccordianPage from "../pages/AccordianPage";
import PopoverPage from "../pages/PopoverPage";
import TabsPage from "../pages/TabsPage";
import ProgressBarPage from "../pages/ProgressBarPage";
import StepUpForm from "../pages/StepUpFormPage";

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
      {
        path: "/popover",
        element: <PopoverPage />,
      },
      {
        path: "tabs",
        element: <TabsPage />,
      },
      {
        path: "progressbar",
        element: <ProgressBarPage />,
      },
      {
        path: "stepupform",
        element: <StepUpForm />,
      },
    ],
  },
]);

export default router;
