import { Routes, Route } from 'react-router-dom'
import { ProductCatalog } from "./components/productCatalog/productCatalog"
import { OrderForm } from "./components/orderForm/orderForm"
import  {AgentTransactions}  from "./components/agentTransactions/agentTransactions"
import  Login  from "./components/login/login"
import  Inventory  from "./components/inventory/inventory"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/order' element={<OrderForm />}></Route>
      <Route path='/admin/inventory' element={<Inventory />}></Route>
      <Route path='/admin/transaction' element={<AgentTransactions />}></Route>
      {/* <Route path='/register' element={<Register/>}></Route> */}
      <Route path='/products' element={<ProductCatalog />}></Route>
    </Routes>
  );
}



export default App;
