import './App.css';
import Header from './components/Header/Head/Header';
import LoginDialog from './components/Login/LoginDialog';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import ContextProvider from './Context/ContextProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailPage from './components/DetailPage/DetailPage';
import { getProducts } from '../src/Service/api.js';
import { useState, useEffect } from "react";
import Cart from './components/Cart/Cart';

function App() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    let response = await getProducts();
    setproducts(response.data);
  }
  return (
    <ContextProvider >
      <Router>
        <Header products = {products} />
        <Routes>
          <Route path="/" element={<Home products = {products} /> }/>
          <Route path='/product/:id' element={<DetailPage/>} />
          <Route path='/cart/:id' element={<Cart/>} />
        </Routes>
      </Router>
      
    </ContextProvider>
  );
}

export default App;
