import React,{Component} from 'react';
import '../App.css'
import icon from '../icon.svg'
import { Button } from "@material-ui/core";
class Searchbar extends Component{
    constructor(props){
        super(props)
        this.state={text:''}
    }
    change=(event)=>{
        this.setState({text:event.target.value})
    }
    render(){
        return(
            <div className='search' >
                <h3>Youtube</h3>
                <input type='text' style={{borderRadius:'5px',borderWidth:'1px',textIndent:'8px'}}  onChange={this.change} placeholder='Search' value={this.state.text} />
                <Button  variant='contained' style={{backgroundColor:'rgba(233, 233, 233, 0.966)',marginLeft:'4px',color:'white'}} onClick={()=>{
                    this.props.search(this.state.text);
                    this.setState({text:''})
                }}><img src={icon} style={{color:'white'}} /></Button>
            </div>
        )
    }
}
export default Searchbar;