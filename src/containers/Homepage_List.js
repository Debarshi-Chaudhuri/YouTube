import React from 'react'
import { Home_Items } from "./Home_Items";
export const Homepage_List=(props)=>{
    return(<div>{
        props.video.map(
            (video)=>{
                return(<Home_Items title={video.snippet.title} thumbnails={video.snippet.thumbnails} onclick={props.onclick} video={video} status={props.status} />)
            }
        )
    }</div>)
}