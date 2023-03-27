import React from 'react';
import './Checkout.css';
import Header from '../../Components/Header/Header'
import { useSelector } from 'react-redux';
import CheckoutProduct from '../../Components/CheckoutProduct/CheckoutProduct';
import SubTotal from '../../Components/SubTotal/SubTotal';
 const Checkout = ()=>{
     const {basket, user}=useSelector(state=>state.data);
     return (
         <>
            <Header />
            <div className='checkout'>
                <div className='checkout-left'>
                    <img className='checkout-ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='' />

                    <div className=''>
                        <h3>Hello, {user?.email}</h3>
                        <h2 className='checkout-title'>
                            {basket.length===0 ?"Your Shopping Basket is Empty":"Your Shopping Basket"}
                        </h2>
                    </div>
                    {basket && basket.map((item)=>(
                        <CheckoutProduct 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                    ))}
                </div>
                <div className='checkout-right'>
                    <SubTotal />
                </div>
            </div>
         </>
         
     )
 }

 export default Checkout;