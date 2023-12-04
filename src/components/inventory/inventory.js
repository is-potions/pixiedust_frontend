import { useEffect, useState } from "react";
import axios from "axios";
import * as React from "react";
import {
  // Import necessary Material-UI components
  // ... (other imports remain the same)
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

export default function Inventory() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/inventory/stocks"
        );
        console.log(response.data.stocks);
        setProducts(response.data.stocks);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <Card
      variant="outlined"
      style={{
        border: "1px solid #B3E5FC",
      }}
    >
      <CardContent style={{ padding: "20px" }}>
        <div className="home">
          <Typography variant="h5" gutterBottom>
            Product Catalog
          </Typography>
          <Box mb={4}>
            <Typography variant="h6" gutterBottom>
              FOLDERS
            </Typography>
            <React.Fragment>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell>Features</TableCell>
                    <TableCell>Dimensions</TableCell>
                    <TableCell>Personalization</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Red</TableCell>
                    <TableCell>Orange</TableCell>
                    <TableCell>Yellow</TableCell>
                    <TableCell>Green</TableCell>
                    <TableCell>Blue</TableCell>
                    <TableCell>Purple</TableCell>
                    <TableCell>Pink</TableCell>
                    <TableCell>Black</TableCell>
                    {/* Add more table headers as needed */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => {
                    if (product.product.itemType === "FOLDERS") {
                      return (
                        <TableRow key={product.product.itemId}>
                          <TableCell>{product.product.itemName}</TableCell>
                          <TableCell>
                            {product.product.features.join(", ")}
                          </TableCell>
                          <TableCell>
                            {product.product.dimensions.join(", ")}
                          </TableCell>
                          <TableCell>
                            {product.product.personalization}
                          </TableCell>
                          <TableCell>{product.product.price}</TableCell>
                          <TableCell>{product.red}</TableCell>
                          <TableCell>{product.orange}</TableCell>
                          <TableCell>{product.yellow}</TableCell>
                          <TableCell>{product.green}</TableCell>
                          <TableCell>{product.blue}</TableCell>
                          <TableCell>{product.purple}</TableCell>
                          <TableCell>{product.pink}</TableCell>
                          <TableCell>{product.black}</TableCell>
                          {/* Add more table data columns based on product properties */}
                        </TableRow>
                      );
                    }
                  })}
                </TableBody>
              </Table>
            </React.Fragment>
          </Box>
          <Box mb={4}>
            <Typography variant="h6" gutterBottom>
              PENS
            </Typography>
            <React.Fragment>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell>Features</TableCell>
                    <TableCell>Slots</TableCell>
                    <TableCell>Personalization</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Red</TableCell>
                    <TableCell>Orange</TableCell>
                    <TableCell>Yellow</TableCell>
                    <TableCell>Green</TableCell>
                    <TableCell>Blue</TableCell>
                    <TableCell>Purple</TableCell>
                    <TableCell>Pink</TableCell>
                    <TableCell>Black</TableCell>
                    {/* Add more table headers as needed */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => {
                    if (product.product.itemType === "PEN") {
                      return (
                        <TableRow key={product.product.itemId}>
                          <TableCell>{product.product.itemName}</TableCell>
                          <TableCell>
                            {product.product.features.join(", ")}
                          </TableCell>
                          <TableCell>{product.product.slots}</TableCell>
                          <TableCell>
                            {product.product.personalization}
                          </TableCell>
                          <TableCell>{product.product.price}</TableCell>
                          <TableCell>{product.red}</TableCell>
                          <TableCell>{product.orange}</TableCell>
                          <TableCell>{product.yellow}</TableCell>
                          <TableCell>{product.green}</TableCell>
                          <TableCell>{product.blue}</TableCell>
                          <TableCell>{product.purple}</TableCell>
                          <TableCell>{product.pink}</TableCell>
                          <TableCell>{product.black}</TableCell>
                          {/* Add more table data columns based on product properties */}
                        </TableRow>
                      );
                    }
                  })}
                </TableBody>
              </Table>
            </React.Fragment>
          </Box>
          <Box mb={4}>
            <Typography variant="h6" gutterBottom>
              PLANNERS
            </Typography>
            <React.Fragment>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell>Features</TableCell>
                    <TableCell>Dimensions</TableCell>
                    <TableCell>Personalization</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Red</TableCell>
                    <TableCell>Orange</TableCell>
                    <TableCell>Yellow</TableCell>
                    <TableCell>Green</TableCell>
                    <TableCell>Blue</TableCell>
                    <TableCell>Purple</TableCell>
                    <TableCell>Pink</TableCell>
                    <TableCell>Black</TableCell>
                    {/* Add more table headers as needed */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => {
                    if (product.product.itemType === "PLANNERS") {
                      return (
                        <TableRow key={product.product.itemId}>
                          <TableCell>{product.product.itemName},</TableCell>
                          <TableCell>
                            {product.product.features.join(", ")},
                          </TableCell>
                          <TableCell>
                            {product.product.dimensions.join(", ")}
                          </TableCell>
                          <TableCell>
                            {product.product.personalization},
                          </TableCell>
                          <TableCell>{product.product.price}</TableCell>
                          <TableCell>{product.red}</TableCell>
                          <TableCell>{product.orange}</TableCell>
                          <TableCell>{product.yellow}</TableCell>
                          <TableCell>{product.green}</TableCell>
                          <TableCell>{product.blue}</TableCell>
                          <TableCell>{product.purple}</TableCell>
                          <TableCell>{product.pink}</TableCell>
                          <TableCell>{product.black}</TableCell>
                          {/* Add more table data columns based on product properties */}
                        </TableRow>
                      );
                    }
                  })}
                </TableBody>
              </Table>
            </React.Fragment>
          </Box>
        </div>
      </CardContent>
    </Card>
  );
}
