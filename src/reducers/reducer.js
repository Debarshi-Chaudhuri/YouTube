const initialState={
    video:[],
    status:false,
    curr:{}
}
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'AUTO':return{
            ...state,
            video:action.payload
        }
        case 'ONCLICK':return{
            ...state,
            status:true,
            curr:action.payload
        }
        default:return state;
    }
}