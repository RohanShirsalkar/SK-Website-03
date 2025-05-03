import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import CorporateCompliance from "../pages/CorporateCompliance";
import Q_EHS from "../pages/Q_EHS";
import Contact from "../pages/Contact";
import OurServices from "../pages/OurServices";
import RenewableLogistics from "../pages/RenewableLogistics";
import GeneralTransportation from "../pages/GeneralTransportation";
import EmployeeSkillTraining from "../pages/EmployeeSkillTraining";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/corporate-compliance", element: <CorporateCompliance /> },
      { path: "/q&ehs", element: <Q_EHS /> },
      { path: "/our-services", element: <OurServices /> },
      { path: "/contact", element: <Contact /> },
      { path: "/renewable-logistics", element: <RenewableLogistics /> },
      { path: "/general-transportation", element: <GeneralTransportation /> },
      { path: "/employee-training", element: <EmployeeSkillTraining /> },

    ],
  },
]);

export default router;
