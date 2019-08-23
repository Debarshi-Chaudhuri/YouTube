import React,{Component} from 'react';
import '../App.css'
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
                <input type='text' onChange={this.change} placeholder='Search' value={this.state.text} />
                <button onClick={()=>{
                    this.props.search(this.state.text);
                    this.setState({text:''})
                }}>Search</button>
            </div>
        )
    }
}
export default Searchbar;