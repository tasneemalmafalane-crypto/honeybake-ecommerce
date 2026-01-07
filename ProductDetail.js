import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";

function ProductDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return null;

  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        <img
          src={state.image}
          alt={state.name}
          style={{
            width: 400,
            borderRadius: 30,
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          }}
        />

        <Box>
          <Typography variant="h3" sx={{ color: "#b08d57" }}>
            {state.name}
          </Typography>

          <Typography variant="h5" sx={{ mt: 2 }}>
            {state.price}
          </Typography>

          <Typography sx={{ mt: 3 }}>
            {state.description}
          </Typography>

          <Button
            sx={{
              mt: 4,
              backgroundColor: "#b08d57",
              color: "white",
            }}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default ProductDetails;
