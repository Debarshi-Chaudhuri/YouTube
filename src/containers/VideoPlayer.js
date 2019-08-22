import React,{useState} from "react";
import '../App.css'
export const VideoPlayer=(props)=>{
    const vidSrc=`https://www.youtube.com/embed/${props.curr.id}`
    const [status,setStatus]=useState(false)
    console.log(props.curr)
    return(
        <div className='video'>
            <iframe  width="740" height="400" src={vidSrc} frameBorder='0' allowFullScreen></iframe>    
            <div >
                <h2 >{props.curr.snippet.title}</h2>
                <h4 onClick={()=>setStatus(!status)} style={{cursor:'pointer',fontWeight:'500'}}>Description</h4>
                {
                    status &&
                    <div>
                        <p style={{fontSize:'14px',fontWeight:'lighter'}}>{props.curr.snippet.description}</p>
                    </div>
                }
            </div>
        </div>
    )
}