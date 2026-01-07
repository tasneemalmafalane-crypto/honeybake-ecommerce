import React from "react";
import { Container, Typography, Paper } from "@mui/material";

function Security() {
  return (
    <Container sx={{ py: 8 }}>
      <Paper sx={{ p: 4, borderRadius: "25px" }}>
        <Typography variant="h3" sx={{ mb: 3, color: "#b08d57" }}>
          Security & Privacy
        </Typography>

        <Typography sx={{ mb: 2 }}>
          🔐 We protect your personal information and payment data.
        </Typography>

        <Typography sx={{ mb: 2 }}>
          💳 All payments are processed securely and safely.
        </Typography>

        <Typography sx={{ mb: 2 }}>
          🛡️ Your account data is never shared with third parties.
        </Typography>

        <Typography>
          ✅ This website follows best security practices for web applications.
        </Typography>
      </Paper>
    </Container>
  );
}

export default Security;
