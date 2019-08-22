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