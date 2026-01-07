import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SecurityIcon from "@mui/icons-material/Security";
import LogoutIcon from "@mui/icons-material/Logout";
import { Badge } from "@mui/material";

function Header() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalItems);
  };

  useEffect(() => {
    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  const menuItemStyle = {
    cursor: "pointer",
    transition: "0.3s ease",
    fontStyle: "italic",
    fontWeight: "600",
    fontSize: "22px",
  };

  return (
    <header
      style={{
        padding: "15px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "'Dancing Script', cursive",
        background: "rgba(252,249,234,0.95)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
      }}
    >
      {/* LOGO */}
      <div
        onClick={() => navigate("/")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            background: "linear-gradient(145deg,#f2c6d2,#e6c98b)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 26,
          }}
        >
          🧁
        </div>

        <span
          style={{
            fontSize: "32px",
            color: "#b08d57",
            fontWeight: "bold",
          }}
        >
          Honey Bake
        </span>
      </div>

      {/* NAV LINKS */}
      <nav style={{ display: "flex", gap: 40 }}>
        {[
          { label: "Home", path: "/" },
          { label: "About Us", path: "/about" },
          { label: "Contact Us", path: "/contact" },
          { label: "Stores", path: "/stores" },
        ].map((item, i) => (
          <span
            key={i}
            style={menuItemStyle}
            onClick={() => navigate(item.path)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#b08d57")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "inherit")
            }
          >
            {item.label}
          </span>
        ))}
      </nav>

      {/* ACTIONS */}
      <div style={{ display: "flex", gap: 25, alignItems: "center" }}>
        {/* LOGIN */}
        <div
          onClick={() => navigate("/login")}
          style={{ cursor: "pointer" }}
          title="Login"
        >
          <AccountCircleIcon style={{ fontSize: 32, color: "#b08d57" }} />
        </div>

        {/* CART */}
        <div
          onClick={() => navigate("/checkout")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            background: "#b08d57",
            padding: "10px 22px",
            borderRadius: "30px",
            color: "white",
            transition: "0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "#8a6d4d")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "#b08d57")
          }
        >
          <Badge badgeContent={cartCount} color="error">
            <ShoppingCartIcon style={{ fontSize: 24, color: "white" }} />
          </Badge>
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            View Basket
          </span>
        </div>

        {/* SECURITY */}
        <div
          onClick={() => navigate("/security")}
          style={{ cursor: "pointer" }}
          title="Security"
        >
          <SecurityIcon style={{ fontSize: 28, color: "#2c3e50" }} />
        </div>

        {/* LOGOUT */}
        <div
          onClick={() => navigate("/logout")}
          style={{ cursor: "pointer" }}
          title="Logout"
        >
          <LogoutIcon style={{ fontSize: 28, color: "#c0392b" }} />
        </div>
      </div>
    </header>
  );
}

export default Header;
