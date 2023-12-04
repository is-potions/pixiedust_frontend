import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";

export const OrderForm = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8080/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Card variant="outlined" style={{ border: "1px solid #B3E5FC" }}>
      {orders.map((order) => (
        <CardContent key={order.orderNumber} style={{ display: "flex" }}>
          <Box style={{ flex: 1 }}>
            <Typography variant="h5" gutterBottom>
              Order Details
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Customer Name: {order.user.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Delivery Address: {order.address}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Delivery Schedule: {order.deliverySchedule}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Recipient: {order.recipientName}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Gift: {order.gift ? "Yes" : "No"}
            </Typography>
          </Box>
          <Box style={{ flex: 1 }}>
            <Typography variant="h5" gutterBottom>
              Order Summary
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Order No: {order.orderNumber}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Date: {order.orderDate}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Agent: {order.agent}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Amount to Pay: {order.totalPrice}
            </Typography>
          </Box>
          <Box style={{ flex: 2 }}>
            <Typography variant="h5" gutterBottom>
              Order Items
            </Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Item Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>SRP</TableCell>
                  <TableCell>Discount</TableCell>
                  <TableCell>Total Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.products.map((product) => (
                  <TableRow key={product.itemId}>
                    <TableCell>{product.itemName}</TableCell>
                    <TableCell>{product.features.join(", ")}</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.discountPercent}</TableCell>
                    <TableCell>
                      {product.price * (1 - product.discountPercent)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </CardContent>
      ))}
    </Card>
  );
};
