import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import CorporateCompliance from "../pages/CorporateCompliance";
import Q_EHS from "../pages/Q_EHS";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import SolutionsWeOffer from "../pages/ProjectLogistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/corporate-compliance", element: <CorporateCompliance /> },
      { path: "/q&ehs", element: <Q_EHS /> },
      { path: "/project-logistics", element: <SolutionsWeOffer /> },
      { path: "/contact", element: <Contact /> },
      { path: "/gallery", element: <Gallery /> },
    ],
  },
]);

export default router;
