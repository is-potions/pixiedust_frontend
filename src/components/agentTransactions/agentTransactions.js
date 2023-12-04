import { useEffect, useState } from "react";
import axios from "axios";

export const AgentTransactions = () => {
    const [transactions, setTransactions] = useState([]);

      // this will only run once!
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/transactions?month=2023-12");
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
        <div className="agentTransactions">
            
        </div>
    );
}
 