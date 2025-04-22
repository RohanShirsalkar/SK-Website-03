import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  return (
    <main>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
