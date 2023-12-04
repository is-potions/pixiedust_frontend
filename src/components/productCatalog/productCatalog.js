import { useEffect, useState } from "react";
import axios from "axios";
export const ProductCatalog = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="productCatalog">
      <h2>Product Catalog</h2>
      <h4>FOLDERS</h4>
      <ProductFolders products={products} />
      <h4>PENS</h4>
      <ProductPens products={products}/>
      <h4>PLANNERS</h4>
      <ProductPlanners products={products} />
    </div>
  );
};

function ProductFolders({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Features</th>
          <th>Dimensiosn</th>
          <th>Personalization</th>
          <th>Price</th>
          {/* Add more table headers as needed */}
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          if (product.itemType === "FOLDERS") {
            return (
              <tr key={product.itemId}>
                <td>{product.itemName},</td>
                <td>{product.features},</td>
                <td>{product.dimensions},</td>
                <td>{product.personalization},</td>
                <td>{product.price}</td>
                {/* Add more table data columns based on product properties */}
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
}

function ProductPens({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Features</th>
          <th>Slots</th>
          <th>Personalization</th>
          <th>Price</th>
          {/* Add more table headers as needed */}
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          if (product.itemType === "PEN") {
            return (
              <tr key={product.itemId}>
                <td>{product.itemName},</td>
                <td>{product.features},</td>
                <td>{product.slots},</td>
                <td>{product.personalization},</td>
                <td>{product.price}</td>
                {/* Add more table data columns based on product properties */}
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
}


function ProductPlanners({ products }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Features</th>
            <th>Dimensiosn</th>
            <th>Personalization</th>
            <th>Price</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            if (product.itemType === "PLANNERS") {
              return (
                <tr key={product.itemId}>
                  <td>{product.itemName},</td>
                  <td>{product.features},</td>
                  <td>{product.dimensions},</td>
                  <td>{product.personalization},</td>
                  <td>{product.price}</td>
                  {/* Add more table data columns based on product properties */}
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    );
  }