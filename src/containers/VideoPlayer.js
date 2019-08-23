import React,{useState} from "react";
import '../App.css'
export const VideoPlayer=(props)=>{
    var id=props.curr.id;
    if(typeof(props.curr.id)!='string')
    id=props.curr.id.videoId
    const vidSrc=`https://www.youtube.com/embed/${id}`
    const [status,setStatus]=useState(false)
    console.log(id)
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