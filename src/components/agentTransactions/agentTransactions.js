import { useEffect, useState } from "react";
import axios from "axios";
import * as React from "react";
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
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const AgentTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("2023-11");
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/transactions?month=${selectedMonth}`
        );
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, [selectedMonth]);

  return (
    <Card variant="outlined" style={{ border: "1px solid #B3E5FC" }}>
      <CardContent style={{ padding: "20px" }}>
        <div>
          <FormControl fullWidth>
            <InputLabel id="month-label">Select a month</InputLabel>
            <Select
              labelId="month-label"
              id="months"
              value={selectedMonth}
              onChange={handleMonthChange}
              label="Select a month"
            >
              <MenuItem value="2023-01">January</MenuItem>
              <MenuItem value="2023-02">February</MenuItem>
              <MenuItem value="2023-03">March</MenuItem>
              <MenuItem value="2023-04">April</MenuItem>
              <MenuItem value="2023-05">May</MenuItem>
              <MenuItem value="2023-06">June</MenuItem>
              <MenuItem value="2023-07">July</MenuItem>
              <MenuItem value="2023-08">August</MenuItem>
              <MenuItem value="2023-09">September</MenuItem>
              <MenuItem value="2023-10">October</MenuItem>
              <MenuItem value="2023-11">November</MenuItem>
              <MenuItem value="2023-12">December</MenuItem>
            </Select>
          </FormControl>
          <p>Selected Month: {selectedMonth}</p>
        </div>
        <Box p={4}>
          <Typography variant="h5" gutterBottom>
            Transactions for {selectedMonth}
          </Typography>
          <Table size="small">
            <TableHead>
              {/* Date Agent Customer Order No. Total Amount */}
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Agent</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Order Number</TableCell>
                <TableCell>Total Amount</TableCell>
                {/* Add more table headers if needed */}
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.length !== 0 ? (
                transactions.map((transaction) => (
                  <TableRow key={transaction.transactionId}>
                    <TableCell>{transaction.order.orderDate}</TableCell>
                    <TableCell>{transaction.order.agent}</TableCell>
                    <TableCell>{transaction.order.user.name}</TableCell>
                    <TableCell>{transaction.order.orderNumber}</TableCell>
                    <TableCell>{transaction.order.totalPrice}</TableCell>
                    {/* Add more table cells based on transaction properties */}
                  </TableRow>
                ))
              ) : (
                <h2>
                  Nothing to display: No Agent Transactions made on this date
                </h2>
              )}
            </TableBody>
          </Table>
        </Box>
      </CardContent>
    </Card>
  );
};
