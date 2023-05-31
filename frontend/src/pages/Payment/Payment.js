import React, {useState,useEffect} from 'react'
import Header from '../../Components/Header/Header'
import './Payment.css'
import { useDispatch, useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import CheckoutProduct from '../../Components/CheckoutProduct/CheckoutProduct';
import {getBasketTotal} from '../../utils/BasketTotal'
import {useNavigate, Link} from 'react-router-dom'
import {db} from '../../utils/firebase'
import logo from '../../Amazon_Logo.png'
import axios from '../../utils/axios';
import { emptyBasket } from '../../redux/action';
const Payment = () => {
    const {basket, user}=useSelector(state=>state.data);
    let navigate=useNavigate();

    let dispatch=useDispatch();
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(false);








    function loadScript(src) {
        return new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = src;
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
          document.body.appendChild(script);
        });
      }
    
      async function displayRazorpay() {
        const res = await loadScript(
          'https://checkout.razorpay.com/v1/checkout.js'
        );
    
        if (!res) {
          alert('Razorpay SDK failed to load. Are you online?');
          return;
        }
    
        const result = await axios.post('/payment/orders',{amount:getBasketTotal(basket)*100,currency:"INR"});
    
        if (!result) {
          alert('Server error. Are you online?');
          return;
        }
    
        // console.log("yhn aa rha h")
        setProcessing(false);
        setDisabled(false);
        const { amount, id: order_id, currency } = result.data;
    
        const options = {
          key: 'rzp_test_18CXMPFKIV8fNM', // Enter the Key ID generated from the Dashboard
          amount: amount.toString(),
          currency: currency,
          name: 'Ecommerce Corp.',
          description: 'Test Transaction',
          image: { logo },
          order_id: order_id,
          handler: async function (response) {
            const data = {
              orderCreationId: order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            };
    
            const result = await axios.post('/payment/success', data);
            console.log(result.data)
            console.log(result)
            setProcessing(false);
            if(result.statusText=='OK' || result.statusText==''){
                        console.log("successfull")
                        // alert(result.data.msg);
                        db.collection("users").doc(user && user.uid).collection("orders").doc(order_id).set({
                            basket: basket,
                            amount: amount,
                            created: result.data.created,
                        })
                        setSucceeded(true);
                        setError(false);
                        setProcessing(false);
                        dispatch(emptyBasket());
                        navigate('/orders');
            }else{
                console.log("not succesfull")
                            alert(result.data.msg);
                            setSucceeded(false);
                            setError(true);
            }
          },
          prefill: {
            name: user.name,
            email: user.email,
            contact: user.phoneNumber,
          },
          notes: {
            address: 'Ecommerce Corporate Office',
          },
          theme: {
            color: '#61dafb',
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }
    const handleSubmit= async (e)=>{
        // console.log("clicked buy")
        e.preventDefault();
        setProcessing(true);
        setDisabled(true);
        // console.log(user.email);
        // console.log(user.phoneNumber);
        displayRazorpay();

    }


  return (
    <>
        <Header />
        <div className='payment'>
        <div className='payment-container'>
                <h1>Checkout {<Link to='/checkout'>{basket.length} items</Link>}</h1>
                <div className='payment-section'>
                    <div className='payment-title'><h3>Delivery Address</h3></div>
                    <div className='payment-address'>
                        <p>{user && user.email}</p>
                        <p>House no. 230 Near Botnical Garden</p>
                        <p>Lucknow, India</p>
                    </div>
                </div>
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className='payment-items'>
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
                </div>
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment-details'>
                        <form onSubmit={handleSubmit}>
                            <div className='payment-container'>
                            {/* {error && <p className='invalid'>Card details are invalid</p>} */}
                            <NumberFormat 
                                renderText={(value) =>(
                                    <>
                                        <h3>Order Total: {value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'₹'} 
                            />
                            <button disabled={processing || disabled || succeeded}><span>{processing ? <p>Processing</p> : 'Buy Now'}</span></button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Payment