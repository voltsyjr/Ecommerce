import './App.css';
import React, {useEffect,lazy, Suspense} from 'react';
import { Route, Routes , BrowserRouter} from "react-router-dom";
// import Home from "./pages/Home/Home"
// import Login from './pages/Login/Login'
// import Register from './pages/Register/Register';
import {useDispatch} from "react-redux"
import {auth} from './utils/firebase'
import { setuser } from './redux/action';
import Loading from './Components/Loading/Loading';
// import SingleProduct from './pages/SingleProduct/SingleProduct';
// import Checkout from "./pages/Checkout/Checkout";
// import Payment from './pages/Payment/Payment';
// import Orders from './pages/Orders/Orders';

const Home=lazy(()=>import("./pages/Home/Home"))
const Login=lazy(()=>import("./pages/Login/Login"))
const Register=lazy(()=>import("./pages/Register/Register"))
const SingleProduct=lazy(()=>import("./pages/SingleProduct/SingleProduct"))
const Checkout=lazy(()=>import("./pages/Checkout/Checkout"))
const Payment=lazy(()=>import("./pages/Payment/Payment"))
const Orders=lazy(()=>import("./pages/Orders/Orders"))
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
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path='/'  element={<Home />} />
          <Route path='/product/:id'  element={<SingleProduct />} />
          <Route path='/login'  element={<Login />} />
          <Route path='/register'  element={<Register />} />
          <Route path='/checkout'  element={<Checkout />} />
          <Route path='/orders'  element={<Orders />} />
          <Route path='/payment'  element={<Payment />} />
          
        </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
