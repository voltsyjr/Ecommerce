import React from 'react'
import './Order.css'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import NumberFormat from 'react-number-format';
 const Order = ({order}) => {
  return (
    <div className='order'>
        <h2>Order</h2>
        <p>{order.data.created}</p>
        <p className='order-id'>
            <small>{order.id}</small>
        </p>
        {order.data.basket?.map((item)=>(
            <CheckoutProduct 
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hideButton
            />
        ))}

        <NumberFormat 
                renderText={(value) =>(
                    <><h3 className='order-total'>Order Total: {value} </h3>
                    </>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₹'} 
            />
    </div>
  )
}
export default  Order;