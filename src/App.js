import './App.css';
import React, {useEffect} from 'react';
import { Route, Routes , BrowserRouter} from "react-router-dom";
import Home from "./pages/Home/Home"
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';
import {useDispatch} from "react-redux"
import {auth} from './utils/firebase'
import { setuser } from './redux/action';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Checkout from "./pages/Checkout/Checkout";
import Payment from './pages/Payment/Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './pages/Orders/Orders';

const promise=loadStripe('pk_test_51LaeF4SIaiIn5uYSg1hkIZzfK92wMkURrDry5gxZakWOQLIKmNDPIZWJigRbyBsoX8SwWAYYXaweE4b9uwFD0IQZ00Wc9BieVJ');

function App() {
  let dispatch=useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(setuser(authUser))
      }else{
        dispatch(setuser(null));
      }
    })
  },[dispatch]);
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/product/:id'  element={<SingleProduct />} />
          <Route path='/login'  element={<Login />} />
          <Route path='/register'  element={<Register />} />
          <Route path='/checkout'  element={<Checkout />} />
          <Route path='/orders'  element={<Orders />} />
          <Route path='/payment'  element={<Elements stripe={promise} ><Payment /></Elements>} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
