import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Paper,
  Box,
  Divider,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import api from "../api/axios";

function AdminOrders() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    paymentStatus: "Paid",
    orderStatus: "Processing",
  });

  // LOAD CART
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // TOTAL
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // SEND ORDER
  const handleSendOrder = async () => {
    try {
      const orderData = {
        customerName: customer.name,
        phone: customer.phone,
        address: customer.address,
        paymentStatus: customer.paymentStatus,
        orderStatus: customer.orderStatus,
        total: total,
        items: cart.map((item) => ({
          productName: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
      };

      await api.post("/orders", orderData);

      localStorage.removeItem("cart");
      navigate("/done");
    } catch (error) {
      console.error(error);
      alert("Failed to send order");
    }
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
        Admin Order
      </Typography>

      <Paper sx={{ p: 4, borderRadius: "25px" }}>
        {/* CUSTOMER INFO */}
        <Typography variant="h5" sx={{ mb: 3 }}>
          Customer Information
        </Typography>

        <TextField
          fullWidth
          label="Customer Name"
          margin="normal"
          value={customer.name}
          onChange={(e) =>
            setCustomer({ ...customer, name: e.target.value })
          }
        />

        <TextField
          fullWidth
          label="Phone Number"
          margin="normal"
          value={customer.phone}
          onChange={(e) =>
            setCustomer({ ...customer, phone: e.target.value })
          }
        />

        <TextField
          fullWidth
          label="Address"
          margin="normal"
          value={customer.address}
          onChange={(e) =>
            setCustomer({ ...customer, address: e.target.value })
          }
        />

        <TextField
          select
          fullWidth
          label="Payment Status"
          margin="normal"
          value={customer.paymentStatus}
          onChange={(e) =>
            setCustomer({ ...customer, paymentStatus: e.target.value })
          }
        >
          <MenuItem value="Paid">Paid</MenuItem>
          <MenuItem value="Unpaid">Unpaid</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
        </TextField>

        <TextField
          select
          fullWidth
          label="Order Status"
          margin="normal"
          value={customer.orderStatus}
          onChange={(e) =>
            setCustomer({ ...customer, orderStatus: e.target.value })
          }
        >
          <MenuItem value="Processing">Processing</MenuItem>
          <MenuItem value="Preparing">Preparing</MenuItem>
          <MenuItem value="Delivered">Delivered</MenuItem>
          <MenuItem value="Canceled">Canceled</MenuItem>
        </TextField>

        <Divider sx={{ my: 4 }} />

        {/* PRODUCTS */}
        <Typography variant="h5" sx={{ mb: 2 }}>
          Products Description
        </Typography>

        {cart.length === 0 ? (
          <Typography>No products</Typography>
        ) : (
          cart.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography>
                {item.name} × {item.quantity}
              </Typography>
              <Typography>
                ${(item.price * item.quantity).toFixed(2)}
              </Typography>
            </Box>
          ))
        )}

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" align="right" sx={{ mb: 4 }}>
          Total: ${total.toFixed(2)}
        </Typography>

        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#b08d57",
            py: 1.5,
            fontSize: "18px",
            "&:hover": {
              backgroundColor: "#9c7a45",
            },
          }}
          onClick={handleSendOrder}
        >
          Send Order
        </Button>
      </Paper>
    </Container>
  );
}

export default AdminOrders;
