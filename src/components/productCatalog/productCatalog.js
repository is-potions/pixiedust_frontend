import { useEffect, useState } from "react";
import axios from "axios";
import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Checkbox } from "@mui/material";
import Button from "@mui/material/Button";

export const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  // this will only run once!
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products");
        console.log(response.data); // Log the data fetched from the server
        // Further actions with the fetched data can be done here
        setProducts(response.data);
      } catch (error) {
        console.error("Error:", error); // Log any errors that occur during the request
      }
    };

    fetchData(); // Call the function to initiate the Axios GET request
  }, []);
  const handleCheckboxToggle = (itemId) => {
    const currentIndex = checkedItems.indexOf(itemId);
    const newChecked = [...checkedItems];

    if (currentIndex === -1) {
      newChecked.push(itemId);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedItems(newChecked);
  };

  return (
    <Card
      variant="outlined"
      style={{
        border: "1px solid #B3E5FC",
      }}
    >
      <CardContent style={{ padding: "20px" }}>
        <Box p={4}>
          {" "}
          {/* Adding global padding */}
          <Box mb={4}>
            {/* Top header for user info */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              
              <Box>
              <Avatar
                alt="User Avatar"
                src="https://sm.ign.com/ign_in/screenshot/default/01-03_4e6v.jpg"
              />
                <Typography variant="h4" gutterBottom>
                  Welcome! Lee, Deokhyun
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  aaa@gmail.com
                </Typography>
                
              </Box>
              
            
                    <Box>
          <Button variant="contained" color="primary" size="large">
            Submit Order
          </Button>
        </Box>
            </Box>
          </Box>
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
                      <TableCell>Check for order</TableCell>
                      <TableCell>Item</TableCell>
                      <TableCell>Features</TableCell>
                      <TableCell>Dimensions</TableCell>
                      <TableCell>Personalization</TableCell>
                      <TableCell>Price</TableCell>
                      {/* Add more table headers as needed */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products.map((product) => {
                      if (product.itemType === "FOLDERS") {
                        return (
                          <TableRow key={product.itemId}>
                            <Checkbox
                              checked={checkedItems.includes(product.itemId)}
                              onChange={() =>
                                handleCheckboxToggle(product.itemId)
                              }
                            />
                            <TableCell>{product.itemName}</TableCell>
                            <TableCell>{product.features}</TableCell>
                            <TableCell>
                              {product.dimensions.join(", ")}
                            </TableCell>
                            <TableCell>{product.personalization}</TableCell>
                            <TableCell>{product.price}</TableCell>
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
                      <TableCell>Check for order</TableCell>
                      <TableCell>Item</TableCell>
                      <TableCell>Features</TableCell>
                      <TableCell>Slots</TableCell>
                      <TableCell>Personalization</TableCell>
                      <TableCell>Price</TableCell>
                      {/* Add more table headers as needed */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products.map((product) => {
                      if (product.itemType === "PEN") {
                        return (
                          <TableRow key={product.itemId}>
                            <Checkbox
                              checked={checkedItems.includes(product.itemId)}
                              onChange={() =>
                                handleCheckboxToggle(product.itemId)
                              }
                            />
                            <TableCell>{product.itemName}</TableCell>
                            <TableCell>{product.features}</TableCell>
                            <TableCell>{product.slots}</TableCell>
                            <TableCell>{product.personalization}</TableCell>
                            <TableCell>{product.price}</TableCell>
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
                      <TableCell>Check for order</TableCell>
                      <TableCell>Item</TableCell>
                      <TableCell>Features</TableCell>
                      <TableCell>Dimensions</TableCell>
                      <TableCell>Personalization</TableCell>
                      <TableCell>Price</TableCell>
                      {/* Add more table headers as needed */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products.map((product) => {
                      if (product.itemType === "PLANNERS") {
                        return (
                          <TableRow key={product.itemId}>
                            <Checkbox
                              checked={checkedItems.includes(product.itemId)}
                              onChange={() =>
                                handleCheckboxToggle(product.itemId)
                              }
                            />
                            <TableCell>{product.itemName},</TableCell>
                            <TableCell>{product.features},</TableCell>
                            <TableCell>
                              {product.dimensions.join(", ")}
                            </TableCell>
                            <TableCell>{product.personalization},</TableCell>
                            <TableCell>{product.price}</TableCell>
                            {/* Add more table data columns based on product properties */}
                          </TableRow>
                        );
                      }
                    })}
                  </TableBody>
                </Table>
                <Link
                  color="primary"
                  href="#"
                  onClick={preventDefault}
                  sx={{ mt: 3 }}
                >
                  See more orders
                </Link>
              </React.Fragment>
            </Box>
          </div>
        </Box>
  
      </CardContent>
    </Card>
  );
};

function preventDefault(event) {
  event.preventDefault();
}
