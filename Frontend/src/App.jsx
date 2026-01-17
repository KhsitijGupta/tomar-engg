import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminLoginForm from "./admin/component/AdminLoginForm";
import { AdminSidebar } from "./admin/component/AdminSidebar.jsx";
import Home from "./main/pages/Home.jsx";
import AboutUs from "./main/pages/AboutUs.jsx";
import Projects from "./main/pages/Projects.jsx";
import ContactUs from "./main/pages/ContactUs.jsx";
import ProductAndServices from "./main/pages/ProductsAndServices.jsx";
import ScrollToTop from "./main/components/ScrollToTop.jsx";
import WhatsAppFloat from "./main/components/WhatsAppFloat.jsx";

function App() {
  return (
    <>
      <WhatsAppFloat />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/panel/dashboard" element={<AdminSidebar />} />
          <Route
            path="/tomarEngg/panel/login"
            element={<AdminLoginForm />}
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products-services" element={<ProductAndServices />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
