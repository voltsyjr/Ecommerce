import React from 'react'
import Header from '../../Components/Header/Header'
import {useParams} from "react-router-dom"
import { products } from '../../utils/ProductsData'
import ShoppingCartOutLinedIcon from "@material-ui/icons/ShoppingCartOutlined"
import { useDispatch } from 'react-redux'
import "./SingleProduct.css"
import { addToBasket } from '../../redux/action'
const SingleProduct = () => {
    let {id} = useParams();
    let singleProduct=products.find((item)=>item.id===id);
    let dispatch=useDispatch()
    const addItemToBasket=()=>{
        const item = {
            id:singleProduct.id,
            rating:singleProduct.rating,
            title:singleProduct.title,
            price:singleProduct.price,
            image:singleProduct.image,
            specification:singleProduct.specification,
            details:singleProduct.detail,
        }
        dispatch(addToBasket(item));
    }
  return (
    <>
        <Header />
        <div className='single-product-container'>
            <img className='single-product-ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt='' />
            <div>
                <div className='single-product'>
                    <img src={singleProduct.image} className='single-product-image' alt=''/>
                    <div className='single-Product-info'>
                        <div className='single-product-title'>
                            {singleProduct.title}
                        </div>
                        <div className='single-Product-rating'>
                            {Array(singleProduct.rating).fill().map((_, index)=>(<p key={index}>⭐</p>))}
                        </div>
                        <p className='single-product-price'>
                            Price: <strong>$</strong>
                            <strong>{singleProduct.price}</strong>
                        </p>
                        <div className='single-product-specification'>
                            <h4>Specification</h4>
                            {singleProduct.specification && singleProduct.specification.map((item,index)=>(
                                <li key={index}>{item}</li>
                            ))}
                        </div>
                        <div className='single-product-description'>
                            <h4>Product Description</h4>
                            <p>{singleProduct.detail}</p>
                        </div>
                        <button onClick={addItemToBasket}>
                            <i><ShoppingCartOutLinedIcon /></i> Add To Basket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleProduct