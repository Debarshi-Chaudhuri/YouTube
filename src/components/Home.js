import React,{Component} from 'react';
import {Searchbar} from './Searchbar.js';
import { Homepage_List } from '../containers/Homepage_List';
import {bindActionCreators} from 'redux';
import { VideoPlayer } from "../containers/VideoPlayer.js";
import { connect } from "react-redux";
import {onclick,auto,search} from '../actions/action.js';
import { fetchHomeData } from "../apis/api.js";
const mapStateToProps=(store)=>{
    return({
        video:store.video,
        status:store.status,
        curr:store.curr
    })
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        onclick,auto,search
    },dispatch)
}
class Home extends Component{
    componentDidMount(){
        fetchHomeData().then((response)=>response.json()).then(
            (json)=>{
                console.log(json);
                this.props.auto(json.items);
            }
        )
    }
    render(){
        window.scrollTo(0,0)
        return(
            <div>
                <div>
                    <Searchbar search={this.props.search}/>
                </div>
                <div style={{display:'flex'}} >
                    {
                        this.props.status && <VideoPlayer curr={this.props.curr} />
                    }
                    <div >
                        <Homepage_List video={this.props.video} onclick={this.props.onclick} status={this.props.status} />
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);