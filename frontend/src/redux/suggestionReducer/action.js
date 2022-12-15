import axios from "axios"
import * as types from "./actionType"

const getData=()=>(dispatch)=>{
    dispatch({type:types.SUGGESTION_DATA_REQUEST})
    return axios.get("fakestoreapi.com/products").then((r)=>{
        dispatch({type:types.SUGGESTION_DATA_SUCCESS,payload:r})
    }).catch((e)=>{
        dispatch({type:types.SUGGESTION_DATA_FAILURE,payload:e})
    })
}

export {getData}