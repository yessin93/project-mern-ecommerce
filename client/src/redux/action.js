import { GET_PRODUCTS, GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS, GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "./actionTypes"
import axios from "axios"

export const registerUser = (newUser) => async(dispatch)=> {
    dispatch({
        type:REGISTER

    })
    try {
        const {data}= await axios.post('/user/register',newUser);
        dispatch({
            type:REGISTER_SUCCESS,
            payload:data
        });
        
    } catch (error) {
        dispatch({
        type:REGISTER_FAIL,
        payload: error.response.data,
        });
    }
    
}

export const loginUser = (user) => async(dispatch)=> {
    dispatch({
        type:LOGIN
    })
    try {
        const {data} = await axios.post("/user/login", user);
        localStorage.setItem('token',data.token)
        dispatch({
            type:LOGIN_SUCCESS,
            payload:data,
        })
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload: error.response.data,
            });
        
    }
}


export const getProfile =() =>async(dispatch)=>{
    const token = localStorage.getItem('token');
    const config = {
        headers:{
            Authorization:token

        }
    }
    dispatch({
        type:GET_PROFILE
    })
    try {
        const {data} = await axios.get('/user/auth', config);
        dispatch({
            type:GET_PROFILE_SUCCESS,
            payload: data,

        })
    } catch (error) {
        dispatch({
            type:GET_PROFILE_FAIL,
            payload: error.response.data,
            }); 
    }
};

export const getProducts = ()=>async(dispatch)=>{
    dispatch({
        type:GET_PRODUCTS

    })
    try {
        const {data}= await axios.get('/product/get_all')
        dispatch({
            type:GET_PRODUCTS_SUCCESS,
            payload:data,

        })
    } catch (error) {
        dispatch({
            type:GET_PRODUCTS_FAIL,
            payload:error.response.data,
        })
        
    }
}