import React from 'react';
import '../App.css'
export const Home_Items=(props)=>{
    if(props.status)
    var styles={
        container:{
            display:'grid'
        }
    }
    else
    var styles={
        container:{
            display:'inline-flex'
        }
    }
    return(
    <div className='items' style={styles.container}>
        <img src={props.thumbnails.medium.url} className='image' onClick={()=>props.onclick(props.video)} />
        <p className='title' onClick={()=>props.onclick(props.video)} >{props.title} </p>
    </div>
    )
}