import { fetchSearchData } from "../apis/api.js";
export const onclick=(id)=>{
    return({
        type:'ONCLICK',
        payload:id
    })
}
export const auto=(items)=>{
    return({
        type:'AUTO',
        payload:items
    })
}
export const search=(data)=>{
    return(dispatch)=>fetchSearchData(data).then(
        (response)=>response.json()
    ).then((json)=>{
        dispatch({type:'AUTO',payload:json.items})
    })
}