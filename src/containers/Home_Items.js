import React from 'react';
import '../App.css'
export const Home_Items=(props)=>{
    return(
    <div className='items'>
        <img src={props.thumbnails.high.url} className='image' onClick={()=>props.onclick(props.video)} />
        <p className='title' onClick={()=>props.onclick(props.video)} >{props.title} </p>
    </div>
    )
}