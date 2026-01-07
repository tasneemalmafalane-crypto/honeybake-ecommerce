import React from "react";
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

function Cookies() {
  // --- ADD TO CART LOGIC ---
  const addToCart = (cookie) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const numericPrice = parseFloat(cookie.price.replace(/[^0-9.]/g, ""));
    
    const existingIndex = cart.findIndex(item => item.name === cookie.name);
    
    if (existingIndex > -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        id: Date.now() + Math.random(),
        name: cookie.name,
        price: numericPrice,
        image: cookie.image,
        quantity: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    // Trigger storage event to update Header badge
    window.dispatchEvent(new Event("storage"));
    alert(`${cookie.name} added to basket! 🍪`);
  };

  const cookies = [
    { name: "Chocolate Chip Cookie", price: "2$", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1iwTQvCyuMtcA2aT2_iWeN8sVxauz-BamyQ&s" },
    { name: "Oatmeal Raisin Cookie", price: "2.5$", image: "https://hips.hearstapps.com/hmg-prod/images/oatmeal-raisin-cookies-recipe-2-67c76826c6be3.jpeg?crop=0.502xw:1.00xh;0.215xw,0&resize=1200:*" },
    { name: "Peanut Butter Cookie", price: "3$", image: "https://www.spicebangla.com/wp-content/uploads/2024/10/2-Ingredient-Peanut-Butter-Cookies.webp" },
    { name: "Double Chocolate Cookie", price: "3$", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbk_CBgo7puD33i2e8YSzXiSBemsxdnlRAA&s" },
    { name: "White Chocolate Macadamia", price: "3.5$", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymE91oefkSQbHl4F7_TkmjiwaKcyi0NV2Ag&s" },
    { name: "Sugar Cookie", price: "2.5$", image: "https://kathrynskitchenblog.com/wp-content/uploads/2022/01/Cut-Out-Sugar-Cookies-15-scaled.jpg" },
    { name: "Red Velvet Cookie", price: "3$", image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/039022eec7f1f1d0f74af99ffdd3cdac/Derivates/e1428edae5621535da21c3bac1f7687211e0cdef.jpg" },
    { name: "Salted Caramel Cookie", price: "3$", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_5fNYsI711sT8tDn_Kg6mbL_sAAviRcjkw&s" },
    { name: "Caramel Pretzel Cookie", price: "3.5$", image: "https://mikebakesnyc.com/wp-content/uploads/2023/04/Photo-Mar-27-2023-5-42-10-PM-scaled.jpg" },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" sx={{ mb: 7, color: "#b08d57", fontWeight: 'bold', fontFamily: "'Dancing Script', cursive" }}>
        Our Cookies
      </Typography>

      <Grid container spacing={4}>
        {cookies.map((cookie, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card sx={{ 
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              borderRadius: "30px", 
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              overflow: "hidden",
              transition: "0.3s ease-in-out",
              "&:hover": { transform: "translateY(-10px)" }
            }}>
              <Box sx={{ overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  height="220"
                  image={cookie.image}
                  alt={cookie.name}
                  sx={{ 
                    transition: "transform 0.5s ease-in-out",
                    "&:hover": { transform: "scale(1.15)" }
                  }}
                />
              </Box>
              <CardContent sx={{ 
                textAlign: 'center', 
                p: 3, 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between' 
              }}>
                <Box>
                  <Typography variant="h5" sx={{ 
                    color: "#b08d57", 
                    mb: 1, 
                    fontFamily: "'Dancing Script', cursive", 
                    fontWeight: 'bold',
                    minHeight: '60px', // Ensures title alignment
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {cookie.name}
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#8a6d4d", mb: 2 }}>
                    {cookie.price}
                  </Typography>
                </Box>
                <Button 
                  variant="contained" 
                  onClick={() => addToCart(cookie)}
                  sx={{ 
                    backgroundColor: "#b08d57", 
                    borderRadius: "20px", 
                    mt: 'auto', // Pushes button to the bottom
                    "&:hover": { backgroundColor: "#8a6d4d" } 
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

export default Cookies;