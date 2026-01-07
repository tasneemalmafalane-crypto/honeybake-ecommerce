import React from "react";
import { Box, Typography, Container } from "@mui/material";

function About() {
  return (
    <Box
      style={{
        minHeight: "100vh",
        // الخلفية الأساسية للمشروع
        backgroundImage: "url(https://png.pngtree.com/thumb_back/fh260/background/20221111/pngtree-hand-drawn-confectionery-bakery-homemade-biscuits-image_1461993.jpg)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          // طبقة الخلفية الشفافة
          background: "rgba(252, 249, 234, 0.85)", 
          backdropFilter: "blur(10px)",
          padding: "60px",
          borderRadius: "50px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          textAlign: "center",
          fontFamily: "'Dancing Script', cursive",
        }}
      >
        {/* TITLE - غير مائل */}
        <Typography
          variant="h2"
          style={{
            fontSize: "56px",
            color: "#b08d57",
            marginBottom: "40px",
            fontFamily: "inherit",
            fontWeight: "bold",
          }}
        >
          About Honey Bake
        </Typography>

        {/* PARAGRAPHS - مائل */}
        <Typography
          style={{
            fontSize: "26px",
            lineHeight: 1.8,
            color: "#6b5e4a",
            marginBottom: "30px",
            fontStyle: "italic",
            fontFamily: "inherit",
          }}
        >
          Honey Bake is a modern dessert boutique dedicated to creating delightful
          moments through freshly made cakes, cookies, and ice cream.
        </Typography>

        <Typography
          style={{
            fontSize: "26px",
            lineHeight: 1.8,
            color: "#6b5e4a",
            marginBottom: "30px",
            fontStyle: "italic",
            fontFamily: "inherit",
          }}
        >
          We believe that every sweet bite tells a story. That’s why our desserts
          are handcrafted daily using high-quality ingredients, creative recipes,
          and a lot of love.
        </Typography>

        <Typography
          style={{
            fontSize: "26px",
            lineHeight: 1.8,
            color: "#6b5e4a",
            fontStyle: "italic",
            fontFamily: "inherit",
          }}
        >
          Our mission is to bring joy to our customers by offering desserts that
          are not only delicious but also beautifully designed. At Honey Bake,
          freshness, quality, and happiness are always our top priority.
        </Typography>
      </Container>
    </Box>
  );
}

export default About;