// src/pages/icecream.js
import React from "react";

function IceCream() {
  // --- logic إضافة المنتج للسلة وتحديث الهيدر ---
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const numericPrice = parseFloat(product.price.replace(/[^0-9.]/g, ""));
    
    const existingIndex = cart.findIndex(item => item.name === product.name);
    
    if (existingIndex > -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        id: Date.now() + Math.random(),
        name: product.name,
        price: numericPrice,
        image: product.image,
        quantity: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    // إرسال تنبيه للهيدر ليقوم بتحديث العداد فوراً
    window.dispatchEvent(new Event("storage"));
    alert(`${product.name} added to basket! 🍦`);
  };

  const classicFlavors = [
    { name: "Vanilla Ice Cream", price: "3$", image: "https://www.sixsistersstuff.com/wp-content/uploads/2021/05/Homemade-Vanilla-Ice-Cream.jpg" },
    { name: "Chocolate Ice Cream", price: "3$", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDM8SwsMQo8aX5ZYctBFmzujK8rc0M6MzOw&s" },
    { name: "Strawberry Ice Cream", price: "3$", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcxeKzdxOu14JnD1thKskvUrdEkrfbZZdeg&s" },
    { name: "Mint Chocolate Chip Ice Cream", price: "3.5$", image: "https://www.simplystacie.net/wp-content/uploads/2018/06/Mint-Chocolate-Chip-Ice-Cream-LOW-RES-33.jpg" },
    { name: "Cookie & Cream Ice Cream", price: "3.5$", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJb-8q6qw0HYz8_Ud32-meWKd95f3DKRvqzQ&s" },
  ];

  const fruitFlavors = [
    { name: "Mango Ice Cream", price: "3$", image: "https://i0.wp.com/s.lightorangebean.com/media/20240914141651/Easy-Mango-Coconut-Ice-Cream_done.png?resize=500%2C500&quality=80&ssl=1" },
    { name: "Blueberry Ice Cream", price: "3$", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-MiyVcT7y1p6Ze_MglmxoZPYQO6XsNDTnvQ&s" },
    { name: "Raspberry Ice Cream", price: "3$", image: "https://buttermilkbysam.com/wp-content/uploads/2024/01/raspberry-ice-cream-3.jpg" },
    { name: "Pineapple Ice Cream", price: "3$", image: "https://www.sweetfixbaker.com/wp-content/uploads/2024/05/Pineapple-Ice-Cream-6.jpg" },
  ];

  const specialFlavors = [
    { name: "Salted Caramel Ice Cream", price: "3.5$", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJBiFyLYcCH9X75tE9dO-TDy8480XHIV2piQ&s" },
    { name: "Peanut Butter Ice Cream", price: "3.5$", image: "https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/10/Peanut-butter-ice-cream-hero-04.jpg" },
    { name: "Coffee Ice Cream", price: "3.5$", image: "https://www.livewellbakeoften.com/wp-content/uploads/2024/06/Coffee-Ice-Cream-10s.jpg" },
    { name: "Pecan Butter Ice Cream", price: "3.5$", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lCx0u3cPZn5zgNO23z_9eAXO9pRN_meiPg&s" },
  ];

  const renderFlavors = (flavors) =>
    flavors.map((flavor, index) => (
      <div
        key={index}
        style={{
          width: 320,
          borderRadius: 30,
          overflow: "hidden",
          background: "#fff",
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-15px)";
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
        }}
      >
        {/* Container الصورة مع الـ Zoom */}
        <div style={{ overflow: "hidden", height: 220 }}>
          <img
            src={flavor.image}
            alt={flavor.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.6s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        {/* محتوى الكرت */}
        <div style={{ padding: 22, textAlign: "center", fontStyle: "italic", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <h3 style={{ fontSize: 26, color: "#b08d57", marginBottom: 8, minHeight: "64px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {flavor.name}
            </h3>
            <p style={{ fontSize: 20, color: "#8a6d4d", marginBottom: 15 }}>{flavor.price}</p>
          </div>

          {/* زر الإضافة للسلة */}
          <button
            onClick={() => addToCart(flavor)}
            style={{
              background: "#b08d57",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "20px",
              fontSize: "18px",
              cursor: "pointer",
              transition: "0.3s",
              fontFamily: "inherit",
              fontWeight: "bold"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#8a6d4d")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#b08d57")}
          >
            Add to Basket
          </button>
        </div>
      </div>
    ));

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 70px",
        fontFamily: "'Dancing Script', cursive",
        color: "#7a5c3e",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: 45, color: "#b08d57", marginBottom: 50 }}>
        Our Ice Cream Flavors
      </h2>

      {/* Classic Flavors */}
      <h2 style={{ textAlign: "center", fontSize: 36, color: "#b08d57", marginBottom: 30 }}>Classic Flavors</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap", marginBottom: 70 }}>
        {renderFlavors(classicFlavors)}
      </div>

      {/* Fruit Flavors */}
      <h2 style={{ textAlign: "center", fontSize: 36, color: "#b08d57", marginBottom: 30 }}>Fruit Flavors</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap", marginBottom: 70 }}>
        {renderFlavors(fruitFlavors)}
      </div>

      {/* Special Flavors */}
      <h2 style={{ textAlign: "center", fontSize: 36, color: "#b08d57", marginBottom: 30 }}>Special Flavors</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap", marginBottom: 70 }}>
        {renderFlavors(specialFlavors)}
      </div>
    </div>
  );
}

export default IceCream;