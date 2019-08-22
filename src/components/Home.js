import React,{Component} from 'react';
import Searchbar from './Searchbar.js';
import { Homepage_List } from '../containers/Homepage_List';
import {bindActionCreators} from 'redux';
import { VideoPlayer } from "../containers/VideoPlayer.js";
import { connect } from "react-redux";
import {onclick,auto} from '../actions/action.js';
const mapStateToProps=(store)=>{
    return({
        video:store.video,
        status:store.status,
        curr:store.curr
    })
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        onclick,auto
    },dispatch)
}
class Home extends Component{
    componentDidMount(){
        fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=15&key=AIzaSyBjhFK9MovixovHfXxDM3RUHST7ClMAFNY').then((response)=>response.json()).then(
            (json)=>{
                console.log(json);
                this.props.auto(json.items);
            }
        )
    }
    render(){
        return(
            <div>
                <div>
                    <Searchbar click={this.props.click}/>
                </div>
                {
                    this.props.status && <VideoPlayer curr={this.props.curr} />
                }
                <div>
                    <Homepage_List video={this.props.video} onclick={this.props.onclick} />
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);