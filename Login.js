import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Avatar
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import api from "../api/axios";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // تحقق أساسي
    if (!email || !password || (isSignUp && !name)) {
      setError("Please fill in all fields");
      return;
    }

    if (isSignUp && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // ================= LOGIN =================
      if (!isSignUp) {
        const res = await api.post("/auth/login", {
          email,
          password
        });

        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.href = "/";
      }

      // ================= REGISTER =================
      if (isSignUp) {
        const res = await api.post("/auth/register", {
          name,
          email,
          password
        });

        // تسجيل دخول تلقائي بعد التسجيل
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.href = "/";
      }

    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url(https://png.pngtree.com/thumb_back/fh260/background/20221111/pngtree-hand-drawn-confectionery-bakery-homemade-biscuits-image_1461993.jpg)",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Container maxWidth="xs">
        <Paper sx={{ p: 4, borderRadius: 4 }}>
          <Avatar sx={{ m: "0 auto 2", bgcolor: "#b08d57" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography variant="h5" align="center" sx={{ mb: 2 }}>
            {isSignUp ? "Create Account" : "Login"}
          </Typography>

          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <TextField
                fullWidth
                label="Name"
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}

            <TextField
              fullWidth
              label="Email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {isSignUp && (
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                margin="normal"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            )}

            {error && (
              <Typography color="error" align="center" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, bgcolor: "#b08d57" }}
            >
              {isSignUp ? "Sign Up" : "Login"}
            </Button>

            <Typography
              align="center"
              sx={{ mt: 2, cursor: "pointer" }}
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp
                ? "Already have an account? Login"
                : "Don't have an account? Sign Up"}
            </Typography>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;
