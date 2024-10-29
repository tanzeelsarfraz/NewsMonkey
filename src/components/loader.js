import { Component } from "react";
import img from './loader.gif'
export default class Loader extends Component{
    render(){
        return(
            <img src = {img}></img>
        );

    }
}