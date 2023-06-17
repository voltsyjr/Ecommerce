import react from 'react'
import { useDispatch } from 'react-redux'
import './CheckoutProduct.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { removeFromBasket } from '../../redux/action';
import star from '../../items/star.png'
const CheckoutProduct=({id,title,image,rating,price,hideButton})=>{
    let dispatch=useDispatch();
    const removeIttemFromBasket=()=>{
        dispatch(removeFromBasket(id));
    }
    return (
        <>
        <div className='checkout-product'>
        
            <img src={image} alt='' className='checkout-product-image' />
            <div className='checkout-product-info'>
                <p className='checkout-product-title'>{title}</p>
                <p className='checkout-product-price'><strong>₹</strong>
                    <strong>{price}</strong>
                </p>
                <div className='checkout-product-rating'>
                    {Array(rating).fill().map((_,index)=>(
                        <p key={index}><img src={star} alt="" /></p>
                    ))}
                </div>
                {!hideButton && (
                <button onClick={removeIttemFromBasket}><i> <ShoppingCartOutlinedIcon /> </i> Remove From Basket</button>
                )}
            </div>
        </div>
        </>
    )
}

export default CheckoutProduct