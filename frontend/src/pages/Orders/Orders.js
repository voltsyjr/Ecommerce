import React, {useEffect,useState} from 'react'
import "./Orders.css"
import {db} from "../../utils/firebase"
import Order from "../../Components/Order/Order";
import { useSelector } from 'react-redux';
import Header from '../../Components/Header/Header';
const Orders = () => {
    const {user}=useSelector(state=>state.data);
    const [orders, setOrders]=useState([]);
    const [orderPresent,setOrderPresent]=useState(false);
    useEffect(()=>{
        console.log("t")
        if(user){
            db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .orderBy("created","desc")
            .onSnapshot((snapshot)=>{setOrders(
                snapshot.docs.map((doc)=>({
                    id:doc.id,
                    data: doc.data(),
                }))
            )
            setOrderPresent(true)
        });
        }else{
            setOrders([])
            console.log("yes")
            setOrderPresent(false)
        }
    },[user]); 
  return (
    <>
        <Header />
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className='orders-order'>
            {!orderPresent && <h2>You have not Ordered anything yet 😭</h2>}
                {
                    orders && orders.map((order,index)=><Order order={order} key={index} />)
                }
            </div>
        </div>
    </>
  )
}

export default Orders