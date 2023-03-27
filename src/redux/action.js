import * as types from "./actionType"
import {auth} from "../utils/firebase"


export const addToBasket=(item)=>({
    type:types.ADD_TO_BASKET,
    payload:item
})
export const removeFromBasket=(id)=>({
    type:types.REMOVE_FROM_BASKET,
    payload:id
})
const registerStart=()=>({
    type:types.REGISTER_START,
})
const registerSuccess=(user)=>({
    type:types.REGISTER_SUCCESS,
    payload:user,
})
const registerError = (error) =>({
    type:types.REGISTER_FAIL,
    payload:error,
})



const loginStart=()=>({
    type:types.LOGIN_START,
})
const loginSuccess=(user)=>({
    type:types.LOGIN_SUCCESS,
    payload:user,
})
const loginError = (error) =>({
    type:types.LOGIN_FAIL,
    payload:error,
})

export const setuser=(user)=>({
    type:types.SET_USER,
    payload:user
})

const logoutStart=()=>({
    type:types.LOGOUT_START,
})
const logoutSuccess=(user)=>({
    type:types.LOGOUT_SUCCESS,
})
const logoutError = (error) =>({
    type:types.LOGOUT_FAIL,
    payload:error,
})

export const registerInitiate = (email,password)=>{
    return function(dispatch){
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(email, password).then(({user})=>{
            dispatch(registerSuccess(user));
        }).catch((error)=>dispatch(registerError(error.message)));
    }
}


export const loginInitiate = (email,password)=>{
    return function(dispatch){
        dispatch(loginStart());
        auth.signInWithEmailAndPassword(email, password).then(({user})=>{
            dispatch(loginSuccess(user));
        }).catch((error)=>dispatch(loginError(error.message)));
    }
}

export const logOutInitiate = ()=>{
    return function(dispatch){
        dispatch(logoutStart());
        auth.signOut().then((resp)=>{
            dispatch(logoutSuccess());
        }).catch(error=>{
            dispatch(logoutError(error.message))
        })
    }
}