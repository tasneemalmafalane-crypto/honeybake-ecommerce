import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

function Payment() {
  const navigate = useNavigate();

  const handlePay = (e) => {
    e.preventDefault();

    const form = e.target;
    const cardName = form.cardName.value.trim();
    const cardNumber = form.cardNumber.value.trim();
    const expiry = form.expiry.value.trim();
    const cvv = form.cvv.value.trim();

    // ✅ VALIDATION
    if (!cardName || !cardNumber || !expiry || !cvv) {
      alert("⚠️ Please fill in all card details before proceeding.");
      return;
    }

    alert("Payment successful ✅");
    navigate("/admin-orders");
  };

  return (
    <Container sx={{ py: 8 }}>
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
        Payment
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, borderRadius: "25px" }}>
            <Typography variant="h5" gutterBottom>
              Card Details
            </Typography>

            <Box component="form" onSubmit={handlePay}>
              <TextField
                fullWidth
                label="Card Holder Name"
                margin="normal"
                name="cardName"
                required
              />

              <TextField
                fullWidth
                label="Card Number"
                margin="normal"
                name="cardNumber"
                required
              />

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="MM/YY"
                    name="expiry"
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="CVV"
                    type="password"
                    name="cvv"
                    required
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                sx={{
                  mt: 4,
                  py: 1.5,
                  backgroundColor: "#b08d57",
                  color: "white",
                  borderRadius: "30px",
                }}
              >
                Pay Now
              </Button>
            </Box>

            {/* SKIP */}
            <Box textAlign="center" sx={{ mt: 2 }}>
              <Button
                variant="text"
                sx={{ color: "#8a6d4d", textTransform: "none" }}
                onClick={() => navigate("/admin-orders")}
              >
                Skip
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Payment;
