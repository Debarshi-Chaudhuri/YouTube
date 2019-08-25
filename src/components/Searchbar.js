import React,{useState} from 'react';
import '../App.css'
import icon from '../icon.svg'
import { Button } from "@material-ui/core";
export const Searchbar=(props)=>{
    const [text,setState]=useState('');
    const change=(event)=>{
        setState({text:event.target.value})
    }
    
    return(
        <div className='search' >
            <h3>Youtube</h3>
            <input type='text' style={{borderRadius:'5px',borderWidth:'1px',textIndent:'8px'}}  onChange={change} placeholder='Search' value={text} />
            <Button  variant='contained' style={{backgroundColor:'rgba(233, 233, 233, 0.966)',marginLeft:'4px',color:'white'}} onClick={()=>{
                props.search(text);
                setState({text:''})
            }}><img src={icon} style={{color:'white'}} /></Button>
        </div>
    )
    
}