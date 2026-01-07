import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products"; // ✅ الإضافة الوحيدة

// pages
import Home from "./pages/Home";
import Cake from "./pages/Cake";
import Cookies from "./pages/Cookies";
import IceCream from "./pages/IceCream";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Stores from "./pages/Stores";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import AdminOrders from "./pages/AdminOrders";
import Logout from "./pages/Logout";
import Security from "./pages/Security";
import Done from "./pages/Done";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.25)), url(https://png.pngtree.com/thumb_back/fh260/background/20221111/pngtree-hand-drawn-confectionery-bakery-homemade-biscuits-image_1461993.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      <main
        style={{
          flex: 1,
          backgroundColor: "rgba(252, 249, 234, 0.55)",
          backdropFilter: "blur(1px)",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cake" element={<Cake />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/icecream" element={<IceCream />} />

          {/* ✅ Products (من Spring Boot) */}
          <Route path="/products" element={<Products />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/admin-orders" element={<AdminOrders />} />

          <Route path="/logout" element={<Logout />} />
          <Route path="/security" element={<Security />} />
          <Route path="/done" element={<Done />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
