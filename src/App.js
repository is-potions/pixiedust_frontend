import { Routes, Route } from 'react-router-dom';
import { Home } from "./components/home/Home"
import { Cart } from "./components/cart/cart"
import { ProductPage } from "./components/productpage/productpage"
import { Login } from "./components/login/login"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/product/:id' element={<ProductPage />}></Route>
      <Route path='/login' element={<Login />}></Route>
    </Routes>
  );
}



export default App;
