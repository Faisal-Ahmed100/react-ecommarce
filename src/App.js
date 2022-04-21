import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/account/Login";
import Signin from "./components/account/Signin";
import ProtectedRoute from "./components/ProtectRoute/ProtectedRoute";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import View from "./pages/View";
import { fetchData,fetchDatas } from "./redux/cartActions";

function App() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch=useDispatch();

  useEffect(()=>{
dispatch(fetchDatas())
  },[dispatch]);

  useEffect(()=>{
    dispatch(fetchData(cartItems))

    
  },[dispatch,cartItems])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/cart/:id" element={<Cart />}/>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
