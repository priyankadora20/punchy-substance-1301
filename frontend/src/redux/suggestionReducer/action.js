import axios from "axios"
import * as types from "./actionType"

const getData=(q)=>(dispatch)=>{
    dispatch({type:types.SUGGESTION_DATA_REQUEST})
    return axios.get(`https://wild-tan-puffer-veil.cyclic.app/products`).then((r)=>{
        dispatch({type:types.SUGGESTION_DATA_SUCCESS,payload:r.data})
    }).catch((e)=>{
        dispatch({type:types.SUGGESTION_DATA_FAILURE,payload:e})
    })
}

const queryData=(q)=>(dispatch)=>{
    return axios.get("")
}

export {getData}