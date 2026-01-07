import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
    setTimeout(() => navigate("/"), 1500);
  }, [navigate]);

  return (
    <Container sx={{ py: 10, textAlign: "center" }}>
      <Typography variant="h4" color="#b08d57">
        You have been logged out successfully 🌸
      </Typography>
    </Container>
  );
}

export default Logout;
