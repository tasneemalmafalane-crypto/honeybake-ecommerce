import React from "react";
import { Box, Typography } from "@mui/material";

function Done() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#b08d57",
          fontFamily: "'Dancing Script', cursive",
          fontWeight: "bold",
        }}
      >
        Purchase completed successfully🌸
      </Typography>
      
    </Box>
  );
}

export default Done;
