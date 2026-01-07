import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* Material UI Icons */
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Home() {
  const navigate = useNavigate();

  /* ===== HERO IMAGES ===== */
  const heroImages = [
    "https://img.pikbest.com/backgrounds/20250402/decadent-birthday-cupcake-with-rainbow-sprinkles-creamy-frosting-_11643150.jpg!w700wp",
    "https://png.pngtree.com/thumb_back/fh260/background/20221006/pngtree-ice-cream-cookies-and-cream-melt-stracciatella-photo-image_20101704.jpg",
    "https://i1.wp.com/alwatannews.net/watanbahrainnews/uploads/images/2025/05/09/3306125.jpg?w=600&ulb=true",
    "https://www.p7otoempire.com/wp-content/uploads/2021/07/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%A3%D9%8A%D8%B3-%D9%83%D8%B1%D9%8A%D9%85-7.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  /* ===== SOCIAL MEDIA DATA ===== */
  const socialLinks = [
    {
      name: "Instagram",
      icon: <InstagramIcon style={{ fontSize: 70 }} />,
      url: "https://www.instagram.com/honeybake", 
      brandColor: "#C13584",
    },
    {
      name: "Facebook",
      icon: <FacebookIcon style={{ fontSize: 70 }} />,
      url: "https://www.facebook.com/honeybake", 
      brandColor: "#1877F2",
    },
    {
      name: "YouTube",
      icon: <YouTubeIcon style={{ fontSize: 70 }} />,
      url: "https://www.youtube.com/@honeybake", 
      brandColor: "#FF0000",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url(https://png.pngtree.com/thumb_back/fh260/background/20221111/pngtree-hand-drawn-confectionery-bakery-homemade-biscuits-image_1461993.jpg)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        fontFamily: "'Dancing Script', cursive",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* ================= HERO SECTION ================= */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          padding: "0 6%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-12%",
            top: "50%",
            transform: "translateY(-50%)",
            width: 820,
            height: 820,
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 45px 90px rgba(0,0,0,0.35)",
            zIndex: 1,
          }}
        >
          <img
            src={heroImages[currentImage]}
            alt="Hero Delicacy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(252,249,234,0.97) 42%, rgba(252,249,234,0.55) 62%, transparent 80%)",
            zIndex: 2,
          }}
        />

        <div style={{ position: "relative", zIndex: 3, maxWidth: 700 }}>
          <h1 style={{ fontSize: 96, color: "#b08d57" }}>Honey Bake</h1>
          <p style={{ fontSize: 40, color: "#6b5e4a", marginBottom: 55 }}>
            Baked With Love, Served With Joy.
          </p>
          
          {/* UPDATED ORDER NOW BUTTON WITH HOVER & ZOOM */}
          <button
            onClick={() =>
              document.getElementById("categories").scrollIntoView({ behavior: "smooth" })
            }
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.backgroundColor = "#8a6d4d";
              e.currentTarget.style.boxShadow = "0 20px 45px rgba(138,109,77,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#b08d57";
              e.currentTarget.style.boxShadow = "0 14px 35px rgba(176,141,87,0.6)";
            }}
            style={{
              padding: "20px 60px",
              fontSize: 28,
              borderRadius: 45,
              border: "none",
              cursor: "pointer",
              backgroundColor: "#b08d57",
              color: "#fff",
              boxShadow: "0 14px 35px rgba(176,141,87,0.6)",
              transition: "all 0.4s ease", // Smooth transition for all properties
              fontWeight: "bold",
            }}
          >
            Order Now
          </button>
        </div>
      </section>

      {/* ================= CATEGORIES SECTION ================= */}
      <h2
        style={{
          textAlign: "center",
          fontSize: 62,
          margin: "110px 0 70px",
          color: "#b08d57",
        }}
      >
        Our Delicacies
      </h2>

      <section
        id="categories"
        style={{
          margin: "0 auto 100px",
          width: "85%",
          padding: "80px 40px",
          backgroundColor: "rgba(252,249,234,0.96)",
          borderRadius: 60,
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: 60, flexWrap: "wrap" }}>
          {[
            {
              name: "Cake",
              img: "https://kitchen.sayidaty.net/uploads/small/eb/eb51c852c2396360c95ecfc3c5cdfe3a_w750_h750.jpg",
              path: "/cake",
            },
            {
              name: "Cookies",
              img: "https://cdn.salla.sa/bKWBK/9a90dda6-730f-4fbb-8783-e4ffc75c5085-1000x551.1811023622-6r7vn5gYvm1PORZOPVx1huhh2LNDOQql6OeE7wNQ.jpg",
              path: "/cookies",
            },
            {
              name: "Ice Cream",
              img: "https://p4.wallpaperbetter.com/wallpaper/946/557/290/ice-cream-food-colorful-wallpaper-preview.jpg",
              path: "/icecream",
            },
          ].map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(item.path)}
              style={{
                width: 350,
                height: 300,
                borderRadius: 45,
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                transition: "0.4s",
                boxShadow: "0 18px 40px rgba(176,141,87,0.4)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  padding: 24,
                  background: "rgba(0,0,0,0.45)",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                <h3 style={{ fontSize: 32 }}>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SOCIAL MEDIA SECTION ================= */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 0",
          backgroundColor: "rgba(252,249,234,0.96)",
          borderRadius: 60,
          width: "85%",
          margin: "0 auto 80px",
        }}
      >
        <h3 style={{ fontSize: 40, color: "#b08d57", marginBottom: 40 }}>
          Follow Honey Bake
        </h3>

        <div style={{ display: "flex", justifyContent: "center", gap: 80, flexWrap: "wrap" }}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                textDecoration: "none", 
                transition: "0.4s",
                display: "block",
                textAlign: "center"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.2) translateY(-10px)";
                e.currentTarget.style.filter = "brightness(1.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.filter = "brightness(1)";
              }}
            >
              <div style={{ color: social.brandColor }}>
                {social.icon}
              </div>
              <p style={{ 
                fontSize: 22, 
                marginTop: 10, 
                color: "#6b5e4a", 
                fontWeight: "600" 
              }}>
                {social.name}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;