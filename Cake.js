import React from "react";
import { useNavigate } from "react-router-dom"; 
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Container 
} from "@mui/material"; 

function Cake() {
  const navigate = useNavigate();

  // --- ADD TO CART LOGIC ---
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const numericPrice = parseInt(product.price.replace(/[^0-9]/g, ""));
    const itemName = product.name || product.title;

    const existingIndex = cart.findIndex(item => item.name === itemName);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        id: Date.now() + Math.random(),
        name: itemName,
        price: numericPrice,
        image: product.image,
        quantity: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
    alert(`${itemName} added to basket! 🎂`);
  };

  // --- OPEN PRODUCT DETAILS ---
  const openDetails = (item, itemName) => {
    navigate("/product-details", {
      state: {
        name: itemName,
        price: item.price,
        image: item.image,
        description:
          "Delicious handcrafted cake made with premium ingredients and lots of love 💛",
      },
    });
  };

  // --- PRODUCTS DATA ---
  const cakes = [
    { title: "Birthday Cakes", price: "200$", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8dXEV2IUaDrVmUf1gTZcpv0Rii8IAWBEbQ&s" },
    { title: "Engagement & Wedding Cakes", price: "300$", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Iz2FW9EEH9KYAbE4vlzKawMFRbXWS1vMiQ&s" },
    { title: "Graduation Cakes", price: "100$", image: "https://deerfieldsbakery.com/cdn/shop/products/Q2018-Quick-Graduation-Cake.jpg?v=1651859426" },
    { title: "Hot Chocolate Cake", price: "55$", image: "https://wkefbybaeklskadsmwlu.supabase.co/storage/v1/object/public/Recipe%20Images/57637_hot-chocolate-lava-cake.webp" },
    { title: "Fresh Strawberry Cake", price: "30$", image: "https://hips.hearstapps.com/hmg-prod/images/strawberry-cake-index-web-3973-jg-del049924-682dfe5ec3899.jpg" },
    { title: "Chocolate Choco Cake", price: "60$", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtK86RvrgKoppksm8JxbzV5r7lKYoy5uw7Pw&s" },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        align="center"
        sx={{
          mb: 7,
          color: "#b08d57",
          fontWeight: "bold",
          fontFamily: "'Dancing Script', cursive",
        }}
      >
        Our Cakes
      </Typography>

      <Grid container spacing={4}>
        {cakes.map((cake, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                borderRadius: "30px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                overflow: "hidden",
                transition: "0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-10px)",
                },
              }}
            >
              <Box sx={{ overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  height="220"
                  image={cake.image}
                  alt={cake.title}
                  onClick={() => openDetails(cake, cake.title)}
                  sx={{
                    cursor: "pointer",
                    transition: "transform 0.5s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.15)",
                    },
                  }}
                />
              </Box>

              <CardContent
                sx={{
                  textAlign: "center",
                  p: 3,
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#b08d57",
                      mb: 1,
                      fontFamily: "'Dancing Script', cursive",
                      fontWeight: "bold",
                      minHeight: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => openDetails(cake, cake.title)}
                  >
                    {cake.title}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{ color: "#8a6d4d", mb: 2 }}
                  >
                    {cake.price}
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  onClick={() => addToCart(cake)}
                  sx={{
                    backgroundColor: "#b08d57",
                    borderRadius: "20px",
                    mt: "auto",
                    "&:hover": {
                      backgroundColor: "#8a6d4d",
                    },
                  }}
                >
                  Add to Basket
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Cake;
