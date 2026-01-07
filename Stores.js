import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Stores() {
  const branchData = [
    {
      city: "Istanbul",
      address: "Nişantaşı, Abdi İpekçi Cd. No:45, 34367 Şişli/İstanbul",
      time: "09:00 AM – 11:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.973715830919!2d28.992205376550674!3d41.04778101698246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7080a9d8011%3A0x6a12b9d0346c483c!2zTmnFn2FudGHFn8SxLCDFnmnFn2xpL8Swc3RhbmJ1bA!5e0!3m2!1sen!2str!4v1703350000000!5m2!1sen!2str"
    },
    {
      city: "Ankara",
      address: "Çankaya, Tunalı Hilmi Cd. No:102, 06680 Ankara",
      time: "08:30 AM – 10:30 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.421516000000!2d32.8600000!3d39.9000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f0000000001%3A0x0000000000000000!2sTunal%C4%B1%20Hilmi%20Cd.%2C%20Ankara!5e0!3m2!1sen!2str!4v1703350000000!5m2!1sen!2str"
    },
    {
      city: "Izmir",
      address: "Alsancak, Kordon Boyu No:12, 35220 Konak/İzmir",
      time: "10:00 AM – 12:00 AM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.345678000000!2d27.1300000!3d38.4300000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd00000000001%3A0x0000000000000000!2sAlsancak%2C%20Izmir!5e0!3m2!1sen!2str!4v1703350000000!5m2!1sen!2str"
    },
    {
      city: "Hatay",
      address: "Antakya, Atatürk Cd. No:55, 31040 Hatay",
      time: "09:00 AM – 09:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.123456000000!2d36.1600000!3d36.2000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1525c00000000001%3A0x0000000000000000!2sAntakya%2C%20Hatay!5e0!3m2!1sen!2str!4v1703350000000!5m2!1sen!2str"
    }
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: "60px 5%",
        backgroundColor: "#FCF9EA",
        fontFamily: "'Dancing Script', cursive",
      }}
    >
      <Typography variant="h2" sx={{ color: "#b08d57", textAlign: "center", mb: 2, fontFamily: "inherit" }}>
        Our Sweet Locations
      </Typography>
      <Typography variant="h5" sx={{ color: "#6b5e4a", textAlign: "center", mb: 6, fontFamily: "inherit" }}>
        Visit Honey Bake and enjoy freshly baked desserts every day 🍰
      </Typography>

      <Grid container spacing={4}>
        {branchData.map((branch, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ borderRadius: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", overflow: "hidden" }}>
              <CardContent sx={{ backgroundColor: "rgba(252,249,234,0.5)" }}>
                <Typography variant="h4" sx={{ color: "#b08d57", mb: 2, fontFamily: "inherit", fontWeight: "bold" }}>
                  📍 {branch.city} Branch
                </Typography>
                
                <Box sx={{ display: "flex", alignItems: "center", mb: 1, gap: 1 }}>
                  <LocationOnIcon sx={{ color: "#b08d57" }} />
                  <Typography variant="body1" sx={{ color: "#444" }}>{branch.address}</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 3, gap: 1 }}>
                  <AccessTimeIcon sx={{ color: "#b08d57" }} />
                  <Typography variant="body1" sx={{ color: "#444" }}>{branch.time}</Typography>
                </Box>

                {/* Map Embed */}
                <iframe
                  title={`Map of ${branch.city}`}
                  src={branch.mapUrl}
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "15px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Stores;