import React from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import './SubTotal.css'
import {getBasketTotal} from '../../utils/BasketTotal'
import NumberFormat from 'react-number-format';
const SubTotal=()=>{
    const { basket, user } = useSelector((state)=>state.data);
    let navigate=useNavigate()
    const handleCheckout=()=>{
        if(user){
            navigate('/payment');
        }else{
            navigate('/login');
        }
    }
    return (
        <div className='subtotal'>
            <NumberFormat 
                renderText={(value) =>(
                    <>
                        <p>
                            SubTotal ({basket?.length} items) : <strong>{value}</strong>
                        </p>
                        <small className='subtotal-gift'>
                            <input type='checkbox' />
                            This orders contain a gift
                        </small>
                    </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'} 
            />
            <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal;