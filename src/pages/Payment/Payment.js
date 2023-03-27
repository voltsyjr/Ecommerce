import React, {useState,useEffect} from 'react'
import Header from '../../Components/Header/Header'
import './Payment.css'
import { useDispatch, useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import CheckoutProduct from '../../Components/CheckoutProduct/CheckoutProduct';
import {getBasketTotal} from '../../utils/BasketTotal'
import {useNavigate, Link} from 'react-router-dom'
import {db} from '../../utils/firebase'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from '../../utils/axios';
const Payment = () => {
    const {basket, user}=useSelector(state=>state.data);
    let navigate=useNavigate();

    let dispatch=useDispatch();
    // const [succeeded, setSucceeded]=useState(false);
    // const [processing, setProcessing]=useState('');
    // const [error, setError]=useState(null);
    // const [disabled, setDisabled]=useState(true);
    // const [clientSecret, setClientSecret]=useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    useEffect(()=>{
        const getClientSecret= async ()=>{
            const response=await axios({
                method:"POST",
                url:`/payments/create?total=${getBasketTotal(basket)*100}`,
            })
            setClientSecret(response.data.clientSecret);
            console.log("post get client secret=  ",response.data.clientSecret)
        }
        getClientSecret();
    },[basket]);
    const handleSubmit= async (e)=>{
        e.preventDefault();
        setProcessing(true);
        console.log("client Secret= ",clientSecret)
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement),
            }
        }).then(({paymentIntent})=>{
            console.log("paymentintent=");
            console.log(paymentIntent);
            if(paymentIntent){
                db.collection("users").doc(user && user.uid).collection("orders").doc(paymentIntent.id).set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created,
                })
                setSucceeded(true);
                setError(false);
                setProcessing(false);
                navigate('/orders');
            }else{
                setSucceeded(false);
                setError(true);
                setProcessing(false);
            }
        })
    }




    const handleChange=(e)=>{
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
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
                            <CardElement onChange={handleChange} />  {/*this gives card deyails to enter element */}
                            <div className='payment-container'>
                            {error && <p className='invalid'>Card details are invalid</p>}
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
                                prefix={'$'} 
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