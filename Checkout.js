import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(Array.isArray(stored) ? stored : []);
  }, []);

  const updateCart = (updated) => {
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const increaseQty = (id) => {
    updateCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    updateCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    updateCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          mb: 5,
          fontFamily: "'Dancing Script', cursive",
          color: "#b08d57",
          fontWeight: "bold",
        }}
      >
        Checkout
      </Typography>

      {cart.length === 0 ? (
        <Typography align="center">Your cart is empty 🛒</Typography>
      ) : (
        <>
          {cart.map((item) => (
            <Card
              key={item.id}
              sx={{
                display: "flex",
                mb: 3,
                borderRadius: "20px",
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                sx={{ width: 120 }}
              />

              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography>
                    ${item.price} × {item.quantity}
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center">
                  <IconButton onClick={() => decreaseQty(item.id)}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography>{item.quantity}</Typography>
                  <IconButton onClick={() => increaseQty(item.id)}>
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => removeItem(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}

          <Divider sx={{ my: 4 }} />

          <Box textAlign="center">
            <Typography variant="h4" sx={{ mb: 3 }}>
              Total: ${totalPrice.toFixed(2)}
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#b08d57",
                borderRadius: "30px",
                px: 6,
              }}
              onClick={() => navigate("/payment")}
            >
              Go to Payment
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}

export default Checkout;
