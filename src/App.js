import { Routes, Route } from 'react-router-dom'
import { ProductCatalog } from "./components/productCatalog/productCatalog"
import { OrderForm } from "./components/orderForm/orderForm"
import { AgentTransactions } from "./components/agentTransactions/agentTransactions"
import { Login, Register } from "./components/login/login"
import { Inventory } from "./components/inventory/inventory"

function App() {
  return (
    <Routes>
      <Route path='/' element={<ProductCatalog />}></Route>
      <Route path='/order' element={<OrderForm />}></Route>
      <Route path='/inventory' element={<Inventory />}></Route>
      <Route path='/agent/transaction' element={<AgentTransactions />}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login />}></Route>
    </Routes>
  );
}



export default App;
